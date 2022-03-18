import gql from "graphql-tag";

export const GET_ALL_POSTS = gql`
  query {
    articles {
      data {
        id
        attributes {
          title
          content
          description
          createdAt
          updatedAt
          publishedAt
          image {
            data {
              attributes {
                url
              }
            }
          }
          slug
          category {
            data {
              attributes {
                name
              }
            }
          }
          author {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
