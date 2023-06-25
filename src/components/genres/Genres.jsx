import { useSelector } from "react-redux";
import "./style.scss";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);

  //   console.log("gen:", genres);
  //   console.log("data:", data);

  return (
    <div className="genres">
      {data?.map((g) => {
        // console.log(JSON.stringify(genres[g]?.name));
        // if (!genres[g]?.name) return;
        return (
          <div className="genre" key={g}>
            <h1>{g}</h1>
            {/* {genres[g]?.name} */}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
