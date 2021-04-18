<template>
 <v-container >
  <div class="d-none d-lg-block">
    <v-carousel>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </div>
                <v-divider
            ></v-divider>
   <v-row>
     <v-col col="8" lg="8" md="12" >
      <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step
              :complete="e1 > 1"
              step="1"
            >
              Valida tu CURP
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
              :complete="e1 > 2"
              step="2"
            >
              Valida tu INE
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3">
              Valida tu identidad
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card
                class="mb-12"
                color="grey lighten-1"
                height="200px"
              ></v-card>

              <v-btn
                color="primary"
                @click="e1 = 2"
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
                @click="e1 = 3"
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
                @click="e1 = 1"
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
    class="mx-auto"
    color="info"
    dark
    max-width="400"
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
        e1: 1,
      }
    },
  }
</script>