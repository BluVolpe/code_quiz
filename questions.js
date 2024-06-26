const questions = [
  
    {
      question: "What is 'Bovine' commonly known as?",
      choice: ["Goat", "Cattle", "Chicken", "Pork"],
      answer: "Cattle"
    },
    {
      question: "What does 'HACCP' stand for?",
      choice: [
        "Hazardous Activity Critical Control Point",
        "Highly Active Common Control Plan",
        "Hazard Analysis Critical Control Point",
        "Health Analysis Control Production"
      ],
      answer: "Hazard Analysis Critical Control Point"
    },
    {
      question: "What is 'Collagen'?",
      choice: [
        "A type of meat cut",
        "A synthetic additive",
        "A fibrous protein in connective tissues",
        "A preservation technique"
      ],
      answer: "A fibrous protein in connective tissues"
    },
    {
      question: "Which term is used to describe yield grading?",
      choice: ["Marbling", "Cutability", "Tenderness", "Dryness"],
      answer: "Cutability"
    },
    {
      question: "What does 'Intramuscular fat' refer to?",
      choice: [
        "Marbling",
        "Collagen",
        "External fat layer",
        "Connective tissue"
      ],
      answer: "Marbling"
    },
    {
      question: "What is 'Game' in terms of food?",
      choice: [
        "Processed meat products",
        "Poultry",
        "Free roaming animals consumed as food",
        "Fish and seafood"
      ],
      answer: "Free roaming animals consumed as food"
    },
    {
      question: "Which federal agency is responsible for meat inspection?",
      choice: ["FBI", "FDA", "USDA", "NSA"],
      answer: "USDA"
    },
    {
      question: "What is 'FIFO' a principle of?",
      choice: ["Cooking", "Stock rotation", "Pricing", "Marketing"],
      answer: "Stock rotation"
    },
    {
      question: "What is a natural seam in meat?",
      choice: [
        "A synthetic division used in meat processing",
        "A chemical used to tenderize meat",
        "A natural break in the muscles of an animal",
        "An artificial enhancement technique"
      ],
      answer: "A natural break in the muscles of an animal"
    },
    {
      question: "What does 'PSE' in pork stand for?",
      choice: [
        "Pale, Soft, Exudative",
        "Pink, Salty, Edible",
        "Processed, Smoked, Enhanced",
        "Packed, Sealed, Exported"
      ],
      answer: "Pale, Soft, Exudative"
    },
    {
      question: "Which of these is not a primary cut of beef?",
      choice: ["Loin", "Chuck", "Rib", "Flank"],
      answer: "Flank"
    },
    {
      question: "What is the purpose of dry aging beef?",
      choice: [
        "To reduce the weight of the beef",
        "To increase the meat's palatability traits",
        "To extend the shelf life indefinitely",
        "To make the meat suitable for grinding"
      ],
      answer: "To increase the meat's palatability traits"
    },
    {
      question: "What does 'USDA' stand for?",
      choice: [
        "United States Department of Agriculture",
        "United States Department of Assembly",
        "United State Domestic Agency",
        "Universal Sanitary Department of Animals"
      ],
      answer: "United States Department of Agriculture"
    },
    {
      question: "What is the main reason for vacuum packaging meat?",
      choice: [
        "To add flavor",
        "To increase transparency",
        "To reduce storage space",
        "To store meat in an oxygen-free environment"
      ],
      answer: "To store meat in an oxygen-free environment"
    },
    {
      question: "Which is not a method of meat inspection?",
      choice: [
        "Sensory evaluation",
        "Chemical testing",
        "Color grading",
        "Pack date verification"
      ],
      answer: "Pack date verification"
    },
    {
      question: "What differentiates quality grading from yield grading in meat?",
      choice: [
        "Quality grading measures tenderness, yield grading measures quantity",
        "Quality grading measures fat content, yield grading measures muscle",
        "Quality grading measures overall quality, yield grading measures the amount of usable meat",
        "Quality grading is voluntary, yield grading is mandatory"
      ],
      answer: "Quality grading measures overall quality, yield grading measures the amount of usable meat"
    },
    {
      question: "What is the significance of knowing where a cut comes from on the carcass?",
      choice: [
        "To price the meat accurately",
        "To determine the appropriate cooking method",
        "To simplify the packaging process",
        "To ensure legal compliance"
      ],
      answer: "To determine the appropriate cooking method"
    },
    {
      question: "Why is collagen important in cooking meats?",
      choice: [
        "It thickens sauces naturally",
        "It enhances flavor",
        "It breaks down into gelatin, tenderizing the meat",
        "It reduces cooking time"
      ],
      answer: "It breaks down into gelatin, tenderizing the meat"
    },
    {
      question: "What type of animal is referred to as 'Ovine'?",
      choice: ["Cattle", "Pig", "Sheep", "Goat"],
      answer: "Sheep"
    },
    {
      question: "What does the term 'Prime' refer to in meat grading?",
      choice: [
        "The lowest quality of meat",
        "The highest grade of beef",
        "The most commonly sold grade of pork",
        "A method of butchering"
      ],
      answer: "The highest grade of beef"
    },
    {
      question: "What is the primary purpose of meat inspection?",
      choice: [
        "To determine the price of meat",
        "To enhance meat flavor",
        "To ensure meat is safe to consume",
        "To speed up the butchering process"
      ],
      answer: "To ensure meat is safe to consume"
    },
    {
      question: "Which term describes the fat that is on top of muscles and generally not edible?",
      choice: [
        "Intramuscular fat",
        "Intermuscular fat",
        "Subcutaneous fat",
        "Visceral fat"
      ],
      answer: "Intermuscular fat"
    },
    {
      question: "What does 'Vacuum packaging' help prevent in stored meats?",
      choice: [
        "Overcooking",
        "Freezer burn",
        "Loss of color",
        "Spoilage"
      ],
      answer: "Spoilage"
    },
    {
      question: "Which of these is a term used to describe the quality grading of meats?",
      choice: [
        "Packability",
        "Marbling",
        "Palatability",
        "Cutability"
      ],
      answer: "Palatability"
    },
    {
      question: "Which term describes the fibrous protein that breaks down into gelatin?",
      choice: ["Keratin", "Elastin", "Collagen", "Myoglobin"],
      answer: "Collagen"
    },
    {
      question: "What does 'FIFO' stand for in food storage?",
      choice: [
        "First In, First Out",
        "Final Input, First Output",
        "First In, Final Out",
        "Full Input, Full Output"
      ],
      answer: "First In, First Out"
    },
    {
      question: "Which type of meat is referred to when using the term 'Porcine'?",
      choice: ["Beef", "Lamb", "Pork", "Poultry"],
      answer: "Pork"
    },
    {
      question: "What is 'marbling' a reference to in meat quality?",
      choice: [
        "The pattern of fat on the edge of the meat",
        "The distribution of intramuscular fat",
        "The color of the meat surface",
        "The pattern of bones within the cut"
      ],
      answer: "The distribution of intramuscular fat"
    },
    {
      question: "What is the main concern of meat inspection by agencies like the USDA?",
      choice: [
        "Improving the taste of meat",
        "Ensuring the meat is safe to consume",
        "Reducing the cost of meat production",
        "Enhancing the appearance of meat"
      ],
      answer: "Ensuring the meat is safe to consume"
    },
    {
      question: "What does 'HRI cuts' stand for?",
      choice: [
        "Highly Rated Institutional cuts",
        "Hotel, Restaurant, and Institution cuts",
        "Health Related Issues cuts",
        "High Resilience Industry cuts"
      ],
      answer: "Hotel, Restaurant, and Institution cuts"
    },
    {
      question: "Which of the following is not a primary purpose of vacuum packaging in the meat industry?",
      choice: [
        "To enhance meat flavor over time",
        "To extend the shelf life of meat products",
        "To prevent the growth of aerobic bacteria",
        "To reduce the use of chemical preservatives"
      ],
      answer: "To enhance meat flavor over time"
    },
    {
      question: "Why is it important to know the 'Pack date' of meat products?",
      choice: [
        "To determine the meat's cooking time",
        "To understand the meat's price fluctuations",
        "To know how fresh the meat is",
        "To decide the seasoning for the meat"
      ],
      answer: "To know how fresh the meat is"
    },
    {
      question: "What does the term 'Intermuscular fat' refer to?",
      choice: [
        "Fat within the muscle fibers",
        "Fat between different muscles",
        "Fat under the skin of an animal",
        "Artificially added fat"
      ],
      answer: "Fat between different muscles"
    },
    {
      question: "What is 'marrow' in the context of meat?",
      choice: [
        "The fat found under the skin",
        "The bones used for making broth",
        "The edible substance found inside bones",
        "The connective tissue in joints"
      ],
      answer: "The edible substance found inside bones"
    },
    {
      question: "What characterizes 'Choice' grade in beef?",
      choice: [
        "It's the lowest quality commonly sold",
        "It's considered the best quality",
        "It's a middle-grade quality commonly sold",
        "It's only used for ground beef"
      ],
      answer: "It's a middle-grade quality commonly sold"
    },
    {
      question: "What does 'No Roll' indicate in meat grading?",
      choice: [
        "Meat that cannot be used for rolling cuts",
        "Meat without any USDA grading",
        "Meat that is too tough to be rolled",
        "Meat that is pre-rolled for convenience"
      ],
      answer: "Meat without any USDA grading"
    },
    {
      question: "What is the primary function of 'intramuscular fat' in meats?",
      choice: [
        "To prevent spoilage",
        "To increase cooking speed",
        "To enhance flavor and tenderness",
        "To reduce cooking temperature requirements"
      ],
      answer: "To enhance flavor and tenderness"
    },
    {
      question: "Why are 'natural casings' used in sausage making?",
      choice: [
        "They provide a uniform shape to sausages",
        "They are cheaper than synthetic casings",
        "They add flavor and have a natural texture",
        "They increase the shelf life of sausages"
      ],
      answer: "They add flavor and have a natural texture"
    },
    {
      question: "What are 'sub-primal cuts' of beef?",
      choice: [
        "The initial large sections from slaughtering",
        "Cuts derived from breaking down primal cuts",
        "The smallest cuts sold at retail",
        "Unprocessed whole carcasses"
      ],
      answer: "Cuts derived from breaking down primal cuts"
    },
    {
      question: "What is the purpose of 'aging beef'?",
      choice: [
        "To comply with safety regulations",
        "To increase the beef's nutrient content",
        "To enhance its flavor and tenderness",
        "To make it easier to transport and store"
      ],
      answer: "To enhance its flavor and tenderness"
    },
    {
      question: "What does 'Frenched' refer to in meat cuts?",
      choice: [
        "Meat packaged without skin or bones",
        "Bone-in cuts with the meat trimmed away from the bone end",
        "Cuts made across the grain",
        "Meat cuts rolled and tied for roasting"
      ],
      answer: "Bone-in cuts with the meat trimmed away from the bone end"
    },
    {
      question: "What is 'Trichinosis'?",
      choice: [
        "A method of meat preservation",
        "A nutritional deficiency in wild game",
        "A parasitic disease potentially found in pork",
        "A type of meat cut"
      ],
      answer: "A parasitic disease potentially found in pork"
    },
    {
      question: "Which description fits 'medallion' cuts best?",
      choice: [
        "Long, thin slices of meat for stir-frying",
        "Small, thick, round cuts typically from the loin for grilling or sautéing",
        "Large, flat pieces used for roasting",
        "Thinly sliced meat for sandwiches"
      ],
      answer: "Small, thick, round cuts typically from the loin for grilling or sautéing"
    },
    {
      question: "What is the main benefit of 'dry curing' compared to 'wet curing'?",
      choice: [
        "It is faster and adds more moisture to the meat",
        "It produces a stronger flavor without adding extra water",
        "It reduces the risk of contamination",
        "It extends the shelf life longer"
      ],
      answer: "It produces a stronger flavor without adding extra water"
    },
    {
      question: "What is the significance of 'Suckling pig' in culinary terms?",
      choice: [
        "It refers to pigs raised on organic diets",
        "It describes very young pigs, often roasted whole",
        "It indicates pigs used specifically for pork chops",
        "It is a term for genetically modified pigs"
      ],
      answer: "It describes very young pigs, often roasted whole"
    },
    {
      question: "Which of the following is not a typical use for 'charcuterie'?",
      choice: [
        "As an appetizer on meat platters",
        "For breakfast with eggs and toast",
        "In sandwiches or on pizzas",
        "As part of gourmet salads"
      ],
      answer: "For breakfast with eggs and toast"
    },
    {
      question: "Why is 'intramuscular fat' important for meat quality?",
      choice: [
        "It increases the weight of the meat",
        "It improves the flavor and texture of the meat",
        "It decreases cooking time",
        "It reduces the price of the meat"
      ],
      answer: "It improves the flavor and texture of the meat"
    },
    {
      question: "What does 'Mutton' refer to?",
      choice: [
        "Meat from young lambs",
        "Meat from female sheep",
        "Meat from male goats",
        "Meat from older sheep"
      ],
      answer: "Meat from older sheep"
    },
    {
      question: "What characterizes 'Yearling' meat?",
      choice: [
        "Meat from animals older than two years",
        "Meat from animals slaughtered at around 12 months old",
        "Meat from newborn animals",
        "Meat specifically used in year-end celebrations"
      ],
      answer: "Meat from animals slaughtered at around 12 months old"
    },
    {
      question: "What is the primary purpose of the 'FIFO' method in meat storage?",
      choice: [
        "To keep the most recently processed meat at the front",
        "To improve the marbling of stored meat",
        "To ensure older stock is used before newer stock",
        "To enhance the flavor of aged meats"
      ],
      answer: "To ensure older stock is used before newer stock"
    },
    {
      question: "What does 'across the grain' refer to in meat preparation?",
      choice: [
        "Cutting meat parallel to the muscle fibers",
        "Cutting meat perpendicular to the muscle fibers",
        "Grinding meat into a fine texture",
        "Marinating meat before cooking"
      ],
      answer: "Cutting meat perpendicular to the muscle fibers"
    },
    {
      question: "What is a 'chop ready rack'?",
      choice: [
        "A storage method for frozen meats",
        "A cut of meat that is pre-trimmed and ready to be cut into individual chops",
        "A spice rack designed for meat seasonings",
        "A kitchen tool for tenderizing meat chops"
      ],
      answer: "A cut of meat that is pre-trimmed and ready to be cut into individual chops"
    },
    {
      question: "What does 'conformation' refer to in meat grading?",
      choice: [
        "The flavor profile of the meat",
        "The age of the animal at the time of slaughter",
        "The meat to bone ratio",
        "The health condition of the animal"
      ],
      answer: "The meat to bone ratio"
    },
    {
      question: "What is 'scallopine'?",
      choice: [
        "A thick cut of meat for slow cooking",
        "A very thin cut of meat, typically veal or pork, for quick cooking",
        "A method of smoking meats",
        "A type of seasoning for meats"
      ],
      answer: "A very thin cut of meat, typically veal or pork, for quick cooking"
    },
    {
      question: "Describe 'frenched chop'.",
      choice: [
        "A chop where the bone is left long and clean of meat",
        "A chop cut from the rib section with no bone",
        "A boneless and skinless piece of chicken",
        "A pork chop with added French herbs"
      ],
      answer: "A chop where the bone is left long and clean of meat"
    },
    {
      question: "What are 'sub-primal cuts' of a leg of veal?",
      choice: [
        "Shank, loin, and ribs",
        "Hind shank, top round, and sirloin",
        "Top round, bottom round, and knuckle",
        "Rib, brisket, and chuck"
      ],
      answer: "Top round, bottom round, and knuckle"
    },
    {
      question: "What is the main difference between beef and veal carcass division?",
      choice: [
        "Beef is typically divided into more cuts than veal",
        "Veal is divided into smaller, more numerous cuts",
        "Veal is not divided into primal cuts",
        "Beef and veal divisions are essentially the same"
      ],
      answer: "Veal is divided into smaller, more numerous cuts"
    },
    {
      question: "What are the grades of veal determined by?",
      choice: [
        "Color and texture of the meat",
        "Weight and age of the animal",
        "Marbling and fat content",
        "Size, conformation, color, and muscle fiber quality"
      ],
      answer: "Size, conformation, color, and muscle fiber quality"
    },
    {
      question: "What characterizes 'PSE pork'?",
      choice: [
        "Pale, Soft, and Exudative appearance due to stress and handling",
        "Prime, Select, and Excellent grades",
        "Pork Specially Exported",
        "Packed, Sealed, and Encased"
      ],
      answer: "Pale, Soft, and Exudative appearance due to stress and handling"
    },
    {
      question: "What is the purpose of curing meats?",
      choice: [
        "To extend shelf life and change textures",
        "To make meats suitable for raw consumption",
        "To enhance the natural color of meats",
        "To reduce the cost of meat production"
      ],
      answer: "To extend shelf life and change textures"
    },
    {
      question: "Which type of meat is 'Hot house lamb'?",
      choice: [
        "Lamb that is raised in a controlled, indoor environment",
        "A very small, very young lamb meant to be roasted whole",
        "Lamb that is seasoned and cooked at high temperatures",
        "Lamb processed in a greenhouse setting"
      ],
      answer: "A very small, very young lamb meant to be roasted whole"
    },
    {
      question: "What is 'in-house grading'?",
      choice: [
        "Grading performed by external inspectors at the farm",
        "A standard set by meat distributors for internal quality control",
        "Grading assessed by a packaging plant, not regulated by the USDA",
        "Consumer grading provided in-house at grocery stores"
      ],
      answer: "Grading assessed by a packaging plant, not regulated by the USDA"
    },
    {
      question: "What does 'bob veal' refer to?",
      choice: [
        "Veal from calves aged 3-5 months old",
        "Veal from very young calves, less than one month old",
        "Veal that has been specially branded",
        "A cut of veal used primarily for stews"
      ],
      answer: "Veal from very young calves, less than one month old"
    },
    {
      question: "What are the primary cuts of a market style hog?",
      choice: [
        "Ham, loin, boston butt, picnic, belly with spare ribs",
        "Shoulder, belly, jowl, neck bones, back ribs",
        "Loin, shank, rib, cheek, tail",
        "Brisket, round, chuck, plate"
      ],
      answer: "Ham, loin, boston butt, picnic, belly with spare ribs"
    },
    {
      question: "Why might a chef choose to fabricate portion cuts in the kitchen?",
      choice: [
        "To ensure higher quality and customization",
        "To comply with local health regulations",
        "Because it is less expensive than pre-cut portions",
        "To reduce the need for skilled labor"
      ],
      answer: "To ensure higher quality and customization"
    },
    {
      question: "What is a primary benefit of using 'natural casings' for sausages?",
      choice: [
        "They are more cost-effective than synthetic casings",
        "They can be produced in larger quantities",
        "They offer better flavor and texture",
        "They last longer on the shelf"
      ],
      answer: "They offer better flavor and texture"
    },
    {
      question: "What does 'TCM' refer to in meat processing?",
      choice: [
        "Total Cured Meat",
        "Thermal Curing Method",
        "Treated Cured Meat",
        "A group of sodium-based curing agents"
      ],
      answer: "A group of sodium-based curing agents"
    },
    {
      question: "Why is 'yield grading' important in lamb purchasing?",
      choice: [
        "It determines the flavor profile",
        "It assesses the economic value based on the amount of usable meat",
        "It is a regulatory requirement for all lamb products",
        "It indicates the age of the lamb"
      ],
      answer: "It assesses the economic value based on the amount of usable meat"
    },
    {
      question: "What does the term 'frenched' indicate about a meat cut?",
      choice: [
        "The bone ends have been trimmed and cleaned of meat",
        "It has been marinated with French herbs",
        "The meat has been sliced thinly and layered",
        "It has been ground and reformed into a patty"
      ],
      answer: "The bone ends have been trimmed and cleaned of meat"
    },
    {
      question: "What is the purpose of 'dry cure' in meat processing?",
      choice: [
        "To enhance the meat's natural moisture content",
        "To add bulk to the meat",
        "To cure the meat by applying salt and other seasonings directly",
        "To cook the meat slowly using a dry heat method"
      ],
      answer: "To cure the meat by applying salt and other seasonings directly"
    }
  ];
  


