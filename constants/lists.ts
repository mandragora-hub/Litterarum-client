import type { QueryItem } from '~/types'

export const QUERY_LIST = {
  book: <QueryItem[]>[
    { type: 'book', title: 'Trending Books', query: 'trending' },
    { type: 'book', title: 'Popular Books', query: 'popular' },
    { type: 'book', title: 'Top Rated Books', query: 'top_rated' },
    { type: 'book', title: 'Upcoming Books', query: 'upcoming' },
  ],
  author: <QueryItem[]>[
    { type: 'author', title: 'Popular Authors', query: 'popular' },
    { type: 'author', title: 'Top Rated Authors', query: 'top_rated' },
  ],
}
