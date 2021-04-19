<template>
 <v-container >
  <div class="d-none d-lg-block">
<v-carousel v-model="model">
    <v-carousel-item
      v-for="(color, i) in colors"
      :key="color"
    >
      <v-sheet
        :color="color"
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">
            Slide {{ i + 1 }}
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
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
    
  }
</script>
