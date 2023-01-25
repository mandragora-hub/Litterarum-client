<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'
import type { QueryItem } from '~/types'

defineProps<{
  query: QueryItem
}>()
// const item = await listMedia(query.type, query.query, 1)

const defaultSettings = {
  itemsToShow: 2,
  snapAlign: 'start',
}
const breakpoints = {
  700: {
    itemsToShow: 4,
    snapAlign: 'start',
  },
  1024: {
    itemsToShow: 5,
    snapAlign: 'start',
  },
}

const item = {
  results: [
    {
      id: 123,
    },
    {
      id: 124,
    },
    {
      id: 125,
    },
    {
      id: 126,
    },
    {
      id: 127,
    },
    {
      id: 128,
    },
    {
      id: 129,
    },
    {
      id: 130,
    },
  ],
}
</script>

<template>
  <CarouselBase>
    <template #title>
      {{ $t(query.title) }}
    </template>
    <template #more>
      <NuxtLink
        class="opacity-50 hover:(opacity-50 text-primary) transition"
        :to="`/${query.type}/category/${query.query}`"
      >
        {{ $t('Explore more') }}
      </NuxtLink>
    </template>
    <Carousel :settings="defaultSettings" :breakpoints="breakpoints">
      <Slide v-for="slide in 10" :key="slide">
        <MediaCard />
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </CarouselBase>
</template>
