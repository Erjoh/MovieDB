import React, {useEffect} from 'react';
import Layout from "../components/Layout/Layout";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMovieGenres, getTVGenres} from "../redux/store/movieSlice";

const Genres = () => {
    const movieGenres = useSelector(state => state.movies.movieGenres)
    const tvGenres = useSelector(state => state.movies.tvGenres)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovieGenres())
        dispatch(getTVGenres())
    }, [dispatch])
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div>
                        <h2>Movie Genres</h2>
                        <div>
                            {
                                movieGenres.map(genre => {
                                    return (
                                        <div className="col-4" key={genre.id}>
                                            <Link to={'/'}>
                                                <h3>{genre.name}</h3>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <h2>TV Genres</h2>
                        <div>
                            {
                                tvGenres.map(genre => {
                                    return (
                                        <div className="col-4" key={genre.id}>
                                            <Link to={'/'}>
                                                <h3>{genre.name}</h3>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Genres;