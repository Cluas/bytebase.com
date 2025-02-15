<template>
  <div class>
    <div class="relative">
      <div
        class="relative max-w-2xl mx-auto px-4 py-8 text-center sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <h2
          class="mt-2 text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight"
        >
          <span
            class="text-4xl sm:text-5xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-700"
            >Safer and Faster</span
          ><br />
          <span class="block xl:inline">
            Database change and version control for DBAs and Developers
          </span>
        </h2>
      </div>

      <h2 class="sr-only">Plans</h2>

      <!-- Cards -->
      <div
        class="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0"
      >
        <!-- Decorative background -->
        <div
          aria-hidden="true"
          class="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-white ring-2 ring-indigo-700 rounded-lg lg:block"
        />

        <div class="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
          <div
            v-for="plan in plans"
            :key="plan.title"
            :class="[
              'bg-white',
              plan.featured
                ? 'ring-2 ring-indigo-700 shadow-md'
                : 'lg:bg-transparent',
              'pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12',
            ]"
          >
            <div>
              <div class="flex items-center h-7">
                <h2
                  class="text-indigo-600 text-sm font-semibold uppercase tracking-wide"
                >
                  {{ plan.title }}
                </h2>
                <span
                  v-if="plan.label"
                  class="ml-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-sm bg-indigo-100 text-indigo-800"
                  >{{ plan.label }}</span
                >
              </div>
              <img
                :src="
                  require(`~/assets/plans/plan-${plan.title.toLowerCase()}.webp`)
                "
                class="hidden lg:block w-2/3 m-auto"
              />

              <div class="flex flex-col items-center">
                <div class="flex flex-col items-center h-28">
                  <div class="mt-3 flex items-baseline">
                    <p class="text-4xl font-extrabold tracking-tight">
                      ${{ plan.pricePerInstancePerMonth }}
                    </p>
                    <p class="text-xl">&nbsp;/&nbsp;month</p>
                  </div>
                  <p class="text-gray-400">Per instance</p>
                  <p class="text-gray-400">{{ plan.priceDescription }}</p>
                </div>
                <NuxtLink
                  v-if="plan.type == 0"
                  to="/docs/install/install-with-docker"
                  class="ring-2 ring-indigo-600 mt-6 w-full inline-block py-4 px-2 rounded-md shadow-sm text-center text-sm lg:text-base xl:text-xl font-medium"
                  >{{ plan.buttonText }}</NuxtLink
                >
                <button
                  v-else
                  :class="[
                    plan.featured
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 border border-transparent'
                      : 'ring-2 ring-indigo-600',
                    'mt-6 w-full inline-block py-4 px-2 rounded-md shadow-sm text-center text-sm lg:text-base xl:text-xl font-medium',
                  ]"
                  @click="onTeamOrEnterpriseButtonClick(plan)"
                >
                  {{ plan.buttonText }}
                </button>
              </div>
            </div>
            <h4 class="sr-only">Features</h4>
            <ul
              role="list"
              class="border-gray-200 divide-gray-200 mt-7 border-t divide-y lg:border-t-0"
            >
              <li
                v-for="(feature, index) in plan.mainFeatures"
                :key="index"
                class="py-3 flex items-center"
              >
                <CheckIcon
                  class="text-indigo-500 w-5 h-5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span class="text-gray-600 ml-3 text-sm font-medium">{{
                  feature
                }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 py-12 text-center text-gray-400">
        You can upgrade, downgrade, or
        <NuxtLink to="/refund" class="underline">cancel</NuxtLink>&nbsp;your
        subscription anytime. No hidden charges.
      </div>
    </div>

    <!-- Feature comparison (up to lg) -->
    <section aria-labelledby="mobile-comparison-heading" class="lg:hidden">
      <h2 id="mobile-comparison-heading" class="sr-only">Feature comparison</h2>

      <div class="max-w-2xl mx-auto py-16 px-4 space-y-16 sm:px-6">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          class="border-t border-gray-200"
        >
          <div
            :class="[
              plan.featured ? 'border-indigo-600' : 'border-transparent',
              '-mt-px pt-6 border-t-2 sm:w-1/2 m-auto',
            ]"
          >
            <h3
              :class="[
                plan.featured ? 'text-indigo-600' : 'text-gray-900',
                'text-sm font-bold',
              ]"
            >
              {{ plan.title }}
            </h3>
            <p class="mt-2 text-sm text-gray-500">{{ plan.description }}</p>
            <NuxtLink
              v-if="plan.type == 0"
              to="/docs/install/install-with-docker"
              class="ring-2 ring-indigo-600 mt-6 w-full inline-block py-2 px-2 rounded-md shadow-sm text-center text-sm font-medium"
              >{{ plan.buttonText }}</NuxtLink
            >
            <button
              v-else
              :class="[
                plan.featured
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 border border-transparent'
                  : 'ring-2 ring-indigo-600',
                'mt-6 w-full inline-block py-2 px-2 rounded-md shadow-sm text-center text-sm font-medium',
              ]"
              @click="onTeamOrEnterpriseButtonClick(plan)"
            >
              {{ plan.buttonText }}
            </button>
          </div>

          <div v-for="section in sections" :key="section.title">
            <h4 class="mt-10 text-sm font-bold text-gray-900">
              {{ section.title }}
            </h4>

            <div class="mt-6 relative">
              <!-- Fake card background -->
              <div
                aria-hidden="true"
                class="hidden absolute inset-0 pointer-events-none sm:block"
              >
                <div
                  :class="[
                    plan.featured ? 'shadow-md' : 'shadow',
                    'absolute right-0 w-1/2 h-full bg-white rounded-lg',
                  ]"
                />
              </div>

              <div
                :class="[
                  plan.featured
                    ? 'ring-2 ring-indigo-600 shadow-md'
                    : 'ring-1 ring-black ring-opacity-5 shadow',
                  'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none',
                ]"
              >
                <dl class="divide-y divide-gray-200">
                  <div
                    v-for="feature in section.features"
                    :key="feature.title"
                    class="py-3 flex items-center justify-between sm:grid sm:grid-cols-2"
                  >
                    <dt class="pr-4 text-sm font-medium text-gray-600">
                      {{ feature.title }}
                    </dt>
                    <dd
                      class="flex items-center justify-end sm:px-4 sm:justify-center"
                    >
                      <span
                        v-if="typeof feature.tiers[index].value === 'string'"
                        :class="[
                          feature.tiers[index].featured
                            ? 'text-indigo-600'
                            : 'text-gray-900',
                          'text-sm font-medium',
                        ]"
                        >{{ feature.tiers[index].value }}</span
                      >
                      <template v-else>
                        <CheckIcon
                          v-if="feature.tiers[index].value === true"
                          class="mx-auto h-5 w-5 text-indigo-600"
                          aria-hidden="true"
                        />
                        <XIcon
                          v-else
                          class="mx-auto h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span class="sr-only">
                          {{
                            feature.tiers[index].value === true ? "Yes" : "No"
                          }}
                        </span>
                      </template>
                    </dd>
                  </div>
                </dl>
              </div>

              <!-- Fake card border -->
              <div
                aria-hidden="true"
                class="hidden absolute inset-0 pointer-events-none sm:block"
              >
                <div
                  :class="[
                    plan.featured
                      ? 'ring-2 ring-indigo-600'
                      : 'ring-1 ring-black ring-opacity-5',
                    'absolute right-0 w-1/2 h-full rounded-lg',
                  ]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature comparison (lg+) -->
    <section aria-labelledby="comparison-heading" class="hidden lg:block">
      <h2 id="comparison-heading" class="sr-only">Feature comparison</h2>

      <div class="max-w-7xl mx-auto px-8">
        <div class="w-full border-t border-gray-200 flex items-stretch">
          <div class="-mt-px w-1/4 py-6 pr-4 flex items-end"></div>
          <div
            v-for="(plan, planIdx) in plans"
            :key="plan.title"
            aria-hidden="true"
            :class="[
              planIdx === plans.length - 1 ? '' : 'pr-4',
              '-mt-px pl-4 w-1/4',
            ]"
          >
            <div
              :class="[
                plan.featured ? 'border-indigo-600' : 'border-transparent',
                'py-6 border-t-2',
              ]"
            >
              <div class="flex items-center h-7">
                <p
                  :class="[
                    plan.featured ? 'text-indigo-600' : 'text-gray-900',
                    'text-sm font-bold',
                  ]"
                >
                  {{ plan.title }}
                </p>
                <span
                  v-if="plan.label"
                  class="ml-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-sm bg-indigo-100 text-indigo-800"
                  >{{ plan.label }}</span
                >
              </div>
              <p class="mt-2 text-sm text-gray-500 h-10">
                {{ plan.description }}
              </p>
              <NuxtLink
                v-if="plan.type == 0"
                to="/docs/install/install-with-docker"
                class="ring-2 ring-indigo-600 mt-6 w-full inline-block py-4 px-2 rounded-md shadow-sm text-center text-sm font-medium"
                >{{ plan.buttonText }}</NuxtLink
              >
              <button
                v-else
                :class="[
                  plan.featured
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 border border-transparent'
                    : 'ring-2 ring-indigo-600',
                  'mt-6 w-full inline-block py-4 px-2 rounded-md shadow-sm text-center text-sm font-medium',
                ]"
                @click="onTeamOrEnterpriseButtonClick(plan)"
              >
                {{ plan.buttonText }}
              </button>
            </div>
          </div>
        </div>

        <div v-for="section in sections" :key="section.title">
          <h3 class="text-xl font-bold text-gray-900 text-left my-5">
            {{ section.title }}
          </h3>
          <div class="relative">
            <!-- Fake card backgrounds -->
            <div
              class="absolute inset-0 flex items-stretch pointer-events-none"
              aria-hidden="true"
            >
              <div class="w-1/4 pr-4" />
              <div class="w-1/4 px-4">
                <div class="w-full h-full bg-white rounded-lg" />
              </div>
              <div class="w-1/4 px-4">
                <div class="w-full h-full bg-white rounded-lg" />
              </div>
              <div class="w-1/4 pl-4">
                <div class="w-full h-full bg-white rounded-lg" />
              </div>
            </div>

            <table class="relative w-full">
              <caption class="sr-only">
                Business feature comparison
              </caption>
              <thead>
                <tr class="text-left">
                  <th scope="col">
                    <span class="sr-only">{{ section.title }}</span>
                  </th>
                  <th v-for="plan in plans" :key="plan.title" scope="col">
                    <span class="sr-only">{{ plan.title }} plan</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr v-for="feature in section.features" :key="feature.title">
                  <th
                    scope="row"
                    class="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600"
                  >
                    {{ feature.title }}
                  </th>
                  <td
                    v-for="(tier, tierIdx) in feature.tiers"
                    :key="tierIdx"
                    :class="[
                      tierIdx === feature.tiers.length - 1 ? 'pl-4' : 'px-4',
                      tier.featured ? 'text-indigo-600' : 'text-gray-900',
                      'relative w-1/4 py-0 text-center',
                    ]"
                  >
                    <span class="w-full h-full py-3 flex justify-center">
                      <span
                        v-if="typeof tier.value === 'string'"
                        :class="['text-sm font-medium']"
                        >{{ tier.value }}</span
                      >
                      <template v-else>
                        <CheckIcon
                          v-if="tier.value === true"
                          class="mx-auto h-5 w-5"
                          aria-hidden="true"
                        />
                        <XIcon
                          v-else
                          class="mx-auto h-5 w-5"
                          aria-hidden="true"
                        />
                        <span class="sr-only">
                          {{ tier.value === true ? "Yes" : "No" }}
                        </span>
                      </template>
                      <span v-if="tier.tooltip" class="tooltip-wrapper ml-1">
                        <QuestinIcon class="h-5 w-5" />
                        <!-- class="h-5 w-5" -->
                        <span class="tooltip whitespace-nowrap">{{
                          tier.tooltip
                        }}</span>
                      </span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="flex">
          <div class="w-1/4 pr-4"></div>
          <div
            v-for="(plan, planIndex) in plans"
            :key="plan.title"
            :class="[
              planIndex === plans.length - 1 ? 'pl-4' : 'px-4',
              'relative w-1/4 py-0 text-center',
            ]"
          >
            <NuxtLink
              v-if="plan.type == 0"
              to="/docs/install/install-with-docker"
              class="ring-2 ring-indigo-600 mt-6 w-full inline-block py-4 px-2 rounded-md shadow-sm text-center text-sm font-medium"
              >{{ plan.buttonText }}</NuxtLink
            >
            <button
              v-else
              :class="[
                plan.featured
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 border border-transparent'
                  : 'ring-2 ring-indigo-600',
                'mt-6 w-full inline-block py-4 px-2 rounded-md shadow-sm text-center text-sm font-medium',
              ]"
              @click="onTeamOrEnterpriseButtonClick(plan)"
            >
              {{ plan.buttonText }}
            </button>
          </div>
        </div>
      </div>
    </section>
    <div class="max-w-7xl mx-auto px-4 py-4 pb-24 text-right text-gray-400">
      You can upgrade, downgrade, or
      <NuxtLink to="/refund" class="underline">cancel</NuxtLink>&nbsp; your
      subscription anytime. No hidden charges.
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch } from "@nuxtjs/composition-api";
import { Plan, PlanType, FEATURE_SECTIONS, PLANS } from "../../common/plan";
import XIcon from "../../components/XIcon.vue";
import CheckIcon from "../../components/CheckIcon.vue";
import QuestinIcon from "../../components/QuestinIcon.vue";
import { PAGE, PRICING_EVENT, useSegment } from "../../plugin/segment";

