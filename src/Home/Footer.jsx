import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col md={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Ant Design</h2>
              <div>
                <a target="_blank " href="https://github.com/ant-design/ant-design">
                  GitHub
                </a>
              </div>
              <div>
                <a href="http://pro.ant.design">Ant Design Pro</a>
              </div>
              <div>
                <a href="http://mobile.ant.design">Ant Design Mobile</a>
              </div>
              <div>
                <a href="http://ng.ant.design">NG-ZORRO</a>
                <span> - </span>
                Ant Design of Angular
              </div>
              <div>
                <a target="_blank " href="https://github.com/websemantics/awesome-ant-design">
                  <FormattedMessage id="app.footer.awesome" />
                </a>
              </div>
              <div>
                <a target="_blank " href="http://ant-design.gitee.io/">
                  <FormattedMessage id="app.footer.chinamirror" />
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2><FormattedMessage id="app.footer.resources" /></h2>
              <div>
                <a href="http://scaffold.ant.design">Scaffolds</a>
                <span> - </span>
                <FormattedMessage id="app.footer.scaffolds" />
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/dvajs/dva">dva</a> - <FormattedMessage id="app.footer.dva" />
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/dvajs/dva-cli">dva-cli</a> -
                <FormattedMessage id="app.footer.dev-tools" />
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://motion.ant.design">Ant Motion</a>
                <span> - </span>
                <FormattedMessage id="app.footer.motion" />
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://library.ant.design/">AntD Library</a>
                <span> - </span>
                <FormattedMessage id="app.footer.antd-library" />
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://ux.ant.design">Ant UX</a>
                <span> - </span>
                <FormattedMessage id="app.footer.antux" />
              </div>
            </div>
          </Col>
          <Col md={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2><FormattedMessage id="app.footer.community" /></h2>
              <div>
                <a href="/changelog">
                  <FormattedMessage id="app.footer.change-log" />
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ant-design/ant-design/wiki/FAQ">
                  <FormattedMessage id="app.footer.faq" />
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://gitter.im/ant-design/ant-design">
                  <FormattedMessage id="app.footer.discuss-cn" />
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://gitter.im/ant-design/ant-design-english">
                  <FormattedMessage id="app.footer.discuss-en" />
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://new-issue.ant.design/">
                  <FormattedMessage id="app.footer.bug-report" />
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ant-design/ant-design/issues">
                  <FormattedMessage id="app.footer.issues" />
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://stackoverflow.com/questions/tagged/antd">
                  <FormattedMessage id="app.footer.stackoverflow" />
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://segmentfault.com/t/antd">
                  <FormattedMessage id="app.footer.segmentfault" />
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>
                <img className="title-icon" src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg" alt="" />
                <FormattedMessage id="app.footer.more-product" />
              </h2>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://antv.alipay.com/">AntV</a>
                <span> - </span>
                <FormattedMessage id="app.footer.data-vis" />
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://eggjs.org/">Egg</a>
                <span> - </span>
                <FormattedMessage id="app.footer.eggjs" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col md={4} sm={24} />
        <Col md={20} sm={24}>
          <span
            style={{
              lineHeight: '16px', paddingRight: 12, marginRight: 11, borderRight: '1px solid rgba(255, 255, 255, 0.55)',
            }}
          >
            <a
              href="https://docs.alipay.com/policies/privacy/antfin"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FormattedMessage id="app.footer.privacy" />
            </a>
          </span>
          <span style={{ marginRight: 24 }}>
            <a
              href="https://render.alipay.com/p/f/fd-izto3cem/index.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FormattedMessage id="app.footer.commitment" />
            </a>
          </span>
          <span style={{ marginRight: 12 }}>ICP 证浙 B2-2-100257</span>
          <span style={{ marginRight: 12 }}>Copyright © <FormattedMessage id="app.footer.company" /></span>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
