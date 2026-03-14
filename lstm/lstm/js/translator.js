const datasets = {
  tamil: [
    ["morning", "காலை"], ["night", "இரவு"], ["name", "பெயர்"], ["friend", "நண்பர்"],
    ["time", "நேரம்"], ["india", "இந்தியா"], ["home", "வீடு"], ["birthday", "பிறந்த நாள்"],
    ["moment", "நிமிடம்"], ["problem", "பிரச்சனை"], ["father", "தந்தை"], ["mother", "தாய்"],
    ["brother", "அண்ணன்"], ["sister", "தங்கை"], ["food", "உணவு"], ["water", "தண்ணீர்"],
    ["tea", "தேநீர்"], ["coffee", "காபி"], ["money", "பணம்"], ["school", "பள்ளி"],
    ["teacher", "ஆசிரியர்"], ["student", "மாணவர்"], ["hospital", "மருத்துவமனை"],
    ["doctor", "மருத்துவர்"], ["nurse", "செவிலியர்"], ["bus", "பேருந்து"], ["train", "ரயில்"],
    ["station", "நிலையம்"], ["airport", "விமானநிலையம்"], ["market", "சந்தை"], ["shop", "கடை"],
    ["hotel", "விடுதி"], ["room", "அறை"], ["bed", "படுக்கை"], ["book", "புத்தகம்"],
    ["pen", "பேன்"], ["phone", "தொலைபேசி"], ["computer", "கணினி"], ["tv", "தொலைக்காட்சி"],
    ["shirt", "சட்டை"], ["pants", "பேன்ட்"], ["shoes", "காலணிகள்"], ["hat", "தொப்பி"],
    ["car", "கார்"], ["bike", "பைக்"], ["road", "சாலை"], ["city", "நகரம்"],
    ["village", "கிராமம்"], ["sea", "கடல்"], ["mountain", "மலை"], ["river", "நதி"],
    ["rain", "மழை"], ["sun", "சூரியன்"], ["moon", "சந்திரன்"], ["star", "நட்சத்திரம்"],
    ["day", "நாள்"], ["animal", "விலங்கு"], ["plant", "தாவரம்"], ["tree", "மரம்"],
    ["flower", "மலர்"], ["leaf", "இலை"], ["stone", "கல்"], ["glass", "கண்ணாடி"],
    ["music", "இசை"], ["language", "மொழி"], ["letter", "கடிதம்"], ["photo", "படம்"],
    ["family", "குடும்பம்"], ["uncle", "மாமா"], ["aunt", "அத்தை"], ["nephew", "அண்ணான்"],
    ["niece", "அண்ணி"],

    ["go", "செல்"], ["come", "வா"], ["eat", "சாப்பிடு"], ["drink", "குடி"],
    ["see", "பார்"], ["run", "ஓடு"], ["walk", "நட"], ["read", "படி"],
    ["write", "எழுது"], ["sleep", "தூங்கு"], ["wake", "எழு"], ["buy", "வாங்கு"],
    ["sell", "விற்று"], ["talk", "பேசு"], ["listen", "கேள்"], ["work", "வேலை செய்"],
    ["study", "படி"], ["play", "விளையாடு"], ["wait", "காத்திரு"], ["call", "அழை"],
    ["show", "காட்டு"], ["start", "தொடங்கு"], ["stop", "நிறுத்து"], ["give", "கொடு"],
    ["take", "எடு"], ["learn", "கற்று கொள்"], ["teach", "கற்பி"], ["think", "சிந்தி"],
    ["believe", "நம்பு"], ["laugh", "சிரி"], ["cry", "அழு"], ["build", "கட்டு"],
    ["break", "உடை"], ["drive", "ஓட்டு"], ["cook", "சமை"], ["clean", "சுத்தப்படுத்து"],
    ["wash", "துவை"], ["swim", "நீந்து"], ["speak", "பேசு"], ["understand", "புரிந்து கொள்ளுங்கள்"],

    ["beautiful", "அழகு"], ["expensive", "விலை உயர்ந்த"], ["tired", "சோர்வான"],
    ["sick", "நோய்வாய்ப்பட்ட"], ["busy", "பிஸி"], ["happy", "மகிழ்ச்சி"],
    ["sad", "துயரமான"], ["fast", "வேகமான"], ["slow", "மெதுவாக"],
    ["hot", "சூடான"], ["cold", "குளிர்ந்த"], ["long", "நீளமான"],
    ["short", "குறுகிய"], ["big", "பெரியது"], ["small", "சிறியது"],
    ["smart", "புத்திசாலி"], ["strong", "வலிமையான"],

    ["careful", "கவனமாக"], ["later", "பின்னர்"], ["again", "மீண்டும்"],
    ["already", "ஏற்கனவே"], ["never", "ஒருபோதும் இல்லை"], ["always", "எப்போதும்"],
    ["sometimes", "சில சமயம்"],

    ["i", "நான்"], ["you", "நீங்கள்"], ["he", "அவன்"], ["she", "அவள்"],
    ["we", "நாம்"], ["they", "அவர்கள்"], ["it", "அது"],
    ["these", "இந்தவை"], ["those", "அவை"],

    ["in", "உள்ளே"], ["on", "மேல்"], ["under", "கீழ்"], ["over", "மீது"],
    ["behind", "பின்னால்"], ["between", "இடையில்"], ["near", "அருகில்"],
    ["far", "தொலைவில்"], ["from", "இருந்து"],

    ["and", "மற்றும்"], ["but", "ஆனால்"], ["or", "அல்லது"],
    ["because", "ஏனெனில்"], ["so", "அதனால்"],

    ["a", "ஒரு"], ["an", "ஒரு"], ["the", "அந்த"],

    ["hello", "வணக்கம்"], ["bye", "பிரியாவிடை"], ["sorry", "மன்னிக்கவும்"],
    ["please", "தயவுசெய்து"], ["thank", "நன்றி"], ["welcome", "வரவேற்கிறேன்"],
    ["congrats", "வாழ்த்துக்கள்"],

    ["how", "எப்படி"], ["what", "என்ன"], ["where", "எங்கே"], ["who", "யார்"],
    ["whom", "யாரை"], ["whose", "யாருடைய"], ["which", "எது"], ["why", "ஏன்"],
    ["when", "எப்போது"], ["how many", "எத்தனை"],

    ["can", "முடியும்"], ["don't", "இல்லை"], ["need", "தேவை"],
    ["like", "பிடிக்கிறது"], ["miss", "விழைவது"], ["happened", "நடந்தது"]
  ]
};

