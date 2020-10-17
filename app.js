



// intialisatin the github calss
const github=new Github;
const searchuser=document.getElementById('searchid');
searchuser.addEventListener('keyup',(e)=>{
    const text=e.target.value;
    if(text!==''){
        github.getUser(text).then(data =>{
             
            if(data.profile.message==='Not Found'){
                // show alert
                ui.showmessage("NOT FOUND",'error');
            }else{
                // show profile 
                //console.log(data);
                ui.clearalert();
                ui.showprofile(data.profile);
                ui.showRepos(data.repos);
            }
        }); 
    }else{
        ui.clearalert();
        ui.clearProfile();
    }
});



const ui=new UI;
