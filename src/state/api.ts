import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis"],
  endpoints: (build) => ({
    getKpis: build.query<void, void>({
      //references this line ^^ in export below
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"]
    }),
  })
})

export const { useGetKpisQuery } = api;
// this hook adds the prefix "use" to "getKpis from above, "build.query<void, void>({ "