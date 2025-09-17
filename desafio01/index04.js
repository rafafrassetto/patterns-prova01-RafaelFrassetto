// Singleton

const ConfigManager = (function () {
  let instance;

  class Config {
    constructor() {
      if (instance) {
        throw new Error("Não é possível criar uma nova instância. Use ConfigManager.getInstance().");
      }
      this.settings = {};
      console.log("Instância de Configuração criada pela primeira e única vez.");
    }

    setConfig(key, value) {
      this.settings[key] = value;
      console.log(`Configuração definida: { ${key}: "${value}" }`);
    }

    getConfig(key) {
      return this.settings[key];
    }
  }

  return {

    getInstance: function () {
      if (!instance) {
        instance = new Config();
      }
      return instance;
    }
  };
})();


console.log("--- Tentando obter a primeira referência (c1) ---");
const c1 = ConfigManager.getInstance();

c1.setConfig("lang", "pt-BR");


console.log("\n--- Tentando obter a segunda referência (c2) ---");
const c2 = ConfigManager.getInstance();


console.log(`Valor de 'lang' obtido por c2: "${c2.getConfig("lang")}"`);


// --- Prova Final ---
console.log("\n--- Verificando se c1 e c2 são a mesma instância ---");
const saoIguais = c1 === c2;
console.log(`c1 === c2 ?  ${saoIguais}`);

try {

} catch (error) {
    console.log(`\nErro esperado: ${error.message}`);
}