// Prepare dataset for both languages
datasets["english"] = datasets["tamil"].map(([en, ta]) => [ta, en]);

let currentLang = "tamil";
let dataset = [];
let inputTexts = [], targetTexts = [];
let charSet = new Set();
let chars = [], charToIndex = {}, indexToChar = {};
let vocabSize = 0, maxInputLen = 60, maxTargetLen = 60;
let model;

function prepareData(lang) {
  console.log("🟢 Preparing data for language:", lang);
  dataset = datasets[lang].slice(0, 300);
  inputTexts = dataset.map(d => d[0].toLowerCase());
  targetTexts = dataset.map(d => d[1]);

  

  charSet.clear();
  inputTexts.concat(targetTexts).forEach(text =>
    text.split('').forEach(char => charSet.add(char))
  );

  chars = Array.from(charSet);
  charToIndex = Object.fromEntries(chars.map((c, i) => [c, i]));
  indexToChar = Object.fromEntries(chars.map((c, i) => [i, c]));
  vocabSize = chars.length;

}

function embeddingLayer(inputLength) {
  const input = tf.input({ shape: [inputLength] });
  const embed = tf.layers.embedding({
    inputDim: vocabSize,
    outputDim: 64,
    inputLength
  }).apply(input);
  return tf.model({ inputs: input, outputs: embed });
}

function transformerBlock(inputLength) {
  const input = tf.input({ shape: [inputLength, 64] });

  const query = tf.layers.dense({ units: 64 }).apply(input);
  const key = tf.layers.dense({ units: 64 }).apply(input);
  const value = tf.layers.dense({ units: 64 }).apply(input);

  const score = tf.layers.dot({ axes: -1 }).apply([query, key]);
  const scaled = tf.layers.activation({ activation: 'softmax' }).apply(score);
  const attn = tf.layers.dot({ axes: 1 }).apply([scaled, value]);

  const attnOut = tf.layers.add().apply([input, attn]);
  const norm1 = tf.layers.layerNormalization().apply(attnOut);

  const ffn = tf.layers.dense({ units: 128, activation: 'relu' }).apply(norm1);
  const ffnOut = tf.layers.dense({ units: 64 }).apply(ffn);
  const output = tf.layers.add().apply([norm1, ffnOut]);
  const norm2 = tf.layers.layerNormalization().apply(output);

  return tf.model({ inputs: input, outputs: norm2 });
}

async function buildTransformerModel() {
  console.log("🟢 Building transformer model...");
  const input = tf.input({ shape: [maxInputLen] });
  const embedModel = embeddingLayer(maxInputLen);
  const embedded = embedModel.apply(input);
  const encoded = transformerBlock(maxInputLen).apply(embedded);

  const output = tf.layers.timeDistributed({
    layer: tf.layers.dense({ units: vocabSize, activation: 'softmax' })
  }).apply(encoded);

  model = tf.model({ inputs: input, outputs: output });
  model.compile({ optimizer: 'adam', loss: 'categoricalCrossentropy' });

  console.log("✅ Model built using backend:", tf.getBackend());
}

