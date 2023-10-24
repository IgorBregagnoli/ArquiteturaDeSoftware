import AbstractFormater from './AbstractFormater.js';

export default class CompisteFormater extends AbstractFormater {
    constructor() {
        super();
        this.formaterStrategies = [];
    }

    addFormater(strategy){
        this.formaterStrategies.push(strategy);
    }

    output(cities){
        let formattedOutput = [];
        for (const strategy of this.formaterStrategies){
            formattedOutput.push(strategy.output(cities));
        }
        return formattedOutput.join('\n');
    }
}