/* eslint-disable */
<template>
  <section class="shadow-lg">
    <div class="jumbotron jumbotron-fluid text-center d-flex align-items-center" id="jumbotron-login-image">
      <div class="container">
        <div class="row text-center justify-content-center align-items-center">
          <div class="p-sm-5 mx-0 col-12 col-md-8 col-lg-6 col-xxl-4 login-round background-light-50">
            <h1 class="display-1 text-warning-dark-medium text-shadow-lg-dark font-weight-boldest font-spacing-3 font-building">Login</h1>
            <div class="row justify-content-center">
              <div class="col-12 col-lg-11 col-xl-11 bg-dark-00 login-round py-4 pt-md-2 px-sm-5">
                <br />
                <form class="form-register" @submit.prevent="login">
                  <div class="alert alert-danger py-3" role="alert" v-if="invalidCredentials">Invalid username and password!</div>
                  <div class="col-form-label-lg bg">Username</div>
                  <input type="text" id="username" class="form-control" placeholder="Username" v-model="user.username" required autofocus />
                  <div class="col-form-label-lg bg pt-4">Password</div>
                  <label for="password" class="sr-only">Password</label>
                  <input type="password" id="password" class="form-control" placeholder="Password" v-model="user.password" required />
                  <div class="mt-2">
                    <button class="btn btn-lg btn-success btn-block my-3 rounded-lg" type="submit">Sign in</button>
                  </div>
                  <div class="mt-2">
                    <router-link :to="{ name: 'register' }" tag="button" class="btn btn-lg btn-outline-success btn-block my-2 mb-xs-4">Register</router-link>
                    <br class="d-md-none" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import authService from "../services/AuthService";

export default {
  name: "login",
  components: {},
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      invalidCredentials: false,
    };
  },
  methods: {
    login() {
      authService
        .login(this.user)
        .then((response) => {
          if (response.status == 200) {
            this.$store.commit("SET_AUTH_TOKEN", response.data.token);
            this.$store.commit("SET_USER", response.data.user);
            this.$router.push("/");
          }
        })
        .catch((error) => {
          const response = error.response;

          if (response.status === 401) {
            this.invalidCredentials = true;
          }
        });
    },
  },
};
</script>
