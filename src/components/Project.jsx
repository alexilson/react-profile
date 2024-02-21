function Project(props) {

    return (
        <div>
            <h2>
                {props.project.title}
            </h2>
            <div>
                <img src={props.project.image}></img>
            </div>
            <a href={props.project.liveUrl}>Live Site</a>
            <a href={props.project.githubUrl}>GitHub Repository</a>
        </div>
    )
}

export default Project;