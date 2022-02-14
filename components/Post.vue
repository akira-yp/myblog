<template>
  <NuxtLink
    :to="{ name: 'blogs-slug', params: { slug: post.fields.slug } }"
    class="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative"
  >
    <img
    :src="post.fields.image.fields.file.url"
    loading="lazy" alt="Photo by Minh Pham" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
    >
    <div class="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

    <div class="relative p-4 mt-auto">
      <span class="block text-gray-200 text-sm">{{ post.sys.createdAt }}</span>
      <span
        v-for="tag in post.metadata.tags"
        :key="tag.sys.id"
        class="inline-block text-gray-200 text-xs md:text-sm border border-gray-500 rounded-lg backdrop-blur relative px-2 md:px-3 py-1 mr-3 mb-3"
      >
        {{ tag.sys.id }}
      </span>
      <h2 class="text-white text-xl font-semibold transition duration-100 mb-2">{{ post.fields.title }}</h2>

      <span class="text-indigo-300 font-semibold">Read more</span>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: ['post']
}
</script>
