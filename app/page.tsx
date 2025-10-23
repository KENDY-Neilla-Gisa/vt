"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { TopicCard } from "@/components/topic-card"
import DetailPanel from "@/components/detail-panel"
import { ScrollArea } from "@/components/ui/scroll-area"

const topics = [
  {
    id: "psychopath-sociopath",
    title: "WHAT MAKES A PSYCHOPATH OR SOCIOPATH?😶",
    image: "/psychopath-sociopath.jpg",
    category: "Psychology",
    readTime: "4 min read",
    publishDate: "October 22, 2025",
    description: (
      <>
        <span className="text-xs inline-block bg-muted px-2 py-1 rounded mr-2 mb-2">
          <strong>amygdala</strong>: a part of the brain involved in processing emotions, particularly fear and empathy.
        </span>
        <span className="text-xs inline-block bg-muted px-2 py-1 rounded mr-2 mb-2">
          <strong>ASPD (Antisocial Personality Disorder)</strong>: a mental health condition characterized by a pattern of disregard for others' rights and social norms.
        </span>
        <span className="text-xs inline-block bg-muted px-2 py-1 rounded mr-2 mb-2">
          <strong>conduct disorder</strong>: a childhood behavioral disorder involving aggressive and antisocial behaviors before age 15.
        </span>
        <span className="text-xs inline-block bg-muted px-2 py-1 rounded mr-2 mb-2">
          <strong>DSM-5</strong>: the Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition — the American Psychiatric Association's diagnostic manual.
        </span>
        <span className="text-xs inline-block bg-muted px-2 py-1 rounded mb-2">
          <strong>prefrontal cortex</strong>: the front part of the brain responsible for impulse control, decision-making, and social behavior.
        </span>
        <br />
        <br />
        Ever met someone who seemed charming on the surface, yet strangely cold, calculating, or indifferent underneath? Or maybe someone who reacts impulsively, breaking rules and disregarding others without a second thought? Both might fall under the same clinical umbrella — <strong>Antisocial Personality Disorder (ASPD)</strong> — but there's a difference between the two: <strong>psychopaths</strong> and <strong>sociopaths</strong>.
        <br />
        <br />
        <strong>PSYCHOPATH VS. SOCIOPATH</strong>
        <br />
        Psychopaths and sociopaths share traits like manipulation, deceit, and disregard for social norms, but they differ in empathy, impulse control, and emotional attachment.
        <br />
        <br />
        <strong>Psychopaths</strong> are emotionally detached and calculating.
        They blend easily into society — calm, controlled, and charming — often hiding their true nature behind charisma.
        <br />
        <br />
        <strong>Sociopaths</strong>, on the other hand, are volatile and impulsive.
        They struggle to form long-term plans, often acting on emotion or frustration, leading to erratic or reckless behavior.
        <br />
        <br />
        💬 In short: psychopaths plan their chaos; sociopaths stumble into theirs.
        <br />
        <br />
        <strong>THEORIES BEHIND THE PSYCHO-SOCIOPATH</strong>
        <br />
        Researchers have proposed several explanations for what shapes these traits — from biology to upbringing, and even evolution itself.
        <br />
        <br />
        ⇾ <strong>Biological Predisposition:</strong> Psychopaths often show differences in brain structure, especially in the <strong>amygdala</strong> (emotion and empathy) and <strong>prefrontal cortex</strong> (impulse control). These neurological differences may explain their emotional detachment and calculated cruelty.
        <br />
        <br />
        ⇾ <strong>Environmental Shaping:</strong> Sociopathy is more closely linked to environmental factors — traumatic childhoods, neglect, or exposure to violence. A harsh or unstable upbringing can suppress empathy and encourage antisocial survival tactics.
        <br />
        <br />
        ⇾ <strong>Evolutionary Hypothesis:</strong> Some psychologists suggest that psychopathic traits once had survival value. Fearlessness, charm, and manipulation could have been evolutionary tools for dominance, leadership, or survival in competitive environments.
        <br />
        <br />
        ⇾ <strong>Behavioral Conditioning:</strong> When deceit, intimidation, or violence lead to success, those behaviors can be reinforced. Over time, people may learn that power and fear work better than empathy — forming an amoral worldview.
        <br />
        <br />
        <strong>CONTRIBUTING FACTORS</strong>
        <br />
        Psychopathic or sociopathic traits may surface more strongly under certain conditions, including:
        <br />
        • Chronic stress or trauma exposure
        <br />
        • Early childhood neglect or abuse
        <br />
        • Substance misuse
        <br />
        • History of <strong>conduct disorder</strong> before age 15
        <br />
        • Dysfunctional family dynamics
        <br />
        • Neurological abnormalities or genetic predisposition
      </>
    ),
    facts: [
      {
        text: (
          <>
            Around <strong>1%</strong> of the general population shows psychopathic traits, while sociopathic traits are estimated to occur in about <strong>4%</strong> of people.
          </>
        ),
        publishDate: "",
      },
      {
        text: (
          <>
            <strong>Psychopaths</strong> can often pass undetected — many hold stable jobs and families.
          </>
        ),
        publishDate: "",
      },
      {
        text: (
          <>
            <strong>Sociopaths</strong> are more erratic and likely to engage in unplanned, impulsive crimes.
          </>
        ),
        publishDate: "",
      },
      {
        text: (
          <>
            Studies suggest <strong>psychopathy</strong> is more strongly rooted in genetics, while <strong>sociopathy</strong> results more from environmental pressures.
          </>
        ),
        publishDate: "",
      },
      {
        text: (
          <>
            Psychopaths can mimic concern, but their emotional response is shallow — it's performance, not empathy.
          </>
        ),
        publishDate: "",
      },
    ],
    didYouKnow: {
      text: (
        <>
          <strong>Ted Bundy</strong>, one of history's most infamous psychopaths, once helped police catch another serial killer — while he was on death row.
          <br />
          <br />
          In the late 1980s, investigators sought Bundy's insight into the <strong>Green River Killer</strong> case, hoping his understanding of homicidal behavior could reveal the suspect's patterns.
          Bundy agreed — not out of remorse, but for attention and temporary fame.
          <br />
          <br />
          He gave a chillingly accurate psychological profile, suggesting the killer would return to dump sites to relive his crimes.
          He was right — the Green River Killer, <strong>Gary Ridgway</strong>, later admitted to doing exactly that.
          <br />
          <br />
          Bundy's ability to predict another murderer's behavior showcased the unnerving clarity and calculation that define psychopathy:
          <br />
          <br />
          No empathy — just an expert-level understanding of human weakness.
        </>
      ),
    },
    terminology: {
      text: (
        <>
          <strong>A NOTE ON TERMINOLOGY</strong>
          <br />
          <br />
          "Psychopath" and "sociopath" are not official psychiatric diagnoses.
          Both fall under <strong>Antisocial Personality Disorder (ASPD)</strong> in the <strong>DSM-5</strong> — the American Psychiatric Association's diagnostic manual.
          The terms are used to describe behavioral patterns, not distinct medical categories.
          <br />
          <br />
          Psychopaths and sociopaths may look similar on the outside — but one is cold by nature, the other hardened by nurture.
        </>
      ),
    },
  },
  {
    id: "hypnic-jerk",
    title: "FALLING IN YOUR SLEEP?!🤔",
    image: "/hypnic-jerk-1.jpg",
    category: "Neuroscience",
    readTime: "3 min read",
    publishDate: "October 15, 2025",
    description: (
      <>
        <span className="text-xs inline-block bg-muted px-2 py-1 rounded mr-2 mb-2">
          <strong>non-REM sleep</strong>: the calm, restful part of sleep that has three stages — from light sleep to deep sleep.
        </span>
        <span className="text-xs inline-block bg-muted px-2 py-1 rounded mr-2 mb-2">
          <strong>REM (Rapid Eye Movement) sleep</strong>: the stage of sleep where most dreams happen, with its name coming from how your eyes move behind your eyelids while you're dreaming.
        </span>
        <span className="text-xs inline-block bg-muted px-2 py-1 rounded mr-2 mb-2">
          <strong>sleep myoclonus</strong>: the involuntary, sudden jerking of muscles that happens during the transition to sleep.
        </span>
        <span className="text-xs inline-block bg-muted px-2 py-1 rounded mb-2">
          <strong>vestibular</strong>: relating to the system in the inner ear responsible for balance and spatial orientation.
        </span>
        <br />
        <br />
        Have you ever felt like you were falling in your sleep and suddenly jolted awake?
        That quick, unexpected twitch that pulls you out of rest isn't just random — it's something almost everyone experiences at some point. Known as a <strong>hypnic jerk</strong>, it happens right as your body is transitioning from being awake to falling asleep. For a moment, your brain and muscles seem to get their signals crossed, leaving you with that strange falling sensation and a sudden jump.
        <br />
        <br />
        <strong>WHAT IS HYPNIC JERK?</strong>
        <br />
        Hypnic Jerk (also called a <strong>hypnagogic jerk</strong> or <strong>sleep start</strong>) is a brief, involuntary muscle twitch that often occurs during the transition from wakefulness to sleep, usually in the first stage of <strong>non-REM sleep</strong>. This twitch may be accompanied by a vivid sensation of falling, tripping, or even hearing a jolt-like sound.
        <br />
        <br />
        ⚠️ It also has to be noted that hypnic jerks are normal and occur even in healthy individuals.
        <br />
        <br />
        <strong>THEORIES BEHIND THE HYPNIC JERK</strong>
        <br />
        ⇾ <strong>Brain Misinterpretation of Muscle Relaxation:</strong> As your muscles relax before sleep, the brain may misinterpret this as a loss of physical support, leading it to trigger a reflexive jerk to "catch" yourself from falling.
        <br />
        <br />
        ⇾ <strong>Evolutionary Hypothesis:</strong> Some scientists suggest this reflex is a remnant from our primate ancestors — a survival mechanism to prevent falling from trees while sleeping.
        <br />
        <br />
        ⇾ <strong>Neural Misfires in the Brainstem:</strong> The reticular brainstem, which manages wakefulness and movement, may send out a sudden burst of energy as it shuts down for sleep, resulting in the muscle twitch.
        <br />
        <br />
        ⇾ <strong>Vestibular Disconnection:</strong> When sensory input to the <strong>vestibular</strong> system decreases, the lack of information about gravity may cause the brain to interpret the sensation as free fall, reinforcing the illusion of falling.
        <br />
        <br />
        <strong>CONTRIBUTING FACTORS</strong>
        <br />
        Hypnic jerks are more common when a person is:
        <br />
        • Under stress or anxiety
        <br />
        • Experiencing sleep deprivation
        <br />
        • Consuming stimulants like caffeine or nicotine before bed
        <br />
        • Engaging in intense physical activity before rest
        <br />
        • Sleep position — lying on your back may make hypnic jerks more noticeable
      </>
    ),
    facts: [
      {
        text: (
          <>
            <strong>REM sleep</strong> alternates with <strong>non-REM sleep</strong> throughout the night, with each cycle lasting about <strong>90 minutes</strong>.
          </>
        ),
        publishDate: "",
      },
      {
        text: (
          <>
            Hypnic jerk is a specific type of <strong>sleep myoclonus</strong>. While hypnic jerks specifically happen as you're falling asleep, sleep myoclonus can also occur in other sleep stages.
          </>
        ),
        publishDate: "",
      },
      {
        text: (
          <>
            Around <strong>70%</strong> of people experience hypnic jerks at least once in their lives, while about <strong>10%</strong> have them daily.
          </>
        ),
        publishDate: "",
      },
      {
        text: (
          <>
            Hypnic jerks occur more commonly in <strong>younger people</strong> and tend to <strong>decrease with age</strong>, dropping from several per hour in childhood to just one or two per night by old age.
          </>
        ),
        publishDate: "",
      },
    ],
    didYouKnow: {
      text: (
        <>
          <strong>WHEN TO SEEK MEDICAL ADVICE</strong>
          <br />
          <br />
          Although hypnic jerks are normal and harmless, if they occur frequently enough to disrupt sleep or cause anxiety about falling asleep, a doctor might evaluate for sleep disorders or movement-related conditions such as <strong>sleep myoclonus</strong>.
          <br />
          <br />
          Most people experience hypnic jerks occasionally and find them more amusing than concerning. However, if you notice a significant increase in frequency or intensity, or if they're accompanied by other sleep disturbances, it's worth discussing with a healthcare provider to rule out any underlying sleep disorders.
        </>
      ),
    },
  },
  {
    id: "gates-of-hell",
    title: "GATES OF HELL!😱",
    image: "/gates-of-hell.jpg",
    category: ["Physical Geography", "Geology"],
    readTime: "3 min read",
    publishDate: "October 8, 2025",
    carouselImages: [
      "/gates-of-hell.jpg",
      "/gates-of-hell-1.jpg",
      "/gates-of-hell-2.jpg",
      "/water-crater.jpg",
      "/mud-crater.png",
    ],
    carouselLabels: [
      "Darvaza Gas Crater, Karakum Desert",
      "Darvaza Gas Crater (close-up)",
      "Darvaza Gas Crater at night",
      "Water Crater",
      "Mud Crater",
    ],
    description: (
      <>
        <h2 className="text-base font-semibold mb-2">DARVAZA GAS CRATER</h2>
        <span className="text-xs inline-block bg-muted px-2 py-1 rounded mr-2 mb-2">
          <strong>cavern</strong>: a large cave or chamber in a cave.
        </span>
        <span className="text-xs inline-block bg-muted px-2 py-1 rounded mr-2 mb-2">
          <strong>coliseum</strong>: a large amphitheatre (= a circular or oval area with seats around it for watching sports and entertainments)
        </span>
        <span className="text-xs inline-block bg-muted px-2 py-1 rounded mr-2 mb-2">
          <strong>crater</strong>: a large bowl-shaped cavity in the ground or on a celestial object, typically one caused by an explosion or the impact of a meteorite.
        </span>
        <span className="text-xs inline-block bg-muted px-2 py-1 rounded mb-2">
          <strong>geologist</strong>: a scientist who studies the structure, composition, and history of Earth.
        </span>
        <br />
        <br />
        Think deserts are boring? Think again. In the heart of Turkmenistan, there's a massive fiery pit known as the
        <strong> Darvaza Gas Crater</strong> — or, as locals like to call it, the <strong>Gate of Hell</strong>. This
        thing has been burning non-stop since the 1970s, turning the quiet desert nights into a scene that looks straight
        out of a fantasy movie.
        <br />
        <br />
        <strong>WHAT IS DARVAZA GAS CRATER?</strong>
        <br />
        The Darvaza gas crater, also known as the <strong>Door to Hell</strong> or <strong>Gates of Hell</strong>, officially the
        <strong> Shining of Karakum</strong>, is a burning natural gas field collapsed into a <strong>cavern</strong> near
        Darvaza, Turkmenistan. The site has been burning continuously since 1971, when it was accidentally ignited during a
        Soviet drilling operation.
        <br />
        <br />
        <strong>THE HISTORY BEHIND THE CRATER</strong>
        <br />
        In 1971, Soviet <strong>geologists</strong> had been drilling for gas at the site of a cavern. The cavern
        collapsed, releasing the gas. Fearing the release of toxic gases, the geologists set the crater on fire, hoping
        that the flames would burn off the gas within a few days or weeks. However, the fire has been burning continuously
        for over 50 years and has become a permanent feature of the desert landscape. There are no accurate records of the
        event, but the fact is that this gas cavern has been burning since then.
        <br />
        <br />⇾ The flames that burn within the crater are created by the combustion of methane gas. <strong>Methane</strong> is an
        odorless and colorless gas that's highly flammable, and it's released naturally as a byproduct of the decomposition
        of organic matter. The methane in the Darvaza Gas Crater is thought to have been trapped in a natural gas pocket
        beneath the desert floor, and the drilling accident released it into the atmosphere.
      </>
    ),
    facts: [
      {
        text: (
          <>
            <strong>Darvaza</strong> from Turkmen literally means <strong>"Gate"</strong>.
          </>
        ),
        publishDate: "",
      },
      {
        text: (
          <>
            The <strong>Darvaza Gas Crater</strong> is located in the <strong>Karakum Desert</strong> of
            <strong> Turkmenistan</strong>. Karakum desert makes up around <strong>70%</strong> of the country.
          </>
        ),
        publishDate: "",
      },
      {
        text: (
          <>
            The <strong>diameter</strong> of the crater is <strong>69 meters</strong> and the <strong>depth</strong> is
            <strong> 30</strong>.
          </>
        ),
        publishDate: "",
      },
      {
        text: (
          <>
            There are also <strong>two</strong> other similar big craters: a <strong>"Water Crater"</strong> where
            <strong> gas bubbles through water</strong> and a <strong>"Mud Crater"</strong> where
            <strong> natural gas churns up mud</strong>. Though not as impressive as the Darvaza crater, you can still visit
            them on the way.
          </>
        ),
        publishDate: "",
      },
    ],
    didYouKnow: {
      image: "/george.jpg",
      text: (
        <>
          In 2013, <strong>George Kourounis</strong> became the first person to set foot at the bottom of the crater; he was
          gathering soil samples for the Extreme Microbiome Project. The descent was sponsored by National Geographic and
          featured in an episode of the National Geographic Channel series <em>Die Trying</em>.
          <br />
          <br />
          <em>
            "I describe it as a coliseum of fire—just everywhere you look it's thousands of these small fires. The sound was
            like that of a jet engine, this roaring, high-pressure, gas-burning sound. And there was no smoke. It burns very
            cleanly, so there's nothing to obscure your view. You can just see every little lick of flame."
          </em>
          <br />
          <span className="font-bold">~ George Kourounis, Interview with National Geographic</span>
          <br />
          <br />
          Kourounis used a custom-made Kevlar harness and multiple Technora ropes attached to a full-body aluminized suit with
          a self-contained breathing apparatus. He has since wished to descend into the crater again, carrying more equipment
          for better profiling of the local biome.
        </>
      ),
    },
  },
  {
    id: "blood-falls",
    title: "BLOOD FALLS, ANTARCTICA",
    image: "/blood-falls-antarctica-1.jpg",
    category: ["Physical Geography", "Natural Science"],
    readTime: "2 min read",
    publishDate: "October 1, 2025",
    carouselImages: [
      "/blood-falls-antarctica-1.jpg",
      "/blood-falls-antarctica-2.jpg",
      "/blood-falls-antarctica-3.jpg",
      "/blood-falls-antarctica-4.jpg",
    ],
    carouselLabels: [
      "Blood Falls, Antarctica",
      "Taylor Glacier seep, East Antarctica",
      "McMurdo Dry Valleys ice face",
      "Iron-rich brine outflow",
    ],
    description: (
      <>
        <span className="text-xs inline-block bg-muted px-2 py-1 rounded">
          <strong>brine</strong>: water strongly impregnated with salt.
        </span>
        <br />
        <br />
        Many people think Antarctica is just a frozen, lifeless wasteland — endless white ice and snow as far as the
        eye can see. But then there's Blood Falls, a strange waterfall that looks like the ice itself is bleeding.
        Worry not, tho… it's not real blood. The deep red flow comes from iron-rich water seeping out of the Taylor
        Glacier and rusting as soon as it touches the air, creating one of the most bizarre sights on the planet.
        <br />
        <br />
        <strong>WHAT IS BLOOD FALLS?</strong>
        <br />
        Blood Falls is a crimson-red waterfall on the edge of the Taylor Glacier in East Antarctica's McMurdo Dry
        Valleys. Its shocking color comes from iron-rich saltwater that has been trapped beneath the glacier for
        millions of years.
        <br />
        <br />
        <strong>WHY IS THE WATER RED?</strong>
        <br />
        The water originates from an ancient hypersaline lake that was sealed off by the advancing Taylor Glacier
        roughly 1.5 to 5 million years ago. Because of its extremely high salt content, the brine never freezes, even
        under Antarctica's brutal cold.
        <br />
        <br />
        When this brine finally seeps out and meets oxygen in the air, the iron inside oxidizes — basically, it rusts
        — turning the water a dramatic shade of red.
        <br />
        <br />
        ⇾ Early explorers initially suspected the color was caused by red algae, but this theory was later disproven by
        chemical analysis.
      </>
    ),
    facts: [
      {
        text: (
          <>
            The <strong>brine</strong> at <strong>Blood Falls</strong> is about <strong>2–3 times saltier than normal
            seawater</strong> and packed with dissolved iron.
          </>
        ),
        publishDate: "",
      },
      {
        text: (
          <>
            Despite having <strong>no sunlight</strong> and <strong>almost no oxygen</strong>, <strong>microbes</strong> still
            live in this <strong>extreme environment</strong>. They survive through <strong>chemosynthesis</strong>,
            drawing energy from iron and sulfur compounds in the water instead of light.
          </>
        ),
        publishDate: "",
      },
    ],
  },
  {
    id: "dubai",
    title: "DUBAI AS AN EMIRATE, NOT A COUNTRY! 😅",
    image: "/dubai-skyline-with-burj-khalifa-at-sunset.jpg",
    category: "Political Geography",
    readTime: "4 min read",
    publishDate: "September 23, 2025",
    description: (
      <>
        Many people often mistake Dubai for being a city — the capital of the UAE (United Arab Emirates) at that — or
        even worse, a country. But no… Dubai ain't a country, and as much as it is a city, it is not the capital of the
        UAE. The actual capital is Abu Dhabi, which is the largest city, while Dubai is simply the capital of the
        Emirate of Dubai in the UAE.
        <br />
        <br />
        <strong>WHAT'S AN EMIRATE?</strong>
        <br />
        An emirate is a region or territory governed by an emir, which is an Arabic term for a ruler or prince. It is
        more of a semi-autonomous monarchy.
        <br />
        <br />
        <strong>STRUCTURE WITHIN THE UAE</strong>
        <br />
        The UAE is a federation of seven emirates: Abu Dhabi, Dubai, Sharjah, Ras Al Khaimah, Fujairah, Umm Al Quwain,
        and Ajman. Each maintains its own ruler (emir), its own local laws, and so on.
        <br />
        <br />⇾ The capital of the UAE is Abu Dhabi, which is also the largest emirate by area. Abu Dhabi hosts the
        federal government, including the offices of the President and the Federal National Council, making it the
        political and administrative center of the nation.
        <br />
        <br />⇾ Dubai is one of the seven emirates that make up the UAE and is both an emirate and a city. It serves as
        the administrative, economic, and cultural center of the Emirate of Dubai.
      </>
    ),
    facts: [
      {
        text: (
          <>
            The <strong>United Arab Emirates</strong> was officially formed on <strong>2 December 1971</strong>, when{" "}
            <strong>six</strong> emirates united to create a <strong>federal state</strong>, with{" "}
            <strong>Ras Al Khaimah</strong> joining as the <strong>seventh</strong> emirate on{" "}
            <strong>10 February 1972</strong>.
          </>
        ),
        publishDate: "",
      },
      {
        text: (
          <>
            The <strong>President of the UAE</strong> is traditionally the <strong>ruler of Abu Dhabi</strong>, and the{" "}
            <strong>Prime Minister</strong> is often the <strong>ruler of Dubai</strong>.
          </>
        ),
        publishDate: "",
      },
    ],
    didYouKnow: {
      image: "/sheikha-mahra-instagram-post.png",
      text: (
        <>
          Sheikha Mahra bint Mohammed bin Rashid Al Maktoum, one of the 26 children of Dubai's emir and the Vice
          President and Prime Minister of the UAE, announced her divorce from her husband on Instagram in a post that
          said:
          <br />
          <br />
          <em>
            "Dear Husband, as you are occupied with other companions, I hereby declare our divorce. I divorce you, I
            divorce you, I divorce you. Take care. Your ex-wife."
          </em>
          <br />
          <br />
          This post references the Islamic practice of triple talaq, where a spouse can declare divorce three times.
          Although traditionally invoked by husbands, Mahra's use of it was seen as a bold and rare reversal of custom,
          attracting widespread attention.
        </>
      ),
    },
  },
]

