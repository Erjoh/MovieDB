import React, {useEffect} from 'react';
import Layout from "../components/Layout/Layout";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMovies, getPopular} from "../redux/store/movieSlice";

const PopularPage = () => {
    const page = useParams()
    const movies = useSelector(state => state.movies.popular)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPopular(page))
    }, [dispatch, page])
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

export default PopularPage;