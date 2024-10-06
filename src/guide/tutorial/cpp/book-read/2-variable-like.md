---
title: 2 - 各种变量一样的东西
---

::: warning
不完整，待补充
:::

## 基本类型 与 标识符

参考
- 红 P9 / OCR P29
- 蓝 P32

**关键名词**
- [`基本类型`]
- [`类型`]
- [`标识符`]

**C风格数组**
- 红 1.1.14 P26 / OCR P46

## 类 Class 与 结构体 Struct
事实上在编写 [`类`] 之前，我更推荐先使用一下 标准库 提供的 类：
- std::array 与 std::vector
  - 红 1.1.15 P27 / OCR P47
> https://compiler-explorer.com/z/Menne4vEa
```cpp
#include <vector>
#include <iostream>
using namespace std;
int main() {
    // Create a vector of Integers.
    vector<int> myVector { 11,22 };
    // Add some more integers to the vector using push_back.
    myVector.push_back(33);
    myVector.push_back(44);
    // Access elements.
    cout << "1st element " << myVector[0] << endl;
}
```

类的编写与进阶
- 蓝 第三章
- 红 P61、135、197 / OCR P81、155、217
> 在 C++20 高级编程（第五版）中，由于使用了 module 的编写规范，所以对于类型/标识符
等定义会带上 `export` 关键字，如果不启用 module，可以忽略 `export` 关键字。


**关键名词**
- [`类`]
- [`对象`]
- [`结构体`](https://zh.cppreference.com/w/cpp/language/struct)

::: warning 关于C++可能缺少的一课
以下内容可以跳过，因为可能涉及一系列关于 函数重载，类的复制、移动构造 等 进阶内容。
:::

## 联合体 Union
- [联合体](https://zh.cppreference.com/w/cpp/language/union)

## 类型推导

## 值类别
- [`值类别`]

以函数重载来举例，请问下列程序输出什么？为什么会有这样的区别？
> https://compiler-explorer.com/z/eGqPvTxMz
```cpp
#include <cstdio>
class X {};

void print(X& x) {
    std::puts("X& x\n");
}

void print(X&& x) {
    std::puts("X&& x\n");
}

X getX() {
    return X{};
}

int main() {
    X x;
    print(x);
    print(getX());
}
```

参考
- 白 1.1 PDF P10

## C++ 类型系统概览
![C++ 类型系统概览](https://upload.cppreference.com/mwiki/images/9/96/cpp_types.svg)

[`基本类型`]: https://zh.cppreference.com/w/cpp/language/types
[`类型`]: https://zh.cppreference.com/w/cpp/language/type
[`值类别`]: https://zh.cppreference.com/w/cpp/language/value_category
[`运算符`]: https://zh.cppreference.com/w/cpp/language/operators
[`表达式`]: https://zh.cppreference.com/w/cpp/language/expressions
[`初始化`]: https://zh.cppreference.com/w/cpp/language/initialization
[`类`]: https://zh.cppreference.com/w/cpp/language/classes
[`标识符`]: https://zh.cppreference.com/w/cpp/language/identifiers
[`对象`]: https://zh.cppreference.com/w/cpp/language/object

<DiscourseComments />
