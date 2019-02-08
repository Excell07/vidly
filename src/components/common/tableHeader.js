import React, { Component } from "react";

// columns: array
// sortColumn: object
// onSort: function

export default class TableHeader extends Component {
  raiseSort(path) {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  }

  renderSortIcon = column => {
    if (column.path !== this.props.sortColumn.path) return null;
    if (this.props.sortColumn.order === "asc")
      return <i className="fa fa-sort-asc" aria-hidden="true" />;
    return <i className="fa fa-sort-desc" aria-hidden="true" />;
  };

  render() {
    return (
      <thead>
        <tr>
          {/* get each column and mapped to th element  */}
          {this.props.columns.map(column => (
            <th
              style={{ cursor: "pointer" }}
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}
