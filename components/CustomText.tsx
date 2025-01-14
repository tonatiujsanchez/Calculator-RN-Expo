import { golbalStyles } from '@/styles/global-styles'
import { View, Text, type TextProps } from 'react-native'

interface Props extends TextProps {
  variant?: 'h1' | 'h2'
}
export default function CustomText({
  children,
  variant,
  ...props
}: Props) {
  return (
    <Text
      style={[
        {
          color: '#FFF',
          fontFamily: 'SpaceMono',
        },
        variant === 'h1' && golbalStyles.mainResult,
        variant === 'h2' && golbalStyles.subResult
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...props}
    >
      {children}
    </Text>
  )
}