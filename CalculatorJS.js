var equal_ispressed = false
var oper_pressed = false
var dot_used = false
var eq = [];
var o1;
var waiting_sec = false
single_ispressed=false
localStorage.setItem('eq',JSON.stringify(eq));

//function checklength()
//{
//         var v = document.getElementById('result').value;
//         if (v.length > 10)
//         {
//            window.alert("helox")
//            return false; // keep form from submitting
//         }
//}
function showHistory()
{
    var h=document.getElementsByClassName("History")
    var s=document.getElementsByClassName("secret")
//    window.alert(h[0].style.display)
for(i=0;i<h.length;i++)
    {
    if(h[i].style.display != 'none')
    {
        h[i].style.display='none';
        s[0].style.display=''
    }
    else
    {
        h[i].style.display=''
        s[0].style.display='none'
    }
    }
}

function dis(val)
{
            if(val!='back')
            {
//                if(val == 'sqr')
//                {
//                    calSQR()
//                    equal_ispressed=false
//                }
//                else if(val == '^3')
//                {
//                    calCUBE()
//                    equal_ispressed=false
//                }
//                else if(val == 'sroot')
//                {
//                    calROOT()
//                    equal_ispressed=false
//                }
//                else if(val == '!')
//                {
//                    calFACT()
//                    equal_ispressed=false
//                }
//                else{
//                    if(equal_ispressed != true)
//                    {
                        var v = document.getElementById('result').value;
                        if (v.length > 9)
                        {
                        return false;
                        }
                    }
//                    else
//                    {
//                    }


            if(equal_ispressed ==true)
            {
                if(val == 'sqr')
                {
                    calSQR()
                }
                else if(val == '^3')
                {
                    calCUBE()
                }
                else if(val == 'sroot')
                {
                    calROOT()
                }
                else if(val == '!')
                {
                    calFACT()
                }
                else if(val=='back')
                {
                    onBack()
                }

                else
                {
                    if(val == '+' || val == '-' || val == '*' || val=='/' || val == '**')
                    {
                         document.getElementById("result").value+=val
                         equal_ispressed=false
                    }
                    else
                    {
                    document.getElementById("result").value = val
                    equal_ispressed=false
                    }
                }
            }

            else if(val == 'back')
            {
                onBack()
            }

            else if(val == 'sroot')
            {
                calROOT()
            }

            else if(val == '^3')
            {
                calCUBE()
            }

            else if(val == '!')
            {
                calFACT()
            }

            else if(val == 'sqr')
            {
                calSQR()
            }

            else
            {

               if(single_ispressed==true && val == 'sqr')
               {
               document.getElementById("result").value=val
               }

//               else if(single_ispressed==true && val != 'sqr')
//               {
//               single_ispressed=false
//               document.getElementById("result").value=val
//               }

               else
               {
                    if(document.getElementById("result").value==0)
                    {
                        document.getElementById("result").value=val
                    }

                    else if((val == '.'))
                     {
                    document.getElementById("try1").disabled=true
                    document.getElementById("result").value+=val
                     }

                     else
                     {
                     document.getElementById("try1").disabled=false
                     document.getElementById("result").value+=val
                     }
               }

            }

}


function calCUBE()
{
 let temp = document.getElementById("result").value
                y=Math.pow(temp,3);
                t=temp+"^3 ="+y
                localStoragePush(t);
                document.getElementById("result").value=y
                             equal_ispressed = true;
             document.getElementById("try1").disabled=false
}
function calROOT()
{
let temp = document.getElementById("result").value
                y=Math.sqrt(temp);
                t="&#8730;"+temp+"="+y
                localStoragePush(t);
                document.getElementById("result").value=y
                             equal_ispressed = true;
                document.getElementById("try1").disabled=false
}
function calFACT()
{
let i,fact;
                fact=1;
                let temp = document.getElementById("result").value
                for(i=1; i<=temp; i++)
                    {
                    fact= fact*i;
                    }
                t=temp+"! ="+fact
                localStoragePush(t);
                document.getElementById("result").value=fact
                             equal_ispressed = true;
             document.getElementById("try1").disabled=false
}

function calSQR()
{
                let temp = document.getElementById("result").value
                y=Math.pow(temp, 2);
                t="sqr("+temp+")"+"="+y
                localStoragePush(t);
                document.getElementById("result").value=y
                             equal_ispressed = true;
             document.getElementById("try1").disabled=false

}


function onBack()
{
                if(document.getElementById("result").value == 0)
                {
                }
                if(document.getElementById("result").value == "")
                {
                    document.getElementById("result").value=0
                }
                else
                {
                    document.getElementById("result").value=document.getElementById("result").value.slice(0,-1);
                    if(document.getElementById("result").value == "")
                    {
                    document.getElementById("result").value=0
                    }
                }
}

function solve()
{
        try {
             let x = document.getElementById("result").value
             let y = eval(x)
             t=x+"="+y;

             localStoragePush(t);

             document.getElementById("result").value = y
             }
        catch(SyntaxError)
            {
//            window.alert(SyntaxError.message)
            window.alert("Invalid Expression!")
            document.getElementById("result").value = 0
            }

             equal_ispressed = true;
             document.getElementById("try1").disabled=false

}

function negative()
{
            y=document.getElementById("result").value
            t=parseInt(y)
            t=-t
            document.getElementById("result").value=t
}

function myFunction(item, index) {

            document.getElementById("historylog").innerHTML = item+"<br>";
}

function localStoragePush(t)
{
            eq.push(t);
            localStorage.setItem('eq',JSON.stringify(eq));
            getItemfromLocalStorage();
}


function getItemfromLocalStorage()
{
            x=JSON.parse(localStorage.getItem('eq'))
            document.getElementById("historylog").innerHTML=""
//            document.getElementById("historylog").style.color="gray";
            if(x===null)
            {
                window.alert("innull")
                document.getElementById("historylog").innerHTML ="No history."
            }
            else if(x.length<11)
            {
                for (i = x.length-1; i >=0; i--)
                    {
                        if(i==(x.length-1))
                        {


                        document.getElementById("historylog").innerHTML ="<span style='color:white'>"+x[i]+"</span>"+ "<br>";
                        }
                        else
                        {
                        document.getElementById("historylog").style.color="gray";
                        document.getElementById("historylog").innerHTML += x[i] + "<br>";
                        }
                    }
            }

            else
            {
                r=x.slice(1).slice(-10)
                for (i = r.length-1; i >=0; i--)
                    {
                     if(i==(r.length-1))
                        {
                        document.getElementById("historylog").innerHTML ="<span style='color:white'>"+r[i]+"</span>"+ "<br>";
                        }
                      else
                        {
                        document.getElementById("historylog").style.color="gray";
                        document.getElementById("historylog").innerHTML += r[i] + "<br>";
                        }
                    }
            }
}


function clr()
{
        document.getElementById("result").value=0
}
//            if(waiting_sec == true)
//            {
//                y=Math.pow(o1,val);
//                t=o1+"^"+val+"="+y
//                localStoragePush(t);
//                document.getElementById("result").value=y
//                equal_ispressed=true
//                waiting_sec == false
//            }
//            else if(val == '^')
//            {
//                waiting_sec=true;
//                o1=document.getElementById("result").value
//                document.getElementById("result").value+=val
//                let temp = document.getElementById("result").value
//                y=Math.pow(temp, 2);
//                t="sqr("+temp+")"+"="+y
//                localStoragePush(t);
//                document.getElementById("result").value=y
//            }

