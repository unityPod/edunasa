import { useState, useEffect } from "react";
import axios from "axios";

const Rover = () => {
  const [rover, setRover] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      let data = await axios.get("http://localhost:4001/curiosity");
      console.log(data)
      setRover(data);
    };
    getData();
  }, []);


  console.log(rover);
  return <div>Hello</div>;
};

export default Rover;
