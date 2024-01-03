import React from 'react'
import Skill from '../Shared/Skill'
import { ServicesData } from '../../constant'
import Template from '../Shared/Template'

const Service = () => {
    return (
        <Template subTitle='portfolio' title='Portfolio'>
            <section className='h-full ' id='service'>
          <Skill skillData={ServicesData}/>
        </section>
        </Template>
    )
}

export default Service
