import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.product_name}
                </td>
                <td>
                    {this.props.obj.product_desc}
                </td>
                <td>
                    {this.props.obj.product_price}
                </td>
            </tr>
        );
    }
}

export default DataTable;