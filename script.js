function split(){
    let rs=document.getElementById('rs');
    let no=document.getElementById('no');
    let res= (rs.value/no.value).toFixed(2);
    document.getElementById('head').innerText=res;
}