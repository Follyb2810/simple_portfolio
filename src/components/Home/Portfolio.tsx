
import Template from '../Shared/Template'
import Skill from '../Shared/Skill'
import { workDone } from '../../constant'

const Portfolio = () => {
    return (
        <Template subTitle='my job' title='Portfolio'>
            
        <section className='h-full ' id='portfolio'>
            <Skill skillData={workDone}/>
        </section>
        </Template>
    )
}

export default Portfolio
