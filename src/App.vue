<template>
 <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <router-link to="/">
          <b-icon
            icon="shop-window"
            style="width: 30px; height: 30px; color: white"
          ></b-icon>
        </router-link>
        <b-navbar-brand href="#">Mama</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link class="col-5" style="color: white" to="/"
              >Home</router-link
            >
            <router-link class="col-5" style="color: white" to="/about"
              >About</router-link
            >
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form> </b-nav-form>
            <router-link to="/about" class="col-7">
              <b-button pill variant="success" @click="Submit()">
                ยืนยัน
              </b-button></router-link
            >
            <b-button pill variant="danger" @click="Clear()">
              ยกเลิก
            </b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view @Order="Sorder" :data="data" :Total="Total" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import { mapMutations } from "vuex";
import Vue from 'vue'
export default Vue.extend({
   computed: {
    ...mapMutations(["Clear","Submit"]),
  },
})
</script>