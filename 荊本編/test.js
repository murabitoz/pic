const imglist = new Array(
      "https://raw.githubusercontent.com/murabitoz/pic/master/%E8%8D%8A%E6%9C%AC%E7%B7%A8/%E3%83%97%E3%83%AD%E3%83%95%20_01.png",
      "http://raw.githubusercontent.com/murabitoz/pic/master/%E8%8D%8A%E6%9C%AC%E7%B7%A8/%E3%83%97%E3%83%AD%E3%83%95.png");
const url = new URL(location);
const selectnum = Math.floor(Math.random() * imglist.length);

location.href=imglist[selectnum];