<template>
  <div>
      <table class="table">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Brand</th>
            <th scope="col">Model</th>
            <th scope="col">Year</th>
            <th scope="col">Max Speed</th>
            <th scope="col">Automatic</th>
            <th scope="col">Engine</th>
            <th scope="col">Doors</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="car in cars" :key="car.id">
							<td>{{car.id}}</td>
							<td>{{car.brand}}</td>
							<td>{{car.model}}</td>
							<td>{{car.year}}</td>
							<td>{{car.maxSpeed}}</td>
							<td>{{car.isAutomatic}}</td>
							<td>{{car.engine}}</td>
						<td>{{car.numberOfDoors}}</td>
                        <td>
                        <button class="btn btn-primary">edit</button>
                        </td>
                        <td>
                        <button @click.prevent="deleteCar(car)" class="btn btn-danger">X</button>
                        </td>
            </tr>
        </tbody>
        </table>
  </div>
</template>

<script>
import CarService from '../services/CarService'
export default {

  data(){
    return{
    cars: []
    }
  },
  async created() {
     this.cars = await CarService.getAll()
  },

  methods: {
    async deleteCar(car){
      await CarService.delete(car.id)
      this.cars = this.cars.filter(c => c.id != car.id)
    }
  }

}
</script>

<style>

</style>
