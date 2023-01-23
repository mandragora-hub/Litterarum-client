export type MediaType = 'book' | 'author'

export interface QueryItem {
  type: MediaType
  title: string
  query: string
}
