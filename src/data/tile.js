const images = require.context('./img', true, /\.png$/);

const game = {
    tile: [
        {
            id: 0,
            description: 'Fields are easy to cross.',
            title: 'Field',
            src: images('./tile_field.png'),
            passable: true,
            swamp: false

        },
        {
            id: 1,
            description: 'The swamp is treacherous, horses may not enter.',
            title: 'Swamp',
            src: images('./tile_swamp.png'),
            passable: true,
            swamp: true
        },
        {
            id: 2,
            description: 'You may not move through the mountain.',
            title: 'Mountain',
            src: images('./tile_mountain.png'),
            passable: false,
            swamp: false
        },
        {
            id: 3,
            description: 'Villages may contain new opportunities.',
            title: 'Village',
            src: images('./tile_village.png'),
            passable: true,
            swamp: false
        },
        {
            id: 4,
            description: 'Archers and squires may not enter the castle. When an enemy enters your castle, you lose.',
            title: 'Castle',
            src: images('./tile_castle.png'),
            passable: true,
            swamp: false
        },
        {
          id: 5,
          description: 'You cannot move through a lake.',
          title: 'Lake',
          src: images('./tile_lake.png'),
          passable: false,
          swamp: false
      }
    ],
     figures: [
         {
             id: 0,
             description:'No figure',
             title: 'None',
             src: images('./nothing.png'),
             money: 0
           },
          {
             id: 1,
             description: 'Player character',
             title: 'Player',
             src: images('./test_figure.png'),
             money: 0
          }

     ],
};

export default game;