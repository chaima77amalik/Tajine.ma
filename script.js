function calculerAge(date){
    let today = new Date();
    let birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
function validationForm(){
    let errorAlert = document.getElementById('errorAlert');
    let prénom = document.forms['inscriptionForm']['prénom'].value // .value bach e afficher lina ghi dik la valeure li bghina matalan smya bouchra kon madrnavh haka gayafficher lina input kaalma li hya objet
    let password = document.forms['inscriptionForm']['motDePasse'].value
    let nom = document.forms['inscriptionForm']['nom'].value;
    let date = document.forms['inscriptionForm']['dateDeNaissance'].value
    
    
    if (prénom == "") {
        errorAlert.innerHTML = '<strong>Attention!</strong> Le champ prénom est obligatoire'
        errorAlert.classList.remove('d-none') // z3ma fach nktbo smya imchy dak lmsg dyal attention
        return false;
    }
    
    
    if (nom == "") {
        errorAlert.innerHTML = " <strong>Attention!</strong> Le champ nom est obligatoire !"
        errorAlert.classList.remove('d-none')
        return false;
    }
    
       
    
    n = 6
    if (password.length < n) {
        errorAlert.innerHTML = " <strong>Attention!</strong> Le mot de passe doit contenir au moins " + n + " caractères!"
        errorAlert.classList.remove('d-none')
        return false;
    }
    
    if (calculerAge(date) < 18) {
        errorAlert.innerHTML = " <strong>Attention!</strong> Vous être mineur!"
        errorAlert.classList.remove('d-none')
        return false;
    }

 infoAlert.innerHTML = " <strong>Success!</strong> Votre inscription a été valider !"
        infoAlert.classList.remove('d-none')
        return false;
    
}

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4, 
  // items change number for slider display on desktop
  
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});