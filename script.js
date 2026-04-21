const TYPES = [
  {
    id: "deadline-guard",
    short: "DDL 守门员",
    name: "DDL 守门员",
    badge: "时间线人格",
    subtitle: "你最需要一个把所有节点钉在日历上的人",
    tagline: "在你还在犹豫要不要等等看的时候，TA 已经把报名表、夏令营、预报名和联系导师节点整理成表了。",
    description:
      "你不是没能力，只是容易在信息爆炸里失焦。DDL 守门员型搭子擅长把模糊焦虑切成明确动作，让你始终知道这周到底该干什么。",
    helps: ["帮你排优先级，防止错过关键节点", "把复杂流程拆成能执行的小任务", "让你的焦虑从“完了完了”变成“下一步做这个”"],
    styles: ["你负责冲，TA 负责盯表", "每天用一句话同步进度最有效", "最适合一到关键期就时间感混乱的人"],
    quote: "你先别慌，今天把这两个表填了，明天再纠结人生。",
    color: "rgba(197, 95, 63, 0.18)",
  },
  {
    id: "intel-radar",
    short: "情报雷达",
    name: "情报雷达",
    badge: "信息流人格",
    subtitle: "你最需要一个总能先你一步听到风声的人",
    tagline: "哪家学院提前开营、哪个老师回复快、哪个群里刚放新通知，TA 都像自带信号接收器。",
    description:
      "如果你最怕的是信息差，那你需要的不是鸡血，而是雷达。情报雷达型搭子能把碎片化消息变成先手优势，让你不再被动刷新页面。",
    helps: ["第一时间转发关键信息", "帮你筛选哪些消息真的值得跟", "减少“别人都知道了只有我不知道”的崩溃感"],
    styles: ["你们适合高频互通消息", "TA 爱逛群，你爱快速判断", "特别适合信息搜集能力偏弱的人"],
    quote: "先别睡，这个学院半夜偷偷开系统了。",
    color: "rgba(89, 138, 188, 0.18)",
  },
  {
    id: "interview-mouthpiece",
    short: "面试嘴替",
    name: "面试嘴替",
    badge: "表达型人格",
    subtitle: "你最需要一个能把你的经历讲顺的人",
    tagline: "不是你没有东西，而是你一开口就变成“我这个其实也一般”。TA 会帮你把经历说成人话、亮点说成亮点。",
    description:
      "很多人输在不会讲自己。面试嘴替型搭子最擅长模拟问答、打磨自我介绍和追问应对，把你脑内的素材整理成老师愿意听下去的版本。",
    helps: ["帮你把经历重新组织成故事线", "陪你模拟压力问答", "及时纠正口头表达里的虚弱感"],
    styles: ["你负责内容，TA 负责润色表达", "适合反复 mock，越练越稳", "最适合履历不错但一面试就卡壳的人"],
    quote: "你这不是普通经历，你这是可讲、可追问、可加分的经历。",
    color: "rgba(232, 168, 64, 0.2)",
  },
  {
    id: "mood-charger",
    short: "情绪充电宝",
    name: "情绪充电宝",
    badge: "心态型人格",
    subtitle: "你最需要一个在你破防时把你接住的人",
    tagline: "夏令营没入、联系导师已读不回、排名边缘反复横跳时，TA 的作用不是讲大道理，是先让你别掉线。",
    description:
      "保研不是纯理性流程，很多人会在高压期被自我怀疑拖垮。情绪充电宝型搭子让你先稳定，再继续行动，是那种低谷期尤其值钱的队友。",
    helps: ["在你崩溃时稳住情绪节奏", "提醒你失败不等于出局", "帮你从情绪里尽快切回执行状态"],
    styles: ["适合日常轻量陪伴和关键节点拉一把", "你们的聊天不会只有任务，也有回血", "最适合对结果波动很敏感的人"],
    quote: "先吃饭，先睡觉，明天我们再一起把局面救回来。",
    color: "rgba(118, 181, 133, 0.2)",
  },
  {
    id: "research-navigator",
    short: "科研导航仪",
    name: "科研导航仪",
    badge: "科研型人格",
    subtitle: "你最需要一个能告诉你科研到底怎么讲的人",
    tagline: "论文看不懂、研究方向说不清、老师一问方法就开始失声？TA 会把这些抽象词翻译成你能掌控的语言。",
    description:
      "如果你的短板在科研叙事和方向理解，那科研导航仪型搭子非常关键。TA 不一定替你做科研，但能帮你读方向、抓重点、避免答非所问。",
    helps: ["帮你理解导师和方向匹配度", "陪你梳理项目逻辑和方法", "提升你讲科研经历时的可信度"],
    styles: ["你提问题，TA 帮你搭理解框架", "适合一起读论文和拆项目", "最适合科研经历有限但必须讲科研的人"],
    quote: "别背黑话，先讲清楚你到底解决了什么问题。",
    color: "rgba(126, 111, 201, 0.18)",
  },
  {
    id: "materials-editor",
    short: "材料总编室",
    name: "材料总编室",
    badge: "文书型人格",
    subtitle: "你最需要一个能把材料收拾得像样的人",
    tagline: "简历、个人陈述、套磁邮件、项目描述、证明材料命名，TA 的世界里一切都有版本号和统一格式。",
    description:
      "你可能不缺内容，但缺最后那点“像专业申请者”的完成度。材料总编室型搭子擅长提升文书的整洁度、逻辑感和可信感，非常适合细节容易乱的人。",
    helps: ["统一文书表达和格式风格", "替你发现材料里的漏洞和重复", "让你交出去的东西更完整、更像成品"],
    styles: ["你提供信息，TA 帮你编辑", "最适合答辩前的最终检查", "适合细节多、文件多、版本多的申请阶段"],
    quote: "先别发，这个文件名像临时稿，我给你收拾一下。",
    color: "rgba(206, 131, 95, 0.18)",
  },
  {
    id: "pace-engine",
    short: "节奏推进器",
    name: "节奏推进器",
    badge: "执行型人格",
    subtitle: "你最需要一个能逼着你动起来的人",
    tagline: "你不是不会，只是容易卡在“我等状态好了再开始”。TA 的存在，就是把准备从想法变成行动。",
    description:
      "节奏推进器型搭子像一台现实世界的启动器。TA 不一定温柔，但特别有效，尤其适合容易拖延、反复内耗、计划总比执行快的人。",
    helps: ["把你的计划推到真正开始", "帮你建立稳定的行动节奏", "让你减少拖延造成的愧疚回圈"],
    styles: ["适合共同打卡和公开进度", "你们最好设明确产出目标", "适合临近关键节点时拉强度"],
    quote: "别等灵感了，今晚先把第一页 PPT 写出来。",
    color: "rgba(233, 121, 75, 0.18)",
  },
  {
    id: "safety-rope",
    short: "兜底安全绳",
    name: "兜底安全绳",
    badge: "策略型人格",
    subtitle: "你最需要一个永远记得准备 B 计划的人",
    tagline: "当你满脑子只有梦校时，TA 已经替你把预推免、补录、夏令营梯度和风险点都列出来了。",
    description:
      "有些人最需要的不是更多冲劲，而是更稳的策略。兜底安全绳型搭子会持续提醒你保留弹性，不把命运压在一个结果上。",
    helps: ["帮你做院校梯度和风险控制", "提醒你留后手而不是孤注一掷", "在结果不理想时快速切方案"],
    styles: ["你负责向上冲，TA 负责别翻车", "适合做阶段复盘和策略调整", "特别适合目标高、风险偏好也高的人"],
    quote: "可以冲，但先把兜底也一起投了，这不丢人。",
    color: "rgba(91, 141, 116, 0.18)",
  },
  {
    id: "network-scout",
    short: "社交开路机",
    name: "社交开路机",
    badge: "破冰型人格",
    subtitle: "你最需要一个能替你迈出第一步的人",
    tagline: "加学长学姐、联系导师、进新群开口问问题，这些让你脚趾抠地的瞬间，TA 处理得像呼吸一样自然。",
    description:
      "如果你总因为社交启动成本太高而错失信息和机会，社交开路机型搭子会帮你破冰。他们能示范、陪练、甚至先替你走出第一步。",
    helps: ["教你怎么开口问、怎么发第一条消息", "降低你联系他人时的心理门槛", "帮你更自然地建立申请期关系网"],
    styles: ["TA 开路，你接力", "适合需要大量沟通的阶段", "最适合社交焦虑但又必须主动联系的人"],
    quote: "消息我帮你顺一遍，你发出去就行，真的没那么可怕。",
    color: "rgba(76, 164, 160, 0.18)",
  },
  {
    id: "mock-judge",
    short: "复盘审判官",
    name: "复盘审判官",
    badge: "反馈型人格",
    subtitle: "你最需要一个敢对你说真话的人",
    tagline: "TA 不会只说“挺好的”，而是会告诉你哪页简历像废话、哪段回答在绕、哪次面试到底输在哪。",
    description:
      "如果你很怕自我感觉良好，那复盘审判官型搭子非常珍贵。TA 提供的不一定舒服，但通常有用，能让你在下一轮前真正升级。",
    helps: ["给你清晰、具体、不拐弯的反馈", "避免你重复踩同一类坑", "让每次失败都能换成下一次的把握"],
    styles: ["最适合 mock 后和结果后复盘", "你们需要建立“直说不破防”的默契", "适合想快速迭代的人"],
    quote: "别急着安慰自己，这题你答偏了，我们重来一遍。",
    color: "rgba(132, 92, 77, 0.18)",
  },
  {
    id: "score-analyst",
    short: "排名分析师",
    name: "排名分析师",
    badge: "判断型人格",
    subtitle: "你最需要一个能把局势算明白的人",
    tagline: "绩点、排名、营员规模、往年入营率、学院偏好，TA 会用最朴素的方式告诉你：你现在到底处在哪个位置。",
    description:
      "排名分析师型搭子不制造情绪，只还原形势。对于容易高估或低估自己的申请者来说，这种清醒判断特别重要，能避免盲冲和自我否定。",
    helps: ["帮你客观判断申报竞争力", "减少凭感觉乱投的情况", "让你的选择更基于事实而不是心情"],
    styles: ["适合投递前一起做信息表", "TA 负责算局面，你负责做决定", "特别适合边缘排名和多线选择的人"],
    quote: "不是你不行，是这档太挤了，我们换个更聪明的打法。",
    color: "rgba(120, 126, 187, 0.18)",
  },
  {
    id: "study-buddy",
    short: "自律陪跑器",
    name: "自律陪跑器",
    badge: "陪伴型人格",
    subtitle: "你最需要一个能和你一起长时间稳定推进的人",
    tagline: "背英语、改简历、准备机试、整理材料，这些不算刺激却必须反复做的事，TA 最擅长陪你慢慢磨。",
    description:
      "你缺的可能不是某个瞬间的爆发，而是持续性。自律陪跑器型搭子能把漫长准备期变成一场有人同行的马拉松，让你更容易坚持下来。",
    helps: ["提供长期稳定的打卡陪伴", "让准备期不再完全靠意志力硬撑", "帮你把小进步积累成大结果"],
    styles: ["适合固定时段同步学习", "你们会有很强的日常共同行动感", "最适合需要长期积累而非临时爆发的人"],
    quote: "今天学不满四小时也没关系，先一起坐下来开始。",
    color: "rgba(223, 164, 76, 0.18)",
  },
];

