<template>
  <div>
    <div class="bg-white w-full sticky top-0 h-10 flex sm:justify-between">
      <nav class="hidden sm:flex items-center gap-10 h-full px-2">
          <nuxt-link
          v-for="(link, index) in links"
          :key="index"
          :to="link.path" class="">{{ link.name }}</nuxt-link>
      </nav>
      <div class="h-full flex items-center px-2 z-30 sm:hidden">
        <button @click="toggleDrower" class="">menu</button>
      </div>
    </div>

    <aside class="transform top-0 right-0 w-60 h-screen sm:hidden fixed ease-in-out transition-all duration-300 z-30 bg-dark m-0" :class="isOpen ? 'translate-x-0' : 'translate-x-full'">
      <div class="flex items-center justify-center h-full">
        <nav class="flex flex-col">
          <div
          v-for="(link, index) in links"
          :key="index"
          @mouseover="activeItem = index"
          @mouseout="activeItem = ''"
          class="rounded-xl px-4 py-1 my-1"
          :class="activeItem === index ? 'bg-white' : 'bg-dark'"
          >
            <i :class="[link.icon, activeItem === index ? 'text-dark' : 'text-white']"></i>
            <nuxt-link
            :to="link.path"
            :class="[activeItem === index ? 'text-dark' : 'text-white']">
            {{ link.name }}
            </nuxt-link>
          </div>
        </nav>
      </div>
    </aside>
    <div class="fixed top-0 left-0 h-screen w-screen z-20 bg-opacity-50 bg-white"
    :class="isOpen ? 'block' : 'hidden'"
    @click="toggleDrower"></div>
  </div>
</template>

<script>
export default {
  name: 'GlobalNavi',
  data () {
    return {
      links: [
        { name: "HOME",
          path: "/",
          icon: "fa-solid fa-house-chimney"
        },
        { name: "BLOG",
          path: "/blogs",
          icon: "fa-solid fa-cube"
        }
      ],
      isOpen: true,
      activeItem: ""
    }
  },
  watch: {
    '$route'() {
      this.isOpen = false
    }
  },
  methods: {
    toggleDrower () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
