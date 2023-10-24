import fs from 'fs';

export default class CitiesReporterProxy {
  constructor({formaterStrategies}) {
    this.formaterStrategies = formaterStrategies;
    this.cache = new Map();
  }

  _read(filename) {
    if(this.cache.has(filename)){
      return this.cache.get(filename);
    }

    const cities_json = fs.readFileSync(filename, 'utf-8');
    const cities = JSON.parse(cities_json);
    this.cache.set(filename, cities);
    return cities;
  }

  report(filename) {
    const cities = this._read(filename);
    const reports = this.formaterStrategies.map((strategy) => strategy.output(cities));
    return reports;
  }
}