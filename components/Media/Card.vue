<script setup lang="ts">
// import type { Media, MediaType } from '~/types'

// defineProps<{
//   type: MediaType
//   item: Media
// }>()
const item = ref({
  media_type: 'MediaType',
  id: 'sadf',
  poster_path: null,
  title: 'Title',
  author: { name: 'Author Name' },
  vote_average: 3,
})
const type = 'sadf'
</script>

<template>
  <NuxtLink
    :to="`/${item.media_type || type}/${item.id}`"
    class="w-full h-full p-2"
  >
    <div
      class="block rounded-lg bg-gray-400 aspect-[10/16] transition duration-400 hover:scale-105 hover:z-10"
    >
      <NuxtImg
        v-if="item.poster_path"
        width="400"
        height="600"
        format="webp"
        src="https://singlecolorimage.com/get/888a85/100x100"
        :alt="item.title || item.author.name"
        class="w-full h-full object-cover"
      />
      <div v-else class="h-full opacity-10 flex">
        <IconMdi:rabbit class="m-auto text-4xl" />
      </div>
    </div>
    <div class="text-left mt-2">
      <h5>{{ item.title }}</h5>
      <p class="text-gray-600">
        {{ item.author.name }}
      </p>
    </div>
    <div class="flex text-sm gap-2 items-center">
      <StarsRate class="w-20" :value="item.vote_average" />
      <div class="opacity-60">
        {{ item.vote_average }}
      </div>
    </div>
  </NuxtLink>
</template>
