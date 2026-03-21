export default async function handler(req, res) {
  const { contract } = req.query;


  if (!contract) {
    return res.status(400).json({ error: "No contract" });
  }


  try {
    const response = await fetch(
      `https://api.gopluslabs.io/api/v1/token_security/1?contract_addresses=${contract}`
    );


    const data = await response.json();


    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "API failed" });
  }
}