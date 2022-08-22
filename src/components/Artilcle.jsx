import React from "react";

export default class Article extends React.Component {
  constructor(props) {
    console.log('contstructor')
    super(props);
    this.handleShow = this.handleShow.bind(this);

    this.state = {
      show: false,
    };
  }

  handleShow() {
    this.setState({ 
      show: !this.state.show 
    });
  }

  componentDidMount() {
    console.log('mount');
  }

  componentDidUpdate() {
    console.log('reRender');
  }

  componentWillUnmount() {
    console.log('unmount');
  }

  render() {
    const renderArticleText = () => {
      if (this.state.show) {
        return <div>
          Для этого добавим так называемое «состояние» (state) в компонент
          Clock. «Состояние» очень похоже на уже знакомые нам пропсы, отличие
          в том, что состояние контролируется и доступно только конкретному
          компоненту.
        </div>
      } else {
        return 'Loading....'
      }
    }

    return (
      <div>
        <h1>{this.props.text?.length}</h1>
        <button onClick={this.handleShow}>
        {this.state.show ? 'Hide' : 'Show'}
        </button>
        {renderArticleText()}
      </div>
    );
  }
}
