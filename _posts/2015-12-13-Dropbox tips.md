---
layout: post
title:  更好的使用Dropbox
date:   2015-12-13
categories: mac, dropbox
---

## 优缺点

Dropbox相对于国内同步盘百度云盘，360网盘的优点与缺点

1.	更加尊重用户的隐私与内容的保密
	
	百度云盘的协议里面允许百度对我们上传文件扫描与删除的

2. 	可靠性更高

	文件丢失的事情我还没有遇到过，增量同步机制也是更加可靠智能

3.	跨平台客户端最多

	虽然国内各网盘的支持越来越好，不少都有mac与各手机版本的支持，但是dropbox是少有的拥有linux客户端的网盘，而且在手机，pad上面的支持也非常好

4. 	目前国内无法正常使用
	
	由于令人痛恨的 [GFW](https://en.wikipedia.org/wiki/Great_Firewall) 的存在，大伙们需要各显神通使用各自的翻墙手段才能happy的使用

## 安装与翻强

mac上使用官方下载器安装的是非常慢，建议使用官网的离线安装包，大约40+M，安装后会自动升级😴

目前，我使用了[shadowsocks][ss]客户端翻墙，建议自己去国外买个vps搭建自己的[sock5][socks]服务，服务器不需要太好，流量够自己用就可以了。使用自己的vps最大的优点是稳定，有时免费的服务会经常断掉🤔

搭建好[socks5][socks]后记下自己的关键参数，在客户端配置好，浏览器中使用系统代理，可以使用google。

[这里也有免费的sock5][freess5]但不能保证稳定与可用性

com搜索就说明搭建成功😄, 配置dropbox客户端，对接本地[shadowsocks][ss]服务。

![dropbox 配置]({{ site.baseurl }}/images/2015/dropbox1.png "dropbox配置示例")

手动，socks5 本地默认端口1080


## symbolic link

dropbox默认只有一个folder，ln可以在系统内同步两个folder即可允许dropbox同步不同目录的文件与文件夹。
windows使用mklink, osx使用ln

ln -s ~/Dropbox/test ~/Document/

link dropbox的test文件夹到Document目录下

## 使用dropbox同步sublime text设定

sublime text2 默认设定存在于

~/Library/Application Support/Sublime Text 2/Packages/User

在机器间同步此文件即可

{% highlight commands %}
	cd ~/Library/Application Support/Sublime Text 2/Packages

	mv User ~/Dropbox/Sublime/  
	转移当前文件至dropbox

	ln -s ~/Dropbox/User     
	link User至当前目录下

{% endhighlight %}

在其他机器上执行

{% highlight commands %}
	cd ~/Library/Application Support/Sublime Text 2/Packages

	rm -r User  
	清除已有的

	ln -s ~/Dropbox/User

{% endhighlight %}


[ss]: https://shadowsocks.org/en/index.html
[freess5]: https://www.socks-proxy.net/
[socks]: https://en.wikipedia.org/wiki/SOCKS