// Init GitHub
const github = new GitHub;
// Init UI
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// KeyUp Event Listener
searchUser.addEventListener('keyup', (e)=>{
  // Get input text
  const userText = e.target.value;

  if(userText !== ''){
    // Make HTTP call
    github.getUser(userText)
      .then(data=>{
        // Profile not found
        if(data.profile.message === 'Not Found'){
          // Show Alert
          ui.showAlert('User not found', 'alert alert-danger');
        } else{
          // Show Profile & Repos
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    // Clear Profile
    ui.clearProfile();
  }
})