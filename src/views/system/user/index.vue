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
              <a-button type="primary" status="success">
                <template #icon>
                  <icon-search />
                </template>
                <template #default>查询</template>
              </a-button>
              <a-button type="primary" status="warning">
                <template #icon>
                  <icon-refresh />
                </template>
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
      <a-divider style="margin-top: 0; margin-bottom: 10px" />
      <a-row class="toolbar">
        <a-col :span="12">
          <a-space>
            <a-button type="primary">
              <template #icon>
                <icon-plus />
              </template>
              {{ $t('searchTable.operation.create') }}
            </a-button>
            <a-button type="primary" status="success">
              <template #icon>
                <icon-edit />
              </template>
              修改
            </a-button>
            <a-button type="primary" status="danger">
              <template #icon>
                <icon-delete />
              </template>
              删除
            </a-button>
            <a-upload action="/">
              <template #upload-button>
                <a-button>
                  {{ $t('searchTable.operation.import') }}
                </a-button>
              </template>
            </a-upload>
            <a-upload action="/">
              <template #upload-button>
                <a-button>
                  {{ $t('searchTable.operation.download') }}
                </a-button>
              </template>
            </a-upload>
          </a-space>
        </a-col>
        <a-col
          :span="12"
          style="display: flex; align-items: center; justify-content: end"
        >
          <a-button-group>
            <a-button>
              <template #icon><icon-refresh size="18" /></template>
            </a-button>
            <a-button>
              <template #icon><icon-line-height size="18" /></template>
            </a-button>
            <a-button>
              <template #icon><icon-settings size="18" /></template>
            </a-button>
          </a-button-group>
          <!--          <a-tooltip :content="$t('searchTable.actions.refresh')">-->
          <!--            <div class="action-icon" @click="search"-->
          <!--              ><icon-refresh size="18"-->
          <!--            /></div>-->
          <!--          </a-tooltip>-->
          <!--          <a-dropdown @select="handleSelectDensity">-->
          <!--            <a-tooltip :content="$t('searchTable.actions.density')">-->
          <!--              <div class="action-icon"><icon-line-height size="18" /></div>-->
          <!--            </a-tooltip>-->
          <!--            <template #content>-->
          <!--              &lt;!&ndash;              <a-doption&ndash;&gt;-->
          <!--              &lt;!&ndash;                v-for="item in densityList"&ndash;&gt;-->
          <!--              &lt;!&ndash;                :key="item.value"&ndash;&gt;-->
          <!--              &lt;!&ndash;                :value="item.value"&ndash;&gt;-->
          <!--              &lt;!&ndash;                :class="{ active: item.value === size }"&ndash;&gt;-->
          <!--              &lt;!&ndash;              >&ndash;&gt;-->
          <!--              &lt;!&ndash;                <span>{{ item.name }}</span>&ndash;&gt;-->
          <!--              &lt;!&ndash;              </a-doption>&ndash;&gt;-->
          <!--            </template>-->
          <!--          </a-dropdown>-->
        </a-col>
      </a-row>
      <a-table
        :columns="columns"
        :data="data"
        :bordered="false"
        :scroll="{ x: 2000, y: '100%' }"
      />
    </a-card>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue';
  import { TableColumnData } from '@arco-design/web-vue/es/table/interface';

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
      title: '用户编号',
      dataIndex: 'name',
    },
    {
      title: '账号',
      dataIndex: 'salary',
    },
    {
      title: '用户名',
      dataIndex: 'address',
    },
    {
      title: '手机号',
      dataIndex: 'email',
    },
    {
      title: '性别',
      dataIndex: 'email1',
    },
    {
      title: '创建时间',
      dataIndex: 'email2',
    },
    {
      title: 'Email3',
      dataIndex: 'email3',
      ellipsis: true,
      tooltip: true,
    },
    {
      title: 'Email4',
      dataIndex: 'email4',
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
      email3:
        'william.smith@example.comwilliam.smith@example.comwilliam.smith@example.comwilliam.smith@example.comwilliam.smith@example.com',
    },
  ]);

  const search = () => {};
  const handleSelectDensity = () => {};
</script>

<style scoped>
  .container {
    padding: 0 20px 20px 20px;
  }

  .toolbar {
    margin-bottom: 10px;
    align-items: center;
  }
</style>
