import React, { useState, useEffect } from 'react';
import { useTable, useGlobalFilter, usePagination } from 'react-table';
import { Link } from "react-router-dom";

const Comments = () => {
    const [commentData, setCommentData] = useState([]);

    const columns = React.useMemo(
        () => [
            {
                Header: '#',
                accessor: 'post_id',
            },
            {
                Header: 'Name',
                accessor: 'name',
            },

            {
                Header: 'Email address',
                accessor: 'email',
            },
            {
                Header: 'Body',
                accessor: 'body',
            },
            {
                Header: 'Created At',
                accessor: 'created_at',
            },
            {
                Header: 'Updated At',
                accessor: 'updated_at',
            },
        ],
        []
    )
    useEffect(() => {
        (async () => {
            const response = await fetch("https://gorest.co.in/public-api/comments");
            const commentData = await response.json();
            console.log("users", commentData.data);
            console.log("users from state ", commentData.data)
            setCommentData(commentData.data);
        })();
    }, []);



    const tableInstance = useTable({
        columns,
        data: commentData
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



    const { pageIndex, pageSize } = state
    return (
        <div>
            <Link to='/posts:id' className="postsLink">
                <button className="mx-5 mt-4 btn border bg-light">back <i class="fas fa-undo-alt"></i></button>
            </Link>
            <hr className="mx-5" />
            <div className="d-flex justify-content-between px-5 mt-4">
                <div className="font-weight-bold">Comments</div>
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

                                                            {
                                                                cell.render('Cell')}


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

export default Comments;