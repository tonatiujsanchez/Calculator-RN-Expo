import CalculatorButton from '@/components/CalculatorButton'
import CustomText from '@/components/CustomText'
import { Colors } from '@/constants/Colors'
import { useCalculator } from '@/hooks/useCalculator'
import { golbalStyles } from '@/styles/global-styles'
import { View } from 'react-native'

const CalculatorScreen = () => {

  const { formula, buildNumber, clean, toggleSign } = useCalculator()

  return (
    <View style={golbalStyles.calculatorContainer}>
      <View style={{
        paddingBottom: 20,
        paddingHorizontal: 30,
      }}>
        <CustomText variant='h1'>{ formula }</CustomText>
        <CustomText variant='h2'>250</CustomText>
      </View>


      {/* Buttons */}

      <View style={golbalStyles.row}>
        <CalculatorButton
          label='C'
          onPress={clean}
          textColor={Colors.darkGray}
          bgColor={Colors.lightGray}
        />
        <CalculatorButton
          label='+/-'
          onPress={toggleSign}
          textColor={Colors.darkGray}
          bgColor={Colors.lightGray}
        />
        <CalculatorButton
          label='del'
          onPress={() => console.log('del')}
          textColor={Colors.darkGray}
          bgColor={Colors.lightGray}
        />
        <CalculatorButton
          label='÷'
          onPress={() => console.log('÷')}
          bgColor={Colors.orange}
        />
      </View>
      <View style={golbalStyles.row}>
        <CalculatorButton
          label='7'
          onPress={() => buildNumber('7')}
          textColor={Colors.textPrimary}
          bgColor={Colors.darkGray}
          
        />
        <CalculatorButton
          label='8'
          onPress={() => buildNumber('8')}
          textColor={Colors.textPrimary}
          bgColor={Colors.darkGray}
        />
        <CalculatorButton
          label='9'
          onPress={() => buildNumber('9')}
          textColor={Colors.textPrimary}
          bgColor={Colors.darkGray}
        />
        <CalculatorButton
          label='x'
          onPress={() => console.log('x')}
          bgColor={Colors.orange}
        />
      </View>
      <View style={golbalStyles.row}>
        <CalculatorButton
          label='4'
          onPress={() => buildNumber('4')}
          textColor={Colors.textPrimary}
          bgColor={Colors.darkGray}
        />
        <CalculatorButton
          label='5'
          onPress={() => buildNumber('5')}
          textColor={Colors.textPrimary}
          bgColor={Colors.darkGray}
        />
        <CalculatorButton
          label='6'
          onPress={() => buildNumber('6')}
          textColor={Colors.textPrimary}
          bgColor={Colors.darkGray}
        />
        <CalculatorButton
          label='-'
          onPress={() => console.log('-')}
          bgColor={Colors.orange}
        />
      </View>
      <View style={golbalStyles.row}>
        <CalculatorButton
          label='1'
          onPress={() => buildNumber('1')}
          textColor={Colors.textPrimary}
          bgColor={Colors.darkGray}
        />
        <CalculatorButton
          label='2'
          onPress={() => buildNumber('2')}
          textColor={Colors.textPrimary}
          bgColor={Colors.darkGray}
        />
        <CalculatorButton
          label='3'
          onPress={() => buildNumber('3')}
          textColor={Colors.textPrimary}
          bgColor={Colors.darkGray}
        />
        <CalculatorButton
          label='+'
          onPress={() => console.log('+')}
          bgColor={Colors.orange}
        />
      </View>
      <View style={golbalStyles.row}>
        <CalculatorButton
          label='0'
          onPress={() => buildNumber('0')}
          textColor={Colors.textPrimary}
          bgColor={Colors.darkGray}
          columns={2.16}
        />
        <CalculatorButton
          label='.'
          onPress={() => buildNumber('.')}
          textColor={Colors.textPrimary}
          bgColor={Colors.darkGray}
        />
        <CalculatorButton
          label='='
          onPress={() => console.log('=')}
          bgColor={Colors.orange}
        />
      </View>

    </View>
  )
}

export default CalculatorScreen