import {Component} from 'react'
import SlideListItem from '../SlideListItem'
import SlideContext from '../../context/SlideContext'
import Slide from '../Slide'
import './index.css'

class Slides extends Component {
  render() {
    return (
      <SlideContext.Consumer>
        {value => {
          const {initialList} = value
          return (
            <div className="slides-container">
              <ol className="slides-list">
                {initialList.map((eachSlide, index) => (
                  <SlideListItem
                    details={eachSlide}
                    key={eachSlide.id}
                    serialNumber={index + 1}
                  />
                ))}
              </ol>
              <Slide />
            </div>
          )
        }}
      </SlideContext.Consumer>
    )
  }
}

export default Slides
