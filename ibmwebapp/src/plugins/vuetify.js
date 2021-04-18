import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#00072d', 
        primary2: '#001c55',
        secondary: '#a6e1fa',
        accent: '#0a2472',
        error: '#ed254e',
        info: '#0e6ba8',
        success: '#c2eabd',
        warning: '#f9dc5c'
      },
    },
  },
  icons: {
    iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
});
