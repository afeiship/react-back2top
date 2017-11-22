import './dev.scss';
import ReactBack2top from './main';

/*===example start===*/

// install: npm install afeiship/react-back2top --save
// import : import ReactBack2top from 'react-back2top'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-back2top">
        <ReactBack2top ref='rc' />
    </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
