exports.handler = async (event) => {
  if (event.source === 'serverless-plugin-warmup') {
    return 'Lambda Warmup';
  }

  var obj = {};

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

  var channel = {
    id: 1,
    type: 'taxonomy',
    path: 'taxonomy/term/2',
    name: 'Reviews'
  }

  var category = [
    {
      id: 1,
      type: 'taxonomy',
      path: 'taxonomy/term/6',
      name: 'Cars'
    }, 
    {
      id: 1,
      type: 'taxonomy',
      path: 'taxonomy/term/7',
      name: 'Vans'
    }
  ];


  
  if (event.id === "1") {
    obj = {
      author: [],
      category: category,
      channel: channel,
      last_updated: '1478422920',
      path: 'article-1',
      promote: true,
      publication_date: '1478422920',
      sticky: true,
      id: 'd3cdc682-cf58-4bfa-934b-c9d468a4d7ba',
      title: 'Test Article 1',
      seo_title: 'Test SEO Article 1',
      status: true,
      type: 'article',
      text: 'This is a test article 1',
      images:[]

    };

  } else if (event.id === "2")  {
    obj = {
      author: [],
      category: category,
      channel: channel,
      last_updated: '1478422920',
      path: 'article-2',
      promote: true,
      publication_date: '1478422920',
      sticky: true,
      id: 'd3cdc682-cf58-4bfa-934b-c9d468a4d7ba',
      title: 'Test Article 2',
      seo_title: 'Test SEO Article 2',
      status: true,
      type: 'article',
      text: 'This is a test article 2',
      images: images

    };
  }
  return obj;
};
