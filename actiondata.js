function Actiondata(){

  this.actions=[
    {
      name: '通常攻撃',
      effects:[
        {
          type:'attack',
          damage:(attackmonster,defensemonster)=>Math.max(1,Math.round((attackmonster.attack/2-defensemonster.defense/4) * (Math.random() * (17 - 15) + 15) / 16))
        },
      ]
    },
    {
      name: 'メタルぎり',
      effects:[
        {
          type:'attack',
          damage:(attackmonster,defensemonster)=>Math.max(1,Math.round((attackmonster.attack/2-defensemonster.defense/4) * (Math.random() * (17 - 15) + 15) / 16))
        },
      ]
    },
    {
      name: 'ドラゴンぎり',
      effects:[
        {
          type:'attack',
          damage:(attackmonster,defensemonster)=>Math.max(1,Math.round((attackmonster.attack/2-defensemonster.defense/4) * (Math.random() * (17 - 15) + 15) / 16))
        },
      ]
    },


    {
      name: 'ボディアタック',
      effects:[
        {
          type:'attack',
          damage:(attackmonster,defensemonster)=>Math.max(1,Math.round((attackmonster.attack/2-defensemonster.defense/4) * (Math.random() * (17 - 15) + 15) / 16 * 1.25))
        },
      ]
    },
    {
      name: '切りつけ',
      effects:[
        {
          type:'attack',
          damage:(attackmonster,defensemonster)=>Math.max(1,Math.round((attackmonster.attack/2-defensemonster.defense/4) * (Math.random() * (17 - 15) + 15) / 16 * 1.25))
        },
      ]
    },
    {
      name: '引きしぼり',
      effects:[
        {
          type:'attack',
          damage:(attackmonster,defensemonster)=>Math.max(1,Math.round((attackmonster.attack/2-defensemonster.defense/4) * (Math.random() * (17 - 15) + 15) / 16 * 1.25))
        },
      ]
    },
    {
      name: '剣の舞',
      effects:[
        {
          type:'attack',
          damage:(attackmonster,defensemonster)=>Math.max(1,Math.round((attackmonster.attack/2-defensemonster.defense/4) * (Math.random() * (17 - 15) + 15) / 16 * (Math.random() * (0.8 - 0.6) + 0.6)))
        },
        {
          type:'attack',
          damage:(attackmonster,defensemonster)=>Math.max(1,Math.round((attackmonster.attack/2-defensemonster.defense/4) * (Math.random() * (17 - 15) + 15) / 16 * (Math.random() * (0.8 - 0.6) + 0.6)))
        },
        {
          type:'attack',
          damage:(attackmonster,defensemonster)=>Math.max(1,Math.round((attackmonster.attack/2-defensemonster.defense/4) * (Math.random() * (17 - 15) + 15) / 16 * (Math.random() * (0.8 - 0.6) + 0.6)))
        },
        {
          type:'attack',
          damage:(attackmonster,defensemonster)=>Math.max(1,Math.round((attackmonster.attack/2-defensemonster.defense/4) * (Math.random() * (17 - 15) + 15) / 16 * (Math.random() * (0.8 - 0.6) + 0.6)))
        },
      ]
    },
    {
      name: '痛恨の一撃(0.9倍)',
      effects:[
        {
          type:'attack',
          damage:(attackmonster,defensemonster)=>Math.max(1,Math.round(attackmonster.attack * (Math.random() * (0.95 - 0.85) + 0.85)))
        },
      ]
    },
    {
      name: '痛恨の一撃',
      effects:[
        {
          type:'attack',
          damage:(attackmonster,defensemonster)=>Math.max(1,Math.round(attackmonster.attack))
        },
      ]
    },
    {
      name: 'いなずま',
      effects:[
        {
          type:'attack',
          elememt:'io',
          damage:(attackmonster,defensemonster)=>Math.round((Math.random()*(60-50)+50)*0.7)
        },
      ]
    },
    {
      name: 'こおりのいき',
      effects:[
        {
          type:'attack',
          element:'blizzard',
          damage:(attackmonster,defensemonster)=>Math.round(Math.random()*(50-40)+40)
        },
      ]
    },
    {
      name: 'まぶしい光',
      effects:[

      ]
    },
    {
      name: '怪しい瞳',
      effects:[
        {
          type:'affect',
          status:'sleep',
          turn:[1,4]
        }

      ]
    },
    {
      name: 'ミス',
      effects:[
        {
          type:'attack',
          damage:(attackmonster,defensemonster)=>0
        },
      ]
    },
  ]

}
