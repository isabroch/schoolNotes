const life = (() => {
  let magicNumber = 42;

  class Person {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender != undefined ? gender : Math.random() < 0.5 ? 'male' : 'female';
      this.birth = new Date();
    }
  };

  let people = {};

  return {
    meaning: magicNumber,

    createNew: (name, gender) => {
      let person = new Person(name, gender);
      people[name] = person;
      return person;
    },

    getAge: (name) => {
      if (name in people) {
        let ageInSeconds = (Date.now() - people[name].birth.getTime()) / 1000;

        console.log(`${name} is ${ageInSeconds} seconds old.`)
        return ageInSeconds;
      } else {
        console.log(`${name} does not exist.`)
        return 0;
      }
    },

    getAll: people,
  }
})();