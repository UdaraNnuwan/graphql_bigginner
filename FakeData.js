const UserList =[
    {
        id:1,
        name:"Udara",
        username:"udara",
        age:28,
        nationality:"ENGLAND",
        friend:[
            {
                id:2,
                name:"Nuwan",
                username:"nuwan",
                age:27,
                nationality:"ENGLAND"
            },
            {
                id:3,
                name:"Ganesh",
                username:"ganesh",
                age:25,
                nationality:"CANADA"
            },
        ],
    },
    {
        id:2,
        name:"Nuwan",
        username:"nuwan",
        age:27,
        nationality:"ENGLAND"
    },
    {
        id:3,
        name:"Ganesh",
        username:"ganesh",
        age:25,
        nationality:"CANADA"
    },
];
 
const MovieList=[
    {
        id:1,
        name:"Avenger",
        year:2021,
        IsInAvailable:false
    },
    {
        id:2,
        name:"Kadira Divya Raja",
        year:2008,
        IsInAvailable:true
    },
    {
        id:3,
        name:"Kathuru Mithuru",
        year:2023,
        IsInAvailable:true
    }
]
module.exports = {UserList,MovieList};