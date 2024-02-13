let colArray=['red' ,'maroon' , 'black'];
    let i=0;
    $(function(){
    $('#interval').css(
        {
            padding: '60px' ,
            height: '800px',
            width: '1200px' ,
        }
    );
        setInterval(function(){
            changeColor();
            },1000);
                function changeColor(){
                    $('#interval').css({backgroundColor:colArray[i]});
                    if(i==(colArray.length-1))
                    i=0;
                    else
                    i++; 
                    }
});

