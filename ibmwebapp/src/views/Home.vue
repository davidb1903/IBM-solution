<template>
 <v-container >
  <div class="d-none d-lg-block">
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      color="accent"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="accent">
          <v-icon
            dark
            size="42"
            class="mr-4"
          >
            mdi-magnify
          </v-icon>
          <h2 class="display-1 white--text font-weight-light">
Conoce las fechas del proceso electoral 2021          </h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="10"
            >
           A partir de septiembre de 2020 inicia el Proceso Electoral para 
           renovar la Cámara de Diputados y diversos cargos en los 32 estados
            del país. La Jornada electoral se realizará el 6 de junio de 2021.</v-col>
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
      color="primary2"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="primary2 justify-end">
          <h2 class="display-1 mr-4 white--text font-weight-light">
            Busca la casilla más cercana a tu localidad y ejerce tu voto
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
         El INE en coordinación con los Organismos Públicos Locales desarrollarán las
          actividades para la elección de Gubernaturas, Jefatura de Gobierno de la Ciudad 
          de México, Congresos Locales, Ayuntamientos, Juntas Municipales y Alcaldías. 
         </v-col>
            <v-col
              cols="12"
              md="4"
            >
              Consulta los detalles de cada proceso electoral local seleccionando la entidad 
          de tu interés.
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="info"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="info">
          <v-icon
            class="mr-4"
            dark
            size="42"
          >
            mdi-account-search
          </v-icon>
          <h2 class="display-1 white--text font-weight-light">
            Valida tu CURP 
          </h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              cols="8"
              md="10"
            >
            Valida que tu CURP se encuentre en el registro nacional de ciudadanos electorales

             </v-col>
                           <v-col
              class="hidden-sm-and-down"
              md="2"
            >
              <v-icon size="64">
                mdi-card-account-details-star
              </v-icon>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="primary2"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="primary2 justify-end">
          <h2 class="display-1 mr-4 white--text font-weight-light">
            Valida la vigencia de tu INE
          </h2>
          <v-icon
            dark
            size="42"
          >
            mdi-qrcode-scan
          </v-icon>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              class="hidden-sm-and-down"
              md="2"
            >
              <v-icon size="64">
                mdi-credit-card-scan-outline
              </v-icon>
            </v-col>
            <v-col
              cols="12"
              md="10"
            >
              Escanea tu INE para verificar su vigencia y permitir asegurar tu voto. En la parte trasera
              encontraras un codigo QR que debes colocar frente a la camara.
               </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="info"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="info">
          <v-icon
            class="mr-4"
            dark
            size="42"
          >
            mdi-camera-account
          </v-icon>
          <h2 class="display-1 white--text font-weight-light">
            Verifitca tu Identidad
          </h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col>
             Sonrie y permite que nuestros datos biometrícos validen tu identidad 
             con la información del sistema, rapido y seguro, con el objetivo de evitar
             fraudes electorales.
             </v-col>
              <v-col
              class="hidden-sm-and-down"
              md="2"
            >
              <v-icon size="64">
                mdi-fingerprint
              </v-icon>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>
  </v-timeline>
       <v-row>
     <v-col col="12" lg="12" md="12" >
      <v-stepper v-model="etapa_validacion">
          <v-stepper-header > 
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
                  :rules="[rules.required,rules.counter]"
                  counter
                  label="CURP"
                  maxlength="18"

                ></v-text-field>
              </v-col>

            </v-row>
          </v-container>
        </v-form>

              <v-btn
                color="primary"
                @click="
                validarCURP;
              etapa_validacion = 2" 
                :disabled="!valid"
              >
                Continue
              </v-btn>

              <v-btn text
                @click="cancelar">
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
            <v-form v-model="valid" ref="form" lazy-validation>
        <v-container>
                 <v-text-field
                  v-model="CURP"
                  :rules="[rules.required,rules.counter]"
                  counter
                  label="CURP"
                  maxlength="18"

                ></v-text-field>
        </v-container>
      </v-form>
        <v-btn
                color="primary"
                @click="
                validarCURP;
              etapa_validacion = 2"   
                :disabled="!valid"
        >
          Continue
        </v-btn>
        <v-btn text
        @click="cancelar">
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
      CURP:"",
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
      rules:{
        required: value => !!value || 'Obligatorio',
        counter: value => value.length >=17 || 'Inserte una CURP de 18 caracteres',
        curp_formato: value => {
          const pattern= /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/
            return pattern.test(Value) || "Formato de CURP invalido"
        },
      },
      }
      
    },
     methods: {
      validar_CURP () {
      this.$refs.form.validate()   
      },
      cancelar(){
        this.$refs.form.resetValidation() 
         this.$refs.form.reset() 
      }
    },
    }
</script>
