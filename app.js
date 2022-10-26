// main app file

const github = new GitHub();

// Search INput
const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (e) => {
  // get input text
  const userText = e.target.value;

  if (!userText) {
    return;
  }
  // Make HTTP call
  github.getUser(userText).then((data) => {
    if (data.profile.message === "Not Found") {
      //Show Alert
      return;
    }
    //Show Profile
  });

  //Clear Profile
});
