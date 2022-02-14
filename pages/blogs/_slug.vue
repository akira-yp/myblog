<template>
  <div>
    <h1>{{ post.fields.title }}</h1>
    <div>
      <img :src="post.fields.image.fields.file.url" alt="">
    </div>
    <div>
      <p>
        {{ post.sys.createdAt }}
      </p>
    </div>
    <div>
      {{ post.fields.content }}
    </div>
    <div>
    </div>
  </div>
</template>

<script>
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
    }
  }
</script>
