


// Options for making a GET request to the Exercise Database API
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key':'94a3ba706bmsh1805581749279e2p19e610jsna436ae452216',
  },
};

// Options for making a GET request to the YouTube Search and Download API
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '94a3ba706bmsh1805581749279e2p19e610jsna436ae452216',
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
