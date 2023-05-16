import {Component} from "react";
import v1 from'../component/video/suvratha.mp4';
class Project1 extends Component {
    render() {
      return (
      <div>
        <video controls height={900} width={900}>
            <source src={v1} ></source>
        </video>
        </div>
      );
    }
  }

  export default Project1;