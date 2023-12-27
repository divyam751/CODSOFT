let btn = document.getElementsByTagName("button");

console.log(btn);
let output = document.getElementById("output");
let str="0";
let operation = "";
let res = 0;
let b=0;
let finalOutput=0;
const reset=( display=false)=>{
    str=finalOutput;
    operation="";
    res=0;
    b=0;
    console.log("cleared")
    if(display){
      output.innerText=0;
      str=""
    }
} 
const handleButton=(e)=>{
  const calculate=()=>{
    console.log(res);
    b=parseFloat(str);
   finalOutput= handleOperation(res,b,operation);
   reset();
    output.innerText=finalOutput;
  }
    if(e=="="){
       calculate();
    }
  else if((e!==".") && isNaN(e)){
    console.log("not a number");
    console.log(operation);
    // for float value
    if(e=="."){
      console.log("here we are")
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
        // res = parseInt(str);
        res = parseFloat(str);
        console.log("res:"+ res);
        str="0";
    }

  }
  else{
    if(str=="0"){
        str=e.toString();
    }else{
        str+=e.toString();
    }
    
    output.innerText=(str);   
  }


}

const handleOperation=(res,b,operation)=>{
    switch(operation){
        case "/" : return (res/b);
        case "*" : return(res*b);
        case "-" : return(res-b);
        case "+" : return (res+b);
        default :return ("error");
    }
}