import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { marked } from 'marked';
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      markdown: placeholder
    };

    this.handleChange = this.handleChange.bind(this); 
    
  }

    handleChange(e) {
      this.setState({
        markdown: e.target.value
      });
    }

  render() {
    return (
      <div className='App'>
        <Container>
          <div className='upper'>
            <Row>
              <Col>Editor</Col>
              <Col>Preview</Col>
            </Row>
          </div>
            <Row>
              <Col>
                <textarea className='editor' value={this.state.markdown} onChange={this.handleChange}>
                </textarea>
              </Col>
              <Col>
                <div className='preview' dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}>
                </div>
              </Col>
            </Row>
        </Container>
      </div>
    );
  }
}

const placeholder = `# Welcome to Markdown Previewer

## This is a sub-heading

Check my **github** on (https://github.com/noudikalubis)
![githubLogo](https://cdn-icons-png.flaticon.com/512/25/25231.png)
> Block Quotes!

- Here is list example
- That look like this.
`;

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