function textToIndices(text, maxLen) {
  return text.padEnd(maxLen).split('').map(c => charToIndex[c] || 0);
}

function oneHotEncode(indices, length) {
  return tf.tidy(() => {
    const tensor = tf.tensor1d(indices, 'int32');
    return tf.oneHot(tensor, vocabSize).pad([[0, length - tensor.shape[0]], [0, 0]]);
  });
}

async function trainTransformer() {
  document.getElementById("status").innerText = "Training...";
  console.log("🟢 Starting training...");

  const xs = [], ys = [];

  for (let i = 0; i < dataset.length; i++) {
    const x = textToIndices(inputTexts[i], maxInputLen);
    const y = textToIndices(targetTexts[i], maxTargetLen);

    const xTensor = tf.tensor1d(x, 'int32');
    const yTensor = oneHotEncode(y, maxTargetLen);

    xs.push(xTensor);
    ys.push(yTensor);
  }

  const xTensor = tf.stack(xs).reshape([xs.length, maxInputLen]);
  const yTensor = tf.stack(ys).reshape([ys.length, maxTargetLen, vocabSize]);


  await model.fit(xTensor, yTensor, {
    epochs: 10,
    batchSize: 16,
    shuffle: true,
    callbacks: {
      onEpochEnd: (epoch, logs) => {
        console.log(`🟢 Epoch ${epoch + 1} complete. Loss: ${logs.loss.toFixed(4)}`);
        document.getElementById("status").innerText = `Epoch ${epoch + 1} complete`;
      }
    }
  });

  xTensor.dispose();
  yTensor.dispose();
  xs.forEach(t => t.dispose());
  ys.forEach(t => t.dispose());

  console.log("✅ Training complete.");
  document.getElementById("status").innerText = "✅ Training complete";
}

async function predict() {
  const inputText = document.getElementById("inputWord").value.toLowerCase().trim();
  const lang = document.getElementById("language").value;

  console.log("🟢 Predicting for:", inputText, "Language:", lang);

  if (lang !== currentLang) {
    console.log("🔄 Language switched. Reloading model...");
    await loadTransformerAndTrain(lang);
  }

  const indices = textToIndices(inputText, maxInputLen);
  const inputTensor = tf.tensor2d([indices], [1, maxInputLen], 'int32');


  const outputTensor = model.predict(inputTensor);
  const prediction = await outputTensor.array();
  inputTensor.dispose();
  outputTensor.dispose();

  const output = prediction[0].map(vec => {
    const idx = vec.indexOf(Math.max(...vec));
    return indexToChar[idx];
  }).join('').trim();

  console.log("🟢 Output prediction:", output);

  const knownOutputs = dataset.map(pair => pair[1]);
  const isMatch = knownOutputs.some(out => output.startsWith(out.slice(0, 3)));

  if (isMatch) {
    document.getElementById("translatedText").value = `${lang.toUpperCase()}: ${output}`;
  } else {
    const fallback = wordLevelFallback(inputText, lang);
    const useMarian = inputText.split(" ").length > 2 || fallback.includes("[");


    if (useMarian && window.runMarianTranslation) {
      console.log("🟠 Falling back to MarianMT...");
      const marianOutput = await window.runMarianTranslation(inputText, lang);
      document.getElementById("translatedText").value = `🤖 MarianMT: ${marianOutput}`;
    } else {
      document.getElementById("translatedText").value = `🤖 Fallback: ${fallback}`;
    }
  }
}

function wordLevelFallback(input, lang) {
  console.log("🟢 Running word-level fallback for:", input);
  const dict = Object.fromEntries(datasets[lang]);

  function getClosestMatch(word) {
    let closest = null;
    let minDist = Infinity;

    for (const key in dict) {
      const dist = levenshteinDistance(word, key);
      if (dist < minDist) {
        minDist = dist;
        closest = key;
      }
    }

    console.log(`🔍 Closest match for "${word}" is "${closest}" (dist: ${minDist})`);
    return (minDist <= 2) ? dict[closest] : `[${word}]`;
  }

  const words = input.split(/\s+/);
  console.log("🔍 Words split:", words);

  const translatedWords = words.map(w => dict[w.toLowerCase()] || getClosestMatch(w));
  const result = translatedWords.join(' ');

  console.log("🟢 Fallback translation:", result);
  return result;
}

function levenshteinDistance(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(
          dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]
        );
      }
    }
  }

  return dp[a.length][b.length];
}

async function loadTransformerAndTrain(lang) {
  currentLang = lang;
  prepareData(lang);
  await buildTransformerModel();
  await trainTransformer();
}

window.addEventListener("DOMContentLoaded", async () => {
  await tf.ready();
  tf.setBackend("webgl");
  console.log("🟢 Building the model. Backend set to WebGL.");
  await loadTransformerAndTrain("tamil");
});

