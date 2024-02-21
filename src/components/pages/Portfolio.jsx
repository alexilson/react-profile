import Project from '../Project'
import allProjects from '../../../models'

function Portfolio() {

    return (
        <div>
            <p>Portfolio</p>
            {allProjects.map((project, index) =>  (<Project key={index} project={project} />) )}
        </div>
    );

}

export default Portfolio;