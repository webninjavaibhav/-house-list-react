export async function getHouseDescription() {
  const res = await fetch("https://wizard-world-api.herokuapp.com/houses");

  return await res.json();
}
