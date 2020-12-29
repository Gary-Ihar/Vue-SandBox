import axios from "axios";

export default {
    state: {
        allUsers: [],
        bannedUsers: [],
        infoUser: [],
        globalId: 10,
    },
    mutations: {
        setUsers (state, users) {
            state.allUsers = users
        },
        setInfoUser(state, user) {
            state.infoUser = user
        },
        clearSelectUser(state, user) {
            state.infoUser = user
        },
        addToBanList(state, users) {
            state.bannedUsers = users
        },
    },
    actions: {
        async getUsers(context) { 
            await axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res)=>{
                res.data.forEach(elem => {
                    elem.styles = {
                        color : false,
                    }
                })
                return res.data
            })
            .then((res) => context.commit('setUsers', res))     
        },
        selectUser(context, userId) {
            const selectedeUser = this.state.users.allUsers.filter(user => user.id === userId)
            context.commit('setInfoUser',selectedeUser)
        },
        clearSelectUser(context){
            context.commit('setInfoUser',[])
        },
        addToBanList(context, id) {
            const tempArrBannedUser = this.state.users.bannedUsers;
            const newAllUsers = this.state.users.allUsers.filter(user=> {
                if(user.id !== id) {
                    return true
                } else {
                    tempArrBannedUser.push(user)
                    return false
                }
            })
            context.commit('setUsers', newAllUsers)
            context.commit('addToBanList', tempArrBannedUser)
            context.commit('setInfoUser', [])
        },
        removeFromBannList(context, id) {
            const removedUser = this.state.users.bannedUsers.find(item => item.id === id)
            removedUser.styles.color = false
            const withoutRemovedUsers = this.state.users.bannedUsers.filter(item => item.id !== id)
            const users = this.state.users.allUsers
            users.push(removedUser)
            users.sort((a,b)=> a.id - b.id)
            context.commit('addToBanList', withoutRemovedUsers)
            context.commit('setUsers', users)
        },
        addNewUser(context, user) {
            const newUser = {
                ...user, 
                id: ++this.state.users.globalId
            }
            const users = this.state.users.allUsers
            users.push(newUser)
            context.commit('setUsers',users)
        }
    },
    getters: {
        getUsers(state) { 
            return state.allUsers
        },
        getSelectUser(state) {
            return state.infoUser
        },
        getBannedUsers(state){
            return state.bannedUsers
        }
    },
}