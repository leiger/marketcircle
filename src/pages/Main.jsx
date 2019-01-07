import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './Main.scss';
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
      navItems: ['Lorem', 'Lorem', 'Lorem', 'Lorem'],
      banner: {
        img: Banner,
        text: 'Lorem Ipsum'
      },
      introduction: {
        left: 'Alias autem cum, deserunt eos error, et eum, id illo impedit molestiae',
        right: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem cum, deserunt eos error, et eum, id illo impedit'
      },
      content1: {
        left: {
          title: 'Sint occaecat cupidatat',
          detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem cum, deserunt eos error, et eum, id illo impedit molestiae molestias nam odio quia quibusdam ratione totam ut voluptas voluptatibus?',
          img: C02
        },
        right: {
          title: 'Occaecat cupidatat non',
          detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem cum, deserunt eos error, et eum, id illo impedit molestiae molestias nam odio quia quibusdam ratione totam ut voluptas voluptatibus?',
          img: C02
        }
      },
      content2: {
        title: 'Excepteur sint occaecat cupidatat dem',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem cum, deserunt eos error, et eum, id illo impedit molestiae molestias nam odio quia quibusdam ratione totam ut voluptas voluptatibus?',
        img: C03
      },
      content3: {
        title: 'Occaecat non proident',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem cum, deserunt eos error, et eum, id illo impedit molestiae molestias nam odio quia quibusdam ratione totam ut voluptas voluptatibus?',
        img: C04
      },
      customerStories: [
        {
          id: 1,
          img: S01,
          title: 'Eiusmod tempor',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aspernatur at, blanditiis dolor ea, enim esse harum id non odio officia quaerat quam quisquam, ut. Dolor explicabo provident reiciendis.',
          name: 'accusantium'
        },
        {
          id: 2,
          img: S02,
          title: 'Eiusmod tempor',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aspernatur at, blanditiis dolor ea, enim esse harum id non odio officia quaerat quam quisquam, ut. Dolor explicabo provident reiciendis.',
          name: 'accusantium'
        },
        {
          id: 3,
          img: S03,
          title: 'Eiusmod tempor',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aspernatur at, blanditiis dolor ea, enim esse harum id non odio officia quaerat quam quisquam, ut. Dolor explicabo provident reiciendis.',
          name: 'accusantium'
        }
      ]
    }
  }

  toggleNav = () => {
    if(this.state.navIcon === 'bars') {
      this.setState({
        navIcon: 'times'
      });
    }
    else {
      this.setState({
        navIcon: 'bars'
      })
    }
  };

  render() {
    const {navIcon, navItems: items, customerStories, banner, introduction, content1, content2, content3} = this.state;
    return (
      <React.Fragment>
        {/*header*/}
        <header>
          {/*logo*/}
          <div className="title">
            <h1><img src={logo} alt="logo"/></h1>
            <div onClick={this.toggleNav}>
              <FontAwesomeIcon className="navToggle" icon={navIcon}/>
            </div>
          </div>

          <Nav className="navItems" items={items}/>
          <Button className="navButton">Lorem</Button>
        </header>

        {/*banner*/}
        <section className="banner">
          <img className="bannerImg" src={banner.img} alt="bannerImg"/>
          <p className="bannerText">{banner.text}</p>
        </section>

        <div className="content">
          {/*introduction*/}
          <section className="intro">
            <div className="introDetails">
              <p className="col-50 introLeft">{introduction.left}</p>
              <p className="col-50 desc">{introduction.right}</p>
            </div>
            <Button className="introBtn">Start 30 Days Trial</Button>
          </section>

          {/*content1*/}
          <section className="content1">
            <div className="col-50 content1Left">
              <h2>{content1.left.title}</h2>
              <p className="desc">{content1.left.detail}</p>
              <img src={content1.left.img} alt="content1 img"/>
            </div>
            <div className="col-50 content1Right">
              <h2>{content1.right.title}</h2>
              <p className="desc">{content1.right.detail}</p>
              <img src={content1.right.img} alt="content1 img"/>
            </div>
          </section>

          {/*content2*/}
          <section className="content2">
            <div className="col-50 content1Left">
              <h2>{content2.title}</h2>
              <p className="desc">{content2.detail}</p>
              <p className="desc">{content2.detail}</p>
            </div>
            <div className="col-50 content1Right">
              <img src={content2.img} alt="content2 img"/>
            </div>
          </section>

          {/*content3*/}
          <section className="content3">
            <h2>{content3.title}</h2>
            <p className="desc">{content3.detail}</p>
            <img src={content3.img} alt="content3 img"/>
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
                      <img className="customerCardImg" src={story.img} alt="a story"/>
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
            <a href="#">See All</a>
          </section>
        </div>

      </React.Fragment>
    );
  }
}

export default Main;

