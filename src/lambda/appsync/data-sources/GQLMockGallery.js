exports.handler = async (event) => {
  if (event.source === 'serverless-plugin-warmup') {
    return 'Lambda Warmup';
  }

  var images = [
    {
      id:1, 
      image:[
        {
          id:1,
          path: 'this is the path 1',
          type: 'image',
          name: 'This is the image 1',

        }
      ]
    },
    {
      id:2,
      image:[
        {
          id:2,
          path: 'this is the path 2',
          type: 'image',
          name: 'This is the image 2',

        }
      ]
    },
  ];



  return images;
};
