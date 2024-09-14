"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Voting() {
  const router = useRouter();

  function handleRegistrationStatus() {
    router.push("/registration");
  }

  function handleRegistrationOrUpdate() {
    router.push("/registerOrUpdate");
  }

  function handleVoterInstructions() {
    router.push("/voterInstructions");
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Voting Options</h1>
      <p style={styles.subtitle}>Choose an option below:</p>
      <button onClick={handleRegistrationStatus} style={styles.button}>
        Check Registration Status
      </button>
      <button onClick={handleRegistrationOrUpdate} style={styles.button}>
        Register or Update Info
      </button>
      <button onClick={handleVoterInstructions} style={styles.button}>
        How to Vote
      </button>
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
  title: {
    fontSize: "20px",
    fontWeight: "500",
    color: "#1B1B1B",
    marginTop: "50px",
    textAlign: "center",
  },
  subtitle: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#4B4B4B",
    marginTop: "10px",
    textAlign: "center",
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
};
