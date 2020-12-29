<template>
  <div class="banned">
    <h2>Забаненные:</h2>
    <transition-group name="delete"  class="list" tag='ul'>
      <li v-for="user of getBannedUsers" v-bind:key="user.id">
        {{ user.name }}
        <button @click="removeFromBannList(user.id)">Восстановить</button>
      </li>
    </transition-group>
    <transition name='text-block'>
      <p v-if="show" class="text">Никого нет :)</p>
    </transition>
    <router-link to="/" class="link-btn">Все пользователи</router-link>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: function(){
    return {
      show : true
    }
  },
  mounted() {
    if(this.getBannedUsers.length === 0){
      this.show = true
    } else {
      this.show = false
    }
  },
  computed: {
    ...mapGetters(["getBannedUsers","getUsers"]),
  },
  watch:{
    getBannedUsers : function(){
      if(this.getBannedUsers.length === 0) {
        setTimeout(()=>{
          this.show = true
        }, 400)
      } else {
        this.show = false
      }
    }
  },
  methods: {
    ...mapActions(["removeFromBannList"]),
  },
};
</script>
<style scoped>
.list {
  margin-bottom: 0;
}
.text{
 margin-bottom: 15px;
}
.link-btn{
  position: relative;
  bottom: -20px;
}
.text-block-enter  {
  transform: translateX(-300px);
}
.text-block-enter-to {
  transition: .4s ease;
}
.banned{
  max-width: 310px;
  min-height: 140px;
  overflow: hidden;
  padding-bottom: 10px;
  
}
.delete-leave-active{
  transition: .4s ease;
}
.delete-leave-to {
  transform: translateX(-300px);  
}
</style>
