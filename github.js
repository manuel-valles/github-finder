class GitHub {
  constructor(){
    // Use your own credentials
    this.client_id = clientID;
    this.client_secret = clientSecret;
  }

  async getUser(user){
    // https://api.github.com/users/manukempo
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    console.log(profileResponse);

    const profile = await profileResponse.json();
    return {
      // profile:profile
      profile
    }
  }

}