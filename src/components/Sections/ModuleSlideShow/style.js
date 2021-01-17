import styled from 'styled-components';

export const ModuleSlideShowContainer = styled.div`
  width: 100%;

  .slide-show-arrow-image--wrapper {
    position: absolute;
    margin-top: ${props => props.navigationIconFromTop ? props.navigationIconFromTop : "270px" };
    width: ${props => props.setting.width ? props.setting.width : "100%" };
    z-index: 7;
  }

  .slide-show-arrow-image--left {
    width: ${props => props.navigationIconWidth ? props.navigationIconWidth : "50px" };
    margin-left: ${props => props.navigationIconLeftRight ? props.navigationIconLeftRight : "50px" };
    cursor: pointer;
  }

  .slide-show-arrow-image--right {
    float: right;
    width: ${props => props.navigationIconWidth ? props.navigationIconWidth : "50px" };
    margin-right: ${props => props.navigationIconLeftRight ? props.navigationIconLeftRight : "50px" };
    cursor: pointer;
  }

  .slide-show-dot-image--wrapper {
    position: absolute;
    margin-top: ${props => props.paginationIconTop ? props.paginationIconTop : "550px" };
    width: ${props => props.setting.width ? props.setting.width : "100%" };
    z-index: 9;
  }

  .slide-show-dot-image--wrapper ul {
    list-style: outside none none;
    padding: 0px;
    text-align: center;
  }

  .slide-show-dot-image--wrapper ul li {
    display: inline;
    margin-right: 10px;
  }

  .slide-show-dot-image--wrapper ul li img {
    width: ${props => props.paginationIconWidth ? props.paginationIconWidth : "30px" };
    cursor: pointer;
  }

  .website-image--image {
    height: ${props => props.setting.height ? props.setting.height: "600px" };
  }

  .slide-show-content--wrapper {
    margin-bottom: 50px;
    height: ${props => props.setting.height ? props.setting.height: "600px" };
  }

  .slide-show-content-box {
    position: absolute;
    width: ${props => props.setting.width ? props.setting.width: "100%" };
  }

  .slide-show-content-multi--wrapper {
    width: ${props => props.setting.width ? props.setting.width: "100%" };
    overflow-x: hidden;
    position: absolute;
  }

  .slide-show-content-multi--wrapper ul {
    list-style: outside none none;
    width: ${props => props.multiSlideWidth ? props.multiSlideWidth: "100%" };
    padding: 0;
  }

  .slide-show-content-multi--wrapper ul li {
    display: inline-block;
    margin-right: ${props => props.gapBetweenImages};
    width: ${props => props.multiImageWidth ? props.multiImageWidth: "800px" };
  }

  

  /**
   * ----------------------------------------
   * animation Fade-In
   * ----------------------------------------
   */
  @-webkit-keyframes Fade-In {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes Fade-In {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /**
   * ----------------------------------------
   * animation Fade-In-Forward
   * ----------------------------------------
   */
  @-webkit-keyframes Fade-In-Forward {
    0% {
      -webkit-transform: translateZ(-80px);
              transform: translateZ(-80px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
              transform: translateZ(0);
      opacity: 1;
    }
  }
  @keyframes Fade-In-Forward {
    0% {
      -webkit-transform: translateZ(-80px);
              transform: translateZ(-80px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
              transform: translateZ(0);
      opacity: 1;
    }
  }

  
  /**
    * ----------------------------------------
    * animation Fade-In-Back
    * ----------------------------------------
  */
  @-webkit-keyframes Fade-In-Back {
    0% {
      -webkit-transform: translateZ(80px);
              transform: translateZ(80px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
              transform: translateZ(0);
      opacity: 1;
    }
  }
  @keyframes Fade-In-Back {
    0% {
      -webkit-transform: translateZ(80px);
              transform: translateZ(80px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
              transform: translateZ(0);
      opacity: 1;
    }
  }


  /**
   * ----------------------------------------
   * animation Fade-In-Left
   * ----------------------------------------
   */
  @-webkit-keyframes Fade-In-Left {
    0% {
      -webkit-transform: translateX(-50px);
              transform: translateX(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes Fade-In-Left {
    0% {
      -webkit-transform: translateX(-50px);
              transform: translateX(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
      opacity: 1;
    }
  }

  /**
   * ----------------------------------------
   * animation Fade-In-Right
   * ----------------------------------------
   */
  @-webkit-keyframes Fade-In-Right {
    0% {
      -webkit-transform: translateX(50px);
              transform: translateX(50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes Fade-In-Right {
    0% {
      -webkit-transform: translateX(50px);
              transform: translateX(50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
      opacity: 1;
    }
  }

  /**
   * ----------------------------------------
   * animation Slide-In-Top
   * ----------------------------------------
   */
  @-webkit-keyframes Slide-In-Top {
    0% {
      -webkit-transform: translateY(-1000px);
              transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes Slide-In-Top {
    0% {
      -webkit-transform: translateY(-1000px);
              transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      opacity: 1;
    }
  }

  /**
   * ----------------------------------------
   * animation Slide-In-Bottom
   * ----------------------------------------
   */
  @-webkit-keyframes Slide-In-Bottom {
    0% {
      -webkit-transform: translateY(1000px);
              transform: translateY(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes Slide-In-Bottom {
    0% {
      -webkit-transform: translateY(1000px);
              transform: translateY(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      opacity: 1;
    }
  }

  /**
   * ----------------------------------------
   * animation Slide-In-Left
   * ----------------------------------------
   */
  @-webkit-keyframes Slide-In-Left {
    0% {
      -webkit-transform: translateX(-1000px);
              transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes Slide-In-Left {
    0% {
      -webkit-transform: translateX(-1000px);
              transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
      opacity: 1;
    }
  }

  /**
   * ----------------------------------------
   * animation Slide-In-Right
   * ----------------------------------------
   */
  @-webkit-keyframes Slide-In-Right {
    0% {
      -webkit-transform: translateX(1000px);
              transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes Slide-In-Right {
    0% {
      -webkit-transform: translateX(1000px);
              transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
      opacity: 1;
    }
  }

  /**
   * ----------------------------------------
   * animation Scale-In-Center
   * ----------------------------------------
   */
  @-webkit-keyframes Scale-In-Center {
    0% {
      -webkit-transform: scale(0);
              transform: scale(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes Scale-In-Center {
    0% {
      -webkit-transform: scale(0);
              transform: scale(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
      opacity: 1;
    }
  }

  /**
   * ----------------------------------------
   * animation Scale-In-Top
   * ----------------------------------------
   */
  @-webkit-keyframes Scale-In-Top {
    0% {
      -webkit-transform: scale(0);
              transform: scale(0);
      -webkit-transform-origin: 50% 0%;
              transform-origin: 50% 0%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transform-origin: 50% 0%;
              transform-origin: 50% 0%;
      opacity: 1;
    }
  }
  @keyframes Scale-In-Top {
    0% {
      -webkit-transform: scale(0);
              transform: scale(0);
      -webkit-transform-origin: 50% 0%;
              transform-origin: 50% 0%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transform-origin: 50% 0%;
              transform-origin: 50% 0%;
      opacity: 1;
    }
  }

  /**
   * ----------------------------------------
   * animation Scale-In-Bottom
   * ----------------------------------------
   */
  @-webkit-keyframes Scale-In-Bottom {
    0% {
      -webkit-transform: scale(0);
              transform: scale(0);
      -webkit-transform-origin: 50% 100%;
              transform-origin: 50% 100%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transform-origin: 50% 100%;
              transform-origin: 50% 100%;
      opacity: 1;
    }
  }
  @keyframes Scale-In-Bottom {
    0% {
      -webkit-transform: scale(0);
              transform: scale(0);
      -webkit-transform-origin: 50% 100%;
              transform-origin: 50% 100%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transform-origin: 50% 100%;
              transform-origin: 50% 100%;
      opacity: 1;
    }
  }

  /**
   * ----------------------------------------
   * animation Scale-In-Left
   * ----------------------------------------
   */
  @-webkit-keyframes Scale-In-Left {
    0% {
      -webkit-transform: scale(0);
              transform: scale(0);
      -webkit-transform-origin: 0% 50%;
              transform-origin: 0% 50%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transform-origin: 0% 50%;
              transform-origin: 0% 50%;
      opacity: 1;
    }
  }
  @keyframes Scale-In-Left {
    0% {
      -webkit-transform: scale(0);
              transform: scale(0);
      -webkit-transform-origin: 0% 50%;
              transform-origin: 0% 50%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transform-origin: 0% 50%;
              transform-origin: 0% 50%;
      opacity: 1;
    }
  }
  
  /**
    * ----------------------------------------
    * animation Scale-In-Right
    * ----------------------------------------
    */
  @-webkit-keyframes Scale-In-Right {
    0% {
      -webkit-transform: scale(0);
              transform: scale(0);
      -webkit-transform-origin: 100% 50%;
              transform-origin: 100% 50%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transform-origin: 100% 50%;
              transform-origin: 100% 50%;
      opacity: 1;
    }
  }
  @keyframes Scale-In-Right {
    0% {
      -webkit-transform: scale(0);
              transform: scale(0);
      -webkit-transform-origin: 100% 50%;
              transform-origin: 100% 50%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transform-origin: 100% 50%;
              transform-origin: 100% 50%;
      opacity: 1;
    }
  }
  
  /**
    * ----------------------------------------
    * animation Slit-In-Vertical
    * ----------------------------------------
    */
  @-webkit-keyframes Slit-In-Vertical {
    0% {
      -webkit-transform: translateZ(-800px) rotateY(90deg);
              transform: translateZ(-800px) rotateY(90deg);
      opacity: 0;
    }
    54% {
      -webkit-transform: translateZ(-160px) rotateY(87deg);
              transform: translateZ(-160px) rotateY(87deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateZ(0) rotateY(0);
              transform: translateZ(0) rotateY(0);
    }
  }
  @keyframes Slit-In-Vertical {
    0% {
      -webkit-transform: translateZ(-800px) rotateY(90deg);
              transform: translateZ(-800px) rotateY(90deg);
      opacity: 0;
    }
    54% {
      -webkit-transform: translateZ(-160px) rotateY(87deg);
              transform: translateZ(-160px) rotateY(87deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateZ(0) rotateY(0);
              transform: translateZ(0) rotateY(0);
    }
  }
  
  /**
    * ----------------------------------------
    * animation Slit-In-Horizontal
    * ----------------------------------------
    */
  @-webkit-keyframes Slit-In-Horizontal {
    0% {
      -webkit-transform: translateZ(-800px) rotateX(90deg);
              transform: translateZ(-800px) rotateX(90deg);
      opacity: 0;
    }
    54% {
      -webkit-transform: translateZ(-160px) rotateX(87deg);
              transform: translateZ(-160px) rotateX(87deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateZ(0) rotateX(0);
              transform: translateZ(0) rotateX(0);
    }
  }
  @keyframes Slit-In-Horizontal {
    0% {
      -webkit-transform: translateZ(-800px) rotateX(90deg);
              transform: translateZ(-800px) rotateX(90deg);
      opacity: 0;
    }
    54% {
      -webkit-transform: translateZ(-160px) rotateX(87deg);
              transform: translateZ(-160px) rotateX(87deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateZ(0) rotateX(0);
              transform: translateZ(0) rotateX(0);
    }
  }
  
  /**
    * ----------------------------------------
    * animation Slit-In-Diagonal-Up
    * ----------------------------------------
    */
  @-webkit-keyframes Slit-In-Diagonal-Up {
    0% {
      -webkit-transform: translateZ(-800px) rotate3d(1, 1, 0, 90deg);
              transform: translateZ(-800px) rotate3d(1, 1, 0, 90deg);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
      opacity: 0;
    }
    54% {
      -webkit-transform: translateZ(-160px) rotate3d(1, 1, 0, 87deg);
              transform: translateZ(-160px) rotate3d(1, 1, 0, 87deg);
      -webkit-animation-timing-function: ease-in-out;
              animation-timing-function: ease-in-out;
      opacity: 1;
    }
    100% {
      -webkit-transform: translateZ(0) rotate3d(1, 1, 0, 0);
              transform: translateZ(0) rotate3d(1, 1, 0, 0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
  }
  @keyframes Slit-In-Diagonal-Up {
    0% {
      -webkit-transform: translateZ(-800px) rotate3d(1, 1, 0, 90deg);
              transform: translateZ(-800px) rotate3d(1, 1, 0, 90deg);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
      opacity: 0;
    }
    54% {
      -webkit-transform: translateZ(-160px) rotate3d(1, 1, 0, 87deg);
              transform: translateZ(-160px) rotate3d(1, 1, 0, 87deg);
      -webkit-animation-timing-function: ease-in-out;
              animation-timing-function: ease-in-out;
      opacity: 1;
    }
    100% {
      -webkit-transform: translateZ(0) rotate3d(1, 1, 0, 0);
              transform: translateZ(0) rotate3d(1, 1, 0, 0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
  }
  
  /**
    * ----------------------------------------
    * animation Slit-In-Diagonal-Down
    * ----------------------------------------
    */
  @-webkit-keyframes Slit-In-Diagonal-Down {
    0% {
      -webkit-transform: translateZ(-800px) rotate3d(-1, 1, 0, -90deg);
              transform: translateZ(-800px) rotate3d(-1, 1, 0, -90deg);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
      opacity: 0;
    }
    54% {
      -webkit-transform: translateZ(-160px) rotate3d(-1, 1, 0, -87deg);
              transform: translateZ(-160px) rotate3d(-1, 1, 0, -87deg);
      -webkit-animation-timing-function: ease-in-out;
              animation-timing-function: ease-in-out;
      opacity: 1;
    }
    100% {
      -webkit-transform: translateZ(0) rotate3d(-1, 1, 0, 0);
              transform: translateZ(0) rotate3d(-1, 1, 0, 0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
  }
  @keyframes Slit-In-Diagonal-Down {
    0% {
      -webkit-transform: translateZ(-800px) rotate3d(-1, 1, 0, -90deg);
              transform: translateZ(-800px) rotate3d(-1, 1, 0, -90deg);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
      opacity: 0;
    }
    54% {
      -webkit-transform: translateZ(-160px) rotate3d(-1, 1, 0, -87deg);
              transform: translateZ(-160px) rotate3d(-1, 1, 0, -87deg);
      -webkit-animation-timing-function: ease-in-out;
              animation-timing-function: ease-in-out;
      opacity: 1;
    }
    100% {
      -webkit-transform: translateZ(0) rotate3d(-1, 1, 0, 0);
              transform: translateZ(0) rotate3d(-1, 1, 0, 0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
  }
 
`;
