import React from 'react'
import {
  View,
  type ColorValue,
  type ViewStyle,
  type DimensionValue,
  type StyleProp,
} from 'react-native'

const GRABBER_WRAPPER_HEIGHT = 24
const GRABBER_DEFAULT_HEIGHT = 4
const GRABBER_DEFAULT_WIDTH = 32

// M3 spec: #49454F 0.4 alpha
const GRABBER_DEFAULT_COLOR = 'rgba(73,69,79,0.4)'

export interface TrueSheetGrabberProps {
  /**
   * Is grabber visible.
   * @default true
   */
  visible?: boolean

  /**
   * Optional style that overrides the default style.
   */
  style?: StyleProp<ViewStyle>

  /**
   * Grabber color according to M3 specs.
   * @default rgba(73,69,79,0.4)
   */
  color?: ColorValue

  /**
   * Grabber height according to M3 specs.
   * @default 4
   */
  height?: DimensionValue

  /**
   * Grabber width according to M3 specs.
   * @default 32
   */
  width?: DimensionValue
}

/**
 * Grabber component.
 * Used by defualt for Android but feel free to re-use.
 */
export const TrueSheetGrabber = (props: TrueSheetGrabberProps) => {
  const {
    visible = true,
    color = GRABBER_DEFAULT_COLOR,
    width = GRABBER_DEFAULT_WIDTH,
    height = GRABBER_DEFAULT_HEIGHT,
    style,
  } = props

  if (!visible) return null

  return (
    <View style={$wrapper}>
      <View style={[$grabber, { height, width, backgroundColor: color }, style]} />
    </View>
  )
}

const $wrapper: ViewStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  alignSelf: 'center',
  height: GRABBER_WRAPPER_HEIGHT,
  alignItems: 'center',
  zIndex: 9999,
}

const $grabber: ViewStyle = {
  borderRadius: GRABBER_DEFAULT_HEIGHT / 2,
  top: 6,
}