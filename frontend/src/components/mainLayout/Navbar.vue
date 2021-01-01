<template>
  <v-navigation-drawer v-model="appNavObject.drawer" app clipped>
    <v-list dense>
      <v-list-item
        v-for="link in links"
        v-bind:key="link.title"
        v-bind:to="link.to"
        link
      >
        <v-list-item-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  inject: ['appNavObject'],
  data: function() {
    return {
      links: [
        { title: 'Dashboard', to: '/', icon: 'mdi-view-dashboard' },
        { title: 'Settings', to: '/settings', icon: 'mdi-cogs' },
        { title: 'About', to: '/about', icon: 'mdi-information' },
      ],
    }
  },
}
</script>
