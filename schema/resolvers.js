const {UserList,MovieList} =require("../FakeData")
const _ = require("lodash")



/*
query->users->favouriteMovie->anotherLevel
*/
const resolvers={
    Query:{
        //user Resolvers
        // users(){
        //     return UserList;
        // },

        //user Resolver with arrow funtion
        users:(parent,args,context)=>{
            console.log(context)
            return UserList;
        },

        user(parentId,args,context,info){
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
        favouriteMovie:(parent)=>{
            // console.log(parent)
            return _.filter(MovieList,(movie)=>movie.year>=2000&& movie.year<=2008)
        }
    },
    Mutation:{
        createUser:(parent,args)=>{
            const user=args.input;
            const lastId =UserList[UserList.length-1].id;
            user.id=lastId+1;
            UserList.push(user)
            return user
            // console.log(user)
        },
        updateUsername:(parent,args)=>{
            // const id=args.input.id;
            // const newUsername =args.input.newUsername;
            let userUpdate;
            const {id,newUsername} =args.input;
            UserList.forEach((user)=>{
                if(user.id==id){
                    user.username=newUsername
                    userUpdate=user
                }
            })
            return userUpdate;
        },
        deleteUser:(parant,args)=>{
            const id =args.id
            _.remove(UserList,(user)=>user.id===Number(id))
            return null
        }
    }
}

module.exports = {resolvers}