<template>
  <article>
    <section class="hero is-small is-primary">
      <div class="hero-body">
        <h1 class="title">Hellooooo</h1>
        <h2 class="subtitle">and welcome to these guides...</h2>
      </div>
    </section>

    <section class="section is-large has-text-centered">
      <h1>Hatchling - WOW Guides</h1>
      <h2>Just some guides with the most important stuff</h2>
      <p><img src="~/assets/logo.png" alt="Hatchling" /></p>
      <p>
        For better and more deep guides, go to
        <a href="https://wowhead.com">wowhead.com</a>
      </p>
    </section>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {}
</script>
