<template>
  <span>
    <section class="shadow-lg">
      <div class="jumbotron jumbotron-fluid text-center" id="jumbotron-yoga-image">
        <div class="row text-center">
          <div class="box-shadow-text vw-100 p-0">
            <h1 class="display-1 text-warning-dark-medium text-shadow-lg-dark font-weight-boldest font-spacing-3 font-building">Programs</h1>
            <div class="box-shadow-text vw-100 p-0">
              <p class="lead text-light font-weight-bold font-spacing-1 d-none d-sm-inline">Filter by type, length, intesity or experince. The choice is yours.&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-lg-3">
          <div class="card">
            <div class="card-body justify-content-center text-center">
              <h4 class="card-title text-center">Filter</h4>
              <hr />
              <p class="card-title text-center mb-n3 font-weight-bold">Intensity</p>
              <label for="intensity-slider" class="form-label" sr-aria="intensity"></label>
              <input type="range" class="custom-range form-control-range" min="0" max="3" step="1" value="0" v-model="intensity" />
              <p class="card-title text-center mt-1">Easy</p>
              <div class="row text-left">
                <div class="col-6 col-md-12">
                  <hr />
                  <p class="card-title text-center font-weight-bold">Equipment</p>
                  <div class="py-1">
                    <label class="switch">
                      <input type="checkbox" checked v-model="equpimentMat" />
                      <span class="slider round"></span>
                    </label>
                    <span class="pl-1"> Mat&nbsp;</span>
                  </div>
                  <div class="py-1">
                    <label class="switch">
                      <input type="checkbox" checked v-model="equpimentBlock" />
                      <span class="slider round"></span>
                    </label>
                    <span class="pl-1"> Blocks</span>
                  </div>
                  <div class="py-1">
                    <label class="switch">
                      <input type="checkbox" checked v-model="equipmentStrap" />
                      <span class="slider round"></span>
                    </label>
                    <span class="pl-1"> Strap</span>
                  </div>
                  <div class="py-1">
                    <label class="switch">
                      <input type="checkbox" checked v-model="equipmentNone" />
                      <span class="slider round"></span>
                    </label>
                    <span class="pl-1"> None</span>
                  </div>
                  <!--
              <div class="py-1">
                <label class="switch">
                  <input type="checkbox" checked>
                  <span class="slider round"></span> </label>
                <span class="pl-1">Chair</span> </div>
-->
                  <!--
              <div class="py-1">
                <label class="switch">
                  <input type="checkbox" checked>
                  <span class="slider round"></span> </label>
                <span class="pl-1 d-none d-sm-inline"> Dumbbells</span> <span class="pl-1 d-sm-none">Dumbell</span></div>
-->
                </div>
                <div class="col-6 col-md-12">
                  <hr />
                  <div class="col text-centter justify-content-center">
                    <p class="card-title text-center font-weight-bold">Duration</p>
                    <div class="py-1 px-0 col mx-auto" v-for="(time, index) in times" v-bind:key="time.name">
                      <div class="mx-0 px-0 col d-inline">
                        <label class="switch">
                          <input type="checkbox" checked v-model="times[index].value" />
                          <span class="slider round"></span>
                        </label>
                      </div>
                      <div class="mx-0 px-0 col d-inline">
                        <span class="pl-2 d-none d-sm-inline">{{ times[index].name }}</span> <span class="pl-1 d-sm-none">{{ times[index].nameShorter }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col col-lg-12 text-center">
                  <hr />
                  <a href="#" class="btn btn-outline-dark" v-on:click="applyFilters">Appy Filters</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col p-0">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-lg-6">
                <div class="card">
                  <img class="card-img-top" src="images/BREATH.png" alt="Card image cap" />
                  <div class="card-body">
                    <h4 class="card-title text-center">Arrive</h4>
                    <div class="container">
                      <div class="row">
                        <div class="col-6 pb-2 text-center">
                          <p class="card-text">
                            <span class="font-weight-bold">Intensity</span><br />
                            Low
                          </p>
                        </div>
                        <div class="col-6 pb-2 text-center">
                          <p class="card-text">
                            <span class="font-weight-bold">Duration</span><br />
                            38 minutes
                          </p>
                        </div>
                        <div class="col-6 pb-2 text-center">
                          <p class="card-text">
                            <span class="font-weight-bold">Trainer</span><br />
                            Adriene
                          </p>
                        </div>
                        <div class="col-6 pb-2 text-center">
                          <p class="card-text">
                            <span class="font-weight-bold">Series</span><br />
                            Breathe
                          </p>
                        </div>
                        <div class="col-6 py-2 text-center">
                          <a href="#" class="btn btn-primary">Watch Video</a>
                        </div>
                        <div class="col-6 py-2 text-center">
                          <a href="#" class="btn btn-primary">Save Workout</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-lg-6" v-for="w, index in workouts" v-bind:key="w.id">

                  <img class="card-img-top" src="images/card-img.png" alt="Card image cap" />

                    <YogaVideoCard :workout="workouts[index]"/>


              </div>
            </div>
          </div>
        </div>

        <!--
    <div class="col-md-4 col-lg-3">
      <div class="card"> <img class="card-img-top" src="images/card-img.png" alt="Card image cap">
        <div class="card-body">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <br>
          <br>
          <a href="#" class="btn btn-primary">Go somewhere</a> </div>
      </div>
    </div>
-->
      </div>
    </div>
  </span>
</template>

<script>
import YogaVideoCard from "@/components/YogaVideoCard.vue";
import workoutsService from "@/services/WorkoutsService";
import intensitiesService from "@/services/IntensitiesService";

export default {
  name: "YogaComponent",
  data() {
    return {
      times: [
        { name: "Under 25", nameShorter: "< 25", value: true },
        { name: "25 to 45", nameShorter: "25 to 45", value: true },
        { name: "Over 45", nameShorter: "> 45", value: true },
      ],
      under25: true,
      between2545: true,
      over45: true,
      equpimentMat: true,
      equpimentBlock: true,
      equipmentStrap: true,
      equipmentNone: true,
      intensity: 0,
      workouts: {},
    };
  },
  components: {
    YogaVideoCard,
  },
  methods: {
    applyFilters() {

      workoutsService.getWorkouts(0,0,0);
    },
  },
  created() {

    //get all workouts
    workoutsService.getAll().then((response) => {
      this.workouts = response.data;
    });

     if (this.$store.state.intensities.length == 0) {
        intensitiesService.getAll().then((reponse) => {
          this.intensities = reponse.data;
          this.$store.commit("SET_INTENSITIES", reponse.data);
        });
      }

  }
};
</script>
