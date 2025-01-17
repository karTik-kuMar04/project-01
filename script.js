const teamDetails = document.querySelector('#team-detail-form');
const teamNameOnWP = document.querySelector('#team-name-on-web');
const businessNameOnWP = document.querySelector('#business-name-on-web');



teamDetails.addEventListener('submit',(event)=>{
  event.preventDefault();
  const businessName = document.querySelector('#business-name').value.trim();
  const teamName = document.querySelector('#team-name').value.trim();
  const manager = document.querySelector('#team-manager').value.trim();
  const managerEmail = document.querySelector('#team-manager-E-mail').value;
  const password = document.querySelector('#create-password').value.trim();
  const createPassword = document.querySelector('#confirm-password').value.trim();
  if(password === createPassword){
    teamNameOnWP.textContent = teamName;
    businessNameOnWP.textContent = businessName;
    alert('team created')
  }
  console.log(teamName)
  console.log(businessName)
})
