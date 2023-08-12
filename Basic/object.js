const car = {
    name : "Toyota",
    color : "White",
    model : "G Corolla",
    weight : "1300 KG",

    start : function () {
        console.log("Car is starting");
    },
    drive : function(){
        console.log("Car is in driving mode");
    },
};

car.start();
console.log(car.name,car.model);
car.drive();