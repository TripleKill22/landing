_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[46],{LcRa:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/modding/gsc/compiler-limitations",function(){return t("hDCr")}])},hDCr:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return b})),t.d(a,"default",(function(){return m}));var n=t("rePB"),c=t("Ff2n"),o=(t("q1tI"),t("7ljp")),s=t("aArQ");function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var b={__resourcePath:"docs/modding/gsc/compiler-limitations.md",__scans:{},title:"T6 GSC Compiler Limitations",layout:"index"},i={frontMatter:b},l=s.a;function m(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)(l,r(r(r({},i),t),{},{components:a,mdxType:"MDXLayout"}),Object(o.b)("h1",r({},{id:"t6-gsc-compiler-limitations"}),"T6 GSC Compiler Limitations"),Object(o.b)("p",null,"The compiler used for BO2 has some limitations and flaws that you will most likely run into at one point. Most of these are documented and are easy to work around if you just follow the correct way to do whatever you are doing. So, let's look at some."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"(Credits to ",Object(o.b)("a",r({parentName:"strong"},{href:"https://github.com/JezuzLizard"}),"JezuzLizard")," for documenting these)")),Object(o.b)("h2",r({},{id:"infinite-loops"}),"Infinite Loops"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You cannot use any nested ",Object(o.b)("inlineCode",{parentName:"li"},"foreach")," as it will cause an infinite loop."),Object(o.b)("li",{parentName:"ul"},"You cannot use ",Object(o.b)("inlineCode",{parentName:"li"},"continue;")," in ",Object(o.b)("inlineCode",{parentName:"li"},"foreach")," or ",Object(o.b)("inlineCode",{parentName:"li"},"for")," loops as it will cause an infinite loop.")),Object(o.b)("h2",r({},{id:"operators"}),"Operators"),Object(o.b)("p",null,"You should always use parenthesis when comparing values that use conditions and while using operators. ",Object(o.b)("strong",{parentName:"p"},"P.E.M.D.A.S")," and basic math will still matter when doing GSC. If you do not remember that, your script may mess up depending on what you are doing."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"(0 - 1) < 1")," is not the same as ",Object(o.b)("inlineCode",{parentName:"li"},"0 - 1 < 1"),". The compiler will recognize & compile it as ",Object(o.b)("inlineCode",{parentName:"li"},"0 - (1 < 1)"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"(0 - 1) < 1")," will return ",Object(o.b)("inlineCode",{parentName:"li"},"true")," (or 1) because 1 is greater than -1"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"0 - 1 < 1")," will return ",Object(o.b)("inlineCode",{parentName:"li"},"false")," (or 0) because it will compare the values then subtract.")),Object(o.b)("p",null,"If you still do not understand, just use parenthesis when operators are involved."),Object(o.b)("h2",r({},{id:"if-statements"}),"If Statements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You cannot use more than 2 conditions in an ",Object(o.b)("inlineCode",{parentName:"p"},"if")," statement connected by OR (",Object(o.b)("inlineCode",{parentName:"p"},"||"),") operators enclosed in parenthesis."),Object(o.b)("p",{parentName:"li"}," Example:"),Object(o.b)("div",r({parentName:"li"},{className:"remark-highlight"}),Object(o.b)("pre",r({parentName:"div"},{className:"language-cs"}),Object(o.b)("code",r({parentName:"pre"},{className:"language-cs"}),Object(o.b)("span",r({parentName:"code"},{className:"token keyword"}),"if")," ",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"("),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"("),"a ",Object(o.b)("span",r({parentName:"code"},{className:"token operator"}),"||")," b ",Object(o.b)("span",r({parentName:"code"},{className:"token operator"}),"||")," c",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),")")," ",Object(o.b)("span",r({parentName:"code"},{className:"token operator"}),"&&")," d",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),")"),"\n"))),Object(o.b)("p",{parentName:"li"}," This will not compile. However, you can rewrite this as either of the two:"),Object(o.b)("div",r({parentName:"li"},{className:"remark-highlight"}),Object(o.b)("pre",r({parentName:"div"},{className:"language-cs"}),Object(o.b)("code",r({parentName:"pre"},{className:"language-cs"}),Object(o.b)("span",r({parentName:"code"},{className:"token keyword"}),"if")," ",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"("),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"("),"a ",Object(o.b)("span",r({parentName:"code"},{className:"token operator"}),"||")," b",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),")")," ",Object(o.b)("span",r({parentName:"code"},{className:"token operator"}),"&&")," d ",Object(o.b)("span",r({parentName:"code"},{className:"token operator"}),"||")," c ",Object(o.b)("span",r({parentName:"code"},{className:"token operator"}),"&&")," d",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),")"),"\n",Object(o.b)("span",r({parentName:"code"},{className:"token keyword"}),"if")," ",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"("),"a ",Object(o.b)("span",r({parentName:"code"},{className:"token operator"}),"&&")," d ",Object(o.b)("span",r({parentName:"code"},{className:"token operator"}),"||")," b ",Object(o.b)("span",r({parentName:"code"},{className:"token operator"}),"&&")," d ",Object(o.b)("span",r({parentName:"code"},{className:"token operator"}),"||")," c ",Object(o.b)("span",r({parentName:"code"},{className:"token operator"}),"&&")," d",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),")"),"\n")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You cannot use OR (",Object(o.b)("inlineCode",{parentName:"p"},"||"),") operators in an ",Object(o.b)("inlineCode",{parentName:"p"},"if")," statement and in parenthesis if the string of conditions would not be on the leftmost side of the if statement and the number of conditions on the rightmost side is not at least 2."),Object(o.b)("p",{parentName:"li"}," Example:"),Object(o.b)("div",r({parentName:"li"},{className:"remark-highlight"}),Object(o.b)("pre",r({parentName:"div"},{className:"language-cs"}),Object(o.b)("code",r({parentName:"pre"},{className:"language-cs"}),Object(o.b)("span",r({parentName:"code"},{className:"token keyword"}),"if")," ",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"("),"a ",Object(o.b)("span",r({parentName:"code"},{className:"token operator"}),"&&")," ",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"("),"b ",Object(o.b)("span",r({parentName:"code"},{className:"token operator"}),"||")," c",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),")"),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),")"),"\n"))),Object(o.b)("p",{parentName:"li"}," This will not compile. However,"),Object(o.b)("div",r({parentName:"li"},{className:"remark-highlight"}),Object(o.b)("pre",r({parentName:"div"},{className:"language-cs"}),Object(o.b)("code",r({parentName:"pre"},{className:"language-cs"}),Object(o.b)("span",r({parentName:"code"},{className:"token keyword"}),"if")," ",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"("),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"("),"b ",Object(o.b)("span",r({parentName:"code"},{className:"token operator"}),"||")," c",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),")")," ",Object(o.b)("span",r({parentName:"code"},{className:"token operator"}),"&&")," a",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),")"),"\n"))),Object(o.b)("p",{parentName:"li"}," will compile in the case of:"),Object(o.b)("div",r({parentName:"li"},{className:"remark-highlight"}),Object(o.b)("pre",r({parentName:"div"},{className:"language-cs"}),Object(o.b)("code",r({parentName:"pre"},{className:"language-cs"}),Object(o.b)("span",r({parentName:"code"},{className:"token keyword"}),"if")," ",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"("),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"("),"a ",Object(o.b)("span",r({parentName:"code"},{className:"token operator"}),"||")," b",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),")")," ",Object(o.b)("span",r({parentName:"code"},{className:"token operator"}),"&&")," ",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"("),"c ",Object(o.b)("span",r({parentName:"code"},{className:"token operator"}),"||")," d",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),")"),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),")"),"\n"))))),Object(o.b)("h2",r({},{id:"variables"}),"Variables"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You cannot use variable-defined notifies/waittills with extra inputs/outputs."),Object(o.b)("p",{parentName:"li"}," Example:"),Object(o.b)("div",r({parentName:"li"},{className:"remark-highlight"}),Object(o.b)("pre",r({parentName:"div"},{className:"language-cs"}),Object(o.b)("code",r({parentName:"pre"},{className:"language-cs"}),Object(o.b)("span",r({parentName:"code"},{className:"token keyword"}),"var")," ",Object(o.b)("span",r({parentName:"code"},{className:"token operator"}),"=")," ",Object(o.b)("span",r({parentName:"code"},{className:"token string"}),'"connected"'),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(o.b)("span",r({parentName:"code"},{className:"token return-type class-name"}),"level")," ",Object(o.b)("span",r({parentName:"code"},{className:"token function"}),"notify"),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"("),Object(o.b)("span",r({parentName:"code"},{className:"token keyword"}),"var"),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),",")," player",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),")"),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(o.b)("span",r({parentName:"code"},{className:"token return-type class-name"}),"level")," ",Object(o.b)("span",r({parentName:"code"},{className:"token function"}),"waittill"),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"("),Object(o.b)("span",r({parentName:"code"},{className:"token keyword"}),"var"),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),",")," player",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),")"),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),";"),"\n"))),Object(o.b)("p",{parentName:"li"}," This will compile. However, the notify/waittill will not work. This is the only way to do this:"),Object(o.b)("div",r({parentName:"li"},{className:"remark-highlight"}),Object(o.b)("pre",r({parentName:"div"},{className:"language-cs"}),Object(o.b)("code",r({parentName:"pre"},{className:"language-cs"}),Object(o.b)("span",r({parentName:"code"},{className:"token return-type class-name"}),"level")," ",Object(o.b)("span",r({parentName:"code"},{className:"token function"}),"notify"),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"("),Object(o.b)("span",r({parentName:"code"},{className:"token string"}),'"connected"'),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),",")," player",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),")"),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(o.b)("span",r({parentName:"code"},{className:"token return-type class-name"}),"level")," ",Object(o.b)("span",r({parentName:"code"},{className:"token function"}),"waittill"),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"("),Object(o.b)("span",r({parentName:"code"},{className:"token string"}),'"connected"'),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),",")," player",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),")"),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),";"),"\n"))))),Object(o.b)("h2",r({},{id:"animtree"}),"Animtree"),Object(o.b)("p",null,"Unfortunately, for certain scripts doing:",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},'#using_animtree( "animtree" );'),Object(o.b)("br",{parentName:"p"}),"\n","is required for the script to function. Scripts containing it will crash on start/while running. There is a workaround using script names such as ",Object(o.b)("inlineCode",{parentName:"p"},"maps/mp/gametypes_zm/_globalentities.gsc")," and naming an extracted but not decompiled script."))}m.isMDXComponent=!0}},[["LcRa",0,1,2,3,4,5]]]);