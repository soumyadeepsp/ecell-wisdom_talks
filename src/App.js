import React,{useState, useEffect} from 'react';
import './App.css';
import Navbar from './Navbar';
import Banner from './Banner';
import WisdomTalk from './WisdomTalk';
import axios from './axios';

function App() {
  const [talks, setTalks] = useState([]);
  const searchApi = async () => {
    const response = await axios.get();
    setTalks(response.data);
  }
  useEffect(() => {
    searchApi();
  }, []);
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <p className="about">Wisdom Talk series aims to promote the culture of innovation & entrepreneurship in & around the campus of IIIT Delhi by motivating the audience through the experiences sharing of the guest speaker from industry, research or startup background. It also enables a thoughts exchange ecosystem wherein the speaker shares their desires form young innovators & how they can revolutionize the industry and the young minds share their ideas which can promote innovation in the market.</p>
      {talks.map((talk) => {
        return <WisdomTalk
          about={talk["About"]}
          moreInfo={talk["More info"]}
          speakerName={talk["Speaker name"]}
          youtubeLink={talk["Youtube link"]}
        />
      })}
      {console.log("talks ===========>>>>>>>>>>> ", talks)}
    </div>
  );
}

export default App;

//api link = https://sheetdb.io/api/v1/zqa2gv8cjdrqq

//google form link = https://forms.gle/WehN9zWdDYNca1Dt8

//spreadsheet link = https://docs.google.com/spreadsheets/d/12REAHzRI6qv5rvb_ng-gvcnXruICR5biuUhP4Tp-eYU/edit#gid=236505211

//firebase hosted link = https://wisdom-talk-ea9a4.web.app

//github link = https://github.com/soumyadeepsp/ecell-wisdom_talks