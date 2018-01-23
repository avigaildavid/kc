var navMenu = {
    ele: {},
    bp: {
        tablet: 768,
        mobile: 680
    },
    wWidth: $(window).width(),

    init: function() {
        var _this = this;
        $(_this.onReady.bind(_this));
        $(window).scroll(_this.onScroll.bind(_this));
        $(window).resize(_this.onResize.bind(_this));
        $(window).load(_this.onLoad.bind(_this));
    },

    onReady: function() {
        var _this = this;
        // console.log("The DOM is ready");
        // this.registerElements();
        this.binds();
    },

    onLoad: function() {
        var _this = this;
    },

    onResize: function() {
        var _this = this;
    },

    onScroll: function() {
        var _this = this;
    },

    binds: function() {
        var _this = this;
        $("body").on("click", ".actToggle", {context: _this}, _this.toggleSiteMenu);
        // _this.ele.burger.on('click', function(e) {
        //     e.preventDefault();
        //     _this.ele.burger.toggleClass('active');
        //     _this.ele.content.toggleClass('active');
        //     _this.ele.menu.toggleClass('active');
        // });

    },
    toggleSiteMenu:function(e){
        e.preventDefault();

        var _this = e.data.context,
            ele = $(this),
            similarTarget = $("[href='" + ele.attr("href") + "']"), //any buttons that share the same href as the selected button. This is mainly for sandwich nav and sections button sync
            pane = $(ele.attr("href")),
            remove = (ele.hasClass('active')) ? true : false;

        $(".actToggle.active").removeClass('active');
        $(".pane.active").removeClass('active');
        similarTarget.removeClass('active');

        if(!remove){
            ele.addClass("active");
            pane.addClass("active");
            similarTarget.addClass("active");
        }
    }
    // getWindowSize: function() {
    //     this.isMobile = (this.wWidth < this.bp.mobile);
    //     this.isTablet = (this.wWidth < this.bp.tablet && this.wWidth >= this.bp.mobile);
    // },

    // registerElements: function() {
    //     this.ele = {
    //         burger: $(".burger"),
    //         content: $(".gut"),
    //         menu: $("#navWrap")
    //     };
    // }
};

navMenu.init();