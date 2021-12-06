import './card.css'
function Card(props) {
    const post = JSON.parse(props.post)
    return (
        <div className='post-card'>
            <div className='post-title'>{post.title}</div>
            <div className='post-sub'>
                <div className='post-author'>{post.author}</div>
                <div className='post-date'>{post.date}</div>
            </div>
            <div className='post-content'>{post.content}</div>
        </div>
    )
}

export default Card; 