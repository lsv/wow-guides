<template>
  <article v-if="document" class="container">
    <section class="hero is-small is-primary">
      <div class="hero-body">
        <h1 class="title" v-text="document.title"></h1>
        <h2 class="subtitle" v-text="document.zone"></h2>
      </div>
    </section>
    <section class="toc">
      <toc :tocs="document.toc"></toc>
    </section>
    <nuxt-content :document="document"></nuxt-content>
  </article>
  <b-loading v-else v-model="isLoading" is-full-page></b-loading>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'
import Toc from '~/components/Toc.vue'

@Component({
  components: {
    Toc,
  },
  asyncData({ params }) {
    const slug = params.slug
    return { slug }
  },
})
export default class DungeonSlug extends Vue {
  isLoading = true
  slug!: string
  document: any = {}

  head() {
    return {
      script: [
        {
          innerHTML:
            'const whTooltips = {colorLinks: true, iconizeLinks: false, renameLinks: true};',
          type: 'text/javascript',
          charset: 'utf-8',
        },
        {
          src: 'https://wow.zamimg.com/widgets/power.js',
          defer: true,
        },
      ],
    }
  }

  loadPageData() {
    this.isLoading = true
    this.$content('dungeon', this.slug)
      .fetch()
      .then((response) => {
        this.document = response
      })
      .finally(() => {
        this.isLoading = false
      })
  }

  mounted() {
    this.loadPageData()
  }
}
</script>
