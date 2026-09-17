import { Link } from 'react-router';
import LatestMovies from '../component/LatestMovies';

const Home = () => {
    return (
        <div className='px-4'>
            <div 
                className="hero min-h-[calc(75vh-3.5rem)] " 
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop)' }}
            >
                <div className="hero-overlay bg-black/60 backdrop-blur-sm"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl px-4 py-16">
                        <h1 className="mb-6 text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary drop-shadow-sm">
                            Welcome to CineScope
                        </h1>
                        <p className="mb-8 text-lg md:text-xl font-medium text-gray-200">
                            Explore thousands of movies, discover hidden gems, and read reviews. Your ultimate cinematic journey starts here.
                        </p>

                        <Link
                            to={'/movies'}
                            className="btn bg-linear-to-r from-purple-700 to-cyan-500 hover:from-purple-800 hover:to-cyan-700 text-white border-none shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-lg font-bold px-6"
                        >
                            Explore Movies
                        </Link>
                    </div>
                </div>
            </div>

            <LatestMovies />
        </div>
    );
};

export default Home;