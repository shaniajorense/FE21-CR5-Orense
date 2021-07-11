class locations{
    constructor(public name: string, public address: string, public zip: number, public city: string, public img: string, public created:string) { }
    
    display() {
        return `<div class="col col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
        <img src="${this.img} " class="card-img-top" alt="img">
        <div class="card-body">
          <h5 class="card-title">${this.name} </h5>
          <p class="card-text">${this.address}, ${this.zip} ${this.city} </p>
          
      
    
        `
        
    }

    closingdiv() {
        return `
        <footer class="footer text-muted mb-2 fs-6 ">Created:${this.created}  </footer>
        </div>
        </div>
        </div>
        `
    }
    
}


class restaurant extends locations{
    telNum: number;
    link: string;
    constructor(name: string, address: string, zip: number, city: string, img: string, created:string, telNum: number, link: string) {
        super(name, address, zip, city, img, created)
        this.link = link;
        this.telNum = telNum;
        
    }

    display() {
        return `${super.display()}
        <p class="card-text"> +${this.telNum} </p> 
        <a href="#" class="stretched-link">${this.link} </a>`
    }
}


class events extends restaurant{
    dateTime: string;
    price: Number;
    currency:string
    
    constructor(name: string, address: string, zip: number, city: string, img: string, created: string, telNum: number, link: string, dateTime: string, price: number, currency: string) {
        super(name, address, zip, city, img, created, telNum, link)
        this.dateTime = dateTime;
        this.price = price;
        this.currency = currency;
    }

    display() {
        return `${super.display()} 
        <p class="card-text"> ${this.dateTime} </p>
        <p class="card-text"> ${this.price} ${this.currency}</p>`
    }
}

var Schloss = new locations("Schloss Schönbrunn", "Schönbrunner Schloßstraße 47", 1130, "Vienna", "https://www.viennasightseeing.at//application/themes/vienna/images/sampleimg-medium.jpg", "24.06.2021 12:45");
var prater = new locations("Prater", "Prater", 1020, "Vienna", "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/60/c3.jpg", "24.06.2021 16:29");
var belveder = new locations("Belveder", "Prinz-Eugen-Straße 27", 1030, "Vienna", "https://www.hisour.com/wp-content/uploads/2019/04/Belvedere-Wien-Austria-1280x720.jpg", "25.06.2021 12:40");

var leto = new restaurant("Cafe Restaurant LETO", "Schwertgasse 3", 1010, "Vienna", "https://media04.meinbezirk.at/imagepost/2019/11/24/2/186372_XXL.jpg", "25.06.2021 13:20", 4319926189, "restaurantleto.at");
var doco = new restaurant("DO & CO Restaurant", "Stephansplatz 12", 1010, "Vienna", "https://www.doco.com/wp-content/uploads/2019/09/Tempel_docohotel_9th-floor.jpg", "25.06.2021 14:40", 4315353969, "do&co.at");
var neni = new restaurant("Neni am Naschmarkt", "Naschmarkt 510", 1060, "Vienna", "https://snipville.com/wp-content/uploads/2012/07/neni_neu1.jpg", "25.06.2021 17:56", 4315353969, "neni.at");

var zoe = new events("Zoe Wees", "Baumgasse 80", 1030, "Vienna", "https://www.oeticket.com/obj/media/AT-eventim/teaser/222x222/2021/ZW_222x222px.jpg", "26.06.2021 9:23", 4300239203, "www.oeticket.com", "Tue, 29.03.2021, 20:00", 39.50, "EUR");
var dua = new events("Dua Lipa", "Wiener Stadthalle, Halle D, Roland Rainer Platz 1,", 1150, "Vienna", "https://dancingastronaut.com/wp-content/uploads/2020/08/Dua-Lipa.jpg", "26.06.2021 11:12", +4300239203, "www.oeticket.com", "Thu, 23.05.2021, 20:00", 89.50, "EUR");
var bts = new events("BTS", "Wiener Stadthalle, Halle D, Roland Rainer Platz 1,", 1150, "Vienna", "https://i.pinimg.com/originals/9e/06/72/9e06722a22800410c551cbda635bc9ad.jpg", "26.06.2021 13:25", 4300239203, "www.oeticket.com", "Thu, 29.02.2021, 17:00", 145.90, "EUR");

var arr = [Schloss, prater, belveder, leto, doco, neni, zoe, dua, bts]

for (let val of arr) {

    document.getElementById("assign")!.innerHTML += val.display() + val.closingdiv();
}

