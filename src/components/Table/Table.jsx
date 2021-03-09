import React from 'react';

import './Table.sass';

import Pagination from '../Pagination/Pagination';
import TableHead from './TableHead';
import Search from '../Search/Search';

const Table = ({ data }) => {
    const [curData, setCurData] = React.useState(data);
    const [visibleData, setVisibleData] = React.useState(null);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [sortField, setSortField] = React.useState('');
    const [sortOrder, setSortOrder] = React.useState('');

    let firstPos = (currentPage - 1) * 50;
    let lastPos = firstPos + 50;

    React.useEffect(() => {
        console.log('reload');
        setVisibleData(curData.slice(firstPos, lastPos));
    }, [currentPage, curData, firstPos, lastPos]);

    const handlerPagination = (page) => {
        if (page !== currentPage) setCurrentPage(page);
    };

    const handlerSort = (e) => {
        let field = e.target.getAttribute('data-field');
        let order = '';
        if (sortField === field) {
            if (sortOrder === 'asc') {
                order = 'desc';
            } else {
                order = 'asc';
            }
        } else {
            setSortField(field);
            order = 'asc';
        }
        setSortOrder(order);
        sort(field, order);
    };

    const sort = (field, order) => {
        let sortData;
        if (field === 'name' || field === 'email') {
            switch (order) {
                case 'asc':
                    sortData = curData.sort((a, b) => {
                        if (a.user[field] > b.user[field]) return 1;
                        if (a.user[field] < b.user[field]) return -1;
                        return 0;
                    });

                    setCurData(sortData);
                    setVisibleData(sortData.slice(firstPos, lastPos));
                    break;
                case 'desc':
                    sortData = curData.sort((a, b) => {
                        if (a.user[field] < b.user[field]) return 1;
                        if (a.user[field] > b.user[field]) return -1;
                        return 0;
                    });
                    setCurData(sortData);
                    setVisibleData(sortData.slice(firstPos, lastPos));
                    break;
                default:
                    break;
            }
        } else {
            switch (order) {
                case 'asc':
                    sortData = curData.sort((a, b) => {
                        if (a[field] > b[field]) return 1;
                        if (a[field] < b[field]) return -1;
                        return 0;
                    });

                    setCurData(sortData);
                    setVisibleData(sortData.slice(firstPos, lastPos));
                    break;
                case 'desc':
                    sortData = curData.sort((a, b) => {
                        if (a[field] < b[field]) return 1;
                        if (a[field] > b[field]) return -1;
                        return 0;
                    });
                    setCurData(sortData);
                    setVisibleData(sortData.slice(firstPos, lastPos));
                    break;
                default:
                    break;
            }
        }
    };

    const handlerSearch = (searchStr) => {
        let searchData = data.filter((item) => {
            return (
                item.id.toString().toLowerCase().indexOf(searchStr.toLowerCase()) > -1 ||
                item.title.toLowerCase().indexOf(searchStr.toLowerCase()) > -1 ||
                item.user.name.toLowerCase().indexOf(searchStr.toLowerCase()) > -1 ||
                item.user.email.toLowerCase().indexOf(searchStr.toLowerCase()) > -1
            );
        });
        setCurData(searchData);
    };

    const rows = visibleData
        ? visibleData.map((item) => (
              <tr key={item.id} className="table__row">
                  <td>{item.id}</td>
                  <td>{item.user.name}</td>
                  <td>{item.user.email}</td>
                  <td>{item.title}</td>
              </tr>
          ))
        : null;

    return (
        <div className="table-wrap">
            <div className="row row--space-b row--align-c mb-20">
                <Search handlerSearch={handlerSearch} />
                <Pagination
                    count={Math.ceil(curData.length / 50)}
                    current={currentPage}
                    handlerPagination={handlerPagination}
                />
            </div>

            <table className="table">
                <thead>
                    <TableHead
                        sortField={sortField}
                        sortOrder={sortOrder}
                        handlerSort={handlerSort}
                    />
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
};

export default Table;