interface LocalPlan extends Plan {
  featured: boolean;
  buttonText: string;
}

interface LocalFeature {
  title: string;
  tiers: {
    value: boolean | string;
    featured?: boolean;
    tooltip?: string;
  }[];
}

interface LocalFeatureSection {
  title: string;
  features: LocalFeature[];
}

export default defineComponent({
  components: {
    CheckIcon,
    QuestinIcon,
    XIcon,
  },
  setup() {
    const getButtonText = (plan: Plan): string => {
      if (plan.type === PlanType.FREE) return "Deploy now";
      if (plan.type === PlanType.ENTERPRISE) return "Contact us";
      if (plan.trialDays && plan.trialPrice) {
        return `Start trial with $${plan.trialPrice} for ${plan.trialDays} days`;
      }
      return "Subscribe now";
    };

    const plans: LocalPlan[] = PLANS.map((plan) => ({
      ...plan,
      featured: plan.type === PlanType.TEAM,
      buttonText: getButtonText(plan),
      unitPrice:
        plan.type === PlanType.ENTERPRISE
          ? "Contact us"
          : `$${plan.unitPrice}/year`,
    }));
    const sections: LocalFeatureSection[] = FEATURE_SECTIONS.map((section) => {
      return {
        title: section.id,
        features: section.features.map((feature) => ({
          title: feature,
          tiers: plans.map((p) => {
            const supportFeature = p.features.find(
              (planFeature) => planFeature.id === feature
            );
            const value = supportFeature
              ? supportFeature.content || true
              : false;
            return {
              value,
              featured: p.featured,
              tooltip: supportFeature?.tooltip,
            };
          }),
        })),
      };
    });

    const analytics = computed(() => useSegment().analytics);
    watch(
      () => analytics.value,
      (segment) => {
        segment?.page(PAGE.PRICING);
      }
    );

    const onTeamOrEnterpriseButtonClick = (plan: Plan) => {
      if (plan.type === PlanType.TEAM) {
        analytics.value?.track(PRICING_EVENT.TEAM_PLAN_CLICK);
        window.open(
          `https://hub.bytebase.com/pricing?plan=team&source=${PAGE.PRICING}`,
          "__blank"
        );
      } else if (plan.type === PlanType.ENTERPRISE) {
        analytics.value?.track(PRICING_EVENT.ENTERPRISE_PLAN_CLICK);
        window.open(
          "mailto:support@bytebase.com?subject=Request for enterprise plan"
        );
      }
    };

    return {
      plans,
      sections,
      onTeamOrEnterpriseButtonClick,
    };
  },
  head() {
    return {
      title: "Bytebase Pricing",
      meta: [
        {
          hid: "Bytebase Pricing",
          name: "Bytebase Pricing",
          content:
            "Free to start. Paid plan available. Cancel anytime. No hidden charges.",
        },
      ],
    };
  },
});
</script>

<style scoped>
.tooltip-wrapper {
  @apply relative;
}

.tooltip {
  @apply invisible absolute -mt-8 ml-2 px-2 py-1 rounded bg-black bg-opacity-75 text-white;
}

.tooltip-wrapper:hover .tooltip {
  @apply visible z-50;
}
</style>
