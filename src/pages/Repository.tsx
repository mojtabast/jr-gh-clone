import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function Repository() {
  const [counter, setCounter] = useState(0);
  const my_params = useParams();
  console.log(my_params);

  return (
    <div>
      Repository
      <h2>{counter}</h2>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        increase
      </button>
      <Link to="/mojtabast/folan-repo/issues">go to issues</Link>
    </div>
  );
}

export default Repository;
