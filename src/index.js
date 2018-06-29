import React from 'react';
import { render } from "mirrorx";
import { AppContainer } from 'react-hot-loader';

// 引入路由
import getRouter from 'router/router';

// 引入polyfill文件
import './public/polyfill';

// 引入store
import './store';

// 引入css样式
import './static/style/um.css';

/*初始化*/
renderWithHotReload(getRouter());

/*热更新*/
if (module.hot) {
  module.hot.accept('./router/router', () => {
    const getRouter = require('router/router').default;
    renderWithHotReload(getRouter());
  });
}

function renderWithHotReload(RootElement) {
  render(
    <AppContainer>
      {RootElement}
    </AppContainer>,
    document.getElementById('app')
  )
}