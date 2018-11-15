exports.handler = async (event) => {
  if (event.source === 'serverless-plugin-warmup') {
    return 'Lambda Warmup';
  }

  var list = [];



  var item1 = {
    id: 'd3cdc682-cf58-4bfa-934b-c9d468a4d7ba',
    title: 'List content 1',
    type: 'article',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis egestas. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Risus pretium quam vulputate dignissim suspendisse in est ante. Vestibulum sed arcu non odio euismod. Cras tincidunt lobortis feugiat vivamus at. Erat imperdiet sed euismod nisi porta lorem mollis. Volutpat consequat mauris nunc congue nisi vitae. Purus sit amet volutpat consequat mauris. Sit amet justo donec enim diam vulputate ut pharetra. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.',
    image: 'https://placeimg.com/640/480/animals?t=1541075867450',
    path: 'list-content',
  };

  var item2 = {
    id: 'd3cdc682-cf58-4bfa-934b-c9d468a4d7ba',
    title: 'List content 2',
    type: 'article',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis egestas. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Risus pretium quam vulputate dignissim suspendisse in est ante. Vestibulum sed arcu non odio euismod. Cras tincidunt lobortis feugiat vivamus at. Erat imperdiet sed euismod nisi porta lorem mollis. Volutpat consequat mauris nunc congue nisi vitae. Purus sit amet volutpat consequat mauris. Sit amet justo donec enim diam vulputate ut pharetra. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.',
    image: 'https://placeimg.com/640/480/animals?t=1541075867450',
    path: 'list-content',
  };

  var item3 = {
    id: 'd3cdc682-cf58-4bfa-934b-c9d468a4d7ba',
    title: 'List content 3',
    type: 'article',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis egestas. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Risus pretium quam vulputate dignissim suspendisse in est ante. Vestibulum sed arcu non odio euismod. Cras tincidunt lobortis feugiat vivamus at. Erat imperdiet sed euismod nisi porta lorem mollis. Volutpat consequat mauris nunc congue nisi vitae. Purus sit amet volutpat consequat mauris. Sit amet justo donec enim diam vulputate ut pharetra. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.',
    image: 'https://placeimg.com/640/480/animals?t=1541075867450',
    path: 'list-content',
  };

  var item4 = {
    id: 'd3cdc682-cf58-4bfa-934b-c9d468a4d7ba',
    title: 'List content 4 ',
    type: 'article',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis egestas. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Risus pretium quam vulputate dignissim suspendisse in est ante. Vestibulum sed arcu non odio euismod. Cras tincidunt lobortis feugiat vivamus at. Erat imperdiet sed euismod nisi porta lorem mollis. Volutpat consequat mauris nunc congue nisi vitae. Purus sit amet volutpat consequat mauris. Sit amet justo donec enim diam vulputate ut pharetra. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.',
    image: 'https://placeimg.com/640/480/animals?t=1541075867450',
    path: 'list-content',
  };

  var item5 = {
    id: 'd3cdc682-cf58-4bfa-934b-c9d468a4d7ba',
    title: 'List content 5',
    type: 'article',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis egestas. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Risus pretium quam vulputate dignissim suspendisse in est ante. Vestibulum sed arcu non odio euismod. Cras tincidunt lobortis feugiat vivamus at. Erat imperdiet sed euismod nisi porta lorem mollis. Volutpat consequat mauris nunc congue nisi vitae. Purus sit amet volutpat consequat mauris. Sit amet justo donec enim diam vulputate ut pharetra. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.',
    image: 'https://placeimg.com/640/480/animals?t=1541075867450',
    path: 'list-content',
  };


  list.push(item1);
  list.push(item2);
  list.push(item3);
  list.push(item4);
  list.push(item5);


  return list;
};
