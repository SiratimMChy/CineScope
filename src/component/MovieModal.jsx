import { FaStar, FaFilm } from "react-icons/fa";
import { MdOutlineCategory, MdOutlineDateRange } from "react-icons/md";

const MovieModal = ({ selectedMovie }) => {
    return (
        <dialog id="movie_modal" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box p-0 w-11/12 max-w-3xl overflow-hidden relative">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10 text-white bg-black/50 hover:bg-black/80 border-none">✕</button>
                </form>
                
                {selectedMovie && (
                    <div>
                        <figure className="w-full h-64 sm:h-80 relative bg-gray-500 flex items-center justify-center">
                            {selectedMovie?.image?.original || selectedMovie?.image?.medium ? (
                                <img
                                    src={selectedMovie?.image?.original || selectedMovie?.image?.medium}
                                    className="w-full h-full object-contain"
                                    alt={selectedMovie?.name}
                                />
                            ) : (
                                <div className="flex flex-col items-center text-white/70">
                                    <FaFilm className="w-16 h-16 mb-2 opacity-50" />
                                    <span className="font-semibold text-lg">No Image Available</span>
                                </div>
                            )}
                            <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-base-100 to-transparent"></div>
                        </figure>

                        <div className="p-6 -mt-16 relative z-10">
                            <h3 className="font-extrabold text-3xl sm:text-4xl mb-2 text-base-content drop-shadow-md">
                                {selectedMovie?.name}
                            </h3>
                            
                            <div className="flex flex-wrap gap-4 text-sm font-medium text-base-content/70 mb-4">
                                <div className="flex items-center gap-1">
                                    <FaStar className="text-yellow-500" />
                                    <span>{selectedMovie?.rating?.average}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MdOutlineDateRange className="text-secondary" />
                                    <span>{selectedMovie?.premiered || 'Unknown Date'}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MdOutlineCategory className="text-primary" />
                                    <span>{selectedMovie?.genres?.join(', ') || 'N/A'}</span>
                                </div>
                                {selectedMovie?.language && (
                                    <div className="badge badge-outline">{selectedMovie.language}</div>
                                )}
                                {selectedMovie?.status && (
                                    <div className={`badge ${selectedMovie.status === 'Ended' ? 'badge-error' : 'badge-success'} text-white`}>
                                        {selectedMovie.status}
                                    </div>
                                )}
                            </div>

                            <div className="divider"></div>
                            
                            <h4 className="font-bold text-xl mb-2">Overview</h4>
                            <div 
                                className="prose prose-sm max-w-none text-base-content/80"
                                dangerouslySetInnerHTML={{ __html: selectedMovie?.summary || '<p>No summary available.</p>' }}
                            />
                        </div>
                    </div>
                )}
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default MovieModal;
