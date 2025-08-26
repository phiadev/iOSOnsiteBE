const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Hardcoded data for the fetchData endpoint
const hardcodedData = {
  message: "Data fetched successfully",
  timestamp: new Date().toISOString(),
  items: [
    {
        "itemName": "The Pleated Short in Stretch Linen",
        "brand": "Everlane",
        "price": "83",
        "imageLink": "https://media.everlane.com/images/c_fill,w_1080,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/1339c9b6_c62b/womens-pleated-short-in-stretch-linen-cedarwood",
        "productId": "ENTITY_TYPE_PRODUCT-170faf08d338df87"
    },
    {
        "itemName": "Mellie Buckle Strap Mary Jane Flats",
        "brand": "DV Dolce Vita",
        "price": "49",
        "imageLink": "https://slimages.macysassets.com/is/image/MCY/products/9/optimized/26714059_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&wid=1200&fmt=webp",
        "productId": "ENTITY_TYPE_PRODUCT-a0c93828e462609a"
    },
    {
        "itemName": "CAIA KNIT DRESS",
        "brand": "Cult Gaia",
        "price": "598",
        "imageLink": "https://cultgaia.com/cdn/shop/files/250506_DR_CG_PF25_LOOK_137_0051.jpg?v=1751488747&width=2000",
        "productId": "ENTITY_TYPE_PRODUCT-ebcb9b193c91a075"
    },
    {
        "itemName": "CLASSIC JOGGER",
        "brand": "Skims",
        "price": "88",
        "imageLink": "https://skims.imgix.net/s/files/1/0259/5448/4284/files/JO-JOG-8364W-ONX-MC-SKIMS-LOUNGEWEAR_0012-FR.jpg?v=1735590578&auto=format&q=70&ixlib=react-9.10.0&w=1446",
        "productId": "ENTITY_TYPE_PRODUCT-d56c5af6a10cc980"
    },
    {
        "itemName": "Suede Empire Carryall 34",
        "brand": "Coach",
        "price": "450",
        "imageLink": "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/33087287_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&wid=1200&fmt=webp",
        "productId": "ENTITY_TYPE_PRODUCT-3a56cf105d2f48f2"
    },
    {
        "itemName": "Alyse V–Neck Midi Dress",
        "brand": "Ulla Johnson",
        "price": "1380",
        "imageLink": "https://ullajohnson.com/cdn/shop/files/ULLA-JOHNSON_Alyse-V-Neck-Midi-Dress_PEARL_PF250181_01_MAIN_v4_887acdc4-bec0-457d-a4b0-84e963f13e44.jpg?v=1747329333&width=1920",
        "productId": "ENTITY_TYPE_PRODUCT-afe997bb77baaf4b"
    },
    {
        "itemName": "CROPPED JACQUARD TOP",
        "brand": "Tory Burch",
        "price": "180",
        "imageLink": "https://i.pinimg.com/736x/88/cb/58/88cb58cdb3e81045214cd800f8aceb01.jpg",
        "productId": "ENTITY_TYPE_PRODUCT-cc54aefec39dd8a8"
    },
    {
        "itemName": "Blue Twill Midi Jacket",
        "brand": "Ganni",
        "price": "495",
        "imageLink": "https://www.ganni.com/dw/image/v2/AAWT_PRD/on/demandware.static/-/Sites-ganni-master-catalogue/default/dwb2b7d41a/images/images/model/W1106_6470_01B_1.jpg?sh=2000",
        "productId": "ENTITY_TYPE_PRODUCT-bb8cfccd4a40dbed"
    },
    {
        "itemName": "Cotton Silk Cord Split Neck Top",
        "brand": "Eileen Fisher",
        "price": "278",
        "imageLink": "https://www.eileenfisher.com/dw/image/v2/BGKB_PRD/on/demandware.static/-/Sites-ef-main-catalog/default/dw6b802a47/images/F5CVY-W6218M-101-ALT.jpg?sw=876&sh=1168&sfrm=png&q=100",
        "productId": "ENTITY_TYPE_PRODUCT-3e785b7c467d3b24"
    },
    {
        "itemName": "Miramar Mini Skirt",
        "brand": "rag&bone",
        "price": "198",
        "imageLink": "https://cdn.media.amplience.net/i/rb/RC0625FSMPO-484-A/Miramar-Mini-Skirt-484?$xlarge$&fmt=auto",
        "productId": "ENTITY_TYPE_PRODUCT-618a80bb19eeab53"
    },
    {
        "itemName": "LAYERED MERINO WOOL CARDIGAN",
        "brand": "COS",
        "price": "199",
        "imageLink": "https://media.cos.com/assets/001/1c/ba/1cbab05e3166857fc5eb6c8c797c5fe1cf510c6b_xxl-1.jpg?imwidth=2160",
        "productId": "ENTITY_TYPE_PRODUCT-292a854049d371a7"
    },
    {
        "itemName": "Neyu",
        "brand": "Polène",
        "price": "720",
        "imageLink": "https://eng.polene-paris.com/cdn/shop/files/packshot-front_neyu-beige.png?v=1752849632&width=1920",
        "productId": "ENTITY_TYPE_PRODUCT-8a4df7150a5f6bd7"
    },
    {
        "itemName": "Sway Black Leather Ballet Flats",
        "brand": "Alohas",
        "price": "190",
        "imageLink": "https://alohas.com/cdn/shop/files/sway-black-leather-ballet-flats-4.jpg?v=1743764393&width=1646",
        "productId": "ENTITY_TYPE_PRODUCT-4cde22d79c27f1a3"
    },
    {
        "itemName": "COOL JEAN",
        "brand": "Alice + Olivia",
        "price": "395",
        "imageLink": "https://www.aliceandolivia.com/dw/image/v2/BFBS_PRD/on/demandware.static/-/Sites-masterCatalog_aando/default/dw7d62e4bf/large/CD507101124M496_01.jpg?sw=700&sh=937&q=100",
        "productId": "ENTITY_TYPE_PRODUCT-8c046ba38adadcbb"
    },
    {
        "itemName": "Matte Jersey Mckenna Top",
        "brand": "Cinq à Sept",
        "price": "295",
        "imageLink": "https://cinqasept.nyc/cdn/shop/files/JAG6125_ZW20632741Z_mattejerseymckennatop_bordeaux_OF_Front_1_1800x1800.jpg?v=1751555167",
        "productId": "ENTITY_TYPE_PRODUCT-8d6f2d06189027a5"
    },
    {
        "itemName": "THE EMPIRE BELT",
        "brand": "Herve Leger",
        "price": "150",
        "imageLink": "https://herveleger.com/cdn/shop/files/HL00001-006_001_800x.jpg?v=1728499939",
        "productId": "ENTITY_TYPE_PRODUCT-8991081997924a0a"
    },
    {
        "itemName": "Platform Cage Sandal",
        "brand": "Prada",
        "price": "995",
        "imageLink": "https://i.pinimg.com/1200x/c2/6c/62/c26c62dfe80691db19d615b063631425.jpg",
        "productId": "ENTITY_TYPE_PRODUCT-be503a16a7bfbee1"
    },
    {
        "itemName": "Triple Knot Earrings",
        "brand": "Anine Bing",
        "price": "230",
        "imageLink": "https://www.aninebing.com/cdn/shop/files/AB_TRIPLEKNOTEARRINGS_GOLD_A-15-3711-920_PACKSHOT_FRONTVIEW_01_1700x.jpg?v=1730420182",
        "productId": "ENTITY_TYPE_PRODUCT-360def85c29c625b"
    },
    {
        "itemName": "Davidson Sweat",
        "brand": "Varley",
        "price": "138",
        "imageLink": "https://cdn.shopify.com/s/files/1/0009/8562/8738/files/8590f17a1fed40e9d33cfd73ea63bb8f768db0fe_VAR01080_DAVIDSON_SWEAT_MID_BLUE_MARL_004.jpg?v=1753111597&width=1400&height=1866&crop=center",
        "productId": "ENTITY_TYPE_PRODUCT-b048a269e7a33e98"
    },
    {
        "itemName": "Lace Collar Blouse",
        "brand": "Boden",
        "price": "99",
        "imageLink": "https://i.pinimg.com/736x/56/13/0a/56130a7c3662562362cce4227facf17e.jpg",
        "productId": "ENTITY_TYPE_PRODUCT-c95d0b0f314fd05b"
    },
    {
        "itemName": "9th Street Pant",
        "brand": "Alex Mill",
        "price": "195",
        "imageLink": "https://www.alexmill.com/cdn/shop/files/WP128-3405-LIGHT-KHAKI-8959_1440x1920_crop_center.jpg?v=1754419325",
        "productId": "ENTITY_TYPE_PRODUCT-23e9e86a79ffdac5"
    },
    {
        "itemName": "ALICI DRESS",
        "brand": "Rat & Boa",
        "price": "295",
        "imageLink": "https://cdn.shopify.com/s/files/1/1191/9918/files/RatandBoa_SS25_D3_Alici_Dress_258_960x_crop_center@2x.jpg.webp?v=1750423015",
        "productId": "ENTITY_TYPE_PRODUCT-d46e8c6674b55fc9"
    },
    {
        "itemName": "CAP-TOE PUMP",
        "brand": "Tory Burch",
        "price": "325",
        "imageLink": "https://i.pinimg.com/736x/d8/84/74/d88474f9b84de2d4241bdd4ba16dd809.jpg",
        "productId": "ENTITY_TYPE_PRODUCT-ee078e9bea370e0f"
    },
    {
        "itemName": "Ara Top",
        "brand": "Guizio",
        "price": "178",
        "imageLink": "https://danielleguiziony.com/cdn/shop/files/GUIZIO_JUNERESHOOT_20251950.jpg?v=1752252754&width=960",
        "productId": "ENTITY_TYPE_PRODUCT-6d2107d9c849245b"
    },
    {
        "itemName": "GLEN DENIM JACKET VINTAGE WASH",
        "brand": "Staud",
        "price": "345",
        "imageLink": "https://staud.clothing/cdn/shop/files/7-JACKET_MIDBLUE_01_2501_web.jpg?v=1752786674&width=1200",
        "productId": "ENTITY_TYPE_PRODUCT-d647bfc0aa80fefb"
    },
    {
        "itemName": "Ginny Cotton Sweater Dress",
        "brand": "Reformation",
        "price": "278",
        "imageLink": "https://media.thereformation.com/image/upload/f_auto,q_auto:eco,dpr_2.0/w_500/PRD-SFCC/1315382/NAVY/1315382.1.NAVY?_s=RAABAB0",
        "productId": "ENTITY_TYPE_PRODUCT-275f97fbe2544890"
    },
    {
        "itemName": "Small Alix Suede Tote",
        "brand": "rag&bone",
        "price": "398",
        "imageLink": "https://cdn.media.amplience.net/i/rb/SD100822-239-A/Small-Alix-Suede-Tote-239?$xlarge$&fmt=auto",
        "productId": "ENTITY_TYPE_PRODUCT-ada8ad0b0b8ed3c5"
    },
    {
        "itemName": "Le sommet Pralù top",
        "brand": "Jacquemus",
        "price": "235",
        "imageLink": "https://cdn-images.farfetch-contents.com/28/38/79/62/28387962_57799783_1000.jpg",
        "productId": "ENTITY_TYPE_PRODUCT-92df48ec67374e15"
    },
    {
        "itemName": "Hally Half-Zip Rib Vest",
        "brand": "Varley",
        "price": "128",
        "imageLink": "https://cdn.shopify.com/s/files/1/0009/8562/8738/files/d3063309f26abfe87305cfcfd18b3bc06b14d1a8_VAR02864_HALLY_HALF_ZIP_RIB_VEST_BLACK_FLECK_052.jpg?v=1753181767&width=1400&height=1866&crop=center",
        "productId": "ENTITY_TYPE_PRODUCT-2f4d1a9b980084a7"
    },
    {
        "itemName": "THE MAGGIE DRESS",
        "brand": "Herve Leger",
        "price": "550",
        "imageLink": "https://herveleger.com/cdn/shop/files/HerveLeger_PreFall25_LookBook_14_1397_FINAL_800x.jpg?v=1746228350",
        "productId": "ENTITY_TYPE_PRODUCT-7904dcf5b2f79996"
    },
    {
        "itemName": "Vegan Leather Laney Skirt",
        "brand": "Cinq à Sept",
        "price": "355",
        "imageLink": "https://cinqasept.nyc/cdn/shop/files/JAG6192_ZS4075872Z_veganleatherlaneyskirt_blackblack_OF_Front_1_1800x1800.jpg?v=1751560850",
        "productId": "ENTITY_TYPE_PRODUCT-f733f107fe774d9c"
    },
    {
        "itemName": "Notice Slide Woven Sneakers Off White Woven Stella",
        "brand": "DV Dolce Vita",
        "price": "140",
        "imageLink": "https://www.dolcevita.com/cdn/shop/files/NOTICE_SLIDE_WOVEN_OFF_WHITE_WOVEN_1.jpg?v=1746550271&width=853",
        "productId": "ENTITY_TYPE_PRODUCT-db594762905961f9"
    },
    {
        "itemName": "Sleep Set",
        "brand": "Skims",
        "price": "128",
        "imageLink": "https://skims.imgix.net/s/files/1/0259/5448/4284/files/AP-SET-0600-HEG-HA-SKIMS-LOUNGEWEAR_3165-FR_35977d1f-8c31-41b3-9eb6-c905b027734f.jpg?v=1708546825&auto=format&q=70&ixlib=react-9.10.0&w=1446",
        "productId": "ENTITY_TYPE_PRODUCT-b1779ac906a89810"
    },
    {
        "itemName": "SMALL ROMY SHOULDER BAG",
        "brand": "Tory Burch",
        "price": "295",
        "imageLink": "https://i.pinimg.com/736x/74/c0/ba/74c0bae0a64182255519f5b32844bcec.jpg",
        "productId": "ENTITY_TYPE_PRODUCT-833cdb2616e2b4aa"
    },
    {
        "itemName": "The Oxford Short-Sleeve Shirt Dress",
        "brand": "Everlane",
        "price": "148",
        "imageLink": "https://media.everlane.com/images/c_fill,w_1080,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/de3b401a_ab0d/womens-oxford-short-sleeve-shirt-dress-bone-mazarine-blue",
        "productId": "ENTITY_TYPE_PRODUCT-c2cb2ffa4a4a750d"
    },
    {
        "itemName": "JACKSON BARREL JEAN INDIGO",
        "brand": "Staud",
        "price": "285",
        "imageLink": "https://staud.clothing/cdn/shop/files/10-JACKSON_RINSE_01_2760_web.jpg?v=1752786683&width=1200",
        "productId": "ENTITY_TYPE_PRODUCT-f6d9ee5915c12951"
    },
    {
        "itemName": "SCULPTURAL SHOULDER BAG – PLEATED",
        "brand": "COS",
        "price": "119",
        "imageLink": "https://media.cos.com/assets/001/22/71/2271d40a54609865cb25f105936d7224cc5c3cd1_xxl-1.jpg?imwidth=2160",
        "productId": "ENTITY_TYPE_PRODUCT-85e506eb1b9634f2"
    },
    {
        "itemName": "PRESCOTT KNIT TOP",
        "brand": "Cult Gaia",
        "price": "258",
        "imageLink": "https://cultgaia.com/cdn/shop/files/240822_DR_CULT_GAIA_S25_HS25_LOOK_BOOK_LOOK_92_0018.jpg?v=1745342474&width=2000",
        "productId": "ENTITY_TYPE_PRODUCT-fd0b6f129d224f54"
    },
    {
        "itemName": "Portman Low Rise Shorts Nomad",
        "brand": "EB Denim",
        "price": "195",
        "imageLink": "https://www.ebdenim.com/cdn/shop/files/PortmanLowriseSHort_Nomad_01092_1_2048x.png?v=1752610544",
        "productId": "ENTITY_TYPE_PRODUCT-cc3320a3dc8614c0"
    },
    {
        "itemName": "Fiorentina Dress",
        "brand": "Guizio",
        "price": "278",
        "imageLink": "https://danielleguiziony.com/cdn/shop/files/FiorentinaDress_white1.jpg?v=1725571538&width=960",
        "productId": "ENTITY_TYPE_PRODUCT-b02141e018f9ce8c"
    },
    {
        "itemName": "Amalfi Coast Light Blue Pleated Flutter Sleeve Mini Dress",
        "brand": "Lulus",
        "price": "69",
        "imageLink": "https://www.lulus.com/images/product/xlarge/12693441_1556876.jpg?w=560&hdpi=1",
        "productId": "ENTITY_TYPE_PRODUCT-6808813101f44947"
    },
    {
        "itemName": "Arella Sleeveless Mini Dress",
        "brand": "Simkhai",
        "price": "267",
        "imageLink": "https://media.bergdorfgoodman.com/f_auto,q_auto:low,ar_5:7,c_fill,dpr_2.0,w_720/01/bg_4991867_100106_a",
        "productId": "ENTITY_TYPE_PRODUCT-ace6c33df5a41877"
    },
    {
        "itemName": "Billy Merino Cashmere Hoodie",
        "brand": "Veronica Beard",
        "price": "149",
        "imageLink": "https://veronicabeard.com/cdn/shop/files/J2411KA4490522-OATMEAL_01.jpg?v=1729107709&width=956",
        "productId": "ENTITY_TYPE_PRODUCT-8fb73de1141e4bac"
    },
    {
        "itemName": "Arqué Leather Mini Bag",
        "brand": "Prada",
        "price": "2450",
        "imageLink": "https://editorialist.com/thumbnail/600/2025/5/035/889/071/35889071~black_1747384557045_0.webp?width=600&quality=60",
        "productId": "ENTITY_TYPE_PRODUCT-641f2103c8fe96eb"
    },
    {
        "itemName": "Mariana Dress Pale Honey",
        "brand": "Staud",
        "price": "450",
        "imageLink": "https://cdn.phia.com/editorial-manager/products/427bad0a59457b1427e07ec317b6ea8927b8284fdab2fca9d92a5ac9e2d44011.jpg",
        "productId": "ENTITY_TYPE_PRODUCT-222621bf2decd4dc"
    },
    {
        "itemName": "Liv Dress",
        "brand": "With Jean",
        "price": "139",
        "imageLink": "https://withjean.com/cdn/shop/files/liv-dress-white-lace-01_2000x.jpg?v=1734669456",
        "productId": "ENTITY_TYPE_PRODUCT-8b26cfcc28e7ab99"
    },
    {
        "itemName": "Alleia Satin Two Piece",
        "brand": "Reformation",
        "price": "348",
        "imageLink": "https://media.thereformation.com/image/upload/f_auto,q_auto:eco,dpr_2.0/w_500/PRD-SFCC/1316686/SUNSHINE/1316686.2.SUNSHINE?_s=RAABAB0",
        "productId": "ENTITY_TYPE_PRODUCT-bc1fed43c255eb00"
    },
    {
        "itemName": "Oren Silk Dress",
        "brand": "Reformation",
        "price": "348",
        "imageLink": "https://media.thereformation.com/image/upload/f_auto,q_auto:eco,dpr_2.0/w_500/PRD-SFCC/1314259/MINERAL/1314259.3.MINERAL?_s=RAABAB0",
        "productId": "ENTITY_TYPE_PRODUCT-4ee325fbc35b7fa0"
    },
    {
        "itemName": "Teva leather sandals",
        "brand": "Malene Birger",
        "price": "730",
        "imageLink": "https://www.bymalenebirger.com/dw/image/v2/BDCM_PRD/on/demandware.static/-/Sites-sfra-bmb-master-catalog/default/dw52308428/images/103737_QL1_main.jpg?sw=2480&sh=2480&sm=fit&sfrm=jpg",
        "productId": "ENTITY_TYPE_PRODUCT-2f308e0b9becedaf"
    },
    {
        "itemName": "Jade Rollable Raffia Bucket Hat",
        "brand": "Rag & Bone",
        "price": "198",
        "imageLink": "https://cdn.media.amplience.net/i/rb/WJW25SH1020ST20-240-C/Jade-Rollable-Raffia-Bucket-Hat-240?$xlarge$&fmt=auto",
        "productId": "ENTITY_TYPE_PRODUCT-f7d54b0bde8573c5"
    }
  ],
  metadata: {
    totalItems: 50,
    lastUpdated: "2024-01-15T10:30:00Z",
    version: "1.0.0"
  }
};

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Phia Onsite Backend API',
    endpoints: {
      search: 'GET /api/search?name=<search_term>',
      fetchData: 'GET /api/fetchData'
    }
  });
});


