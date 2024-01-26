// import React from "react";
import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Experience from "./Experience";
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
        <header>
          <Link to="#" className="logo">
            SD
          </Link>
        </header>
        <h1>Samantha Dartnall</h1>
        <h2>Software Developer</h2>
        <div className="container">
          <Experience />
          <Experience />
          <Experience />
        </div>
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
