// Builder
class Lanche {
  constructor(builder) {
    this.pao = builder.pao || false;
    this.carne = builder.carne || false;
    this.queijo = builder.queijo || false;
    this.salada = builder.salada || false;
    this.molho = builder.molho || false;
  }

  show() {
    console.log("Montagem do Lanche:", {
      pao: this.pao,
      carne: this.carne,
      queijo: this.queijo,
      salada: this.salada,
      molho: this.molho,
    });
  }
}

class LancheBuilder {
  constructor() {

    this.pao = false;
    this.carne = false;
    this.queijo = false;
    this.salada = false;
    this.molho = false;
  }

  addPao() {
    this.pao = true;
    return this;
  }

  addCarne() {
    this.carne = true;
    return this;
  }

  addQueijo() {
    this.queijo = true;
    return this;
  }

  addSalada() {
    this.salada = true;
    return this;
  }

  addMolho() {
    this.molho = true;
    return this;
  }

  build() {
    if (!this.pao || !this.carne) {
        throw new Error("Um lanche precisa ter, no mínimo, pão e carne.");
    }
    return new Lanche(this);
  }
}

console.log("--- Montando lanche simples ---");

const lancheSimples = new LancheBuilder()
  .addPao()
  .addCarne()
  .build();

lancheSimples.show();


console.log("\n--- Montando lanche completo ---");

const lancheCompleto = new LancheBuilder()
  .addPao()
  .addCarne()
  .addQueijo()
  .addSalada()
  .addMolho()
  .build();

lancheCompleto.show();


console.log("\n--- Montando um lanche customizado (X-Salada) ---");
const xSalada = new LancheBuilder()
    .addPao()
    .addCarne()
    .addQueijo()
    .addSalada()
    .build();

xSalada.show();