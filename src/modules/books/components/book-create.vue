<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <form @submit="formSubmit">
                        <strong>Title:</strong>
                        <input type="text" class="form-control" v-model="book.title">
                        <strong>Description:</strong>
                        <textarea class="form-control" v-model="book.description"></textarea>
                        <button class="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import bookService from '@/modules/books/services/book.service'
import Book from '@/modules/books/models/book'

@Component({})
export default class BookCreate extends Vue {
    private book: Book = {
      isbn: '',
      title: '',
      author: '',
      imageUrl: '',
      tagline: '',
      description: ''
    }

    private async formSubmit () {
      const res = await bookService.create(this.book)
    }
}
</script>
