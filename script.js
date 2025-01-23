const form = document.getElementById('team-detail-form');
const errorMessage = document.getElementById('error-message')


form.addEventListener('submit',(event)=>{
  event.preventDefault()

  const businessName= document.getElementById('business-name').value.trim();
  const teamName= document.getElementById('team-name').value.trim();
  const managerName= document.getElementById('team-manager').value.trim();
  const managerEmail= document.getElementById('team-manager-E-mail').value.trim();
  const password = document.getElementById('create-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if(password === confirmPassword){
    const newTeam ={
      businessName,
      teamName,
      managerName,
      managerEmail,
      password,
    }
    localStorage.setItem('teamDetails', JSON.stringify(newTeam));
    console.log('Saved team details:', newTeam);
    alert('team added')
    // Redirect to index2.html
    window.location.href = 'index2.html';
  }else{
    errorMessage.textContent = 'invalid password!';
    document.querySelector('#create-password').value = '';
    document.querySelector('#confirm-password').value = '';
  }
  

})