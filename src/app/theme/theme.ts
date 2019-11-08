export interface Theme {
    name: string;
    properties: any;
  }
  
  export const light: Theme = {
    name: "light",
    properties: {
      "--foreground-default": "#111517",
      "--foreground-light": "#858585",
  
      "--background-default": "#FAFAFA",
      "--background-light": "#FFFFFF",
  
      "--background-shadow": "0 1px 3px 0 rgba(92, 125, 153, 0.5)",
      "--background-shadow-dark": "0 3px 4px 0 rgba(45, 71, 94, 0.5)"
    }
  };
  
  export const dark: Theme = {
    name: "dark",
    properties: {
      "--foreground-default": "#FFFFFF",
      "--foreground-light": "#FFFFFF",
  
      "--background-default": "#202C37",
      "--background-light": "#2B3945",
  
      "--background-shadow": "0 1px 3px 0 rgba(8, 9, 10, 0.5)",
      "--background-shadow-dark": "0 3px 4px 0 rgba(0, 0, 0, 0.5)"
    }
  };
  