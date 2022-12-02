import { apiSlice } from "../api/apiSlice";

export const launchesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // All Launches Query
    getLaunches: builder.query({
      query: (qStrng) => `${qStrng}`,
      keepUnusedDataFor: 5,
      transformResponse(apiResponse, meta) {
        const totalCount = meta.response.headers.get("Spacex-Api-Count");
        return {
          launches: apiResponse,
          totalCount,
        };
      },
    }),
    // Single launch query
    getLaunch: builder.query({
      query: (flightNumber) => `launches/${flightNumber}`,
    }),
    // Rocket name query
    getRocket: builder.query({
      query: () => "/rockets",
    }),
  }),
});

export const { useGetLaunchesQuery, useGetLaunchQuery, useGetRocketQuery } =
  launchesApi;
