<template>
<div>
  <div class=" py-4 flex flex-wrap justify-center items-center">
      <div class="flex flex-wrap">
            <div>
                <div class="flex flex-row mx-auto text-gray-800 my-2">
                    <label for="">Present:</label>
                    <input v-model="present" type="number" class=" w-52 mx-4 ml-9 text-center">
                </div>
                <div class="flex flex-row mx-auto text-gray-800 my-2 ">
                    <label for="">Weekened:</label>
                    <input v-model="weekend" type="number" class=" w-52 mx-4 text-center">
                </div>
                <div class="flex flex-row mx-auto text-gray-800 my-2">
                    <label for="">Holiday:</label>
                    <input v-model="holyday" type="number" class=" w-52 mx-4 ml-9 text-center">
                </div>

            
                <div class="flex justify-center items-center">
                    <button @click="updateAttendence(null)" class=" mr-1 px-3 py-3 rounded-full bg-gray-700 hover:bg-gray-800 text-white hover:text-gray-200">Save</button>
                    <button @click="updateAttendence(1)" class="px-3 py-3 rounded-full bg-gray-700 hover:bg-gray-800 text-white hover:text-gray-200">Cancel</button>
                
                </div>
            </div>
        </div>

    <div class="flex flex-wrap">
        <div class="rounded-full bg-green-800 text-white w-1/4 text-center py-1 mr-.5 mb-.5" v-for="m, id in mAtt" :key="id" >{{m.month}} : {{m.count}}</div>
    </div>
  </div>
  <div class="w-full flex justify-center items-center h-32">
      <div>
        <input type="date" v-model="searchKeyword" placeholder="enter a date" class="pl-2">
        <button @click="search" class="px-2 bg-green-800 py-1 rounded-full m-3 text-white hover:bg-green-900">Search</button>

      </div>

    <div class="bg-green-800 text-white flex flex-col w-52 px-4">
        <h1>present: {{ this.searchResult? this.searchResult.present: null}}</h1>
        <h1>Holiday: {{ this.searchResult? this.searchResult.holyday: null}}</h1>
        <h1>Weekened: {{ this.searchResult? this.searchResult.weekend: null}}</h1>
    </div>

  </div>
</div>
</template>

<script>
export default {

props: ["userAtt", "attMonth"],
    data () {
        return {
            present: this.userAtt.pesent,
            holyday: this.userAtt.holyday,
            weekend: this.userAtt.weekend,
            mAtt: this.attMonth,
            searchKeyword: '',
            searchResult: []
        }
    },
    methods:{
        updateAttendence (con) {
            if (con === 1) {
                this.$emit('clicked')
            }else{
            this.$axios.post('/api/employee/',{
                "method": "PUT", 
                "id": this.id,
                "present": this.present,
                "holyday": this.holyday,
                "weekend": this.weekend
            })
            this.$emit('clicked')
            }

        },
        search () {
            
             this.$axios.get('/api/emoloyee-search/',{
                params: {
                "id": this.userAtt.user_id,
                "searchKeyword": this.searchKeyword,}
             }).then((response) => {
            this.searchResult = response.data
                console.log(response)
            
        })
            
        }
    },



}
</script>

<style>

</style>