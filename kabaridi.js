$(document).ready(function(){
    $("#customerForm").validate({    // it is user validation if thier is no input ask user to type or give a error
        rules:{
            firstName: "required",
            email: "required"
        },
        messages:{
            firstName: "First name is required",
            Email: "Email is required"
        },
        errorElement: "em",
        submitHandler: saveCustomerData
    })
});
//storing the user input in a local variable 
function saveCustomerData(form){
    // pick the data from the inputs
    let first = $("input[name=first]").val();
    let email = $("input[name=email]").val();
    let products = $("select[name=products]").val();
    let quantity = $("input[name=quantity]").val();

    // store the data in the object
    let CustomerData = {
        first: first,
		email: email,
        products:products,
        quantity:quantity
	};
    console.log(CustomerData);
    //stroing all the input in the local variable
	localStorage["CustomerData"]=JSON.stringify(CustomerData);
    form.submit();
}