class SuperHero {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

// module.exports = new SuperHero("Batman"); // dessa forma, apenas uma classe do objeto é exportada
module.exports = SuperHero;
