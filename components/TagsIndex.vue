<template>
  <div class="flex flex-col justify-center items-center">
    <div>
      <h1 class="text-center">ここにタグを表示</h1>
    </div>
    <div class="bg-white m-5 p-5 w-250 border rounded-xl">
      <span
      v-for="(tag, index) in tags"
      :key="index"
      class="py-1 px-4 m-2 rounded-xl border text-dark">
      {{ tag }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TagsIndex',
  async asyncData({ $client }) {
    await $client.getTags()
      .then(response => console.log(response.items))
      .catch(console.error)
  },
  data () {
    return {
      tags: ['tag1', 'tag2', 'tag3']
    }
  },
  mounted () {
    console.log("debugger is starting")
  }
}
</script>
