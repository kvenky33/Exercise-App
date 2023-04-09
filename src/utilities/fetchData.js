export const exerciseoptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "4bf0049d89msh6b3c5186f8ad9fap10f37ejsnbc3be27abbe2",
  },
};
export const youtubeoptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "4bf0049d89msh6b3c5186f8ad9fap10f37ejsnbc3be27abbe2",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
