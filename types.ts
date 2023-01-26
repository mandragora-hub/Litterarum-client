export type MediaType = 'book' | 'collection' | 'author'

export interface QueryItem {
  type: MediaType
  title: string
  query: string
}

export interface PageResult<T> {
  page: number
  results: T[]
  total_pages: number
  total_results: number
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
  basename: string
  downloaded: number
  author: Author
  tags: Tag[]
}
