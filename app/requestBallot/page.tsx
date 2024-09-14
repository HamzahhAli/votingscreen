"use client";
import IframeTemplate from "../components/IframeTemplate";
import { useRouter } from "next/navigation";
export default function requestBallot() {
  const router = useRouter();
  function handleBack() {
    router.push("/location");
  }

  function handleMenu() {
    router.push("/");
  }

  return (
    <>
      <h1>Request Ballot</h1>
      <IframeTemplate
        src="https://www.votehillsborough.gov/VOTERS/My-Registration-Status"
        title="Request ballot"
      />
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleBack}>
          Back
        </button>
        <button style={styles.button} onClick={handleMenu}>
          Done
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
