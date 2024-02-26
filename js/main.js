async function fetchUsers() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

    const result = await response.json();
    let tbody = document.querySelector("tbody");
    let thead = document.getElementById("thead");
    thead.innerHTML = "";
    tbody.innerHTML = "";

    
        thead.innerHTML += `<thead>
        <tr>
            <th>№</th>
            <th>Name</th>
            <th>Username</th>
            <th>Phone</th>
            <th>E-mail</th>
        </tr>
        </thead>`

        
    
    result.forEach((users, index) => {
        tbody.innerHTML += `<tr>
            <td>${users.id}</td>
            <td>${users.name}</td>
            <td>${users.username}</td>
            <td>${users.phone}</td>
            <td>${users.email}</td>
        </tr>`

        
    })
}

fetchUsers();


let usersBtn = document.getElementById("usersBtn");

usersBtn.addEventListener('click', (e) =>{
    fetchUsers();
    usersBtn.classList = ("bg-warning px-5 py-1");
    postsBtn.classList = ("bg-white px-5 py-1");
    todosBtn.classList = ("bg-white px-5 py-1");
    commentsBtn.classList = ("bg-whhite px-5 py-1")

});




let postsBtn = document.getElementById("postsBtn");

postsBtn.addEventListener('click', (e) => {
    usersBtn.classList = ("bg-white px-5 py-1");
    postsBtn.classList = ("bg-warning px-5 py-1");
    todosBtn.classList = ("bg-white px-5 py-1");
    commentsBtn.classList = ("bg-white px-5 py-1")
    async function fetchPosts(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    const result = await response.json();
    thead.innerHTML = "";
    tbody.innerHTML = "";

    thead.innerHTML += `<thead>
    <tr>
        <th>№</th>
        <th>Title</th>
        <th>Body</th>
    </tr>
    </thead>`


    result.forEach((posts, index) => {
        tbody.innerHTML += `<tr>
            <td>${posts.id}</td>
            <td>${posts.title}</td>
            <td>${posts.body}</td>
        </tr>`
    });
}
fetchPosts();

});


let todosBtn = document.getElementById("todosBtn");

todosBtn.addEventListener('click', (e) => {
    usersBtn.classList = ("bg-white px-5 py-1");
    postsBtn.classList = ("bg-white px-5 py-1");
    todosBtn.classList = ("bg-warning px-5 py-1");
    commentsBtn.classList = ("bg-white px-5 py-1")

    async function fetchTodos() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        const result = await response.json();
        thead.innerHTML = "";
        tbody.innerHTML = "";

        thead.innerHTML += `<thead>
        <tr>
            <th>№</th>
            <th>Title</th>
            <th>Completed</th>
        </tr>
        </thead>`

        result.forEach((todos, index) => {
            tbody.innerHTML += `<tr>
                <td>${todos.id}</td>
                <td>${todos.title}</td>
                <td>${todos.completed}</td>
            </tr>`
    
            
        })
    }
    fetchTodos()
});


let commentsBtn = document.getElementById("commentsBtn");

commentsBtn.addEventListener('click', (e) => {
    postsBtn.classList = ("bg-white px-5 py-1");
    usersBtn.classList = ("bg-white px-5 py-1");
    todosBtn.classList = ("bg-white px-5 py-1");
    commentsBtn.classList = ("bg-warning px-5 py-1")
    async function fetchFunction() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
        const result = await response.json();
        thead.innerHTML = "";
        tbody.innerHTML = "";

        thead.innerHTML += `<thead>
        <tr>
            <th>№</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>body</th>
            <th>PostId</th>
        </tr>
        </thead>`

        result.forEach((comments, index) => {
            tbody.innerHTML += `<tr>
                <td>${comments.id}</td>
                <td>${comments.name}</td>
                <td>${comments.email}</td>
                <td>${comments.body}</td>
                <td>${comments.postId}</td>
            </tr>`
    
            
        })


    }

    fetchFunction();
})