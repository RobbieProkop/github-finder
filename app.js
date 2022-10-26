// main app file

// Search INput
const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (e) => {
  // get input text
  const userText = e.target.value;

  if (!userText) {
    return;
  }
  console.log("user text", userText);
});
