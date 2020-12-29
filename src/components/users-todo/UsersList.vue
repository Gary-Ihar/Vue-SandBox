<template>
  <li class="li" v-bind:class="{ darkcyan : user.styles.color}">
    {{ user.name }}
    <button
      class="btn"
      @click="$emit('getInfo', user.id); 
      $emit('toggleColor', user.id)"
    >
      Подробнее
    </button>
  </li>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["user"],
  computed: {
    ...mapGetters(["getSelectUser"]),
  },
};
</script>
<style scoped>
.li{
  color: darkblue;
  font-weight:normal;
  min-width: 280px;
}
.li.darkcyan {
  color: darkcyan;
  animation: color 1s infinite;
}
@keyframes color {
  0%{
    color: darkcyan;
  }
  50%{
    color: red;
  }
  100% {
    color: darkcyan;
  }
}
.btn { 
  margin-left: 20px;
}
</style>
