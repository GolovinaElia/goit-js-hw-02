const formatString = function (string) {
  const maxLength = 40;
  return (string.length > maxLength) ? string.slice(0, 40) + '...': string;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));


console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));


console.log(formatString('Curabitur ligula sapien.'));


console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));