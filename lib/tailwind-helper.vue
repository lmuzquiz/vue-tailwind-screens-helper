<template>
  <div
    v-if="forceDisplay ? true : isDevEnv"
    class="fixed flex justify-around helper screen-label"
    :class="[
      toggle ? 'bg-gray-800 bg-opacity-80' : 'bg-gray-600 bg-opacity-50',
      sneak
        ? 'bottom-0 left-0 p-2 rounded-tr-sm'
        : 'bottom-4 left-4 rounded-lg p-4',
    ]"
    @click="toggle = !toggle"
  >
    <div v-if="toggle">
      <div v-if="!sneak">
        <div class="flex sm:hidden">xs</div>
        <div class="hidden sm:flex md:hidden">sm</div>
        <div class="hidden md:flex lg:hidden">md</div>
        <div class="hidden lg:flex xl:hidden">lg</div>
        <div class="hidden xl:flex 2xl:hidden">xl</div>
        <div class="hidden 2xl:flex 3xl:hidden">2xl</div>
        <div class="hidden 3xl:flex 4xl:hidden">3xl</div>
        <div class="hidden 4xl:flex 5xl:hidden">4xl</div>
        <div class="hidden 5xl:flex 6xl:hidden">5xl</div>
        <div class="hidden 6xl:flex 7xl:hidden">6xl</div>
        <div class="hidden 7xl:flex">7xl</div>

        <div
          class="flex mx-auto my-auto text-sm"
          style="width: max-content"
          v-if="pixels"
        >
          {{ screenWidth }} px
        </div>
      </div>
      <div v-else class="flex text-lg">
        <div class="flex sm:hidden">xs</div>
        <div class="hidden sm:flex md:hidden">sm</div>
        <div class="hidden md:flex lg:hidden">md</div>
        <div class="justify-around hidden lg:flex xl:hidden">lg</div>
        <div class="hidden xl:flex 2xl:hidden">xl</div>
        <div class="hidden 2xl:flex 3xl:hidden">2xl</div>
        <div class="hidden 3xl:flex 4xl:hidden">3xl</div>
        <div class="hidden 4xl:flex 5xl:hidden">4xl</div>
        <div class="hidden 5xl:flex 6xl:hidden">5xl</div>
        <div class="hidden 6xl:flex 7xl:hidden">6xl</div>
        <div class="hidden 7xl:flex">7xl</div>

        <div
          class="flex mx-auto my-auto ml-2 text-sm"
          style="width: max-content"
          v-if="pixels"
        >
          {{ screenWidth }} px
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icon from './icon.vue'
export default {
  name: 'TailwindHelper',
  props: {
    sneak: {
      type: Boolean,
      default: false,
    },
    pixels: {
      type: Boolean,
      default: true,
    },
    forceDisplay: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isDevEnv: process.env.NODE_ENV === 'development',
      toggle: true,
      screenWidth: 0,
    }
  },
  components: {
    icon,
  },
  mounted() {
    this.$nextTick(function () {
      this.onResize()
    })
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      // if (process.client) {
      let width = window.innerWidth
      this.screenWidth = width
      // }
    },
  },
}
</script>

<style lang="postcss" scoped>
.helper {
  z-index: 1000;
  @apply text-white font-bold text-xl uppercase transition-colors duration-300 shadow-md cursor-pointer;
}
.helper:hover {
  @apply bg-opacity-100;
}
.bottom-4 {
  bottom: 1rem;
}
.left-4 {
  left: 1rem;
}
</style>
