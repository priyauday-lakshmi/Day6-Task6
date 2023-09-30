//Question 2

class Circle {
  
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
    
    getRadius(radius) {
      return "the radius" +this.radius ;
    }
    
    setRadius(setradius) {
      this.radius = setradius;
    }
    
    getColor(color){
      return "This Color" +this.color;
    }
    
    setColor(setcolor) {
      this.color = setcolor;
      
    }
    
    toString() {
      return `Circle[radius = ${this.radius}, color = ${this.color}]`;
    }
    
    getArea(radius) {
      let area = Math.floor( Math.PI * this.radius * this.radius) ;
      return parseFloat(area.toFixed(2));
      
    }
    
    getCircumference(radius) {
       let circum = Math.floor(2 * Math.PI * this.radius);
       return parseFloat(circum.toFixed(2));
    }
  }
    
    var res = new Circle(5, "red");
    
    console.log(res.toString());
    console.log(res.getArea());
    console.log(res.getCircumference);