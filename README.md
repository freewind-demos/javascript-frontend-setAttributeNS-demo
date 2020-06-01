JavaScript Frontend setAttributeNS Demo
=======================================

对于setAttributeNS，有很多诡异的地方，花了我很多时间。

首先，setAttributeNS中的NS指的是`namespace`，对XML文档和当年的xhtml规范有效，可以在html中自定义namespace并且设置自己的特殊的属性，比如：

```
<div xmlns:test="http://test.com">
  <div test:hello="111"/>
</div>
```

但是现在的浏览器似乎已经不支持这种用法，我也没有找到办法能重现它。

然后，DOM中的`getAttributeNS`也并不是完全不支持namespace。对于html规范中已存在的，它还是支持，比如：

```
<use id="main" xlink:title="111" xlink:aaa="222"></use>
```

中的`xlink:title`，是可以在dom中通过`getAttributeNS('http://www.w3.org/1999/xlink', 'title')`得到其值的，
但是对于自定义的`xlink:aaa`，`getAttributeNS('http://www.w3.org/1999/xlink', 'aaa')`返回的就是`null`，但通过`main.getAttribute('xlink:aaa')`可以得到其值。

虽然在HTML中直接定义的custom namespace和custom attribute，我们不能通过`getAttributeNS`得到其值，
但是如果是在JS中通过`setAttributeNS`定义的，则总是可以通过`getAttributeNS`得到其值。

```
open index.html
```
