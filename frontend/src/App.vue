<template>
  <v-app>
    <nav-bar></nav-bar>

    <app-bar></app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <app-footer></app-footer>
  </v-app>
</template>

<script>
import NavBar from './components/mainLayout/Navbar'
import AppBar from './components/mainLayout/AppBar'
import AppFooter from './components/mainLayout/Footer'

export default {
  name: 'App',

  components: {
    NavBar,
    AppBar,
    AppFooter,
  },

  data: function() {
    return {
      appNavObject: {
        drawer: false,
      },
    }
  },

  provide: function() {
    return {
      appNavObject: this.appNavObject,
    }
  },

  created() {
    this.$vuetify.theme.dark = true
  },
}
</script>
