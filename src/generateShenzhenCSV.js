/**
 * Generage csv file from html file
 */

import fs from 'fs'
import allMatches from './utils/allMatches'

const szhtml = fs.readFileSync('./data/companyInfo/shenzhen.html')
const regExp = /title=".*?">(.*?)(\d{6})/g
let stockCSV = 'Symbol,name\n'

allMatches(szhtml, regExp).forEach(match => {
  stockCSV +=  `${match[0].trim()},${match[1]}\n`
})

fs.writeFileSync('./data/companyInfo/shenzhen.csv', stockCSV)
