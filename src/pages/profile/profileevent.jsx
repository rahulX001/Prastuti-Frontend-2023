import React, { useState, useEffect } from "react";
import "./profilecss.css";
import { Speedometer2 } from "react-bootstrap-icons";
import { Calendar2Check } from "react-bootstrap-icons";


const GetTeam = (prop)=>{
  let teamName =prop.team.map((data)=>{
  
    if(prop.data.find(({team})=>team===data._id))
    {return(
      prop.data.find(({team})=>team===data._id)
    )}
  
    return 
  })

     teamName = teamName.filter(function( element ) {
       return element !== undefined;
})

  return <>
  <span>
   {teamName[0].score}
    </span>
    </>
}
const GetTeamName = (prop)=>{
  let teamName =prop.data.map((data)=>{
  
    if(prop.team.find(({_id})=>_id===data.team))
    {return(
      prop.team.find(({_id})=>_id===data.team)
    )}
  
    return 
  })

     teamName = teamName.filter(function( element ) {
       return element !== undefined;
})

  return <>
 
   {teamName[0].Team_Name}
   
    </>
}







const Profileevent = (prop) => {
  const [value, setvalue] = useState(prop.event);
  return (
    <>
      <div className="Pmaincontainer">
        <div className="Pcontainer">
          {prop.event.map((data, index) => {
            // console.log(data);
            return (
              <div className="Pchild" key={index}>
                <div
                  className="psubchild1"
                  style={{
                    backgroundImage:
                      'url("https://tse2.mm.bing.net/th?id=OIP.Wo0bMz8lk_fKOloqwx8OQQHaHa&pid=Api&P=0")',
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="psubchild">
                  <div className="pevent">
                    <span className="eventname">{data.Name}</span>
                    <span className="eventteam"> {data.team_event
                          ?<GetTeamName data ={data.teams} team ={prop.team} />
                          :"Solo"}</span>
                    <span className="eventinfo">
                      <div>
                        {/* data.teams.find(({_id})=>_id===localStorage.getItem("loginData")).score */}
                        
                        <div
                          style={{
                            position: "relative",
                            top: "3px",
                            left: "-3px",
                          }}
                        >
                          <Speedometer2 />
                        </div>
                        {data.team_event
                          ?<GetTeam data ={data.teams} team ={prop.team} />
                          : data.Participants.find(
                              ({ participant }) =>
                                participant ===
                                localStorage.getItem("loginData")
                            ).Score}
                      </div>
                      &nbsp; &nbsp; &nbsp;
                      <div>
                        <div
                          style={{
                            position: "relative",
                            top: "3px",
                            left: "-3px",
                          }}
                        >
                          <Calendar2Check />
                        </div>
                        12/12/2022
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div className="Pchild">
        <div className="psubchild1" style={{backgroundImage: 'url("https://tse2.mm.bing.net/th?id=OIP.Wo0bMz8lk_fKOloqwx8OQQHaHa&pid=Api&P=0")',
       backgroundRepeat: "no-repeat"}}></div>
        <div className="psubchild">
          <div className="pevent">
            <span className="eventname">Codigo</span>
            <span className="eventteam">Team Blaze</span>
            <span className="eventinfo" >
              <div>
               <div style={{position:"relative",top:"3px",left:"-3px"}}> <Speedometer2 /></div>
                220
              </div>
              &nbsp; &nbsp; &nbsp;
              <div>
                <div style={{position:"relative",top:"3px",left:"-3px"}}><Calendar2Check /></div>
                12/12/2022
              </div>
            </span>
          </div>
        </div>
      </div> */}
        </div>
      </div>
    </>
  );
};

export default Profileevent;
