<template>
  <div>
    <h2>Compétences techniques</h2>
    <hr />
    <table>
      <template v-for="group in skills">
        <tr :key="group.id">
          <td class="standout">{{ group.category }}</td>
          <td></td>
        </tr>
        <tr v-for="skill in group.content" :key="skill.id">
          <td class="pad">
            {{ skill.title }}
            <span class="secondary" v-if="skill.frameworks"
              >({{ skill.frameworks.join(', ') }})</span
            >
          </td>
          <td>
            <fa v-for="i in Math.floor(skill.lvl)" icon="star" :key="i"></fa>
            <fa v-if="skill.lvl % 1" icon="star-half-alt"></fa>
          </td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Skills',
  computed: {
    ...mapGetters(['skills'])
  }
}
</script>

<style lang="scss" scoped>
.standout {
  padding-top: 1em;
}
</style>
