function lable(lab,fo,name,inner){
    var nam=document.createElement(lab)
    nam.setAttribute(fo,name)
    nam.innerHTML=inner
    return nam;
}
function int(iput,typ,nam,id,nam1,place,plname){
    var ele=document.createElement(iput)
    ele.setAttribute(typ,nam)
    ele.setAttribute(id,nam1)
    ele.setAttribute(place,plname)
    return ele;
}
function intt(iput,typ,nam,id,nam1,place,plname,clas,butt){
    var ele=document.createElement(iput)
    ele.setAttribute(typ,nam)
    ele.setAttribute(id,nam1)
    ele.setAttribute(place,plname)
    ele.setAttribute(clas,butt)
    return ele;
}
function int1(iput,typ,nam,id,nam1){
    var ele=document.createElement(iput)
    ele.setAttribute(typ,nam)
    ele.setAttribute(id,nam1)
    return ele;
}
function brak(bar){
    var br=document.createElement(bar)
    return br;
}

var head=document.createElement("h1")
head.innerHTML="Form Submission"
//name
var firstname=lable("label","for","firstname","First Name:")
var br1=brak("br")
var input1=int("input","type","text","id","firstname","placeholder","First Name")
var br2=brak("br")
var lastname=lable("label","for","lastname","Last Name:")
var br3=brak("br")
var input2=int("input","type","text","id","lastname","placeholder","Last Name")
var br4=brak("br")
//address
var add1=lable("lable","for","add1","Address Line1:")
var br5=brak("br")
var input3=int("input","type","text","id","add1","placeholder","Address Line1")
var br6=brak("br")
var add2=lable("lable","for","add2","Address Line2:")
var br7=brak("br")
var input4=int("input","type","text","id","add2","placeholder","Address Line2")
var br8=brak("br")
var pin=lable("label","for","pin","PIN:")
var br9=brak("br")
var input5=int("input","type","number","id","pin","placeholder","PIN")
var br10=brak("br")
//gender
var gen=lable("lable","for","gen","Gender:")
var br11=brak("br")
var input6=int("input","type","radio","id","gen1","class","gender")
var genm=lable("lable","for","gen1","Male")
var input7=int("input","type","radio","id","gen2","class","gender")
var genf=lable("lable","for","gen2","Female")
//checkbox
var brr=brak("br")
var food=lable("lable","for","food","Choice of Food:")
var par="(Must Choice of at least 2 out of 5)"
var br12=brak("br")
var input8=int("input","type","checkbox","id","check1","class","checkboxs")
var check1=lable("lable","for","check1","South Indian Food")
var br13=brak("br")
var input9=int("input","type","checkbox","id","check2","class","checkboxs")
var check2=lable("lable","for","check2","North Indian Food")
var br14=brak("br")
var input10=int("input","type","checkbox","id","check3","class","checkboxs")
var check3=lable("lable","for","check3","Chinese Food")
var br15=brak("br")
var input11=int("input","type","checkbox","id","check4","class","checkboxs")
var check4=lable("lable","for","check4","Mexcican Food")
var br16=brak("br")
var input12=int("input","type","checkbox","id","check5","class","checkboxs")
var check5=lable("lable","for","check5","Only VEG")

//state
var state=lable("label","for","state","State:")
var br17=brak("br")
var input13=int("input","type","text","id","state","placeholder","State")
var br18=brak("br")
//country
var country=lable("label","for","con","Country:")
var br19=brak("br")
var input14=int("input","type","text","id","con","placeholder","Country")
var br20=brak("br")
//table
var h1=document.createElement("h1")
h1.innerHTML="Temporary Database"
var tab=document.createElement("table")
var tab1=document.createElement("thead")
var tab2=document.createElement("tr")
var th1=document.createElement("th")
var th2=document.createElement("th")
var th3=document.createElement("th")
var th4=document.createElement("th")
var th5=document.createElement("th")
var th6=document.createElement("th")
var th7=document.createElement("th")
var th8=document.createElement("th")
var th9=document.createElement("th")
tab.setAttribute("class","table")
tab1.setAttribute("class","thead-dark")
th1.setAttribute("scope","col")
th2.setAttribute("scope","col")
th3.setAttribute("scope","col")
th4.setAttribute("scope","col")
th5.setAttribute("scope","col")
th6.setAttribute("scope","col")
th7.setAttribute("scope","col")
th8.setAttribute("scope","col")
th9.setAttribute("scope","col")
th1.innerText="FirstName"
th2.innerText="LastName"
th3.innerText="Address Line1"
th4.innerText="Address Line2"
th5.innerText="PIN"
th6.innerText="Gender"
th7.innerText="Choise of Food"
th8.innerText="State"
th9.innerText="Country"
tab1.append(th1,th2,th3,th4,th5,th6,th7,th8,th9)
tab.append(tab1)
// button
var button=document.createElement("button")
button.setAttribute("class","button")
button.innerHTML="SUBMIT"
button.addEventListener("click",()=>{

        var fooo=document.getElementsByClassName('table')
        var NewRoo=fooo.insertRow(row);
        list1[x]=document.getElementById("firstname").value
        list2[x]=document.getElementById("lastname").value
        list3[x]=document.getElementById("add1").value
        list4[x]=document.getElementById("add2").value
        list5[x]=document.getElementById("pin").value
        list6[x]=document.getElementsByClassName("gender").value
        list7[x]=document.getElementsByClassName("checkboxs").value
        list8[x]=document.getElementById("state").value
        list9[x]=document.getElementById("con").value
    
        var cel1=NewRoo.insertCell(0);
        var cel2=NewRoo.insertCell(1);
        var cel3=NewRoo.insertCell(2);
        var cel4=NewRoo.insertCell(3);
        var cel5=NewRoo.insertCell(4);
        var cel6=NewRoo.insertCell(5);
        var cel7=NewRoo.insertCell(6);
        var cel8=NewRoo.insertCell(7);
        var cel9=NewRoo.insertCell(8);
    
        cel1.innerHTML=list1[x];
        cel2.innerHTML=list2[x];
        cel3.innerHTML=list3[x];
        cel4.innerHTML=list4[x];
        cel5.innerHTML=list5[x];
        cel6.innerHTML=list6[x];
        cel7.innerHTML=list7[x];
        cel8.innerHTML=list8[x];
        cel9.innerHTML=list9[x];
    
    //     if(list6[x].checked){
    //         var res=document.getElementById("gen1").value;
    //         list6[x]=res;
    //     }else{
    //         var res1=document.getElementById("gen2").value;
    //         list6[x]=res1;
    //     }
    //     var temp=[]
    //    var res2=document.getElementsByClassName("checkbox").checked;
    //     temp.push(res2);
    //     if(temp.length>=2){
    
    //      }else{
    //     alert("Select min 2")
    //      }
    
        n++;
        x++;
    
        
    
      
        
    
    
    }
)



//function
var list1=[]
var list2=[]
var list3=[]
var list4=[]
var list5=[]
var list6=[]
var list7=[]
var list8=[]
var list9=[]
 var row=1;
 var x=0;

 var form=document.createElement("form")
form.setAttribute("action","onsubmit")
form.setAttribute("method","get")
form.append(head,firstname,br1,input1,br2,lastname,br3,
input2,br4,add1,br5,input3,br6,add2,br7,input4,br8,pin,br9,
input5,br10,gen,br11,input6,genm,input7,genf,brr,food,par,br12,input8,
check1,br13,input9,check2,br14,input10,check3,br15,
input11,check4,br16,input12,check5,state,br17,input13,br18,country,br19,input14,br20,button)

document.body.append(form)
document.body.append(h1,tab)