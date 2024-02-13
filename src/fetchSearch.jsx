async function fetchSearch({ queryKey }) {
  const { urlName } = queryKey[1];
  const res = await fetch(
    `https://lolliesnotsweets.azurewebsites.net/api/v1/healthz`
  );

  if (!res.ok) throw new Error(`no apiResponse`);

  return res.json();
}

export default fetchSearch;
