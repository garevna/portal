<template>
  <v-container fluid class="home-page-content">
      <v-btn
        v-if="!drawer"
        outlined
        color="#900"
        @click.stop="drawer = !drawer"
        style="position: fixed; z-index: 5; top: 24px; right: 88px;"
      >
        <v-icon>mdi-calculator</v-icon>
        Calculator
      </v-btn>
    <PortalCalculator :drawer.sync="drawer" :role="role" />

    <SendSMS v-if="role.indexOf('admin') !== -1" />
  </v-container>
</template>

<script>

import 'dgtek-portal-calculator'
import { roleHandler } from '@/helpers'

import SendSMS from '@/components/popups/SendSMS.vue'

export default {
  name: 'Calculator',

  components: {
    SendSMS
  },

  data: () => ({
    drawer: false,
    role: roleHandler().toLowerCase()
  }),

  computed: {
    turnOn: {
      get () {
        return this.drawer
      },
      set (val) {
        this.$emit('update:drawer', val)
      }
    }
  }
}
</script>

<style>
/* .home-page-content {
  height: 100vh;
  background: transparent;
  background-image: url(../assets/images/melbourne-2-1.svg);
  background-position: center;
  background-size:cover;
}

.v-list-item__title {
  font-size: 0.8rem !important;
}

.theme--light.v-list-item .v-list-item__mask {
  color: #83332C !important;
  background: transparent !important;
}

.v-list-item .v-list-item__title, .v-list-item .v-list-item__subtitle {
  line-height: 1 !important;
}

.theme--light.v-sheet {
  background: #fbfbfb !important;
}

.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input,
.v-text-field input, .v-label, p {
  font-size: 14px !important;
}

p {
  margin-bottom: 0!important;
}

.v-text-field input {
  font-weight: bold;
}

.theme--light.v-expansion-panels .v-expansion-panel {
  background: transparent !important;
  background-color: transparent !important;
} */

/* .v-icon.v-icon {
  font-size: 16px !important;
} */

/* *:not(input) {
  outline: none!important;
  user-select: none!important;
} */

/* .col-xl, .col-xl-auto, .col-xl-12, .col-xl-11, .col-xl-10, .col-xl-9, .col-xl-8, .col-xl-7, .col-xl-6,
.col-xl-5, .col-xl-4, .col-xl-3, .col-xl-2, .col-xl-1, .col-lg, .col-lg-auto, .col-lg-12, .col-lg-11,
.col-lg-10, .col-lg-9, .col-lg-8, .col-lg-7, .col-lg-6, .col-lg-5, .col-lg-4, .col-lg-3, .col-lg-2,
.col-lg-1, .col-md, .col-md-auto, .col-md-12, .col-md-11, .col-md-10, .col-md-9, .col-md-8, .col-md-7,
.col-md-6, .col-md-5, .col-md-4, .col-md-3, .col-md-2, .col-md-1, .col-sm, .col-sm-auto, .col-sm-12,
.col-sm-11, .col-sm-10, .col-sm-9, .col-sm-8, .col-sm-7, .col-sm-6, .col-sm-5, .col-sm-4, .col-sm-3,
.col-sm-2, .col-sm-1, .col, .col-auto, .col-12, .col-11, .col-10, .col-9, .col-8, .col-7, .col-6,
.col-5, .col-4, .col-3, .col-2, .col-1 {
  padding: 4px 12px !important;
} */
</style>
