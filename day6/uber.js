//write a class to calculate the uber price.

class Uberprice {
  
    constructor(baseFare, perKm, perMinute) {
      this.baseFare = baseFare;
      this.perKm = perKm;
      this.perMinute = perMinute;
    }
    
    getFare(distance, duration){
      return this.distance;
      return this.duration;
    }
    
    getCalFare(){
      let price = this.baseFare +
        (distance * this.perKm) +
        (duration * this.perMinute);
  
      return price;
    }
  }
  
  let uPrice = new Uberprice(6.0, 1.2, 0.2);
  
  let distance = 15;
  let duration = 30;
  console.log(`Amount to be paid is : Rs.${uPrice.getCalFare()}`);