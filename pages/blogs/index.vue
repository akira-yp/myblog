<template>
  <div>
    <h1>blog</h1>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8 m-5">
      <Post
        v-for="post in posts"
        :key="post.sys.id"
        :post="post"
      />
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post'

export default {
  components: {
    Post
  },
  async asyncData ({ $client, $dateFns }) {
    const entries = await $client.getEntries({ content_type: 'blog'})
    const posts = entries.items
    for (let i = 0; i < posts.length; i++) {
      posts[i].sys.createdAt = $dateFns.format(new Date(posts[i].sys.createdAt), 'yyyy/MM/dd')
    }
    return { posts }
  }
}
</script>
