import fs from 'fs'

const html = fs.readFileSync('./companyInfo/chineseStocks.html')

const regExp = /title=".*?">(.*?)(\d{6})/ig

// Finding successive matches. ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#Finding_successive_matches
let stock
let stockCSV = 'Symbol,name\n'
while ((stock = regExp.exec(html)) !== null) {
  stockCSV += `${stock[1].trim()},${stock[2]}\n`
}

fs.writeFileSync('./data/chineseStocks.csv', stockCSV)
