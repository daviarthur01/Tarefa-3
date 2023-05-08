const QuantosPorcento = {
    data() {
        return {
            Num1: "",
            Num2: "",
            cem: 100,
            x: 0,
            resultado: 0,
            total: 0
        }
    },

    methods: {
        calcular: function () {

            if (this.Num1 == "" || this.Num2 == "") {
                alert("Preencha os campos")
            }
            else if (this.Num1 && this.Num2) {
                alert("Preencha os campos")
            } else {
                this.resultado = this.cem * this.Num1
                this.x = this.resultado / this.Num2
                alert(this.Num1 + ' é ' + this.x + '% de ' + this.Num2)

                this.Num1 = ""
                this.Num2 = ""
            }

        }
    },
}

Vue.createApp(QuantosPorcento).mount('#App')