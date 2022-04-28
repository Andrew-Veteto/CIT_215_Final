

new Vue({
    el: "#items",
    data: {
        message: 'Hover Me!',
        cards:[
            {
                name:"YAMAHA P-45",
                instrument: "Piano",
                price: 549.99,
                brand: "YAMAHA",
                img:"https://media.sweetwater.com/api/i/f-webp__q-82__ha-e422ed74fcf36403__hmac-b54e5ea50c2044807fed819948342f27f708cb05/images/items/750/P45BK-large.jpg.auto.webp"
            },
            {
                name:"YAMAHA GigMaker Acoustic Guitar",
                instrument: "Guitar",
                price: 219.99,
                brand: "YAMAHA",
                img:"https://media.musiciansfriend.com/is/image/MMGS7/GigMaker-Acoustic-Guitar-Pack-Tobacco-Brown-Sunburst/519040000337000-00-500x500.jpg"
            },
            {
                name:"Fender Player Stratocaster Electric Guitar",
                instrument: "Guitar",
                price: 849.99,
                brand: "Fender",
                img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSzHCeJT04hlH7OCJ0GoXvakcSudx_QsXnthIolzDZ2DnUPpXqQCBdxPlsy-dcaWeXm2mNcmqE_V47sa2YH_mN7PgaWy2r3_76fJRQzbpk7X2Bwadt61wyb"
            },
            {
                name:"Fender Alternate Reality Sixty Six Electric Guitar",
                instrument: "Guitar",
                price: 899.99,
                brand: "Fender",
                img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT5Hrtxc1jlZ-DvrCqdhRAcedHSAh35BgNpiLIUPPN-f22rWMCDAJg9BtHrdhAy3Jp5NrMv1UPbeTesRwtmu4DG_VglE81mpoCPTh2FVkjzTqutxIVeghC2MA"
            },
            {
                name:"MATON Performer Electric guitar",
                instrument: "Guitar",
                price: 1727.37,
                brand: "Maton",
                img:"https://i.ebayimg.com/images/g/whMAAOSwB1ZiWktN/s-l1600.jpg"
            },
            {
                name:"Maton SRS808C Acoustic-Electric",
                instrument: "Piano",
                price: 1999.00,
                brand: "Maton",
                img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRM1qHXggofKidjEPB36RnusOFPFn-cyVaqZuKmef3ES-DvhJAnndYU4MVZVeOD4fNXbEhEAz2HHq2gNA_aLlUB8wUTHZ37Ew&usqp=CAY"
            },
        ]
    },
    methods: {
        // mouseover: function(){
            
        //     var test = document.getElementById("card");
        //     test.style.backgroundColor="orange";
        //   },    
        // mouseleave: function(){
        //     var test = document.getElementById("card");
        //     test.style.backgroundColor="orange";
        //   }
    }
})