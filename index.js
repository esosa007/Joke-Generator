const fetchData = async () => {
    const jokes = await axios.get('https://official-joke-api.appspot.com/jokes/random');

    console.log(jokes.data.setup)
};

fetchData();