// Search by name endpoint
app.get('/api/search', (req, res) => {
  try {
    const { name, isUsed, onSale } = req.query;
    console.log(name, isUsed, onSale);
    let isUsedBool = isUsed === 'true';
    let onSaleBool = onSale === 'true';
    
    if (!name) {
      return res.status(400).json({
        error: 'Name parameter is required',
        message: 'Please provide a name parameter in the query string (e.g., /api/search?name=item)'
      });
    }
    // randomly assign isUsed to 50% of the items if not already and onSale to 25%
    const items = hardcodedData.items.map(item => ({
      ...item,
      isUsed: item.isUsed || Math.random() < 0.5,
      onSale: item.onSale || Math.random() < 0.25
    }));
    hardcodedData.items = items;

    // Filter items by name (case-insensitive search)
    let filteredItems = items.filter(item => 
      item.itemName.toLowerCase().includes(name.toLowerCase())
    );

    // Filter items by isUsed if provided
    if (isUsed !== undefined) {
      console.log("isUsed:",isUsed);
      filteredItems = filteredItems.filter(item => item.isUsed === isUsedBool);
      console.log(filteredItems);
    }

    // Filter items by onSale if provided
    
    if (onSale !== undefined) {
      console.log("onSale:",onSale);
      filteredItems = filteredItems.filter(item => item.onSale === onSaleBool);
    }

    const response = {
      message: `Search results for "${name}"`,
      timestamp: new Date().toISOString(),
      searchTerm: name,
      items: filteredItems,
      metadata: {
        totalItems: filteredItems.length,
        searchTerm: name,
        lastUpdated: hardcodedData.metadata.lastUpdated,
        version: hardcodedData.metadata.version
      }
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

// Keep the original fetchData endpoint for backward compatibility
app.get('/api/fetchData', (req, res) => {
  try {
    res.json(hardcodedData);
  } catch (error) {
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.post('/api/favorite-toggle', (req, res) => {
  const { productId } = req.body;
  console.log(productId);

  // check if productId is in hardcodedData.items
  const product = hardcodedData.items.find(item => item.productId === productId);
  if (!product) {
    return res.status(404).json({
      error: 'Product not found',
      message: 'The product with the given ID was not found'
    });
  }

  // toggle isFavorite
  product.isFavorite = !product.isFavorite;

  // update hardcodedData.items
  hardcodedData.items = hardcodedData.items.map(item => {
    if (item.productId === productId) {
      return product;
    }
    return item;
  });

  res.json({
    message: true
  });
});


// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Endpoint not found',
    message: `The endpoint ${req.originalUrl} does not exist`
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}`);
  console.log(`🔍 Health check: http://localhost:${PORT}/health`);
  console.log(`🔎 Search by name: http://localhost:${PORT}/api/search?name=dress`);
  console.log(`📊 Fetch all data: http://localhost:${PORT}/api/fetchData`);
  console.log(`💙 Toggle favorite: http://localhost:${PORT}/api/favorite-toggle`);
});
