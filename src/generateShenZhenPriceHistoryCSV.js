import fs from 'fs'
import axios from 'axios'
import { stockHistorySZ } from './config'
import allMatches from './utils/allMatches'

const shenzhenCSV = fs.readFileSync('./data/companyInfo/shenzhen.csv')
const regExp = /(\d{6})/g
const symbols = allMatches(shenzhenCSV, regExp)

symbols.forEach(async (symbol) => {
  const url = stockHistorySZ.replace(/\d{6}/, symbol[0])
  const res = await axios.get(url)
  fs.writeFileSync(`./data/priceHistoryShenzhen/${symbol}.csv`, res.data)
  console.log(`${symbol} wrote`)
})