const QUESTIONS = [
  {
    title: "Q1",
    text: "临近夏令营报名季，你打开收藏夹，发现通知一大堆、表格一大堆、群消息更多。此刻你最希望搭子先帮你做什么？",
    options: [
      { text: "先把所有学院的时间线和截止日期梳理出来，我要知道先做什么。", type: "deadline-guard" },
      { text: "告诉我最近哪些项目刚开、哪些消息最值得追，不想再被信息差背刺。", type: "intel-radar" },
      { text: "先根据我的排名和履历判断一下，哪些能冲、哪些该放弃。", type: "score-analyst" },
      { text: "陪我坐下直接开工，先投完一所再说，不然我会一直卡着。", type: "pace-engine" },
    ],
  },
  {
    title: "Q2",
    text: "你最害怕哪种“保研瞬间破防”的场景？",
    options: [
      { text: "别人都知道新通知了，我还在后知后觉。", type: "intel-radar" },
      { text: "我明明准备了，一开口自我介绍还是显得很弱。", type: "interview-mouthpiece" },
      { text: "被拒一次之后直接怀疑人生，什么都不想做。", type: "mood-charger" },
      { text: "我只顾着冲梦校，最后退路没留够。", type: "safety-rope" },
    ],
  },
  {
    title: "Q3",
    text: "如果搭子和你一起改简历，你最希望 TA 的强项是什么？",
    options: [
      { text: "能把项目经历和奖项讲得更像一个完整故事。", type: "interview-mouthpiece" },
      { text: "能发现格式、逻辑、文件命名这些细节问题。", type: "materials-editor" },
      { text: "能指出哪些内容看起来虚、哪些地方得补证据。", type: "mock-judge" },
      { text: "能判断这份简历对于不同学院够不够打。", type: "score-analyst" },
    ],
  },
  {
    title: "Q4",
    text: "联系导师前，你最需要哪种帮助？",
    options: [
      { text: "有人帮我理解导师方向，不然我怕自己说得很外行。", type: "research-navigator" },
      { text: "有人帮我把邮件和附件打磨得更正式、更像样。", type: "materials-editor" },
      { text: "有人先教我怎么开口，或者帮我把第一条消息顺一下。", type: "network-scout" },
      { text: "有人提醒我不要只盯一个老师，得同时留好备选。", type: "safety-rope" },
    ],
  },
  {
    title: "Q5",
    text: "面试前一晚，你最需要的搭子是哪种状态？",
    options: [
      { text: "立刻拉我 mock 一遍，把问题逼出来。", type: "mock-judge" },
      { text: "陪我模拟和老师交流那一段，别让我一到互动就发怵。", type: "network-scout" },
      { text: "先帮我稳情绪，别让我还没面就先崩。", type: "mood-charger" },
      { text: "别让我继续乱想了，直接带我把最后一轮内容过完。", type: "pace-engine" },
    ],
  },
  {
    title: "Q6",
    text: "你最常在准备周期里卡住的地方是？",
    options: [
      { text: "知道要做，但总觉得状态没到，于是迟迟不开头。", type: "pace-engine" },
      { text: "一旦准备战线拉长，我就容易断掉和摆烂。", type: "study-buddy" },
      { text: "我总分不清哪些事该先做，脑子里一团乱。", type: "deadline-guard" },
      { text: "我总判断不清自己到底在什么位置，一会儿盲目乐观，一会儿疯狂自我否定。", type: "score-analyst" },
    ],
  },
  {
    title: "Q7",
    text: "面对“科研经历”这件事，你更可能是哪种情况？",
    options: [
      { text: "我做过一点，但总讲不清楚自己到底做了什么。", type: "research-navigator" },
      { text: "我知道自己内容还行，但表达出来总像流水账。", type: "interview-mouthpiece" },
      { text: "我最怕别人追问细节，一追问就容易露怯。", type: "mock-judge" },
      { text: "我会先怀疑自己配不配讲科研，然后越讲越心虚。", type: "mood-charger" },
    ],
  },
  {
    title: "Q8",
    text: "如果你和搭子共享一个文档空间，你最希望 TA 在里面留下什么？",
    options: [
      { text: "一个超清晰的时间表和事项清单。", type: "deadline-guard" },
      { text: "一个按学校、方向、往年情况整理好的信息库。", type: "intel-radar" },
      { text: "一套简历、邮件、陈述、证明材料的统一模板。", type: "materials-editor" },
      { text: "一份不同档位院校的投递策略和风险提示。", type: "safety-rope" },
    ],
  },
  {
    title: "Q9",
    text: "如果你保研期最想从搭子身上“借一点能力”，你最想借哪种？",
    options: [
      { text: "主动开口、敢联系、敢问问题的社交启动能力。", type: "network-scout" },
      { text: "稳定坐下学习和长期坚持的耐力。", type: "study-buddy" },
      { text: "不被坏结果击穿、还能继续往前走的心态。", type: "mood-charger" },
      { text: "把复杂局面迅速看清的判断力。", type: "score-analyst" },
    ],
  },
  {
    title: "Q10",
    text: "收到一个不太理想的结果后，你最希望搭子第一句话说什么？",
    options: [
      { text: "先别乱想，我们把失败点拆开，下一轮改哪三件事。", type: "mock-judge" },
      { text: "没事，今晚先休息，明天我们按原计划继续往前推。", type: "study-buddy" },
      { text: "我已经帮你看了后面的机会，还有别的窗口能接上。", type: "safety-rope" },
      { text: "下一轮时间别错过，我现在把后续节点发你。", type: "deadline-guard" },
    ],
  },
  {
    title: "Q11",
    text: "保研这件事里，你对“搭子”最理想的想象更接近哪一种？",
    options: [
      { text: "像一台推进器，能让我不再拖拖拉拉。", type: "pace-engine" },
      { text: "像一个同行者，哪怕慢一点也能一直陪我走。", type: "study-buddy" },
      { text: "像一个有科研地图的人，带我搞懂规则和方向。", type: "research-navigator" },
      { text: "像一个信息前哨站，让我永远不掉线。", type: "intel-radar" },
    ],
  },
  {
    title: "Q12",
    text: "如果最终你只能从搭子身上获得一种最核心的价值，你会选什么？",
    options: [
      { text: "把我说不出口的优势，变成能打动老师的话。", type: "interview-mouthpiece" },
      { text: "把我零散粗糙的材料，变成一个完整可靠的申请包。", type: "materials-editor" },
      { text: "把我不敢迈出去的社交第一步，变得没那么难。", type: "network-scout" },
      { text: "把我模糊混乱的科研认知，变成能讲明白的逻辑。", type: "research-navigator" },
    ],
  },
];

