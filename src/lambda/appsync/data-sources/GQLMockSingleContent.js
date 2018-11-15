exports.handler = async (event) => {
  if (event.source === 'serverless-plugin-warmup') {
    return 'Lambda Warmup';
  }

  return {
    id: 'd3cdc682-cf58-4bfa-934b-c9d468a4d7ba',
    title: 'My content',
    type: 'article',
    text: 'Lorem ipsum dolor sit amet, consectetur.',
    image: 'https://placeimg.com/640/480/animals?t=1541075867450',
    path: 'my-content',
  };
};
