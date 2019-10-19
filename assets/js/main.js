
    AOS.init({
        once: true,
        duration :1000
      });
  
  function myFunction(x) {
      x.classList.toggle("change");
    }
  
  /*start loading section*/
  $(document).ready(function(){
    $(".loading").fadeOut(1000, function(){
      $("body").css("overflow","auto");
    });
  });
    
  /* end loading section*/ 
  
  /*start btnUp*/
  
  
      $("#btnUp").css("display","none");
  
      // let btnOffset = $(".awesomeWeb").offset().top; 
  
      $(window).scroll(function(){
  
        let btnFadeOffset = $(window).scrollTop();
        if(btnFadeOffset > 500)
        {
          $("#btnUp").css("display","block",function(){
            $("#btnUp").fadeIn(1000);
          })
          
        }
        else
        {
          $("#btnUp").fadeOut(1000);
        }
      });
  
  $("#btnUp").click(function(){
  
    $("body,html").animate({scrollTop:0}, 1500);
  });
  /*end btnUp*/ 
  
  
  

  

  
    /*start nav offset*/ 
  
    // let teamOffset = $(".awesomeWeb").offset().top;
    $(window).scroll(function(){
  
      let scrollTop =  $(window).scrollTop();
  
      if(scrollTop > 500)
      {
        // animated fadeInDown
        $(".team-nav").addClass("fixed-top animated fadeInDown ");
  
      }
      else
      {
        $(".team-nav").removeClass("fixed-top");
  
      }
  
  
    });
    /*end nav offset*/
  
  
  /* start addtional Section clicking*/


  let addtionalRequestBtn = document.getElementsByClassName("addtionalRequestBtn");

    $(addtionalRequestBtn).click(function(){
      
      $(".additionSection").css("display","block");
    });

    let deleteBtn2 = document.getElementsByClassName("deleteBtn2");

    $(deleteBtn2).click(function(){
      
      $(".additionSection").css("display","none");
    });
  /* end addtional Section clicking*/
  