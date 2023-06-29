import "./style.scss";
import { useParams } from "react-router-dom";
import Cast from "./cast/Cast";
import VideosSection from "./videoSection/VideoSection";

import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoding } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoding} />
      <VideosSection data={data} loading={loading} />
    </div>
  );
};

export default Details;
