let users = []
let userArea = document.querySelector('.users-area')

async function getUsers() {
   try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      return response.json()
   }
   catch(err) {
      console.error(err)
   }
}

function deleteUser(id) {
   users.splice(id, 1)
   renderUsers()
}

function renderUsers() {
   userArea.innerHTML = `         <div class="users-area__item">
   <div class="users-area__area">Id</div>
   <div class="users-area__area">Name</div>
   <div class="users-area__area">Username</div>
   <div class="users-area__area">Email</div>
   <div class="users-area__area">Buttons</div>
</div>`
   users.forEach((e, index) => {
      let userCode = `
         <div class="users-area__area">${index + 1}</div>
         <div class="users-area__area">${e.name}</div>
         <div class="users-area__area">${e.username}</div>
         <div class="users-area__area">${e.email}</div>
         <button onclick='deleteUser(${index})' class="users-area__area">Delete</button>
      `
      let userElement = document.createElement('div')
      userElement.classList = 'users-area__item'
      userElement.innerHTML = userCode
      userArea.append(userElement)
   })
}

getUsers().then(data => {
   users = data
}).then(()=>renderUsers())



