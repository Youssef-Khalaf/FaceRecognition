// const express = require("express");
// const app = express();
// const port = 3000 || process.env.PORT;

// // الصفحة الرئيسية
// app.get("/", (req, res) => {
//   res.send("Hello, your Express project is working!");
// });

// // API للجمع
// // app.get("/sum", (req, res) => {
// //   const num1 = Number(req.query.num1);
// //   const num2 = Number(req.query.num2);

// //   if (isNaN(num1) || isNaN(num2)) {
// //     return res.status(400).json({
// //       error: "Please provide valid numbers",
// //     });
// //   }

// //   const result = num1 + num2;

// //   res.json({
// //     num1,
// //     num2,
// //     result,
// //   });
// // });
// let usersList = [];

// app.use(express.json());
// // 1. API إضافة شخص جديد للـ List
// app.post("/add-user", (req, res) => {
//   const { id, name, embedding } = req.body;

//   // التحقق من أن كل البيانات مبعوتة
//   if (!id || !name || !embedding) {
//     return res
//       .status(400)
//       .json({ error: "id, name, and embedding are required" });
//   }

//   // التأكد من أن الـ embedding عبارة عن مصفوفة (Array)
//   if (!Array.isArray(embedding)) {
//     return res
//       .status(400)
//       .json({ error: "embedding must be an array of numbers" });
//   }

//   // أوبجكت الشخص الجديد
//   const newUser = { id, name, embedding };

//   // إضافة الشخص للـ List
//   usersList.push(newUser);

//   res.status(201).json({
//     success: true,
//     message: `User ${name} added to the list successfully!`,
//     user: newUser,
//   });
// });

// // 2. API عرض كل الأشخاص اللي جوه الـ List
// app.get("/users", (req, res) => {
//   res.json({
//     success: true,
//     count: usersList.length,
//     data: usersList,
//   });
// });
// // API للمقارنة
// app.post("/compare", (req, res) => {
//   const { embedding, id } = req.body;

//   // التحقق من وجود embedding
//   if (!embedding) {
//     return res.status(400).json({
//       error: "embedding is required",
//     });
//   }
//   if (!id) {
//     return res.status(400).json({
//       error: "id is required",
//     });
//   }

//   // تشغيل السيرفر محلياً
//   if (process.env.NODE_ENV !== "production") {
//     app.listen(port, () => {
//       console.log(`Server is running on port ${port}`);
//     });
//   }
//   const user = usersList.find((u) => u.id.toString() === id.toString());
//   const storedEmbedding = user.embedding;
//   // [
//   //   -0.23773092031478882, -0.005319312214851379, 1.5105541944503784,
//   //   -0.649370551109314, -1.221613883972168, -1.078338384628296,
//   //   -0.9280754327774048, 1.028028964996338, 0.21017223596572876,
//   //   0.17686940729618073, -0.5838965177536011, -0.3830559551715851,
//   //   0.9338144659996033, 0.5532803535461426, -1.309254765510559,
//   //   0.9170355200767517, -0.028181858360767365, 1.4210518598556519,
//   //   -0.807647168636322, -0.794889509677887, 0.0357590913772583,
//   //   1.6316359043121338, -0.275493860244751, 0.8566977977752686,
//   //   0.6651240587234497, 0.11949143558740616, -0.5880494117736816,
//   //   1.7895946502685547, 0.9812853932380676, 1.7279527187347412,
//   //   -1.8065705299377441, 1.8418594598770142, -0.5653840899467468,
//   //   0.1506372094154358, -0.6023072600364685, -0.3908042907714844,
//   //   -0.818916916847229, -0.4795105457305908, -0.5654112100601196,
//   //   -0.7923662662506104, 0.5307333469390869, -0.9637609720230103,
//   //   0.6608221530914307, 0.9255717992782593, 2.6900110244750977,
//   //   0.55912846326828, 0.7261270880699158, -1.987946629524231,
//   //   -0.31018492579460144, 1.0375221967697144, 0.033076975494623184,
//   //   0.8807489275932312, -1.4433341026306152, -1.2932167053222656,
//   //   -1.5495007038116455, 0.5599499344825745, -0.3440030515193939,
//   //   -2.6339120864868164, -0.1874757558107376, 0.8308786153793335,
//   //   0.29269644618034363, 0.4848003387451172, 0.6006489396095276,
//   //   -1.1027874946594238, -0.28586432337760925, 0.19127807021141052,
//   //   -0.18953680992126465, -0.09681510925292969, -0.2020789384841919,
//   //   -1.6446881294250488, -0.5165545344352722, 0.2798265516757965,
//   //   1.3000844717025757, -1.3441476821899414, 2.5576376914978027,
//   //   -1.8999803066253662, -1.6624195575714111, -1.8201130628585815,
//   //   0.7609493136405945, -0.1970883309841156, 2.0030033588409424,
//   //   0.15231779217720032, -0.6540734171867371, 0.8018293380737305,
//   //   0.1314355581998825, 1.3607783317565918, -0.8699272871017456,
//   //   0.429069459438324, 0.22107639908790588, 0.9227057695388794,
//   //   0.4134213328361511, 1.9980409145355225, 0.47285374999046326,
//   //   -0.20626285672187805, 1.1304644346237183, 0.7543887495994568,
//   //   0.9353204369544983, -0.0900919958949089, -1.3263590335845947,
//   //   -0.7607497572898865, 1.1054723262786865, 0.1728341281414032,
//   //   -0.13439710438251495, -2.19354248046875, -1.3024556636810303,
//   //   -0.22519123554229736, -1.995449185371399, 0.8203561305999756,
//   //   -1.223692536354065, 1.1904723644256592, 0.36985525488853455,
//   //   0.08379653096199036, 0.16877152025699615, 0.3008284270763397,
//   //   1.2795878648757935, -1.3299264907836914, 0.8361004590988159,
//   //   -0.5989993214607239, -1.104732632637024, -0.6579418182373047,
//   //   0.4510117173194885, 0.11169060319662094, 0.5835211873054504,
//   //   0.22957925498485565, -0.4102635383605957, -0.444617360830307,
//   //   -0.38635915517807007, 0.01518789678812027,
//   // ];

