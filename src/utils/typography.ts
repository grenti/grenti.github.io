import Typography from 'typography'
import sutroTheme from 'typography-theme-sutro'

sutroTheme.baseFontSize = '18px'
sutroTheme.baseLineHeight = 1.5
sutroTheme.bodyFontFamily = ['Nunito', 'sans serif']
sutroTheme.headerFontFamily = ['Nunito']

const typography = new Typography(sutroTheme)

typography.injectStyles()

export const { scale, rhythm, options } = typography
export default typography
