export const exerciseoptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "ad2442dd19msh7da7d37ada38f6dp143ca7jsn01e7d9b65dca",
  },
};
export const youtubeoptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "ad2442dd19msh7da7d37ada38f6dp143ca7jsn01e7d9b65dca",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