const startBtn = document.querySelector("#start-btn");
const viewTypesBtn = document.querySelector("#view-types-btn");
const typeGrid = document.querySelector("#type-grid");
const legendPanel = document.querySelector("#legend-panel");
const quizPanel = document.querySelector("#quiz-panel");
const resultPanel = document.querySelector("#result-panel");
const questionTitle = document.querySelector("#question-title");
const progressText = document.querySelector("#progress-text");
const progressFill = document.querySelector("#progress-fill");
const questionText = document.querySelector("#question-text");
const optionsEl = document.querySelector("#options");
const prevBtn = document.querySelector("#prev-btn");
const restartBtn = document.querySelector("#restart-btn");
const retryBtn = document.querySelector("#retry-btn");
const copyBtn = document.querySelector("#copy-btn");
const shareText = document.querySelector("#share-text");
const resultCard = document.querySelector("#result-card");
const resultBadge = document.querySelector("#result-badge");
const resultName = document.querySelector("#result-name");
const resultSubtitle = document.querySelector("#result-subtitle");
const resultDescription = document.querySelector("#result-description");
const resultHelpList = document.querySelector("#result-help-list");
const resultStyleList = document.querySelector("#result-style-list");
const resultQuote = document.querySelector("#result-quote");

let currentQuestion = 0;
let answers = Array(QUESTIONS.length).fill(null);

