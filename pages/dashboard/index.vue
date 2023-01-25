<script lang="ts" setup>
import { QUERY_LIST } from '~/constants/lists'

// const route = useRoute()
// const type = $computed(() => route.params.type as MediaType || 'movie')

const queries = $computed(() => [QUERY_LIST.book[0], QUERY_LIST.author[0]])

definePageMeta({
  layout: 'dashboard',
})
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.dashboard.index.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia autem
          debitis ab dolorum tempore placeat possimus perferendis porro sit aut
          nobis quasi hic consequuntur, atque impedit nihil totam illo odit?
        </p>
      </PageSection>
      <PageSection>
        <div v-for="i in 2" :key="i" class="text-6xl uppercase">
          {{ $t('pages.blank.just_blank_page_with_title') }}
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
