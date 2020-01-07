<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6">
                <div class="card">
                    <div class="card-body">
                            <h4>{{ book.title }}</h4>
                                <h4>{{ book.description }}</h4>
                        <strong>Title:</strong>
                        <input type="text" class="form-control" v-model="book.title" v-model.trim="book.title">
                        <strong>Description:</strong>
                        <textarea class="form-control" v-model="book.description" v-model.trim="book.description"></textarea>
                        <button  @click="formSubmit(book.id)" class="btn btn-success">Submit</button>
                        <pre>
                        </pre>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-6">
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import bookService from '@/modules/books/services/book.service'
import Book from '@/modules/books/models/book'
import axios from 'axios'

@Component({})
export default class BookEdit extends Vue {
        private book: Book = {
          isbn: '',
          title: '',
          author: '',
          imageUrl: '',
          tagline: '',
          description: ''
        };

        private async formSubmit (bookId: number) {
          const res = await bookService.update(bookId, this.book)
        }

        private async getBook (bookId: string) {
          try {
            const res = await bookService.getItem(bookId)
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
