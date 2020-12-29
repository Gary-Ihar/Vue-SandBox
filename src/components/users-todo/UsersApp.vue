<template>
  <div class="users">
    <div class="">
      <h2>Все пользователи:</h2>
      <transition-group name='user-list-animation' class="list" v-bind:class="{ 'show': isShowed}" tag='ul'>
        <UsersList
          v-on="{getInfo,toggleColor}"
          v-for="user of getUsers"
          v-bind:key="user.id"
          :user="user"
        />
      </transition-group>
      <router-link to="/banned" class="link-btn">Забаненные</router-link>
      <router-link to="/add" class="link-btn">Добавить</router-link>
      <a class="link-btn" href="" @click.prevent="show">{{isShowed ?  'Показать' : 'Скрыть'}}</a>
    </div>
    <transition name='info-block'>
      <div v-if="getSelectUser.length > 0" class="info">
        <h2>Подробная информация:</h2>
        <div class="content">
          <p>Имя: {{ getSelectUser[0].name }}</p>
          <p>Почта: {{ getSelectUser[0].email }}</p>
          <p>
            Телефон:
            <a href="tel:+">{{ getSelectUser[0].phone }}</a>
          </p>
          <p>Город: {{ getSelectUser[0].address.city }}</p>
          <button @click="clearSelectUser();toggleColor(null)" class="close">Закрыть</button>
          <button @click="addToBanList(getSelectUser[0].id)" class="to-ban">
            В бан-лист
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import UsersList from "./UsersList.vue";
import { mapGetters, mapActions } from "vuex";
console.log();
export default {
  data: function(){
    return {
      isShowed: false,
    }
  },
  components: {
    UsersList,
  },
  computed: {
    ...mapGetters(["getUsers", "getSelectUser"]),
  },
  methods: {
    ...mapActions(["selectUser", "clearSelectUser", "addToBanList"]),
    getInfo(id) {
      this.selectUser(id);
      mapGetters(["getSelectUser"]);
    },
    toggleColor(id) {
      this.getUsers.forEach(el=>{
        el.styles.color = false
        if(el.id === id) {
          el.styles.color = true
        }
      })
    },
    show(){
      this.isShowed = !this.isShowed
    }
  },
};
</script>
<style scoped>
.list{
  height: calc(100% - 85px);
  overflow: hidden;
  transition: .5s ease;
}
.list.show{
  height: 0%;
}
.users {
  display: flex;
  overflow: hidden;
      padding-bottom: 20px;
}

.info {
  margin-left: 20px;
  min-width: 310px;
}
.content {
  position: relative;
  padding: 7px;
  border: 1px solid gray;
  border-radius: 10px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
}
.content p {
  color: darkcyan;
  margin-bottom: 7px;
}
.content p:last-child {
  margin-bottom: 0;
}
.close,
.to-ban {
  margin-left: 0;
  position: absolute;
  top: 5px;
  right: 5px;
  border: 1px solid gray;
  border-radius: 10px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
  padding: 3px;
  transition: 0.2s ease;
}
.to-ban {
  top: unset;
  bottom: 5px;
}
.to-ban:hover,
.close:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  color: violet;
}
.link-btn{
  margin-right: 10px;
}
.link-btn:last-child {
  margin-right: 0px;
}
.info-block-enter  {
  position: relative;
  transform: translateY(-300px);
}
.info-block-enter-to {
  transition: .5s ease;
}

.info-block-leave-to{
  transform: translateY(400px);
  opacity: 0;
  transition: .5s ease-in;
}
.user-list-animation-leave-active{
transition: .4s ease;
}
.user-list-animation-leave-to {
  transform: translateX(-350px);
  opacity: 0;
}
</style>
