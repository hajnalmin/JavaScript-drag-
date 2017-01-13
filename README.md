## JavaScript实现最简单的拖拽效果

### 实现原理简述

在AS3中，使用startDrag()就能实现拖拽，但是js中，却没有此方法，但是也是可以实现的，说穿了，挺简单的。实现拖拽方法不少，我呢，js功力尚浅，只知道一种实现原理。如下：
①鼠标按下+鼠标移动 → 拖拽
②鼠标松开 → 无拖拽
③鼠标偏移 → 拖拽距离

用JavaScript事件方法表示就是：
① onmousedown + onmousemove → startDrag()
② onmouseup → stopDrag()
③ ……

关键点就是让鼠标的偏移值赋给拖拽对象。

