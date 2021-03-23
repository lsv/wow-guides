<template>
  <b-dropdown aria-role="list">
    <template #trigger="{ active }">
      <b-button
        label="Dungeons"
        type="is-primary"
        :icon-right="active ? 'menu-up' : 'menu-down'"
      >
      </b-button>
    </template>
    <template v-for="zone in zones">
      <b-dropdown-item :key="zone.title" custom>
        <h3 v-text="zone.title"></h3>
      </b-dropdown-item>

      <!--suppress JSUnusedLocalSymbols, JSUnresolvedVariable -->
      <b-dropdown-item
        v-for="dungeon in zone.dungeons"
        :key="dungeon.slug"
        has-link
        paddingless
      >
        <!--suppress JSUnresolvedVariable -->
        <nuxt-link :to="dungeon.path" v-text="dungeon.title"></nuxt-link>
      </b-dropdown-item>

      <hr :key="`h${zone.title}`" class="dropdown-divider" />
    </template>
  </b-dropdown>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

interface Dungeon {
  title: string
  path: string
  slug: string
  zone: string
}

interface Zone {
  title: string
  dungeons: Dungeon[]
}

@Component
export default class Dungeons extends Vue {
  zones: Zone[] = []

  mounted() {
    this.$content('dungeon')
      .only(['title', 'slug', 'image', 'zone'])
      .sortBy('zone')
      .sortBy('title')
      .fetch()
      .then((response: any) => {
        const zones: Zone[] = []
        response.forEach((dungeon: Dungeon) => {
          const index = zones.findIndex((z) => {
            return z.title === dungeon.zone
          })

          if (index === -1) {
            const zone = {
              title: dungeon.zone,
              dungeons: [dungeon],
            }
            zones.push(zone)
          } else {
            zones[index].dungeons.push(dungeon)
          }
        })
        this.zones = zones
      })
  }
}
</script>