function renderTypes() {
  typeGrid.innerHTML = TYPES.map(
    (type) => `
      <article class="type-card" style="--card-glow: ${type.color}">
        <span class="type-meta">${type.badge}</span>
        <h3>${type.name}</h3>
        <p class="type-tagline">${type.tagline}</p>
        <p>${type.description}</p>
      </article>
    `,
  ).join("");
}

function renderQuestion() {
  const question = QUESTIONS[currentQuestion];
  questionTitle.textContent = question.title;
  progressText.textContent = `${currentQuestion + 1} / ${QUESTIONS.length}`;
  progressFill.style.width = `${((currentQuestion + 1) / QUESTIONS.length) * 100}%`;
  questionText.textContent = question.text;

  optionsEl.innerHTML = question.options
    .map((option, index) => {
      const isSelected = answers[currentQuestion] === index;
      return `
        <button class="option-btn ${isSelected ? "selected" : ""}" data-index="${index}" type="button">
          <span class="option-label">选项 ${String.fromCharCode(65 + index)}</span>
          <span class="option-text">${option.text}</span>
        </button>
      `;
    })
    .join("");

  prevBtn.disabled = currentQuestion === 0;
  prevBtn.style.opacity = currentQuestion === 0 ? "0.5" : "1";
}

function getResultType() {
  const scores = Object.fromEntries(TYPES.map((type) => [type.id, 0]));

  answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex === null) return;
    const choice = QUESTIONS[questionIndex].options[answerIndex];
    scores[choice.type] += 1;
  });

  const ranking = TYPES.slice().sort((a, b) => {
    const diff = scores[b.id] - scores[a.id];
    if (diff !== 0) return diff;
    return a.name.localeCompare(b.name, "zh-CN");
  });

  return ranking[0];
}

