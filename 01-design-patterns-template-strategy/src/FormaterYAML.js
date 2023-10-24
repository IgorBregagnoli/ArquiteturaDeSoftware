import AbstractFormater from "./AbstractFormater.js";
import yaml from 'js-yaml';

export default class FormaterYAML extends AbstractFormater {
    output (cities) {
        const yamlData = yaml.dump(cities);
        return yamlData;
    }
}