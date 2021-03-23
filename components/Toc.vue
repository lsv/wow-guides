<template>
  <ul class="toc">
    <li v-for="toc of tocs" :key="toc.id" :class="`toc${toc.depth}`">
      <nuxt-link :to="`#${toc.id}`" v-text="toc.text"></nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import TocSub from '~/components/Toc.vue'

@Component({
  components: {
    TocSub,
  },
})
export default class Toc extends Vue {
  @Prop() readonly tocs!: []
}
</script>
