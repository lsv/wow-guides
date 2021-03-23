<template>
  <div class="container">
    <navbar></navbar>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Navbar from '~/components/Navbar/Navbar.vue'

@Component({
  components: {
    Navbar,
  },
})
export default class layout extends Vue {}
</script>
