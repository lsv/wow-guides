<template>
  <b-dropdown v-if="!isLoading" aria-role="list">
    <template #trigger="{ active }">
      <b-button
        label="Raids"
        type="is-primary"
        :icon-right="active ? 'menu-up' : 'menu-down'"
      >
      </b-button>
    </template>
    <template v-for="zone in raids">
      <b-dropdown-item :key="zone.title" custom>
        <h3 v-text="zone.title"></h3>
      </b-dropdown-item>

      <!--suppress JSUnusedLocalSymbols, JSUnresolvedVariable -->
      <b-dropdown-item
        v-for="raid in zone.raids"
        :key="raid.slug"
        has-link
        paddingless
      >
        <!--suppress JSUnresolvedVariable -->
        <nuxt-link
          :to="{ name: 'raid-slug', params: { slug: raid.slug } }"
          v-text="raid.title"
        ></nuxt-link>
      </b-dropdown-item>

      <hr :key="`h${zone.title}`" class="dropdown-divider" />
    </template>
  </b-dropdown>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

interface Raid {
  title: string
  path: string
  slug: string
  zone: string
}

interface Raids {
  title: string
  raids: Raid[]
}

@Component
export default class RaidC extends Vue {
  raids: Raids[] = []
  isLoading = true

  mounted() {
    this.$content('raid')
      .only(['title', 'slug', 'image', 'zone'])
      .sortBy('zone')
      .sortBy('killorder', 'asc')
      .fetch()
      .then((response: any) => {
        const zones: Raids[] = []
        response.forEach((raid: Raid) => {
          const index = zones.findIndex((z) => {
            return z.title === raid.zone
          })

          if (index === -1) {
            const zone = {
              title: raid.zone,
              raids: [raid],
            }
            zones.push(zone)
          } else {
            zones[index].raids.push(raid)
          }
        })
        this.raids = zones
      })
      .finally(() => {
        this.isLoading = false
      })
  }
}
</script>
