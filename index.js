class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque desconhecido';
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Mensagens
  const mago = new Heroi('Merlin', 150, 'mago');
  mago.atacar(); //O mago atacou usando magia
  
  const guerreiro = new Heroi('Conan', 30, 'guerreiro');
  guerreiro.atacar(); //O guerreiro atacou usando espada
  
  const monge = new Heroi('Shaolin', 40, 'monge');
  monge.atacar(); //O monge atacou usando artes marciais
  
  const ninja = new Heroi('Hanzo', 25, 'ninja');
  ninja.atacar(); //O ninja atacou usando shuriken