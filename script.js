import assets from "./assets/asset_Dataset.js";


const assetsData = assets;

// Function to populate the Asset Table
function populateAssetTable(data) {
  const tableBody = document.getElementById("assetsTableBody");
  tableBody.innerHTML = "";

  data.forEach((asset) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${asset.asset_id}</td>
      <td>${asset.asset_name}</td>
      <td>${asset.serial}</td>
      <td>${asset.category}</td>
      <td>${asset.owner_name}</td>
      <td>${asset.region}</td>
      <td>${asset.province}</td>
      <td>${asset.status}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Function to calculate and display summary information
function displaySummary(data) {
  const totalAssets = data.length;
  const totalDeployedAssets = data.filter(
    (asset) => asset.status === "Deployed"
  ).length;
  const totalAvailableAssets = data.filter(
    (asset) => asset.status === "Available"
  ).length;

  document.getElementById("totalAssets").textContent = totalAssets;
  document.getElementById("totalDeployedAssets").textContent =
    totalDeployedAssets;
  document.getElementById("totalAvailableAssets").textContent =
    totalAvailableAssets;
}

// Call functions to populate the table and display summary
populateAssetTable(assetsData);
displaySummary(assetsData);
