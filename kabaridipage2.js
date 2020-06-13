$(document).ready(function(){
    let CustomerData = JSON.parse(localStorage["CustomerData"]); 
    $("#first").text(CustomerData.first); //GETTING THE VALUE FROM THE DATA WERE ID IS FIRST
    console.log(CustomerData);
    $("#email").text(CustomerData.email);//GETTING THE VALUE FROM THE DATA WERE ID IS EMAIL
    $("#products").text(CustomerData.products);//GETTING THE VALUE FROM THE DATA WERE ID IS PRODUCTS
    $("#quantity").text(CustomerData.quantity);//GETTING THE VALUE FROM THE DATA WERE ID IS QUANTITY

    
    var price = (CustomerData.quantity)*2; //CALACULATION FOR PRICE
  
    $("#total").text(price);


//THIS FOLLOWING ARE ALL ARE THE GETITEM FUCTION OF LOCALSTROAGE TO GET THE VALUE OF EACH INPUT
    document.getElementById('name').innerHTML = localStorage.getItem('first');
    document.getElementById('email').innerHTML = localStorage.getItem('email');
    document.getElementById('quantity').innerHTML = localStorage.getItem('quantity');
    document.getElementById('products').innerHTML = localStorage.getItem('products');
    document.getElementById('final').innerHTML = final;

    




});

