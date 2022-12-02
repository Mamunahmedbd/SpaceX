import Hero from "../components/UI/Hero";
import Screen from "../components/UI/Screen";
import Title from "../components/UI/Title";
import Wave from "../components/UI/Waves";
import heroAnimation from "../assets/animations/launches.json";
import LaunchList from "../components/launches/LaunchList";
import { useGetLaunchesQuery } from "../Features/getLaunches/launchesApi";
import Filter from "../components/launches/Filter";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Pagination from "../components/launches/Pagination";
import Search from "../components/launches/Search";

// limit of pagination
const LIMIT = 12;

const Launches = () => {
  const { sortLaunch, rocketName, launchYear, launchSuccess, currentPage } =
    useSelector((state) => state.filter);

  // All Filtering condition with api query string
  const offset = (currentPage - 1) * LIMIT;
  let qStrng = "launches/";
  if (sortLaunch.length > 0) {
    qStrng += `${sortLaunch}`;
  }
  if (currentPage) {
    qStrng += `?id=true&limit=${LIMIT}&offset=${offset}`;
  }
  if (rocketName.length > 0) {
    qStrng += `&rocket_name=${rocketName}`;
  }
  if (launchYear.length > 0) {
    qStrng += `&launch_year=${launchYear}`;
  }
  if (launchSuccess.length > 0) {
    qStrng += `&launch_success=${launchSuccess}`;
  }
  // RTK Qeury Fetching data
  const { isLoading, data } = useGetLaunchesQuery(qStrng);
  const { launches, totalCount = 0 } = data || [];

  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    setLastPage(Math.ceil(totalCount / LIMIT));
  }, [totalCount]);

  return (
    <Screen>
      <Hero
        title="Discover all SpaceX Launches"
        subtitle="The Falcon design features reusable first-stage boosters, which land either on a ground pad near the launch site or on a drone ship at sea. In December 2015, Falcon 9 became the first rocket to land propulsively after delivering a payload to orbit. "
        image={heroAnimation}
      />
      <Wave />
      <Title message="Launches" />
      {/* Search by rocket mission name  */}
      <Search />
      {/* Filtering by rocket name, Launch year, Launch success, upcoming
      Launch */}
      <Filter />
      {/* Launches card list  */}
      <LaunchList launches={launches} isLoading={isLoading} />
      {/* launches pagination  */}
      <Pagination lastPage={lastPage} />
    </Screen>
  );
};

export default Launches;
