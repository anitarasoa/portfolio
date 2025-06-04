import { createSystem, defaultConfig, defineConfig, defineTextStyles } from "@chakra-ui/react"

const textStyles = defineTextStyles({
    bigHeading: {
        description: "The big heading text style - used in about and profile page",
        value: {
            fontFamily: "'Bebas Neue', sans-serif",
            fontWeight: '400',
            letterSpacing: '0%',
            textTransform: 'uppercase',
        }
    },
    heading: {
        description: "The heading text style - used in heading",
        value: {
            fontFamily: "'Bebas Neue', sans-serif",
            fontWeight: "400",
            lineHeight: "100%",
            textTransform: "uppercase",
        },
    },
    subHeading: {
        description: "The subheading text style - used in the project section",
        value: {
            fontFamily: "'Manrope', sans-serif",
            fontWeight: '500',
            lineHeight: '140%',
            letterSpacing: '0%',
        },
    },
    paragraph: {
        description: "The paragraph text style - used in paragraph",
        value: {
            fontFamily: "'Manrope', sans-serif",
            fontWeight: "400",
            lineHeight: "150%",
            letterSpacing: "0%",
        },
    },
    fieldLabel: {
        description: "The fields text style - used in feild.label",
        value: {
            fontFamily: "'Manrope', sans-serif",
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '160%',
            letterSpacing: '0%',
        },
    },
    button: {
        description: "The button text style - used in button",
        value: {
            fontFamily: "'Manrope', sans-serif",
            fontWeight: '700',
            lineHeight: '100%',
            letterSpacing: '0%',
            textTransform: 'uppercase',
        },
    },
    projectInfo: {
        description: "The project info text style - used in project info",
        value: {
            fontFamily: "'Manrope', sans-serif",
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '160%',
            letterSpacing: '0%',
        },
    },
    link: {
        description: "The link text style - used in link",
        value: {
            fontFamily: "'Bebas Neue', sans-serif",
            fontWeight: '700',
            lineHeight: '150%',
            letterSpacing: '0%',
            textTransform: 'uppercase',
        },
    },
})

const config = defineConfig({
    theme: {
        tokens: {
            fonts: {
                heading: { value: `'Bebas Neue', sans-serif` },
                body: { value: `'Bebas Neue', sans-serif` },
                nav: { value: `'Inter', sans-serif` },
                paragraph: { value: `'Manrope', sans-serif` }
            },
            colors: {
                secondary: { value: "gray" },
                white: { value: '#FFFFFF' },
                gray78: { value: '#C7C7C7' },
                gray200: { value: '#e9ecef'},
                gray700: { value: '#525f7f' },
                gray800: { value: '#32325d' },
                yellowGreen: { value: '#D3E97A' },
                vampireBlack: { value: '#0A0A0A' }
            },
        },
        breakpoints: {
            mobile: "400px",
            desktop: "1200px",
            wide: "1400px",
        },
        textStyles,
    },
})

export default createSystem(defaultConfig, config)