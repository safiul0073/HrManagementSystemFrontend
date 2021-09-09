<template>

  <div v-if="$auth.loggedIn">
    <div v-if="$auth.user.depertment == 'em'">
      <Header/>
      <Em/>
    </div>
    <div v-else>
      <Header/>
      <Hr/>
    </div>
  </div>
  <div v-else>
    <Login />
  </div>
  
</template>

<script>
import Header from '../components/Header/Index.vue';
import Login from './auth/login.vue';
import Hr from "../components/Content/Hr.vue";
import Em from "../components/Content/Em.vue";
export default {
  
  components: {
    Header,
    Login,
    Hr,
    Em
  }
}
</script>
