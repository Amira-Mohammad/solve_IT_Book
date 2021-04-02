import React, { useState, useEffect, createContext, useContext } from 'react';
import { useTable, useGlobalFilter, usePagination } from 'react-table'
import { UserContext } from './HelperContext'
import { Link } from "react-router-dom";
import Filteration from './Filteration'
import './Users.css'
//import UserContext from './HelperContext'

//const UserContext = createContext();

function Users(props) {

    const { setData } = useContext(UserContext);

    const [userData, setUserData] = useState([]);

    const columns = React.useMemo(
        () => [
            {
                Header: '#',
                accessor: 'id',
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
                Header: 'Gender',
                accessor: 'gender',
            },

            {
                Header: 'Status',
                accessor: 'status',
                Cell: (row) =>
                    row.value == 'Active' ? (

                        <div className="d-flex">
                            <i class="fas fa-circle mt-1 mx-1 activeIcon"></i>
                            <span className="activeIcon">{row.value}</span>


                        </div>) : (<div className="d-flex">
                            <i class="fas fa-circle mt-1 mx-1"></i>
                            <span>{row.value}</span>


                        </div>)
            },

            {
                Header: 'Create Date',
                accessor: 'created_at',
            },

            {
                Header: 'Update Date',
                accessor: 'updated_at',
            },
        ],
        []
    )
    useEffect(() => {
        (async () => {
            const response = await fetch("https://gorest.co.in/public-api/users");
            const usersData = await response.json();
            console.log("users", usersData.data);
            console.log("users from state ", usersData.data)
            setUserData(usersData.data);
            // const user_data = React.useContext(UserContext);
        })();
    }, []);

    // const getUsers = async () =>{
    //     const response = await fetch ("https://gorest.co.in/public-api/users");
    //     const usersData = await response.json();
    //     console.log("users" , usersData)
    //     return usersData
    // }

    setData(userData)
    const tableInstance = useTable({
        columns,
        data: userData
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
        setGlobalFilter
    } = tableInstance



    const { globalFilter, pageIndex, pageSize } = state
    return (
        <div>
            <div className="d-flex justify-content-between px-5 mt-4">
                <Filteration className="" filter={globalFilter} setFilter={setGlobalFilter} />
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
                                                            <Link to={'/posts/' + row.original.id} className="postsLink">
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
}

export { Users };