import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
class Header extends React.Component {
    constructor(props) {
      super(props)

      this.state = { // class 안의 instance객체가 react 어딘가에 저장되어 있고 그 것을 this라고 불러서 씀
        hasScrolled: false
      }
    }

    componentDidMount() { // 비동기함수라고 해도 리액트는 기다려주지 않는다.
      window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = (event) => {
      const scrollTop = window.pageYOffset

      if (scrollTop > 50) {
        this.setState({ hasScrolled: true })
      } else {
        this.setState({ hasScrolled: false })
      }
    }

    render() { // 화면을 다시 그리거나 어떻게 그리느냐에 따라 state가 날아가거나 유지. 화면에 컴포넌트가 표시 되어야 그에 해당하는 state도 살아있는 것. 
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" /></Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/buy"><button>Buy</button></Link>
        </div>
      </div>
    )
  }
}
// 함수형 컴포넌트는 instance를 붙일 수 없기 때문에 state를 가질 수 없는 것.
// react에서 화면과 상태는 밀접한 관계를 가짐.
// key를 바꾸면 그에 따른 state도 다 날아가기 때문에 상태 초기화할 때 활용하기도.

export default Header
