import AbstractFormater from "./AbstractFormater.js";

export default class FormaterXML extends AbstractFormater {
    output (cities) {
        let xml = `<cidades>`
        for (let i = 0; i < cities.length; i++) {
          xml += `  <cidade>\n`
          xml += `    <idcidade>${cities[i]['ID']}</idcidade>\n`
          xml += `    <nome>${cities[i]['Nome']}</nome>\n`
          xml += `    <idestado>${cities[i]['Estado']}</idestado>\n`
          xml += `  </cidade>\n`
        }
        xml += `</cidades>`
        return xml;
    }
}