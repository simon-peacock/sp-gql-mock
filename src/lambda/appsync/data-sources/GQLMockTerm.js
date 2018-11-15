exports.handler = async (event) => {
    if (event.source === 'serverless-plugin-warmup') {
      return 'Lambda Warmup';
    }

    console.log(event);
    var term = {};


    if (event.id === "1") {
        term = {
            id: 1,
            type: 'taxonomy',
            path: 'taxonomy/term/1',
            name: 'Reviews'
        }

    } else if (event.id === "2") {
        term = {
            id: 2,
            type: 'taxonomy',
            path: 'taxonomy/term/2',
            name: 'News'
        }
    }
  
    return term;
  };
  