import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i += 1) {
        pageNumber.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumber.map((num) => (
                    <li className="page-item" key={num}>
                        <a onClick={() => paginate(num)} href="!#" className="page-link">
                            {num}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
