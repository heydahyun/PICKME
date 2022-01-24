      $("#slider").on("input", function() {
        $('.result-output').css("font-size", $(this).val() + "vw");
      });
      $("#slider1").on("input", function() {
        $('.result-output').css("line-height", $(this).val() + "%");
      });
      $("#slider2").on("input", function() {
        $('.result-output').css("letter-spacing", $(this).val() + "px");
      });

      // let bodyTag = document.querySelector("body")
      // let color1 = document.querySelector(".result-output")
      // let font = document.querySelector(".result-output")
      // let color2 = document.querySelectorAll(`input[type=range]`)
      // let colorButton1 = document.querySelector("textarea")
      // let colorButton2 = document.querySelector(".changer2")

      // colorButton2.addEventListener("input", function() {
      //     bodyTag.style.backgroundColor = this.value
      //     color1.style.backgroundColor = this.value
      //     color2.style.backgroundColor = this.value
      // })

      let buttons1 = document.querySelector('.buttons1');
      let clr = buttons1.querySelectorAll('.clr');
      for (var i = 0; i < clr.length; i++) {
        clr[i].addEventListener('click', function(){
          let current = document.getElementsByClassName('active1');
          current[0].className = current[0].className.replace("active1", ""); 
          this.className += " active1";
        })
      }

      let buttons2 = document.querySelector('.buttons2');
      let btn = buttons2.querySelectorAll('.btn');
      for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function(){
          let current = document.getElementsByClassName('active2');
          current[0].className = current[0].className.replace("active2", ""); 
          this.className += " active2";
        })
      }

      function bgWhite() {
        document.body.style.backgroundColor = "#eeeeee";
        document.getElementById('txt').style.backgroundColor = "#eeeeee";
        document.getElementById('txt').style.color = "red";
      } 
      function bgYellow() {
        document.body.style.backgroundColor = '#FFF406';
        document.getElementById('txt').style.backgroundColor = '#FFF406';
        // document.getElementById('txt').style.color = '#FF65BD';
      } 
      function bgBlue() {
        document.body.style.backgroundColor = "#4ECEF1";
        document.getElementById('txt').style.backgroundColor = "#4ECEF1";
      } 
      function bgPink() {
        document.body.style.backgroundColor = "#FF76DD";
        document.getElementById('txt').style.backgroundColor = "#FF76DD";
      } 
      function bgGreen() {
        document.body.style.backgroundColor = "#CAFF00";
        document.getElementById('txt').style.backgroundColor = "#CAFF00";
      } 