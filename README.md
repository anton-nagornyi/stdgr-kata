# Stedger Kata

Dear reader! This is a chance to show of your coding skills with this kata - a "fun" little coding exercise, which is designed to practice your abilities, but we've found that they're a great way for people to demonstrate their programming prowess.

Please spend no more than 30 minutes on the task :-) Please use node.js for your solution, but feel free to break out of the provided folder structure. We're happy to accept solutions demonstrating use of TDD. Also please note that there's no prize for a 'finished' solution! Please comment your thought process in the code itself. If you have thoughts about how the whole system would look, please feel free to share in a NOTES.md file.

Please provide your solution as a separate public copy of this repository.

## The Kata

At Stedger we're handling a lot of products, which all have some sort of product information, be it descriptions, titles, or images for instance. This data is pulled in from remote services, or internally from the Stedger platform.

Of course when viewing a product as a customer, it only has a single title, and a single description, so the data needs to be merged to create the final product so the title could be from one data source, while the description or images is from another.

Please demonstrate how you would implement this data aggregation with prioritized data layers.

An example aggregated product could look like this, with the following data layers:
```
const productLayers = [
  {
    title: 'Red pants',
    description: 'Red pants are highly addictive, and made out of awesome stuff only!',
  },
  {
    title: 'Red pants from manufacturor title',
    tags: ['red', 'pants', 'awesome'],
    images: [{ src: 'https://picsum.photos/200' }, { src: 'https://picsum.photos/350' }]
  }
]

const output = {
  title: 'Red pants',
  description: 'Red pants are highly addictive, and made out of awesome stuff only!',
  tags: ['red', 'pants', 'awesome'],
  images: [{ src: 'https://picsum.photos/200' }, { src: 'https://picsum.photos/350' }]
}
```

