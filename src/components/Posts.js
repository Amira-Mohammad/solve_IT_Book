import React, { useState, useEffect, useContext } from 'react';
import { useTable, useGlobalFilter, usePagination } from 'react-table'
import { Link, useParams, useHistory } from "react-router-dom";
import { UserContext } from './HelperContext'


const Posts = (props) => {
    console.log("useHistory from post", useHistory())
    const history = useHistory()
    const { userData } = useContext(UserContext);
    //console.log("cccccccccccccc",userData)
    const [postData, setPostData] = useState([]);
    const { id } = useParams()
    //history.push("/posts/" + id)
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
            console.log("dataaaaaaaaaaaaaa", postData.data);
            console.log("dataaaaaaaaaaaaaa from state ", postData.data)
            const filterdData = postData.data.filter(post => {
                // console.log('post =>', post.user_id)
                // console.log('id =>', id)
                if (post.user_id === +id) {
                    return post
                }
            })

            setPostData(filterdData);
            console.log("ssssssssssssss", filterdData)


        })();
    }, []);

    const displayUserData = (userData) => {
        let user;
        // console.log("propsssssssssssssssssssssssssssss")
        userData.forEach(userObj => {
            if (userObj.id === +id) {
                user = userObj

            }

        });
        return user
    }
    const renderedUser = displayUserData(userData)
    console.log("renderedUser", renderedUser)
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



    const { pageIndex, pageSize } = state

    return (
        <div>

            <button onClick={() => {
                history.goBack()
            }} className="mx-5 mt-4 btn border bg-light">back <i class="fas fa-undo-alt"></i></button>

            <hr className="mx-5" />
            <div className="d-flex mx-5 mt-4">
                <div className="Avatar bg-light text-center pt-4 mx-3"><i class="far fa-user fa-3x"></i></div>
                <div className="d-flex flex-column">
                    <div className="mt-4 font-weight-bold">{renderedUser.name}</div>
                    <div className="text-muted">{renderedUser.email}</div>
                    <div className="activeIcon">{renderedUser.status}</div>
                </div>
            </div>

            <div className="d-flex border-bottom mx-5 p-4">
                <div className="cube border-right px-4 d-flex flex-column justify-content-between">
                    <div>TOTAL NO OF POSTS</div>
                    <div className="font-weight-bold">{postData.length}</div>
                </div>

                <div className="cube border-right px-4 d-flex flex-column justify-content-between" >
                    <div>CURRENT PAGE NO OF POSTS</div>
                    <div className="font-weight-bold text-danger">{pageSize}</div>
                </div>
                <div className="cube border-right px-4 d-flex flex-column justify-content-between">
                    <div>USER CREATION DATE</div>
                    <div className="font-weight-bold overflow-hidden">{renderedUser.created_at}</div>
                </div>
                <div className="cube  px-4 d-flex flex-column justify-content-between">
                    <div>USER UPDATE DATE</div>
                    <div className="font-weight-bold overflow-hidden">{renderedUser.updated_at}</div>
                </div>

            </div>

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

                                                            <Link to={'/comments/' + row.original.id} className="postsLink">
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