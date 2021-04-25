<template>
  <div class="card">
    <img class="card-img-top" src="images/BREATH.png" alt="Card image cap" />
    <div class="card-body">
      <h4 class="card-title text-center">Arrive</h4>
      <div class="container">
        <div class="row">
          <div class="col-6 pb-2 text-center">
            <p class="card-text">
              <span class="font-weight-bold">Intensity</span><br />
              {{ intensityToWord(workout) }}
            </p>
          </div>
          <div class="col-6 pb-2 text-center">
            <p class="card-text">
              <span class="font-weight-bold">Duration</span><br />
              {{ workout.length }} min
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
            <a href="#" class="btn btn-primary">Video</a>
          </div>
          <div class="col-6 py-2 text-center">
            <a href="#" class="btn btn-primary">Save</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YogaVideoCard",
  props: { workout: {} },
  data() {
    return {
      intensities: [],
    };
  },
  mounted() {
      this.intensities = this.$store.state.intensities;
  },
  methods: {
    intensityToWord(i) {
        console.log(this.intensities[0]);
       for(var x = 0; x < this.intensities.length; x++) {
           if( i.intensity == this.intensities[x]) {
               return this.intensities.intensitiesDescription;
           }
       }
    },
  },
  computed: {},
};
</script>
