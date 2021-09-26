<template>
  <div
    :style="{ width: '100vw' }"
    :class="['d-flex', 'justify-center', 'align-center']"
  >
    <v-card class="ma-5 pa-5 d-flex flex-column" width="550px">
      <v-form>
        <h4>Enter the Genome and Job IDs</h4>
        <v-divider></v-divider>
        <v-text-field
          label="Genome ID"
          :rules="genomeRules"
          hide-details="auto"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-text-field
          label="Job ID"
          :rules="jobRules"
          hide-details="auto"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn
          class="mx-auto mt-3"
          color="primary"
          elevation="2"
          rounded
          x-large
          @click="hi"
          >Compare</v-btn
        >
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    genomeRules: [
      (value) => !!value || 'Required.',
      (value) => (value && value.length >= 3) || 'Min 3 characters',
    ],
    jobRules: [
      (value) => !!value || 'Required.',
      (value) => (value && value.length >= 8) || 'Min 8 characters',
    ],
    hi: () => console.log('hello world'),
  }),
};
</script>
