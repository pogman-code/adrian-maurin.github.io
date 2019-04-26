<template>
  <div>
    <h2>Loisirs</h2>
    <hr />
    <p class="pad">
      {{ hobbies.join(', ') }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Hobbies',
  computed: {
    ...mapGetters(['hobbies'])
  }
}
</script>
