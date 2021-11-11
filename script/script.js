var carousel = new Vue(
    {
        el: "#container",
        data: {
            activeSlide: 0,
            slides: [
                {
                    image: "img/01.jpg",
                    titles: "Svezia",
                    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
                },
                {
                    image: "img/02.jpg",
                    titles: "Svizzera",
                    text: "Lorem ipsum."
                },
                {
                    image: "img/03.jpg",
                    titles: "Gran Bretagna",
                    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                },
                {
                    image: "img/04.jpg",
                    titles: "Germania",
                    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
                },
                {
                    image: "img/05.jpg",
                    titles: "Paradise",
                    text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
                }
            ]
        },
        methods: {
            prevSlide: function() {
                if (this.activeSlide === 0) {
                    this.activeSlide = this.slides.length - 1 
                } else {
                    this.activeSlide--
                }
            },
            nextSlide: function() {
                if (this.activeSlide === this.slides.length - 1) {
                    this.activeSlide = 0
                } else {
                    this.activeSlide++
                }
            }

        }
    }
)