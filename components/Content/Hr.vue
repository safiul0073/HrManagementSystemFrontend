<template>
  <div class="w-full ">
      <div class="flex flex-wrap">
            <Grid :gridData="totalEmployees" :name="'Total Employee'" />
            <Grid :gridData="totalPresent" :name="'Today Presents'"/>
            <Grid :gridData="totalAbsence" :name="'Today Absents'"/>
            <Grid :gridData="totalLeav" :name="'Today Leave'"/>
      </div>
      
      <h1 class="text-center uppercase text-3xl my-4 text-gray-400 font-black">Attendence Sheet of Employees</h1>
      <div class="container w-full bg-gray-300 mx-auto">
                <table v-if="!isShow" class="table-auto w-full">
                    <thead>
                        <tr>
                            <th class="text-center">Name</th>
                            <th class="text-center">Attendence</th>
                            <th class="text-center">Total Attendence</th>
                            <th class="text-center">Total Absence</th>
                            <th class="text-center">Weekened</th>
                            <th class="text-center">Holiday</th>
                            <th class="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody v-if="data">
                        <tr  v-for="d, index in data" :key="index">
                            <td  class="text-center">{{d.name}}</td>
                            <td  class="text-center">{{d.pesent=== 0 ? "No" : "Yes"}}</td>
                            <td  class="text-center">{{d.totalPresent}}</td>
                            <td  class="text-center">{{d.totalAbsence}}</td>
                            <td  class="text-center">{{d.weekend}}</td>
                            <td  class="text-center">{{d.holyday}}</td>
                            <td  class="text-center">
                                <button @click="changeTableToInput(d)" class="" href="">Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <UpdateAttendence :attMonth="mAtt" :userAtt="userAtt" @clicked="onClickChild" v-if="isShow" />
        </div>
  </div>
</template>

<script>
import Grid from '../GridComponent/Grid.vue'
import UpdateAttendence from './updateAttendence.vue'
export default {
    

    components: {
        Grid,
        UpdateAttendence
    },

    data () {
        return {
            data: [],
            totalEmployees: 0,
            totalLeav: 0,
            totalAbsence: 0,
            totalPresent: 0,
            isShow: false,
            mAtt: [],
            userAtt:[]
        }
    },async mounted () { 
        await this.$axios.get("/api/employee-attend").then((response) => {
            this.data =  response? response.data.employees : null
            
        })
        await this.$axios.get("/api/getAllTotal").then((response) => {
            this.totalEmployees =  response.data.all_employees
            this.totalPresent =  response.data.all_present
            this.totalLeav =  response.data.all_leav
            this.totalAbsence =  response.data.all_absence
        })
    },
    methods:{
        changeTableToInput (d) {
            this.isShow = !this.isShow
            this.userAtt = d
            this.$axios.get('/api/get-month/'+this.userAtt.user_id).then((response) => {
            this.mAtt = response.data.Month
            
        })
        },
        onClickChild (value) {
      this.isShow = !this.isShow
    }
    }
}
</script>

<style>

</style>