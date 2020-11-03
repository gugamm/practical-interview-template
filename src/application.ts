/*
* You should code here
*/

import { MainFn } from './types'

export const main: MainFn = async (): Promise<void> => {
  const total = sum(10, 20)
  console.log(`Total is ${total}`)
}

export const sum = (a: number, b: number): number => {
  return a + b
}
