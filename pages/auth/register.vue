<template>
  <div>
      <div class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
            <div class="py-8 px-8 rounded-xl">
                <h1 class="font-medium text-2xl mt-3 text-center">Register</h1>
                <form action="" class="mt-6">
                    <div class="my-5 text-sm">
                        <label for="username" class="block text-black">Name</label>
                        <input type="text" autofocus v-model="form.name" class=" border border-1 rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Username" />
                    </div>
                    <div class="my-5 text-sm">
                        <label for="email" class="block text-black">email</label>
                        <input type="email" v-model="form.email" id="email" class="border border-1 rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="email" />
                        
                    </div>

                    <div class="my-5 text-sm">
                        <label class="block text-black">Select The Depertment</label>
                        <select class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full border border-1" v-model="form.depertment"  id="">
                            <option disabled value="">Please select one</option>
                            <option value="hr">Hument Research</option>
                            <option value="em">Employee</option>
                        </select>
                    </div>

                    <div class="my-5 text-sm">
                        <label for="password" class="block text-black">password</label>
                        <input type="password" v-model="form.password" name="password" id="password" class="border border-1 rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="enter passwor" />
                        
                    </div>

                    <button @click.prevent="register" class="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">register</button>
                </form>





                <p class="mt-12 text-xs text-center font-light text-gray-400"> Already Have <Nuxt-Link to="/auth/login" class="text-black font-medium"> Go For Login</Nuxt-Link>  </p>

            </div>
        </div>
  </div>
</template>

<script>
import axios from "axios"
export default {

    data() {
        return {
            form:{
                name: '',
                email: '',
                password: '',
                depertment: ''
            }
        }
    },

    methods:{
        async register() {
            
              const self = this
               this.$axios.post('/api/register/', this.form)

                                .then(function (response) {
                                self.$router.push("/auth/login")
                                })
                                .catch(function (err) {
                                console.log(err)
                                }) 
             
            
                   
        }
        
    }

}
</script>

<style>

</style>
