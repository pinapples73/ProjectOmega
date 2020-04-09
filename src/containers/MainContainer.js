import React, {Component, Fragment} from 'react';
import SpeechRecognition from './SpeechRecognition';


class MainContainer extends Component{
  constructor(props){
    super(props);
    this.state= {

    };
  }

  render(){
    return(
      <Fragment>
        <SpeechRecognition/>
      </Fragment>
    )
  }

}

export default MainContainer;
