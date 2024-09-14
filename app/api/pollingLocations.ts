// pages/api/getPollingLocation.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { address } = req.query;
  
  // Simple address parsing example; adjust as needed
  const [streetNumber, ...rest] = (address as string).split(' ');
  const streetName = rest.join(' ');
  const county = 'FL-HIL'; // Replace with actual county if needed

  const searchJSON = JSON.stringify({
    streetNumber,
    streetName,
    county,
  });

  try {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.voterfocus.com/PrecinctFinder/addressSearchProcessing?searchJSON=${encodeURIComponent(searchJSON)}`
    );
    const data = await response.json();

    if (response.ok) {
      res.status(200).json(data);
    } else {
      res.status(response.status).json(data);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
