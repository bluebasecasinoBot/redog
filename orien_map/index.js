import { __c, __m, __sC, __sS, __SYD } from "./sydneyDom_v2.js"

import "./temp__/temps/text_lib.js"

import "./frontPage.js"

__sS([
    {
        nameTag:"container",
        style:{
            height:"fit-content",
            width:"100vw",
            position:"relative",
            paddingTop:"30px",
            overflowX:"hidden",
            // background:"#fff",
            color:"#fff",
            fontFamily:"jose",
            display:"flex",
            flexDirection:"column",
            rowGap:"20px",
            alignItems:"center",
            overflowY:"scroll",
            paddingBottom:"20px",
            fontFamily:"normText",
            padding:"20px",
        }
    },

    {
        nameTag:"rad_1",
        style:{
            borderRadius:"10px"
        }
    },

    {
        nameTag:"bookingTabDesign",
        style:{
            display:"flex",
            flexDirection:"column",
            rowGap:"20px",
        }
    },

    {
        nameTag:"three_d_style",
        style:{
            boxShadow:`-1px -1px 0px #00000061 inset, 2px 2px 1px #eef8cb82 inset, 2px 2px 3px #09030352`,
            backgroundColor:"#670015", //"rgba(36, 41, 54, 1)",
            color:"#fff"
        }
    },

    {
        nameTag:"three_d_child",
        style:{
            background:" rgb(24, 26, 36)",
            boxShadow:" 1px 1px 3px #000 inset",
        }
    },

    {
        nameTag:"top_highlight",
        style:{

        }
    },

    {
        nameTag:"txt_shad",
        style:{
            textShadow:"2px 2px 1px #000"
        }
    }
])

