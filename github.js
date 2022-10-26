// github class
class GitHub {
  constructor() {
    //THIS SHOULD BE CHANGED TO AN ENV VARIABLE
    this.client_id = "955dd0b264c4762d96fb";
    this.client_secret = "5d130b92f42fa4b6639d21c7d6007ec0a58d580d";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    // const repos = await fetch(
    //   `https://api.github.com/users/${user}/repos`
    // );

    return {
      profile,
      // repos
    };
  }
}
