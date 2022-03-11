const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);
const FILE_EXTENSION = 'png';
const network = NETWORK.eth;
const {parseCsv} = require('../lib/parse-csv-to-json');

// General metadata for Ethereum
const namePrefix = "Rick Head";
const description = "Rick Head generative script";
const baseUri = "ipfs://bafybeihcyruaeza7uyjd6ugicbcrqumejf6uf353e5etdkhotqffwtguva";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const pipe = (...functions) => (value) => {
  return functions.reduce((currentValue, currentFunction) => {
    return currentFunction(currentValue);
  }, value)
};

// const rawLayersOptions = parseCsv();
const rawLayersOptions = {
  pants: {
    order: 1,
    elements: [
      {
        filename: 'army pants_1',
        weight: 1
      },
      {
        filename: 'army pants_2',
        weight: 1
      },
      {
        filename: 'army pants_3',
        weight: 1
      },
      {
        filename: 'army pants_4',
        weight: 1
      },
      {
        filename: 'army pants_5',
        weight: 1
      },
      {
        filename: 'army pants_6',
        weight: 1
      },
    ]
  },
  top: {
    order: 2,
    elements: [
      {
        filename: 'debardeur_1',
        weight: 20
      },
      {
        filename: 'debardeur_2',
        weight: 20
      },
      {
        filename: 'debardeur_3',
        weight: 20
      },
      {
        filename: 'debardeur_4',
        weight: 20
      },
      {
        filename: 'debardeur_5',
        weight: 20
      },
    ]
  },
  hat: {
    order: 3,
    elements: [
      {
        filename: 'bear cap_1',
        weight: 1
      },
      {
        filename: 'bear cap_2',
        weight: 1
      },
      {
        filename: 'bear cap_3',
        weight: 1
      },
      {
        filename: 'bear cap_4',
        weight: 1
      },
      {
        filename: 'bear cap_5',
        weight: 1
      },
      {
        filename: 'bear cap_6',
        weight: 1
      },
      {
        filename: 'bear cap_7',
        weight: 1
      },
      {
        filename: 'bear cap_8',
        weight: 1
      },
      {
        filename: 'bear cap_9',
        weight: 1
      },
      {
        filename: 'bear cap_10',
        weight: 1
      },
      {
        filename: 'bear cap_11',
        weight: 1
      },
      {
        filename: 'bear cap_12',
        weight: 1
      },
      {
        filename: 'beret_1',
        weight: 1
      },
      {
        filename: 'beret_2',
        weight: 1
      },
      {
        filename: 'beret_3',
        weight: 1
      },
      {
        filename: 'beret_4',
        weight: 1
      },
      {
        filename: 'beret_5',
        weight: 1
      },
      {
        filename: 'beret_6',
        weight: 1
      },
      {
        filename: 'beret_7',
        weight: 1
      },
      {
        filename: 'beret_8',
        weight: 1
      },
      {
        filename: 'beret_9',
        weight: 1
      },
      {
        filename: 'beret_10',
        weight: 1
      },
      {
        filename: 'beret_11',
        weight: 1
      },
      {
        filename: 'bob_1',
        weight: 1
      },
      {
        filename: 'bob_2',
        weight: 1
      },
      {
        filename: 'bob_3',
        weight: 1
      },
      {
        filename: 'bob_4',
        weight: 1
      },
      {
        filename: 'bob_5',
        weight: 1
      },
      {
        filename: 'bob_6',
        weight: 1
      },
      {
        filename: 'bob_7',
        weight: 1
      },
      {
        filename: 'bob_8',
        weight: 1
      },
      {
        filename: 'bob_9',
        weight: 1
      },
      {
        filename: 'bob_10',
        weight: 1
      },
      {
        filename: 'bob_11',
        weight: 1
      },
      {
        filename: 'bob_12',
        weight: 1
      },
      {
        filename: 'construction helmet_1',
        weight: 1
      },
      {
        filename: 'construction helmet_2',
        weight: 1
      },
      {
        filename: 'construction helmet_3',
        weight: 1
      },
      {
        filename: 'construction helmet_4',
        weight: 1
      },
      {
        filename: 'construction helmet_5',
        weight: 1
      },
      {
        filename: 'construction helmet_6',
        weight: 1
      },
      {
        filename: 'construction helmet_7',
        weight: 1
      },
      {
        filename: 'construction helmet_8',
        weight: 1
      },
      {
        filename: 'construction helmet_9',
        weight: 1
      },
      {
        filename: 'construction helmet_10',
        weight: 1
      },
      {
        filename: 'construction helmet_11',
        weight: 1
      },
      {
        filename: 'construction helmet_12',
        weight: 1
      },
      {
        filename: 'hair1_1',
        weight: 1
      },
      {
        filename: 'hair1_2',
        weight: 1
      },
      {
        filename: 'hair1_3',
        weight: 1
      },
      {
        filename: 'hair1_4',
        weight: 1
      },
      {
        filename: 'stetson_1',
        weight: 1
      },
      {
        filename: 'stetson_2',
        weight: 1
      },
      {
        filename: 'stetson_3',
        weight: 1
      },
      {
        filename: 'stetson_4',
        weight: 1
      },
      {
        filename: 'stetson_5',
        weight: 1
      },
      {
        filename: 'stetson_6',
        weight: 1
      },
      {
        filename: 'stetson_7',
        weight: 1
      },
      {
        filename: 'stetson_8',
        weight: 1
      },
      {
        filename: 'stetson_9',
        weight: 1
      },
      {
        filename: 'stetson_10',
        weight: 1
      },
      {
        filename: 'stetson_11',
        weight: 1
      },
    ]
  },
  glasses: {
    order: 4,
    elements: [
      {
        filename: '3Dglasses_1',
        weight: 2
      },
      {
        filename: '3Dglasses_2',
        weight: 2
      },
      {
        filename: 'black frame_1',
        weight: 2
      },
      {
        filename: 'black frame_2',
        weight: 2
      },
      {
        filename: 'black frame_3',
        weight: 2
      },
      {
        filename: 'black frame_4',
        weight: 2
      },
      {
        filename: 'black frame_5',
        weight: 2
      },
      {
        filename: 'black frame_6',
        weight: 2
      },
      {
        filename: 'black frame_7',
        weight: 2
      },
      {
        filename: 'black frame_8',
        weight: 2
      },
      {
        filename: 'black frame_9',
        weight: 2
      },
      {
        filename: 'black frame_10',
        weight: 2
      },
      {
        filename: 'black frame_11',
        weight: 2
      },
      {
        filename: 'love glasses_1',
        weight: 2
      },
      {
        filename: 'love glasses_2',
        weight: 2
      },
      {
        filename: 'love glasses_3',
        weight: 2
      },
      {
        filename: 'love glasses_4',
        weight: 2
      },
      {
        filename: 'love glasses_5',
        weight: 2
      },
      {
        filename: 'love glasses_6',
        weight: 2
      },
      {
        filename: 'love glasses_7',
        weight: 2
      },
      {
        filename: 'love glasses_8',
        weight: 2
      },
      {
        filename: 'round sun glasses_1',
        weight: 2
      },
      {
        filename: 'round sun glasses_2',
        weight: 2
      },
      {
        filename: 'round sun glasses_3',
        weight: 2
      },
      {
        filename: 'round sun glasses_4',
        weight: 2
      },
      {
        filename: 'round sun glasses_5',
        weight: 2
      },
      {
        filename: 'round sun glasses_6',
        weight: 2
      },
      {
        filename: 'round sun glasses_7',
        weight: 2
      },
      {
        filename: 'round sun glasses_8',
        weight: 2
      },
      {
        filename: 'round sun glasses_9',
        weight: 2
      },
      {
        filename: 'round sun glasses_10',
        weight: 2
      },
      {
        filename: 'round sun glasses_11',
        weight: 2
      },
      {
        filename: 'round sun glasses_12',
        weight: 2
      },
      {
        filename: 'round sun glasses_13',
        weight: 2
      },
      {
        filename: 'round sun glasses_14',
        weight: 2
      },
      {
        filename: 'round sun glasses_15',
        weight: 2
      },
      {
        filename: 'round sun glasses_16',
        weight: 2
      },
      {
        filename: 'round sun glasses_17',
        weight: 2
      },
      {
        filename: 'sun glasses_1',
        weight: 2
      },
      {
        filename: 'sun glasses_2',
        weight: 2
      },
      {
        filename: 'sun glasses_3',
        weight: 2
      },
      {
        filename: 'sun glasses_4',
        weight: 2
      },
      {
        filename: 'sun glasses_5',
        weight: 2
      },
      {
        filename: 'sun glasses_6',
        weight: 2
      },
      {
        filename: 'sun glasses_7',
        weight: 2
      },
      {
        filename: 'sun glasses_8',
        weight: 2
      },
    ]
  },
  boots: {
    order: 5,
    elements: [
      {
        filename: 'army boots_1',
        weight: 10,
      },
      {
        filename: 'army boots_2',
        weight: 20,
      },
      {
        filename: 'army boots_3',
        weight: 20,
      },
      {
        filename: 'army boots_4',
        weight: 50,
      },
    ]
  },
  template: {
    order: 6,
    elements: [{ filename: 'default', weight: 100 }]
  },
  background: {
    order: 7,
    elements: [{filename: 'default', weight: 100}]
  },
};
function changeFileExtension(extension, param) {
  Object.entries(param).forEach(([, val]) => {
    val.elements.forEach((el, index, arr) => {
      arr[index].filename += '.' + extension;
      if (arr[index].exclude) arr[index].exclude.forEach((el, i, r) => {
        r[i] += '.' + extension;
      })
    })
  });
  return param;
}
function exclusionHandler(param) {
  const paramEntries = Object.entries(param);
  paramEntries
      .forEach(([key, value]) => {
        value.elements.forEach((el) => {
          if(el.exclude) {
            fillExcluded(el.exclude, el, key);
          }
        })
      });
  function fillExcluded(excludeFiles, el) {
    paramEntries.forEach(([key, value]) => {
      value.elements.forEach((element, index) => {
        if(excludeFiles.includes(element.filename)) {
          const elementToFill = param[key].elements[index];
          if (elementToFill.exclude) {
            if (elementToFill.exclude.includes(element.filename)) return
            elementToFill.exclude.push(el.filename);
          }
          else {
            elementToFill.exclude = [el.filename];
          }
        }
      })
    })
  }
  return param;
}
const layersOptions = pipe(changeFileExtension.bind(null, FILE_EXTENSION), exclusionHandler)(rawLayersOptions);

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 3333,
    layersOrder: Object.entries(layersOptions)
        .sort((last, el) => {
          return el[1].order - last[1].order;
        })
        .map(([key]) => {
          return {
            name: key,
          }
        })
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 2160,
  height: 2160,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  layersOptions,
};
