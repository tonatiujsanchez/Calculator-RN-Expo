import * as Haptics from 'expo-haptics';
import { Colors } from '@/constants/Colors';
import { Text, Pressable, StyleSheet } from 'react-native';

interface Props {
  label: string
  onPress: ()=> void
  bgColor?: string
  textColor?: string
  columns?: number
}

export default function CalculatorButton({
  label,
  onPress,
  bgColor=Colors.darkGray,
  textColor=Colors.textPrimary,
  columns=1
}: Props) {
  return (
    <Pressable
      style={({ pressed })=> ([
        styles.button,
        { 
          backgroundColor: bgColor,
          opacity: pressed ? 0.8 : 1,
          width: (columns * 80)          
        }
      ])}
      onPress={ ()=> {
        Haptics.notificationAsync(
          Haptics.NotificationFeedbackType.Success
        )
        onPress()
      }}
    >
      <Text
        style={[
          styles.buttonText,
          { color: textColor }
        ]}
      >
        {label}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 7,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 28,
    padding: 10,
    fontWeight: '300',
    fontFamily: 'SpaceMono',
  }
})