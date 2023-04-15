

Vue.createApp({
  data() {
    return {

      selected1:"選択してください",
      selected2:"選択してください",

      monsterteam:[
        [],
        []
      ],
      monsterdata:new Monsterdata(),
      actiondata:new Actiondata(),

      turn:0,

      messages:[],
      win:[0,0]

    }
  },
  computed: {

  },
  methods: {

    addmonster(team,monstername){

      this.monsterteam[team].push(Object.assign(
        {
            statement:[]
        },this.monsterdata.monsters.find(e => (e.name == monstername))
      ))

    },

    resetmonsterteam(){

      this.monsterteam = [
        [],
        []
      ]

    },

    manybattle(battletime){

      for(let i=0;i<battletime;i++){
        this.messages = []
        this.resetmonsterteam()
        this.addmonster(0,this.selected1)
        this.addmonster(1,this.selected2)
        this.battle()
      }


    },

    battle(){

      if(this.monsterteam[0].length == 0){
        this.addmonster(0,this.selected1)
      }
      if(this.monsterteam[1].length == 0){
        this.addmonster(1,this.selected2)
      }

      this.turn = 0

      turnroop:while(true){

        this.turn = this.turn + 1

        this.messages.push(this.turn + "ターン目")

        let monsteractpermtation = []

        for(i in this.monsterteam){
          team = this.monsterteam[i]
          for(j in team){
            monster = team[j]
            monsteractpermtation.push(
              {
                teamnumber:parseInt(i),
                index:parseInt(j),
                speed:monster.speed*(Math.random()*(1-0.5)+0.5)
              }
            )

          }
        }

        monsteractpermtation.sort(function(a,b){
          console.log("sorting...")
          return b.speed - a.speed
        })




        for(k of monsteractpermtation){

          let currentmonster = this.monsterteam[k.teamnumber][k.index]
          let acttime = Math.floor(Math.random()*(currentmonster.movetime[1]+1-currentmonster.movetime[0])+currentmonster.movetime[0])
          for(let move=0;move<acttime;move++){

            if(currentmonster.statement.some(state => state.name == 'sleep')){
              this.messages.push(currentmonster.name+'は　ねむっている！')
              let sleepingstatus = currentmonster.statement.find(state => state.name == 'sleep')
              sleepingstatus.turn--
              if(sleepingstatus.turn <= 0){
                console.log("起きる")
                currentmonster.statement = currentmonster.statement.filter(
                  state => !(state.name == 'sleep')
                )
                this.messages.push(currentmonster.name+'は　めをさました！')
              }
              continue;
            }



            let action = this.choosemonsteraction(currentmonster)


            this.messages.push(currentmonster.name + 'の' + action.name+ '！')



            for(a of action.effects){
              if(a.type == 'attack'){
                let targetmonster = this.monsterteam[1-k.teamnumber][k.index]
                let damage = a.damage(currentmonster,targetmonster)
                targetmonster.hp -= damage
                this.messages.push(currentmonster.name +'は' + targetmonster.name + 'に' + damage +'のダメージ！')
              }
              if(a.type == 'affect'){
                let targetmonster = this.monsterteam[1-k.teamnumber][k.index]
                let remainturn = Math.floor(Math.random()*(a.turn[1]+1-a.turn[0])+a.turn[0])
                targetmonster.statement = targetmonster.statement.filter(
                  state => !(state.name == a.status)
                )
                targetmonster.statement.push({
                  name:a.status,
                  turn:remainturn
                })
              }
            }
          }

          if(this.monsterteam[1][0].hp<=0){
            this.messages.push(this.monsterteam[0][0].name + "win!")
            this.win[0]++
            break turnroop;

          }
          if(this.monsterteam[0][0].hp<=0){
            this.messages.push(this.monsterteam[1][0].name + "win!")
            this.win[1]++
            break turnroop;

          }
        }






      }
    },

    choosemonsteraction(monster){

      if(monster.actionrule == 'random'){
        let probsum = 0
        for(a of monster.actions){
          probsum += a.probability
        }
        let randomNumber = Math.random() * probsum;
        let cumulativeProbability = 0;
        for (a of monster.actions) {
          cumulativeProbability += a.probability
          if (cumulativeProbability >= randomNumber) {
            return this.actiondata.actions.find(e => (e.name == a.name))
          }
        }
      }

      if(monster.actionrule == 'rotation_3step'){

        let randomNumber = Math.floor(Math.random()*2)
        let actionindex = monster.rotationpoint*2+randomNumber
        monster.rotationpoint++;
        if(monster.rotationpoint==3)monster.rotationpoint=0
        return this.actiondata.actions.find(e => (e.name == monster.actions[actionindex].name))

      }





    }









  },

  mounted() {

  },
}).mount('#app');
