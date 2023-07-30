import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as e,e as n}from"./app-d84c9cdd.js";const d={},r=n('<blockquote><p>本文部分内容由ChatGPT生成</p></blockquote><h2 id="cdn介绍" tabindex="-1"><a class="header-anchor" href="#cdn介绍" aria-hidden="true">#</a> CDN介绍</h2><p>CDN是指内容分发网络（Content Delivery Network），是一种分布式的服务器系统，可以在全球范围内提供高效的内容分发服务。在电子取证中，CDN通常用于存储和分发网站上的静态资源，例如图片、视频和其他文件。</p><p>在电子取证中，CDN可以被认为是一个具有以下特征的系统：</p><ol><li>分布式存储：CDN使用多个服务器存储网站的静态资源，这些服务器通常位于不同的地理位置，从而提高资源访问速度和可靠性。</li><li>内容缓存：CDN会在其服务器上缓存网站的静态资源，这些缓存可以降低对原始网站的请求量，并提高资源的访问速度。</li><li>负载均衡：CDN可以根据访问量和地理位置等因素将请求分配到最近的服务器上，以确保请求能够得到快速的响应。</li><li>安全性：CDN可以提供一些安全功能，例如SSL加密和DDoS攻击防护，以保护资源免受网络攻击。</li></ol><p>在电子取证中，CDN可能会影响取证过程，因为一些静态资源可能被缓存到CDN服务器上，而不是原始网站上。因此，在取证过程中需要考虑到这一点，并确保获取尽可能全面的证据。</p><h2 id="验证是否存在cdn" tabindex="-1"><a class="header-anchor" href="#验证是否存在cdn" aria-hidden="true">#</a> 验证是否存在CDN</h2><h3 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h3><p>在本地使用cmd进行<code>ping</code>，如得到的为CNAME则证明有CDN，反之即无。</p><figure><img src="https://bu.dusays.com/2023/07/26/64c1427eaec06.png" alt="null" tabindex="0" loading="lazy"><figcaption>null</figcaption></figure><h3 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二</h3><p>使用在线全球ping的工具，如站长之家，ITDOG等工具，来查看域名解析的ip。</p><figure><img src="https://bu.dusays.com/2023/07/26/64c1428027c6d.png" alt="null" tabindex="0" loading="lazy"><figcaption>null</figcaption></figure><h2 id="绕过cdn的方法" tabindex="-1"><a class="header-anchor" href="#绕过cdn的方法" aria-hidden="true">#</a> 绕过CDN的方法</h2><h3 id="查询网站历史解析查找网站真实ip" tabindex="-1"><a class="header-anchor" href="#查询网站历史解析查找网站真实ip" aria-hidden="true">#</a> 查询网站历史解析查找网站真实IP</h3><p>部分网站在初级阶段为了方便运营没有配置CDN，此时域名是直接使用A记录解析到网站服务器的。我们可以通过查找DNS的历史解析记录找到网站的真实IP.</p><figure><img src="https://bu.dusays.com/2023/07/26/64c1427e83152.png" alt="null" tabindex="0" loading="lazy"><figcaption>null</figcaption></figure><h3 id="通过资产搜索引擎查找网站真实ip" tabindex="-1"><a class="header-anchor" href="#通过资产搜索引擎查找网站真实ip" aria-hidden="true">#</a> 通过资产搜索引擎查找网站真实IP</h3><p>常见的有FOFA、shadan、钟馗之眼等搜索引擎。</p><figure><img src="https://bu.dusays.com/2023/07/26/64c142800ab1c.png" alt="null" tabindex="0" loading="lazy"><figcaption>null</figcaption></figure><h3 id="通过子域名查找网站真实ip" tabindex="-1"><a class="header-anchor" href="#通过子域名查找网站真实ip" aria-hidden="true">#</a> 通过子域名查找网站真实IP</h3><p>CDN的价格比较昂贵，部分公司无法承担得起给每个网站都添加CDN，所以有些流量较大的主站会使用CDN，而其他的一些分站不一定会使用CDN。因此，我们可以通过查找子域名，之后查找子域名的DNS解析，最终找到真实IP。</p><h4 id="通过fofa等资产查询工具搜集子域名" tabindex="-1"><a class="header-anchor" href="#通过fofa等资产查询工具搜集子域名" aria-hidden="true">#</a> 通过FOFA等资产查询工具搜集子域名</h4><figure><img src="https://bu.dusays.com/2023/07/26/64c14281a8e22.png" alt="null" tabindex="0" loading="lazy"><figcaption>null</figcaption></figure><h4 id="使用子域名爆破工具搜集子域名" tabindex="-1"><a class="header-anchor" href="#使用子域名爆破工具搜集子域名" aria-hidden="true">#</a> 使用子域名爆破工具搜集子域名</h4><p>子域名挖掘机、subdomainbrute、Ladon等字典爆破</p><figure><img src="https://bu.dusays.com/2023/07/26/64c1428224c43.png" alt="null" tabindex="0" loading="lazy"><figcaption>null</figcaption></figure><h3 id="通过邮件信息查找网站真实ip" tabindex="-1"><a class="header-anchor" href="#通过邮件信息查找网站真实ip" aria-hidden="true">#</a> 通过邮件信息查找网站真实IP</h3><p>部分网站在注册时会发送验证邮件，通过查看邮件原文可获得真实IP地址。</p><figure><img src="https://bu.dusays.com/2023/07/26/64c1427b5a0bc.png" alt="null" tabindex="0" loading="lazy"><figcaption>null</figcaption></figure><blockquote><p>经实验得到，除了阿里云邮箱外，其他大部分邮箱都不会隐藏源IP。</p></blockquote><h3 id="通过网站漏洞获取真实ip" tabindex="-1"><a class="header-anchor" href="#通过网站漏洞获取真实ip" aria-hidden="true">#</a> 通过网站漏洞获取真实IP</h3><p>当目标站点存在漏洞时，查看真实IP。例如：phpinfo信息泄露、github信息泄露、网站源码泄露等。或通过xss、反弹shell、ssrf等。</p><figure><img src="https://bu.dusays.com/2023/07/26/64c1427c50117.png" alt="null" tabindex="0" loading="lazy"><figcaption>null</figcaption></figure><h3 id="通过ssl证书查找真实ip" tabindex="-1"><a class="header-anchor" href="#通过ssl证书查找真实ip" aria-hidden="true">#</a> 通过SSL证书查找真实IP</h3><p>通过Censys网络空间搜索引擎查找网站的SSL证书及HASH，然后使用Censys搜索该HASH即可得到真实IP地址。</p><p>具体步骤如下：</p><ol><li>通过访问网站获取SSL证书的SHA-256/SHA-1指纹。</li><li>在Censys搜索该指纹。</li></ol><h3 id="大量攻击获取真实ip" tabindex="-1"><a class="header-anchor" href="#大量攻击获取真实ip" aria-hidden="true">#</a> 大量攻击获取真实IP</h3><p>大部分网站的CDN流量都是有限的，如果使用DDOS攻击，在这种大流量冲击下，可能会暴露真实IP。</p>',40),t=[r];function c(l,h){return i(),e("div",null,t)}const o=a(d,[["render",c],["__file","cdn.html.vue"]]);export{o as default};