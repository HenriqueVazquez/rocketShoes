import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import background from '../assets/images/background.svg';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&display=swap');

* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

body {
  background: #191920 url(${background}) no-repeat center top;
  -webkit-font-smoothing: antialiased;

}

body, input, button {
  font: 14px Roboto, sans-serif;
}

#root {
  max-width: 80%;
  margin: 0 auto;
  padding: 0 20px 50px;

}

button {
  cursor: pointer;
}

`;