__SYD.container = () =>{
    return __c(
        "div",
        {
            style:__sC['container']({method:"add" , style:{backgroundImage:'url(./cont_bg.jpg)'}})
        },
        [
            __SYD.text_lib_type_h1_glob({cnt:"$REDOGE" , inject:`font-family:rodge;text-transform:uppercase;color:#92602b;font-size:30px;font-weight:700;`+__sC['txt_shad']()}),

            __c(
                "div",
                {
                    style:"display:flex;justify-content:center;align-items:center;height:fit-content;width:100%;column-gap:20px;flex-wrap:wrap;row-gap:10px;z-index:20;"
                },
                [
                    __c(
                        "div",
                        {
                            style:"position:relative;background-image:url(./gifFile.gif);width:calc(100% - 300px - 30px);background-color:#f9fdf8;",
                            class:"vid_element"
                        },
                        [
                            __c(
                                "video",
                                {
                                    style:"width:100%;opacity:0;",
                                    class:"vid_element",
                                    src:"topVid.mp4",
                                    loop:true,
                                    // height:"445",
                                    // width:"345",
                                    // autoplay:true,
                                    // muted:true,
                                    // controls:true
                                },[],{genericStyle:['bg_fit']}
                            ),
                            __c(
                                "div",
                                {
                                    style:"display:none;height:30px;width:30px;position:absolute;top:10px;right:10px;background-image:url(./pause.png);cursor:pointer;",
                                    class:"pauseBtn"
                                },[],{
                                    genericStyle:['bg_cover'],
                                    events:{
                                        onclick:e =>{

                                            const element = e.target.parentElement.querySelector("video");
                                            element.pause();
                                            element.style.opacity = "0"

                                            e.target.style.display = "none";

                                            const playBtn = e.target.parentElement.querySelector(".txtClick");

                                            playBtn.style.display = "block"
                                        }
                                    }
                                }
                            ),
                            __c(
                                "p",
                                {
                                    style:"font-size:16px;text-transform:capitalize;font-weight:900;position:absolute;top:50%;left:50%;cursor:pointer;color:#916924;padding:10px;font-family:rodge;text-align:center;color:#92602b;"+__sC['rad_1']() + __sC['three_d_style']({method:"add" , style:{background:"#cfc28e" , color:"#92602b"}}),
                                    class:"click txtClick"
                                },[
                                    "tap to dance wif me"
                                ],
                                {
                                    events:{
                                        onclick:(e) =>{
                                            const element = e.target.parentElement.querySelector("video");
                                            element.play();
                                            element.style.opacity = "1"

                                            const pauseBtn = e.target.parentElement.querySelector(".pauseBtn");
                                            pauseBtn.style.display = "block";

                                            e.target.style.display = "none"
                                        }
                                    }
                                }
                            )
                        ],{
                            genericStyle:['bg_fit']
                        }
                    ),
                    __c(
                        "div",
                        {
                            style:"min-width:250px;display:flex;flex-direction:column;align-items:center;row-gap:20px;"
                        },
                        [
                            __SYD.logoImage(),
                            __SYD.contactButton(),
                        ]
                    ),
                ]
            ),
            

            __SYD.text_lib_type_h1_glob({cnt:"about REDOGE" , inject:`z-index:20;font-family:rodge;text-transform:uppercase;color:#92602b;font-size:30px;font-weight:900;`+__sC['txt_shad']()}),

            __c(
                "p",
                {
                    style:"z-index:20;width:100%;max-width:500px;text-align:center;color:#171717;font-weight:700;"
                },
                [
                    "In the wild, unpredictable world of crypto, where logic is optional and memes are king, enters ",
                    __c("bold" , {style:"font-family:rodge;"},["$REDOGE – DOGE’s"]),
                    "quirky cousin. Think crypto couldn’t get any weirder? Think again. ",
                    __c("bold" , {style:"font-family:rodge;"},["$REDOGE"]),
                    " is here to show that even the most unique family member deserves their shot at the moon (or at least a visit to the neighbor’s backyard)."
                ]
            ),

            __SYD.image2_about(),

            __c(
                "p",
                {
                    style:"z-index:20;width:100%;max-width:500px;text-align:center;color:#171717;font-weight:700;"
                },
                [
                    "Join the ",
                    __c("bold" , {style:"font-family:rodge;"},["$REDOGE"]),
                    " fam – because crypto’s more fun when you're part of the meme squad. 🚀"
                ]
            ),

            __SYD.image4_about(),

            __SYD.text_lib_type_p_glob_vfit({cnt:"I was staring at doge after I came outa that hole like , bro u got a retarded cousin now" , inject:"width:100%;max-width:500px;text-align:center;z-index:20;color:#171717;font-weight:700;"}),

            __SYD.image3_about(),

            __SYD.text_lib_type_p_glob_vfit({cnt:"Not financial advice, just good vibes and a lot of memes." , inject:"width:100%;max-width:500px;text-align:center;z-index:20;color:#171717;font-weight:700;"}),

            __SYD.image5_about(),

            //random images
            __c(
                "div",
                {
                    style:"position:absolute;top:10px;left:10px;height:100px;width:100px;z-index:1;background-image:url(./meme3.png);",
                    class:"rotate_z__"
                },[],{genericStyle:['bg_fit']}
            ),

            __c(
                "div",
                {
                    style:"position:absolute;top:300px;right:10px;height:150px;width:150px;z-index:1;animation-delay:3s;background-image:url(./image2.png);",
                    class:"translateX_"
                },[],{genericStyle:['bg_fit']}
            ),

            __c(
                "div",
                {
                    style:"position:absolute;top:250px;left:250px;height:100px;width:100px;z-index:1;animation-delay:7s;background-image:url(./image3.png);",
                    class:"rotate_z__"
                },[],{genericStyle:['bg_fit']}
            ),

            __c(
                "div",
                {
                    style:"position:absolute;top:700px;left:600px;height:150px;width:150px;z-index:1;animation-delay:.5s;background-image:url(./meme4.png);background-image:url(./meme5.png);",
                    class:"translateZ_"
                },[],{genericStyle:['bg_fit']}
            ),

            __c(
                "div",
                {
                    style:"position:absolute;top:50%;left:50%;height:300px;width:300px;z-index:1;animation-delay:5s;background-image:url(./meme4.png);",
                    class:"rotate_z__"
                },[],{genericStyle:['bg_fit']}
            ),

            __c(
                "div",
                {
                    style:"position:absolute;top:50%;left:10px;height:200px;width:200px;z-index:1;animation-delay:3s;background-image:url(./meme3.png);",
                    class:"translateX_"
                },[],{genericStyle:['bg_fit']}
            ),

            __c(
                "div",
                {
                    style:"position:absolute;top:900px;right:30px;height:100px;width:100px;z-index:1;background-image:url(./meme5.png);",
                    class:"translateZ_"
                },[],{genericStyle:['bg_fit']}
            ),

            __c(
                "div",
                {
                    style:"position:absolute;top:80%;right:30px;height:200px;width:200px;z-index:1;background-image:url(./image3.png);",
                    class:"rotate_z"
                },[],{genericStyle:['bg_fit']}
            ),

            __c(
                "div",
                {
                    style:"position:absolute;top:1500px;left:30px;height:100px;width:100px;z-index:1;background-image:url(./image2.png);",
                    class:"rotate_z__"
                },[],{genericStyle:['bg_fit']}
            ),

            __SYD.footerSection()
        ],
        {
            genericStyle:["bg_cover"]
        }
    )
}

__SYD.footerSection = () =>{
    return __c(
        "div",
        {
            style:"padding:50px 0;display:flex;flex-direction:column;row-gap:30px;width:100%;height:fit-content;justify-content:center;align-items:center;"
        },
        [
            __c("hr",{style:"height:2px;background:#171717;width:100%"}),

            __SYD.text_lib_type_p_glob_vfit({cnt:"RODOGE - © 2024 All Right Reserved" , inject:"font-size:13px;font-weight:900;width:100%;max-width:500px;text-align:center;color:#171717;"}),

        ]
    )
}
__m(__SYD.container())