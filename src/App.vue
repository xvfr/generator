<template>
  <div id="app">

	<div class="block">
	  <h3>constructor:</h3>

	  <form class="constructor">

		<label for="damage">
		  Урон
		</label>
		<input id="damage" type="number" v-model="constructor.damage" />

		<br />

		<label for="type">
		  Тип
		</label>
		<select id="type" v-model="constructor.type">
		  <option value="">Не выбрано</option>
		  <option>Меч</option>
		  <option>Кинжал</option>
		  <option>Топор</option>
		  <option>Копье</option>
		</select>

		<br />

		<label for="speed">
		  Скорость атаки
		</label>
		<select id="speed" v-model="constructor.speed">
		  <option value="">Не выбрано</option>
		  <option>Быстрая</option>
		  <option>Средняя</option>
		  <option>Медленная</option>
		</select>

		<br />

		<label for="addDamage">
		  Доп. Урон
		</label>
		<input id="addDamage" type="number" v-model="constructor.addDamage" />

		<br />

		<label for="addArmour">
		  Доп. Броня
		</label>
		<input id="addArmour" type="number" v-model="constructor.addArmour" />

		<br />

		<label for="addHealth">
		  Доп. Здоровье
		</label>
		<input id="addHealth" type="number" v-model="constructor.addHealth" />

		<br />

		<label for="critalDamage">
		  Критический урон
		</label>
		<input id="critalDamage" type="number" v-model="constructor.critalDamage" />

		<br />

		<label for="critalChanse">
		  Критический шанс
		</label>
		<input id="critalChanse" type="number" v-model="constructor.critalChanse" />

		<br />

		<label for="evasion">
		  Уклонение
		</label>
		<input id="evasion" type="number" v-model="constructor.evasion" />

		<br />

		<label for="description">
		  Описание
		</label>
		<textarea id="description" v-model="constructor.description" cols="30" rows="5" />

		<br />

		<label for="runes">
		  Руны
		</label>
		<select id="runes" v-model="constructor.runes">
		  <option value="">Не выбрано</option>
		  <option value="1">Одна</option>
		  <option value="2">Две</option>
		  <option value="3">Три</option>
		</select>

		<br />

		<label for="rare">
		  Редкость
		</label>
		<select id="rare" v-model="constructor.rare">
		  <option value="">Не выбрано</option>
		  <option>Обычная</option>
		  <option>Необычная</option>
		  <option>Редкая</option>
		  <option>Эпическая</option>
		  <option>Легендарная</option>
		</select>

	  </form>

	</div>
	<br />
	<div class="block">
	  <h3>output:</h3>

	  <br />

	  <div class="out-line">

	  <div class="out-block">
		<img src="https://img.icons8.com/material-outlined/24/000000/copy.png" class="copy"
			 @click="copyToClipboard( output1 )" />
		<pre class="output">{{ output1 }}</pre>
	  </div>

	  <div class="out-block">
		<img src="https://img.icons8.com/material-outlined/24/000000/copy.png" class="copy"
			 @click="copyToClipboard( output2 )" />
		<pre class="output">{{ output2 }}</pre>
	  </div>

	  <div class="out-block">
		<img src="https://img.icons8.com/material-outlined/24/000000/copy.png" class="copy"
			 @click="copyToClipboard( output3 )" />
		<pre class="output">{{ output3 }}</pre>
	  </div>

	  </div>

	</div>

  </div>
</template>

<script>

