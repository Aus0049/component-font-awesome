/**
 * Created by Aus on 2017/11/28.
 */
import React from 'react';
import Icon from '../../lib/Icon';
import 'font-awesome/css/font-awesome.css'

const IconPage = () => {
    return (
        <div className="page">
            <Icon type="bath" />
            <Icon type="plane" />
            <Icon type="subway" />
            <Icon type="amazon" />
            <Icon type="chrome" />
        </div>
    )
};

export default IconPage;