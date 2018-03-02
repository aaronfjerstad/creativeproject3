<template>
  <div class="project_toolbar_layout">
    <div class="controls">
      <span class="fa_lower command_span" @click="sendAddCardCommand()"><i class="link fa fa-plus" aria-hidden="true"></i></span>
      <span class="smaller">(Click + to add card) Other corkboard tools will go here.</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "ProjectToolbar",
  methods: {
    sendAddCardCommand: function() {
      this.$emit("add_card_command")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.link {
  cursor:pointer;
}
.command_span {
  padding: 0px;
  overflow: hidden;
}
.controls {
  grid-area: controls;
  margin-top: 1px;
  padding: .5rem;
  background-color: rgba(255,255,255,.2);
}

.controls ul.control_list {
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
}

.controls ul.control_list li {
  float: left;
  padding-left: 1rem;
}
.smaller {
  font-size: 1.5rem;
}

</style>
