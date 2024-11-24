try{async function getData(){
   
    var products=await fetch(`https://ecommerce.routemisr.com/api/v1/products`);
    var allProducts=await products.json();
    var arrayOfProduct=allProducts.data;
     displayProduct(arrayOfProduct);
    console.log(arrayOfProduct);
}getData();
}
catch(error)
{
document.getElementById("rowData").innerHTML=`<h3 class="p-2 text-center">${error}</h3>`
}



var container=[];
 function displayProduct(container){

    cartona=``;
    for(var i=0; i< container.length; i++){
        cartona+=`<div class="col col-md-2 my-4">
                    <div class="div-img mt-2 mb-1">
                        <img src="${container[i].imageCover}" alt="ssaa" srcset="">

                    </div>
                     
                    <h3 class="m-0" > ${container[i].title.split(" ").splice(0,2).join(" ")}</h3>
                    <h4>Price:  ${container[i].price}</h4>
                </div>`
    }
    document.getElementById("rowData").innerHTML=cartona;
    console.log("jhjgbjh")
    
 }