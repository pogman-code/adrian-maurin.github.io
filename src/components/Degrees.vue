<template>
  <div>
    <h2>Formation</h2>
    <hr />
    <table>
      <tr v-for="degree in degrees" :key="degree.id">
        <td>
          {{ degree.title }}
          <span class="secondary">- {{ degree.place }}</span>
        </td>
        <td>
          <small>{{ degree.date }}</small>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Degrees',
  computed: {
    ...mapGetters(['degrees'])
  }
}
</script>
