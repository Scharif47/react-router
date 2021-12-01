import { useParams } from "react-router-dom";
import { getDog } from "../data";

function Dog() {
  let { dogName } = useParams();
  let dog = getDog(dogName);

  return (
    <div className="m-10">
      <h1>Name: {dogName}</h1>
      <h2>Age: {dog.age}</h2>
      <p>{dog.detail}</p>
    </div>
  );
}

export default Dog;