export default {
    name: 'App',

    data: () => ({

        constructor: {
            damage: 0,
            type: '',
            speed: '',

            addDamage: 0,
            addArmour: 0,
            addHealth: 0,
            critalDamage: 0,
            critalChanse: 0,
            evasion: 0,
            description: '',

            runes: '',

            rare: '',
        }

    }),

    computed: {

        output1: (vm) => {

            let out = []

            if (vm.constructor.damage) {
                out.push(`/lore add &7Урон: &6${vm.constructor.damage}`)
                out.push(`/lemonitemedit:addattr attack_damage ${vm.constructor.damage}`)
                out.push('/lore add &f')
            }

            if (vm.constructor.type) {
                out.push(`/lore add &7Тип: &8${vm.constructor.type}`)
            }

            if (vm.constructor.speed) {
                out.push(`/lore add &7Скорость атаки: &8${vm.constructor.speed}`)

                switch (vm.constructor.speed) {
                    case 'Быстрая':
                        out.push('/lemonitemedit:addattr attack_speed -1')
                        break

                    case 'Средняя':
                        out.push('/lemonitemedit:addattr attack_speed -2')
                        break

                    case 'Медленная':
                        out.push('/lemonitemedit:addattr attack_speed -3')
                        break
                }

                out.push('/lore add &f')
            }

            if (vm.constructor.addDamage) {
                out.push(`/lore add &c+${vm.constructor.addDamage} Урон`)
            }

            if (vm.constructor.addArmour) {
                out.push(`/lore add &f+${vm.constructor.addArmour} Защита`)
            }

            return out.join(';\n')
        },

        output2: (vm) => {

            let out = []

            if (vm.constructor.addHealth) {
                out.push(`/lore add &2+${vm.constructor.addHealth} Здоровье`)
            }

            if (vm.constructor.critalDamage) {
                out.push(`/lore add &4+${vm.constructor.critalDamage} Крит. Урон`)
            }

            if (vm.constructor.critalChanse) {
                out.push(`/lore add &6+${vm.constructor.critalChanse} Крит. Шанс`)
            }

            if (vm.constructor.evasion) {
                out.push(`/lore add &9+${vm.constructor.evasion} Уклонение`)
            }

            if (vm.constructor.addDamage || vm.constructor.addArmour || vm.constructor.addHealth || vm.constructor.critalDamage || vm.constructor.critalChanse || vm.constructor.evasion)
                out.push('/lore add &f')

            return out.join(';\n')

        },

        output3: (vm) => {

            let out = []

            if (vm.constructor.description) {
                out.push(`/lore add ${vm.constructor.description}`)
                out.push('/lore add &f')
            }

            if (vm.constructor.runes) {
                for (let i = 0; i < vm.constructor.runes; i++) {
                    out.push('/lar gems addslot')
                }
                out.push('/lore add &f')
            }

            if (vm.constructor.rare) {
                switch (vm.constructor.rare) {
                    case 'Обычная':
                        out.push('/lore add &fОбычный предмет')
                        break

                    case 'Необычная':
                        out.push('/lore add &aНеобычный предмет')
                        break

                    case 'Редкая':
                        out.push('/lore add &bРедкий предмет')
                        break

                    case 'Эпическая':
                        out.push('/lore add &5Эпический предмет')
                        break

                    case 'Легендарная':
                        out.push('/lore add &6Легендарный предмет')
                        break
                }
            }

            out.push('/lemonitemedit:addflag hide_attributes')

			return out.join(';\n')

        }
    },

    methods: {
        copyToClipboard(text) {
            navigator.clipboard.writeText(text)
        }
    }

}

</script>

<style>

* {
    margin: 0;
    padding: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.block {
    padding: 10px;
    background: #ecebe8;
    border-radius: 7px;
    border: 1px solid #ececae;
}

.output {
    max-height: 250px;
    overflow-y: auto;

    text-align: left;
}

.constructor {
    padding: 10px;

    display: flex;
    flex-direction: column;
}

.out-line {
	display: flex;
	flex-direction: row;
	align-content: space-around;
}

.out-line .out-block:not(:nth-last-child(1)) {
	margin-right: 20px;
}

.out-block {
    position: relative;
    background: white;

	min-height: 35px;

	padding: 20px;
}

.copy {
    position: absolute;
    cursor: pointer;
    right: 5px;
    top: 5px;
    width: 15px;
}

</style>
