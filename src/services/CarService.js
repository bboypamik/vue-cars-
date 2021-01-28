import http from "./BaseService";

class CarService {
  async getAll() {
    try {
      const response = await http.get("cars");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async addNewCar(car) {
    try {
      const response = await http.post("cars", car);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(carId) {
    const response = await http.delete(`cars/${carId}`);
    return response.data;
  }
  catch(error) {
    console.log(error);
  }
}
const carService = new CarService();
export default carService;
