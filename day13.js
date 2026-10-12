
async function getPost() {
    console.log("fetching user data");
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    let data = await response.json();
    
    console.log("Data arrived!");
    console.log(data.title);

}
getPost();