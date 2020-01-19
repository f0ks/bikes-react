import React from 'react';
import Header from "./components/header/header";
import Content from "./components/content/content";
import Footer from "./components/footer/footer";
import './App.scss';

const myHtmlElement = <div className={"my-element"}>My html el in var</div>;

function App() {
  return (
    <div>
      <Header inputValue={777} />
      {myHtmlElement}
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
