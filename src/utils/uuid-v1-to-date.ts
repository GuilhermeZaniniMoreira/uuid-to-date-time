const UUIDV1ToDate = (uuid: string) => {
  const sets = uuid.split("-");
  if (sets.length === 5) {
    const firstSet = sets[2];
    const firstSetHEX = firstSet.slice(-3);
    const secondSetHEX = sets[1];
    const thirdSetHEX = sets[0];
    const HEXString = firstSetHEX.concat(secondSetHEX).concat(thirdSetHEX);
    const nanoseconds = parseInt(HEXString, 16);
    const seconds = nanoseconds / 10000000;
    const unixEpochInSeconds = 12219292800;
    const unixTimestamp = seconds - unixEpochInSeconds;
    const date = new Date(unixTimestamp * 1000);
    return date;
  }
};

export { UUIDV1ToDate };
