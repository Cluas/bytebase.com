<template>
  <div v-if="post" class="space-y-8">
    <div class="hidden sm:flex sm:h-96 w-full">
      <img
        v-if="post.feature_image"
        class="w-full h-auto object-scale-down"
        :src="post.feature_image"
        :alt="post.feature_image_alt"
      />
    </div>
    <div class="prose prose-xl md:prose-2xl mx-auto px-4">
      <div
        v-for="(tag, tagIndex) in post.tags"
        :key="tagIndex"
        class="mb-4 inline-flex"
      >
        <span
          v-if="getTagStyle(tag.name)"
          class="items-center px-3 py-0.5 mr-2 rounded-full text-base font-medium"
          :class="getTagStyle(tag.name)"
        >
          {{ tag.name }}
        </span>
      </div>
      <h1>{{ post.title }}</h1>
    </div>
    <span
      class="flex flex-row px-2 items-center justify-center block text-base text-gray-900 font-semibold tracking-wide uppercase"
    >
      <img
        class="h-10 w-10 rounded-full mr-2"
        :src="post.authors[0].profile_image"
        alt=""
      />{{ post.authors[0].name }}
      <div class="ml-2 flex space-x-1 text-gray-500">
        <time :datetime="post.published_at">
          {{
            new Date(post.published_at).toLocaleString("default", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
          }}
        </time>
        <span aria-hidden="true"> &middot; </span>
        <span> {{ post.reading_time }} min read </span>
      </div></span
    >
    <div
      class="prose prose-indigo prose-xl md:prose-2xl mx-auto px-4"
      v-html="post.html"
    ></div>
  </div>
</template>

<script lang="ts">
import { PostTag, postTagStyle } from "../../../common/type";
import { getSinglePost } from "../../../api/posts";

export default {
  layout: "blog",
  async asyncData({ params }: any) {
    const post = await getSinglePost(params.slug);
    return { post: post };
  },
  head() {
    const post = (this as any).post;

    return {
      title: post.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: post.excerpt,
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "og:title",
          name: "og:title",
          content: post.title,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: post.excerpt,
        },
        {
          hid: "og:image",
          name: "og:image",
          content: post.feature_image,
        },
      ],
    };
  },
  methods: {
    getTagStyle(tag: PostTag): string {
      return postTagStyle(tag);
    },
  },
};
</script>
