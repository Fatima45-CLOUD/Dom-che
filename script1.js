var box=document.getElementsByClassName("box")
for(let i=0;i<box.length;i++){
    let bntPlus =box[i].children[4].children[2]
    let prixUnit=box[i].children[2].children[1]
   let total=box[i].children[3].children[1]
   let nombre=box[i].children[4].children[1]
   let qty=parseInt(nombre.innerText)
   let prixUnitaire=parseInt(prixUnit.innerText)

   bntPlus.addEventListener("click",function(){
    qty++
    nombre.innerText=qty
    total.innerText=prixUnitaire*qty
    somme()
   })
    let bntmmoins=box[i].children[4].children[0]
  

   bntmmoins.addEventListener("click",function(){ if(qty>0)
    qty-- 
    nombre.innerText=qty
    total.innerText=prixUnitaire*qty
    somme()
})
    let bnt=box[i].children[5].children[0].children[0]
    bnt.addEventListener("click",function(){
        if (bnt.style.color =="red"){
            bnt.style.color = "black"
         }
         else{
             bnt.style.color = "red"
           }
    })
    let produit=box[i]
    let bntdel=box[i].children[5].children[1].children[0]
    if(produit){

        bntdel.addEventListener("click",function(){
            produit.remove();
            somme();
        })
    }
}
let tota1 = document.getElementById('tyu');

function somme() {
    let sum = 0;
    let tota = document.getElementsByClassName("price");

    for (let index = 0; index < tota.length; index++) {
        let totalUnit = parseFloat(tota[index].textContent.trim().replace(/[^\d.-]/g, '')); // Clean up non-numeric characters
        console.log(totalUnit);

        if (!isNaN(totalUnit)) { // Ensure it's a valid number
            sum += totalUnit;
        }
    }

    tota1.innerHTML = sum.toFixed(2); // Optional: Format the result to 2 decimal places
    console.log(sum);
}

