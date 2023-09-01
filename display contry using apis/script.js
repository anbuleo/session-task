const api = fetch("https://restcountries.com/v2/all");

api.then((data)=>data.json().then((data1)=>{
    console.log(data1)
    for(let i=0; i<data1.length;i++){
        const element = document.createElement("div")
        element.innerHTML=`<div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <img src="${data1[i].flag}" loading="lazy" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data1[i].name}</h5>
              <p class="card-text"><b><i>capital: ${data1[i].capital}</i></b></p>
              <p class="card-text"><b><i>Region: ${data1[i].region}</i></b></p>
              <p class="card-text"><b><i>SubRegion: ${data1[i].subregion}</i></b></p>
              <p class="card-text"><b><i>Population: ${data1[i].population}</i></b></p>
            </div>
          </div>
        </div>
        </div>`
        document.body.append(element)
    }
}))