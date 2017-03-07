import { SEARCH_MEDIA_REQUEST, SEARCH_MEDIA_SUCCESS, SEARCH_MEDIA_FAILURE } from '../../constants'

export function searchMedia (term) {
  console.log('dogfart')
  return (dispatch, getState, { axios }) => {
    console.log('searchmediainner')
    dispatch({ type: SEARCH_MEDIA_REQUEST })
    return axios.get(`http://www.omdbapi.com/?s=${term}`)
      .then(res => {
        console.log('resource', res)
        dispatch({
          type: SEARCH_MEDIA_SUCCESS,
          payload: res.data,
          meta: {
            lastFetched: Date.now()
          }
        })
      })
      .catch(error => {
        console.error(`Error in reducer that handles ${SEARCH_MEDIA_SUCCESS}: `, error)
        dispatch({
          type: SEARCH_MEDIA_FAILURE,
          payload: error,
          error: true
        })
      })
  }
}
