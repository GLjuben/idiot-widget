import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  //watch term
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
      return () => {
        clearTimeout(timerId);
      };
    }, 1000);
  }, [term]);

  useEffect(() => {
    const searchWikipedia = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    };
    searchWikipedia();
  }, [debouncedTerm]);

  // useEffect(() => {
  //   // logic for if inital search term is empty string,to not make an empty request

  //   //timeoutId returns the id:number of the setTimeout function that is responsible for making(delaying) requests every 500miliseconds;
  //   // we pass timeoutId as an argument to clearTimeout(), which is called in the clean-up func in useEffect;
  //   const searchWikipedia = async () => {
  //     const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
  //       params: {
  //         action: "query",
  //         list: "search",
  //         origin: "*",
  //         format: "json",
  //         srsearch: term,
  //       },
  //     });
  //     searchWikipedia()
  //     setResults(data.query.search);
  //   };
  //   if (term && !results.length) {
  //     searchWikipedia();
  //   } else {
  //     const timeoutId = setTimeout(() => {
  //       if (term) {
  //         searchWikipedia();
  //       }
  //     }, 500);
  //     return () => {
  //       clearTimeout(timeoutId);
  //     };
  //   }
  // }, [term, results.length]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <h2 className="header">{result.title}</h2>

          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
