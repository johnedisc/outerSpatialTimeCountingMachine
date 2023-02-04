export class PlanetAges {
  constructor(age) {
    this.age = age;
    this.earth = {
      ratio: 1
    }
    this.mercury = {
      ratio: .24
    }
    this.venus = {
      ratio: .62
    }
    this.mars = {
      ratio: 1.88
    }
    this.jupiter = {
      ratio: 11.86
    }
  }

  calcAges(age) {
    Object.keys(this).filter(el => el !== 'age').map(el => this[el].converted = parseFloat((age / this[el].ratio).toFixed(2)));
  }

  yearsSinceBirthday(chosenBirthday) {
    this.calcAges(this.age - chosenBirthday);
  }

} 
