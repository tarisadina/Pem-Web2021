(()=>{
    var e,t,n,o;
    function c(){
        document.getElementById("nav-menu")
        .classList.remove("show-menu")
    }
    
    e="nav-toggle",
    t="nav-menu",
    n=document.getElementById(e),
    o=document.getElementById(t),
    n&&o&&n.addEventListener("click",(function(){o.classList.toggle("show-menu"))),
    document.querySelectorAll(".as-nav__link")
    .forEach((function(e){
        return e.addEventListener("click",c)
    }
    )
    )
    ;
    var s=document
    .querySelectorAll("section[id]");
    window.addEventListener("scroll",
    (function(){
        var e=window.pageYOffset;s.forEach((function(t){
            var n=t.offsetHeight,
            o=t.offsetTop-50;
            sectionId=t
            .getAttribute("id"),
            e>o&&e<=o+n?document
            .querySelector(".as-nav__menu a[href*="+sectionId+"]")
            .classList.add("active-link"):document
            .querySelector(".as-nav__menu a[href*="+sectionId+"]")
            .classList.remove("active-link")
        }
        )
        )
    }
    )
    )
    ,
            window.addEventListener("scroll",(function(){
                var e=document
                .getElementById("header")
                ;
                this.scrollY>=200?e
                .classList
                .add("scroll-header"):e
                .classList.remove("scroll-header")
            }
            )
            )
        })
        ()          
        ;