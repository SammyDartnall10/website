const APICall = ({ call }) => {
  return (
    <div className="box apiCall">
      <div>
        <button className="apiCallButton">/api/v1/{call.urlName}</button>
      </div>
      <div className="apiResponse"> &lt;- Click here to try my CV API! </div>
    </div>
  );
};

export default APICall;
