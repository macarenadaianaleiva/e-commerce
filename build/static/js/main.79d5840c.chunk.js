(this.webpackJsonpmi=this.webpackJsonpmi||[]).push([[0],{33:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var r=t(4),n=t.n(r),c=t(40),o=t.n(c),i=t(13),s=t(41),l=t(48),d=t(17),u=t(3),j=Object(r.createContext)(),b=JSON.parse(localStorage.getItem("carrito"))||[],m=function(e){var a=e.children,t=Object(r.useState)(b),n=Object(d.a)(t,2),c=n[0],o=n[1];console.log(c);return Object(r.useEffect)((function(){localStorage.setItem("carrito",JSON.stringify(c))}),[c]),Object(u.jsx)(j.Provider,{value:{carrito:c,addToCart:function(e){o([].concat(Object(l.a)(c),[e]))},removeItem:function(e){var a=c.filter((function(a){return a.id!==e}));o(a)},calcularCantidad:function(){return c.reduce((function(e,a){return e+a.cantidad}),0)},vaciarCarrito:function(){o([])},isInCart:function(e){return c.some((function(a){return a.id===e}))},calcularTotal:function(){return c.reduce((function(e,a){return e+a.cantidad*a.price}),0)}},children:a})},p=function(){var e=Object(r.useContext)(j).calcularCantidad;return Object(u.jsxs)("div",{children:[Object(u.jsx)(s.a,{className:"widget"}),Object(u.jsx)("span",{children:e()})]})};t(33);var h=function(){return Object(u.jsxs)("header",{className:"encabezado",children:[Object(u.jsx)("h1",{children:" BookStore "}),Object(u.jsx)("nav",{className:"navgacion",children:Object(u.jsxs)("ul",{className:"menu",children:[Object(u.jsx)("li",{children:Object(u.jsx)(i.c,{activeClassName:"activeLink",exact:!0,to:"/",children:"Inicio"})}),Object(u.jsxs)("li",{children:[Object(u.jsx)(i.c,{activeClassName:"activeLink",exact:!0,to:"/productos/",children:"Libros"}),Object(u.jsxs)("ul",{className:"submenu",children:[Object(u.jsx)("li",{children:Object(u.jsx)(i.c,{activeClassName:"activeLink",exact:!0,to:"/productos/Fantas\xeda/",children:"Fantas\xeda"})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.c,{activeClassName:"activeLink",exact:!0,to:"/productos/terror/",children:"Terror"})})]})]}),Object(u.jsx)("li",{className:"cart",children:Object(u.jsx)(i.b,{to:"/cart",children:Object(u.jsx)(p,{})})})]})})]})},g=t(7),x=[{id:1,name:"Alicia",autor:"Carroll Lewis",description:"Alicia es una ni\xf1a a la que no le gusta leer libros sin dibujos. Un d\xeda se encuentra con su hermana a la orilla de un r\xedo, aburrida y de repente ve c\xf3mo un conejo blanco revisa su reloj y exclama que llega tarde. \xbfDe d\xf3nde viene el conejo y por qu\xe9 llega tarde? Movida por la curiosidad Alicia lo sigue y llega a un mundo subterr\xe1neo lleno de maravillas, donde vive miles de aventuras que rozan lo irracional, donde las situaciones son como en los sue\xf1os y los animales hablan. ",price:1500,img:"https://i.pinimg.com/564x/41/da/5f/41da5f5afaf46018962c50c741508ab6.jpg",category:"Fantas\xeda",stock:20},{id:2,name:"La puerta del bosque",autor:"Melissa Albert",description:"Alice, una chica de diecisiete a\xf1os, y su madre se han pasado la mayor parte de sus vidas de un sitio para otro, siempre un paso por delante de la extra\xf1a mala suerte que les pisa los talones. Pero cuando la abuela de Alice,la esquiva autora de un libro de cuentos espeluznantes, muere en su finca del bosque, Alice descubre hasta d\xf3nde puede llegar su mala suerte. Su madre desaparece y deja un extra\xf1o mensaje: no te acerques al bosque de los avellanos. Pararecuperarla, Alice tendr\xe1 que adentrarse en el mundo en que nacieron las historias de su abuela y donde quiz\xe1s encuentre la raz\xf3n del monstruoso y estremecedor origen de su historia.",price:2500,img:"https://i.pinimg.com/564x/d7/29/b0/d729b0e87ce197e696b1fbae159a857a.jpg",category:"terror",stock:20},{id:3,name:"En el bosque oscuro ",autor:"\tBailey, Dale",description:"UN BOSQUE. UN LIBRO. UNA NI\xd1A DESAPARECIDA...A Charles Hayden le ha fascinado siempre la leyenda victoriana In the Night Wood, escrita por Caedmon Hollow. Poco despues de la muerte de su hija, Charles y su mujer Erin, descendiente de Hollow, heredan la casa de su antecesor y deciden mudarse al peque\xf1o pueblo ingles donde se encuentra. Pero Hollow House y el bosque que la envuelve est\xe1n repletos de misterios y secretos que parecen revivir con la llegada de la pareja al pueblo. Ecos de viejas historias empiezan a resonar por la biblioteca de Hollow House. Historias tan antiguas y oscuras como el bosque que les rodea.",price:800,img:"https://i.pinimg.com/564x/11/06/8f/11068f6ba4f2479240a02f47f677e700.jpg",category:"Fantas\xeda",stock:20},{id:4,name:"Coraline",autor:"Neil Gaiman",description:"Al d\xeda siguiente de mudarse de casa, Coraline explora las catorce puertas de su nuevo hogar. Trece se pueden abrir con normalidad, pero la decimocuarta est\xe1 cerrada y tapiada. Cuando por fin consigue abrirla, Coraline se encuentra con un pasadizo secreto que la conduce a otra casa tan parecida a la suya que resulta escalofriante.Sin embargo, hay ciertas diferencias que llaman su atenci\xf3n: la comida es m\xe1s rica, los juguetes son tan desconocidos como maravillosos y, sobre todo, hay otra madre y otro padre que quieren que Coraline se quede con ellos, se convierta en su hija y no se marche nunca. Pronto Coraline se da cuenta de que, tras los espejos, hay otros ni\xf1os que han ca\xeddo en la trampa. Son como almas perdidas, y ahora ella es su \xfanica esperanza de salvaci\xf3n. Pero para rescatarlos tendr\xe1 tambi\xe9n que recuperar a sus verdaderos padres, y cumplir as\xed el desaf\xedo que le permitir\xe1 volver a su vida anterior.",price:6e3,img:"https://i.pinimg.com/564x/a3/37/61/a337612ff0aae762218c35a56b2093e8.jpg",category:"terror",stock:20},{id:5,name:"La Sangre Manda",autor:"Stephen King",description:"La sangre vende. As\xed reza la m\xe1xima period\xedstica que har\xe1 que Holly Gibney, la detective a la que Bill Hodges leg\xf3 su agencia Finders Keepers, se interese por la matanza en el instituto Albert Macready y acabe enganchada a las noticias. Algo no encaja y el fantasma de la coartada perfecta del terror\xedfico visitante ser\xe1 el detonante en su primer caso en solitario. Si bien Holly no tendr\xe1 ayuda en la secuela del exitoso noir paranormal del rey del terror, en este libro la acompa\xf1an tres historias m\xe1s. En la primera, un ni\xf1o tiene como guardaespaldas al fantasma de un millonario exc\xe9ntrico. En la segunda, el mundo se acaba: hay m\xfaltiples terremotos, internet ha ca\xeddo y la peste est\xe1 mermando a la Humanidad mientras ciudades de todas partes se llenan de enigm\xe1ticos carteles. Y, en la \xfaltima, un escritor se instala en una caba\xf1a aislada para escribir una novela, y acaba enfrent\xe1ndose a sus propios demonios. Cuatro relatos largos en los que el legendario narrador de cuentos y autor superventas, sorprende nuevamente a los lectores y les conduce a lugares intrigantes a la vez que aterradores.",price:3e3,img:"https://i.pinimg.com/564x/00/18/36/0018368acfaffdfe9e5db4e3dbb413b9.jpg",category:"terror",stock:20},{id:6,name:"El retrato de Dorian Gray",autor:"Oscar Wilde",description:"El retrato de Dorian Gray (1891), la \xfanica novela escrita por Oscar Wilde, recrea el mito del personaje que vende su alma al diablo a cambio de su eterna juventud. Dorian es un perverso y encuentra placer en el da\xf1o que hace a los dem\xe1s. Su retrato va consignando el paso del tiempo y la crueldad creciente del protagonista.Mientras el Dorian Gray de carne y hueso no se marchita, el retrato va deteriorando a cada nuevo horror que \xe9l comete.Es una intensa historia de decadencia moral, que describe todo el proceso de la corrupci\xf3n del protagonista y, a trav\xe9s de un sorprendente final, defiende la lucha contra la degradaci\xf3n moral.",price:3e3,img:"https://i.pinimg.com/564x/df/e8/a5/dfe8a5d76230eda0dfa226e53b561b91.jpg",category:"terror",stock:20},{id:7,name:"El Nombre Del Viento",autor:"Rothfuss, Patrick",description:"En una posada en tierra de nadie, un hombre se dispone a relatar, por primera vez, la aut\xe9ntica historia de su vida. Una historia que \xfanicamente \xe9l conoce y que ha quedado diluida tras los rumores, las conjeturas y los cuentos de taberna que le han convertido en un personaje legendario a quien todos daban ya por muerto: Kvothe# m\xfasico, mendigo, ladr\xf3n, estudiante, mago, h\xe9roe y asesino. Ahora va a revelar la verdad sobre s\xed mismo. Y para ello debe empezar por el principio: su infancia en una troupe de artistas itinerantes, los a\xf1os malviviendo como un ladronzuelo en las calles de una gran ciudad y su llegada a una universidad donde esperaba encontrar todas las respuestas que hab\xeda estado buscando. \xabViaj\xe9, am\xe9, perd\xed, confi\xe9 y me traicionaron.\xbb \xabHe robado princesas a reyes ag\xf3nicos. Incendi\xe9 la ciudad de Trebon. He pasado la noche con Felurian y he despertado vivo y cuerdo. Me expulsaron de la Universidad a una edad a la que a la mayor\xeda todav\xeda no los dejan entrar. He recorrido de noche caminos de los que otros no se atreven a hablar ni siquiera de d\xeda. He hablado con dioses, he amado a mujeres y he escrito canciones que hacen llorar a los bardos. \xbbMe llamo Kvothe. Quiz\xe1 hayas o\xeddo hablar de m\xed.",price:3e3,img:"https://i.pinimg.com/564x/7b/10/02/7b1002b87648de278b606271afe6b2dc.jpg",category:"Fantas\xeda",stock:20},{id:8,name:"Libro 8",autor:"MELISSA ALBERT",description:"Los libros se desarrollan durante los siete a\xf1os que Harry Potter pasa en el Colegio Hogwarts de Magia y Hechicer\xeda. Estas novelas se basan en la lucha entre Harry Potter y el malvado mago Lord Voldemort, quien mat\xf3 a los padres de Harry Potter en su intento de conquistar el mundo m\xe1gico.",price:3e3,img:"https://i.pinimg.com/564x/ac/24/27/ac2427ee7c7e77b343fc0d968088b838.jpg",category:"Fantas\xeda",stock:20}],O=function(){return new Promise((function(e,a){setTimeout((function(){e(x)}),1e3)}))},f=t(18),v=function(e){var a=e.id,t=e.name,r=e.price,n=e.img,c=e.autor,o=e.category;return Object(u.jsxs)("div",{className:"texCen",style:{width:"18rem"},children:[Object(u.jsx)("img",{className:"imgPrincipal",variant:"top",src:n}),Object(u.jsxs)("div",{className:"texCen",children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)("h3",{children:c}),Object(u.jsxs)("p",{children:["Precio: $",r]}),Object(u.jsxs)("p",{children:["Categoria: ",o]}),Object(u.jsx)(i.b,{to:"/detail/".concat(a),children:Object(u.jsx)("button",{class:"btn third",children:"Lo Quiero"})})]})]})},y=function(e){var a=e.productos,t=void 0===a?[]:a;return Object(u.jsxs)("div",{className:"centrProd",children:[Object(u.jsx)("h2",{className:"productosPrincipal",children:"Nuestros Libros"}),Object(u.jsx)("div",{children:t.map((function(e){return Object(r.createElement)(v,Object(f.a)(Object(f.a)({},e),{},{key:e.id}))}))})]})},N=Object(r.createContext)(),C=function(e){var a=e.children,t=Object(r.useState)(!1),n=Object(d.a)(t,2),c=n[0],o=n[1];return Object(u.jsx)(N.Provider,{value:{loading:c,setLoading:o},children:a})},q=function(){return Object(u.jsx)("div",{className:"loader",children:Object(u.jsx)("h2",{className:"cargando",children:"Cargando..."})})},k=function(){var e=Object(r.useState)([]),a=Object(d.a)(e,2),t=a[0],n=a[1],c=Object(r.useContext)(N),o=c.loading,i=c.setLoading,s=Object(g.h)().categoryId;return Object(r.useEffect)((function(){i(!0),O().then((function(e){n(s?e.filter((function(e){return e.category===s})):e)})).catch((function(e){return console.log(e)})).finally((function(){i(!1)}))}),[s]),Object(u.jsx)("section",{children:o?Object(u.jsx)(q,{}):Object(u.jsx)(y,{productos:t})})},A=function(e){var a=e.cantidad,t=e.modify,r=e.max;return Object(u.jsxs)("div",{className:"btnMasMenos",children:[Object(u.jsx)("button",{onClick:function(){a>0&&t(a-1)},children:"-"}),Object(u.jsx)("span",{children:a}),Object(u.jsx)("button",{onClick:function(){a<r&&t(a+1)},children:"+"})]})},E=function(e){var a=e.id,t=e.name,n=e.price,c=e.img,o=e.description,s=e.category,l=e.stock,b=Object(g.g)(),m=b.goBack,p=b.push,h=Object(r.useContext)(j),x=h.addToCart,O=h.isInCart,f=Object(r.useState)(0),v=Object(d.a)(f,2),y=v[0],N=v[1];return Object(u.jsxs)("div",{className:"carrito",children:[Object(u.jsx)("h2",{className:"titLibro",children:t}),Object(u.jsx)("img",{className:"texto",src:c,alt:t}),Object(u.jsx)("p",{className:"descripcion",children:o}),Object(u.jsx)("div",{className:"precio",children:Object(u.jsxs)("h4",{children:["Precio: $",n]})}),O(a)?Object(u.jsx)("div",{className:"link",children:Object(u.jsx)(i.b,{to:"/cart",className:"btn btn-sm animated-button thar-four",children:"Terminar mi compra"})}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(A,{cantidad:y,modify:N,max:l}),Object(u.jsx)("button",{className:"btnAgregar",onClick:function(){y>0&&x({id:a,name:t,price:n,category:s,cantidad:y,img:c})},children:"Agregar"})]}),Object(u.jsxs)("div",{className:"volver",children:[Object(u.jsx)("button",{className:"btnAgregar",onClick:function(){return m()},children:"Volver"}),Object(u.jsx)("button",{className:"btnAgregar",onClick:function(){return p("/")},children:"Back to top"})]})]})},S=function(){var e=Object(r.useState)(null),a=Object(d.a)(e,2),t=a[0],n=a[1],c=Object(r.useContext)(N),o=c.loading,i=c.setLoading,s=Object(g.h)().itemId;return Object(r.useEffect)((function(){i(!0),O().then((function(e){n(e.find((function(e){return e.id===Number(s)})))})).finally((function(){i(!1)}))}),[s]),Object(u.jsx)("div",{children:o?Object(u.jsx)(q,{}):Object(u.jsx)(E,Object(f.a)({},t))})},L=t(44),P=function(){var e=Object(r.useContext)(j),a=e.carrito,t=e.vaciarCarrito,n=e.removeItem,c=e.calcularTotal;return Object(u.jsx)("div",{children:0===a.length?Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"centerProductos",children:[Object(u.jsx)("h2",{className:"centerProd",children:"No hay productos agregados"}),Object(u.jsx)(i.b,{className:" btn-three",to:"/",children:"Ir a comprar"})]})}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"carrito",children:Object(u.jsx)("h2",{className:"titLibro",children:"Resumen de compra"})}),a.map((function(e){return Object(u.jsxs)("div",{className:"carritoMin",children:[Object(u.jsx)("h4",{children:e.name}),Object(u.jsx)("img",{className:"imgCarrito",src:e.img,width:"20px",height:"30"}),Object(u.jsxs)("p",{children:["Cantidad: ",e.cantidad]}),Object(u.jsxs)("p",{children:["Precio: ",e.price*e.cantidad]}),Object(u.jsx)("button",{className:"btnBorrar",onClick:function(){return n(e.id)},children:Object(u.jsx)(L.a,{className:"borrar"})})]})})),Object(u.jsx)("hr",{}),Object(u.jsxs)("h3",{className:"precioTotal",children:["Precio total: $",c()]}),Object(u.jsxs)("div",{className:"finCompra",children:[Object(u.jsx)("button",{className:"btn first",onClick:t,children:"Vaciar carrito"}),Object(u.jsx)("button",{className:"btn third",children:Object(u.jsx)(i.b,{to:"/checkout",children:"Terminar Compra"})})]})]})})},I=t(25),H=t(45),F=t.n(H),T=t(30),w=t.n(T),z=t(46),D=t(31),B=(t(37),D.a.initializeApp({apiKey:"AIzaSyDSR8uoc8eu5TuusG_hQU8_b0F8TlvrfIk",authDomain:"e-books-macarena-leiva.firebaseapp.com",projectId:"e-books-macarena-leiva",storageBucket:"e-books-macarena-leiva.appspot.com",messagingSenderId:"492871527691",appId:"1:492871527691:web:39c31c8da766005f25c60e"})),M=t(47),U=function(){var e=Object(r.useContext)(N),a=e.loading,t=e.setLoading,n=Object(r.useContext)(j),c=n.carrito,o=n.calcularTotal,i=n.vaciarCarrito,s=Object(r.useState)({nombre:"",apellido:"",email:"",tel:""}),l=Object(d.a)(s,2),b=l[0],m=l[1],p=function(e){m(Object(f.a)(Object(f.a)({},b),{},Object(I.a)({},e.target.name,e.target.value)))};return Object(u.jsxs)(u.Fragment,{children:[0===c.length&&Object(u.jsx)(g.a,{to:"/"}),a&&Object(u.jsx)(q,{}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"titLibro",children:"Complete sus datos"}),Object(u.jsx)("div",{className:"form",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b.nombre.length<3?alert("Nombre inv\xe1lido"):b.apellido.length<3?alert("Apellido inv\xe1lido"):b.email.length<3?alert("Email inv\xe1lido"):b.tel.length<7?alert("Tel\xe9fono inv\xe1lido"):(t(!0),function(e,a,t){return new Promise(function(){var r=Object(z.a)(w.a.mark((function r(n,c){var o,i,s,l,d,u,j;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o={buyer:e,items:a.map((function(e){return{id:e.id,precio:e.price,cantidad:e.cantidad}})),total:t,date:M.a.firestore.Timestamp.fromDate(new Date)},i=D.a.firestore(B),s=i.collection("orders"),l=i.collection("productos"),r.next=6,l.get();case 6:d=r.sent,u=i.batch(),j=[],d.docs.forEach((function(e){a.find((function(a){return a.id===e.id}))})),0===j.length?s.add(o).then((function(e){u.commit(),n(e.id)})):c(j);case 11:case"end":return r.stop()}}),r)})));return function(e,a){return r.apply(this,arguments)}}())}(b,c,o()).then((function(e){F.a.fire({icon:"success",title:"Orden registrada!",text:"Guarde su comprobante: ".concat(e),willClose:function(){i()}})})).finally((function(){t(!1)})))},children:[Object(u.jsx)("h2",{className:"titLibro",children:"Formulario"}),Object(u.jsx)("input",{className:"input",type:"text",placeholder:"Nombre",name:"nombre",value:b.nombre,onChange:p}),0===b.nombre.length&&Object(u.jsx)("small",{children:"Este campo es obligatorio"}),Object(u.jsx)("input",{className:"input",type:"text",placeholder:"Apellido",name:"apellido",value:b.apellido,onChange:p}),0===b.apellido.length&&Object(u.jsx)("small",{children:"Este campo es obligatorio"}),Object(u.jsx)("input",{className:"input",type:"email",placeholder:"Email",name:"email",value:b.email,onChange:p}),0===b.email.length&&Object(u.jsx)("small",{children:"Este campo es obligatorio"}),Object(u.jsx)("input",{className:"input",type:"tel",placeholder:"Tel\xe9fono",name:"tel",value:b.tel,onChange:p}),0===b.tel.length&&Object(u.jsx)("small",{children:"Este campo es obligatorio"}),Object(u.jsx)("button",{className:"btn third",type:"submit",children:" Finalizar"})]})})]})]})};var G=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(C,{children:Object(u.jsx)(m,{children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(h,{logo:"E-Books"}),Object(u.jsxs)(g.d,{children:[Object(u.jsx)(g.b,{exact:!0,path:"/",children:Object(u.jsx)(k,{})}),Object(u.jsx)(g.b,{exact:!0,path:"/productos/:categoryId",children:Object(u.jsx)(k,{})}),Object(u.jsx)(g.b,{exact:!0,path:"/detail/:itemId",children:Object(u.jsx)(S,{})}),Object(u.jsx)(g.b,{exact:!0,path:"/cart",children:Object(u.jsx)(P,{})}),Object(u.jsx)(g.b,{exact:!0,path:"/checkout",children:Object(u.jsx)(U,{})}),Object(u.jsx)(g.b,{path:"*",children:Object(u.jsx)(g.a,{to:"/"})})]})]})})})})},R=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,75)).then((function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,c=a.getLCP,o=a.getTTFB;t(e),r(e),n(e),c(e),o(e)}))};o.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(G,{})}),document.getElementById("root")),R()}},[[74,1,2]]]);
//# sourceMappingURL=main.79d5840c.chunk.js.map