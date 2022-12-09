
let characters = [
    {"forEach":"Make an unordered list with each bullet having name, show, and age separated by comma"},
    {"forEach2": "Print the total sum of all the ages of characters on your webpage"},
    {"map1": "Print an array of charaters name and show."},
    {"map2": "Make a new array where each object has a an extra key as lucky number which is calculated using formula Math.floor((age/(length of first name))"},
    {"filter1": "Filter the list of characters those who were age greater than 35"},
    {"filter2": "Filter the list of shows where length of character name is greater than 5"},
    {"find1": "Find a character whose length(first name)<length(last name)"},
    {"find2": "Find a character whose age is 36"},
    {id: 1, name: "Michael Scott", show: "The Office", age: 47},
    {id: 2, name: "Walter White", show: "Breaking Bad", age: 54},
    {id: 3, name: "Omar Little", show: "The Wire", age: 32},
    {id: 4, name: "Olivia Pope", show: "Scandal", age: 36},
    {id: 4, name: "Jesse Pinkman", show: "Breaking Bad", age: 38},
]

let beverages = [
    { id: 1, name: 'Buzz', qty_available: 3, tagline: 'A Real Bitter Experience.', first_brewed: '09/2007', description: 'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.' },
  
    { id: 2, name: 'Trashy Blonde', qty_available: 30, tagline: "You Know You Shouldn't", first_brewed: '04/2008', description: 'A titillating, neurotic, peroxide punk of a Pale A…the customary BrewDog bite and imaginative twist.' },
  
    { id: 3, name: 'Berliner Weisse With Yuzu - B-Sides', qty_available: 24, tagline: 'Japanese Citrus Berliner Weisse.', first_brewed: '11/2015', description: 'Japanese citrus fruit intensifies the sour nature of this German classic.' },
  
    { id: 4, name: 'Pilsen Lager', qty_available: 16, tagline: 'Unleash the Yeast Series.', first_brewed: '09/2013', description: 'Our Unleash the Yeast series was an epic experimen…nols, although it can add a hint of butterscotch.' },
  
    { id: 5, name: "Water", qty_available: 11, tagline: "It won't get you drunk", first_brewed: "unknown", description: "This delicious beverage is all natural!" }
  ]

  let marvelCharacters = [
    { id: 1, name: 'Captain America', year_created: 1941, power_source: 'Injected with Super-Soldier serum', weapons: ['Vibranium shield'] },
    { id: 2, name: 'Black Panther', year_created: 1966, power_source: 'Having the juices of the Heart-Shaped Herb applied to his body', weapons: ['Energy dagger', 'anti-metal claws'] },
    { id: 3, name: 'Groot', year_created: 1960, power_source: 'Born as a Flora colossus', weapons: ['His powers'] },
    { id: 4, name: 'Hawkeye', year_created: 1964, power_source: 'Trained his skills in marksmanship', weapons: ['Bows and arrows'] },
    { id: 5, name: 'Black Widow', year_created: 1964, power_source: 'Trained as a KGB operative and dangerous assassin', weapons: ['Batons', 'taser disks', 'handguns'] },
    { id: 6, name: 'The Winter Soldier', year_created: 1941, power_source: 'Injected with the infinity formula', weapons: ['Snipers', 'rifles'] },
    { id: 7, name: 'Star-Lord', year_created: 1976, power_source: 'Part human and part celestial', weapons: ['Element Gun'] },
    { id: 8, name: 'Iron Man', year_created: 1963, power_source: 'His suit', weapons: ['Bows and arrowRepulsor rays', 'uni-beam projector', 'lasers'] },
    { id: 9, name: 'Hulk', year_created: 1962, power_source: 'exposed to gamma radiation', weapons: ['His strength'] },
    { id: 10, name: 'Spider man', year_created: 1963, power_source: 'Bitten by a radioactive spider', weapons: ['Web-shooters'] },
    { id: 11, name: 'Captain Marvel', year_created: 1968, power_source: 'Exposed to Kree technology', weapons: ['Nega Bands'] },
    { id: 12, name: 'Doctor Strange', year_created: 1963, power_source: 'Trained by Ancient One', weapons: ['Cloak of Levitations', 'Eye of Agamotto', 'Orb of Agamotto'] },
    { id: 13, name: 'Thor', year_created: 1962, power_source: 'Son of Asgardian God of Thunder', weapons: ['Warhammer Mjolnir'] },
    { id: 14, name: 'Antman', year_created: 1962, power_source: 'Tested the Pym Particles serum on himself', weapons: ['Stinger firearm'] }
  ]

  
  let harryPotterBooks = [
    { id: 1, title: "Harry Potter and the Sorcerer's Stone", release_year_US: 1998 },
    { id: 2, title: "Harry Potter and the Chamber of Secrets", release_year_US: 1999 },
    { id: 3, title: "Harry Potter and the Prisioner of Azkaban", release_year_US: 1999 },
    { id: 4, title: "Harry Potter and the Goblet of Fire", release_year_US: 2000 },
    { id: 5, title: "Harry Potter and the Order of Phoenix", release_year_US: 2003 },
    { id: 6, title: "Harry Potter and the Half-Blood Prince", release_year_US: 2005 },
    { id: 7, title: "Harry Potter and the Deathly Hallows", release_year_US: 2007 },
    { id: 8, title: "Harry Potter and the Cursed Child", release_year_US: 2016 }
  ]
  
  let burgers = [
    { id: 1, name: "50/50 burger", origin: 'California, USA', description: "Half ground bacon, half ground beef burger patty developed by Scott Slater for Slater's 50/50 restaurant." },
    { id: 2, name: "Angus burger", origin: 'Scotland', description: "A hamburger made using beef from Angus cattle." },
    { id: 3, name: "Aussie Burger/Kiwiburger", origin: 'Australia', description: "Popular regional hamburger ingredients in Australia and New Zealand include canned beetroot, pineapple and a fried egg." },
    { id: 4, name: "Bacon cheeseburger", origin: 'USA', description: "Hamburger with bacon and cheese is a bacon cheeseburger, which became an official menu item at an A&W Restaurant owned by Dale Mulder in Lansing, Michigan in 1963." },
    { id: 5, name: "Banquet burger", origin: 'Toronto, Canada', description: "Similar to a bacon cheeseburger, this burger is often served open-faced, with the hamburger patty, cheese, and bacon on a flat bottom bun next to the top rounded bun containing the lettuce, tomato, and onion slices." },
    { id: 6, name: "Barbeque burger", origin: 'Texas, USA', description: "Prepared with ground beef, mixed with onions and barbecue sauce, and then grilled." },
    { id: 7, name: "Buffalo burger", origin: 'New York, USA', description: "Prepared with meat from the American Bison,[11] buffalo burgers have less cholesterol, less fat, and fewer calories than beef hamburgers and chicken hamburgers. " },
    { id: 8, name: "Cheeseburger", origin: 'USA', description: "The cheese is usually sliced, then added a short time before the hamburger finishes cooking to allow it to melt. In fast food restaurants, the cheese that is added to a cheeseburger is typically American cheese, but there are many other variations." },
  ]

  let rainbowColors = [
    { id: 1, name: "red", hex_code: '#FF0000', decimal: '255,0,0' },
    { id: 2, name: "orange", hex_code: '#FFA500', decimal: '255,165,0' },
    { id: 3, name: "yellow", hex_code: '#FFFF00', decimal: '255,255,0' },
    { id: 4, name: "green", hex_code: '008000', decimal: '0,128,0' },
    { id: 5, name: "blue", hex_code: '#0000FF', decimal: '0,0,255' },
    { id: 6, name: "indigo", hex_code: '#4B0082', decimal: '75,0,130' },
    { id: 7, name: "violet", hex_code: '#EE82EE', decimal: '238,130,238' }
  ]

  data = [
    { name: 'Butters', age: 3, type: 'dog' },
    { name: 'Lizzy', age: 6, type: 'dog' },
    { name: 'Red', age: 1, type: 'cat' },
    { name: 'Joey', age: 3, type: 'dog' },
  ]

  let arrays = [characters, beverages, marvelCharacters, harryPotterBooks, burgers, rainbowColors, data]

 