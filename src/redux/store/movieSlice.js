import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getMovies = createAsyncThunk(
    'movies/getMovies',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=e24e758c3419303923565f82ced8f7d3`);

            if (!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();

            return data.results;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getPopular = createAsyncThunk(
    'popular/getPopular',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=e24e758c3419303923565f82ced8f7d3`);

            if (!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();

            return data.results;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getMovieGenres = createAsyncThunk(
    'genres/getMovieGenres',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=e24e758c3419303923565f82ced8f7d3`);

            if (!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();

            return data.genres;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getTVGenres = createAsyncThunk(
    'genres/getTVGenres',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/genre/tv/list?language=en&api_key=e24e758c3419303923565f82ced8f7d3`);

            if (!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();

            return data.genres;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getTVs = createAsyncThunk(
    'tvs/getTVs',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=e24e758c3419303923565f82ced8f7d3`);

            if (!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();

            return data.results;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        popular: [],
        movieGenres: [],
        tvGenres: [],
        cartoons: [],
        tvs: [],
        status: null,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [getMovies.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getMovies.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.movies = action.payload;
        },
        [getMovies.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getPopular.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getPopular.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.popular = action.payload;
        },
        [getPopular.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getMovieGenres.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getMovieGenres.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.movieGenres = action.payload;
        },
        [getMovieGenres.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getTVGenres.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getTVGenres.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.tvGenres = action.payload;
        },
        [getTVGenres.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getTVs.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getTVs.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.tvs = action.payload;
        },
        [getTVs.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
})

export const {} = movieSlice.actions;

export default movieSlice.reducer
