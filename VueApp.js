var shop = new Vue({
    el: "#instrament-app",
    data: {
        holdArray: [],
        cartTotal: 0,
        addedCards: 0,
        message: " ",
        hoverClass: false,
        cards:[
            {
                name:"YAMAHA P-45",
                instrument: "Piano",
                price: 549.99,
                inCart: true,
                brand: "YAMAHA",
                img:"https://ksmmusic.com/wp-content/uploads/2020/10/1EB6097A-4754-480A-8C7B-534B2099D76F.png"
            },
            {
                name:"YAMAHA GigMaker Acoustic Guitar",
                instrument: "Guitar",
                price: 219.99,
                inCart: true,
                brand: "YAMAHA",
                img:"https://media.musiciansfriend.com/is/image/MMGS7/GigMaker-Acoustic-Guitar-Pack-Tobacco-Brown-Sunburst/519040000337000-00-500x500.jpg"
            },
            {
                name:"Fender Player Stratocaster Electric Guitar",
                instrument: "Guitar",
                price: 849.99,
                inCart: true,
                brand: "Fender",
                img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSzHCeJT04hlH7OCJ0GoXvakcSudx_QsXnthIolzDZ2DnUPpXqQCBdxPlsy-dcaWeXm2mNcmqE_V47sa2YH_mN7PgaWy2r3_76fJRQzbpk7X2Bwadt61wyb"
            },
            {
                name:"Fender Alternate Reality Sixty Six Electric Guitar",
                instrument: "Guitar",
                price: 899.99,
                inCart: true,
                brand: "Fender",
                img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT5Hrtxc1jlZ-DvrCqdhRAcedHSAh35BgNpiLIUPPN-f22rWMCDAJg9BtHrdhAy3Jp5NrMv1UPbeTesRwtmu4DG_VglE81mpoCPTh2FVkjzTqutxIVeghC2MA"
            },
            {
                name:"MATON Performer Electric guitar",
                instrument: "Guitar",
                price: 1727.37,
                inCart: true,
                brand: "Maton",
                img:"https://i.ebayimg.com/images/g/whMAAOSwB1ZiWktN/s-l1600.jpg"
            },
            {
                name:"Maton SRS808C Acoustic-Electric",
                instrument: "Piano",
                price: 1999.00,
                inCart: true,
                brand: "Maton",
                img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRM1qHXggofKidjEPB36RnusOFPFn-cyVaqZuKmef3ES-DvhJAnndYU4MVZVeOD4fNXbEhEAz2HHq2gNA_aLlUB8wUTHZ37Ew&usqp=CAY"
            },
        ],
        form: {
            name:"",
            instrument:"",
            price:0,
            inCart: false,
            brand:"",
            img:""
        }
    },
    methods: {
        addInstrament: function(form){
            form.inCart = !form.inCart;
          },
        clearCart: function(){
            this.cartTotal = 0;
            this.listArray();
        },
        listArray: function(){
            this.cards = JSON.parse(JSON.stringify(this.holdArray));
        },
        addToCart: function(card){
            if(this.cards.length == 6 + this.addedCards){
                this.copyArray();
            }
            const index = this.cards.indexOf(card);
            this.cards.splice(index, 1);
            this.cartTotal +=1;

            if(this.cards.length == 0){
                alert("There are no items left in the store");
            }
        },
        copyArray(){
            this.holdArray = JSON.parse(JSON.stringify(this.cards));
        },
        submit: function(){
            this.cards.push(this.form);
            this.addedCards+=1;
            this.copyArray();
            this.form={
                name:"",
                instrument:"",
                price:0,
                inCart: true,
                brand:"",
                img:""
            }
        },
    }
})

//fills listArray
fillListArray();
function fillListArray(){
    shop.copyArray();
}