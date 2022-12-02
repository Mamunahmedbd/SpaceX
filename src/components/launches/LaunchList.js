import React from "react";
import { useSelector } from "react-redux";
import Card from "../UI/Card";
import Loader from "../UI/Loader";

const LaunchList = ({ launches, isLoading }) => {
  const { search } = useSelector((state) => state.filter);

  // Debounce Searching with launches mission name
  let debounceSearch = (launch) => {
    if (launch) {
      return launch.mission_name.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  };
  return (
    <div className="flex flex-wrap justify-center">
      {/* Launches list Loading Condition  */}
      {isLoading ? (
        <>
          <div
            className="flex w-96 h-96 mt-16 justify-center items-center"
            style={{
              height: "480px",
            }}
          >
            <Loader />
          </div>
        </>
      ) : launches.length === 0 ? (
        <div
          className="flex w-96 h-96 mt-16 justify-center items-center"
          style={{
            height: "480px",
          }}
        >
          {/*launches Not Found Condition  */}
          <h1 className="text-2xl">No Launches Found.</h1>
        </div>
      ) : (
        launches.filter(debounceSearch).map((launch) => (
          // Launches card list
          <Card
            key={launch._id}
            to={`/launches/${launch.flight_number}`}
            title={launch.mission_name}
            date={launch.launch_date_utc}
            imageUrl={launch.links.mission_patch_small}
            active={launch.launch_success}
            details={launch.details}
          />
        ))
      )}
    </div>
  );
};

export default LaunchList;
