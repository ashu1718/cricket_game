let ext=localStorage.getItem('decision');

let decision=JSON.parse(ext) || {
    win:0,
    lost:0,
    tie:0,
};

function myfunc2(){
    localStorage.clear();
    location.reload();
}
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
            decision.tie++;
        }
        else{
            if(mychoice==='bat'){
                if(compchoice==='ball'){
                    result=`You Won`;
                    decision.win++;
                    
                }
                else if(compchoice==='stump'){
                    result=`Computer Won`;
                    decision.lost++;
                }    
            }
            if(mychoice==='ball'){
                if(compchoice==='bat'){
                    result=`Computer Won`;
                    decision.lost++;
                }
                else if(compchoice==='stump'){
                    result=`You Won`;
                    decision.win++;
                }    
            }
            if(mychoice==='stump'){
                if(compchoice==='ball'){
                    result=`Computer Won`;
                    decision.lost++;
                }
                else if(compchoice==='bat'){
                    result=`You Won`;
                    decision.win++;
                    
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
       let win=decision.win;
       let lost=decision.lost;
       let tie=decision.tie;

       document.querySelector('#p3').innerHTML=`Win: ${win} Lost: ${lost} Tie: ${tie}`;
        document.querySelector('#output').innerHTML= result;
        localStorage.setItem('decision', JSON.stringify(decision));
        console.log(decision);
        
}


