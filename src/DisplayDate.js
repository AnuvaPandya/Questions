import React, { useState, useEffect } from "react";

const DisplayData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      {data.map((data) => (
        <div>
          {data.id}) {data.title.toUpperCase()}
        </div>
      ))}
    </>
  );
};
export default DisplayData;
