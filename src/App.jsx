import './App.css';
import Header from './Components/Header';
import { useState } from 'react';
import CharapterCard from './Components/CharapterCard';
import CharaptersContainer from './Components/CharaptersContainer';
import MediaPlayer from './Components/MediaPlayer';
import SectionTitle from './Components/SectionTitle';

function App() {
    let videos = [];
    const url = 'https://www.googleapis.com/youtube/v3/playlistItems?';
    const part = 'part=snippet&';
    const maxresults = 'maxResults=20&';
    const playlistid = 'playlistId=PLI-lha5pHEe7eq2X4W2vDI4upqy-GrawQ&';
    const [nextPagetoken, setNextPagetoken] = useState('');
    const [prevPagetoken, setPrevPagetoken] = useState('');
    const key = 'key=AIzaSyBnFzuEnHAIaw9CEzXDF5Qbuff-FzEWaEc';
    const [myVideos, setMyVideos] = useState(videos);
    const [currentVideo, setCurrentVideo] = useState('tO42kVbihJg');
    const [buttonsState, setButtonsState] = useState('true');

    const firstApiRequest = () => {
        fetch(`${url}${part}${maxresults}${playlistid}${key}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.prevPageToken) {
                    setPrevPagetoken(data.prevPageToken);
                }
                setNextPagetoken(data.nextPageToken);
                videos.push(data);
                setMyVideos(videos[0].items);
                setButtonsState(false);
            });
    };
    const requestNextPage = () => {
        fetch(
            `${url}${part}${maxresults}pageToken=${nextPagetoken}&${playlistid}${key}`
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.nextPageToken) {
                    setNextPagetoken(data.nextPageToken);
                }
                setPrevPagetoken(data.prevPageToken);
                videos.push(data);
                setMyVideos(videos[0].items);
                setButtonsState(false);
            });
    };

    const requestPrevPage = () => {
        fetch(
            `${url}${part}${maxresults}pageToken=${prevPagetoken}&${playlistid}${key}`
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.prevPageToken) {
                    setPrevPagetoken(data.prevPageToken);
                }
                setNextPagetoken(data.nextPageToken);
                videos.push(data);
                setMyVideos(videos[0].items);
                setButtonsState(false);
            });
    };

    const onSelectCharapter = (data) => {
        setCurrentVideo(data.id);
    };
    return (
        <>
            <Header />
            <MediaPlayer videoID={currentVideo} autoplay={1} />
            {!buttonsState && <SectionTitle title='Capitulos' id='chapters'/>}
            <CharaptersContainer>
                {myVideos.map((video) => (
                    <CharapterCard
                        selectCharapter={onSelectCharapter}
                        key={Math.random()}
                        miniature={video.snippet.thumbnails.medium.url}
                        id={video.snippet.resourceId.videoId}
                        charapterName={video.snippet.title}
                    />
                ))}
                <div className='buttonsContainer'>
                    {!buttonsState && (
                        <span className='pageButton' onClick={requestPrevPage}>
                            <ion-icon size='large' name='play-back'></ion-icon>
                        </span>
                    )}
                    {buttonsState && (
                        <span
                            className={`pageButton ${buttonsState}`}
                            onClick={firstApiRequest}
                        >
                            Ofendamonos!
                        </span>
                    )}
                    {!buttonsState && (
                        <span className='pageButton' onClick={requestNextPage}>
                            <ion-icon
                                size='large'
                                name='play-forward'
                            ></ion-icon>
                        </span>
                    )}
                </div>
            </CharaptersContainer>
        </>
    );
}

export default App;
