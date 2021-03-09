import React from 'react';
import classNames from 'classnames';

const TableHead = ({ sortOrder, sortField, handlerSort }) => {
    return (
        <tr>
            <th>
                <span
                    className={classNames('table__filter', {
                        [`${sortOrder}`]: sortField === 'id',
                    })}
                    data-field="id"
                    onClick={(e) => handlerSort(e)}>
                    id
                </span>
            </th>
            <th>
                <span
                    className={classNames('table__filter', {
                        [`${sortOrder}`]: sortField === 'name',
                    })}
                    data-field="name"
                    onClick={(e) => handlerSort(e)}>
                    Name
                </span>
            </th>
            <th>
                <span
                    className={classNames('table__filter', {
                        [`${sortOrder}`]: sortField === 'email',
                    })}
                    data-field="email"
                    onClick={(e) => handlerSort(e)}>
                    Email
                </span>
            </th>
            <th>
                <span
                    className={classNames('table__filter', {
                        [`${sortOrder}`]: sortField === 'title',
                    })}
                    data-field="title"
                    onClick={(e) => handlerSort(e)}>
                    Todo
                </span>
            </th>
        </tr>
    );
};

export default TableHead;
