const smartGarbage= (trash, bins) => {
  if (trash === 'waste') {
    bins.waste++;
  } else if (trash === 'recycling') {
    bins.recycling++;
  } else if (trash === 'compost') {
    bins.compost++;
  } else {
    console.log("Error")
  };
  return bins;
};


console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
