function def(){
    if(defectos.includes(modelo)){
        alert("el automóvil esta defectuoso, llevar a garantía")
    }else{
        alert("Su automóvil no está defectuoso")
    }
}
const defectos=[119,179,189,190,191,192,193,194,195,221,780]
modelo= parseInt(prompt("Digite el modelo de su auto:"))
console.log(def())

