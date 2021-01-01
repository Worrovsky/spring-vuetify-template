<template>
  <v-footer app>
    <!-- <span>&copy; {{date | dateFilter | t1 | t2}}</span> -->
    <span>{{ date }}</span>
  </v-footer>
</template>

<script>
export default {
  data: function() {
    return {
      date: new Date(),
    }
  },
}
</script>
