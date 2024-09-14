"use client";
import { useState } from "react";

export default function RegisterOrUpdate() {
  const [newRegister, setNewRegister] = useState(false);
  const [editInfo, setEditInfo] = useState(false);
  const [request, setRequest] = useState(false);
  const [citizen, setCitizen] = useState("");
  const [felon, setFelon] = useState(false);
  const [incapacitated, setIncapacitated] = useState(false);
  const [issued, setIssued] = useState(false);
  const [socialsecurity, setSocialsecurity] = useState(false);
  const [cardnumber, setCardnumber] = useState("");
  const [cardIssued, setCardIssued] = useState("");
  const [fourDigits, setFourDigits] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [suffix, setSuffix] = useState("");
  const [dob, setDob] = useState("");

  function handleCitizen(e: React.ChangeEvent<HTMLInputElement>) {
    setCitizen(e.target.value);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(
      newRegister,
      editInfo,
      request,
      citizen,
      felon,
      incapacitated,
      issued,
      socialsecurity,
      cardnumber,
      cardIssued,
      fourDigits,
      lastname,
      firstname,
      middlename,
      suffix,
      dob
    );

    const formData = new URLSearchParams({
      newRegister: newRegister ? "true" : "false",
      editInfo: editInfo ? "true" : "false",
      request: request ? "true" : "false",
      citizen: citizen,
      felon: felon ? "true" : "false",
      incapacitated: incapacitated ? "true" : "false",
      issued: issued ? "true" : "false",
      socialsecurity: socialsecurity ? "true" : "false",
      cardnumber: cardnumber,
      cardIssued: cardIssued,
      fourDigits: fourDigits,
      lastname: lastname,
      firstname: firstname,
      middlename: middlename,
      suffix: suffix,
      dob: dob,
    });

    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://registertovoteflorida.gov/eligibilityreactive",
      {
        method: "POST",
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
        body: formData,
      }
    );
    const data = await response.text();
    console.log(data);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newRegistration"></label>
        <input
          type="checkbox"
          id="newRegistration"
          checked={newRegister}
          onChange={(e) => setNewRegister(e.target.checked)}
        />
        Register
        <br />
        <br />
        <br />
        <label htmlFor="editInfo"></label>
        <input
          type="checkbox"
          id="editInfo"
          checked={editInfo}
          onChange={(e) => setEditInfo(e.target.checked)}
        />
        Edit Info
        <br />
        <br />
        <br />
        <label>Are you a citizen of the United States of America?</label>
        <input
          type="radio"
          value="Yes"
          checked={citizen === "yes"}
          onChange={handleCitizen}
        />
        Yes
        <input
          type="radio"
          value="No"
          checked={citizen === "no"}
          onChange={handleCitizen}
        />
        No
        <br />
        <br />
        <br />
        <label htmlFor="felon"></label>
        <input
          type="checkbox"
          id="felon"
          checked={felon}
          onChange={(e) => setFelon(e.target.checked)}
        />
        I affirm that I am not a convicted felon, or if I am, my right to vote
        has been restored. (For information on felon voting rights, visit
        Division of Elections’ webpage - https://dos.fl.gov/felon)
        <br />
        <br />
        <br />
        <input
          type="checkbox"
          checked={incapacitated}
          onChange={(e) => setIncapacitated(e.target.checked)}
        />
        I affirm that I have not been adjudicated mentally incapacitated with
        respect to voting or, if I have, my right to vote has been restored.
        <br />
        <br />
        <br />
        <input
          type="checkbox"
          checked={issued}
          onChange={(e) => setIssued(e.target.checked)}
        />
        I have never been issued a Florida DL or Florida ID card.
        <br />
        <br />
        <br />
        <input
          type="checkbox"
          checked={socialsecurity}
          onChange={(e) => setSocialsecurity(e.target.checked)}
        />
        I have never been issued a social security number.
        <br />
        <br />
        <label htmlFor="cardnumber">Card Number</label>
        <input
          type="text"
          id="cardnumber"
          value={cardnumber}
          onChange={(e) => setCardnumber(e.target.value)}
        
        />
        <br />
        <br />
        <label htmlFor="cardIssued">Card Issued</label>
        <input
          type="date"
          id="cardIssued"
          value={cardIssued}
          onChange={(e) => setCardIssued(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="fourDigits">Last Four Digits of SSN</label>
        <input
          type="text"
          id="fourDigits"
          value={fourDigits}
          onChange={(e) => setFourDigits(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="middlename">Middle Name</label>
        <input
          type="text"
          id="middlename"
          value={middlename}
          onChange={(e) => setMiddlename(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="suffix">Suffix</label>
        <select
          id="suffix"
          value={suffix}
          onChange={(e) => setSuffix(e.target.value)}
        >
          <option value="">Select</option>
          <option value="Jr">Jr</option>
          <option value="Sr">Sr</option>
          <option value="I">I</option>
          <option value="II">II</option>
          <option value="III">III</option>
          <option value="IV">IV</option>
        </select>
        <br />
        <br />
        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
// // app/page.tsx

// import IframeTemplate from "../components/IframeTemplate";
// import { useRouter } from "next/navigation";
// import React from "react";

// export default function RegisterOrUpdate() {
//   const router = useRouter();

//   function handleBack() {
//     router.push("registration");
//   }

//   function handleDone() {
//     router.push("/");
//   }

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>Register or Update</h1>
//       <IframeTemplate
//         src="https://registertovoteflorida.gov/eligibilityreactive"
//         title="Register or Update"
//       />
//       <div>
//         <button style={buttonStyle} onClick={handleBack}>
//           Back
//         </button>
//         <button style={buttonStyle} onClick={handleDone}>
//           Done
//         </button>
//       </div>
//     </div>
//   );
// }

// const buttonStyle = {
//   backgroundColor: "black",
//   color: "white",
//   padding: "10px 20px",
//   border: "none",
//   cursor: "pointer",
//   margin: "10px",
//   fontSize: "16px",
//   borderRadius: "5px",
// };
