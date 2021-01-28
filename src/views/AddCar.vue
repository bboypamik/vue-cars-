<template>
  <div>
  <form @submit.prevent="onSubmit">
    <div class="mb-3">
      <label for="brand" class="form-label">Brand</label>
      <input required minlength="2" v-model="formData.brand" type="text" class="form-control" id="brand" aria-describedby="brand"/>
    </div>

    <div class="mb-3">
      <label for="model" class="form-label">Model</label>
      <input required minlength="2" v-model="formData.model" type="text" class="form-control" id="model" aria-describedby="model"/>
    </div>
   <div class="mb-3">
      <label for="Engine" class="form-label">Engine</label>
      <input required v-model="formData.engine" type="text" class="form-control" id="engine" aria-describedby="engine"/>
    </div>

    <div class="mb-3">
      <label for="year" class="form-label">Year</label>
      <select required v-model="formData.year">
        <option v-for="year in yearRange" :key="year">
          {{year}}
        </option>
      </select>
    </div>

    <div class="mb-3 form-check">
      <label class="form-label" for="max-speed">Max Speed</label>
      <input min=0 v-model="formData.maxSpeed" type="number" class="form-number-input" id="max-speed">
    </div>
    <div class="mb-3 form-check">
      <label class="form-label" for="isAutomatic">Is Automatic</label>
       <input  type="checkbox" v-model="formData.isAutomatic" class="form-checkbox" name="isAutomatic" value="true">
    </div>
    <div class="mb-3 form-check">
      <label class="form-label" for="numberOfDoors">Number Of Doors</label>
      <input required min=0 v-model="formData.numberOfDoors" type="number" class="form-number-input" id="numberOfDoors">
    </div>

    <button type="submit" class="btn btn-primary m-4">Submit</button>
    <button type="reset" class="btn btn-warning m-4">reset</button>
  </form>
  
    <button @click="preview" class="btn btn-success">Preview</button>
  </div>
</template>

<script>
import CarService from '../services/CarService'
export default {
  methods: {
   async onSubmit(){
     try{
     await CarService.addNewCar(this.formData)
      this.$router.push("/");
     }catch(error){
       console.log(error)
     }
    },

    preview(){
      let message="";
      Object.keys(this.formData).forEach(key=> message+=`${key} : ${this.formData[key]}
`)
      alert(message)
    }
    
  },
  data(){
    return {
      formData: {
        brand: "",
        model: "",
        engine: "",
        year: 2020,
        isAutomatic: false,
        doors: 0,
        maxSpeed: 0
      }
    }
  },
  computed: {
    yearRange(){
      const years = []
      for (let i = 1990; i <= 2021; i++) {
        years.push(i)
      }
      return years;
    }
  }
}
</script>

<style>

</style>
