import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import Header from './Header';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Footer from './Footer';
import cnLocale from '../zh-CN';
import './static/style';

let isMoblie = false;
enquireScreen((b) => {
  isMoblie = b;
});

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    const appLocale = cnLocale;
    addLocaleData(appLocale.data);
    this.state = {
      appLocale,
      isMoblie,
    };
  }
  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMoblie: !!b,
      });
    });
  }
  render() {
    const { appLocale } = this.state;
    return (
      <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
        <div className="page-wrapper home">
          <Header />
          <Banner isMoblie={this.state.isMoblie} />
          <Page1 isMoblie={this.state.isMoblie} />
          <Page2 isMoblie={this.state.isMoblie} />
          <Page3 />
          <Footer />
          <DocumentTitle title="Ant-Design" key="title" />
        </div>
      </IntlProvider>
    );
  }
}
export default Home;
