import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

const PlayPause = ({ song, handlePause, handlePlay, isPlaying, activeSong }) => {
  // console.log('isPlaying', isPlaying);
  // console.log('songtitle', song?.title)
  // console.log('activeSong', activeSong?.title);
  

  return (
    isPlaying && activeSong?.title === song.title ?
      <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} /> :
      <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} /> )
};

export default PlayPause;