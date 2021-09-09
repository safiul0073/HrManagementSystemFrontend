<template>
    <div>
        <div class="h-12 w-full bg-gradient-to-r from-gray-400 to-green-500">
            <div class=" relative flex flex-row justify-between justify-center items-center">
                <h1 class="text-white uppercase text-3xl font-black ml-4">{{this.$auth.user.depertment === "hr" ? "hr" : "Employee"}}</h1>

                <div>
                    <button @click="showDrop" class="font-bold text-white mr-4 py-2 px-3 text-xl py1 pointer hover:text-gray-200 bg-green-500 outline-none flex justify-center items-center"><h1>{{this.$auth.user.name}}</h1>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                    </button>
                     <div v-if="isShow" class="bg-green-500 rounded shadow-md mt-2 absolute mt-12 top-0 right-0 overflow-auto z-30">
                    <ul class="list-reset">
                        <li><a href="#" class="px-4 py-2 block text-gray-100 hover:bg-green-600 no-underline hover:no-underline">{{this.$auth.user.email}}</a></li>
                        <li><a href="#" class="px-4 py-2 block text-gray-100 hover:bg-green-600 no-underline hover:no-underline">Profile</a></li>
                        <li>
                            <hr class="border-t mx-2 border-gray-400"/>
                        </li>
                        <li><a href="#" @click="logout" class="px-4 py-2 block text-gray-100 hover:bg-green-600 no-underline hover:no-underline">Logout</a></li>
                    </ul>
                </div>
                </div>
               
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isShow: false
        }
    },
    methods: {
        async logout () {
           await this.$auth.logout()

            this.$router.push('auth/login')
        },
        showDrop () {
            this.isShow = !this.isShow
        }
    }
}
</script>

<style>

</style>