
import { parse } from './index.min.js'
import * as fs from 'fs'
var data = fs.readFileSync('./ResurrectionCalendar.csv', 'utf8')
console.log(parse(data))