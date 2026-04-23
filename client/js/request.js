async function createRequest() {
  const data = {
    pickup_lat: parseFloat(document.getElementById("pickupLat").value),
    pickup_lng: parseFloat(document.getElementById("pickupLng").value),
    drop_lat: parseFloat(document.getElementById("dropLat").value),
    drop_lng: parseFloat(document.getElementById("dropLng").value),
    price: parseFloat(document.getElementById("price").value)
  };

  try {
    const res = await fetch("http://127.0.0.1:3000/requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const text = await res.text();   // 👈 CHANGE HERE
    console.log("RAW RESPONSE:", text);

    const result = JSON.parse(text); // 👈 THEN PARSE
    alert("Request Created!");

  } catch (err) {
    console.error(err);
    alert("Error sending request");
  }
}