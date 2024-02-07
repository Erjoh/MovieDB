import React, {useEffect} from 'react';
import Layout from "../components/Layout/Layout";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../redux/store/movieSlice";
import {Link, useParams} from "react-router-dom";

const HomePage = () => {
    const movies = useSelector(state => state.movies.movies)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovies())
    }, [dispatch])

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    {
                        movies.map(movie => {
                            return (
                                <div className="col-4" key={movie.id}>
                                    <Link to={'/'}>
                                        <h3>{movie.title}</h3>
                                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""
                                             style={{width: '250px'}}/>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;