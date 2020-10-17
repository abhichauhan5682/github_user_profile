class Github{
    constructor(){
        // this.clientid="46a4f6893ce407231dfd";
        // this.clientsecret="933ea00cef28e280544a3af28f9020b953d5a17a"; 
        this.token="86b1c88a75c8c445fe733598286c22ca2bf77baa";
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