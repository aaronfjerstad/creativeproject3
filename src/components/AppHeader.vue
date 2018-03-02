<template>
  <div class="app_header_layout">
    <div class="header_logo">
      <h2 class="inline_header">Corkboard</h2>
      <span class="smaller">
        <br />
        Draggable cards/background demo.<br />
        A proof-of-concept for draggable components. Surprisingly challenging because components can't by default capture mouse events, in this case mouse move, outside their root element.<br />
        (Drag the background to move all cards.)
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .app_header_layout {
    background-color: rgba(255,255,255,.2);
    padding: .5rem;

  }
  .inline_header {
    clear: none;
    padding-top: .5rem;
  }
  .smaller {
    font-size: 1.5rem;
  }
</style>
