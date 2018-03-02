<template>
  <div class="project_layout">
    <project-toolbar @add_card_command="addcard()"></project-toolbar>

    <div class="temp_container" @mousedown="dragdown($event)">
      <div class="project_path">
        Project Name <span class="fa_lower"><i class="fas fa-chevron-right"></i></span> Board Name
      </div>
      <div class="background" v-bind:style="style">
        <span v-for="card in cards">
          <card-comp v-bind="card" @move_card_command="movecard($event)" @delete_card_command="deletecard($event)"></card-comp>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectToolbar from './ProjectToolbar'
import CardComp from './CardComp'
export default {
  name: 'Project',
  data: function() {
    return {
      background: {
        dragmovehandler_c: function(cardthis) {
          return function(e) {
            if(cardthis.background.dragging === true) {
              var delx = e.clientX - cardthis.background.downx;
              var dely = e.clientY - cardthis.background.downy;
              cardthis.background.x = cardthis.background.initx + delx;
              cardthis.background.y = cardthis.background.inity + dely;
            }
          }
        },
        dragmovehandler: undefined,
        dragendhandler_c: function(cardthis) {
          return function(e) {
            console.log("END");
            cardthis.background.dragging = false;
            $(document).unbind("mousemove", cardthis.background.dragmovehandler);
            $(document).unbind("mouseup", cardthis.background.dragendhandler);
            $(document).unbind("blur", cardthis.background.dragendhandler);
          }
        },
        dragendhandler: undefined,
        dragging: false,
        initx: 0,
        inity: 0,
        downx: 0,
        downy: 0,
        x: 0,
        y: 0
      },
      nextcardid: 2,
      cards: {
        "0": {
          id: 0,
          title: "Card name 0",
          notes: [
            {id: 0, markup: "Some dummy info"},
            {id: 1, markup: "Some more info"}
          ],
          x: 100,
          y: 100
        },
        "1": {
          id: 1,
          title: "Card name 1",
          notes: [
            {id: 0, markup: "Some dummy info"},
            {id: 1, markup: "Some more info"}
          ],
          x: 500,
          y: 100
        }
      }
    }
  },
  computed: {
    style: function() {
      return "" +
        "top:" + this.background.y + "px;" +
        "left:" + this.background.x + "px;";
    }
  },
  methods: {
    addcard: function() {
      console.log("added");
      this.$set(this.cards, "" + this.nextcardid, {
        id: this.nextcardid,
        title: "Card name " + (this.nextcardid),
        notes: [
          {id: 0, markup: "Some dummy info"},
          {id: 1, markup: "Some more info"}
        ],
        x: -this.background.x,
        y: -this.background.y + 75
      });
      this.nextcardid++;
    },
    deletecard: function(e) {
      for(var id in this.cards) {
        if(
          this.cards.hasOwnProperty(id) &&
          this.cards[id].hasOwnProperty("id") &&
          this.cards[id].id === e
        ) {
          this.$delete(this.cards, id);
        }
      }
    },
    movecard: function(e) {
      this.cards[e.id].x = e.x;
      this.cards[e.id].y = e.y;
    },
    dragdown: function(e) {
      if(e.button === 0) {
        console.log(e);
        this.background.dragmovehandler = new this.background.dragmovehandler_c(this);
        $(document).mousemove(this.background.dragmovehandler);
        this.background.dragendhandler = new this.background.dragendhandler_c(this);
        $(document).mouseup(this.background.dragendhandler);
        $(document).blur(this.background.dragendhandler);

        this.background.dragging = true;
        this.background.initx = this.background.x;
        this.background.inity = this.background.y;
        this.background.downx = e.clientX;
        this.background.downy = e.clientY;
      }
      else {
        this.background.dragging = false;
        $(document).unbind("mousemove", this.background.dragmovehandler);
        $(document).unbind("mouseup", this.background.dragendhandler);
        $(document).unbind("blur", this.background.dragendhandler);
      }
    }
  },
  components: {
    ProjectToolbar,
    CardComp
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project_layout {
  height: 60vh;
}
.project_path {
  position: absolute;
  background-color: rgba(130,128,140,1);
  border-radius: 5px;
  padding: .5rem;
  top: 0px;
  left: .5rem;
  z-index: 100;
}
.temp_container {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0px;
  margin-top: 1px;
  overflow: hidden;
  cursor: all-scroll;
}
.background {
  position: absolute;
}
</style>
