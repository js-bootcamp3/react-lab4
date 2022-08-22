import React from 'react';
import Article from './components/Artilcle';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.handleTitle = this.handleTitle.bind(this);

    this.state = {
      articleText: 'Hello world'
    }
  }

  handleTitle() {
    this.setState({articleText: 'Hi Jack!!'})
  }

  render(){
    console.log('text', this.state.articleText)
    const { articleText } = this.state;

    return (
      <div className="App">
        <h1 onClick={this.handleTitle}>{articleText}</h1>
        <Article text={'HELLLOOOO'}/>
      </div>
    );
  }
}

export default App;
