exports.handler = async (event) => {
  if (event.source === 'serverless-plugin-warmup') {
    return 'Lambda Warmup';
  }

  return {
    id: 'd3cdc682-cf58-4bfa-934b-c9d468a4d7ba',
    title: 'My content',
    type: 'article',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis egestas. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Risus pretium quam vulputate dignissim suspendisse in est ante. Vestibulum sed arcu non odio euismod. Cras tincidunt lobortis feugiat vivamus at. Erat imperdiet sed euismod nisi porta lorem mollis. Volutpat consequat mauris nunc congue nisi vitae. Purus sit amet volutpat consequat mauris. Sit amet justo donec enim diam vulputate ut pharetra. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.',
    image: 'https://placeimg.com/640/480/animals?t=1541075867450',
    path: 'my-content',
  };
};
