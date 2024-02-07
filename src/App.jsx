// import React from "react";
import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import APICall from "./APICall";
// import Details from "./Details";
// import SearchParams from "./SearchParams";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className="navbar">
          <div className="container">
            <div className="logo">SD</div>
            <ul className="nav">
              <li>API</li>
              <li>Resume</li>
              <li>Download</li>
            </ul>
          </div>
        </div>

        <header>
          <div className="container">
            <h1>SAMANTHA DARTNALL</h1>
            <h2>Software Developer</h2>
          </div>
        </header>

        <section className="boxes">
          <div className="container">
            <APICall call={{ urlName: "about" }} />
            <APICall call={{ urlName: "experience" }} />
            <APICall call={{ urlName: "skills" }} />
          </div>
        </section>
        {/* <Routes> */}
        {/* <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} /> */}
        {/* </Routes> */}
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
