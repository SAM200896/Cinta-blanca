var Platillos = ["Enchiladas","Taco","Tamal","Pozole","Barbacoa","Picada"];

function eat() {
  for(i = 0; i < Platillos.length; i++){
    console.log(Platillos[i])
  }
}
eat()

function PlatilloIdeal(clima){
    if (clima === "Frio"){
        console.log('Pozole y Barbacoa')
    }else{
        console.log('platillos')
    }
  }
  PlatilloIdeal('Frio')