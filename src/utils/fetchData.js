// Options for making a GET request to the Exercise Database API
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '3f50863009msh53ba641cf1642e9p1b1b84jsn063db7006326',
  },
};

// Options for making a GET request to the YouTube Search and Download API
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};

// Function to fetch data from a given URL with specified options
export const fetchData = async (url, options) => {
  // Making a fetch request and waiting for the response
  const res = await fetch(url, options);

  // Parsing the response data as JSON
  const data = await res.json();

  // Returning the parsed data
  return data;
};