const jokes = [
  "I mustard the courage to tell my friend a joke about condiments, but it was too cheesy — I couldn't ketch-up.",
  "My cow went to therapy — it needed a little moo-tivation to get over feeling pasture-d.",
  "Did you hear about the crab who never shares? He's a little shellfish.",
  "Why did the tomato blush? Because it saw the salad dressing.",
  "I'm on a seafood diet. I see food and I eat it.",
  'I told my computer I needed a break. It said: "Error 404: Rest not found"',
  "I told a chemistry joke. There was no reaction.",
  "I stayed up all night to see where the sun went. Then it dawned on me.",
  "I once heard a joke about amnesia, but I forgot how it goes.",
  "Sleeping comes so naturally to me, I could do it with my eyes closed.",
]

const pickupLines = [
  "I always thought happiness started with an \"H\" but it looks like it starts with \"U\".",
  "If X + U = 15, then I would assume X = 5 because U is definitely a 10",
  "Do you have a name? Or can I call you mine?",
  "On a scale of 1 to 10, you're a 9...because I'm the 1 you need.",
  "They say nothing lasts forever. Want to be my nothing?",
  "I think something's wrong with my phone. Cud you call it and see if it works?",
  "No pen, no paper but you still draw my attention.",
  "I don't even play cards yet I somehow drew the Queen of Hearts.",
  "Hey, how was heaven when you left it? ",
]

