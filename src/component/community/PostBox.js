import React, {useEffect, useState} from "react";
import CategoryBar from "./CategoryBar";
import Post from "./Post";
import {Link, useSearchParams} from "react-router-dom";
import axios from "axios";
import PaginationComponent from "./page/PaginationComponent";

const PostBox = () => {
    const [searchParams] = useSearchParams();
    const [posts, setPosts] = useState([]);
    const [fakePost, setFake] = useState([]);
    const [currentPosts, setCurrentPosts] = useState([]);
    const [page, setPage] = useState(1);
    const handlePerChange = (page) => {setPage(page)};
    const [postPerPage] = useState(5);
    const indexOfLastPost = page * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;

    useEffect(() => {
        const fetchBoardData = async () => {
             const data = await axios.get(process.env.REACT_APP_BACKEND_SERVER+'/board')
                .then((res) => {
                    if (searchParams.get('board') !== null) {
                        let filterData = res.data.reverse().filter((data) => {
                            if (searchParams.get('board') === data.board_type) {
                                return data;
                            }
                        });
                        setPosts(filterData);
                        setCurrentPosts(filterData.slice(indexOfFirstPost, indexOfLastPost));
                    } else {
                        setPosts(res.data.reverse());
                        setCurrentPosts(posts.slice(indexOfFirstPost, indexOfLastPost));
                    }
                })
        }
        fetchBoardData();
    }, [indexOfFirstPost, indexOfLastPost, page, currentPosts]);

    const filterPost = () => {
        if (searchParams.get('board') !== null) {
            let filterData = posts.filter((data) => {
                if (searchParams.get('board') === data.board_type) {
                    return data;
                }
            });
            setPosts(filterData);
            setCurrentPosts(filterData.slice(indexOfFirstPost, indexOfLastPost));
        }
    }

    return(
        <div className="border shadow-2xl mt-20 ml-20 drop-shadow-md rounded-xl bg-gray-50 mb-10" style={{height:"680px", width:"700px"}}>
            <div className="grid grid-cols-9 mt-4">
                <CategoryBar filterPost={filterPost} />
                <Link to="/community/write" className="col-start-8 bg-emerald-500 font-bold text-center px-2 py-2 rounded-2xl">글쓰기</Link>
            </div>
            <div className="flex justify-center">
                <div className="flex-col">
                    {
                        currentPosts.map((list, index) => {
                            return(<Post key={index} list={list}/>)
                        })
                    }
                </div>
            </div>
            <div className="flex justify-center">
                <PaginationComponent page={page} totalCount={posts.length} postPerPage={postPerPage} pageRangeDisplayed={5} handlePageChange={handlePerChange} />
            </div>
        </div>
    );
}

export default PostBox;