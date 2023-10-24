import sys from 'node:sys';

import FormaterHTML from './src/FormaterHTML.js';
import FormaterTXT from './src/FormaterTXT.js';
import FormaterXML from './src/FormaterXML.js';
import FormaterCSV from './src/FormaterCSV.js';
import FormaterYAML from './src/FormaterYAML.js'

import CitiesReporterProxy from './src/CitiesReporterProxy.js';

const filename = './data/cidades-2.json';

const formaterStrategies = {
  'html': new FormaterHTML(),
  'txt': new FormaterTXT(),
  'xml': new FormaterXML(),
  'csv': new FormaterCSV(),
  'yaml': new FormaterYAML(),
};

const [, , format] = process.argv;

if(format in formaterStrategies){
  const reporter = new CitiesReporterProxy({formaterStrategies: [formaterStrategies[format]]});
  const output = reporter.report(filename)[0];
  console.log(output);
} else {
  console.log("Formato não suportado");
}