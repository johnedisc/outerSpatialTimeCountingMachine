import { PlanetAges } from './../src/js/planetAges.js';

describe('planetAges class', () => {

  let planetAges;

  beforeEach(() => {
    planetAges = new PlanetAges(56);
  });

  test('should return properties when accessed', () => {
    expect(Object.keys(planetAges)).toEqual(['age','earth','mercury','venus','mars','jupiter']);
  });
  
  test('should reflect age argument passed into function', () => {
    expect(planetAges.age).toEqual(56);
  });

  describe('calcAges() method', () => {

    test('should calculate and return converted age for all properties of PlanetAges', () => {
      expect(planetAges.calcAges()).toEqual([56,233.33,90.32,29.79,4.72]);
    });

  });
});