const wiseManQuotes = [
  "Beware of those I miss yu texts towards the end of the month.\nRent is coming up",
  "Keep your friends close, but your enemies far away. They would kill you if they were closer.",
  "It's better to have a fat ss than to be a fat ss.",
  "If you can’t defeat them, defeat yourself so they cannot defeat you.",
  "If they ghost you, thank them. Dead people shouldn’t be texting anyway.",
  "Life is short — but your broke days will feel eternal.",
  "Happiness costs nothing, but Wi-Fi still does. Choose wisely.",
  '"idol of idiot worshippers"',
  "If you can’t find the sunshine, just accept you’re the cloud",
  "Never fight a fool in public; spectators might not tell who’s who.",
  "The devil works hard, but “battery low” works harder.",
]

const sleepQuotes = [
  "Sleep is the best meditation. Unless you're falling through the void, apparently.",
  "I told my brain to stop making me feel like I'm falling. It said 'Trust fall!' and laughed.",
  "My body: *completely relaxed*\nMy brain: YOU'RE FALLING OFF A CLIFF!",
  "Sleep is just your brain's way of testing if you still have working reflexes.",
  "Nothing says 'good night' like your own body pranking you awake.",
  "Evolution: Let's make humans think they're falling when they're perfectly safe in bed. Peak comedy.",
  "Me: Finally falling asleep\nMy nervous system: EMERGENCY! FAKE CRISIS! ALL HANDS ON DECK!",
  "The only thing scarier than falling in your sleep is waking up and not knowing where you are.",
  "Your body really said 'let me just check if gravity still works' at 2 AM.",
  "Sleep paralysis? No thanks. I prefer sleep cardio—courtesy of hypnic jerks.",
]

