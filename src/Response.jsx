const Results = ({ apiResponse }) => {
  return (
    <div>
      {!apiResponse.length ? (
        <div className="apiResponse"> &lt;- Click here to try my CV API!! </div>
      ) : (
        apiResponse.map((apiResponse) => {
          return <div>We got a response</div>;
        })
      )}
    </div>
  );
};

export default Results;
