/**
 * Created by Aus on 2017/11/28.
 */
import React from 'react'
import classNames from 'classnames'

const Icon = (props) => {
    const {prefixCls, type, style} = props;

    return (
        <span
            className={classNames([prefixCls, 'fa', `fa-${type}`])}
            style={style}
        />
    )
};

Icon.propTypes = {
    type: React.PropTypes.string.isRequired, // icon类型
    prefixCls: React.PropTypes.string, // 前缀class
    className: React.PropTypes.string, // 自定义class
    style: React.PropTypes.object // 自定义样式
};

Icon.defaultProps = {
    prefixCls: 'icon',
    className: '',
    style: {}
};

export default Icon