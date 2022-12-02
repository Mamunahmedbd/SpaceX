import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  handleLaunchYear,
  handleRocketName,
  handlLaunchSuccess,
  handlSortLaunch,
} from "../../Features/getLaunches/filterSlice";

import { useGetRocketQuery } from "../../Features/getLaunches/launchesApi";

const Filter = () => {
  const { isLoading, data } = useGetRocketQuery();
  const dispatch = useDispatch();
  const [rocketName, setRocketName] = useState("");
  const [launchYear, setLaunchYear] = useState("");
  const [launchSuccess, setLaunchSuccess] = useState("");
  const [sortLaunch, setSortLaunch] = useState("");

  useEffect(() => {
    dispatch(handlSortLaunch(sortLaunch));
    dispatch(handleRocketName(rocketName));
    dispatch(handleLaunchYear(launchYear));
    dispatch(handlLaunchSuccess(launchSuccess));
  }, [sortLaunch, rocketName, launchYear, launchSuccess, dispatch]);

  let content;
  if (isLoading) {
    content = <h3>Loading</h3>;
  }
  if (!isLoading && data.length > 0) {
    content = (
      <label className="block">
        <span className="text-gray-700">Rocket name</span>
        <select
          value={rocketName}
          onChange={(e) => setRocketName(e.target.value)}
          className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">All</option>
          {data?.map((item) => (
            <option key={item.rocket_name} value={item.rocket_name}>
              {item.rocket_name}
            </option>
          ))}
        </select>
      </label>
    );
  }

  const currentYear = new Date().getFullYear();

  return (
    <div className="container grid grid-cols-1 gap-6 mx-auto w-2/3 mt-14 xl:grid-cols-4">
      {content}
      <label className="block">
        <span className="text-gray-700">Launch year</span>
        <select
          value={launchYear}
          onChange={(e) => setLaunchYear(e.target.value)}
          className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">All</option>
          {[...Array(currentYear - 2001 + 1).keys()]
            .sort((a, b) => b - a)
            .map((item) => {
              const year = item + 2001;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
        </select>
      </label>

      <label className="block">
        <span className="text-gray-700">Launch success</span>
        <select
          value={launchSuccess}
          onChange={(e) => setLaunchSuccess(e.target.value)}
          className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">All</option>
          <option value={true}>Success</option>
          <option value={false}>Failed</option>
        </select>
      </label>
      <label className="block">
        <span className="text-gray-700">Sort by Launch</span>
        <select
          value={sortLaunch}
          onChange={(e) => setSortLaunch(e.target.value)}
          className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">All</option>
          <option value={"past"}>Past Launches</option>
          <option value={"upcoming"}>Upcoming Launches</option>
        </select>
      </label>
    </div>
  );
};

export default Filter;
