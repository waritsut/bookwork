<template>
  <div>
    <h2>DELETE SUCCESS</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import bookService from '@/modules/books/serviecs/book.service'
import Book from '@/modules/books/models/book'

   @Component({})
export default class BookDetail extends Vue {
  private async deleteBook (bookId: string) {
    await bookService.delete(bookId)
  }
  private mounted () {
    this.deleteBook(this.$route.params.id)
  }
}
</script>
