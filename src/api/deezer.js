
export default class deezer {

    static instance = null;

    static getInstance() {
        if(this.instance == null)
            this.instance = new deezer();

        return this.instance;          
    }

    getMusics(){
        return fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/163/top?limit=20',{
        headers: {
            mode: 'cors'
        }}
        )
        .then(data => data.json())
        .catch(err => alert("API is not working. " + err));
    }

}