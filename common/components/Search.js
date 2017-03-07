import { provideHooks } from 'redial'
import React from 'react'
import { connect } from 'react-redux'
import { searchMedia } from '../routes/Home/actions'
import { displaySearchResults } from '../routes/Home/reducer'
import axios from 'axios';
import { StyleSheet, css } from 'aphrodite'

var searchResults = [];

function typeTerm(e) {
  console.log('key', e.key)
  console.log('target', e.target.value)

  return axios.get(`http://www.omdbapi.com/?s=${e.target.value}`)
    .then(res => {
      console.log('resource', res)
      searchResults = [];
      res.data.Search.forEach(function(searchResult, i) {
        // add to list
      });
    })
  // dispatch(searchMedia(term));
}

function search() {
  console.log('kill me');
}

const redial = {
  fetch: ({ dispatch, params: { term } }) => dispatch(searchMedia(term))
}

const mapStateToProps = state => displaySearchResults(state)

const Search = () => (
  <div>Fuck me daddy
    <input type="text" placeholder="Search for a movie or TV show" onKeyUp={typeTerm} />
    <input type="button" value="blub" onClick={search} />
    {searchResults}
  </div>
)

const styles = StyleSheet.create({
  root: {
    maxWidth: 700,
    color: '#000',
    margin: '2rem auto',
    padding: '0 1rem'
  },
  title: {
    color: '#000',
    maxWidth: 300,
    fontWeight: 'bold',
    fontSize: 56
  },
  footer: {
    margin: '4rem auto',
    textAlign: 'center',
    color: '#b7b7b7'
  },
  footerLink: {
    display: 'inline-block',
    color: '#000',
    textDecoration: 'none'
  }
})

// export default Search
export default connect(mapStateToProps)(Search)
