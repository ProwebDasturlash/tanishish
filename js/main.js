const users = {}

 for (let i = 0; i < 3; i++) {
    var userName = prompt("Ismingizni kriting"),
    userAge = +prompt("Yoshingizni kriting")
    users[i] = {
        name: userName,
        age: userAge,
    }
 }

console.log(users);


for (const key in users) {
    for (const key2 in users[key]) {
        console.log(users[key][key2]);
    }
        
    }
        
    





