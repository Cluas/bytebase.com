<template>
  <div class="page-wrapper absolute w-full h-screen overflow-hidden">
    <div class="w-full bg-white z-20" :class="stickyHeaderAdditionClass">
      <MainBanner class="mb-2" />
      <TheHeader />
      <div
        class="max-w-full w-full mx-auto text-base px-4 sm:px-6 pb-2 pt-2 lg:pb-4 flex flex-wrap sm:grid sm:grid-flow-col justify-start lg:justify-center sm:space-x-4 lg:space-x-8"
      >
        <NuxtLink to="/" class="nav-link">
          <span>Home</span>
        </NuxtLink>
        <NuxtLink to="/database-glossary" class="nav-link">
          <span>Database Glossary</span>
        </NuxtLink>
        <NuxtLink to="/database-review-guide" class="nav-link">
          <span>Database Review Guide</span>
        </NuxtLink>
        <NuxtLink to="/brand" class="nav-link">
          <span>Brand</span>
        </NuxtLink>
      </div>
    </div>
    <div
      ref="contentElementRef"
      class="w-full pt-8 h-auto overflow-y-auto overflow-x-hidden"
    >
      <Nuxt />
      <TheFooter />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  useRoute,
  watch,
} from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const route = useRoute();
    const contentElementRef = ref<HTMLDivElement>();
    const stickyHeaderAdditionClass = ref<string>();

    onMounted(() => {
      if (contentElementRef.value) {
        contentElementRef.value.addEventListener("scroll", () => {
          const scrollTop = contentElementRef.value?.scrollTop as number;
          if (scrollTop > 0) {
            stickyHeaderAdditionClass.value = "shadow";
          } else {
            stickyHeaderAdditionClass.value = "";
          }
        });
      }
    });

    watch(route, () => {
      contentElementRef.value?.scrollTo({
        top: 0,
      });
    });

    return {
      contentElementRef,
      stickyHeaderAdditionClass,
    };
  },
});
</script>

<style scoped>
.page-wrapper {
  @apply grid;
  grid-template-rows:
    minmax(min-content, max-content)
    auto;
}

.nav-link {
  @apply text-base leading-8 text-gray-700 no-underline whitespace-nowrap hover:text-gray-500 mr-4 sm:mr-0;
}
</style>
