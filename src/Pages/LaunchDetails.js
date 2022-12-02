import { useParams } from "react-router-dom";
import Launch from "../components/launches/Launch";
import Screen from "../components/UI/Screen";
import Wave from "../components/UI/Waves";
import { useGetLaunchQuery } from "../Features/getLaunches/launchesApi";

const LaunchDetail = () => {
  const { flightNumber } = useParams();
  const { isLoading, data } = useGetLaunchQuery(flightNumber);

  return (
    <Screen>
      <Wave />
      <Launch launch={data} isLoading={isLoading} />
    </Screen>
  );
};

export default LaunchDetail;
