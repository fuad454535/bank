function fuad(inputId){
    const inputField=document.getElementById(inputId);
   const inputValue=parseFloat(inputField.value);
   inputField.value=' '; 
   return inputValue;
}
function paw(elementId){
    const textElement=document.getElementById(elementId);
    const elementString=textElement.innerText;
    const value=parseFloat(elementString);
    return value;
}
function setValue(elementId,newValue){
    const textElement=document.getElementById(elementId);
    textElement.innerText=newValue;
}


document.getElementById('btn-deposit').addEventListener('click',function(){

 const newDepositAmount= fuad('deposit-field');
 const previousDepositTotal=paw('deposit-total');
 newAmount=newDepositAmount+ previousDepositTotal;
 console.log(newAmount);
  setValue('deposit-total',newAmount);

const previousBalance=paw('balance-total');
const newBalance=previousBalance+newDepositAmount;
setValue(newBalance);
})