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
        } else{
          // Show Profile
          ui.showProfile(data.profile);
        }
      })
  } else {
    // Clear Profile
  }
})