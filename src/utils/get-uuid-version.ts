const getUUIDVersion = (uuid: string): number | undefined => {
  const uuidSets = uuid.split('-');
  if (uuidSets.length === 5) {
    const uuidVersionSet = uuidSets[2];
    const version = uuidVersionSet[0];
    return parseInt(version, 10);
  };
};

export { getUUIDVersion };
