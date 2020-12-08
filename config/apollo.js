import { ApolloClient, HttpLink, InMemoryCache} from '@apollo/client'; //ApolloClient,

import fetch from 'node-fetch';

/*
import { cache } from './cache';
  
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    uri: 'http://localhost:4000/graphql'
  }); */

const client = new ApolloClient({
    
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'http://localhost:4000/',
        fetch
    }),
    
});

export default client;