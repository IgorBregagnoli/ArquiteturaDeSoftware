import AbstractFormater from "./AbstractFormater.js";

export default class FormaterCSV extends AbstractFormater {
    output (cities) {
        let csv = 'ID,Nome,Estado';
        for (const city of cities) {
            csv += `${city.ID},${city.Nome},${city.Estado}\n`;
        }
        return csv;
    }
}