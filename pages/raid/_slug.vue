<template>
  <article v-if="document" class="container">
    <section class="hero is-small is-primary">
      <div class="hero-body">
        <h1 class="title" v-text="document.title"></h1>
        <h2 class="subtitle" v-text="document.zone"></h2>
      </div>
    </section>

    <div class="pagination">
      <b-button
        v-if="prev"
        type="is-primary is-light"
        size="is-small"
        tag="nuxt-link"
        :to="prev.slug"
        v-text="`← ${prev.title}`"
      ></b-button>
      <span v-else></span>
      <b-button
        v-if="next"
        type="is-primary is-light"
        size="is-small"
        tag="nuxt-link"
        :to="next.slug"
        v-text="`${next.title} →`"
      ></b-button>
      <span v-else></span>
    </div>

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
export default class RaidSlug extends Vue {
  isLoading = true
  slug!: string
  document: any = {}
  prev: any = ''
  next: any = ''

  loadPageData() {
    this.isLoading = true
    this.$content('raid')
      .only(['title', 'slug'])
      .sortBy('killorder', 'asc')
      .surround(this.slug)
      .fetch()
      .then((response: any) => {
        this.prev = response[0]
        this.next = response[1]
      })

    this.$content('raid', this.slug)
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
