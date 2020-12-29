<template>
    <div>
        <form class="form">
            <p>Имя: <input v-model='name' type="text"></p>
            <p>Почта: <input v-model="email" type="text"></p>
            <p>Телефон: <input v-model="phone" type="text"></p>
            <p>Город: <input v-model="city" type="text"></p>
            <button @click.prevent="click" class="submit">Создать</button>
        </form>
        <router-link to="/" class="link-btn">Назад</router-link>
    </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
    data: function() { 
        return {
            name: '',
            email: '',
            phone: '',
            city: '',
        }
    },
    methods: {
        ...mapActions(['addNewUser']),
        click(){
            console.log(this)
            
            const newUser = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                styles: {
                    color: false,
                },
                address: {
                    city: this.city,
                }
            }

            this.name = ''
            this.email = ''
            this.phone = ''
            this.city = ''

            this.addNewUser(newUser)
        }
    }
}
</script>
<style scoped>
    .submit {
        margin: 0;
    }
    .input {
        display: block;
        margin-bottom: 5px;
    } 
    .form { 
        margin-bottom: 20px;
        width: 270px;
    }
    .form > p {
        margin-bottom: 5px;
        display: flex;
        justify-content: space-between;
    }
    
</style>