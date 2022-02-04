import React from 'react'
import Container from './container';
import Layout from './layout';
import {Helmet} from 'gatsby-plugin-react-helmet';
import Sections from './sections';

export default function LandingPage({preview, page}){
    return (
        <Layout preview={preview}>
        <Helmet>
          <title>{page.name}</title>
        </Helmet>
        <Container>
          <Sections sections={page.sections} />
        </Container>
      </Layout>
    )
}