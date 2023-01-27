export type MediaType = 'books' | 'collections' | 'authors'
export interface QueryItem {
  type: MediaType
  title: string
  query: string
}

export interface MetaPageResult {
  totalPages: number
  currentPage: number
  count: number
}
export interface PageResult<T> {
  data: T[]
  meta: MetaPageResult
}

export interface Tag {
  _id: string
  name: string
}

export interface Author {
  _id: string
  name: string
  alias: string
  photoUrl: string
}

export interface Book {
  _id: string
  title: string
  coverUrl: string
  basename: string
  downloaded: number
  author: Author
  tags: Tag[]
}
