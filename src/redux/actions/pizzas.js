import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

// fetchPizzas return a function that will receice data from server
export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  console.log(category, sortBy);
  axios
    .get(
      `/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${
        sortBy.type
      }&_order=${sortBy.order}`
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
