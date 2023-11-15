class hero{
    constructor(nameHero, ageHero, tipo){
        this.nameHero = nameHero
        this.ageHero = ageHero
        this.tipo = tipo
    }
    atacar(ataque, tipo){
        if (this.tipo === "mago"){
            ataque = "magia"
            console.log(`- O ${this.tipo} atacou usando ${ataque}`);
        }
        else if (this.tipo === "guerreiro"){
            ataque = "espada"
            console.log(`- O ${this.tipo} atacou usando ${ataque}`);
        }
        else if(this.tipo === "monge"){
            ataque = "artes marciais"
            console.log(`- O ${this.tipo} atacou usando ${ataque}`);
        }
        else {
            ataque = "shuriken"
            console.log(`- O ${this.tipo} atacou usando ${ataque}`);
        }
    }
}

let ataque1 = new hero("Gladiador", 30, "guerreiro");
let ataque2 = new hero("Malvadão", 50, "monge");
let ataque3 = new hero("Harry", 35, "mago");
let ataque4 = new hero("Samurai", 40, "ninja");

ataque1.atacar();
ataque2.atacar();
ataque3.atacar();
ataque4.atacar();
