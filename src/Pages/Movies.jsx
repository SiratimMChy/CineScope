import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion as Motion } from "motion/react";
import { FaStar, FaFilm } from "react-icons/fa";
import { MdOutlineCategory, MdOutlineDateRange } from "react-icons/md";
import MovieModal from '../component/MovieModal';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        if (searchTerm.trim() !== '') {
            fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
                .then(res => res.json())
                .then(data => {
                    const formattedData = data.map(item => item.show);
                    setMovies(formattedData);
                })
                .catch(err => console.log(err));
        } else {
            fetch('https://api.tvmaze.com/shows')
                .then(res => res.json())
                .then(data => {
                    setMovies(data);
                })
                .catch(err => console.log(err));
        }
    }, [searchTerm]);

    return (
        <div className='m-4 pb-25 p-2 lg:px-20'>
            <title>Movies</title>
            
            <div className='flex justify-center mt-1 mb-6'>
                <div className="relative w-full max-w-2xl">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search for a movie..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="input input-bordered w-full pl-12 py-6 text-lg rounded-full shadow-sm focus:shadow-md transition-shadow"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-4 mb-8">
                {movies.slice(0, 40).map(movie => (
                    <Motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { duration: 1 } }}
                        key={movie.id}
                        className="card bg-base-100 w-full max-w-lg shadow-sm border border-base-content/10 flex flex-col h-full"
                    >
                        <figure className="w-full h-100 bg-base-300 flex items-center justify-center">
                            {movie?.image?.original || movie?.image?.medium ? (
                                <img
                                    src={movie?.image?.original || movie?.image?.medium}
                                    alt={movie?.name}
                                    loading="lazy"
                                    className="w-full h-100 object-cover"
                                />
                            ) : (
                                <div className="flex flex-col items-center text-base-content/50">
                                    <FaFilm className="w-16 h-16 mb-2 opacity-50" />
                                    <span className="font-semibold">No Image Available</span>
                                </div>
                            )}
                        </figure>

                        <div className="card-body p-5 flex-1 flex flex-col justify-between">
                            <div>
                                <h2 className="card-title mb-1 font-bold">{movie?.name}</h2>
                                <div className="flex justify-between text-base-content/80">
                                    <h5 className="flex items-center gap-1 text-sm font-medium">
                                        <MdOutlineCategory className="w-5 h-5 text-primary" /> {movie?.genres?.[0] || 'Drama'}
                                    </h5>
                                    <h5 className="flex items-center gap-1 text-sm font-medium">
                                        <MdOutlineDateRange className="w-5 h-5 text-secondary" /> {movie?.premiered}
                                    </h5>
                                </div>
                            </div>

                            <div className="flex justify-between mt-4 items-center">
                                <h2 className="flex items-center gap-1 font-bold text-xl">
                                    <span>{movie?.rating?.average}</span>
                                    <FaStar className="w-5 h-5 text-yellow-500" />
                                </h2>

                                <Link
                                    onClick={() => {
                                        setSelectedMovie(movie);
                                        document.getElementById('movie_modal').showModal();
                                    }}
                                    className="btn bg-linear-to-r from-purple-700 to-cyan-500 hover:from-purple-800 hover:to-cyan-700 text-white border-none shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-lg font-bold px-6"
                    >
                                    See Details
                                </Link>
                            </div>
                        </div>
                    </Motion.div>
                ))}
            </div>

            <MovieModal selectedMovie={selectedMovie} />
        </div>
    );
};

export default Movies;