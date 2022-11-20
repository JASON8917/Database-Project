import React from "react";

const UserRank = ({nickname, index}) => {

    const rankReturn = () => {
        if (index === 1) {
            return(<div key={index} className="ml-5 mt-5 font-bold">{index}등 🥇 {nickname}</div>);
        }
        else if (index === 2) {
            return(<div key={index} className="ml-5 mt-2 font-bold">{index}등 🥈 {nickname}</div>);
        }
        else if (index === 3) {
            return (<div key={index} className="ml-5 mt-2 font-bold">{index}등 🥉 {nickname}</div>);
        }
        return (<div key={index} className="ml-5 mt-2">{index}등 {nickname}</div>);
    }

    return(
        <div key={index}>
            {
                rankReturn()
            }
        </div>
    )
}

export default UserRank;