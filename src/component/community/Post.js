import React from "react";
import {Link} from "react-router-dom";

const Post = ({key, list}) => {

    const checkBoardType = (data) => {
        if(data === 'note') {
            return <span className="text-red-500">공지사항을</span>;
        } else if(data === 'stock-post') {
            return "종목 토론방에";
        } else if (data === 'post') {
            return "자유 게시판에";
        }
    }

    return(
        <Link to={"/community/"+list.board_id}>
            <div className="w-96 shadow-xl rounded-2xl bg-white my-3 p-2" key={key} style={{height:"100px"}}>
                <p className="text-sm">🥑{list.nickname}<span className="text-gray-400 text-sm">님이 {checkBoardType(list.board_type)} 작성했습니다.</span></p>
                <p className="text-md truncate ...">{list.title}</p>
                <p className="text-sm text-gray-600 truncate ...">{list.content}</p>
                <span className="text-xs bg-gray-100 drop-shadow-md rounded-2xl p-1">👍 {list.post_like}</span>
                <span className="ml-2 text-xs bg-gray-100 drop-shadow-md rounded-2xl p-1">👀 {list.view}</span>
            </div>
        </Link>
    )
}

export default Post;