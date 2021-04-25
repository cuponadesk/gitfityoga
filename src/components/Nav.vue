<template>
  <nav class="navbar navbar-expand-lg navbar-dark sticky-top bg-dark shadow-lg pt-4">
    <div class="container">
      <router-link class="navbar-brand font-weight-500 text-warning font-size-increase" v-bind:to="{ name: 'Home' }">GIT Fit</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-bind:class="{ active: currentActiveNavLink('/') }">
            <router-link v-bind:to="{ name: 'Home' }" class="nav-link">
              Home <span class="sr-only">{{ currentActiveNavLinkForSR("/") }}</span></router-link
            >
          </li>
          <li class="nav-item" v-bind:class="{ active: currentActiveNavLink('/about') }">
            <router-link v-bind:to="{ name: 'About' }" class="nav-link">
              About<span class="sr-only">{{ currentActiveNavLinkForSR("/about") }} </span></router-link
            >
          </li>

          <li class="nav-item dropdown" v-bind:class="{ active: currentActiveNavLink('/workouts') || currentActiveNavLink('/poses') || currentActiveNavLink('/trainers') }">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Yoga <span class="sr-only">{{ currentActiveNavLinkForSR("/workouts") }}</span></a
            >
            <div class="dropdown-menu" aria-labelledby="navbarDropdown" id="yogaMenuWorkouts">
              <router-link class="dropdown-item" v-bind:to="{ name: 'Yoga' }">Videos</router-link>
              <!-- <router-link class="dropdown-item" href="#">Another action</router-link> -->
              <div class="dropdown-divider"></div>
              <!-- <router-link class="dropdown-item" href="#">Something else here</router-link> -->
            </div>
          </li>

          <!-- <li class="nav-item"><router-link class="nav-link disabled" href="#">Disabled</router-link></li> -->
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <router-link v-bind:to="{name : 'Login'}">
          <button class="btn btn-outline-success my-2 my-sm-0">Login</button></router-link>
        </form>
      </div>
    </div>
  </nav>
  <!-- <div class="hello">
    <h1>{{ msg }}</h1>
    <Nav />
  </div> -->
</template>

<script>
// export name use other places
export default {
  name: "Nav",
  props: {
    msg: String,
  },
  data() {
    return {
      activeLink: "",
    };
  },
  watch: {
    $route() {
      //rehide menus after path change
      let items = Array.from(document.getElementsByClassName("show"));
      items.forEach((item) => item.classList.remove("show"));
    },
  },
  mounted() {
  },
  created() {
    this.activeLink = this.$route.path;
  },
  methods: {
    currentActiveNavLinkForSR(section) {
      if (this.$route.path == section) {
        return "(current)";
      }
      return "";
    },
    currentActiveNavLink(section) {
      if (this.$route.path == section) {
        return true;
      }
      return false;
    },
  },
};
</script>
<style></style>
