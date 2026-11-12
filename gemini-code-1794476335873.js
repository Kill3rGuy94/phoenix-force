// config.js - Κρυφό αρχείο ρυθμίσεων και δεδομένων ομάδας
const PHOENIX_CONFIG = {
    formspreeEndpoint: "https://formspree.io/f/xkjrwvgr",
    twitchClientId: "x396p96cqee8dz5nfusmazlc7k0yfi", // Γενικό Client ID αν χρειαστεί
    
    // Ατομικά Client IDs ανά streamer (μπορείς να βάλεις τα δικά τους κλειδιά εδώ)
    twitchClientIds: {
        "Kill3rGuy94": "x396p96cqee8dz5nfusmazlc7k0yfi",
        "YioGki": "CLIENT_ID_GIA_YIOGKI",
        "catgamer_tv": "CLIENT_ID_GIA_CATGAMER",
        "CreepyPuppet_Tv": "CLIENT_ID_GIA_CREEPY",
        "FenChris": "CLIENT_ID_GIA_FENCHRIS",
        "Ghost_R4in": "CLIENT_ID_GIA_GHOST",
        "demon_gekkouga": "71j3xlbcp3g2wyps8pa2h9038kg9ns",
        "YipYipMan_": "f19wk4maon6tu919dqd7ma7hnbykd7"
    },

    streamers: [
        { 
            name: "Kill3rGuy94", 
            role: "👑 LEADER & FOUNDER", 
            description: "Καλωσήρθατε στο καναλι μου. Ειμαι ο Δημητρης και ειμαι noobas. Ελπιζω να περασετε καλα με την παρεα μας!", 
            logo: "logos/Kill3rGuy94.png", 
            link: "https://twitch.tv/kill3rguy94" 
        },
        { 
            name: "YioGki", 
            role: "CREATOR", 
            description: "Welcome,welcome.. to my channel take a sit and enjoy~! Κύριο game είναι το League of legends.", 
            logo: "logos/Yiogki.png", 
            link: "https://twitch.tv/yiogki" 
        },
        { 
            name: "catgamer_tv", 
            role: "CREATOR", 
            description: "Γεια σε όλους είμαι ο Σπύρος και μου αρέσει το gaming από εποχές Atari και Playstation!", 
            logo: "logos/image_91fc9f.png", 
            link: "https://twitch.tv/catgamer_tv" 
        },
        { 
            name: "CreepyPuppet_Tv", 
            role: "CREATOR", 
            description: "Καλά plays μόνο κατά τύχη!", 
            logo: "logos/image_91fc7c.png", 
            link: "https://twitch.tv/creepypuppet_tv" 
        },
        { 
            name: "FenChris", 
            role: "CREATOR", 
            description: "Just having fun playing games ⚡ Currently maining AION2", 
            logo: "logos/Fenchris.png", 
            link: "https://twitch.tv/fenchris" 
        },
        { 
            name: "Ghost_R4in", 
            role: "CREATOR", 
            description: "Hello everyone! My name is Rain I'm 22 years old and I like to play video games alot!", 
            logo: "logos/Ghost.png", 
            link: "https://twitch.tv/ghost_r4in" 
        },
        { 
            name: "demon_gekkouga", 
            role: "CREATOR", 
            description: "Εεε γεια ειμαι ο Δημητρης ή αλλιως Κωστης, παιζω games μαλλον εχω χιουμορ!", 
            logo: "logos/Gekkouga.png", 
            link: "https://twitch.tv/demon_gekkouga" 
        },
        { 
            name: "YipYipMan_", 
            role: "⭐ STREAMERS MANAGER", 
            description: "Hello Hello !! Είμαι ο Yip , κύριο game μου είναι το League of Legends.", 
            logo: "logos/YipYipMan_.png", 
            link: "https://twitch.tv/yipyipman_" 
        }
    ]
};
