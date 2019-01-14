<template>
  <div class="nav">
    <Menu mode="horizontal" :theme="theme1" active-name="1">
      <Row type="flex" justify="space-around" class="row">
        <MenuItem name="1" to="/">
        <Icon type="ios-home-outline" size="20" />
        HOME
        </MenuItem>
        <MenuItem name="2" to="/contact">
        <Icon type="ios-contacts" size="20" />
        CONTACT
        </MenuItem>
        <MenuItem name="3" to="/show">
        <Icon type="ios-paper-outline" size="20" />
        BLOG
        </MenuItem>
      </Row>
    </Menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        theme1: 'dark'
      }
    }
  }

</script>

<style scoped>

</style>
