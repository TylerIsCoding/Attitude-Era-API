const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(cors());

const wrestlers = {
  'stone cold': {
    name: 'Steven James Anderson',
    age: 58,
    finisher: 'Stone Cold Stunner',
    image:
      'https://www.thesmackdownhotel.com/images/wrestling/wrestlers/full-body/stone-cold-steve-austin.png',
  },
  mankind: {
    name: 'Michael Francis Foley Sr.',
    age: 57,
    finisher: 'Mandible Claw',
    image:
      'https://www.thesmackdownhotel.com/images/wrestling/wrestlers/full-body/mick-foley.png',
  },
  undertaker: {
    name: 'Mark William Calaway',
    age: 57,
    finisher: 'Tombstone Piledriver',
    image:
      'https://www.thesmackdownhotel.com/images/wrestling/wrestlers/full-body/undertaker.png',
  },
  'triple h': {
    name: 'Paul Michael Levesque',
    age: 53,
    finisher: 'Pedigree',
    image:
      'https://www.thesmackdownhotel.com/images/wrestling/wrestlers/full-body/triple-h.png',
  },
  'heartbreak kid': {
    name: 'Shawn Michaels',
    age: 57,
    finisher: 'Sweet Chin Music',
    image:
      'https://www.thesmackdownhotel.com/images/wrestling/wrestlers/full-body/shawn-michaels.png',
  },
  'big show': {
    name: 'Paul Donald Wight II',
    age: 51,
    finisher: 'Chokeslam',
    image:
      'https://www.thesmackdownhotel.com/images/wrestling/wrestlers/full-body/big-show.png',
  },
  'ken shamrock': {
    name: 'Kenneth Wayne Shamrock',
    age: 59,
    finisher: 'Ankle Lock',
    image:
      'https://www.thesmackdownhotel.com/images/wrestling/wrestlers/full-body/ken-shamrock.png',
  },
  'bret hart': {
    name: 'Bret Sergeant Hart',
    age: 65,
    finisher: 'Sharpshooter',
    image:
      'https://www.thesmackdownhotel.com/images/wrestling/wrestlers/full-body/bret-hart.png',
  },
  'big boss man': {
    name: 'Raymond Walter Traylor Jr.',
    age: 41,
    finisher: 'Boss Man Slam',
    image:
      'https://www.thesmackdownhotel.com/images/wrestling/wrestlers/full-body/big-boss-man.png',
  },
  chyna: {
    name: 'Joan Marie Laurer',
    age: 45,
    finisher: 'Double Underhook Facebuster',
    image:
      'https://www.thesmackdownhotel.com/images/wrestling/wrestlers/full-body/chyna.png',
  },
  edge: {
    name: 'Adam Joseph Copeland',
    age: 49,
    finisher: 'Spear',
    image:
      'https://www.thesmackdownhotel.com/images/wrestling/wrestlers/full-body/edge.png',
  },
  unknown: {
    name: 'unknown',
    age: 'unknown',
    finisher: 'unknown',
    image: 'unknown',
  },
};

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.get('/api', (request, response) => {
  response.json(wrestlers);
});

app.get('/api/:name', (request, response) => {
  const wrestlerName = request.params.name.toLowerCase();
  const wrestler = wrestlers[wrestlerName];
  if (wrestler) {
    response.json(wrestler);
  } else {
    response.json(wrestlers['unknown']);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
