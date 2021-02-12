
alert("Developed by M.Azeem")
function hours() {
    
    var h= document.getElementById("hours").value;
    
        document.getElementById("seconds").innerHTML=h+" hours have "+h*3600 +" seconds";
    }
    function year() {
        var d=document.getElementById("age").value;
        
            document.getElementById("days").innerHTML=d+" years have "+d*365+" days";
        }
        function arraysize()
        { var geek=[];
            
        var size =document.getElementById("arraysizeb").value;
        for (let index = 1; index <= size; index++)
         {
             geek[index]=prompt("enter "+index+" numbers")
         }
         for (let index = 1; index <= size; index++) 
         { 
             document.getElementById("arrayshow").innerHTML="Not inverted array    "+geek;
     }
            for (let index = 1; index <= size; index++) 
            { geek[index] *=-1;
                document.getElementById("arrayshowinvert").innerHTML=" inverted array   "+geek;
        }
        
    }
    //--------------------------------------------------------------------------------------------------
   function string()
   {
       var string1=document.getElementById("str1").value;
       var string2=document.getElementById("str2").value;
       var compare=string1.localeCompare(string2);
       if (compare==0) {
           document.getElementById("result").innerHTML="True";
           
       }
       if (compare==-1) {
        document.getElementById("result").innerHTML="False";
        
    }

   }
   function leapyear()
   {
       var result =document.getElementById("leap").value;
       
       if (result%4==0) {
        document.getElementById("year").innerHTML=result+" is leap year"; 
       }
       if (result%4==1 ||result%4==2 || result%4==3) 
           
       
       {
           document.getElementById("year").innerHTML=result+" is not leap year";
       }
       
   }
   function corona()
   {
       var recover=document.getElementById("recover").value;
       var newcases=document.getElementById("new").value;
       var active=document.getElementById("active").value;
       var day=active/(recover-newcases);
      var uprounddays= Math.ceil(day)
       document.getElementById("coronaDays").innerHTML="After "+uprounddays+" days CORONA will end ";
   }
    
