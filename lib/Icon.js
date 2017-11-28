'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Aus on 2017/11/28.
 */
var Icon = function Icon(props) {
    var prefixCls = props.prefixCls,
        type = props.type,
        style = props.style;


    return _react2.default.createElement('span', {
        className: (0, _classnames2.default)([prefixCls, 'fa', 'fa-' + type]),
        style: style
    });
};

Icon.propTypes = {
    type: _react2.default.PropTypes.string.isRequired, // icon类型
    prefixCls: _react2.default.PropTypes.string, // 前缀class
    className: _react2.default.PropTypes.string, // 自定义class
    style: _react2.default.PropTypes.object // 自定义样式
};

Icon.defaultProps = {
    prefixCls: 'icon',
    className: '',
    style: {}
};

exports.default = Icon;
//# sourceMappingURL=Icon.js.map