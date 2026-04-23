async function setRoute() {
  const data = {
    partner_id: document.getElementById("partnerId").value,

    start_lat: parseFloat(document.getElementById("startLat").value),
    start_lng: parseFloat(document.getElementById("startLng").value),

    end_lat: parseFloat(document.getElementById("endLat").value),
    end_lng: parseFloat(document.getElementById("endLng").value)
  };

  const res = await fetch("http://127.0.0.1:3000/routes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  alert("Route Saved! ID: " + result.id);
}
async function getMatches() {
  const routeId = document.getElementById("routeId").value;

  const res = await fetch(`http://127.0.0.1:3000/match/${routeId}`);
  const data = await res.json();

  const list = document.getElementById("results");
  list.innerHTML = "";

  const li = document.createElement("li");
  li.innerText = JSON.stringify(data);
  list.appendChild(li);
}