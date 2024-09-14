"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase";

export default function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birth, setBirth] = useState("");
  const [checked, setChecked] = useState(false);
  const [registered, setRegistered] = useState("");
  const router = useRouter();

  function handleSkip() {
    router.push("/registerOrUpdate");
  }

  function handleFullInfo() {
    router.push("voterInfo");
  }

  function handleMenu() {
    router.push("/");
  }

  const saveUserInfo = async (firstName, lastName, birth, checked) => {
    const { data, error } = await supabase.from("userInfo").insert([
      {
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: birth,
        agreed: checked,
      },
    ]);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ firstName, lastName, birth, checked });
    await saveUserInfo(firstName, lastName, birth, checked);
    const formData = new URLSearchParams({
      firstName: firstName,
      lastName: lastName,
      birthDay: birth,
      Acknowledged: checked ? "true" : "false",
    }).toString();

    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://registration.elections.myflorida.com/CheckVoterStatus",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      }
    );
    const data = await response.text();
    console.log(data);

    const parse = new DOMParser();
    const docRead = parse.parseFromString(data, "text/html");
    const regInfo = docRead.querySelector("#lblVoterStatus").textContent;
    setRegistered(regInfo);
    // router.push("/voterInfo");
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Please enter your full name and date of birth.
      </h1>
      <p style={styles.subtitle}>
        We will use this information to check your registration status.
      </p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.fieldContainer}>
          <label htmlFor="firstName" style={styles.label}>
            First Name
          </label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            name="firstName"
            id="firstName"
            style={styles.input}
          />
        </div>
        <div style={styles.fieldContainer}>
          <label htmlFor="lastName" style={styles.label}>
            Last Name
          </label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            name="lastName"
            id="lastName"
            style={styles.input}
          />
        </div>
        <div style={styles.fieldContainer}>
          <label htmlFor="birth" style={styles.label}>
            Date of Birth
          </label>
          <input
            type="date"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
            name="birth"
            id="birth"
            style={styles.input}
          />
        </div>
        <div style={styles.fieldContainer}>
          <label htmlFor="acknowledged" style={styles.label}>
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              name="acknowledged"
              id="acknowledged"
              style={styles.checkbox}
            />
            This website is intended for use by a registered voter to determine
            his or her voter registration and voting status.
          </label>
        </div>
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
      {registered && (
        <p style={styles.status}>
          Voter Registration Status:{" "}
          {registered === "Active*" ? "Registered" : "Not Registered"}
          <br />
          <span style={styles.link} onClick={handleFullInfo}>
            view full info
          </span>
        </p>
      )}
      <button onClick={handleSkip} style={styles.skipButton}>
        Register or Update Info
      </button>
      <button onClick={handleMenu} style={styles.skipButton}>
        Back Home
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
  link: {
    color: "#007bff",
    cursor: "pointer",
    textDecoration: "underline",
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
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "500px",
  },
  fieldContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },
  label: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#1B1B1B",
    marginBottom: "8px",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  checkbox: {
    marginRight: "8px",
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
  status: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#4B4B4B",
    marginTop: "20px",
  },
  skipButton: {
    backgroundColor: "#F4F2F6",
    color: "#1B1B1B",
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
