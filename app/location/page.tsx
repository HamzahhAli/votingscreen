"use client";
import { useRouter } from "next/navigation";
import IframeTemplate from "../components/IframeTemplate";

export default function location() {
  const router = useRouter();
  function handleVoteBallot() {
    router.push("/requestBallot");
  }
  function handleBack() {
    router.push("/voterInstructions");
  }
  return (
    <>
      <h1>Find your nearest voting location</h1>

      <IframeTemplate
        src="https://www.voterfocus.com/PrecinctFinder/addressSearch?county=HIL"
        title="location"
      />
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleBack}>
          Back
        </button>
        <button style={styles.button} onClick={handleVoteBallot}>
          Skip to Request Ballot
        </button>
      </div>
    </>
  );
}

const styles = {
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  button: {
    backgroundColor: "black",
    color: "white",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "5px",
  },
};
