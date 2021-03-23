<!--suppress JSUnresolvedVariable, JSUnusedLocalSymbols -->
<template>
  <b-navbar v-if="!isLoading">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="~/assets/logo.png" alt="Hatchling" />
      </b-navbar-item>
    </template>
    <template #start>
      <dungeons></dungeons>
      <raid></raid>
    </template>
  </b-navbar>
  <b-loading v-else></b-loading>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Dungeons from '~/components/Navbar/Dungeons.vue'
import Raid from '~/components/Navbar/Raid.vue'

@Component({
  components: {
    Dungeons,
    Raid,
  },
})
export default class Navbar extends Vue {}
</script>
