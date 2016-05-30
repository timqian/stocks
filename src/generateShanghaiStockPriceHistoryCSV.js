import fs from 'fs'
import axios from 'axios'
import { stockHistorySS } from './config'
import allMatches from './utils/allMatches'

const shanghaiCSV = fs.readFileSync('./data/companyInfo/shanghai.csv')
const regExp = /(\d{6})/g
const symbols = allMatches(shanghaiCSV, regExp)

symbols.forEach(async (symbol) => {
  const url = stockHistorySS.replace(/\d{6}/, symbol[0])
  const res = await axios.get(url)
  fs.writeFileSync(`./data/priceHistoryShanghai/${symbol}.csv`, res.data)
  console.log(`${symbol} wrote`)
})
