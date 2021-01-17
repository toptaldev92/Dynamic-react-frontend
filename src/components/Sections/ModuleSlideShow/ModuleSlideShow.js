import dynamic from 'next/dynamic'
import { ModuleSlideShowContainer } from "./style";
import SectionsWrapper from "../../Sections/SectionsWrapper";
import $ from 'jquery';

const ModuleSlideShow = (props) => {

  if(props.boxes) {
    const sectionComponents = {
      module_website_image: dynamic(() => import("components/Common").then((sections) => sections.WebsiteImage)),
    }

    let slideDisplayVal = 0;
    const boxLength = props.boxes.length;
    let multiBoxWidth = 0;
    let multiSlideWidth = 0;
    let multiSlideWindowWidth = window.innerWidth;

    if (props.setting.width) {
      let settingWidth = props.setting.width;
      if(settingWidth.includes("%")){
        multiSlideWindowWidth = multiSlideWindowWidth * parseInt(settingWidth) / 100;
      } else {
        multiSlideWindowWidth = parseInt(settingWidth);
      }
    }

    const navigationPrev = () => {
      let preSlideDisplayVal = slideDisplayVal;
      slideDisplayVal--;
      if (slideDisplayVal < 0) {
        slideDisplayVal = slideDisplayVal + boxLength;
      }

      slideDisplayVal = slideDisplayVal % boxLength;

      if(props.slideType === "Single Type") {
        $(".slide-show-content-box" + props.slideShowId).css("z-index", 1);
        $(".slide-show-content-box" + props.slideShowId).css("animation", "");
        $(".slide-show-content-box" + props.slideShowId).eq(preSlideDisplayVal).css("z-index", 3);
        $(".slide-show-content-box" + props.slideShowId).eq(slideDisplayVal).css("z-index", 5);
        $(".slide-show-content-box" + props.slideShowId).eq(slideDisplayVal).css("animation", props.animationType + " 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both");
        $(".slide-show-content-box" + props.slideShowId).eq(slideDisplayVal).css("-webkit-animation", props.animationType + " 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both");
      } else {
        let maxSlideMarginLeftPx = multiSlideWidth - multiSlideWindowWidth - parseInt(props.gapBetweenImages);
        let slideMarginLeft = multiBoxWidth * slideDisplayVal;
        if(slideMarginLeft > maxSlideMarginLeftPx) {
          slideMarginLeft = maxSlideMarginLeftPx;
        }
        let slideMarginLeftPx = "-" + slideMarginLeft + "px";
        $(".slide-show-content-multi--wrapper" + props.slideShowId + " ul").animate({"margin-left": slideMarginLeftPx}, "slow");
      }

      let dotImgSrc = 'images/dots/'+props.paginationIcon+'.svg';
      $(".slide-show-dot-image--cls" + props.slideShowId).attr("src", dotImgSrc);
      
      let strTemp = props.paginationIcon;

      if(strTemp.includes("solid")){
        strTemp = strTemp.replace("solid", "outline");
      } else if (strTemp.includes("outline")) {
        strTemp = strTemp.replace("outline", "solid");
      }

      dotImgSrc = 'images/dots/'+strTemp+'.svg';
      $(".slide-show-dot-image--cls" + props.slideShowId).eq(slideDisplayVal).attr("src", dotImgSrc);
    }

    const navigationNext = () => {
      let preSlideDisplayVal = slideDisplayVal;
      slideDisplayVal++;
      slideDisplayVal = slideDisplayVal % boxLength;

      if(props.slideType === "Single Type") {
        $(".slide-show-content-box" + props.slideShowId).css("z-index", 1);
        $(".slide-show-content-box" + props.slideShowId).css("animation", "");
        $(".slide-show-content-box" + props.slideShowId).eq(preSlideDisplayVal).css("z-index", 3);
        $(".slide-show-content-box" + props.slideShowId).eq(slideDisplayVal).css("z-index", 5);
        $(".slide-show-content-box" + props.slideShowId).eq(slideDisplayVal).css("animation", props.animationType + " 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both");
        $(".slide-show-content-box" + props.slideShowId).eq(slideDisplayVal).css("-webkit-animation", props.animationType + " 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both");
      } else {
        let maxSlideMarginLeftPx = multiSlideWidth - multiSlideWindowWidth - parseInt(props.gapBetweenImages);
        let slideMarginLeft = multiBoxWidth * slideDisplayVal;
        if(slideMarginLeft > maxSlideMarginLeftPx) {
          slideMarginLeft = maxSlideMarginLeftPx;
        }
        let slideMarginLeftPx = "-" + slideMarginLeft + "px";
        $(".slide-show-content-multi--wrapper" + props.slideShowId + " ul").animate({"margin-left": slideMarginLeftPx}, "slow");
      }
      

      let dotImgSrc = 'images/dots/'+props.paginationIcon+'.svg';
      $(".slide-show-dot-image--cls" + props.slideShowId).attr("src", dotImgSrc);
    
      let strTemp = props.paginationIcon;

      if(strTemp.includes("solid")){
        strTemp = strTemp.replace("solid", "outline");
      } else if (strTemp.includes("outline")) {
        strTemp = strTemp.replace("outline", "solid");
      }

      dotImgSrc = 'images/dots/'+strTemp+'.svg';
      $(".slide-show-dot-image--cls" + props.slideShowId).eq(slideDisplayVal).attr("src", dotImgSrc);      
    }

    const dotClick = num => () => {
      if(props.slideType === "Single Type") {
        $(".slide-show-content-box" + props.slideShowId).css("z-index", 1);
        $(".slide-show-content-box" + props.slideShowId).css("animation", "");
        $(".slide-show-content-box" + props.slideShowId).eq(slideDisplayVal).css("z-index", 3);
        $(".slide-show-content-box" + props.slideShowId).eq(num).css("z-index", 5);
        $(".slide-show-content-box" + props.slideShowId).eq(num).css("animation", props.animationType + " 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both");
        $(".slide-show-content-box" + props.slideShowId).eq(num).css("-webkit-animation", props.animationType + " 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both");
      } else {
        let maxSlideMarginLeftPx = multiSlideWidth - multiSlideWindowWidth - parseInt(props.gapBetweenImages);
        let slideMarginLeft = multiBoxWidth * num;
        if(slideMarginLeft > maxSlideMarginLeftPx) {
          slideMarginLeft = maxSlideMarginLeftPx;
        }
        let slideMarginLeftPx = "-" + slideMarginLeft + "px";
        $(".slide-show-content-multi--wrapper" + props.slideShowId + " ul").animate({"margin-left": slideMarginLeftPx}, "slow");
      }

      let dotImgSrc = 'images/dots/'+props.paginationIcon+'.svg';
      $(".slide-show-dot-image--cls" + props.slideShowId).attr("src", dotImgSrc);
      
      let strTemp = props.paginationIcon;

      if(strTemp.includes("solid")){
        strTemp = strTemp.replace("solid", "outline");
      } else if (strTemp.includes("outline")) {
        strTemp = strTemp.replace("outline", "solid");
      }

      dotImgSrc = 'images/dots/'+strTemp+'.svg';
      $(".slide-show-dot-image--cls" + props.slideShowId).eq(num).attr("src", dotImgSrc);

      slideDisplayVal = num;
    }

    if(props.slideType === "Single Type" && props.autoPlayState === "Turn On") {
      setInterval(
        function(){ 
          let preSlideDisplayVal = slideDisplayVal;
          slideDisplayVal++;
          slideDisplayVal = slideDisplayVal % boxLength;
          $(".slide-show-content-box" + props.slideShowId).css("z-index", 1);
          $(".slide-show-content-box" + props.slideShowId).css("animation", "");
          $(".slide-show-content-box" + props.slideShowId).eq(preSlideDisplayVal).css("z-index", 3);
          $(".slide-show-content-box" + props.slideShowId).eq(slideDisplayVal).css("z-index", 5);
          $(".slide-show-content-box" + props.slideShowId).eq(slideDisplayVal).css("animation", props.animationType + " 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both");
          $(".slide-show-content-box" + props.slideShowId).eq(slideDisplayVal).css("-webkit-animation", props.animationType + " 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both");
        
          let dotImgSrc = 'images/dots/'+props.paginationIcon+'.svg';
          $(".slide-show-dot-image--cls" + props.slideShowId).attr("src", dotImgSrc);
        
          let strTemp = props.paginationIcon;

          if(strTemp.includes("solid")){
            strTemp = strTemp.replace("solid", "outline");
          } else if (strTemp.includes("outline")) {
            strTemp = strTemp.replace("outline", "solid");
          }

          dotImgSrc = 'images/dots/'+strTemp+'.svg';
          $(".slide-show-dot-image--cls" + props.slideShowId).eq(slideDisplayVal).attr("src", dotImgSrc);  
        }
        , props.autoPlayDuration
      );
    }

    if(props.slideType === "Multi Type") {
      multiBoxWidth = props.multiImageWidth ? parseInt(props.multiImageWidth) + parseInt(props.gapBetweenImages) : 800 + parseInt(props.gapBetweenImages);
      multiSlideWidth = multiBoxWidth * boxLength;
      let multiSlideWidthPx = "" + multiSlideWidth + "px";
      props = {
        ...props,
        multiSlideWidth: multiSlideWidthPx
      }
    }

    return (
      <ModuleSlideShowContainer {...props}>

        {props.slideType === "Single Type" ? 
        
          <div className={`slide-show-content--wrapper`}>
            {props.boxes.map((_box, _i) => {
              const Content = sectionComponents[_box.moduleName];

              let boxzIndex = 1;
              if(_i == 0) {
                boxzIndex = 5;
              }

              return (
                <div key={_i} className={'slide-show-content-box slide-show-content-box' + props.slideShowId} style={{zIndex : boxzIndex}}>
                  <Content {..._box.module}/>
                </div>
              )
            })}
            <span className="slide-show-arrow-image--wrapper" >
              <img className="slide-show-arrow-image--left" src={'images/arrows/'+props.navigationIcon+'-left.svg'} onClick={navigationPrev} alt="" />
              <img className="slide-show-arrow-image--right" src={'images/arrows/'+props.navigationIcon+'-right.svg'} onClick={navigationNext} alt="" />
            </span>
            <span className="slide-show-dot-image--wrapper" >
                <ul>
                  {props.boxes.map((_box, _i) => {

                    let dotImgSrc = 'images/dots/'+props.paginationIcon+'.svg';
                    if(_i == 0) {
                      let strTemp = props.paginationIcon;

                      if(strTemp.includes("solid")){
                        strTemp = strTemp.replace("solid", "outline");
                      } else if (strTemp.includes("outline")) {
                        strTemp = strTemp.replace("outline", "solid");
                      }

                      dotImgSrc = 'images/dots/'+strTemp+'.svg';
                    }

                    return (
                      <li key = {_i}><img alt="" onClick={dotClick(_i)} src={dotImgSrc} className={"slide-show-dot-image--cls slide-show-dot-image--cls" + props.slideShowId} /></li>
                    )
                  })}
                </ul>
            </span>
          </div>
        
        : 
          <div className={`slide-show-content--wrapper`}>
            <div className={'slide-show-content-multi--wrapper slide-show-content-multi--wrapper' + props.slideShowId}>
              <ul>
                {props.boxes.map((_box, _i) => {
                  const Content = sectionComponents[_box.moduleName];

                  return (
                    <li key={_i}>
                      <Content {..._box.module}/>
                    </li>
                  )
                })}
              </ul>
            </div>
            <span className="slide-show-arrow-image--wrapper" >
              <img className="slide-show-arrow-image--left" src={'images/arrows/'+props.navigationIcon+'-left.svg'} onClick={navigationPrev} alt="" />
              <img className="slide-show-arrow-image--right" src={'images/arrows/'+props.navigationIcon+'-right.svg'} onClick={navigationNext} alt="" />
            </span>
            <span className="slide-show-dot-image--wrapper" >
                <ul>
                  {props.boxes.map((_box, _i) => {

                    let dotImgSrc = 'images/dots/'+props.paginationIcon+'.svg';
                    if(_i == 0) {
                      let strTemp = props.paginationIcon;

                      if(strTemp.includes("solid")){
                        strTemp = strTemp.replace("solid", "outline");
                      } else if (strTemp.includes("outline")) {
                        strTemp = strTemp.replace("outline", "solid");
                      }

                      dotImgSrc = 'images/dots/'+strTemp+'.svg';
                    }
                    return (
                      <li key = {_i}><img alt="dots" onClick={dotClick(_i)} src={dotImgSrc} className={"slide-show-dot-image--cls slide-show-dot-image--cls" + props.slideShowId} alt="" /></li>
                    )
                  })}
                </ul>
            </span>
          </div>

        }

        
      </ModuleSlideShowContainer>
    )
  } else {
    return (<></>)
  }
  
};

export default SectionsWrapper(ModuleSlideShow);