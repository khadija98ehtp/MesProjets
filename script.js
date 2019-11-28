/**
 * form initialization
 */

 //MINE**********
// const btn=document.querySelector('.btn');
// btn.addEventListener('click',(e)=>{
//     document.querySelector('#my-form').style.background='#ccc';
//     document.querySelector('body').classList('bg-dark');
// });
// const myForm=document.querySelector('#my-form');
// const nameInput=document.querySelector('#name');
// const emailInput=document.querySelector('#mail');
// const msg=document.querySelector('.msg');
// function onSubmit(e){
//     e.preventDefault();
//     if (nameInput.value=='' || emailInput.value==''){
//         // msg.classList.add('error');
//         // msg.innerHTML='ce champ est obligatoire';
//         // setTimeout(()=>msg.remove(),3000);
//         alert('please enter fields');
//     }
//     else {
//         console.log('success');
//     }
// }
// myForm.addEventListener('submit',onSubmit);
//MINE*************
function formInit() {
    const form = document.querySelector('form')
    form.reset()
    // hide unnecessary fields//disabled

    $("#other-title").hide();
    $("#colors-js-puns").hide();
    $("#credit-card").hide();
    $("#paypal").hide();
    $("#bitcoin").hide()
        //})
    //      other-title
    //      colors-js-puns
    //      credit-card
    //      paypal
    //      bitcoin
    
    // Add activities cost container

    // Disable T-Shirt color select


}

/**
 * @param  {} evt
 */
function updateAcivitiesRegistration(evt){
    var totCost=0;
    var compteur=0;
    var myActi=$('.activities input'); //retourner la liste des activitées
    var n=myActi.length;
    var dateAtci=this.getAttribute('data-day-and-time');//retourne la date de l'evenement courant
    if (this.checked==true) //vérifier si le client a cliqué
    {for (var i=0;i<n;i++)
    { //let dateActiV=myActi[i].getAttribute('data-day-and-time');
    if (dateActi==myActi[i].getAttribute('data-day-and-time'))    
    { $(myActi[i]).attr('disabled',true);
            $(myActi[i]).parent().addClass("activity-disabled");
        }
    else {
        $(myActi[i]).attr('disabled',false);
        $(myActi[i]).parent().removeClass("activity-disabled");
    }
    }}
    
    for (var j=0;j<n;j++)
        {
            if (myActi[i].checked==true)
            {
                var costString=$(myActi[i]).data('cost'); //retourne le cost précédé par un $ 
                var f=costString;
                totCost+=parseInt(costString.substring(1,f));//le $ du début n'est pas pris en considération
                compteur++;
            }
        }

    
   
}

/**
 * called when the user selects the other option of Job role select
 */
function updateJobRole() {
    // When the user chooses the 'other' option, 
    // the 'title' text box should be displayed
    if (this.value=="other"){
        $("#other-title").show();
    }else{$("#other-title").hide();}
}

/**
 * Called when the user selects a design theme
 * @param  {} evt
 */
function updateTShirtColor(evt) {
    // depending on the color theme chosen by the user, 
    // display only the corresponding options.

var myList=$("#color").children("option");
if(this.value=="JS Puns"){
for (var i=0;i<myList.length;i++){
    if (i>3){
        $(myList[i]).prop('disabled',true);
        $("#colors-js-puns").show();
    }  
    if ((i==1)||(i==2)||(i==3)||(i==0)){$(myList[i]).prop('disabled',false);
    $("#colors-js-puns").show();} 
}}
else{
    for (var i=0;i<myList.length;i++){
        if ((i==1)||(i==2)||(i==3)){
            $(myList[i]).prop('disabled',true);
            $("#colors-js-puns").show();
        }   
        if ((i>3)||(i==0)){$(myList[i]).prop('disabled',false);
        $("#colors-js-puns").show();}
    }}
}


/**
 * Called when the user selects the payment method
 */
 
function updatePaymentInfo() {
    // depending on the choice of payment type, 
    // the corresponding fields are displayed.
    if (this.value=="Credit Card"){
        $("#credit-card").show();}
    if(this.value=="PayPal")
    {$("#credit-card").hide();
    $("#paypal").show();}
    if(this.value=="Bitcoin")
     {$("#credit-card").hide();
    $("#bitcoin").show();}
}

/**
 * validate a specific rule and show error if any
 * @param  {} rule
 */
function validate(rule){
    // Executed for each of the rules in the table given at the end. 
    // Depending on the rule type and if there is an error, 
    // it is displayed in a 'div' tag with the class 'error' 
    // and added before the validated field

    // if (nameInput.value=='' || emailInput.value==''){
    //   msg.classList.add('error');
    //    msg.innerHTML='ce champ est obligatoire';
    
    //     if ("user-name" == '') {
    //         nameError = "Please enter your name";
    //         document.getElementById("name_error").innerHTML = nameError;
    //         submit = false;
    //     }
    
    //     if ("user-email" == '') {
    //         emailError = "Please enter your email";
    //         document.getElementById("email_error").innerHTML = emailError;
    //         submit = false;
    //     }
    
        // if (z == null || z == "") {
        //     telephoneError = "Please enter your telephone";
        //     document.getElementById("telephone_error").innerHTML = telephoneError;
        //     submit = false;
        // }
    
        // return submit;
    }
    
  

document.addEventListener('DOMContentLoaded', formInit)

$('#title').on('change', updateJobRole)

$('.activities').on('change', '[type=checkbox]', updateAcivitiesRegistration)

$('#design').on('change', updateTShirtColor)

$('#payment').on('change', updatePaymentInfo)

$('form').on('submit', (evt) => {
    evt.preventDefault()
    // remove all previous errors before computing the overall validation
    $('form .error').remove()
    validationRules.forEach(validate)
})

// all validation rules array.  
const validationRules = [
    {
        type: 'regExp',
        selector: '#name', 
        regExp: /^[AZ][AZ',\.\-]+$/i,
        errorMessage: 'This field must contains at least 2 characters'
    },
    {
        type: 'regExp',
        selector: '#mail', 
        regExp: /^[^@]+@[^@]+$/,
        errorMessage: 'Please enter a valid email'
    },
    {
        type: 'regExp',
        selector: '#cc-num', 
        regExp: /^d{13,16}$/,
        errorMessage: 'Please enter a valid credit card Num'
    },
    {
        type: 'regExp',
        selector: '#zip', 
        regExp: /^d{5}$/,
        errorMessage: 'Please enter a valid zip code'
    },
    {
        type: 'regExp',
        selector: '#cvv', 
        regExp: /^d{3}$/,
        errorMessage: 'Please enter a valid CVV'
    },
    {
        type: 'multiCheck',
        tag: 'input:checked',
        selector: '.activities', 
        minValues: 1,
        errorMessage: 'Please check at least one activity'
    },
    {
        type: 'empty',
        selector: '#title', 
        errorMessage: 'Please select a job title'
    },
    {
        type: 'empty',
        selector: '#design', 
        errorMessage: 'Please select a design theme'
    },
    {
        type: 'empty',
        selector: '#colors-js-puns select', 
        errorMessage: 'Please select a color'
    },
    {
        type: 'empty',
        selector: '#exp-month', 
        errorMessage: 'Please select a month'
    },
    {
        type: 'empty',
        selector: '#exp-month', 
        errorMessage: 'Please select an expiration year'
    },
    {
        type: 'empty',
        selector: '#payment', 
        errorMessage: 'Please select a payment method'
    },
    
]

