caltemp=()=>{
    const temp=document.getElementById('temp').value;
    //console.log(temp)
    const temps=document.getElementById('param').value;



    if(temps=="deg"){
        const cal=Number(temp)+30;
        const stat=`${cal} Fahrenheit`;
        document.getElementById('result').innerHTML=stat;
       

    }
    else{
        const cal=temp-30;
        const stat=`${cal} Degree Celsius`;
        document.getElementById('result').innerHTML=stat;
        console.log(stat)
    }
    // const val=param.optins[val.selectedIndex].value;
    // console.log(val)
}