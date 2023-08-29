let display=document.getElementById("display")
let buttons=document.querySelectorAll("button");
let operand1=0;
let operator=null;
let operand2=null;
function isoperator(value)
{
    return value=="+" || value=="-" || value=="X" || value=="/";
}
for(let i = 0;i<buttons.length;++i){
    buttons[i].addEventListener("click",() => {
    let text=buttons[i].textContent;
    if(isoperator(text))
    {
        operator=text;
        display.textContent="";
        operand2=0;
        return;
    }
    if(text=="=")
    {
        if(operator==null)
        {
            display.textContent=operand1;
        }
        else 
        {
            if(operator=="+")
            {
                display.textContent=operand1+operand2;
            }
            if(operator=="-")
            {
                display.textContent=operand1-operand2;
            }
            if(operator=="X")
            {
                display.textContent=operand1*operand2;
            }
            if(operator=="/")
            {
                display.textContent=operand1/operand2;
            }
        }
        operand2=null;
        operator=null;
        operand1=parseFloat(display.textContent);
        return;
    }
    if(text=="AC")
    {
        operand1=0;
        operand2=null;
        operator=null;
        display.textContent="";
        return ;
    }
    if(text=="+/-")
    {
        if(operand2==null)
        {
            operand1=-1*operand1;
            display.textContent=operand1;
        }
        else{
            operand2=-1*operand2;
            display.textContent=operand2;
        }
        return;

    }
    if(text=="%")
    {
        if(operand2==null)
        {
            operand1=operand1/100;
            display.textContent=operand1;
        }
        else{
            operand2=operand2/100;
            display.textContent=operand2;
        }
        return;

    }
    if(operand2!==null)
    {
        display.textContent+=text;
        operand2=parseFloat(display.textContent);
        return;
    }
    display.textContent+=text;
    operand1=parseFloat(display.textContent);
});
}