import React from 'react';
import { Row, Col, Button } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Ant Design</h2>
              <div>
                <a target="_blank " href="https://github.com/ant-design/ant-design-pro">
                  Ant Design Pro GitHub
                </a>
              </div>
              <div>
                <a target="_blank " href="http://ant.design">
                  Ant Design
                </a>
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
                  Awesome Ant Design
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Ant Design</h2>
              <div>
                <a href="http://scaffold.ant.design">Scaffolds</a>
                <span> - </span>
                <span>脚手架市场</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="http://motion.ant.design">Ant Motion</a>
                <span> - </span>
                <span>设计动效</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="http://library.ant.design/">Axure Library</a>
                <span> - </span>
                <span>Axure 部件库</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="http://ux.ant.design">Ant UX</a>
                <span> - </span>
                <span>页面逻辑素材</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://github.com/dvajs/dva">dva </a>
                <span> - </span>
                <span> 应用框架</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://github.com/dvajs/dva-cli">dva-cli </a>
                <span> - </span>
                <span> 开发工具</span>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>社区</h2>
              <div>
                <a href="#">
                  更新记录
                </a>
              </div>
              <div>
                <a href="#">
                  常见问题
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://gitter.im/ant-design/ant-design-pro">
                  在线讨论
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://github.com/ant-design/ant-design-pro/issues">
                  讨论列表
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener"
                  href="http://ant.design/docs/resource/work-with-us"
                >
                  加入我们
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>
                更多产品
              </h2>
              <div>
                <a target="_blank" rel="noopener" href="http://ant.design/">Ant Design</a>
                <span> - </span>
                <span>蚂蚁 UI 设计体系</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://antv.alipay.com/">AntV</a>
                <span> - </span>
                <span>蚂蚁数据可视化方案</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://eggjs.org/">Egg</a>
                <span> - </span>
                <span>企业级 Node Web 开发框架</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={6} sm={24}>
          <div className="translate-button">
            <Button ghost size="small" >
              English
            </Button>
          </div>
        </Col>
        <Col lg={18} sm={24}>
          <span
            style={{
              lineHeight: '16px',
              paddingRight: 12,
              marginRight: 11,
              borderRight: '1px solid rgba(255, 255, 255, 0.55)',
            }}
          >
            <a
              href="https://docs.alipay.com/policies/privacy/antfin"
              rel="noopener noreferrer"
              target="_blank"
            >
              隐私权政策 ICP
            </a>
          </span>
          <span style={{ marginRight: 24 }}>
            <a
              href="https://render.alipay.com/p/f/fd-izto3cem/index.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              权益保障承诺书
            </a>
          </span>
          <span style={{ marginRight: 12 }}>ICP 证浙 B2-2-100257</span>
          <span style={{ marginRight: 12 }}>Copyright © 蚂蚁金融服务集团</span>
        </Col>
      </Row>
    </footer>
  );
}


export default Footer;
