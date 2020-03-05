---
layout: post
title:  "package-lock.json文件与npm包前缀"
date:   2020-02-12
meta:   学习
categories: js
---

#### npm 在5.x.x版本引入了package-lock.json文件，这篇文章将记录下有关的知识。

一直以来，我们使用npm，对于package.json这个文件再熟悉不过了，这个文件记录了项目的基本信息，版本，名称，作者，许可，以及依赖，启动，测试脚本等内容。但是在使用package.json管理版本的过程中，因为语法设置的关系，可能会引发一些莫名其妙的bug。

举例来说，在依赖中不同的前缀，会对版本有不同的要求。所以，某些情况下，当工程所依赖的项目更新版本后，我们在运行npm install时，可能拉下来的是更新的版本，与我们之前编写工程代码时使用的包并不完全一致。

##### 如下写法，是准确的指定了版本，npm install时不会拉下更新
{% highlight javascript %}
  "dependencies": {

        "bootstrap": "4.1.1", //准确版本，不接受更新

  }
{% endhighlight %}

##### patch release: 补丁更新
版本号第三位数字。主要用来修复bug，极小的变动，对于api无影响
比如：4.1.1 更新为 4.1.2为补丁更新。接受项目的补丁更新有如下3种表达方式：
{% highlight javascript %}
  "dependencies": {

    //补丁更新
    "bootstrap": "4.1", 
    "bootstrap": "4.1.x", 
    "bootstrap": "~4.1.1", 

  }
{% endhighlight %}

##### minor release: 次要更新
版本号第二位数字。用来推出新功能，但是这个功能可以向后兼容。
比如：4.1.1 更新为 4.2.1为次要更新
{% highlight javascript %}
  "dependencies": {

        //次要更新  
        "bootstrap": "4", 
        "bootstrap": "4.x", 
        "bootstrap": "^4.1.1",

  }
{% endhighlight %}

##### major release: 主要更新
版本号为第一位数字。当修改api时使用，这个修改时的代码无法向后兼容老版本。
比如：4.1.1 更新为 5.0.1

## package-lock.json文件

有了这个文件，它就可以固定下来现在安装好的版本。当这个文件被提交了之后，团队成员在其他地方clone并npm install 的时候得到的包，与我们提交的时候完全一样，这种机制就避免了一些由于依赖包的版本更新而引起的bug。这个特性，在团队合作中能发挥作用。

同时，我们本地的package-lock.json文件可以使用npm update命令更新。

总结一下，package-lock.json文件的引入主要目的是帮助我们固定本地依赖的版本，从而使新的开发者在npm install项目的时候的到相同版本的文件。所以在commit的时候我们完全可以将package-lock.json文件添加进去，让它跟随工程一起。