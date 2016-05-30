/**
 * Generage csv file from html file
 */

import fs from 'fs'
import allMatches from './utils/allMatches'

const sshtml = fs.readFileSync('./data/companyInfo/shanghai.html')
const regExp = /title=".*?">(.*?)(\d{6})/g
let stockCSV = 'Symbol,name\n'

allMatches(sshtml, regExp).forEach(match => {
  stockCSV +=  `${match[0].trim()},${match[1]}\n`
})

fs.writeFileSync('./data/companyInfo/shanghai.csv', stockCSV)
