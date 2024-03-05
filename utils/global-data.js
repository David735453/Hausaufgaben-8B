export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Viel Spaß beim Bruch!';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Hausaufgaben 8B';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'Weder ich noch jemand der mir etwas zuschickt, übernimmt keine Haftung, dass diese Angaben auch nur im geringsten richtig sind.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
