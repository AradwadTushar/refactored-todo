var state = {
    taskList: []
};

//DOM operation
/* To get data from form to card */

var taskContents = document.querySelector(".task_contents");
var taskModal = document.querySelector(".task_modal_body");

console.log(taskContents);
console.log(taskModal);


const htmlTaskContent = ({id , title, description , type , url}) => `
<div class ="col-md-6 col-lg-4 mt-3" id=${id} key=${id}>
<div class=" card shadow-sm task_card">
<div class = "card_header d-flex justify-content-end task_card_header gap-2">
<button type = "button" class = "btn btn-outline-info mr-2" name=${id}>
<i class = "fas fa-pencil-alt" name=${id}></i>
</button>
<button type = "button" class = "btn btn-outline-danger mr-2 " name=${id}>
<i class = "fas fa-trash-alt" name=${id}></i>
</button>
</div>
<div class="card_body">
${
    url && `<img src=${url} alt="card image top " class ="card-image-top md-3 rounded-1g"/>`
}
<h4 class="card-title">${title}</h4>
<p class="description trim-3-lines text-muted card-text">${description}</p>
<div class="tags text-white d-flex flex-wrap ">
<span class="badge bg-primary m-1">${type}</span>
</div>
</div>
<div class="card-footer">
<button type="button" class="btn btn-outline-primary float-right" data-bs-toggle="modal" data-bs-target="#showTask">Open Task</button></div>
</div>
</div>
`
/* To get content from card to modal */
const htmlModalContent = ({id,title,description,url}) => {

    const date = new Date (parseInt(id));
    return `
    <div id = ${id}>
    ${
        url && `<img src=${url} alt="card image cap " class ="image-fluid mb-3"/>`
    }
    <strong class="text-muted text-sm">Created on ${date.toDateString()}</strong>
    <h2 class="my-3">${title}</h2>
    <p class="lead">${description}</p>
    </div>

    `
}


/* to store data on local storage  */

const updateLocalStorage = ({}) => {
    
}