const myCar = {
    brand: "Volkswagen",
    type: "E-Golf",
    ranges: [135 , 160 , 185 , 170 , 215 , 280],
    acceleration: 9.6,
    topSpeed: 150, 
    power: 100,
    gear: "Automatic",
    drive: "Front",
    engineOn: false, 
    output: function(){
        alert(JSON.stringify(myCar))
    },
    engine: function(){
        if (this.engineOn===true){
            console.log("vroom")
        } else {console.log("ignition is off")
            
        }
    }
}
console.log(myCar.output())
console.log(myCar.engine())