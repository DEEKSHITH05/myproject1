
      function mycal(){
          var mat=parseInt(document.getElementById("m1").value);
          var sac=parseInt(document.getElementById("s1").value);
          var eng=parseInt(document.getElementById("e1").value);

          var toth=mat+sac+eng;
          var maxmarks=300;
          var per = (toth/maxmarks)*100;
          // alert(toth)
          document.getElementById("toth1").innerText=toth;
          document.getElementById("toth2").innerText=maxmarks;
          document.getElementById("toth3").innerText=per;

      }
