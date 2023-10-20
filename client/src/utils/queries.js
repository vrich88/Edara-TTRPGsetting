import { gql } from '@apollo/client';

export const QUERY_ALLUSERS = gql`
  query allUsers {
    users {
      _id: ID!
      username: String!
      email: String
      password: String!
    }
  }
`;


export const QUERY_USER = gql`
  {
    singleUser {
      _id
      username
      email
      password
    }
  }
`;