const hiddenHabits = [
  "1. Ghosting\n\nEver stopped replying because 'it's easier than explaining'?\nGhosting protects you from awkward emotions — but it also avoids honesty. It leaves others confused and you emotionally unpracticed.",
  "2. Guilt Tripping\n\nInstead of asking directly, you make someone feel bad to get your way.\nIt's manipulation dressed as emotion — 'I guess you don't care about me.'",
  "3. People-Pleasing / Fawning\n\nYou say 'yes' even when you want to say 'no.'\nYou confuse being kind with being available. But kindness without boundaries turns into exhaustion.",
  "4. Perfectionism\n\nThat 'must do everything right' energy isn't motivation — it's fear.\nYou chase flawlessness to feel safe from judgment. But perfection kills creativity.",
  "5. Over-Explaining\n\nYou give long explanations to prove you're not wrong, rude, or careless.\nThat comes from living where mistakes weren't safe.",
  "6. Hyper-Independence\n\n'I don't need anyone.' Sounds powerful — but it's often protection.\nYou learned that depending on others leads to disappointment, so now you trust no one but yourself.",
  "7. Habitual Overcommitment\n\nYou're always busy — because slowing down feels scary.\nMaybe it's to feel important, or to avoid loneliness, or to escape your thoughts.",
  "8. Passive-Aggressive Behavior\n\nYou say 'It's fine' when it's not. You 'forget' things on purpose.\nIt's anger that doesn't know how to speak up — so it sneaks out sideways.",
  "9. Projection\n\nYou accuse others of what you secretly feel yourself.\n'Why are you so selfish?' might actually mean 'I'm scared of being selfish.'",
  "10. Rumination\n\nYou replay moments in your head, over and over, trying to change the past in your mind.\nIt feels like thinking — but it's emotional looping.",
]

