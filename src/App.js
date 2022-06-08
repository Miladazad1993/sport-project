import AppRouter from "./appRouter";
import 'antd/dist/antd.variable.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import './Public/Styles/style.css';
import HomeCarousel from "./Components/homeCarousel";
import { Fragment } from "react";
import { ConfigProvider } from "antd";
const App = () => {
  return (
    <Fragment >
      <ConfigProvider direction="rtl" csp={{ nonce: 'YourNonceCode' }}>
        <AppRouter />
        {/* <HomeCarousel /> */}
      </ConfigProvider>
    </Fragment>

  );
}

export default App;