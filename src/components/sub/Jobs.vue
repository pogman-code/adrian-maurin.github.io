<template>
  <div>
    <h2>Expérience professionelle</h2>
    <hr />
    <job v-for="job in jobs" v-bind="job" :key="job.id"></job>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Job from './Job'

export default {
  name: 'Jobs',
  components: { job: Job },
  computed: {
    ...mapGetters(['jobs'])
  }
}
</script>
