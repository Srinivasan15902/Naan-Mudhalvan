document.addEventListener('DOMContentLoaded', function() {

    var form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var name = document.querySelector('input[name="name"]').value;
        var mail = document.querySelector('input[name="mail"]').value;
        var address = document.querySelector('input[name="address"]').value;
        var num = document.querySelector('input[name="num"]').value;

        console.log('Name: ' + name);
        console.log('Mail: ' + mail);
        console.log('Address: ' + address);
        console.log('Mobile no.: ' + num);
    });
});
