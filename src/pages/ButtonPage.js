import Button from "../components/Button";
import {GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go';
import { useState } from "react";

function ButtonPage() {
  const [count,setCount] = useState(0)
  const handleClick = (event) =>{
    setCount(count+1);
    console.log(count);
  }
  return (
    <div>
      <div>
        <Button onClick={handleClick} className="mb-5" primary rounded >
          <GoBell/>Click Me!
        </Button>
      </div>
      <div>
        <Button secondary onMouseEnter={handleClick}><GoCloudDownload/>Buy Now!</Button>
      </div>
      <div>
        <Button success rounded>See Deal!</Button>
      </div>
      <div>
        <Button secondary>Hide Ads!</Button>
      </div>
      <div>
        <Button warning rounded><GoDatabase/>Something!</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
