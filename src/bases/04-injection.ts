

import { HttpAdapter, PokeApiAxiosAdapter, PokeapiFetchAdapter } from '../api/pokeApi.adapter';
import { PokeapiResponse } from '../interfaces/pokeapi-response.interface';

// export class Pokemon {
//     public id:number;
//     public name: string;

//     constructor(id:number, name:string){
//         this.id = id;
//         this.name = name;
//     }
// }

// pero es mejor escribirlo asi

export class Pokemon {

    //getter
    get imageUrl(): string {
        return `http://pokemon.com/${this.id}.jpg`
    }
    //constructor
    constructor( 
        public id:number, 
        public name:string,
        private readonly http: HttpAdapter
    ) {}

    //metodos
    public scream(){
        console.log(`${this.name.toUpperCase()}!!`);
    }
    //sin public tambien lo lleva implicito
    speak(){
        console.log(`${this.name}, ${this.name}`);        
    }

    //asincronismo, necesario para trabajar con axios y peticiones http
    async getMoves(){
        //desestructuracion de la respuesta, solo traemos la data
        //<> para especificar el tipo de objeto que queremos devolver una ves se resuelva la peticion
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves);
        
        return data.moves;
    }
}

const pokeApiAxios = new PokeApiAxiosAdapter();
const pokeApiFetch = new PokeapiFetchAdapter();

export const charmander = new Pokemon(4, 'Charmander', pokeApiAxios);

// console.log(charmander);

// charmander.scream();
// charmander.speak();

charmander.getMoves();