//   const similarity = cosineSimilarity(embedding, storedEmbedding);

//   const isMatch = similarity > 0.73;

//   res.json({
//     success: true,
//     id: id,
//     similarity: similarity,
//     isMatch: isMatch,
//   });
// });
// function cosineSimilarity(vec1, vec2) {
//   let dotProduct = 0;
//   let normA = 0;
//   let normB = 0;

//   for (let i = 0; i < vec1.length; i++) {
//     dotProduct += vec1[i] * vec2[i];
//     normA += vec1[i] * vec1[i];
//     normB += vec2[i] * vec2[i];
//   }

//   return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
// }

// // تشغيل السيرفر
// if (process.env.NODE_ENV !== "production") {
//   app.listen(3000, () => {
//     console.log("Server is running on port 3000");
//   });
// }

// // وتصدر الـ app عشان Vercel يشوفه
// module.exports = app;

const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // تم تصحيح ترتيب المنطق هنا برضه ليكون الـ PORT أولاً

app.use(express.json());

// المصفوفة المخزن فيها البيانات في الذاكرة
let usersList = [];

// الصفحة الرئيسية
app.get("/", (req, res) => {
  res.send("Hello, your Express project is working!");
});

// 1. API إضافة شخص جديد للـ List
app.post("/add-user", (req, res) => {
  const { id, name, embedding } = req.body;

  if (!id || !name || !embedding) {
    return res
      .status(400)
      .json({ error: "id, name, and embedding are required" });
  }

  if (!Array.isArray(embedding)) {
    return res
      .status(400)
      .json({ error: "embedding must be an array of numbers" });
  }

  const newUser = { id, name, embedding };
  usersList.push(newUser);

  res.status(201).json({
    success: true,
    message: `User ${name} added to the list successfully!`,
    user: newUser,
  });
});

// 2. API عرض كل الأشخاص
app.get("/users", (req, res) => {
  res.json({
    success: true,
    count: usersList.length,
    data: usersList,
  });
});

// 3. API للمقارنة
app.post("/compare", (req, res) => {
  const { embedding, id } = req.body;

  // التحقق من وجود المدخلات
  if (!embedding) {
    return res.status(400).json({ error: "embedding is required" });
  }
  if (!id) {
    return res.status(400).json({ error: "id is required" });
  }

  // البحث عن المستخدم في الـ List
  const user = usersList.find((u) => u.id.toString() === id.toString());

  // حماية السيرفر: لو الـ id مش موجود رجع 404 بدل ما السيرفر يقع
  if (!user) {
    return res.status(404).json({
      success: false,
      message: `User with ID ${id} not found in the list.`,
    });
  }

  // طالما المستخدم موجود، يسحب الـ embedding بأمان
  const storedEmbedding = user.embedding;

  // حساب التشابه
  const similarity = cosineSimilarity(embedding, storedEmbedding);
  const isMatch = similarity > 0.73;

  res.json({
    success: true,
    id: id,
    name: user.name, // حلوة نرجع الاسم كمان للتأكيد
    similarity: similarity,
    isMatch: isMatch,
  });
});

// دالة الـ Cosine Similarity
function cosineSimilarity(vec1, vec2) {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < vec1.length; i++) {
    dotProduct += vec1[i] * vec2[i];
    normA += vec1[i] * vec1[i];
    normB += vec2[i] * vec2[i];
  }

  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

// تشغيل السيرفر (تم نقلها بره الـ API لآخر الملف)
if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

// تصدير الـ app لـ Vercel
module.exports = app;
