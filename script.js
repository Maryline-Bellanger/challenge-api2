
const content = document.getElementById("content");
const search = document.getElementById("search");

form.addEventListener("submit", function(e){
  e.preventDefault();
  const searchValue = search.value;
  // reset le content
  content.innerHTML = "";
  display(searchValue);
});


async function display(searchValue){

  try {
    const responseJSON = await 
    fetch(`https://api.unsplash.com/search/photos?client_id=onGZkDNboCLMdwCdP03LCtcyYmgvJPx8LIz8uwwEyNQ&page=1&query=${searchValue}`);
    const responseJS = await responseJSON.json();
    console.log(responseJS)

    if (responseJS.results.length === 0) {
      content.innerHTML = `<div>
                            <p>Vide</p>
                          </div>`
    } else {
      responseJS.results.forEach((i) => {
        content.innerHTML += `<div class="diapo">
                                <img src=${i.urls.small}  class="photos" />
                              </div>`
      
    });
    }

      
      
    
  } catch (error) {
    console.log(error);
  }

  

}
