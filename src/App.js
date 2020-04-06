import React from 'react';

import MainIndex from './Components/userIndex/MainIndex.js'

import SignUp from './Components/SignUp/SignUp.js';
import LogIn from './Components/Login/LogIn.js';

import HelpPage from './Components/HelpPage/HelpPage.js'
import AccountSettings from './Components/Profile/AccountSettings.js'
import EditProfile from './Components/Profile/EditProfile.js'
import NotificationsSettings from './Components/Profile/NotificationSettings.js';

import PremiumCode from './Components/Premium/premiumCode.js';
import Premium from './Components/Premium/premium.js';

import AccountHelp from './Components/HelpComponents/AccountHelp/AccountHelp'
import SpotifyAndFacebook from './Components/HelpComponents/AccountHelp/Articles/SpotifyAndFacebook'
import HowToLogOut from './Components/HelpComponents/AccountHelp/Articles/HowToLogOut'
import CanNotActivatePremiumTrial from './Components/HelpComponents/AccountHelp/Articles/CanNotActivatePremiumTrial'
import ChangeEmailAddress from './Components/HelpComponents/AccountHelp/Articles/ChangeEmailAddress'
import ProfilePicture from './Components/HelpComponents/AccountHelp/Articles/ProfilePicture'

import FeaturesMain from './Components/HelpComponents/Features/FeaturesMain'
import SearchFeature from './Components/HelpComponents/Features/SearchFeature.js';
import YourLibraryFeature from './Components/HelpComponents/Features/YourLibraryFeature.js';
import ShufflePlayFeature from './Components/HelpComponents/Features/ShufflePlayFeature.js';
import ArtistProfilesFeature from './Components/HelpComponents/Features/ArtistProfilesFeature.js';
import VideosFeature from './Components/HelpComponents/Features/VideosFeature.js';

import MainSelector from './Components/Main/MainSelector' 

import Albums from './Components/Artist/Albums/Albums'
import CreateAlbum from './Components/Artist/UploadFile/CreateAlbum'
import TrackUpload from './Components/Artist/UploadFile/TrackUpload'
import AlbumPage from './Components/Artist/Albums/AlbumPage'

import Home from './Components/WebPlayer/Bodies/Home/Home'
import ArtistWebPlayer from './Components/WebPlayer/Bodies/ArtistWebPlayer/ArtistWebPlayer'
import Search from './Components/WebPlayer/Bodies/Search/Search'

import AlbumWebPlayer from './Components/WebPlayer/Bodies/AlbumWebPlayer/AlbumWebPlayer.js'

//import {withRouter} from 'react-router';
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import Navbar from './Components/Navigation/Navbar.js';
import Footer from './Components/Footer/Footer.js';
import PasswordReset from './Components/PasswordReset/PasswordReset.js' 

import UpgradeArtist from './Components/Artist/UpgradeArtist/UpgradeArtist'
import ArtistSelector from './Components/Artist/ArtistSelector'
import ProfileContextProvider from './Context/ProfileContext';
function App() {

  return (
    
    <Router>
      <Navbar/>
     <ProfileContextProvider>

    
      <Switch>
        <Route path="/help" exact component={HelpPage}/>
        <Route path="/account-overview" component={AccountSettings}/>
        <Route path="/edit-profile" component={EditProfile}/>
        <Route path="/notification-settings" component={NotificationsSettings}/>
        <Route path="/signup" exact component={SignUp}/>
        <Route path="/login" exact component={LogIn}/>
        <Route path="/password-reset" exact component={PasswordReset}/>
        <Route path="/premium" exact component={Premium}/>
        <Route path="/premium-code" exact component={PremiumCode}/>
        <Route path="/main" exact component={MainIndex}/>
        <Route path="/" exact component={MainSelector}/>

        <Route path="/account-help" exact component={AccountHelp} />
        <Route path="/profile-picture" exact component={ProfilePicture} />
        <Route path="/using-spotify-with-facebook" exact component={SpotifyAndFacebook} />
        <Route path="/how-to-log-out" exact component={HowToLogOut} />
        <Route path="/cannot-activate-trial" exact component={CanNotActivatePremiumTrial} />
        <Route path="/change-email-address" exact component={ChangeEmailAddress} />

        <Route path="/features-main" exact component={FeaturesMain}/>
        <Route path="/search-feature" exact component={SearchFeature}/>
        <Route path="/your-library-feature" exact component={YourLibraryFeature}/>
        <Route path="/shuffle-play-feature" exact component={ShufflePlayFeature}/>
        <Route path="/artist-profiles-feature" exact component={ArtistProfilesFeature}/>
        <Route path="/videos-feature" exact component={VideosFeature}/>

       {/* <Route path="/artist" exact component={Albums}/>
        <Route path="/upgrade-to-artist" exact component={UpgradeArtist}/>*/}

        <Route path="/artist" exact component={ArtistSelector}/>
        <Route path="/artist/track-upload" exact component={TrackUpload}/>
        <Route path="/artist/create-album" exact component={CreateAlbum}/>
        <Route path="/artist/album-page" exact component={AlbumPage}/>

        <Route path="/home" exact component={Home} />
        <Route path="/artist-webplayer" exact component={ArtistWebPlayer} />
        <Route path="/search" exact component={Search} />

        <Route path="/webplayer/album" exact component={AlbumWebPlayer} />
      </Switch>
      </ProfileContextProvider>
      <Footer/>
    </Router>   
    
  );
}

export default App;

