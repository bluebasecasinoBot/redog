import { __c, __sC, __SYD } from "./sydneyDom_v2.js";

__SYD.logoImage = () =>{
    return __c(
        "div",
        {
            style:"z-index:20;min-height:250px;width:100%;max-width:250px;background-image:url(./logo.png);" + __sC['rad_1']() + __sC['three_d_style']({method:"add" , style:{backgroundColor:"#fff"}})
        },[],{genericStyle:['bg_fit']}
    )
}

__SYD.image2_about = () =>{
    return __c(
        "div",
        {
            style:"z-index:20;min-height:400px;width:100%;max-width:600px;background-image:url(./about.png);background-position:center 100%;" + __sC['rad_1']() + __sC['three_d_style']({method:"add" , style:{backgroundColor:"#fff"}})
        },[],{genericStyle:['bg_cover']}
    )
}

__SYD.image3_about = () =>{
    return __c(
        "div",
        {
            style:"z-index:20;min-height:400px;width:100%;max-width:600px;background-image:url(./meme3.png);" + __sC['rad_1']() + __sC['three_d_style']({method:"add" , style:{backgroundColor:"#fff"}})
        },[],{genericStyle:['bg_fit']}
    )
}

__SYD.image4_about = () =>{
    return __c(
        "div",
        {
            style:"z-index:20;min-height:400px;width:100%;max-width:600px;background-image:url(./image3.png);" + __sC['rad_1']() + __sC['three_d_style']({method:"add" , style:{backgroundColor:"#fff"}})
        },[],{genericStyle:['bg_cover']}
    )
}

__SYD.image5_about = () =>{
    return __c(
        "div",
        {
            style:"z-index:20;min-height:400px;width:100%;max-width:600px;background-image:url(./image2.png);" + __sC['rad_1']() + __sC['three_d_style']({method:"add" , style:{backgroundColor:"#fff"}})
        },[],{genericStyle:['bg_fit']}
    )
}

__SYD.contactButton = () =>{
    return __c(
        "div",
        {
            style:"z-index:20;min-height:40px;width:90%;max-width:400px;border:2px solid #171717;display:flex;justify-content:center;align-items:center;text-transform:capitalize;color:#171717;font-family:rodge;",
            class:"scale_up_down"
        },
        [
            "contact address : 0x0"
        ]
    )
}