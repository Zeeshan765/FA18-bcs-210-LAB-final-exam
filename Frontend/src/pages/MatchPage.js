import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../axios";
import "./MatchPagecss";

function MatchPage() {
  const [matches, setMatches] = useState([]);
  const history = useHistory();


  // THis Use is Used to get Data 
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("http://localhost:4000/api/productscrud");
      setMatches(request.data);
      return request;
    }

    fetchData();
  }, []);



  
  return (
    <div className="matchepage">
      <table>
        <tr className="matchdata">
          <th>TEAM One</th>
          <th>TEAM Second</th>
          <th>City</th>
          <th>Date</th>
        </tr>

        {matches.map((match) => (
          <tr>
            <td>{match.TeamA}</td>
            <td>{match.TeamB}</td>
            <td>{match.City}</td>
            <td>{match.Date}</td>
          </tr>
        ))}
      </table>
      <button onClick={() => history.push('/signin')}>Sign In</button>
    </div>
  );
}

export default MatchesScreen;
