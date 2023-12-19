import { Link, useParams } from "react-router-dom";

function Issues() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      Issues
      <Link to="/repository">Go to repository</Link>
      <Link to="/">Go home</Link>
    </div>
  );
}

export default Issues;