function buildShareText(type) {
  return [
    "我刚测了一个《保研搭子人格测试》",
    `结果是：${type.name}`,
    `一句话总结：${type.subtitle}`,
    "",
    "我最需要这样的保研搭子：",
    ...type.helps.map((item) => `- ${item}`),
    "",
    `TA 的保研名言：${type.quote}`,
    "",
    "你也来测测：作为一个保研人，你最需要哪一种搭子？",
  ].join("\n");
}

function renderResult() {
  const type = getResultType();

  resultCard.style.setProperty("--result-glow", type.color);
  resultBadge.textContent = type.badge;
  resultName.textContent = type.name;
  resultSubtitle.textContent = type.subtitle;
  resultDescription.textContent = type.description;
  resultQuote.textContent = `“${type.quote}”`;

  resultHelpList.innerHTML = type.helps.map((item) => `<li>${item}</li>`).join("");
  resultStyleList.innerHTML = type.styles.map((item) => `<li>${item}</li>`).join("");
  shareText.value = buildShareText(type);

  quizPanel.classList.add("hidden");
  resultPanel.classList.remove("hidden");
  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function startQuiz() {
  legendPanel.classList.remove("hidden");
  quizPanel.classList.remove("hidden");
  resultPanel.classList.add("hidden");
  currentQuestion = 0;
  answers = Array(QUESTIONS.length).fill(null);
  renderQuestion();
  quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function restartQuiz() {
  currentQuestion = 0;
  answers = Array(QUESTIONS.length).fill(null);
  resultPanel.classList.add("hidden");
  quizPanel.classList.remove("hidden");
  renderQuestion();
  quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

optionsEl.addEventListener("click", (event) => {
  const button = event.target.closest(".option-btn");
  if (!button) return;

  const index = Number(button.dataset.index);
  answers[currentQuestion] = index;
  renderQuestion();

  if (currentQuestion === QUESTIONS.length - 1) {
    setTimeout(renderResult, 180);
    return;
  }

  setTimeout(() => {
    currentQuestion += 1;
    renderQuestion();
  }, 180);
});

prevBtn.addEventListener("click", () => {
  if (currentQuestion === 0) return;
  currentQuestion -= 1;
  renderQuestion();
});

restartBtn.addEventListener("click", restartQuiz);
retryBtn.addEventListener("click", restartQuiz);

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(shareText.value);
    copyBtn.textContent = "已复制";
    setTimeout(() => {
      copyBtn.textContent = "复制结果文案";
    }, 1400);
  } catch (error) {
    shareText.select();
    document.execCommand("copy");
    copyBtn.textContent = "已复制";
    setTimeout(() => {
      copyBtn.textContent = "复制结果文案";
    }, 1400);
  }
});

startBtn.addEventListener("click", startQuiz);

viewTypesBtn.addEventListener("click", () => {
  legendPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

renderTypes();
renderQuestion();
