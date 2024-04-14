function verifier() {
    var prenom = document.getElementById('prenom').value.trim();
    var nom = document.getElementById('nom').value.trim();
    var email = document.getElementById('email').value.trim();
    var tel = document.getElementById('tel').value.trim();
    var ville = document.getElementById('ville').value.trim();
    var mdps = document.getElementById('mdps').value.trim();

    if (prenom == '') {
        alert('Veuillez verifier  votre prénom.');
        return;
    }

    if (nom == '' ) {
        alert('Veuillez verifier votre nom.');
        return;
    }

    if (email == ''|| email.IndexOf('@')<0) {
        alert('Veuillez verifier votre adresse e-mail.');
        return;
    }

    if (tel == ''|| tel.length!=8) {
        alert('Veuillez verifier votre numéro de téléphone.');
        return;
    }

    if (ville === '') {
        alert('Veuillez sélectionner une ville.');
        return;
    }

    if (mdps === '' || mdps.length<8) {
        alert('Veuillez entrer votre mot de passe.');
        return;
    }
}
