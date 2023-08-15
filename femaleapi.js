const loaduser=()=>{
    
    fetch('https://randomuser.me/api/?gender=female')
     .then(Response=>Response.json())
     .then(data=>displayuse(data))

}

const displayuse=user=>{
const nametag=document.getElementById('spanapiid')
    const genderTag=document.getElementById('gender')
    const imgtag=document.getElementById('imgs').src=user.results[0].picture.large
    const dobage=document.getElementById('dob')
    dobage.innerHTML=user.results[0].dob.age
genderTag.innerHTML=user.results[0].gender
nametag.innerHTML=user.results[0].name.title+' ' +user.results[0].name.first+' '+user.results[0].name.last;


console.log(user.results[0].dob.age)

}

loaduser()