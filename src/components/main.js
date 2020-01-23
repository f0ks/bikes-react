import React from 'react';
import Header from "./header/header";
import Content from "./content/content";
import Footer from "./footer/footer";

const myHtmlElement = <div className={"my-element"}>My html el in var</div>;

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //value: null,
    };

  }


  render() {
    return (
      <div>
        <Header inputValue={777}/>
        {myHtmlElement}
        <Content/>
        <Footer/>
      </div>


    );
  }
}