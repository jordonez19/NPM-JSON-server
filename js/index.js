// javascript for index.html
const container = document.querySelector('.blogs');
const searchForm = document.querySelector('.search');


const renderPosts = async (atributoTerm) => {
    let uri = 'http://localhost:3000/posts?_sort=likes&_order=desc';
    
    if(atributoTerm){
        uri += `&q=${atributoTerm}`;
    }

    const res = await fetch(uri);
    const posts = await res.json();
    console.log(posts)
    let template = '';

    posts.forEach(post => {
        template += `
        <div class="post">
            <h2>${post.title}</h2>
            <p><small>${post.likes}</small></p>
            <p>${post.body.slice(0, 120)}</p>
            <a href="/details.html?id=${post.id}">Read More . . .</a>
        </div>`
    })
    container.innerHTML = template
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    renderPosts(searchForm.atributoTerm.value.trim())
})

// wait until the web page is ready 
window.addEventListener('DOMContentLoaded', (e) => renderPosts() );