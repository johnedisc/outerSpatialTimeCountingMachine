export class PlanetAges {
  constructor(age) {
    this.age = age;
    this.earth = 1
    this.mercury = .24;
    this.venus = .62;
    this.mars = 1.88;
    this.jupiter = 11.86;
  }

  calcAges() {
    const planetAgeProps = Object.keys(this);
    return planetAgeProps.filter(el => el !== 'age').map(el => parseFloat((this.age / this[el]).toFixed(2)));
  }

} 
