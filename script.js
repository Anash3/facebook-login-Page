$(document).ready(function(){
    $('#login').validate({
        rules:{
            femail:{
                required:true,
                minlength:4,
                email:true
            },
            pass:{
                required:true,
                minlength:4,
                password:true
            }




        }
        
    })
})