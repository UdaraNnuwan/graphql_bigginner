const {UserList,MovieList} =require("../FakeData")
const _ = require("lodash")

const resolvers={
    Query:{
        //user Resolvers
        users(){
            return UserList;
        },
    },
}

module.exports = {resolvers}