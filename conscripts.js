function sendmain(){
    let send_details={
        from:document.getElementById('fname').value,
        email:document.getElementById('email').value,
        subject:document.getElementById('subject').value,
        comment:document.getElementById('comment').value
    }
    emailjs.send('service_kbder2m','template_mm2pl8a',send_details).then(but_property()).catch((error)=>{alert('error')},);
}

function but_property(){
    
    document.getElementById('send').style.display='none';
    document.getElementById('disSent').style.display='block';
}
