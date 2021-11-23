import { useEffect } from 'react';
import { API_URL, API_KEY } from '../../config';
import { SET_LIST, FetchListAction, FetchList } from './listTypes';

export function useFetchList(
  { mediaType, category, page }: FetchList,
  dispatch: React.Dispatch<FetchListAction>
): void {
  useEffect(() => {
    const key: string = `${mediaType}_${category}_${page}`;
    if (sessionStorage.getItem(key)) {
      const data = JSON.parse(sessionStorage.getItem(key) as string);
      dispatch({ type: SET_LIST, titles: data.results });
    } else {
      const url = `${API_URL}${mediaType}/${category}?api_key=${API_KEY}&language=en-US&page=${page}`;
      console.log('url is',url)
      fetch(
        url
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: SET_LIST, titles: data.results });
          sessionStorage.setItem(key, JSON.stringify(data));
        });
    }
  }, [dispatch, page, mediaType, category]);
}
