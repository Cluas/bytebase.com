<template>
  <div>
    <div class="flex justify-end mb-8 gap-x-5">
      <ActionButton
        v-if="ruleChanged"
        :class-names="['bg-white hover:bg-gray-200']"
        @click="$emit('reset')"
      >
        Reset
      </ActionButton>
      <ActionButton
        :class-names="[
          'text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-700',
        ]"
        @click="downConfiguration"
      >
        Download as image
      </ActionButton>
    </div>
    <div class="lg:grid lg:grid-cols-6 lg:gap-x-8">
      <aside class="hidden mt-2 lg:block lg:col-span-2 p-5">
        <div class="space-y-6 mb-6 pb-6 border-b border-gray-300">
          <h1 class="text-left text-2xl font-semibold">Filter</h1>
          <div class="space-y-2">
            <div
              v-for="(filter, index) in state.filterOptionList"
              :key="index"
              class="flex items-center"
            >
              <input
                type="checkbox"
                :id="filter.id"
                :value="filter.id"
                v-model="filter.checked"
                class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
              />
              <label
                :for="filter.id"
                class="ml-3 items-center text-sm text-gray-600"
              >
                {{ filter.name }}
                <span
                  class="ml-1 items-center px-2 py-0.5 rounded-full bg-gray-200 text-gray-800"
                >
                  {{ filterItemCount(filter) }}
                </span>
              </label>
            </div>
          </div>
        </div>
        <div class="space-y-6">
          <h1 class="text-left text-2xl font-semibold">Rules</h1>
          <fieldset v-for="(category, index) in categoryList" :key="index">
            <div class="block text-sm font-medium text-gray-900">
              {{ category.name }}
            </div>
            <div
              v-for="(rule, ruleIndex) in category.ruleList"
              :key="ruleIndex"
              class="pt-2 flex items-center text-sm group"
            >
              <a
                :href="`#${rule.id.replace(/\./g, '-')}`"
                class="text-gray-600 hover:underline cursor-pointer"
              >
                {{ rule.id }}
              </a>
            </div>
          </fieldset>
        </div>
      </aside>
      <SchemaSystemPreview
        id="preview"
        :title="title"
        :categoryList="categoryList"
        class="lg:col-span-4 p-5"
        @select="(rule) => onRuleSelect(rule)"
      />
    </div>
    <Modal
      :open="state.openConfigModal && !!state.selectedRule"
      :title="state.selectedRule ? state.selectedRule.id : ''"
      @close="state.openConfigModal = false"
    >
      <SchemaRuleConfig
        v-if="state.selectedRule"
        :rule="state.selectedRule"
        @level-change="(level) => onLevelChange(level)"
        @payload-change="(val) => onPayloadChange(val)"
      />
    </Modal>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  nextTick,
  computed,
} from "@nuxtjs/composition-api";
import domtoimage from "dom-to-image";
import SchemaSystemPreview from "./SchemaSystemPreview.vue";
import ActionButton from "../ActionButton.vue";
import {
  levelList,
  RulePayload,
  RuleLevel,
  SelectedRule,
  RuleCategory,
  CategoryType,
  DatabaseType,
} from "../../common/schemaSystem";
import Modal from "../Modal.vue";
import SchemaRuleConfig from "./SchemaRuleConfig.vue";

interface FilterItem {
  id: string;
  name: string;
  type: "database" | "level";
  checked: boolean;
}

interface LocalState {
  openConfigModal: boolean;
  selectedRule?: SelectedRule;
  filterOptionList: FilterItem[];
}

const baseFilterOptionList: FilterItem[] = levelList.map((l) => ({
  id: l.id,
  name: l.name,
  type: "level",
  checked: false,
}));

const filterOptionList: FilterItem[] = [
  {
    id: "common",
    name: "Common",
    type: "database",
    checked: false,
  },
  {
    id: "mysql",
    name: "MySQL",
    type: "database",
    checked: false,
  },
  ...baseFilterOptionList,
];

const categoryOrder: Map<CategoryType, number> = new Map([
  ["engine", 5],
  ["naming", 4],
  ["query", 3],
  ["table", 2],
  ["column", 1],
]);

export default defineComponent({
  components: {
    Modal,
    ActionButton,
    SchemaRuleConfig,
    SchemaSystemPreview,
  },
  props: {
    selectedRuleList: {
      required: true,
      type: Array as PropType<SelectedRule[]>,
    },
    title: {
      required: true,
      type: String,
    },
    ruleChanged: {
      required: true,
      type: Boolean,
    },
  },
  emits: ["change", "reset"],
  setup(props, { emit }) {
    const state = reactive<LocalState>({
      openConfigModal: false,
      filterOptionList,
    });

    const isFilteredRule = (rule: SelectedRule): boolean => {
      if (state.filterOptionList.every((f) => !f.checked)) {
        return true;
      }

      return state.filterOptionList.some((filter) => {
        return (
          (filter.type === "level" &&
            rule.level === filter.id &&
            filter.checked) ||
          (filter.type === "database" &&
            filter.checked &&
            rule.database.includes(filter.id as DatabaseType))
        );
      });
    };

    const categoryList = computed((): RuleCategory[] => {
      const dict = props.selectedRuleList.reduce((dict, rule) => {
        if (!isFilteredRule(rule)) {
          return dict;
        }

        if (!dict[rule.category]) {
          const id = rule.category.toLowerCase();
          const name = `${id[0].toUpperCase()}${id.slice(1)}`;
          dict[rule.category] = {
            id: rule.category,
            name,
            ruleList: [],
          };
        }
        dict[rule.category].ruleList.push(rule);
        return dict;
      }, {} as { [key: string]: RuleCategory });

      return Object.values(dict).sort(
        (c1, c2) =>
          (categoryOrder.get(c2.id) || 0) - (categoryOrder.get(c1.id) || 0)
      );
    });

    const filterItemCount = (filter: FilterItem) => {
      return props.selectedRuleList.filter((r) => {
        return (
          (filter.type === "level" && filter.id === r.level) ||
          (filter.type === "database" &&
            r.database.includes(filter.id as DatabaseType))
        );
      }).length;
    };

    const onRuleSelect = (rule: SelectedRule) => {
      state.selectedRule = rule;
      state.openConfigModal = true;
    };

    const onPayloadChange = (data: { [val: string]: any }) => {
      if (!state.selectedRule || !state.selectedRule.payload) {
        return;
      }

      const newRule = {
        ...state.selectedRule,
        payload: Object.entries(state.selectedRule.payload).reduce(
          (dict, [key, val]) => {
            dict[key] = { ...val };
            dict[key].value = data[key];
            return dict;
          },
          {} as RulePayload
        ),
      };

      emit("change", newRule);
    };

    const onLevelChange = (level: RuleLevel) => {
      if (!state.selectedRule) {
        return;
      }
      emit("change", {
        ...state.selectedRule,
        level,
      });
    };

    const downConfiguration = () => {
      const node = document.getElementById("preview");
      if (!node) return;

      const element = document.getElementById("preview-hidden");
      if (element) {
        element.style.display = "flex";
      }

      nextTick(() =>
        domtoimage
          .toPng(node, { bgcolor: "#fff" })
          .then((dataUrl) => {
            var link = document.createElement("a");
            link.download = `${props.title}.png`;
            link.href = dataUrl;
            link.click();
          })
          .finally(() => {
            if (element) {
              element.style.removeProperty("display");
            }
          })
      );
    };

    return {
      state,
      categoryList,
      filterItemCount,
      onRuleSelect,
      onPayloadChange,
      onLevelChange,
      downConfiguration,
    };
  },
});
</script>
