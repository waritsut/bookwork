<template>
<div class="row">
    <div class="col-md-3 p-2">
        <div class="mt-4">
            <router-link :to="{name: 'book-edit', params:{id: book.id | 0} }">Edit Detail</router-link>
        </div>
    </div>
    <div class="col-md-9">
        <div class="col p-4 d-flex flex-column position-static">
            <h4>{{ book.title }}</h4>
            <div>
                <strong>ISBN</strong>: {{ book.isbn }}
            </div>
             <div>
                <strong>Author</strong>: {{ book.author }}
            </div>
            <p class="card-text mt-2 mb-auto desc-pre-line">
                <strong>Tagline</strong>: <br>{{ book.tagline }}
            </p>
            <p class="card-text mt-2 mb-auto desc-pre-line">
                <strong>Description</strong>: <br>{{ book.description }}
            </p>
              <router-link :to="{name: 'book-delete', params:{id: book.id | 0} }">DELETE</router-link>
        </div>
    </div>
</div>
</template>

<script lang="ts">

import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import bookService from '../services/book.service'
import Book from '../models/book'

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
