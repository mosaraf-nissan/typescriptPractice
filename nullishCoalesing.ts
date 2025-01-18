{
  let age = 18;
  const isAdult = age >= 18 ? "adult" : "underAge";

  // nullish and coalescing operator ??
  // based on null and undefined data we have take alternative data.
  const isAuthenticated = null;

  const result = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "guest";
}
