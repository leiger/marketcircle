import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import MediaQuery from 'react-responsive';

import './Main.scss';

import Mlogo from '../images/1x/Lorem Ipsum.png';
import MBanner from '../images/1x/Banner.png';
import MS01 from '../images/1x/S01.png';
import MS02 from '../images/1x/S02.png';
import MS03 from '../images/1x/S03.png';
import MC02 from '../images/1x/02 image.png';
import MC03 from '../images/1x/03 image.png';
import MC04 from '../images/1x/04 image.png';
import logo from '../images/2x/Lorem Ipsum@2x.png';
import Banner from '../images/2x/Banner@2x.png';
import S01 from '../images/2x/S01@2x.png';
import S02 from '../images/2x/S02@2x.png';
import S03 from '../images/2x/S03@2x.png';
import C02 from '../images/2x/02 image@2x.png';
import C03 from '../images/2x/03 image@2x.png';
import C04 from '../images/2x/04 image@2x.png';

import Button from '../components/Button';
import Nav from '../components/Nav';
import Card from '../components/Card';


class Main extends Component {
  constructor() {
    super();
    this.state = {
      navIcon: 'bars',
      navItems: [
        {
          name: 'Lorem',
          to: '/others'
        },
        {
          name: 'Lorem',
          to: '/others'
        },
        {
          name: 'Lorem',
          to: '/others'
        },
        {
          name: 'Lorem',
          to: '/others'
        }
      ],
      navShow: false,
      customerStories: [
        {
          id: 1,
          img_large: S01,
          img_small: MS01,
          title: 'Eiusmod tempor',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aspernatur at, blanditiis dolor ea, enim esse harum id non odio officia quaerat quam quisquam, ut. Dolor explicabo provident reiciendis.',
          name: 'accusantium'
        },
        {
          id: 2,
          img_large: S02,
          img_small: MS02,
          title: 'Eiusmod tempor',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aspernatur at, blanditiis dolor ea, enim esse harum id non odio officia quaerat quam quisquam, ut. Dolor explicabo provident reiciendis.',
          name: 'accusantium'
        },
        {
          id: 3,
          img_large: S03,
          img_small: MS03,
          title: 'Eiusmod tempor',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aspernatur at, blanditiis dolor ea, enim esse harum id non odio officia quaerat quam quisquam, ut. Dolor explicabo provident reiciendis.',
          name: 'accusantium'
        }
      ]
    }
  }

  toggleNav = () => {
    if(this.state.navShow === false) {
      this.setState({
        navIcon: 'times',
        navShow: true
      });
    }
    else {
      this.setState({
        navIcon: 'bars',
        navShow: false
      })
    }
  };

  getMobileNavClasses = () => {
    let classes = 'nav';
    return this.state.navShow === true ? `${classes} show` : `${classes}`;
  };

