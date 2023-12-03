const {gql} =require("apollo-server")

const typeDefs=gql`
    type User {
        id:ID!
        name:String!
        username:String!
        age:Int!
        nationality:Nationality!
        friend:[User]
        favouriteMovie:[Movie]
    }
    type Query {
        users:[User!]!
        user(id:ID!):User!
        movies:[Movie!]!
        movie(name:String!):Movie!
    }
    type Movie{
        id:ID!
        name:String!
        year:Int!
        IsInAvailable:Boolean!
    }
    enum Nationality {
        ENGLAND
        INDIA
        CANADA
        GERMANY
        AUSTRALIA
    }
`;

module.exports={typeDefs};