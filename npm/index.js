import './node_modules/@regulaforensics/vp-frontend-components/dist/main.js';

const component = document.getElementsByTagName('face-capture-wc')[0];

component.addEventListener('face-capture', () => alert('Event!'));