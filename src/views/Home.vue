<template>
  <div class="home">
    <booklist></booklist>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Booklist from '@/modules/books/components/book-list.vue'

export default {
  name: 'home',
  components: {
    Booklist
  }
}
</script>
