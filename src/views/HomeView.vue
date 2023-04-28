<script>
export default {
  
  mounted() {
    console.log(`the component is now mounted.`)
    this.printGreeting()
  },
  methods: {
    printGreeting() {
      console.log('greeting');
    }
  }
}

</script>

<template>
  <div class="banner" id="home">
    <div class="display-box">
        <div class="portfolio slideshow-container" id="portfolio">
        <!--           slider item 1 -->
        <div class="portfolio__coming-soon portfolio__slide fade">
            <h3>Is The Moon Void ?</h3>
            <a href="http://www.isthemoonvoid.com/" target=”_blank”>
            <div class="portfolio__image" id="moon" ></div>
            </a>
            <div class="portfolio__coming-soon-text">
            <p>Inspired by <a href="http://isitfridayyet.net/" target=”_blank”>isitfridayyet.com</a>, the moon website is a handy tool for astrologers to tell whether the moon is currently void of course. It scrapes two calendars to check for ingresses and current sign the moon is in.</p>
            </div>
        </div>
        <!--           slider item 2 -->
        <div class="portfolio__coming-soon portfolio__slide fade">
            <h3>Hobby Stocks</h3>
            <a href="https://github.com/sbalsom/hobby_stocks/" target=”_blank”>
            <div class="portfolio__image" id="stocks" ></div>
            </a>
            <div class="portfolio__coming-soon-text">
            <p>A hobby project that streams cryptocurrency prices from Tiingo websockets Api </p>
            </div>
        </div>
        <!--           slider item 3 -->
        <div class="portfolio__coming-soon portfolio__slide fade">
            <h3>Astrology API</h3>
            <a href="https://horoscope-api-site.herokuapp.com/" target=”_blank”>
            <div class="portfolio__image" id="astrology" ></div>
            </a>
            <div class="portfolio__coming-soon-text">
            <p>The Astrology API scrapes several publications across the web that have a weekly, daily, or monthly horoscopes section, and compiles the results in a in a public-facing API. The API is accessible to anyone with the url, and allows users to search for and sort horoscopes by publication, date, author name, keywords, sign, and mood.</p>
            </div>
        </div>
        <!--           slider item 4 -->
        <div class="portfolio__coming-soon portfolio__slide fade">
            <h3>Python Dictionary App</h3>
            <a href="https://github.com/sbalsom/python-dictionary-app" target=”_blank”>
            <div class="portfolio__image" id="dictionary"></div>
            </a>
            <div class="portfolio__coming-soon-text">
            <h3>Weird Dict</h3>
            <p>The backend API for a simple dictionary app, written in Python using Flask. More info coming soon ! .</p>
            </div>
        </div>
        <!--  side nav -->
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>

        <!--  bottom nav -->
        <div class="dots">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
        </div>
    
    </div>
  </div>
</template>

<style scoped>
.slideshow-container {
  position: relative;
}

/* Hide the images by default */
.portfolio__slide {
  display: none; 
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 10%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: grey;
  font-weight: bold;
  font-size: 18px;
  -webkit-transition: 0.6s ease;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 20px;
  border-radius: 3px 0 0 3px;
}
.prev {
  left:20px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(220,219,222,0.8);
}

.dots {
  text-align:center;
  margin:20px;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  -webkit-transition: background-color 0.6s ease;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

.portfolio {
  border: 3px solid white;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 590px;
}

.portfolio h3 {
  text-align: center;
}

.portfolio__featured-text,
.portfolio__coming-soon-text {
  max-width: 500px;
}

.portfolio__coming-soon,
.portfolio__featured {
  background: white;
  padding: 20px;
  border-radius: 5px;
  height: 100%;
}

.portfolio__featured {
  max-width: 500px;
}

.portfolio__featured h2 {
  text-align: center;
}
.portfolio__featured-text p,
.portfolio__coming-soon-text p,
.portfolio__featured h2,
.portfolio__coming-soon h3,
.portfolio h3 {
  color: #808080;
}

@media only screen and (max-width: 550px) {
  .portfolio__featured-text p,
  .portfolio__coming-soon-text p {
    font-size: 0.85rem;
  }
}

.portfolio__coming-soon {
  margin: 10px 0;
}

.portfolio__image {
  margin: 20px 0;
  width: 100%;
  max-width: 500px;
  min-height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
}

@media only screen and (max-width: 550px) {
  .portfolio__image {
    background-size: cover;
    min-height: 152px;
  }
  .portfolio {
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
  }
}

#astrology {
  background-image: url("../assets/images/astro.png");
}

#stocks {
  background-image: url("../assets/images/stocks.png");
}

#moon {
  background-image: url("../assets/images/moon-void.png");
}

#dictionary {
  background-image: url("../assets/images/dictionary.png");
}
</style>
