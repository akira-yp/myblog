<template>
  <div>
    <div>
      <div class="max-w-screen-sm mx-auto my-5">
        <img
        :src="post.fields.image.fields.file.url"
        alt=""
        class="object-cover w-full h-72 sm:rounded-xl">
      </div>
    </div>
    <div>
      <div class="p-3 max-w-screen-sm mx-auto">
        <h1 class="text-blog-text">{{ post.fields.title }}</h1>
        <p class="text-blog-subtext text-xs">
          {{ post.sys.createdAt }}
        </p>
        <span
        v-for="tag in post.metadata.tags"
        :key="tag.sys.id"
        class="inline-block text-blog-subtext bg-white text-xs md:text-sm rounded-xl backdrop-blur relative px-2 md:px-4 py-1 mr-3 mb-3"
        >
        {{ tag.sys.id }}
        </span>
      </div>
    </div>
    <br>
    <div class="max-w-screen-sm px-4 py-4 md:px-8 mx-auto bg-white sm:rounded-xl">

      <br>
      <div v-html="$md.render(post.fields.content)">
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from '@/plugins/prism'
export default {
  async asyncData({ $client, $dateFns, params }) {
    const post = await $client.getEntries({
      'content_type': 'blog',
      'fields.slug': params.slug
      })
      .then(entries => {
        entries.items[0].sys.createdAt = $dateFns.format(new Date(entries.items[0].sys.createdAt), 'yyyy/MM/dd')
        return entries.items[0]
      })
    return { post }
  },
  mounted() {
    Prism.highlightAll()
  }
}
</script>

<style lang="scss" scoped>
  h3 {
    color: #eee;
  }
  ::v-deep p {
    line-height: 2rem;
    color: #555;
  }
  ::v-deep pre {
    border-radius: 1rem;
    code {
      font-size: 0.8rem;
    }
  }
  code {
    font-size: 0.8rem;
  }
  ::v-deep .table-of-contents {
    background: #eee;
    padding: 1rem;
    border-radius: 1rem;
    li {
      color:#555;
    }
  }

</style>
