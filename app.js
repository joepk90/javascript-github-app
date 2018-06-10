// Initial Github Class
const gitHub = new GitHub;
const ui = new UI;

// Search input

const searchUser = document.getElementById('search-user');

searchUser.addEventListener('keyup', (e) => {
  // Get input text;
  const userText = e.target.value;

  if(userText !== '') {

    gitHub.getUser(userText).then(data => {
      if(data.profile.message === 'Not Found') {
        ui.showAlert('User Not Found', 'alert alert-danger');
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });

  } else {
    ui.clearProfile();
  }
});
