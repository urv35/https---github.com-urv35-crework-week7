const button = document.querySelector(
    ".meme .button"
  );
  const Image = document.querySelector(".meme img");
  const Title = document.querySelector(".meme .title");
  
  
  const generatedMeme = (url) => {
    Image.setAttribute("src", url);
    Title.innerHTML = 'Here is a meme';
  };
  
  const generator = () => {
    fetch("https://meme-api.herokuapp.com/gimme/wholesomememes")
      .then((response) => response.json())
      .then((data) => {
        generatedMeme(data.url);
      });
  };
  
  button.addEventListener("click", generator);
  
  generator();