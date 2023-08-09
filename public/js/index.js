
window.onload = () => {
    
    const button = document.getElementById("button");
    const container = document.querySelector(".container");
    
    const callApi = async () => {
        try {
            const urlAPI = "https://tenor.googleapis.com/v2/search?q=francella&key=AIzaSyA0ohdzdqbd_Qxi98DiUPU5Dvbxei6Ib_U&client_key=my_test_app&limit=30"
            let response = await fetch(urlAPI);
            let json = await response.json();
            return json;
        } catch (error) {
            console.log(error);
        }
    }

    button.addEventListener("click", async (e) => {
        let apiResponse = await callApi();
        if (apiResponse && apiResponse.results.length > 0) {
            const index = Math.floor(Math.random() * apiResponse.results.length)
            const gifUrl = apiResponse.results[index].media_formats.gif.url;
            //console.log(gifUrl);

            container.innerHTML = "";

            let img = document.createElement("img");
            img.src = gifUrl;
            img.classList.add("img-size");
            container.appendChild(img);

        }
    })
}