const wiseManFooterQuote = '"The role of a writer is not to say what we can all say, but what we are unable to say.😉" ~ Anais Nin'

const INP_QUOTE = "Now many of u might be wondering what happened to Lamine Yamal!🤔\nWell...Nicki Nicole happened. Unam sayin'😊"

wiseManQuotes.push(INP_QUOTE)

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState<(typeof topics)[0] | null>(null)
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0)

  const isBloodFalls = selectedTopic?.id === "blood-falls"
  const isGatesOfHell = selectedTopic?.id === "gates-of-hell"
  const isHypnicJerk = selectedTopic?.id === "hypnic-jerk"
  const isPsychopath = selectedTopic?.id === "psychopath-sociopath"
  const quotes = isBloodFalls ? pickupLines : isGatesOfHell ? wiseManQuotes : isHypnicJerk ? sleepQuotes : isPsychopath ? hiddenHabits : jokes
  const isINP = isGatesOfHell && quotes[currentJokeIndex] === INP_QUOTE

  useEffect(() => {
    setCurrentJokeIndex(0)
  }, [isBloodFalls])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJokeIndex((prev) => (prev + 1) % quotes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [quotes.length])

  return (
    <div className="min-h-screen flex flex-col lg:h-screen lg:flex-row bg-background overflow-x-hidden">
      {/* First Column - VOCABULARY TODAY */}
      <div className="w-full lg:w-80 border-b lg:border-b-0 lg:border-r bg-card flex flex-col">
        <div className="p-4 sm:p-6 border-b">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Go to home"
                title="Home"
                onClick={() => setSelectedTopic(null)}
                className="w-8 h-8 rounded flex items-center justify-center hover:opacity-80 transition"
              >
                <img src="/vt-logo-white.png" alt="VT Logo" className="w-6 h-6 object-contain dark:block hidden" />
                <img src="/vt-logo.png" alt="VT Logo" className="w-6 h-6 object-contain dark:hidden block" />
              </button>
              <ThemeToggle />
            </div>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-balance">VOCABULARY TODAY</h1>
          <p className="text-sm text-muted-foreground mt-2 text-pretty">Expand your mind, one word at a time.</p>
        </div>

        <div className="flex-1 p-4 sm:p-6">
          <div className="space-y-4">
            <div className="text-center p-4 sm:p-8 text-muted-foreground">
              {!selectedTopic ? (
                <div className="py-6">
                  <div className="text-5xl mb-3 animate-bounce">👋🏽</div>
                  <h3 className="font-medium">Enjoy Your Read!</h3>
                </div>
              ) : (
                <>
                  <h3 className="font-medium mb-4">{isBloodFalls ? "Smooth Talk Collection - Pickup Lines😒" : isGatesOfHell ? (isINP ? "🫢INP ONCE SAID" : "😏A WISE MAN ONCE SAID:") : isHypnicJerk ? "💤 SLEEP THOUGHTS" : isPsychopath ? "🧠 THE HIDDEN HABITS WE DON'T NOTICE" : "HAHAHA, sOo fUnNyYYyY…😒"}</h3>
                  <div className="min-h-[120px] flex items-center justify-center">
                    <div className="text-sm text-pretty leading-relaxed transition-all duration-500 ease-in-out text-center whitespace-pre-line">
                      {quotes[currentJokeIndex]}
                    </div>
                  </div>
                  {isGatesOfHell && (
                    <div className="mt-4 pt-3 border-t text-xs text-muted-foreground text-pretty text-center">
                      {wiseManFooterQuote}
                    </div>
                  )}
                  <div className="flex justify-center gap-1 mt-4">
                    {quotes.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentJokeIndex ? "bg-primary" : "bg-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="hidden lg:block p-4 border-t text-center">
          <p className="text-xs text-muted-foreground">© 2025 VT. All rights reserved.</p>
        </div>
      </div>

      {/* Second Column - SERIES */}
      <div className="w-full lg:w-96 border-b lg:border-b-0 lg:border-r bg-card flex flex-col max-h-[600px] lg:max-h-full">
        <div className="p-4 sm:p-6 border-b flex-shrink-0">
          <h2 className="text-lg sm:text-xl font-semibold">SERIES</h2>
          <p className="text-sm text-muted-foreground mt-1">All featured topics</p>
        </div>

        <ScrollArea className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-6 space-y-4">
            {topics.map((topic) => (
              <TopicCard
                key={topic.id}
                title={topic.title}
                image={topic.image}
                isSelected={selectedTopic?.id === topic.id}
                onClick={() => setSelectedTopic(topic)}
              />
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Third Column - Detail Panel */}
      <div className="flex-1 bg-background w-full">
        <div className="h-full">
          <DetailPanel topic={selectedTopic} />
        </div>
      </div>
      
      {/* Mobile Footer - only visible on smaller screens */}
      <footer className="lg:hidden w-full border-t text-center py-3 mt-auto">
        <p className="text-xs text-muted-foreground">© 2025 VT. All rights reserved.</p>
      </footer>
    </div>
  )
}
