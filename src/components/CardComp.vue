<template>
  <div class="card_layout" v-bind:style="style">
    <div class="draggable" @mousedown.stop="dragdown($event)">
      <span><i class="fas fa-th"></i></span>
      <span class="right_align" @click="deleteCard()"><i class="fa fa-window-close" aria-hidden="true"></i></span>
    </div>
    <h3 class="title">{{title}}</h3>
    <span >Card notes JSON will be sub-components:</span>
    <pre class="note" v-for="note in notes">{{note}}</pre>
  </div>
</template>

<script>
import CardNote from "./CardNote"
export default {
  name: 'CardComp',
  components: {
    CardNote
  },
  props: {
    id: String,
    title: String,
    notes: Array,
    x: Number,
    y: Number
  },
  data: function() {
    return {
      dragmovehandler_c: function(cardthis) {
        return function(e) {
          e.stopPropagation();
          if(cardthis.dragging === true) {
            var delx = e.clientX - cardthis.downx;
            var dely = e.clientY - cardthis.downy;
            cardthis.$emit('move_card_command', {id: cardthis.id, x: cardthis.initx + delx, y: cardthis.inity + dely});
          }
        };
      },
      dragmovehandler: undefined,
      dragendhandler_c: function(cardthis) {
        return function(e) {
          e.stopPropagation();
          cardthis.dragging = false;
          $(document).unbind("mousemove", cardthis.dragmovehandler);
          $(document).unbind("mouseup", cardthis.dragendhandler);
          $(document).unbind("blur", cardthis.dragendhandler);
        }
      },
      dragendhandler: undefined,
      dragging: false,
      initx: 0,
      inity: 0,
      downx: 0,
      downy: 0
    };
  },
  methods: {
    dragdown: function(e){
      if(e.button === 0) {
        this.dragmovehandler = new this.dragmovehandler_c(this);
        $(document).mousemove(this.dragmovehandler);
        this.dragendhandler = new this.dragendhandler_c(this);
        $(document).mouseup(this.dragendhandler);
        $(document).blur(this.dragendhandler);

        this.dragging = true;
        this.initx = this.x;
        this.inity = this.y;
        this.downx = e.clientX;
        this.downy = e.clientY;
      }
      else {
        this.dragging = false;
        $(document).unbind("mousemove", this.dragmovehandler);
        $(document).unbind("mouseup", this.dragendhandler);
        $(document).unbind("blur", this.dragendhandler);
      }
    },
    deleteCard: function() {
      this.$emit("delete_card_command", this.id);
    },
    split: function(note) {
      return note.split("\n")
    }
  },
  computed: {
    style() {
      return ""+
      "top:" + this.y + "px;" +
      "left:" + this.x + "px;";
    }
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card_layout {
    position: absolute;
    background-color: rgba(0, 128, 128, 1);
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    padding: .5rem;
    cursor: default;
    min-width: 400px;

  }
  .note {
    margin: .5rem;
    margin-left: .5rem;
  }
  .draggable {
    cursor:all-scroll;
    background-color: rgba(255,255,255,.5);
    border-radius: 5px;
    padding: .5rem;
  }
  .right_align {
    float: right;
    cursor: pointer;
  }
  .title {
    margin-top: .5rem;
    margin-left: 0rem;
  }
</style>
