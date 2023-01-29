<script lang="ts" setup>
import { QUERY_LIST } from '~/constants/lists'
import { capitalize } from '~/utils/str'
import MdiBookOpenPageVariantOutline from '~icons/mdi/book-open-page-variant-outline'
import MdiCalendarMultiselectOutline from '~icons/mdi/calendar-multiselect-outline'
import MdiTranslate from '~icons/mdi/translate'
import MdiFile from '~icons/mdi/file'
import MdiIdCard from '~icons/mdi/id-card'
const { t } = useLang()

const queries = $computed(() => [QUERY_LIST.book[0]])

const route = useRoute()
const bookId = route.params.id as string
const { getBook } = useLitterarumApi()
const book = await getBook(bookId)

const highlight = [
  {
    name: 'others.pages',
    icon: MdiBookOpenPageVariantOutline,
    value: '123',
  },
  {
    name: 'others.publication_date',
    icon: MdiCalendarMultiselectOutline,
    value: 'value',
  },
  {
    name: 'others.language',
    icon: MdiTranslate,
    value: 'espanol',
  },
  {
    name: 'others.file',
    icon: MdiFile,
    value: 'PDF / Epub',
  },
  {
    name: 'others.isbn',
    icon: MdiIdCard,
    value: '81273871-821',
  },
]
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
      <Breadcrumb />
    </PageHeader>
    <PageBody>
      <PageSection>
        <div class="flex flex-col lg:flex-row">
          <div
            class="w-full h-64 mr-10 rounded-lg bg-gray-400 aspect-[10/16] transition duration-400 hover:scale-105 hover:z-10"
          >
            <NuxtImg
              v-if="book.data.coverUrl"
              width="400"
              height="600"
              format="webp"
              src="https://singlecolorimage.com/get/888a85/100x100"
              :alt="book.data.title || book.data.author.name"
              class="w-full h-full object-cover"
            />
            <div v-else class="h-full opacity-10 flex">
              <IconMdi:rabbit class="m-auto text-4xl" />
            </div>
          </div>
          <div class="">
            <header class="">
              <h1 class="text-2xl font-bold capitalize">
                {{ book.data.title }}
                <span v-if="book.data.subtitle" class="text-lg font-light">{{
                  book.data.subtitle
                }}</span>
              </h1>
              <p class="uppercase">por {{ book.data.author.name }}</p>
            </header>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe,
              temporibus, harum impedit fugit magni provident dignissimos rem
              perferendis porro facere eius, autem magnam tenetur sed
              consequatur! Omnis molestias ullam aliquid! temporibus, harum
              impedit fugit magni provident dignissimos rem perferendis porro
              facere eius, autem magnam tenetur sed consequatur! Omnis molestias
              ullam aliquid! Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Saepe,
            </p>
            <div class="grid grid-rows-2 lg:grid-cols-2 my-4 lg:divide-x">
              <div class="lg:px-10 first:pl-0">
                <Button
                  text="Download PDF"
                  size="md"
                  class="font-extrabold capitalize"
                />
              </div>
              <div class="lg:px-10 last:pr-0 grid grid-cols-3 gap-4">
                <div
                  v-for="i of highlight"
                  :key="i.name"
                  class="grid place-items-center text-sm p-4 gap-2 rounded-lg border border-gray-900/10 dark:border-gray-50/[0.2]"
                >
                  <div class="font-light text-center capitalize text-slate-500">
                    {{ $t(i.name) }}
                  </div>
                  <component :is="i.icon" />
                  <span class="font-bold capitalize">{{ i.value }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
      <PageSection>
        <CarouselAutoQuery
          v-for="query of queries"
          :key="query.type + query.query"
          :query="query"
        />
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
