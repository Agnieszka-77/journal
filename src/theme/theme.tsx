import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      thirdary: string;
      background: string;
      text: string;
    };
    screen: {
      tablet: string;
      laptop: string;
      desktop: string;
    };
    font: {
      family: { primary: string; secondary: string; tertiary: string };
      size: {
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
      };
      weight: {
        light: number;
        regular: number;
        semibold: number;
        bold: number;
      };
    };
  }
}

export const theme = {
  color: {
    primary: "#23b2ee",
    secondary: "#838BD0",
    thirdary: "#76DF74",
    background: "snow",
    text: "black",
  },
  screen: {
    tablet: "768px",
    laptop: "1366px",
    desktop: "1920px",
  },
  font: {
    family: { primary: `'Roboto', sans-serif`, secondary: `'Roboto', sans-serif`, tertiary: `'Roboto', sans-serif` },
    size: {
      xs: "12px",
      s: "16px",
      m: "24px",
      l: "36px",
      xl: "44px",
    },
    weight: {
      light: 300,
      regular: 400,
      semibold: 500,
      bold: 600,
    },
  },
};
