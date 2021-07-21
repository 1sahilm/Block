import React from 'react'

function Home() {
    return (
        <div>
                 <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">

                    

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                       <a class="row" href="/">
            <img src="assets/images/logo.png" alt="Block"/>
          </a>
                    </div>
                    <button type="button" id="sidebarCollapse" class="border-none">
                        <i class="fas fa-bars text-dark big-menu-bar"></i>
                       
                    </button>
                    <button class="btn btn-dark d-inline-block d-lg-none mr-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
                    </button>
                </div>
            </nav>

             <nav id="sidebar">
            <div id="dismiss">
                <i class="fas fa-arrow-left"></i>
            </div>

            <div class="sidebar-header">
                <h3>Menu</h3>
            </div>

            <ul class="list-unstyled components">
                <p>Dummy Heading</p>
                <li class="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#">Home 1</a>
                        </li>
                        <li>
                            <a href="#">Home 2</a>
                        </li>
                        <li>
                            <a href="#">Home 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">About</a>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="#">Page 1</a>
                        </li>
                        <li>
                            <a href="#">Page 2</a>
                        </li>
                        <li>
                            <a href="#">Page 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Portfolio</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>

            <ul class="list-unstyled CTAs">
                <li>
                    <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a>
                </li>
                <li>
                    <a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a>
                </li>
            </ul>
        </nav>

 <div class="wrapper">
         
       
         
        <div id="content">


<div class="image-slider">
  <div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
    <li data-target="#demo" data-slide-to="3"></li>
    <li data-target="#demo" data-slide-to="4"></li>
    <li data-target="#demo" data-slide-to="5"></li>
    <li data-target="#demo" data-slide-to="6"></li>
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="assets/images/1-en.jpg" alt="Los Angeles"/>
      <div class="carousel-caption">
        <h2>20-Bed Mobile Intensive Care Unit</h2>
      <p>The mobile critical care inpatient unit with 20 beds is intended for critical situations with a need  to solve expanding of the existing CCU of the given hospital. The CCU is suitable for infectious patients with the same diagnosis. The unit consists of: two 10-bed wards, nurses’ room, decontamination, filters and store rooms.</p>
      </div>   
    </div>
    <div class="carousel-item">
      <img src="assets/images/2.jpg" alt="Chicago"/>
      <div class="carousel-caption">
      <h2>BIM - Building Information Modeling</h2>
       <p>We work with the BIM system and support the digitization of the building industry. BIM serves as an open knowledge database and facilitates the sharing of information during the design phase, the construction phase, and after building is put into use.</p>
      </div>   
    </div>
    <div class="carousel-item">
      <img src="assets/images/3.jpg" alt="New York"/>
      <div class="carousel-caption">
        <h2>Pharmaindustrie, Biotechnologie, Medizintechnik</h2>
        <p>Comprehensive installations of buildings and technological units that are compliant with EU GMP and FDA regulations: Turnkey facilities, clean rooms, laboratories, HVAC, technological mains, product distribution systems, technological equipment, isolator technology.</p>
      </div>   
    </div>
    <div class="carousel-item">
      <img src="assets/images/4.jpg" alt="Los Angeles"/>
      <div class="carousel-caption">
       <h2>Healthcare</h2>
        <p>Comprehensive installations of buildings and technological units that are compliant with EU GMP and FDA regulations: Turnkey facilities, clean rooms, laboratories, HVAC, technological mains, product distribution systems, technological equipment, isolator technology.</p>
      </div>   
    </div>
    <div class="carousel-item">
      <img src="assets/images/5.jpg" alt="Chicago"/>
      <div class="carousel-caption">
       <h2>Microelectronics, Optics, Automotive Industry</h2>
       <p>Comprehensive installations of buildings and technological units that demand high levels of environmental purity and technological media: Turnkey buildings, large-capacity halls with controlled purity, special workplaces with the strictest demands on air cleanliness, temperature and humidity parameters.</p>
      </div>   
    </div>
    <div class="carousel-item">
      <img src="assets/images/6.jpg" alt="New York"/>
      <div class="carousel-caption">
        <h2>Science &amp; Research, Laboratories</h2>
       <p>Comprehensive installations of buildings and technological units, complex supplies of laboratory rooms with various operating requirements, supplies of KÖTTERMANN laboratory furnishings – unique laboratory furniture systems designed and made in Germany. A member of BLOCK Group since 2018.</p>
      </div>   
    </div>
  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
</div>

<section class="scope-of-activity mt-5">
  <div class="container">
    <div class="row">
     <div class="col-md-12">
        <h1 class="h1-heading text-blue mb-3">
        SCOPE OF ACTIVITY
      </h1>
     </div>
    </div>

<div class="row">
                    <a class="col-lg-3 col-md-4 col-xs-6 col-xxs-12 content__item mt-30" href="/our-offer-pharmacy">
          <div class="content__inner">
            <div class="references__img">
              <img src="assets/images/pharmacy.jpg" alt="assets/images/pharmacy.jpg"/>
            </div>
            <h3 class="mt-2 oblast-text pharmaceutics-color">
              Pharmaceutics<br/> Biotechnologies<br/> Healthcare devices            </h3>
          </div>
        </a>
              <a class="col-lg-3 col-md-4 col-xs-6 col-xxs-12 content__item mt-30" href="/our-offer-healthcare">
          <div class="content__inner">
            <div class="references__img">
              <img src="assets/images/healthcare.jpg" alt="assets/images/healthcare.jpg"/>
            </div>
            <h3 class="mt-2 oblast-text healthcare-color">
              Healthcare            </h3>
          </div>
        </a>
              <a class="col-lg-3 col-md-4 col-xs-6 col-xxs-12 content__item mt-30" href="/our-offer-microelectronics">
          <div class="content__inner">
            <div class="references__img">
              <img src="assets/images/microelectronics.jpg" alt="assets/images/microelectronics.jpg"/>
            </div>
            <h3 class="mt-2 oblast-text microelektronics-color">
              MICROELEKTRONICS<br/> OPTICS<br/> AUTOMOTIVE INDUSTRY           </h3>
          </div>
        </a>
              <a class="col-lg-3 col-md-4 col-xs-6 col-xxs-12 content__item mt-30" href="/our-offer-science">
          <div class="content__inner">
            <div class="references__img">
              <img src="assets/images/science_and_research.jpg" alt="assets/images/science_and_research.jpg"/>
            </div>
            <h3 class="mt-2 oblast-text science-color">
              SCIENCE AND RESEARCH            </h3>
          </div>
        </a>
          </div>

  </div>
</section>
<section class="company-section mt-5">
  <div class="container">
    <div class="row">
      
        <div class="media">
  <img src="assets/images/block_sidlo.jpg" alt="John Doe" class="col-md-4"/>
  <div class="media-body col-md-8">
    <h1 class="h1-heading text-blue">BLOCK® COMPANY</h1>
    <p>BLOCK® is respected, successful and innovative multi-national corporation with a history of operation in many countries since 1991. We realise functionally cutting-edge complete systems for investment, with a focus on advanced technology (high-tech) and high quality environments (clean rooms).
</p>
<p>
We are a development, engineering and project delivery company with an experienced group of technicians, technologists and engineers who manage and implement constructions. We offer our customers comprehensive services in project preparation, manufacture, construction and subsequent servicing. Our solutions guarantee the optimisation of capital and operating costs and emphasise consistent protection of the environment. We realise constructions for the pharmaceutics, biotechnologies, healthcare, science and research, microelectronics and automotive industries as well as for other industrial buildings utilising clean room technology.</p>
<a class="p-0 btn--arrow btn--underline mt-5" href="#">more info</a>
  </div>
</div>
       
    </div>
  </div>
</section>

<section class="news mt-5 pb-5">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="news-inner-box">
          <h3 class="mt-5 mb-3">News</h3>
          <p class="paragraph">30th anniversary BLOCK® Group</p>
        </div>
      </div>

       <div class="col-md-4">
        <div class="news-inner-box">
          <h3 class="mt-5 mb-3">News</h3>
          <p class="paragraph">30th anniversary BLOCK® Group</p>
        </div>
      </div>

       <div class="col-md-4">
        <div class="news-inner-box">
          <h3 class="mt-5 mb-3">Video</h3>
          <p class="paragraph"><br/></p>
          <div class="video-container" style={{height:"199.625px"}} >
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/7ah1Z45UWM8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="footer-section pt-5 pb-3">
  <div class="container">
    <div class="row">
      <div class="col-md-2">
        <div class="inner-footer-box">
          <p class="footer-heading">Contact</p>
          <ul class="list--unstyled mt-40">
<li>BLOCK CRS a.s.</li>
<li>U Kasáren 727</li>
<li>757 01 Valašské Meziříčí</li>
<li class="mb-2">Czech Republic</li>
<li>Tel.:&nbsp;<a href="#">+420 571 670 111</a></li>
<li>E-mail: <a href="#">info@blockcrs.cz</a></li>
</ul>
        </div>
      </div>

      <div class="col-md-2">
        <div class="inner-footer-box">
          <p class="footer-heading">Main menu</p>
         <ul class="mt-40 list-style-square">
<li><a class="" href="">Hightech turnkey projects</a></li>
<li><a class="" href="">Cleanrooms</a></li>
<li><a class="" href="">Isolator technology</a></li>
<li><a class="" href="">BLOCK<sup>®</sup> products</a></li>
</ul>
        </div>
      </div>


      <div class="col-md-2">
        <div class="inner-footer-box">
          <p class="footer-heading">More</p>
          <ul class="mt-40 list-style-square">
<li><a href="#">Company profile</a></li>
<li><a href="#">E-Catalog</a></li>
<li><a href="#">Career</a></li>
<li><a href="#">Downloads</a></li>
<li><a href="#">News</a></li>
<li><a href="#">References</a></li>
<li><a href="#">Contact</a></li>
<li><a href="#">Privacy Policy</a></li>
<li><a href="#">Imprint</a></li>
<li><a href="#">Information about using cookies</a></li>
</ul>
        </div>
      </div>



      <div class="col-md-2">
        <div class="inner-footer-box">
          <p class="footer-heading">Certifications</p>
         <ul class="mt-40 list-style-square">
<li>ISO 9001:2008</li>
<li>ISO 14001:2004</li>
<li>OHSAS 18001:2007</li>
</ul>
        </div>
      </div>



      <div class="col-md-2">
        <div class="inner-footer-box">
          <p class="footer-heading">Social networks</p>
         <ul class="list--unstyled list--inline mt-40">
<li><a href="#" target="_blank" rel="noopener"><img src="assets/images/facebook.png" alt="Facebook icon"/></a></li>
<li><a href="#" target="_blank" rel="noopener"><img src="assets/images/youtube.png" alt="Youtube icon"/></a></li>
</ul>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="footer-bottom">
  <div class="container">
    <div class="col-md-12">
      <p>Copyright 2021 BLOCK ® </p>
    </div>
  </div>
</section>

        </div>
        </div>
        </div>
    )
}

export default Home;
