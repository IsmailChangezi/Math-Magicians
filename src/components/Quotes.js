import React, { useEffect, useState } from "react";

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://api.api-ninjas.com/v1/quotes?category=happiness", {
        headers: {
          "X-Api-Key": "6OswdSRYmeJgqtC+MLCqOA==iSGiiZldylP7Y018",
        },
      })
        .then((res) => res.json())
        .then((data) => setQuotes(data));
    };
    fetchData();
  }, []);
  console.log(quotes);
  return (
    <div>
      {quotes &&
        quotes.length > 0 &&
        quotes.map((items) => {
          return (
            <>
              <h1 key={items.author}>{items.quote}</h1>
              <h2>{items.author}</h2>
            </>
          );
        })}
    </div>
  );
}
