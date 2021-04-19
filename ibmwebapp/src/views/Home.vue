<template>
 <v-container >
  <div class="d-none d-lg-block">
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      color="purple lighten-2"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="purple lighten-2">
          <v-icon
            dark
            size="42"
            class="mr-4"
          >
            mdi-magnify
          </v-icon>
          <h2 class="display-1 white--text font-weight-light">
            Title 1
          </h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="10"
            >
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
              <v-icon size="64">
                mdi-calendar-text
              </v-icon>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="amber lighten-1"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="amber lighten-1 justify-end">
          <h2 class="display-1 mr-4 white--text font-weight-light">
            Title 2
          </h2>
          <v-icon
            dark
            size="42"
          >
            mdi-home-outline
          </v-icon>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="8"
            >
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              Lorem ipsum dolor sit amet, no nam oblique veritus.
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="cyan lighten-1"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="cyan lighten-1">
          <v-icon
            class="mr-4"
            dark
            size="42"
          >
            mdi-email-outline
          </v-icon>
          <h2 class="display-1 white--text font-weight-light">
            Title 3
          </h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              v-for="n in 3"
              :key="n"
              cols="12"
              md="4"
            >
              Lorem ipsum dolor sit amet, no nam oblique veritus no nam oblique.
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="red lighten-1"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="red lighten-1 justify-end">
          <h2 class="display-1 mr-4 white--text font-weight-light">
            Title 4
          </h2>
          <v-icon
            dark
            size="42"
          >
            mdi-account-multiple-outline
          </v-icon>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              class="hidden-sm-and-down"
              md="2"
            >
              <v-icon size="64">
                mdi-server-network
              </v-icon>
            </v-col>
            <v-col
              cols="12"
              md="10"
            >
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus.
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="green lighten-1"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="green lighten-1">
          <v-icon
            class="mr-4"
            dark
            size="42"
          >
            mdi-phone-in-talk
          </v-icon>
          <h2 class="display-1 white--text font-weight-light">
            Title 5
          </h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>
  </v-timeline>
       <v-row>
     <v-col col="8" lg="8" md="12" >
      <v-stepper v-model="etapa_validacion">
          <v-stepper-header>
            <v-stepper-step
              :complete="etapa_validacion > 1"
              step="1"
            >
              Valida tu CURP
            </v-stepper-step>
          
            <v-divider></v-divider>

            <v-stepper-step
              :complete="etapa_validacion > 2"
              step="2"
            >
              Valida tu INE
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3">
              Valida tu Identidad
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="12"
              >
              <small>Disponible en la credencial INE o obtenible en el</small>
                <a small href="https://www.gob.mx/curp/"><small>
                 sitio web oficial 
                </small>
              </a>
                <v-text-field
                  v-model="CURP"
                  :rules="CURPRules"
                  :counter="18"
                  label="CURP"
                  required
                ></v-text-field>
              </v-col>

            </v-row>
          </v-container>
        </v-form>

              <v-btn
                color="primary"
                @click="etapa_validacion = 2"
              >
                Continue
              </v-btn>

              <v-btn text>
                Cancel
              </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card
                class="mb-12"
                color="grey lighten-1"
                height="200px"
              ></v-card>

              <v-btn
                color="primary"
                @click="etapa_validacion = 3"
              >
                Continue
              </v-btn>

              <v-btn text>
                Cancel
              </v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card
                class="mb-12"
                color="grey lighten-1"
                height="200px"
              ></v-card>

              <v-btn
                color="primary"
                @click="etapa_validacion = 1"
              >
                Continue
              </v-btn>

              <v-btn text>
                Cancel
              </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
     </v-col>
     <v-col col="4" lg="4" sm="12" class="d-none d-lg-block">
         <v-card

    color="info"
    dark
  >
    <v-card-title>
      <span class="title font-weight-light"></span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      "Recuerda que tu voto es libre y secreto. Por un gobierno representativo"
    </v-card-text>

    <v-card-actions>
      
    </v-card-actions>
  </v-card>
           <v-card

    color="info"
    dark
  >
    <v-card-title>
      <span class="title font-weight-light"></span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      "Recuerda que tu voto es libre y secreto. Por un gobierno representativo"
    </v-card-text>

    <v-card-actions>
      
    </v-card-actions>
  </v-card>
     </v-col>
   </v-row>
  </div>
  <v-spacer></v-spacer>
  <div class="d-lg-none" >
    <v-stepper
      v-model="etapa_validacion"
      vertical
    >
      <v-stepper-step
        :complete="etapa_validacion > 1"
        step="1"
      >
        Valida tu CURP
              <small>Disponible en la credencial INE o obtenible en el</small>
                <a small href="https://www.gob.mx/curp/"><small>
                 sitio web oficial 
                </small>
              </a>
      </v-stepper-step>

      <v-stepper-content step="1">
            <v-form v-model="valid">
        <v-container>
                 <v-text-field
                  v-model="CURP"
                  :rules="CURPRules"
                  :counter="18"
                  label="CURP"
                  required
                ></v-text-field>
        </v-container>
      </v-form>
        <v-btn
          color="primary"
          @click="etapa_validacion = 2"
        >
          Continue
        </v-btn>
        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-step
        :complete="etapa_validacion > 2"
        step="2"
      >
        Valida tu INE
      </v-stepper-step>

      <v-stepper-content step="2">

        <v-btn
          color="primary"
          @click="etapa_validacion = 3"
        >
          Continue
        </v-btn>
        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-step
        :complete="etapa_validacion > 3"
        step="3"
      >
        Valida tu Identidad 
      </v-stepper-step>

      <v-stepper-content step="3">
        <v-card
          color="grey lighten-1"
          class="mb-12"
          height="200px"
        ></v-card>
        <v-btn
          color="primary"
          @click="etapa_validacion = 1"
        >
          Continue
        </v-btn>
        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

    </v-stepper>
  </div>
  <v-spacer></v-spacer>
   <v-footer
    dark
    padless
    class="primary"
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>



      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
 </v-container>
 
</template>

<script>

export default {

  }

</script>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
  export default {
    data () {
      return {
        etapa_validacion: 1,
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
      }
    },
    validations: {
    CURP: {
      required,
      minLength: minLength(18)
    }
  },
    
  }
</script>
