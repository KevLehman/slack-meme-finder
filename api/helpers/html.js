const deleteLineBreak = str => str.replace('\\n', '');

const replaceCharacters = (str) => {
  const nstr = str.replace(/[\s]+/, ' ');
  return deleteLineBreak(nstr);
}

function stripHtmlTags (str) {
  if ((str === null) || (str === '')) return false;
  str = str.toString();
  str = replaceCharacters(str);
  return str.replace(/<[^>]*>/g, '');
}

module.exports = stripHtmlTags;
