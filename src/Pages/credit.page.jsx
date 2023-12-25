import React from "react";

function CreditsPage() {
  return (
    <>
    <div className="creditsBody">

      <h1>Credits</h1>
      <div className="credits">
        <img src="public/ProfilePic.jpeg" alt="A Picture of Logan" />
        <div className="innerCredit">
          <h2>Logan Martin</h2>
          <p>
            <a href="https://github.com/Logano-7/Pok-dex-Project">
              Git Repository
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/logan-martin-7b0b6a1b9/">
              LinkedIn
            </a>
          </p>
          <p>
            <a href="https://www.codewars.com/users/Logano-7">
              CodeWars Profile
            </a>
          </p>
        </div>
      </div>
      </div>
    </>
  );
}

export default CreditsPage;
