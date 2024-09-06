const apiUrl = async () => {
  let total_pages = 5;
  let article = [];
  for (let page = 1; page <= total_pages; page++) {
    let DataArray = await fetch(
      `https://jsonmock.hackerrank.com/api/articles?page=${page}`
    );
    let res = await DataArray.json();
    article = article.concat(res.data);
  }

  article.sort((a, b) => b.num_comments - a.num_comments);

  const container = document.querySelector("#articles-container");
  container.innerHTML = ""; // Clear previous articles

  article.slice(0, 10).forEach((element) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="vector-users-icon.jpg" alt="Avatar">
        <h3>${element.title || "No Title"}</h3>
        <p>Author: ${element.author || "Unknown"}</p>
        <p>Comments: ${element.num_comments || 0}</p>
        <a href="${element.url}" target="_blank">Go to Article</a>
      `;
    container.appendChild(card);
  });
};

const apiUrl2 = async () => {
  let total_pages = 5;
  let article = [];
  for (let page = 1; page <= total_pages; page++) {
    let DataArray = await fetch(
      `https://jsonmock.hackerrank.com/api/articles?page=${page}`
    );

    let res = await DataArray.json();
    article = article.concat(res.data);
  }

  article.sort((a, b) => b.created_at - a.created_at);

  const container = document.querySelector("#articles-container");
  container.innerHTML = ""; // Clear previous articles

  article.slice(0, 10).forEach((element) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
          <img src="vector-users-icon.jpg" alt="Avatar">
        
          <h3>${element.title || "No Title"}</h3>
          <p>Author: ${element.author || "Unknown"}</p>
          <p>Comments: ${element.num_comments || 0}</p>
          <a href="${element.url}" target="_blank">Go to Article</a>
        `;
        

    container.appendChild(card);
  });

};

document.querySelector("#top-comments-btn").addEventListener("click", apiUrl);
document
  .querySelector("#latest-comments-btn")
  .addEventListener("click", apiUrl2);
