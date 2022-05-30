<template>
  <Layout>
    <Sider breakpoint="md">
      <Menu :active-name="activeName" theme="dark" width="auto">
        <MenuItem
          :name="menu.key"
          :to="menu.path"
          v-for="menu in menus"
          :key="menu.key"
        >
          <span>{{ menu.title }}</span>
        </MenuItem>
      </Menu>
      <div slot="trigger"></div>
    </Sider>
    <Layout>
      <Header class="layout-header-bar"></Header>
      <Content
        :style="{ margin: '20px', background: '#fff', minHeight: '220px' }"
      >
        <router-view v-show="$route.name" />
        <section v-show="!$route.name" id="frame"></section>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeName: "Home",
      menus: [
        {
          key: "Home",
          title: "主页",
          path: "/",
        },
        {
          key: "VueMicroApp",
          title: "Vue 主页",
          path: "/vue",
        },
        {
          key: "VueMicroAppList",
          title: "Vue 列表页",
          path: "/vue/list",
        },
      ],
    };
  },
  mounted() {},
};
</script>

<style>
</style>
