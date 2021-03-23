<template>
  <div class="container">
    <navbar></navbar>
    <Nuxt />
    <footer class="footer">
      <div class="content has-text-centered has-text-grey-light">
        <p>Hatchling - WOW Guides</p>
        <p class="is-size-7">by LsV</p>
      </div>
    </footer>
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
