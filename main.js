//form fucction

document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("#submit").disabled=true;
    document.querySelector(".moamenn").onkeyup=function(){
        if(document.querySelector(".moamenn").value.indexOf("@") == -1){
            document.querySelector("#submit").disabled=true;
        }
        else if(document.querySelector(".moamenn").value.length>5){
            document.querySelector("#submit").disabled=false;
        }
        else{
            document.querySelector("#submit").disabled=true;
        }
}
})

function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/GAVdRjWK8K78OpVH/',
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function(){
            alert("Send Message Done, Thank You :)")
        },
        error: function(){
            alert("There was an error :(")
        }
        });
        document.getElementById("myForm").reset();
        document.querySelector("#submit").disabled=true;
}

//fucktion dark and light mood
function dark(){
    var img44=document.getElementById('img4-4')
    var asmma=document.getElementById("asmma");
    var sec7img=document.getElementById('sec7img')
    var back=document.getElementById('back');
    var logo = document.getElementById('logo');
    var arrow=document.getElementById('arrowp');
    var icon= document.getElementById('icon');
    var img1=document.getElementById('img1');
    var img2=document.getElementById('img2');
    var img3=document.getElementById('img3');
    var img42=document.getElementById('img4-2');
    var img43=document.getElementById('img4-3');
    var log=document.querySelector('.yasser');
    var element=document.body;
    element.classList.toggle("dark-mode");
    if(element.classList.contains("dark-mode")){
        icon.src="image/moon.png";
        arrow.src="image/arrowp.png";
        logo.src="image/image-removebg-preview (6) 1.png";
        back.src="image/Group (1).png";
        img1.src="image/Catalog 1 (1).png";
        img2.src="image/Catalog 2 (1).png";
        img3.src="image/Catalog 3 (1).png";
        img42.src="image/Group 1000004165 (1).png";
        img43.src="image/Frame 1000004166 (1).png";
        sec7img.src="image/Screenshot 2023-10-25 221343.png";
        log.src="image/image-removebg-preview (6) 1.png";
        asmma.src="image/DE1EC5D9-2E76-4344-B4BD-C665D47D6C74-removebg-preview 1 (3).png";
        img44.src=""
    }
    else{
        icon.src="image/Sun.png";
        arrow.src="image/Up Arrow.png";
        logo.src="image/LOGO.png";
        back.src="image/Group.png";
        img1.src="image/Catalog 1.png";
        img2.src="image/Catalog 2.png";
        img3.src="image/Catalog 3.png";
        img42.src="image/Group 1000004165.png";
        img43.src="image/Frame 1000004166.png";
        sec7img.src="image/Screenshot 2023-10-25 152746.png";
        log.src="image/LOGO.png";
        asmma.src="image/DE1EC5D9-2E76-4344-B4BD-C665D47D6C74-removebg-preview 1 (2).png";
    }
}



//function nav bar
document.addEventListener("DOMContentLoaded",function(){
    burger=document.querySelector(".fa-bars");
        burger.onclick=function(){
            navbar=document.querySelector(".topnav");
            navbar.classList.toggle("active");
}
})