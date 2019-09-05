const fetch = require('node-fetch');

// get
module.exports.get = async url => {
  // console.log(url);
  const response = await fetch(url);
  const resData = await response.json();
  return resData;
};

// post
module.exports.post = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const resData = await response.json();
  return resData;
};

// put
module.exports.put = async (url, data) => {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const resData = await response.json();
  return resData;
};

// delete
module.exports.delete = async url => {
  await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    }
  });
  const resData = await 'delete success';
  return resData;
};


//npm adduser
//一路通
//Logged in as xiexieshaozhuyimei on https://registry.npmjs.org/.

//发布 npm publish


//查看版本号
//npm version
//npm version 1.0.1

//记得版本号要累加 不然出现一样的版本号提交不上去



//推送到github
//echo "# shaozhufetch" >> README.md
/* git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/shaozhu520/shaozhufetch.git
git push -u origin master */
