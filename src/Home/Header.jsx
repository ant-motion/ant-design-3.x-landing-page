import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Icon, Menu, Button, Popover } from 'antd';

import { enquireScreen } from 'enquire-js';

const LOGO_URL = 'https://gw.alipayobjects.com/zos/rmsportal/gVAKqIsuJCepKNbgbSwE.svg';
const textSearchUrl = 'https://www.google.com/search?q=site:pro.ant.design+';

// https://www.algolia.com/apps/YEWBNYLVLW/
const searchUrl = 'https://yewbnylvlw-dsn.algolia.net/1/indexes/antd pro/query?x-algolia-agent=Algolia for vanilla JavaScript 3.21.1&x-algolia-application-id=YEWBNYLVLW&x-algolia-api-key=b42bc1a0c8ab7be447666944228a3176';

class Header extends React.Component {

  state = {
    menuVisible: false,
    menuMode: 'horizontal',
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ menuMode: b ? 'inline' : 'horizontal' });
    });
  }

  render() {
    const { inputValue, menuMode, menuVisible, searchOption, searching } = this.state;

    const menu = (
      <Menu mode={menuMode} id="nav" key="nav">
        <Menu.Item key="home">
          <a>首页</a>
        </Menu.Item>
        <Menu.Item key="docs">
          <a><span>文档</span></a>
        </Menu.Item>
        <Menu.Item key="components">
          <a>组件</a>
        </Menu.Item>
        {
          menuMode === 'inline' && (
            <Menu.Item key="preview">
              <a target="_blank" href="http://preview.pro.ant.design/" rel="noopener noreferrer">
                预览
              </a>
            </Menu.Item>
          )
        }
      </Menu>
    );

    return (
      <div id="header" className="header">
        {menuMode === 'inline' ? (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={this.onMenuVisibleChange}
          >
            <Icon
              className="nav-phone-icon"
              type="menu"
              onClick={this.handleShowMenu}
            />
          </Popover>
        ) : null}
        <Row>
          <Col xxl={4} xl={5} lg={8} md={8} sm={24} xs={24}>
            <div id="logo" to="/">
              <img src={LOGO_URL} alt="logo" />
              <span>ANT DESIGN PRO</span>
            </div>
          </Col>
          <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
            <div className="header-meta">
              <div id="preview">
                <a
                  id="preview-button"
                  target="_blank"
                  href="http://preview.pro.ant.design"
                  rel="noopener noreferrer"
                >
                  <Button icon="eye-o">
                    预览
                  </Button>
                </a>
              </div>
              {menuMode === 'horizontal' ? <div id="menu">{menu}</div> : null}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;