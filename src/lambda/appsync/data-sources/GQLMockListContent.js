exports.handler = async (event) => {
  if (event.source === 'serverless-plugin-warmup') {
    return 'Lambda Warmup';
  }

  var list = [];


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



  var item1 = {
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

  var item2 = {
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
    images:[]
  };

  var item3 = {
    author: [],
    category: category,
    channel: channel,
    last_updated: '1478422920',
    path: 'article-3',
    promote: true,
    publication_date: '1478422920',
    sticky: true,
    id: 'd3cdc682-cf58-4bfa-934b-c9d468a4d7ba',
    title: 'Test Article 3',
    seo_title: 'Test SEO Article 3',
    status: true,
    type: 'article',
    text: 'This is a test article 1',
    images:[]
  };

  var item4 = {
    author: [],
    category: category,
    channel: channel,
    last_updated: '1478422920',
    path: 'article-4',
    promote: true,
    publication_date: '1478422920',
    sticky: true,
    id: 'd3cdc682-cf58-4bfa-934b-c9d468a4d7ba',
    title: 'Test Article 4',
    seo_title: 'Test SEO Article 4',
    status: true,
    type: 'article',
    text: 'This is a test article 4',
    images:[]
  };

  var item5 = {
    author: [],
    category: category,
    channel: channel,
    last_updated: '1478422920',
    path: 'article-5',
    promote: true,
    publication_date: '1478422920',
    sticky: true,
    id: 'd3cdc682-cf58-4bfa-934b-c9d468a4d7ba',
    title: 'Test Article 5',
    seo_title: 'Test SEO Article 5',
    status: true,
    type: 'article',
    text: 'This is a test article 5',
    images:[]
  };


  list.push(item1);
  list.push(item2);
  list.push(item3);
  list.push(item4);
  list.push(item5);


  return list;
};
