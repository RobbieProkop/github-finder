// ui class
class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  showProfile(user) {
    console.log("user :>> ", user);
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <div class="d-grid">
              <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-lg mb-2 mt-2">View Profile</a>
            </div>
          </div>
          <div class="col-md-9">
            <span class="badge rounded-pill bg-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge rounded-pill bg-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge rounded-pill bg-success">Followers: ${user.followers}</span>
            <span class="badge rounded-pill bg-primary">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id=""repos></div>
    `;
  }

  //SHow alert for when user is not found
  showAlert(message, className) {
    // clear old alerts
    this.clearAlert();
    //creat div
    const div = document.createElement("div");
    div.className = className;
    console.log("div", div);

    //add text
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.querySelector(".searchContainer");
    // get searchbox
    const search = document.querySelector(".search");
    //insert alert
    container.insertBefore(div, search);

    //timeout after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  //method to clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // clear the proile when no text is present in searchbox
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
