class GitHub {
  constructor(){
    // Use your own credentials
    this.client_id = clientID;
    this.client_secret = clientSecret;
    // Limit amount of repos and sort by date created
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
    // https://api.github.com/users/manukempo
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    // https://api.github.com/users/manukempo/repos
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    return {
      // profile:profile
      profile,
      repos
    }
  }
}