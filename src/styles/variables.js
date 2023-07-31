import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-navy: #020c1b;
    --navy: #0a192f;
    --light-navy: #112240;
    --lightest-navy: #233554;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --dark-slate: #495670;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #e6f1ff;
    --green: #64ffda;
    --green-tint: rgba(100, 255, 218, 0.1);
    --pink: #f57dff;
    --blue: #57cbff;
    --cream: #fbf7f7;
    --light-cream: #faf7f7;
    --lightest-strawberry: #f5dfe3;
    --light-strawberry: #eda8b4;
    --bright-strawberry: #f43f5e;
    --dull-strawberry: #f0ebec;
    --dark-strawberry: #b8828b;
    --dull-strawberry-tint: rgba(239, 223, 226, 0.8) --light-brown: #b3aba2;
    --lighter-brown: #b2aca5;
    --lightest-brown: #e6e4e3;
    --dark-brown: #57534e;
    --light-grape: #4b45b6;
    --light-blue: #9cdaf2;
    --light-blue-tint: rgba(156, 218, 242, 0.2);
    --lightest-blue: #cee9ff;
    --lightest-blue-tint: rgba(206, 233, 255, 0.5);
    --dark-blue: #4bb3db;
    --darker-blue: #5175a4;
    --soft-green: #81bf81;
    --soft-green-tint: rgba(129, 191, 129, 0.1);
    --light-green: #f0f6f0;

    --color-cursor: 220, 90, 90;
    --cursor-outline-shade: 0.3;
    --cursor-size: 10px;
    --cursor-outline-size: 12px;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
