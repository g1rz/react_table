import React from 'react';
import classNames from 'classnames';

import './Pagination.sass';

const Pagination = ({ count, current, handlerPagination }) => {
    let list = Array(count)
        .fill(null)
        .map((item, index) => {
            return (
                <li key={index} className="pagination__item">
                    <button
                        className={classNames('pagination__btn', {
                            'pagination__btn--active': index + 1 === current,
                        })}
                        onClick={() => handlerPagination(index + 1)}>
                        {index + 1}
                    </button>
                </li>
            );
        });

    return <ul className="pagination">{list}</ul>;
};

export default Pagination;
