// "use client";
// import { useState } from "react";

// export default function voterInstructions() {
//   const [homeNumber, setHomeNumber] = useState("");
//   const [streetAndZip, setStreetandZip] = useState("");

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     console.log({ homeNumber, streetAndZip });

//     const formData = new URLSearchParams({
//       streetNumberInput: homeNumber,
//       streetNameInput: streetAndZip,
//     }).toString();

//     const response = await fetch(
//       "https://cors-anywhere.herokuapp.com/https://www.votehillsborough.gov/VOTERS/Voting-Precincts",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: formData,
//       }
//     );
//     const data = await response.text();
//     console.log(data);
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label>Enter home number</label>
//         <input
//           value={homeNumber}
//           onChange={(e) => setHomeNumber(e.target.value)}
//         />
//         <label>Enter street name and zip code</label>
//         <input
//           value={streetAndZip}
//           onChange={(e) => setStreetandZip(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }
"use client";
import { useState } from "react";
import IframeTemplate from "../components/IframeTemplate";
import { useRouter } from "next/navigation";

export default function VoterInstructions() {
  const [ballotStatus, setBallotStatus] = useState(false);
  const [requestBallot, setRequestBallot] = useState(false);
  const router = useRouter();

  function handleOpenBallot() {
    setBallotStatus(true);
  }

  function handleCloseBallot() {
    setBallotStatus(false);
  }

  function handleSkip() {
    router.push("/location");
  }

  function handleCloseRequest() {
    setRequestBallot(false);
  }

  function handleMenu() {
    router.push("/");
  }

  return (
    <div style={styles.container}>
      <p>Description comes here</p>
      <button onClick={handleOpenBallot} style={styles.button}>
        Check if you already requested a vote-by-mail ballot
      </button>
      {ballotStatus && (
        <>
          <IframeTemplate
            src="https://www.votehillsborough.gov/VOTERS/My-Registration-Status"
            title="Check request status"
          />
        </>
      )}
      <button onClick={handleSkip} style={styles.button}>
        Skip to vote
      </button>
      <button onClick={handleMenu} style={styles.button}>
        Back Home
      </button>
      {requestBallot && (
        <>
          <IframeTemplate
            src="https://www.votehillsborough.gov/VOTERS/My-Registration-Status"
            title="Request Ballot"
          />
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FDFBFF",
    padding: "16px",
    minHeight: "100vh",
  },
  button: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    padding: "16px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "500",
    marginTop: "20px",
    cursor: "pointer",
    width: "100%",
    maxWidth: "500px",
  },
  closeButton: {
    backgroundColor: "#dc3545",
    color: "#FFFFFF",
    padding: "16px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "500",
    marginTop: "20px",
    cursor: "pointer",
    width: "100%",
    maxWidth: "500px",
  },
};
