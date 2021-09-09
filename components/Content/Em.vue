<template> 
  <div class=" max-w-screen-md pt-4 bg-green-700 mx-auto my-4">
      <div class="w-full text-center ">
          <h1 class="text-white">Entry or Check In</h1>
      </div>

      <div class="w-full h-48 text-center my-4 mt-16">
          
            <label for="" class="text-white mx-3">Enter Date:</label>
            <input type="date" class="w-56 outline-none">
          
          <button @click="addAttendence" class="px-3 border border-1 rounded-full bg-green-900 text-white hover:bg-gray-600 mx-3">Submit</button>
      </div>
  </div>
</template>

<script>
export default {

    methods:{
       async addAttendence () {
           await this.$axios.post('/api/attenedence',{'user_id': this.$auth.user.id, 'present': 1}).then(function (response) {
               alert("Attendence Added successfully")
           }).catch(function (err) {
               alert("Attendence Field")
           })
        }
    }
}
</script>

<style>

</style>