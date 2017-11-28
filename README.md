# component-font-awesome

package font-awesome component in react
将font awesome封装成React组件 简化使用
[![NPM version](https://img.shields.io/npm/v/component-font-awesome?style=flat)](https://www.npmjs.org/package/component-font-awesome)
[![Build Status](https://travis-ci.org/Aus0049/component-font-awesome?branch=master)](https://travis-ci.org/Aus-0049/component-font-awesome)
# Install

[![component-font-awesome](https://nodei.co/npm/component-font-awesome.png)](https://npmjs.org/package/component-font-awesome)

# Usage

字体库[font-awesome 4.7.0](http://fontawesome.io/icons/), icon类型参照链接。

```
import React from 'react';
import ReactDOM from 'react-dom';
import Icon from 'component-font-awesome'
import 'component-font-awesome/index.css'

const element = document.getElementById('root');

ReactDOM.render(<Icon type='apple' />, element);
```

## API

Icon

| Name      | Type   | Default | Description                            |
| --------- | ------ | ------- | -------------------------------------- |
| type      | string |         | className of font awesome `fa-${type}` |
| prefixCls | string | 'icon'  | prefixCls of this component            |
| className | string | ''      | custom className                       |
| style     | obj    | {}      | custom inline style                    |