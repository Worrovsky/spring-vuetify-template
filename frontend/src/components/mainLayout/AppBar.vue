<template>

  <v-app-bar app clipped-left>
    <v-app-bar-nav-icon @click.stop="onClick" />
    <v-toolbar-title>Application</v-toolbar-title>
  </v-app-bar>

</template>

<script>
export default {
  inject: ["appNavObject"],
  methods: {
    onClick() {
      this.appNavObject.drawer = !this.appNavObject.drawer;
    }
  }
};
</script>

