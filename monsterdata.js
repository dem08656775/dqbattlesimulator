function Monsterdata(){

  this.monsters=[

    {
      name:'キラーマジンガ',
      hp:600,
      mp:0,
      attack:310,
      defense:235,
      speed:147,
      actions:[
        { name: 'メタルぎり',
          probability: 1,
        },
        { name: '切りつけ',
          probability: 1,
        },
        { name: '引きしぼり',
          probability: 1,
        },
        { name: '通常攻撃',
          probability: 1,
        },
        { name: 'メタルぎり',
          probability: 1,
        },
        { name: 'ドラゴンぎり',
          probability: 1,
        },
      ],
      actionrule:'random',
      movetime:[2,2]

    },

    {
      name:'ムドー(3)',
      hp:900,
      attack:115,
      defense:105,
      speed:45,

      actions:[
        { name: 'こおりのいき',
          probability: 1,
        },
        { name: 'こおりのいき',
          probability: 1,
        },
        { name: 'いなずま',
          probability: 1,
        },
        { name: 'いなずま',
          probability: 1,
        },
        { name: '怪しい瞳',
          probability: 1,
        },
        { name: 'まぶしい光',
          probability: 1,
        },

      ],

      //制限行動未実装のため、キラーマジンガシミュレート用に通常攻撃を排除

      actionrule:"rotation_3step",
      rotationpoint:0,
      judge:2,
      movetime:[1,2]


    },
    {
      name: 'ネンガル',
      hp: 4680,
      mp: 0,
      attack:267,
      defense: 32,
      speed:99,
      actions: [
        { name: '剣の舞',
          probability: 68,
        },
        { name: 'ボディアタック',
          probability: 58,
        },
        { name: '剣の舞',
          probability: 48,
        },
        { name: '通常攻撃',
          probability: 38,
        },
        { name: '痛恨の一撃(0.9倍)',
          probability: 27,
        },
        { name: '通常攻撃',
          probability: 17,
        },
      ],
      actionrule:'random',
      judge:2,
      movetime:[1,1]
    },

    {
      name:'レティス(未完成！)',
      hp:1785,
      mp:65535,
      attack:386,
      defence:308,
      speed:101,
      //wip

    },

    {
      name: '暗黒の魔人',
      hp: 3800,
      mp: 0,
      attack: 513,
      defense: 120,
      speed:100,
      actions: [
        { name: '通常攻撃',
          probability: 43,
        },
        { name: '通常攻撃',
          probability: 42,
        },
        { name: '通常攻撃',
          probability: 43,
        },
        { name: '通常攻撃',
          probability: 43,
        },
        { name: 'ミス',
          probability: 42,
        },
        { name: '通常攻撃',
          probability: 43,
        },
      ],
      actionrule:'random',
      judge:0,
      movetime:[1,1]
    },

  ]

}
