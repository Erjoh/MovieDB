import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import {useDispatch, useSelector} from "react-redux";
import {getTVs} from "../redux/store/movieSlice";

const TvPage = () => {
    const movies = useSelector(state => state.movies.tvs)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTVs())
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
                                        <h3>{movie.name}</h3>
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

export default TvPage;