var a = document.getElementById("total_price").innerHTML;
var sum = Number(a);

var purchase = document.getElementsByClassName("it").innerHTML;

function price(clicked_id, clas, num){
    d=document.getElementById(clicked_id).value;
    d=Number(d);
    sum=sum+d ; 
    document.getElementById("total_price").innerHTML=sum ;
    it(clas);
    var b = document.getElementById(num).innerHTML;
    var i = Number(b);
    i++;
    document.getElementById(num).innerHTML=i;
       
}
function pricen(clicked_id,num){
    d=document.getElementById(clicked_id).value;
    d=Number(d);
    sum=sum-d ; 
    if (sum<0){
        alert("impossible");
        sum=sum+d

    }else{
        
        document.getElementById("total_price").innerHTML=sum ;
    }
    
    var k = document.getElementById(num).innerHTML;
    var j = Number(k);
    j--;
    if(j<0){
        j++;
    }else{
        document.getElementById(num).innerHTML= j;
    }
    
}
function it(clicked_id){
    document.getElementById(clicked_id).style.visibility = "visible";
}
function im1(clicked_id){
    document.getElementById(clicked_id).style.color = "#F4A9A8";
}
function trashy(clicked_id,cls,nn){
    document.getElementById(clicked_id).style.visibility = "hidden";
    var h = document.getElementById(cls).value;
    var l = Number(h);
    var d = document.getElementById(nn).innerHTML;
    var x = Number(d);
    sum = sum - l*x ; 
    document.getElementById("total_price").innerHTML=sum ;
}