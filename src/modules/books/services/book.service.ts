import http from '@/services/http.service'
import Book from '@/modules/books/models/book'

const bookService = {
  async getList () {
    return http.get(`/books`)
  },

  async getItem (id: string) {
    return http.get(`/books/${id}`)
  },

  async create (book: Book) {
    return http.post(`/books`, book)
  },

  async update (id: number, book: Book) {
    return http.put(`/books/${id}`, book)
  },

  async delete (id:string) {
    return http.delete(`/books/${id}`)
  }
}
export default bookService
