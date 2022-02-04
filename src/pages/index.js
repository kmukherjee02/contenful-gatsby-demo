import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allContentfulXdLandingPage(
      filter: {slug: {eq: "home"}, node_locale: {eq: "en-US"}}
    ) {
      nodes {
        slug
        name
        node_locale
        sections {
          ... on ContentfulXdHeader {
            id
            name
            sys {
              contentType {
                sys {
                  id
                }
              }
            }
          }
          ... on ContentfulXdHeroImage {
            id
            sys {
              contentType {
                sys {
                  id
                }
              }
            }
          }
          ... on ContentfulXdSectionWithImage {
            id
            sys {
              contentType {
                sys {
                  id
                }
              }
            }
          }
          ... on ContentfulXdSetOfCard {
            id
            sys {
              contentType {
                sys {
                  id
                }
              }
            }
          }
          ... on ContentfulXdSetOfFeatures {
            id
            sys {
              contentType {
                sys {
                  id
                }
              }
            }
          }
          ... on ContentfulXdSetOfTeamMembers {
            id
            sys {
              contentType {
                sys {
                  id
                }
              }
            }
          }
          ... on ContentfulXdSetOfTestimonialCards {
            id
            sys {
              contentType {
                sys {
                  id
                }
              }
            }
          }
          ... on ContentfulXdBanner {
            id
            name
            sys {
              contentType {
                sys {
                  id
                }
              }
            }
          }
          ... on ContentfulXdHubSpotWithImage {
            id
            sys {
              contentType {
                sys {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ComponentName
