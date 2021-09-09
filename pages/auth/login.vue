<template>
  <div>
      <div class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
            <div class="py-8 px-8 rounded-xl">
                <h1 class="font-medium text-2xl mt-3 text-center">Login</h1>
                <form action="" class="mt-6">
                    <div class="my-5 text-sm">
                        <label for="username" class="block text-black">Username</label>
                        <input type="email" autofocus v-model="form.email" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Username" />
                    </div>
                    <div class="my-5 text-sm">
                        <label for="password" class="block text-black">Password</label>
                        <input type="password" v-model="form.password" id="password" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" />
                        <div class="flex justify-end mt-2 text-xs text-gray-600">
                           <a href="../../pages/auth/forget_password.html hover:text-black">Forget Password?</a>
                        </div>
                    </div>

                    <button @click.prevent="login" class="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Login</button>
                </form>





                <p class="mt-12 text-xs text-center font-light text-gray-400"> Don't have an account? <Nuxt-Link to="/auth/register" class="text-black font-medium"> Create One </Nuxt-Link>  </p>

            </div>
        </div>
  </div>
</template>

<script>
export default {

    data() {
        return {
            form:{
                email: '',
                password: ''
            }
        }
    },

    methods:{
        login() {
            this.$auth.loginWith('laravelSanctum', {
                    data: this.form
            }).then((response) => {
                this.$router.push("/")
            }).catch(function (err) {
                                alert(err.message)
                                })
        }
    }

}
</script>

<style>

</style>
