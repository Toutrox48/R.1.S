do{
ocu=String(prompt("esta ocupado?: (si) o (no)"))
ocu == si ? alert("Si, esta ocupado...") : ocu == no ? alert("No,no esta ocupado"): alert(`que se supone que responda a ${ocu}`)
salir=String(prompt("desea salir? si - no"))
}while(salir == "no")