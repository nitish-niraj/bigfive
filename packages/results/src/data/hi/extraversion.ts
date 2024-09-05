import { type TemplateDomain } from '../../types'

const extraversion: TemplateDomain = {
  domain: 'E',
  title: 'बहिर्मुखता (Extraversion)',
  shortDescription: 'बहिर्मुखता बाहरी दुनिया के साथ सक्रिय संलग्नता द्वारा चिह्नित होती है।',
  description: `बहिर्मुख लोग लोगों के साथ रहना पसंद करते हैं, ऊर्जा से भरे होते हैं, और अक्सर सकारात्मक भावनाओं का अनुभव करते हैं। वे उत्साही,
कार्रवाई-उन्मुख व्यक्ति होते हैं जो अवसरों के लिए "हाँ!" या "चलो चलते हैं!" कहने की संभावना रखते हैं। समूहों में वे बात करना, अपने आप को व्यक्त करना, और ध्यान आकर्षित करना पसंद करते हैं।
<br /><br />
अंतर्मुखी लोग बहिर्मुखों की तुलना में उत्साह, ऊर्जा, और गतिविधि स्तर में कमी रखते हैं। वे शांत, धीमी गति से चलते हैं, विचारशील होते हैं, और सामाजिक दुनिया से अलग रहते हैं। उनकी सामाजिक भागीदारी की कमी को शर्म या अवसाद के रूप में नहीं समझा जाना चाहिए; अंतर्मुख व्यक्ति को बहिर्मुख व्यक्ति की तुलना में कम उत्तेजना की आवश्यकता होती है और वे अकेले रहना पसंद करते हैं। <br /><br />अंतर्मुख व्यक्ति की स्वतंत्रता और आरक्षितता को कभी-कभी अनमित्रता या अहंकार के रूप में समझा जाता है। वास्तव में, एक अंतर्मुख व्यक्ति जो सहमतिवाद (Agreeableness) में उच्च स्कोर करता है, वह दूसरों की तलाश नहीं करेगा लेकिन जब उनके पास आएगा तो वह काफी मिलनसार होगा।`,
  results: [
    {
      score: 'low', // इस लाइन का अनुवाद न करें
      text: `आपका बहिर्मुखता पर स्कोर कम है, जो यह दर्शाता है कि आप
अंतर्मुख, आरक्षित, और शांत हैं। आप एकांत और एकाकी गतिविधियों का आनंद लेते हैं। आपकी समाजीकरण की प्रवृत्ति कुछ करीबी दोस्तों तक ही सीमित रहती है।`
    },
    {
      score: 'neutral', // इस लाइन का अनुवाद न करें
      text: `आपका बहिर्मुखता पर स्कोर औसत है, जो यह दर्शाता है कि आप
न तो एकांतप्रिय अकेले हैं और न ही एक हंसमुख बातचीत करने वाले। आप दूसरों के साथ समय बिताना भी पसंद करते हैं और अकेले समय भी।`
    },
    {
      score: 'high', // इस लाइन का अनुवाद न करें
      text: `आपका बहिर्मुखता पर स्कोर उच्च है, जो यह दर्शाता है कि आप
मिलनसार, बाहर जाने वाले, ऊर्जावान, और जीवंत हैं। आप अधिकतर समय लोगों के आसपास रहना पसंद करते हैं।`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'मित्रता (Friendliness)',
      text: `मित्रवत लोग वास्तव में अन्य लोगों को पसंद करते हैं
और खुले तौर पर दूसरों के प्रति सकारात्मक भावनाओं का प्रदर्शन करते हैं। वे जल्दी दोस्त बनाते हैं और उनके लिए करीबी, अंतरंग संबंध बनाना आसान होता है। मित्रता पर कम स्कोर करने वाले लोग अनिवार्य रूप से ठंडे
और शत्रुतापूर्ण नहीं होते, लेकिन वे दूसरों तक पहुंचते नहीं हैं और उन्हें दूर और आरक्षित माना जाता है।`
    },
    {
      facet: 2,
      title: 'मिलनसारिता (Gregariousness)',
      text: `मिलनसार लोग दूसरों की संगति में
खुशी महसूस करते हैं और इसे सुखद और पुरस्कृत पाते हैं। वे भीड़ के उत्साह का आनंद लेते हैं। कम स्कोर करने वाले लोग बड़ी भीड़ से अभिभूत महसूस करते हैं, और इसलिए, सक्रिय रूप से बड़ी भीड़ से बचते हैं। वे जरूरी नहीं कि कभी-कभी लोगों के साथ रहना नापसंद करें, लेकिन उनकी गोपनीयता और अकेले समय की आवश्यकता उन व्यक्तियों की तुलना में बहुत अधिक होती है जो इस पैमाने पर उच्च स्कोर करते हैं।`
    },
    {
      facet: 3,
      title: 'आत्मविश्वास (Assertiveness)',
      text: `उच्च स्कोर करने वाले आत्मविश्वासी व्यक्ति बोलने के लिए पसंद करते हैं
अपनी बात रखते हैं, नेतृत्व करते हैं, और दूसरों की गतिविधियों को निर्देशित करते हैं। वे समूहों में नेता बनने की प्रवृत्ति रखते हैं। कम स्कोर करने वाले लोग ज्यादा बात नहीं करते और दूसरों को समूह की गतिविधियों को नियंत्रित करने देते हैं।`
    },
    {
      facet: 4,
      title: 'गतिविधि स्तर (Activity Level)',
      text: `सक्रिय व्यक्ति तेज गति, व्यस्त
जीवन जीते हैं। वे तेजी से, ऊर्जावान रूप से, और जोर-शोर से चलते हैं, और
वे कई गतिविधियों में शामिल होते हैं। इस पैमाने पर कम स्कोर करने वाले लोग एक धीमी और अधिक आरामदायक, आरामदायक गति का पालन करते हैं।`
    },
    {
      facet: 5,
      title: 'उत्तेजना-खोज (Excitement-Seeking)',
      text: `इस पैमाने पर उच्च स्कोर करने वाले लोग आसानी से ऊब जाते हैं यदि उच्च स्तर की उत्तेजना न हो। वे चमकती रोशनी और हलचल पसंद करते हैं। वे जोखिम लेने और रोमांच की तलाश करने की संभावना रखते हैं। कम स्कोर करने वाले लोग शोर और हलचल से अभिभूत हो जाते हैं और रोमांच की खोज से नफरत करते हैं।`
    },
    {
      facet: 6,
      title: 'उल्लास (Cheerfulness)',
      text: `यह पैमाना सकारात्मक मूड और
भावनाओं को मापता है, न कि नकारात्मक भावनाओं को (जो कि
न्यूरोटिज्म (Neuroticism) डोमेन का हिस्सा हैं)। जो लोग इस पैमाने पर उच्च स्कोर करते हैं, वे आम तौर पर सकारात्मक भावनाओं की एक श्रृंखला का अनुभव करते हैं, जिसमें खुशी,
उत्साह, आशावाद, और आनंद शामिल हैं। कम स्कोर करने वाले लोग ऐसी ऊर्जावान, उच्च आत्माओं के प्रति उतने संवेदनशील नहीं होते।`
    }
  ]
}

export default extraversion
