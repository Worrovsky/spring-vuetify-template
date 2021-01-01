<template>
  <v-dialog persistent max-width="400" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-on="on" v-bind="attrs">Show dialog </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline">
        Some dialog title
      </v-card-title>
      <v-card-text
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
        praesentium natus sed excepturi blanditiis impedit aspernatur nostrum
        voluptates adipisci sint doloribus neque expedita dolores libero,
        numquam, nam ullam molestiae repellendus maxime commodi quod explicabo
        voluptatibus reprehenderit cupiditate. Quam animi quasi reprehenderit
        facilis possimus tempore corrupti, amet, aliquid placeat tenetur labore
        nesciunt? Quibusdam aut aliquid, repellat aliquam obcaecati ducimus,
        enim fugiat explicabo ab eos cumque veniam accusantium facere,
        consectetur omnis. Accusamus assumenda ipsam cumque dolores. Aliquam
        perspiciatis, in, repellat error recusandae itaque numquam
        exercitationem animi eius neque alias odio assumenda praesentium
        blanditiis! Ex enim ab eius corporis quo est reprehenderit
        sequi!</v-card-text
      >
      <v-card-actions>
        <v-btn @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
    }
  },
}
</script>
