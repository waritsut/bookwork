<template>
  <div class="container">
          <h3>BOOKS</h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">title</th>
        </tr>
      </thead>
      <tbody><tr v-for="books in book" v-bind:key="books.id">
          <th scope="row">{{books.id}}</th>
          <td><router-link :to="{name: 'book-detail',params:{id: books.id}}">{{books.title}}</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { Component } from 'vue-property-decorator'
import bookService from '@/modules/books/services/book.service'
import Book from '@/modules/books/models/book'

    @Component({})
export default class BookDetail extends Vue {
        private book: Book = {
          isbn: '',
          title: '',
          author: '',
          imageUrl: '',
          tagline: '',
          description: ''
        };

        private async getBook (bookId: string) {
          try {
            const res = await bookService.getList()
            this.book = res.data
          } catch (err) {
            console.error(err)
          }
        }

        private mounted () {
          this.getBook(this.$route.params.id)
        }
}

</script>

<style lang="scss" scoped>

</style>
