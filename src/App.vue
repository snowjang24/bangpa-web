<template>
  <div id="bangpa">
    <header id="header">
      <NavigationBar/>
    </header>
    <div id="body-container">
      <router-view/>
    </div>
    <footer id="footer">
      <Footer/>
    </footer>
  </div>
</template>
<script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=06bupc5i6j"></script>
<script>
import NavigationBar from './components/NavigationBar.vue'
import Footer from './components/Footer.vue'


export default {
  
  name: 'bangpa',
  components: {
    NavigationBar,
    Footer
  }
}
</script>

<style>
@font-face { 
  font-family: 'NanumSquareRound'; 
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff'); 
  font-weight: normal; 
  font-style: normal; 
}

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
    font-size: 100%;
    color: #4A4A4A;
	font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
  text-decoration: none; 
  cursor: pointer;
}

select {
  color:#4a4a4a;
  width:100%;
  font-size:16px;
  border: none;
  box-shadow: none;
  background-color: transparent;
  background-image: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer; 
}
button:focus,select:focus {
  outline: none;
}
select::-ms-expand { 
  display: none;
}
input:focus{
  outline: none;
}
input[type="button" i], input[type="submit" i], input[type="reset" i], input[type="file" i]::-webkit-file-upload-button, button {
  border:none;
}

/* sticky footer */
#bangpa{
  height:100%;
  display: flex;
  flex-direction: column;
}
#header{
  height: 48px;
  border-bottom: 1px solid #474747;
}
#body-container{
  flex: 1 0 auto;
}
#footer{
  flex-shrink: 0;
}

.hashtag-item{
        color: #0080FF;
        border: 1px solid #0080FF;
        float: left;
        padding: 2px 8px;
        border-radius: 2px;
        margin-right:4px;
    }
</style>
