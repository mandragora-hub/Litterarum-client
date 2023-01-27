<script lang="ts" setup>
import { capitalize } from '~/utils/str'
const { t } = useLang()
const item = {
  coverUrl: null,
  title: 'd',
  author: {
    name: 'sldjfsdf',
  },
}

// compiler macro
definePageMeta({
  layout: 'dashboard',
})
useHead(() => ({
  title: capitalize(t('pages.post.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.post.description'),
    },
  ],
}))
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle text="[BOOK_TITLE]" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <div class="flex flex-row justify-between">
          <div
            class="block rounded-lg bg-gray-400 aspect-[10/16] transition duration-400 hover:scale-105 hover:z-10"
          >
            <NuxtImg
              v-if="item.coverUrl"
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
          <div class="">dsf</div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
