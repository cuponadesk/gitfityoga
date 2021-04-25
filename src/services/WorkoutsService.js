import axios from 'axios';

  export default{

    getWorkouts(intensity, length, equipment) {
        let query = "?time=" + length + "&intensity=" + intensity +
        "&equipment=" + equipment;
        return axios.get('/workouts' + query);
    },

    getAll() {
        return axios.get(`/workouts`);
    }


  }