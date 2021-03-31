import React, { useState, useEffect } from 'react';
import { useTable, useGlobalFilter, usePagination } from 'react-table'
import { Link } from "react-router-dom";

const Posts = (props) => {
    const [postData, setPostData] = useState([]);

    const columns = React.useMemo(
        () => [
            {
                Header: 'Post ID',
                accessor: 'id',
            },
            {
                Header: 'Post Title',
                accessor: 'title',
            },

            {
                Header: 'Body',
                accessor: 'body',
            },
        ],
        []
    )
    useEffect(() => {
        (async () => {
            const response = await fetch("https://gorest.co.in/public-api/posts");
            const postData = await response.json();
            console.log("users", postData.data);
            console.log("users from state ", postData.data)
            setPostData(postData.data);
        })();
    }, []);



    const tableInstance = useTable({
        columns,
        data: postData
    }, useGlobalFilter, usePagination)


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        rows,
        nextPage,
        canNextPage,
        canPreviousPage,
        previousPage,
        pageOptions,
        setPageSize,
        prepareRow,
        state,
    } = tableInstance



    const {  pageIndex, pageSize } = state

    return (
        <div >
            <div className="d-flex justify-content-between px-5 mt-4">
            <div className="font-weight-bold">Posts</div>
            <div>
                show {pageSize} of {rows.length}
                <select value={pageSize}
                    onChange={(e) => { setPageSize(Number(e.target.value)) }} >
                    {[3, 5, 10, 20].map((pageSize) => (

                        <option>
                            {pageSize}
                        </option>
                    ))}

                </select>
                per page
                </div>
                </div>
            <div className="d-flex justify-content-center">
                <table {...getTableProps()} className="container m-3 text-center shadow-lg">
                    <thead>
                        {// Loop over the header rows
                            headerGroups.map(headerGroup => (
                                // Apply the header row props
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {// Loop over the headers in each row
                                        headerGroup.headers.map(column => (
                                            // Apply the header cell props
                                            <th {...column.getHeaderProps()}>
                                                {// Render the header
                                                    column.render('Header')}
                                            </th>
                                        ))}
                                </tr>
                            ))}
                    </thead>

                    <tbody {...getTableBodyProps()}>
                        {
                            page.map(row => {

                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {
                                            row.cells.map(cell => {

                                                return (
                                                    <React.Fragment>

                                                        <td {...cell.getCellProps()}>
                                                            <Link to='/comments'className="postsLink">
                                                                {
                                                                    cell.render('Cell')}

                                                            </Link>
                                                        </td>

                                                    </React.Fragment>
                                                )
                                            })}
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
            <div className="text-center">

                <button className="rounded" onClick={() => previousPage()} disabled={!canPreviousPage}>
                    <i class="fas fa-long-arrow-alt-left"></i>
                </button>
                <span>

                    page {''}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                </span>
                <button className="rounded" onClick={() => nextPage()} disabled={!canNextPage}>
                    <i class="fas fa-long-arrow-alt-right"></i>
                </button>

            </div>
        </div>
    );
};

export default Posts;