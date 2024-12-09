
var mandatoryElements = document.querySelectorAll('.mandatory')
mandatoryElements.forEach(element => {
    element.addEventListener('input',(event) => {
    //console.log(element)
    element.parentElement.classList.remove('is-invalid');

    });
})        

MandatoryValidation = ()=>{
    let submit = true
    mandatoryElements.forEach(element => {
        if (element.value==='')
        {
            element.parentElement.classList.add('is-invalid')
            submit = false
        }        
    });
    return submit
}
//Sample usage    
/*btnSignIn.addEventListener('click', function(e){
      //console.log(this.getAttribute('id'))
      var submit = MandatoryValidation()
      if (submit)
        document.forms["frmlogin"].submit()
    });
*/
