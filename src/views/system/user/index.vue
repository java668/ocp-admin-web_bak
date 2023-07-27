<template>
  <div class="container">
    <Breadcrumb :items="['menu.system', 'menu.system.user']" />
    <a-card>
      <a-form label-align="right" auto-label-width :model="form" class="form">
        <a-row :gutter="16" wrap>
          <a-col :xs="12" :md="12" :lg="8" :xl="6" :xxl="6">
            <a-form-item field="value1" label="姓名">
              <a-input v-model="form.value1" placeholder="请输入姓名" />
            </a-form-item>
          </a-col>
          <a-col :xs="12" :md="12" :lg="8" :xl="6" :xxl="6">
            <a-form-item field="value2" label="手机">
              <a-input v-model="form.value2" placeholder="请输入手机号码" />
            </a-form-item>
          </a-col>
          <a-col v-show="collapsed" :xs="12" :md="12" :lg="8" :xl="6" :xxl="6">
            <a-form-item field="value3" label="类型">
              <a-select placeholder="请选择">
                <a-option>北京</a-option>
                <a-option>上海</a-option>
                <a-option>广州</a-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col v-show="collapsed" :xs="12" :md="12" :lg="8" :xl="6" :xxl="6">
            <a-form-item field="value3" label="时间">
              <a-date-picker
                v-model="form.value3"
                show-time
                placeholder="请选择创建时间"
                style="width: 100%"
              />
            </a-form-item>
          </a-col>
          <a-col v-show="collapsed" :xs="12" :md="12" :lg="8" :xl="6" :xxl="6">
            <a-form-item field="value4" label="状态">
              <a-select placeholder="请选择">
                <a-option>开启</a-option>
                <a-option>关闭</a-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col v-show="collapsed" :xs="12" :md="12" :lg="8" :xl="6" :xxl="6">
            <a-form-item field="value5" label="地址">
              <a-input v-model="form.value5" placeholder="请输入查询地址" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-space>
              <a-button type="primary">
                <template #icon>
                  <icon-search />
                </template>
                <template #default>查询</template>
              </a-button>
              <a-button>
                <template #default>重置</template>
              </a-button>
              <a-button
                type="text"
                class="collapsed-btn"
                @click="collapsed = !collapsed"
              >
                <template #icon>
                  <icon-up v-if="collapsed" />
                  <icon-down v-else />
                </template>
                <template #default>{{ !collapsed ? '展开' : '收起' }}</template>
              </a-button>
            </a-space>
          </a-col>
        </a-row>
      </a-form>
      <a-divider style="margin-top: 0" />
      <a-table :columns="columns" :data="data" />
    </a-card>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue';

  const form = reactive({
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
  });
  const collapsed = ref(false);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ];
  const data = reactive([
    {
      key: '1',
      name: 'Jane Doe',
      salary: 23000,
      address: '32 Park Road, London',
      email: 'jane.doe@example.com',
    },
    {
      key: '2',
      name: 'Alisa Ross',
      salary: 25000,
      address: '35 Park Road, London',
      email: 'alisa.ross@example.com',
    },
    {
      key: '3',
      name: 'Kevin Sandra',
      salary: 22000,
      address: '31 Park Road, London',
      email: 'kevin.sandra@example.com',
    },
    {
      key: '4',
      name: 'Ed Hellen',
      salary: 17000,
      address: '42 Park Road, London',
      email: 'ed.hellen@example.com',
    },
    {
      key: '5',
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
      email: 'william.smith@example.com',
    },
  ]);
</script>

<style scoped>
  .container {
    padding: 0 20px 20px 20px;
  }
</style>
