// Edit the names below.
const CONFIG = {"recipient": "Chutti", "fullName": "Vilara Manulji", "sender": "Saneth"};
const MOODS = {"sad": ["😔", "When you're sad"], "miss": ["🥺", "When you miss me"], "stress": ["📚", "When you're stressed"], "sleep": ["🌙", "When you can't sleep"], "happy": ["🌷", "When you're happy"], "doubt": ["🦋", "When you doubt yourself"]};
const LETTERS = {
  "sad": [
    "අද දවස අමාරු නම් ටිකක් විවේක ගන්න.\n\nBe gentle with yourself today.",
    "You do not need to smile every minute.\n\nBe gentle with yourself today.",
    "ඔයාගේ දුකත් ඔයාගේ සතුට තරමටම වැදගත්.\n\nBe gentle with yourself today.",
    "A difficult day does not define you.\n\nBe gentle with yourself today.",
    "Let yourself feel what you feel.\n\nBe gentle with yourself today.",
    "ඔයාට හැමදේම අදම විසඳන්න ඕන නෑ.\n\nBe gentle with yourself today.",
    "අද දවස අමාරු නම් ටිකක් විවේක ගන්න.\n\nOne moment at a time.",
    "You do not need to smile every minute.\n\nOne moment at a time.",
    "ඔයාගේ දුකත් ඔයාගේ සතුට තරමටම වැදගත්.\n\nOne moment at a time.",
    "A difficult day does not define you.\n\nOne moment at a time.",
    "Let yourself feel what you feel.\n\nOne moment at a time.",
    "ඔයාට හැමදේම අදම විසඳන්න ඕන නෑ.\n\nOne moment at a time.",
    "අද දවස අමාරු නම් ටිකක් විවේක ගන්න.\n\nMay today bring you a little peace.",
    "You do not need to smile every minute.\n\nMay today bring you a little peace.",
    "ඔයාගේ දුකත් ඔයාගේ සතුට තරමටම වැදගත්.\n\nMay today bring you a little peace.",
    "A difficult day does not define you.\n\nMay today bring you a little peace.",
    "Let yourself feel what you feel.\n\nMay today bring you a little peace.",
    "ඔයාට හැමදේම අදම විසඳන්න ඕන නෑ.\n\nMay today bring you a little peace.",
    "අද දවස අමාරු නම් ටිකක් විවේක ගන්න.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "You do not need to smile every minute.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "ඔයාගේ දුකත් ඔයාගේ සතුට තරමටම වැදගත්.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "A difficult day does not define you.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "Let yourself feel what you feel.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "ඔයාට හැමදේම අදම විසඳන්න ඕන නෑ.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "අද දවස අමාරු නම් ටිකක් විවේක ගන්න.\n\nTake the time you need.",
    "You do not need to smile every minute.\n\nTake the time you need.",
    "ඔයාගේ දුකත් ඔයාගේ සතුට තරමටම වැදගත්.\n\nTake the time you need.",
    "A difficult day does not define you.\n\nTake the time you need.",
    "Let yourself feel what you feel.\n\nTake the time you need.",
    "ඔයාට හැමදේම අදම විසඳන්න ඕන නෑ.\n\nTake the time you need."
  ],
  "miss": [
    "අපි හැම වෙලාවෙම කතා නොකළත් ඔයා සතුටින් ඉන්නවට මම කැමතියි.\n\nBe gentle with yourself today.",
    "Think of a conversation that made you smile.\n\nBe gentle with yourself today.",
    "Distance does not make a kind memory less special.\n\nBe gentle with yourself today.",
    "ඔයාගේ දවස ලස්සන වෙන්න කියලා මම ප්‍රාර්ථනා කරනවා.\n\nBe gentle with yourself today.",
    "A little hello, wherever you are.\n\nBe gentle with yourself today.",
    "There is no need to reply right away.\n\nBe gentle with yourself today.",
    "අපි හැම වෙලාවෙම කතා නොකළත් ඔයා සතුටින් ඉන්නවට මම කැමතියි.\n\nOne moment at a time.",
    "Think of a conversation that made you smile.\n\nOne moment at a time.",
    "Distance does not make a kind memory less special.\n\nOne moment at a time.",
    "ඔයාගේ දවස ලස්සන වෙන්න කියලා මම ප්‍රාර්ථනා කරනවා.\n\nOne moment at a time.",
    "A little hello, wherever you are.\n\nOne moment at a time.",
    "There is no need to reply right away.\n\nOne moment at a time.",
    "අපි හැම වෙලාවෙම කතා නොකළත් ඔයා සතුටින් ඉන්නවට මම කැමතියි.\n\nMay today bring you a little peace.",
    "Think of a conversation that made you smile.\n\nMay today bring you a little peace.",
    "Distance does not make a kind memory less special.\n\nMay today bring you a little peace.",
    "ඔයාගේ දවස ලස්සන වෙන්න කියලා මම ප්‍රාර්ථනා කරනවා.\n\nMay today bring you a little peace.",
    "A little hello, wherever you are.\n\nMay today bring you a little peace.",
    "There is no need to reply right away.\n\nMay today bring you a little peace.",
    "අපි හැම වෙලාවෙම කතා නොකළත් ඔයා සතුටින් ඉන්නවට මම කැමතියි.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "Think of a conversation that made you smile.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "Distance does not make a kind memory less special.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "ඔයාගේ දවස ලස්සන වෙන්න කියලා මම ප්‍රාර්ථනා කරනවා.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "A little hello, wherever you are.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "There is no need to reply right away.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "අපි හැම වෙලාවෙම කතා නොකළත් ඔයා සතුටින් ඉන්නවට මම කැමතියි.\n\nTake the time you need.",
    "Think of a conversation that made you smile.\n\nTake the time you need.",
    "Distance does not make a kind memory less special.\n\nTake the time you need.",
    "ඔයාගේ දවස ලස්සන වෙන්න කියලා මම ප්‍රාර්ථනා කරනවා.\n\nTake the time you need.",
    "A little hello, wherever you are.\n\nTake the time you need.",
    "There is no need to reply right away.\n\nTake the time you need."
  ],
  "stress": [
    "ඔයාගේ exam එක වෙනුවෙන් කරන මහන්සිය වටිනවා.\n\nBe gentle with yourself today.",
    "One small task is enough to begin.\n\nBe gentle with yourself today.",
    "Take a short break before your next chapter.\n\nBe gentle with yourself today.",
    "ඔයාට පුළුවන් තරමින් කරන්න.\n\nBe gentle with yourself today.",
    "A difficult lesson is not a failure.\n\nBe gentle with yourself today.",
    "Your marks are not your whole identity.\n\nBe gentle with yourself today.",
    "ඔයාගේ exam එක වෙනුවෙන් කරන මහන්සිය වටිනවා.\n\nOne moment at a time.",
    "One small task is enough to begin.\n\nOne moment at a time.",
    "Take a short break before your next chapter.\n\nOne moment at a time.",
    "ඔයාට පුළුවන් තරමින් කරන්න.\n\nOne moment at a time.",
    "A difficult lesson is not a failure.\n\nOne moment at a time.",
    "Your marks are not your whole identity.\n\nOne moment at a time.",
    "ඔයාගේ exam එක වෙනුවෙන් කරන මහන්සිය වටිනවා.\n\nMay today bring you a little peace.",
    "One small task is enough to begin.\n\nMay today bring you a little peace.",
    "Take a short break before your next chapter.\n\nMay today bring you a little peace.",
    "ඔයාට පුළුවන් තරමින් කරන්න.\n\nMay today bring you a little peace.",
    "A difficult lesson is not a failure.\n\nMay today bring you a little peace.",
    "Your marks are not your whole identity.\n\nMay today bring you a little peace.",
    "ඔයාගේ exam එක වෙනුවෙන් කරන මහන්සිය වටිනවා.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "One small task is enough to begin.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "Take a short break before your next chapter.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "ඔයාට පුළුවන් තරමින් කරන්න.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "A difficult lesson is not a failure.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "Your marks are not your whole identity.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "ඔයාගේ exam එක වෙනුවෙන් කරන මහන්සිය වටිනවා.\n\nTake the time you need.",
    "One small task is enough to begin.\n\nTake the time you need.",
    "Take a short break before your next chapter.\n\nTake the time you need.",
    "ඔයාට පුළුවන් තරමින් කරන්න.\n\nTake the time you need.",
    "A difficult lesson is not a failure.\n\nTake the time you need.",
    "Your marks are not your whole identity.\n\nTake the time you need."
  ],
  "sleep": [
    "අද දවසේ ප්‍රශ්න හෙටට තියන්න.\n\nBe gentle with yourself today.",
    "Let the night be a quiet place for your thoughts.\n\nBe gentle with yourself today.",
    "You have done enough for today.\n\nBe gentle with yourself today.",
    "හිත නිදහස් කරගෙන ලස්සන හීනයක් දකින්න.\n\nBe gentle with yourself today.",
    "Put the screen away when you feel ready.\n\nBe gentle with yourself today.",
    "Tomorrow can wait until morning.\n\nBe gentle with yourself today.",
    "අද දවසේ ප්‍රශ්න හෙටට තියන්න.\n\nOne moment at a time.",
    "Let the night be a quiet place for your thoughts.\n\nOne moment at a time.",
    "You have done enough for today.\n\nOne moment at a time.",
    "හිත නිදහස් කරගෙන ලස්සන හීනයක් දකින්න.\n\nOne moment at a time.",
    "Put the screen away when you feel ready.\n\nOne moment at a time.",
    "Tomorrow can wait until morning.\n\nOne moment at a time.",
    "අද දවසේ ප්‍රශ්න හෙටට තියන්න.\n\nMay today bring you a little peace.",
    "Let the night be a quiet place for your thoughts.\n\nMay today bring you a little peace.",
    "You have done enough for today.\n\nMay today bring you a little peace.",
    "හිත නිදහස් කරගෙන ලස්සන හීනයක් දකින්න.\n\nMay today bring you a little peace.",
    "Put the screen away when you feel ready.\n\nMay today bring you a little peace.",
    "Tomorrow can wait until morning.\n\nMay today bring you a little peace.",
    "අද දවසේ ප්‍රශ්න හෙටට තියන්න.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "Let the night be a quiet place for your thoughts.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "You have done enough for today.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "හිත නිදහස් කරගෙන ලස්සන හීනයක් දකින්න.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "Put the screen away when you feel ready.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "Tomorrow can wait until morning.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "අද දවසේ ප්‍රශ්න හෙටට තියන්න.\n\nTake the time you need.",
    "Let the night be a quiet place for your thoughts.\n\nTake the time you need.",
    "You have done enough for today.\n\nTake the time you need.",
    "හිත නිදහස් කරගෙන ලස්සන හීනයක් දකින්න.\n\nTake the time you need.",
    "Put the screen away when you feel ready.\n\nTake the time you need.",
    "Tomorrow can wait until morning.\n\nTake the time you need."
  ],
  "happy": [
    "ඔයාගේ සතුට තවත් වැඩි වේවා!\n\nBe gentle with yourself today.",
    "I hope this little moment stays with you.\n\nBe gentle with yourself today.",
    "Celebrate your small victories.\n\nBe gentle with yourself today.",
    "ඔයා අද හිනා වුණ හේතුව මතක තියාගන්න.\n\nBe gentle with yourself today.",
    "Good days deserve to be enjoyed.\n\nBe gentle with yourself today.",
    "Keep a little memory of today.\n\nBe gentle with yourself today.",
    "ඔයාගේ සතුට තවත් වැඩි වේවා!\n\nOne moment at a time.",
    "I hope this little moment stays with you.\n\nOne moment at a time.",
    "Celebrate your small victories.\n\nOne moment at a time.",
    "ඔයා අද හිනා වුණ හේතුව මතක තියාගන්න.\n\nOne moment at a time.",
    "Good days deserve to be enjoyed.\n\nOne moment at a time.",
    "Keep a little memory of today.\n\nOne moment at a time.",
    "ඔයාගේ සතුට තවත් වැඩි වේවා!\n\nMay today bring you a little peace.",
    "I hope this little moment stays with you.\n\nMay today bring you a little peace.",
    "Celebrate your small victories.\n\nMay today bring you a little peace.",
    "ඔයා අද හිනා වුණ හේතුව මතක තියාගන්න.\n\nMay today bring you a little peace.",
    "Good days deserve to be enjoyed.\n\nMay today bring you a little peace.",
    "Keep a little memory of today.\n\nMay today bring you a little peace.",
    "ඔයාගේ සතුට තවත් වැඩි වේවා!\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "I hope this little moment stays with you.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "Celebrate your small victories.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "ඔයා අද හිනා වුණ හේතුව මතක තියාගන්න.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "Good days deserve to be enjoyed.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "Keep a little memory of today.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "ඔයාගේ සතුට තවත් වැඩි වේවා!\n\nTake the time you need.",
    "I hope this little moment stays with you.\n\nTake the time you need.",
    "Celebrate your small victories.\n\nTake the time you need.",
    "ඔයා අද හිනා වුණ හේතුව මතක තියාගන්න.\n\nTake the time you need.",
    "Good days deserve to be enjoyed.\n\nTake the time you need.",
    "Keep a little memory of today.\n\nTake the time you need."
  ],
  "doubt": [
    "ඔයා හිතනවට වඩා ඔයාට ගොඩක් දේවල් කරන්න පුළුවන්.\n\nBe gentle with yourself today.",
    "Progress can be quiet and still be real.\n\nBe gentle with yourself today.",
    "You are allowed to learn at your own pace.\n\nBe gentle with yourself today.",
    "වැරදුණත් ආයෙත් උත්සාහ කරන්න පුළුවන්.\n\nBe gentle with yourself today.",
    "You do not have to prove your worth to anyone.\n\nBe gentle with yourself today.",
    "Trust the effort you are making.\n\nBe gentle with yourself today.",
    "ඔයා හිතනවට වඩා ඔයාට ගොඩක් දේවල් කරන්න පුළුවන්.\n\nOne moment at a time.",
    "Progress can be quiet and still be real.\n\nOne moment at a time.",
    "You are allowed to learn at your own pace.\n\nOne moment at a time.",
    "වැරදුණත් ආයෙත් උත්සාහ කරන්න පුළුවන්.\n\nOne moment at a time.",
    "You do not have to prove your worth to anyone.\n\nOne moment at a time.",
    "Trust the effort you are making.\n\nOne moment at a time.",
    "ඔයා හිතනවට වඩා ඔයාට ගොඩක් දේවල් කරන්න පුළුවන්.\n\nMay today bring you a little peace.",
    "Progress can be quiet and still be real.\n\nMay today bring you a little peace.",
    "You are allowed to learn at your own pace.\n\nMay today bring you a little peace.",
    "වැරදුණත් ආයෙත් උත්සාහ කරන්න පුළුවන්.\n\nMay today bring you a little peace.",
    "You do not have to prove your worth to anyone.\n\nMay today bring you a little peace.",
    "Trust the effort you are making.\n\nMay today bring you a little peace.",
    "ඔයා හිතනවට වඩා ඔයාට ගොඩක් දේවල් කරන්න පුළුවන්.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "Progress can be quiet and still be real.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "You are allowed to learn at your own pace.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "වැරදුණත් ආයෙත් උත්සාහ කරන්න පුළුවන්.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "You do not have to prove your worth to anyone.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "Trust the effort you are making.\n\nඔයාගේ හීන අමතක කරන්න එපා.",
    "ඔයා හිතනවට වඩා ඔයාට ගොඩක් දේවල් කරන්න පුළුවන්.\n\nTake the time you need.",
    "Progress can be quiet and still be real.\n\nTake the time you need.",
    "You are allowed to learn at your own pace.\n\nTake the time you need.",
    "වැරදුණත් ආයෙත් උත්සාහ කරන්න පුළුවන්.\n\nTake the time you need.",
    "You do not have to prove your worth to anyone.\n\nTake the time you need.",
    "Trust the effort you are making.\n\nTake the time you need."
  ]
};
const GIFTS = [
  {
    "type": "voice",
    "title": "A voice just for you",
    "text": "A little recorded message, whenever you feel like listening.",
    "voice": 1
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "I enjoy the little conversations we share.\n\nBe gentle with yourself today."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "උදෑසන හමන සුළඟක්\nඔයා යන මාවත එළිය කරේවා."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Start with the easiest topic. ඔයාගේ හීන අමතක කරන්න එපා."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your thoughtful words deserves room to grow."
  },
  {
    "type": "voice",
    "title": "A voice just for you",
    "text": "A little recorded message, whenever you feel like listening.",
    "voice": 2
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "May something lovely find you today. One moment at a time."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your curiosity makes a difference in small ways."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "I enjoy the little conversations we share.\n\nOne moment at a time."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Take a five-minute break. ඔයාගේ හීන අමතක කරන්න එපා."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "මල් පෙත්තක රැඳුණු පිනි බිඳක්\nඔයාගේ දවසට සැනසීමක් ගෙනේවා."
  },
  {
    "type": "voice",
    "title": "A voice just for you",
    "text": "A little recorded message, whenever you feel like listening.",
    "voice": 8
  },
  {
    "type": "game",
    "title": "A tiny memory game",
    "text": "Take a little break, if you feel like it."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Start with the easiest topic. May today bring you a little peace."
  },
  {
    "type": "voice",
    "title": "A voice just for you",
    "text": "A little recorded message, whenever you feel like listening.",
    "voice": 10
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your sense of humor deserves room to grow."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "I am glad our paths crossed.\n\nTake the time you need."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Celebrate finishing a chapter. Take the time you need."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "I hope your day has a moment of peace.\n\nTake the time you need."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "සඳ එළියේ නිහඬ මොහොතක්\nඔයාගේ දවසට සැනසීමක් ගෙනේවා."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "වසන්තයේ පිපුණු මලක්\nහිතේ බර සුළඟට මුසු වේවා."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "I hope your day has a moment of peace.\n\nඔයාගේ හීන අමතක කරන්න එපා."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "I hope your day has a moment of peace.\n\nBe gentle with yourself today."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "I hope you keep choosing the things that matter to you.\n\nOne moment at a time."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "උදෑසන හමන සුළඟක්\nහීන අතරට සිනහවක් එක් කරේවා."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your individuality is a reminder that little things count."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your curiosity is something worth celebrating."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Celebrate finishing a chapter. One moment at a time."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "There is something lovely about getting to know someone slowly.\n\nBe gentle with yourself today."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "A little color for an ordinary day. ඔයාගේ හීන අමතක කරන්න එපා."
  },
  {
    "type": "game",
    "title": "A tiny memory game",
    "text": "Take a little break, if you feel like it."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "May the world be kind to you today.\n\nOne moment at a time."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Recall what you learned yesterday. May today bring you a little peace."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your determination is something worth celebrating."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your curiosity deserves room to grow."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "දුර අහසක ඇඳුණු සිතුවමක්\nහෙට දවසට අලුත් පැතුමක් වේවා."
  },
  {
    "type": "game",
    "title": "A tiny memory game",
    "text": "Take a little break, if you feel like it."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "I hope you keep choosing the things that matter to you.\n\nTake the time you need."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Drink some water. ඔයාගේ හීන අමතක කරන්න එපා."
  },
  {
    "type": "game",
    "title": "A tiny memory game",
    "text": "Take a little break, if you feel like it."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Try one practice question. May today bring you a little peace."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your curiosity is a lovely thing to carry into the world."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "වැහි බිඳක සැඟවුණු ගීයක්\nඔයා යන මාවත එළිය කරේවා."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "There is something lovely about getting to know someone slowly.\n\nOne moment at a time."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Celebrate finishing a chapter. May today bring you a little peace."
  },
  {
    "type": "game",
    "title": "A tiny memory game",
    "text": "Take a little break, if you feel like it."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "ඔයාගේ හිත මලක් වගේ සැහැල්ලු වේවා. ඔයාගේ හීන අමතක කරන්න එපා."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "May the world be kind to you today.\n\nBe gentle with yourself today."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your determination matters more than perfection."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "I am glad our paths crossed.\n\nOne moment at a time."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your individuality is worth remembering today."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Organize tomorrow’s tasks. ඔයාගේ හීන අමතක කරන්න එපා."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your kindness matters more than perfection."
  },
  {
    "type": "game",
    "title": "A tiny memory game",
    "text": "Take a little break, if you feel like it."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Start with the easiest topic. Be gentle with yourself today."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "උදෑසන හමන සුළඟක්\nහිතේ බර සුළඟට මුසු වේවා."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "දුර අහසක ඇඳුණු සිතුවමක්\nඔයා යන මාවත එළිය කරේවා."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Ask for help if you are stuck. May today bring you a little peace."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your thoughtful words can make an ordinary day brighter."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your individuality matters more than perfection."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "I hope your dreams feel a little closer today.\n\nඔයාගේ හීන අමතක කරන්න එපා."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Celebrate finishing a chapter. Be gentle with yourself today."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Recall what you learned yesterday. Take the time you need."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "වැහි බිඳක සැඟවුණු ගීයක්\nහෙට දවසට අලුත් පැතුමක් වේවා."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your sense of humor is worth remembering today."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your individuality is something worth celebrating."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your kindness makes a difference in small ways."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "දුර අහසක ඇඳුණු සිතුවමක්\nහීන අතරට සිනහවක් එක් කරේවා."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your quiet courage is something worth celebrating."
  },
  {
    "type": "voice",
    "title": "A voice just for you",
    "text": "A little recorded message, whenever you feel like listening.",
    "voice": 19
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "I hope you keep choosing the things that matter to you.\n\nඔයාගේ හීන අමතක කරන්න එපා."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "රෑ අහසේ පුංචි තරුවක්\nඔයාගේ දවසට සැනසීමක් ගෙනේවා."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your determination can make an ordinary day brighter."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your quiet courage deserves room to grow."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "වැහි බිඳක සැඟවුණු ගීයක්\nඔයාගේ දවසට සැනසීමක් ගෙනේවා."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "මල් පෙත්තක රැඳුණු පිනි බිඳක්\nහිතේ බර සුළඟට මුසු වේවා."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Organize tomorrow’s tasks. May today bring you a little peace."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "I enjoy the little conversations we share.\n\nTake the time you need."
  },
  {
    "type": "game",
    "title": "A tiny memory game",
    "text": "Take a little break, if you feel like it."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "I am glad our paths crossed.\n\nඔයාගේ හීන අමතක කරන්න එපා."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your sense of humor matters more than perfection."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "වැහි බිඳක සැඟවුණු ගීයක්\nහීන අතරට සිනහවක් එක් කරේවා."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Drink some water. Take the time you need."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "A little bloom for a brighter morning. ඔයාගේ හීන අමතක කරන්න එපා."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Review one topic. One moment at a time."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your determination makes a difference in small ways."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "A little bloom for a brighter morning. Take the time you need."
  },
  {
    "type": "voice",
    "title": "A voice just for you",
    "text": "A little recorded message, whenever you feel like listening.",
    "voice": 6
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your kindness can make an ordinary day brighter."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Start with the easiest topic. Take the time you need."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Take a five-minute break. Be gentle with yourself today."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your kindness is something nobody else can copy."
  },
  {
    "type": "game",
    "title": "A tiny memory game",
    "text": "Take a little break, if you feel like it."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Write a small summary. ඔයාගේ හීන අමතක කරන්න එපා."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your thoughtful words deserves a little recognition."
  },
  {
    "type": "voice",
    "title": "A voice just for you",
    "text": "A little recorded message, whenever you feel like listening.",
    "voice": 4
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your thoughtful words is a lovely thing to carry into the world."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Write a small summary. May today bring you a little peace."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "May your dreams grow at their own pace. May today bring you a little peace."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Write a small summary. Be gentle with yourself today."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your individuality is a lovely thing to carry into the world."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Organize tomorrow’s tasks. Be gentle with yourself today."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your thoughtful words is worth remembering today."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your determination is a reminder that little things count."
  },
  {
    "type": "voice",
    "title": "A voice just for you",
    "text": "A little recorded message, whenever you feel like listening.",
    "voice": 18
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your individuality makes a difference in small ways."
  },
  {
    "type": "game",
    "title": "A tiny memory game",
    "text": "Take a little break, if you feel like it."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "Here is a quiet reminder to care for yourself. ඔයාගේ හීන අමතක කරන්න එපා."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "මල් පෙත්තක රැඳුණු පිනි බිඳක්\nහෙට දවසට අලුත් පැතුමක් වේවා."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Try one practice question. Be gentle with yourself today."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your thoughtful words is something nobody else can copy."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Try one practice question. One moment at a time."
  },
  {
    "type": "game",
    "title": "A tiny memory game",
    "text": "Take a little break, if you feel like it."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "A little color for an ordinary day. May today bring you a little peace."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your thoughtful words makes a difference in small ways."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "අලුත් දවසක පළමු එළිය\nඔයා යන මාවත එළිය කරේවා."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Organize tomorrow’s tasks. One moment at a time."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your sense of humor makes a difference in small ways."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your sense of humor deserves a little recognition."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "May your dreams grow at their own pace. Be gentle with yourself today."
  },
  {
    "type": "game",
    "title": "A tiny memory game",
    "text": "Take a little break, if you feel like it."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your sense of humor can make an ordinary day brighter."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "I hope your dreams feel a little closer today.\n\nTake the time you need."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Review one topic. Be gentle with yourself today."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Take a five-minute break. May today bring you a little peace."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Drink some water. Be gentle with yourself today."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "ඔයාගේ හිත මලක් වගේ සැහැල්ලු වේවා. Be gentle with yourself today."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Take a five-minute break. Take the time you need."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "May the world be kind to you today.\n\nඔයාගේ හීන අමතක කරන්න එපා."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "You deserve space to grow.\n\nOne moment at a time."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your kindness deserves room to grow."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "There is something lovely about getting to know someone slowly.\n\nඔයාගේ හීන අමතක කරන්න එපා."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "May your dreams grow at their own pace. Take the time you need."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "උදෑසන හමන සුළඟක්\nහෙට දවසට අලුත් පැතුමක් වේවා."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Ask for help if you are stuck. ඔයාගේ හීන අමතක කරන්න එපා."
  },
  {
    "type": "voice",
    "title": "A voice just for you",
    "text": "A little recorded message, whenever you feel like listening.",
    "voice": 12
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your determination is something nobody else can copy."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Organize tomorrow’s tasks. Take the time you need."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "May something lovely find you today. ඔයාගේ හීන අමතක කරන්න එපා."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "There is something lovely about getting to know someone slowly.\n\nTake the time you need."
  },
  {
    "type": "voice",
    "title": "A voice just for you",
    "text": "A little recorded message, whenever you feel like listening.",
    "voice": 15
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your curiosity can make an ordinary day brighter."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your sense of humor is a lovely thing to carry into the world."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "I am glad our paths crossed.\n\nBe gentle with yourself today."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your individuality is something nobody else can copy."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "I enjoy the little conversations we share.\n\nඔයාගේ හීන අමතක කරන්න එපා."
  },
  {
    "type": "game",
    "title": "A tiny memory game",
    "text": "Take a little break, if you feel like it."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your kindness is something worth celebrating."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "A little color for an ordinary day. Take the time you need."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "Here is a quiet reminder to care for yourself. Be gentle with yourself today."
  },
  {
    "type": "game",
    "title": "A tiny memory game",
    "text": "Take a little break, if you feel like it."
  },
  {
    "type": "voice",
    "title": "A voice just for you",
    "text": "A little recorded message, whenever you feel like listening.",
    "voice": 3
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your individuality deserves room to grow."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Ask for help if you are stuck. Be gentle with yourself today."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your thoughtful words is something worth celebrating."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "වසන්තයේ පිපුණු මලක්\nහෙට දවසට අලුත් පැතුමක් වේවා."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your quiet courage matters more than perfection."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "අලුත් දවසක පළමු එළිය\nහිතේ බර සුළඟට මුසු වේවා."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "I hope you keep choosing the things that matter to you.\n\nBe gentle with yourself today."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "රෑ අහසේ පුංචි තරුවක්\nහීන අතරට සිනහවක් එක් කරේවා."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "දුර අහසක ඇඳුණු සිතුවමක්\nඔයාගේ දවසට සැනසීමක් ගෙනේවා."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "You deserve space to grow.\n\nBe gentle with yourself today."
  },
  {
    "type": "game",
    "title": "A tiny memory game",
    "text": "Take a little break, if you feel like it."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "A little bloom for a brighter morning. May today bring you a little peace."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your quiet courage is worth remembering today."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "May something lovely find you today. May today bring you a little peace."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your curiosity matters more than perfection."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Write a small summary. One moment at a time."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "I enjoy the little conversations we share.\n\nMay today bring you a little peace."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "May your dreams grow at their own pace. ඔයාගේ හීන අමතක කරන්න එපා."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your kindness deserves a little recognition."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "Here is a quiet reminder to care for yourself. Take the time you need."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "I hope your dreams feel a little closer today.\n\nOne moment at a time."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your quiet courage is a lovely thing to carry into the world."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "රෑ අහසේ පුංචි තරුවක්\nහෙට දවසට අලුත් පැතුමක් වේවා."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "වසන්තයේ පිපුණු මලක්\nහීන අතරට සිනහවක් එක් කරේවා."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your determination deserves room to grow."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "A little color for an ordinary day. One moment at a time."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your kindness is worth remembering today."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "May your dreams grow at their own pace. One moment at a time."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your curiosity deserves a little recognition."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "දුර අහසක ඇඳුණු සිතුවමක්\nහිතේ බර සුළඟට මුසු වේවා."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "I am glad our paths crossed.\n\nMay today bring you a little peace."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "අලුත් දවසක පළමු එළිය\nහීන අතරට සිනහවක් එක් කරේවා."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your sense of humor is something nobody else can copy."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "May something lovely find you today. Be gentle with yourself today."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your thoughtful words is a reminder that little things count."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "You deserve space to grow.\n\nMay today bring you a little peace."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "A little bloom for a brighter morning. Be gentle with yourself today."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "May the world be kind to you today.\n\nMay today bring you a little peace."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "මල් පෙත්තක රැඳුණු පිනි බිඳක්\nහීන අතරට සිනහවක් එක් කරේවා."
  },
  {
    "type": "voice",
    "title": "A voice just for you",
    "text": "A little recorded message, whenever you feel like listening.",
    "voice": 9
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "I hope your day has a moment of peace.\n\nOne moment at a time."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your quiet courage deserves a little recognition."
  },
  {
    "type": "voice",
    "title": "A voice just for you",
    "text": "A little recorded message, whenever you feel like listening.",
    "voice": 13
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "අලුත් දවසක පළමු එළිය\nහෙට දවසට අලුත් පැතුමක් වේවා."
  },
  {
    "type": "voice",
    "title": "A voice just for you",
    "text": "A little recorded message, whenever you feel like listening.",
    "voice": 20
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "I hope you keep choosing the things that matter to you.\n\nMay today bring you a little peace."
  },
  {
    "type": "game",
    "title": "A tiny memory game",
    "text": "Take a little break, if you feel like it."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "අලුත් දවසක පළමු එළිය\nඔයාගේ දවසට සැනසීමක් ගෙනේවා."
  },
  {
    "type": "voice",
    "title": "A voice just for you",
    "text": "A little recorded message, whenever you feel like listening.",
    "voice": 7
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "ඔයාගේ හිත මලක් වගේ සැහැල්ලු වේවා. Take the time you need."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your quiet courage is something nobody else can copy."
  },
  {
    "type": "voice",
    "title": "A voice just for you",
    "text": "A little recorded message, whenever you feel like listening.",
    "voice": 11
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "සඳ එළියේ නිහඬ මොහොතක්\nඔයා යන මාවත එළිය කරේවා."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your determination is worth remembering today."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your sense of humor is a reminder that little things count."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Try one practice question. ඔයාගේ හීන අමතක කරන්න එපා."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "වසන්තයේ පිපුණු මලක්\nඔයාගේ දවසට සැනසීමක් ගෙනේවා."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your curiosity is something nobody else can copy."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your kindness is a lovely thing to carry into the world."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "මල් පෙත්තක රැඳුණු පිනි බිඳක්\nඔයා යන මාවත එළිය කරේවා."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Drink some water. May today bring you a little peace."
  },
  {
    "type": "voice",
    "title": "A voice just for you",
    "text": "A little recorded message, whenever you feel like listening.",
    "voice": 14
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your quiet courage can make an ordinary day brighter."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "A little color for an ordinary day. Be gentle with yourself today."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Try one practice question. Take the time you need."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "I hope your dreams feel a little closer today.\n\nBe gentle with yourself today."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Write a small summary. Take the time you need."
  },
  {
    "type": "game",
    "title": "A tiny memory game",
    "text": "Take a little break, if you feel like it."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your determination is a lovely thing to carry into the world."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your curiosity is a reminder that little things count."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "රෑ අහසේ පුංචි තරුවක්\nඔයා යන මාවත එළිය කරේවා."
  },
  {
    "type": "game",
    "title": "A tiny memory game",
    "text": "Take a little break, if you feel like it."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Review one topic. ඔයාගේ හීන අමතක කරන්න එපා."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your quiet courage makes a difference in small ways."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Recall what you learned yesterday. One moment at a time."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "May something lovely find you today. Take the time you need."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "I hope your day has a moment of peace.\n\nMay today bring you a little peace."
  },
  {
    "type": "voice",
    "title": "A voice just for you",
    "text": "A little recorded message, whenever you feel like listening.",
    "voice": 17
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your kindness is a reminder that little things count."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your curiosity is worth remembering today."
  },
  {
    "type": "game",
    "title": "A tiny memory game",
    "text": "Take a little break, if you feel like it."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Drink some water. One moment at a time."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "ඔයාගේ හිත මලක් වගේ සැහැල්ලු වේවා. One moment at a time."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "Here is a quiet reminder to care for yourself. May today bring you a little peace."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your sense of humor is something worth celebrating."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "There is something lovely about getting to know someone slowly.\n\nMay today bring you a little peace."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "උදෑසන හමන සුළඟක්\nඔයාගේ දවසට සැනසීමක් ගෙනේවා."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Ask for help if you are stuck. One moment at a time."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your individuality can make an ordinary day brighter."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Celebrate finishing a chapter. ඔයාගේ හීන අමතක කරන්න එපා."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "May the world be kind to you today.\n\nTake the time you need."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Ask for help if you are stuck. Take the time you need."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "You deserve space to grow.\n\nTake the time you need."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "ඔයාගේ හිත මලක් වගේ සැහැල්ලු වේවා. May today bring you a little peace."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Recall what you learned yesterday. Be gentle with yourself today."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your individuality deserves a little recognition."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Start with the easiest topic. One moment at a time."
  },
  {
    "type": "game",
    "title": "A tiny memory game",
    "text": "Take a little break, if you feel like it."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Take a five-minute break. One moment at a time."
  },
  {
    "type": "voice",
    "title": "A voice just for you",
    "text": "A little recorded message, whenever you feel like listening.",
    "voice": 5
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Recall what you learned yesterday. ඔයාගේ හීන අමතක කරන්න එපා."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your determination deserves a little recognition."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "Here is a quiet reminder to care for yourself. One moment at a time."
  },
  {
    "type": "game",
    "title": "A tiny memory game",
    "text": "Take a little break, if you feel like it."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "සඳ එළියේ නිහඬ මොහොතක්\nහීන අතරට සිනහවක් එක් කරේවා."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "රෑ අහසේ පුංචි තරුවක්\nහිතේ බර සුළඟට මුසු වේවා."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "I hope your dreams feel a little closer today.\n\nMay today bring you a little peace."
  },
  {
    "type": "flower",
    "title": "Flowers for your day",
    "text": "A little bloom for a brighter morning. One moment at a time."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Review one topic. Take the time you need."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "වැහි බිඳක සැඟවුණු ගීයක්\nහිතේ බර සුළඟට මුසු වේවා."
  },
  {
    "type": "exam",
    "title": "A little study encouragement",
    "text": "Review one topic. May today bring you a little peace."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "සඳ එළියේ නිහඬ මොහොතක්\nහිතේ බර සුළඟට මුසු වේවා."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your thoughtful words matters more than perfection."
  },
  {
    "type": "sweet",
    "title": "A little compliment",
    "text": "Your quiet courage is a reminder that little things count."
  },
  {
    "type": "letter",
    "title": "A secret letter",
    "text": "You deserve space to grow.\n\nඔයාගේ හීන අමතක කරන්න එපා."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "සඳ එළියේ නිහඬ මොහොතක්\nහෙට දවසට අලුත් පැතුමක් වේවා."
  },
  {
    "type": "poem",
    "title": "පුංචි කවියක්",
    "text": "වසන්තයේ පිපුණු මලක්\nඔයා යන මාවත එළිය කරේවා."
  },
  {
    "type": "voice",
    "title": "A voice just for you",
    "text": "A little recorded message, whenever you feel like listening.",
    "voice": 16
  }
];
