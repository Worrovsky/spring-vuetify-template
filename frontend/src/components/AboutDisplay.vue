<template>
  <div>
    <h2>This is about page</h2>

    <TestDialog></TestDialog>
  </div>
</template>

<script>
import TestDialog from './SomeDialog'

export default {
  components: {
    TestDialog,
  },

  data() {
    return {
      dialog: false,
    }
  },
}
</script>
