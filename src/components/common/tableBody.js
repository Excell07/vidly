import React, { Component } from "react";
import _ from "lodash";

export default class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    // gets the value at path of object
    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    // the grouping operator controls the precedence of evaluation in expressions
    // otherwise it will evaluate from left to right
    return item._id + (column.path || column.key);
  };

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {columns.map(column => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}
