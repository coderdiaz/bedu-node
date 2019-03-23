const fs = require('fs');

const renderView = (fileName) => {
  console.log(fileName);

  switch(fileName) {
  	case 'index':
  		return fs.readFileSync('./views/index.html')
  		break;
  	case 'about':
  		return fs.readFileSync('./views/about.html')
  		break;
  }


  
};

module.exports = renderView;