let btn = document.getElementsByTagName("button");

console.log(btn);
let output = document.getElementById("output");
let str="0";
let operation = "";
let res = 0;
let a=0;
let b=0;
let finalOutput=0;
const handleButton=(e)=>{
    const reset=()=>{
        str=parseInt(finalOutput);
        operation="";
        res=0;
        a=0;
        b=0;
        console.log("cleared")
    }
  const calculate=()=>{
    console.log(res);
    b=parseInt(str);
   finalOutput= handleOperation(res,b,operation);
   reset();
    output.innerText=finalOutput;
  }
    if(e=="="){
       calculate();
    }
  else if(isNaN(e)){
    console.log("not a number");
    console.log(operation);
    // for float value
    if(e=="."){

    }


    else if(operation.length>0){
        calculate();
        operation=e;
    }
    else{
        operation += e;
    }
    console.log("operation:" + operation)
    if(res==0){
        res = parseInt(str);
        console.log("res:"+ res);
        str="0";
    }
   
    

  }
  else{
    if(str=="0"){
        str=JSON.stringify(e);
    }else{
        str+=e;
    }
    
    output.innerText=str;   
  }


}

const handleOperation=(res,b,operation)=>{
    switch(operation){
        case "/" : return (res/b);
        case "*" : return(res*b);
        case "-" : return(res-b);
        case "+" : return(res+b);
        default :return ("error");
    }
}