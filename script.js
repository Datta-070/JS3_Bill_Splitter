let rs=document.getElementById('rs');
let no=document.getElementById('no');
function split(){
    if(rs.value > 0){
    let res= (rs.value/no.value).toFixed(2);
    document.getElementById('head').innerText=res;
    }
}