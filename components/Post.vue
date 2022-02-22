<template>
  <NuxtLink
    :to="{ name: 'blogs-slug', params: { slug: post.fields.slug } }"
    class="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-xl shadow overflow-hidden relative"
  >
    <img
    :src="post.fields.image.fields.file.url"
    loading="lazy" alt="article image" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
    >
    <div class="bg-gradient-to-t from-black md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

    <div class="relative p-4 mt-auto">
      <span class="block text-white text-xs">{{ post.sys.createdAt }}</span>
      <span
        v-for="tag in post.metadata.tags"
        :key="tag.sys.id"
        class="inline-block text-white text-xs border border-white rounded-xl backdrop-blur relative px-2 py-1 mr-2 mb-2"
      >
        {{ tag.sys.id }}
      </span>
      <h2 class="text-white text-xl font-semibold transition duration-100 mb-2">{{ post.fields.title }}</h2>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: ['post']
}
</script>
