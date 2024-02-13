function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("myslides");
    var dots = document.getElementsByClassName("dot");
    if(n > slides.length) {slideIndex = 1}
    if(n < 1) {slideIndex = slides.length}
    for(i  =0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0;i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
}

var myIndex=0;
    carousel();
        function carousel(){
            var i;
            var x=document.getElementsByClassName("myslides")
                for(i=0;i<x.length; i++){
                        x[i].style.display="none";
                    }
                myIndex++;
                if(myIndex > x.length){myIndex = 1}
                x[myIndex-1].style.display="block"
            setTimeout(carousel,750);
}