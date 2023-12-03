const {UserList,MovieList} =require("../FakeData")
const _ = require("lodash")

const resolvers={
    Query:{
        //user Resolvers
        // users(){
        //     return UserList;
        // },

        //user Resolver with arrow funtion
        users:()=>{
            return UserList;
        },

        user(parentId,args){
            const id = args.id
            const user= _.find(UserList,{id:Number(id)})
            return user;
        },

        //mvovie resolvers
        movies: () =>{
            return MovieList;
        },
        movie:(parent,args)=>{
            const name=args.name;
            const movie=_.find(MovieList,{name});
            return movie;
        }
    },
    User:{
        favouriteMovie:()=>{
            return _.filter(MovieList,(movie)=>movie.year>=2000&& movie.year<=2008)
        }
    }
}

module.exports = {resolvers}