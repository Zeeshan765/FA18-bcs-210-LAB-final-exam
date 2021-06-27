import React, { useState } from "react";
import "./TeamData.css";
import axios from "./axios";

function TeamData() {
  const [team, setTeam] = useState(false);
  const [city, setLocation] = useState("");
  const [teamA, setTeamA] = useState("");
  const [teamB, setTeamB] = useState("");
  const [date, setDate] = useState("");

  const teams= [
    "Lahore Qalanders","Karachi Kings","Multan Sultans","Quetta Gladiators","Peshawar Zalmi","Islamabad United", ];

    // States
  const [newteam, setnewteam] = useState(teams);
  // This Array is used For storing the information about team teams matches
  const newteamarray= [];

  const TeamAdata= (arr) => {
    setTeamA(arr);
    // Spreading
    newteamarray= [...teamArray];
    newteamarray = newteamarray.filter((item) => item !== arr);
    settnewteam(newteamarray);
  };



  const TeamBdata = (arr) => {
    setTeamB(arr);
  };


  //Axios
  const getdata = () => {
    axios({
      method: "post",url: "http://localhost:4000/api/productscrud", data: {City: city,Date: date,TeamA: teamA,TeamB: teamB,
      },
    });

  };
  
  return (
    <header className="TeamData">
      {team ? (
        <>
          <div className="teamsinfo">
            <div>
              {tnewteamarray.map((arr) => (
                <h1 className="teaminfotext" onClick={() => TeamAdata(arr)}>
                  {arr}
                </h1>
              ))}
              <input onChange={(e) => setCity(e.target.value)} placeholder="Location"  className="texttype" />
              <input onChange={(e) => setDate(e.target.value)} placeholder="date"className="textype"/>
            </div>
            <div>
              {tempTeam.map((arr) => (
                <h1 className="teaminfotext" onClick={() => TeamBdata(arr)}>
                  {arr}
                </h1>
              ))}

              <button className="first_btn" onClick={() => setTeam(false)}> Cancel</button>
              <button className="second_btn" onClick={() => getdata()}>  Save</button>
            </div>
          </div>
        </>
      ) : (

        // This Button is Basically For text
        <div className="text">
          <h1>PSL 2022</h1>
          <button className="third_btn" onClick={() => setTeam(true)}>Schedule a Match </button>
        </div>
      )}
      
      
    
      <div className="pic_container">
        <img
          className="pic_psl"
          src="https://cdn.insidesport.co/wp-content/uploads/2021/05/27140702/PSL.jpg"
          alt="TeamData"
        />
      </div>
    </header>
  );
}

export default TeamData;
