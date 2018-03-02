<template>
  <div class="card_note_layout">
    <pre>{{markup}}</pre>
  </div>
</template>

<script>

export default {
  name: "CardNote",
  props: {
    id: String,
    markup: String
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