  render() {
    const {navIcon, navItems: items, customerStories} = this.state;
    return (
      <React.Fragment>
        {/*header*/}
        <header>
          {/*logo*/}
          <div className="title">
            <h1>
              <MediaQuery maxDeviceWidth={700}>
                <img src={Mlogo} alt="logo"/>
              </MediaQuery>
              <MediaQuery minDeviceWidth={700}>
                <img src={logo} alt="logo"/>
              </MediaQuery>
            </h1>
            <div onClick={this.toggleNav}>
              <FontAwesomeIcon className="navToggle" icon={navIcon}/>
            </div>
          </div>
          <div className={this.getMobileNavClasses()}>
            <Nav className="navItems" items={items}/>
            <Button className="navButton">Lorem</Button>
          </div>
        </header>

        {/*banner*/}
        <section className="banner">
          <MediaQuery maxDeviceWidth={700}>
            <img className="bannerImg" src={MBanner} alt="bannerImg"/>
          </MediaQuery>
          <MediaQuery minDeviceWidth={700}>
            <img className="bannerImg" src={Banner} alt="bannerImg"/>
          </MediaQuery>
          <p className="bannerText">Lorem Ipsum</p>
        </section>

        <div className="content">
          {/*introduction*/}
          <section className="intro">
            <div className="introDetails">
              <p className="col-50 introLeft">'Alias autem cum, deserunt eos error, et eum, id illo impedit molestiae'</p>
              <p className="col-50 desc">'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem cum, deserunt eos error, et eum, id illo impedit'</p>
            </div>
            <Button className="introBtn">Start 30 Days Trial</Button>
          </section>

          {/*content1*/}
          <section className="content1">
            <div className="col-50 content1Left">
              <h2>'Sint occaecat cupidatat'</h2>
              <p className="desc">'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem cum, deserunt eos error, et eum, id illo impedit molestiae molestias nam odio quia quibusdam ratione totam ut voluptas voluptatibus?'</p>
              <MediaQuery maxDeviceWidth={700}>
                <img src={MC02} alt="content1 img"/>
              </MediaQuery>
              <MediaQuery minDeviceWidth={700}>
                <img src={C02} alt="content1 img"/>
              </MediaQuery>
            </div>
            <div className="col-50 content1Right">
              <h2>'Occaecat cupidatat non'</h2>
              <p className="desc">'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem cum, deserunt eos error, et eum, id illo impedit molestiae molestias nam odio quia quibusdam ratione totam ut voluptas voluptatibus?'</p>
              <MediaQuery maxDeviceWidth={700}>
                <img src={MC02} alt="content1 img"/>
              </MediaQuery>
              <MediaQuery minDeviceWidth={700}>
                <img src={C02} alt="content1 img"/>
              </MediaQuery>
            </div>
          </section>

          {/*content2*/}
          <section className="content2">
            <div className="col-50 content1Left">
              <h2>'Excepteur sint occaecat cupidatat dem'</h2>
              <p className="desc">'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem cum, deserunt eos error, et eum, id illo impedit molestiae molestias nam odio quia quibusdam ratione totam ut voluptas voluptatibus?'</p>
              <p className="desc">'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem cum, deserunt eos error, et eum, id illo impedit molestiae molestias nam odio quia quibusdam ratione totam ut voluptas voluptatibus?'</p>
            </div>
            <div className="col-50 content1Right">
              <MediaQuery maxDeviceWidth={700}>
                <img src={MC03} alt="content1 img"/>
              </MediaQuery>
              <MediaQuery minDeviceWidth={700}>
                <img src={C03} alt="content1 img"/>
              </MediaQuery>
            </div>
          </section>

          {/*content3*/}
          <section className="content3">
            <h2>'Occaecat non proident'</h2>
            <p className="desc">'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem cum, deserunt eos error, et eum, id illo impedit molestiae molestias nam odio quia quibusdam ratione totam ut voluptas voluptatibus?'</p>
            <MediaQuery maxDeviceWidth={700}>
              <img src={MC04} alt="content1 img"/>
            </MediaQuery>
            <MediaQuery minDeviceWidth={700}>
              <img src={C04} alt="content1 img"/>
            </MediaQuery>
          </section>

          <section className="learnMore">
            <Button className="learnMoreBtn">Lorem Ipsum</Button>
            <h2>Excepteur denet al asumen der alumin et</h2>
          </section>

          {/*customer stories*/}
          <section className="customerStories">
            <h2 className="customerStoriesTitle">Customer Stories</h2>
            <div className="customerStoriesDetails">
              {
                customerStories.map(story => (
                  <Card key={story.id} className="customerCard">
                    <Card.Header className="customerCardHeader">
                      <MediaQuery maxDeviceWidth={700}>
                        <img className="customerCardImg" src={story.img_small} alt="a story"/>
                      </MediaQuery>
                      <MediaQuery minDeviceWidth={700}>
                        <img className="customerCardImg" src={story.img_large} alt="a story"/>
                      </MediaQuery>
                      <h4>{story.title}</h4>
                    </Card.Header>
                    <Card.Content>
                      <p className="customerCardDetail">{story.content}</p>
                      <p className="customerCardName">{story.name}</p>
                    </Card.Content>
                  </Card>
                ))
              }
            </div>
            <div className="seeAll">See All</div>
          </section>

          <section className="learnMore">
            <h2>Excepteur denet al asumen der alumin et</h2>
            <Button className="learnMoreBtn">Lorem Ipsum?</Button>
          </section>
        </div>

      </React.Fragment>
    );
  }
}

export default Main;

