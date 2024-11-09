function SendMail(){
    var params = {
            from_name : document.getElementById('fullname').value,
            email_id : document.getElementById('email_id').value,
            message : document.getElementById('message').value,
        }
        emailjs.send("service_mi1kvnp", "template_2rqyq58", params).then(function (res) {
                alert('Email sent successfully!' + res.status);
    })

   
}


console.log("hello")