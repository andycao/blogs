---
layout: post
title:  safari中显示app已安装
date:   2015-10-09
meta :  webapp
categories: webapp
---

往往native app会需要在webapp中进行推广，或者是网页并没有做mobile的兼容，需要用户使用native app

##方法
ios 中head中加入meta标签

{% highlight html %}
  <meta name='apple-itunes-app' content='app-id=你的APP-ID'>
{% endhighlight %}


[参考链接](http://www.baidufe.com/item/cc592a4b3382eed8ec6e.html)