console.log("hello")
const user = {
    id: 1,
    email: "mago@google.com",
    dob: 1997,
    first_name: "Magomed",
    last_name: "Ibragimov",
    department: {
        name: 'IT',
        position: 'programmer'
    },
    tasks: ['creating apps', 'meetings'],
    getAge: function () {
 
        return new Date().getFullYear() - this.dob
    }
}
console.log(user.first_name)
console.log(user.getAge())

const d = new Date();