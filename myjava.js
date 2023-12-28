function myfunc(mychoice){
    
    
    let num= Math.random()*3;
        let compchoice;
        
        if(num>=0 && num<=1){
             compchoice='bat';
        }
        else if(num>1 && num<=2){
            compchoice='ball';
        }
        else{
            compchoice='stump';
        }
        let result;
        if(mychoice===compchoice){
            result=`Its a Tie`;
            
        }
        else{
            if(mychoice==='bat'){
                if(compchoice==='ball'){
                    result=`You Won`;
                    
                }
                else if(compchoice==='stump'){
                    result=`Computer Won`;
                    
                }    
            }
            if(mychoice==='ball'){
                if(compchoice==='bat'){
                    result=`Computer Won`;
                    
                }
                else if(compchoice==='stump'){
                    result=`You Won`;
                    
                }    
            }
            if(mychoice==='stump'){
                if(compchoice==='ball'){
                    result=`Computer Won`;
                    
                }
                else if(compchoice==='bat'){
                    result=`You Won`;
                    
                }    
            }
        }
        if(result==`You Won`){
            document.getElementById("output").style.color="green";

        }
        else if(result==`Computer Won`){
            document.getElementById("output").style.color="red";
        }
        else{
            document.getElementById("output").style.color="blue";
        }
       document.querySelector("#p1").innerHTML=mychoice;
       document.querySelector("#p2").innerHTML=compchoice;
        document.querySelector('#output').innerHTML= result;
       
        
        
}


