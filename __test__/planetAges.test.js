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

    test('should calculate and set object property to planet ages', () => {
      planetAges.calcAges(planetAges.age);
      let tmpArray = Object.keys(planetAges).filter(el => el !== 'age');
      expect(tmpArray.map(el => planetAges[el].converted)).toEqual([56,233.33,90.32,29.78,4.72]);
    });

  });
  describe('yearSinceBirthday() method', () => {

    test('should return age - birthday * ratio of planet years', () => {
      let tmpArray = planetAges.yearsSinceBirthday(43);
      expect(planetAges.mercury.converted).toEqual(54.16);

    });
    
  });

});
