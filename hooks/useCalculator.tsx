import { useEffect, useRef, useState } from "react"

enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '÷'
}

export const useCalculator = () => {

  const [formula, setFormula] = useState('')

  const [number, setNumber] = useState('0')
  const [prevNumber, setPrevNumber] = useState('0')

  const lastOperation = useRef<Operator>()


  useEffect(() => {
      // Calcular el subresult
      setFormula(number)
  }, [number])
  
  
  const clean = () => {
    setNumber('0')
    setPrevNumber('0')
    setFormula('0')
    lastOperation.current = undefined
  }

  const buildNumber = (numberString: string) => {
    
    // Verificar y hay un punto decimal

    if( number.includes('.') && numberString === '.' ) return
    
    if( number.startsWith('0') || number.startsWith('-0') ){
      if( numberString === '.' ){
        return setNumber(number + numberString)
      }

      if(numberString === '0' && number.includes('.')){
        return setNumber(number + numberString)
      }

      if(numberString !== '0' && !number.includes('.')){
        return setNumber(numberString)
      }

      if(numberString === '0' && !number.includes('.')) return 
    }


    setNumber( number + numberString )
  }


  return {
    // 
    formula,
    number, 
    prevNumber,

    // Methods
    buildNumber,
    clean,
  }
}
