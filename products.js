const products = [
  { "name": "Face Mask", "img": "images/jart.jpg", "link": "https://amzn.to/4lpEyRF", "tags": ["skin care","women","girls","skincare","korean"] },
  { "name": "Collagen Mask", "img": "images/mask.jpg", "link": "https://amzn.to/4fDm3b3", "tags": ["skin care","women","skincare","korean"] },
  { "name": "Volufiline", "img": "images/volu.jpg", "link": "https://amzn.to/45yAGrz", "tags": ["skin care","women","skincare","korean"] },
  { "name": "Lip Stain", "img": "images/lipptik.jpg", "link": "https://amzn.to/3V1N5PX", "tags": ["women","makeup","lip","bridesmaid","bridesmaids","tiktok"] },
  { "name": "Dior Lip Oil Dupe", "img": "images/elf.jpg", "link": "https://amzn.to/4mkFxnF", "tags": ["women","makeup","lip","bridesmaid","bridesmaids","tiktok"] },
  { "name": "Selfie Light", "img": "images/light.jpg", "link": "https://amzn.to/4loRmYx", "tags": ["women","girls","makeup","tiktok","cool"] },
  { "name": "Celeb Fave Bronzer", "img": "images/phys.jpg", "link": "https://amzn.to/4fA9bCB", "tags": ["women","makeup","bronzer","bridesmaid","bridesmaids","tiktok"] },
  { "name": "Dyson Dupe", "img": "images/dyson.jpg", "link": "https://amzn.to/4mITkE8", "tags": ["women","girls","makeup","hair","tiktok"] },
  { "name": "Pimple Patches", "img": "images/pimple.jpg", "link": "https://amzn.to/3Uu8qRW", "tags": ["women","girls","teen","skincare","tiktok"] },
  { "name": "Stanley Snack Tray", "img": "images/stanley.jpg", "link": "https://amzn.to/4fLIACU", "tags": ["women","girls","teen","tiktok","cool"] },
  { "name": "Airplane Phone Mount", "img": "images/phone.jpg", "link": "https://amzn.to/46YgCl0", "tags": ["men","tiktok","cool"] },
  { "name": "Easy Pasta Strainer", "img": "images/pasta.jpg", "link": "https://amzn.to/45PAKEF", "tags": ["women","men","tiktok","cool"] },
  { "name": "Jellyfish Lamp", "img": "images/jelly.jpg", "link": "https://amzn.to/4lvubfo", "tags": ["boys","girls","cool","tiktok"] },
  { "name": "Cloud Slippers", "img": "images/cloud.jpg", "link": "https://amzn.to/45RW7W0", "tags": ["girls","women","tiktok","fashion"] },
  { "name": "Speakers", "img": "images/speakers.jpg", "link": "https://amzn.to/46RBWsi", "tags": ["boys","men","tiktok","cool"] },

 {
    "name": "[Aritzia Dupe] Tna Socks Dupe",
    "img": "images/dupe1.jpg",
    "link": "https://amzn.to/3UadoDe",
    "link_ca": "https://amzn.to/45hQJdc",
    "tags": ["woman", "girl", "dupe", "fashion", "clothes", "aritzia", "aritzia dupe"]
  },
  {
    "name": "[Aritzia Dupe] Contour Esteem Bodysuit Dupe",
    "img": "images/dupe2.jpg",
    "link": "https://amzn.to/3JewWnC",
    "link_ca": "https://amzn.to/3IRaEZd",
    "tags": ["woman", "girl", "dupe", "fashion", "clothes", "aritzia", "aritzia dupe"]
  },
  {
    "name": "[Aritzia Dupe] Squareneck Longsleeve Contour Bodysuit Dupe",
    "img": "images/dupe3.jpg",
    "link": "https://amzn.to/41gFGjm",
    "link_ca": "https://amzn.to/450tzJJ",
    "tags": ["woman", "girl", "dupe", "fashion", "clothes", "aritzia", "aritzia dupe"]
  },
  {
    "name": "[Aritzia Dupe] Contour Tshirt Crew Dupe",
    "img": "images/dupe4.jpg",
    "link": "https://amzn.to/45wKd3D",
    "link_ca": "https://amzn.to/46Fv6Gi",
    "tags": ["woman", "girl", "dupe", "fashion", "clothes", "aritzia", "aritzia dupe"]
  },
  {
    "name": "[Aritzia Dupe] Contour Boatneck Top Dupe",
    "img": "images/dupe5.jpg",
    "link": "https://amzn.to/45wKd3D",
    "link_ca": "https://amzn.to/4oirwZ1",
    "tags": ["woman", "girl", "dupe", "fashion", "clothes", "aritzia", "aritzia dupe"]
  },
  {
    "name": "[Aritzia Dupe] Superpuff Vest Shorty Dupe",
    "img": "images/dupe6.jpg",
    "link": "https://amzn.to/46Giz5u",
    "tags": ["woman", "girl", "dupe", "fashion", "clothes", "aritzia", "aritzia dupe"]
  },
  {
    "name": "[Aritzia Dupe] Superpuff Long Dupe",
    "img": "images/dupe7.jpg",
    "link": "https://amzn.to/4fgcPRU",
    "link_ca": "https://amzn.to/4l9iEls",
    "tags": ["woman", "girl", "dupe", "fashion", "clothes", "aritzia", "aritzia dupe"]
  },
  {
    "name": "[Aritzia Dupe] Tna Golden Butter Zip Up Dupe",
    "img": "images/dupe8.jpg",
    "link": "https://amzn.to/4miaF6O",
    "link_ca": "https://amzn.to/4oh6GJq",
    "tags": ["woman", "girl", "dupe", "fashion", "clothes", "aritzia", "aritzia dupe"]
  },
  {
    "name": "[Aritzia Dupe] Tna Golden Butter Cheeky Hi Rise Leggings Dupe",
    "img": "images/dupe9.jpg",
    "link": "https://amzn.to/3IZvvJK",
    "link_ca": "https://amzn.to/4okdPbX",
    "tags": ["woman", "girl", "dupe", "fashion", "clothes", "aritzia", "aritzia dupe"]
  },
  {
    "name": "[Aritzia Dupe] Tna Golden Butter Cheeky Flare Dupe",
    "img": "images/dupe10.jpg",
    "link": "https://amzn.to/45dbQxm",
    "link_ca": "https://amzn.to/4oh6zO0",
    "tags": ["woman", "girl", "dupe", "fashion", "clothes", "aritzia", "aritzia dupe"]
  },
  {
    "name": "[Aritzia Dupe] Tna Golden Butter Essential Skort Dupe",
    "img": "images/dupe11.jpg",
    "link": "https://amzn.to/4m8z5zV",
    "link_ca": "https://amzn.to/44ZfNqB",
    "tags": ["woman", "girl", "dupe", "fashion", "clothes", "aritzia", "aritzia dupe"]
  },
  {
    "name": "[Aritzia Dupe] Tna Golden Butter Romper Dupe",
    "img": "images/dupe12.jpg",
    "link": "https://amzn.to/45dbTcw",
    "link_ca": "https://amzn.to/457KlFi",
    "tags": ["woman", "girl", "dupe", "fashion", "clothes", "aritzia", "aritzia dupe"]
  },
  {
    "name": "[Aritzia Dupe] Tna Golden Butter Biker Shorts Dupe",
    "img": "images/dupe13.jpg",
    "link": "https://amzn.to/40NZfPW",
    "link_ca": "https://amzn.to/47aHU7A",
    "tags": ["woman", "girl", "dupe", "fashion", "clothes", "aritzia", "aritzia dupe"]
  },
  {
    "name": "[Aritzia Dupe] Sweatfleece Hoodie Dupe",
    "img": "images/dupe14.jpg",
    "link": "https://amzn.to/3U6vV3o",
    "link_ca": "https://amzn.to/41p9r1k",
    "tags": ["woman", "girl", "dupe", "fashion", "clothes", "aritzia", "aritzia dupe"]
  },
  {
    "name": "[Aritzia Dupe] Sweatfleece Cinched Sweatpant Dupe",
    "img": "images/dupe15.jpg",
    "link": "https://amzn.to/3UJuYOC",
    "link_ca": "https://amzn.to/4lflcPh",
    "tags": ["woman", "girl", "dupe", "fashion", "clothes", "aritzia", "aritzia dupe"]
  },
  {
    "name": "[Aritzia Dupe] Sweatfleece Cargo Sweatpant Dupe",
    "img": "images/dupe16.jpg",
    "link": "https://amzn.to/4moE8vI",
    "tags": ["woman", "girl", "dupe", "fashion", "clothes", "aritzia", "aritzia dupe"]
  },
  {
    "name": "[Aritzia Dupe] Sweatfleece Straight Sweatpant Dupe",
    "img": "images/dupe17.jpg",
    "link": "https://amzn.to/45wyT7A",
    "link_ca": "https://amzn.to/450we6b",
    "tags": ["woman", "girl", "dupe", "fashion", "clothes", "aritzia", "aritzia dupe"]
  },
  {
    "name": "[Lululemon Dupe] Align Leggings Dupe",
    "img": "images/dupe18.jpg",
    "link": "https://amzn.to/45bGcjS",
    "link_ca": "https://amzn.to/4okdPbX",
    "tags": ["woman", "girl", "dupe", "fashion", "clothes", "lulu", "lulu dupe", "lululemon", "lululemon dupe"]
  },
  {
    "name": "[Lululemon Dupe] Nulu Flare Dupe",
    "img": "images/dupe19.jpg",
    "link": "https://amzn.to/4lWG5j8",
    "link_ca": "https://amzn.to/4oh6zO0",
    "tags": ["woman", "girl", "dupe", "fashion", "clothes", "lulu", "lulu dupe", "lululemon", "lululemon dupe"]
  },
  {
    "name": "[Lululemon Dupe] Track Highrise Shorts Dupe",
    "img": "images/dupe20.jpg",
    "link": "https://amzn.to/41pMew1",
    "link_ca": "https://amzn.to/4okvjFc",
    "tags": ["woman", "girl", "dupe", "fashion", "clothes", "lulu", "lulu dupe", "lululemon", "lululemon dupe"]
  },
  {
    "name": "[Lululemon Dupe] Biker Shorts Dupe",
    "img": "images/dupe21.jpg",
    "link": "https://amzn.to/3IZL5F8",
    "link_ca": "https://amzn.to/4o9Wv9s",
    "tags": ["woman", "girl", "dupe", "fashion", "clothes", "lulu", "lulu dupe", "lululemon", "lululemon dupe"]
  },
  {
    "name": "[Lululemon Dupe] Zip With Hood Dupe",
    "img": "images/dupe22.jpg",
    "link": "https://amzn.to/40PJLee",
    "link_ca": "https://amzn.to/45hBRvk",
    "tags": ["woman", "girl", "dupe", "fashion", "clothes", "lulu", "lulu dupe", "lululemon", "lululemon dupe"]
  },
  {
    "name": "[Lululemon Dupe] Halfzip Dupe",
    "img": "images/dupe23.jpg",
    "link": "https://amzn.to/452sEs4",
    "link_ca": "https://amzn.to/4fumUuL",
    "tags": ["woman", "girl", "dupe", "fashion", "clothes", "lulu", "lulu dupe", "lululemon", "lululemon dupe"]
  },
  {
    "name": "[Lululemon Dupe] Joggers Dupe",
    "img": "images/dupe24.jpg",
    "link": "https://amzn.to/4oql9TB",
    "link_ca": "https://amzn.to/4onSoHa",
    "tags": ["woman", "girl", "dupe", "fashion", "clothes", "lulu", "lulu dupe", "lululemon", "lululemon dupe"]
  },
  {
    "name": "[Lululemon Dupe] Scuba Halfzip Dupe",
    "img": "images/dupe25.jpg",
    "link": "https://amzn.to/4fnT6jt",
    "link_ca": "https://amzn.to/46Egozl",
    "tags": ["woman", "girl", "dupe", "fashion", "clothes", "lulu", "lulu dupe", "lululemon", "lululemon dupe"]
  },
  {
    "name": "[Skims Dupe] Bodysuit Dupe",
    "img": "images/dupe26.jpg",
    "link": "https://amzn.to/4l62zNt",
    "link_ca": "https://amzn.to/45K9SoG",
    "tags": ["woman", "girl", "dupe", "fashion", "clothes", "skims", "skims dupe"]
  },
  {
    "name": "[Tank Air Dupe] Tank Top Dupe",
    "img": "images/dupe27.jpg",
    "link": "https://amzn.to/3IYV1Pg",
    "link_ca": "https://amzn.to/4moSDji",
    "tags": ["woman", "girl", "dupe", "fashion", "clothes", "tankair", "tank air", "tankair dupe", "tank air dupe"]
  },

{
    "name": "[Nina Pool] Tatcha Water Cream Dupe",
    "link": "https://amzn.to/4fANQcg",
    "img": "images/tatcha.jpg",
    "tags": ["skincare", "women", "nina", "nina pool", "nina pool dupe", "tiktok"]
  },
  {
    "name": "[Nina Pool] Frownies Dupe (semi botox results)",
    "link": "https://amzn.to/45wiHCg",
    "link_ca": "https://amzn.to/41GlwPX",
    "img": "images/kt.jpg",
    "tags": ["skincare", "women", "nina", "nina pool", "nina pool dupe", "tiktok"]
  },
  {
    "name": "[Nina Pool] Remove Sebatious Filaments On Nose",
    "link": "https://amzn.to/45lgAm3",
    "link_ca": "https://amzn.to/4mEjAQ4",
    "img": "images/palmer.jpg",
    "tags": ["skincare", "women", "nina", "ninapool", "nina pool dupe", "tiktok"]
  },
  {
    "name": "[Nina Pool] Rhode Glazing Milk Dupe",
    "link": "https://amzn.to/47xDnMJ",
    "img": "images/byoma.jpg",
    "tags": ["skincare", "women", "nina", "nina pool", "nina pool dupe", "tiktok"]
  },
  {
    "name": "[Nina Pool] Undereye Cream",
    "link": "https://amzn.to/4fKlfS8",
    "link_ca": "https://amzn.to/3JgtARf",
    "img": "images/tucks.jpg",
    "tags": ["skincare", "women", "nina", "nina pool", "nina pool dupe", "tiktok"]
  },
  {
    "name": "[Nina Pool] SOL DE JANEIRO Brazilian Bum Bum Cream Dupe",
    "link": "https://amzn.to/3UxarwS",
    "img": "images/firm.jpg",
    "tags": ["skincare", "women", "nina", "nina pool", "nina pool dupe", "tiktok"]
  },
  {
    "name": "[Nina Pool] Redken Hair Oil Dupe",
    "link": "https://amzn.to/45Dtr1M",
    "img": "images/dove.jpg",
    "tags": ["skincare", "women", "nina", "nina pool", "nina pool dupe", "tiktok"]
  },
  {
    "name": "[Nina Pool] Baccarat Rouge 540 Dupe",
    "link": "https://amzn.to/4mJ2aSl",
    "img": "images/bac.jpg",
    "tags": ["skincare", "women", "nina", "nina pool", "nina pool dupe", "tiktok"]
  },
  {
    "name": "[Nina Pool] YSL Black Opium Dupe",
    "link": "https://amzn.to/4oCA3Gf",
    "img": "images/midnight.jpg",
    "tags": ["skincare", "women", "nina", "nina pool", "nina pool dupe", "tiktok"]
  },
  {
  "name": "[Nina Pool] Este Lauder Advanced Night Repair Dupe",
  "link": "https://amzn.to/45Br8fI",
  "img": "images/ester.jpg",
  "tags": ["skincare", "women", "nina", "nina pool", "nina pool dupe"]
},
{
  "name": "[Nina Pool] Facial Cleanser Dupe",
  "link": "https://amzn.to/3UvV4EN",
  "link_ca": "https://amzn.to/4fBIKMR",
  "img": "images/thayers.jpg",
  "tags": ["skincare", "women", "nina", "nina pool", "nina pool dupe"]
},
{
  "name": "[Nina Pool] Peter Thomas Roth | Water Drench Hyaluronic Glow Serum Dupe",
  "link": "https://amzn.to/47wBQqc",
  "img": "images/byomamu.jpg",
  "tags": ["skincare", "women", "nina", "nina pool", "nina pool dupe"]
},
{
  "name": "[Nina Pool] Peter Thomas Roth Instant FIRMx Temporary Eye Tightener Dupe",
  "link": "https://amzn.to/3V0C6X4",
  "img": "images/eye.jpg",
  "tags": ["skincare", "women", "nina", "nina pool", "nina pool dupe"]
},
{
  "name": "[Nina Pool] L'Occitane Cleansing & Softening Almond Shower Oil Dupe",
  "link": "https://amzn.to/3HyZub7",
  "link_ca": "https://amzn.to/4mGjXJP",
  "img": "images/nivea.jpg",
  "tags": ["skincare", "women", "nina", "nina pool", "nina pool dupe"]
},
{
  "name": "[BIFL] Toaster",
  "link": "https://amzn.to/41ESgcf",
  "link_ca": "https://amzn.to/4n5AyHx",
  "img": "images/toaster.jpg",
  "tags": ["bifl", "men"]
},
{
  "name": "[BIFL] Chef Knife",
  "link": "https://amzn.to/41BoVzy",
  "link_ca": "https://amzn.to/416NjZH",
  "img": "images/knife.jpg",
  "tags": ["bifl", "men"]
},
{
  "name": "[BIFL] Boots",
  "link": "https://amzn.to/3HAVkPR",
  "link_ca": "https://amzn.to/3JhDRwu",
  "img": "images/timberland.jpg",
  "tags": ["bifl", "men"]
},
{
  "name": "[BIFL] Thermos",
  "link": "https://amzn.to/45B8PqV",
  "link_ca": "https://amzn.to/45RoJyy",
  "img": "images/thermos.jpg",
  "tags": ["bifl", "men"]
},
{
  "name": "[BIFL] Water bottle",
  "link": "https://amzn.to/45je4wvv",
  "link_ca": "https://amzn.to/4lzIi3g",
  "img": "images/nalgene.jpg",
  "tags": ["bifl", "men"]
},
{
  "name": "[BIFL] Socks",
  "link": "https://amzn.to/4oDFB3l",
  "link_ca": "https://amzn.to/4fBb2qSS",
  "img": "images/darn.jpg",
  "tags": ["bifl", "men"]
},
{
  "name": "[BIFL] Pen",
  "link": "https://amzn.to/45lThZh",
  "link_ca": "https://amzn.to/47yVMst",
  "img": "images/pen.jpg",
  "tags": ["bifl", "men"]
},
{
  "name": "[BIFL] Frying Pan",
  "link": "https://amzn.to/3HCRo13",
  "link_ca": "https://amzn.to/3HEEvDE",
  "img": "images/allclad.jpg",
  "tags": ["bifl", "men"]
},
{
  "name": "[BIFL] Jacket",
  "link": "https://amzn.to/4mKqSSf",
  "link_ca": "https://amzn.to/45KeMlA",
  "img": "images/jacket.jpg",
  "tags": ["bifl", "men"]
},
{
  "name": "[BIFL] Office Chair",
  "link": "https://amzn.to/41Gpc4d",
  "link_ca": "https://amzn.to/4lrpmn5",
  "img": "images/officechair.jpg",
  "tags": ["bifl", "men"]
},
{
  "name": "[BIFL] Vacuum",
  "link": "https://amzn.to/41L4qQV",
  "link_ca": "https://amzn.to/41L4nVf",
  "img": "images/vacuum.jpg",
  "tags": ["bifl", "men"]
},
{
  "name": "[BIFL] Pencil",
  "link": "https://amzn.to/4mOURsA",
  "link_ca": "https://amzn.to/3JhfM8X",
  "img": "images/pentel.jpg",
  "tags": ["bifl", "men"]
},
{
  "name": "[BIFL] Blender",
  "link": "https://amzn.to/45kdH4N",
  "link_ca": "https://amzn.to/47vtQWqq",
  "img": "images/vitamix.jpg",
  "tags": ["bifl", "men"]
}
  ];