import React, { Component } from 'react';
import alert from './alert.module.css';

export default class Alert extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.StrictMode>
                <div className={alert.alposition}>
                    <div class="alert alert-danger alert-dismissible fade in">
                        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                        <strong>Falied!</strong> Password Is Incorrect
                    </div>
                </div>
            </React.StrictMode>
        )
    }
}
