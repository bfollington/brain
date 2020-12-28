import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete Wordpress2016.googleFonts

export const headerFontFamily = [
  "Source Sans Pro",
  "Helvetica",
  "Arial",
  "sans-serif",
]

export const bodyFontFamily = [
  "Lora",
  "Times",
  "serif",
]

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.6,
  headerFontFamily,
  bodyFontFamily,
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 600,
  scaleRatio: 3,
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale