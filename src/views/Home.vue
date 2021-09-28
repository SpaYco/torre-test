<template>
  <div
    :style="{ width: '100vw' }"
    :class="['d-flex', 'justify-center', 'align-center', 'flex-column']"
  >
    <v-card class="ma-5 pa-5" width="550px">
      <v-form class="d-flex flex-column" v-model="isFormValid">
        <h4>Enter the Genome and Job IDs</h4>
        <v-divider></v-divider>
        <v-text-field
          label="Genome ID"
          :rules="genomeRules"
          v-model="genome"
          hide-details="auto"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-text-field
          label="Job ID"
          :rules="jobRules"
          v-model="job"
          hide-details="auto"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn
          class="mx-auto mt-3"
          color="primary"
          elevation="2"
          rounded
          x-large
          :disabled="!isFormValid"
          @click.prevent="addData()"
          >Compare</v-btn
        >
      </v-form>
    </v-card>
    <v-spacer></v-spacer>
    <v-expand-x-transition>
        <v-card
          v-show="expand"
          height="100"
          width="100"
          class="mx-auto secondary"
        ></v-card>
      </v-expand-x-transition>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    addData() {
      this.$store.dispatch('setProfile', this.genome);
      this.$store.dispatch('setJob', this.job);
      this.expand = !this.expand;
    },
  },
  computed: {
    getProfile() {
      return this.$store.getters.getProfile;
    },
  },
  data: () => ({
    genomeRules: [
      (value) => !!value || 'Required.',
      (value) => (value && value.length >= 3) || 'Min 3 characters',
    ],
    jobRules: [
      (value) => !!value || 'Required.',
      (value) => (value && value.length >= 8) || 'Min 8 characters',
    ],
    isFormValid: false,
    genome: '',
    job: '',
    expand: false,
  }),
};
</script>
