// --- Factory Method ---

class Transporte {
  move() {
    throw new Error("O método move() deve ser implementado por subclasses.");
  }
}

class Bicicleta extends Transporte {
  move() {
    return "Pedalando a bicicleta no pátio da UNISATC";
  }
}

class Patinete extends Transporte {
  move() {
    return "Andando de patinete pelo estacionamento da UNISATC";
  }
}


class Onibus extends Transporte {
  move() {
    return "Andando de ônibus e chegando na UNISATC";
  }
}

class TransporteCreator {
  /**
   */
  createTransporte() {
    throw new Error("O método createTransporte() deve ser implementado por subclasses.");
  }

  /**
   */
  realizarEntrega() {
    const transporte = this.createTransporte();
    return `Logística: ${transporte.move()}`;
  }
}

class BicicletaCreator extends TransporteCreator {
  createTransporte() {
    return new Bicicleta();
  }
}

class PatineteCreator extends TransporteCreator {
  createTransporte() {
    return new Patinete();
  }
}

class OnibusCreator extends TransporteCreator {
  createTransporte() {
    return new Onibus();
  }
}

/** 
 * @param {TransporteCreator} creator
 */
function clientCode(creator) {
  console.log(creator.realizarEntrega());
}

console.log("App: Iniciado com o criador de Ônibus.");
clientCode(new OnibusCreator());

console.log("\nApp: Iniciado com o criador de Bicicleta.");
clientCode(new BicicletaCreator());

console.log("\nApp: Iniciado com o criador de Patinete.");
clientCode(new PatineteCreator());