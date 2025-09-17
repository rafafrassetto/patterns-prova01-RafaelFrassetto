// --- Abstract Factory ---

class UIFactory {
  createButton() {
    throw new Error("O método createButton deve ser implementado");
  }

  createWindow() {
    throw new Error("O método createWindow deve ser implementado");
  }
}

class Button {
  render() {
    throw new Error("O método render deve ser implementado");
  }
}

class WindowUI {
  render() {
    throw new Error("O método render deve ser implementado");
  }
}

class LightThemeFactory extends UIFactory {
  createButton() {
    return new LightButton();
  }

  createWindow() {
    return new LightWindow();
  }
}

class LightButton extends Button {
  render() {
    return "Botão branco criado";
  }
}

class LightWindow extends WindowUI {
  render() {
    return "Janela clara aberta";
  }
}

class DarkThemeFactory extends UIFactory {
  createButton() {
    return new DarkButton();
  }

  createWindow() {
    return new DarkWindow();
  }
}

class DarkButton extends Button {
  render() {
    return "Botão preto criado";
  }
}

class DarkWindow extends WindowUI {
  render() {
    return "Janela escura aberta";
  }
}

class Application {
  constructor(factory) {
    this.factory = factory;
  }

  createUI() {
    const button = this.factory.createButton();
    const windowUI = this.factory.createWindow();

    console.log(button.render());
    console.log(windowUI.render());
  }
}

function initializeApp(theme) {
  let factory;

  if (theme === "light") {
    factory = new LightThemeFactory();
  } else if (theme === "dark") {
    factory = new DarkThemeFactory();
  } else {
    throw new Error("Tema desconhecido.");
  }

  const app = new Application(factory);
  app.createUI();
}

console.log("--- Inicializando com o tema DARK ---");
initializeApp("dark");

console.log("\n--- Inicializando com o tema LIGHT ---");
initializeApp("light");