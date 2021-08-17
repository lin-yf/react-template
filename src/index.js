import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';


// 开发热更新插件xxxxx
const AppContainer = process.env.PLAIN_HMR ? React.Fragment : ReactHotAppContainer;

const App = require('./routes/index').default;

const render = (App) => {
  ReactDOM.render(
    <AppContainer>
      <App history={history} />
    </AppContainer>,
    document.getElementById('root'),
  );
};
render(App);

if (module.hot) {
  module.hot.accept('./routes/index', () => {
    // eslint-disable-next-line global-require
    const NewApp = require('./routes/index').default;
    render(NewApp);
  });
}
// registerServiceWorker();
