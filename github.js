class Github{
    constructor(){
        
        this.token="";
        this.reposcnt=5;
        this.repossort='created: asc';

    }
    async getUser(user){
        const response=await fetch(`https://api.github.com/users/${user}?state=closed&access_token=${this.token}`);
        const profile1=await response.json();
        const repositry=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposcnt}&sort=${this.repossort}state=closed&access_token=${this.token}`)
        const repos1=await repositry.json();
        return {
            profile:profile1,
            repos:repos1
        }
    }
}
