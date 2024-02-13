import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import fetchSearch from "./fetchSearch";
import Results from "./Response";

const APICall = ({ call }) => {
  const [requestParams, setRequestParams] = useState({
    urlName: "",
  });

  const results = useQuery(["search", requestParams], fetchSearch);

  if (results.isLoading) {
    return (
      <div>
        <h2>🌀</h2>
      </div>
    );
  }

  const apiResponse = results?.data?.hello ?? [];

  return (
    <div className="box apiCall">
      <div>
        <button
          onClick={() => {
            setRequestParams(call.urlName);
          }}
          className="apiCallButton"
        >
          /api/v1/{call.urlName}
        </button>
      </div>
      {/* <div className="apiResponse"> &lt;- Click here to try my CV API! </div> */}
      <Results apiResponse={apiResponse} />
    </div>
  );
};

export default APICall;
