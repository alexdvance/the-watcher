import * as types from '../../constants'

const initialState = {
  lastFetched: null,
  isLoading: false,
  error: null,
  title: '',
  content: ''
}

export default function searchResults (state = initialState, action) {
  console.log('testes')
  switch (action.type) {
    case types.SEARCH_MEDIA_REQUEST:
      return { ...state,
        isLoading: true,
        error: null}
    case types.SEARCH_MEDIA_SUCCESS:
      return { ...state,
        title: action.payload.title,
        content: action.payload.content,
        lastFetched: action.meta.lastFetched,
        isLoading: false}
    case types.SEARCH_MEDIA_FAILURE:
      return { ...state,
        error: action.payload }
    default:
      console.log('default baby!!!', state)
      return state
  }
}

// Example of a co-located selector
export const displaySearchResults = state =>{
  console.log('displaySearchResults', state.searchResults);
  state.searchResults}
