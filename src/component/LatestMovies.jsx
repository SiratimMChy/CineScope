import { useEffect, useState } from 'react';
import { motion as Motion } from "motion/react";
import { FaStar, FaFilm } from "react-icons/fa";
import { MdOutlineCategory, MdOutlineDateRange } from "react-icons/md";
import MovieModal from './MovieModal';

const LatestMovies = () => {
    const [latestMovies, setLatestMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        fetch('https://api.tvmaze.com/shows')
            .then(res => res.json())
            .then(data => {
                const sorted = data.sort((a, b) => new Date(b.premiered) - new Date(a.premiered));
                setLatestMovies(sorted.slice(0, 4));
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="py-16 bg-base-100">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Latest Movies</h2>
                    <p className="text-lg text-base-content/70">Check out the most recently premiered shows</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                    {latestMovies.map(movie => (
                        <Motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1, transition: { duration: 1 } }}
                            viewport={{ once: true }}
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
                                        <span>{movie?.rating?.average || 'N/A'}</span>
                                        <FaStar className="w-5 h-5 text-yellow-500" />
                                    </h2>

                                    <button
                                        onClick={() => {
                                            setSelectedMovie(movie);
                                            document.getElementById('movie_modal').showModal();
                                        }}
                                        className="btn bg-linear-to-r from-purple-700 to-cyan-500 hover:from-purple-800 hover:to-cyan-700 text-white border-none shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-lg font-bold px-6"
                                    >
                                        See Details
                                    </button>
                                </div>
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </div>

            <MovieModal selectedMovie={selectedMovie} />
        </div>
    );
};

export default LatestMovies;
