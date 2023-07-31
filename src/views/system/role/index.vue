<template>
  <div class="container">
    <Breadcrumb :items="['menu.system', 'menu.system.role']" />
    <a-card>
      <a-form label-align="right" auto-label-width :model="form" class="form">
        <a-row :gutter="16" wrap>
          <a-col :xs="12" :md="12" :lg="8" :xl="6" :xxl="6">
            <a-form-item field="value1" label="所属应用">
              <a-input v-model="form.value1" placeholder="请输入所属应用" />
            </a-form-item>
          </a-col>
          <a-col :xs="12" :md="12" :lg="8" :xl="6" :xxl="6">
            <a-form-item field="value2" label="角色名称">
              <a-input v-model="form.value2" placeholder="请输入角色名称" />
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
            </a-space>
          </a-col>
        </a-row>
      </a-form>
      <a-grid :cols="24" :col-gap="16" :row-gap="16">
        <a-grid-item :span="16">
          <a-card title="角色列表">
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
            <a-table :columns="columns" :data="data" :bordered="false" />
          </a-card>
        </a-grid-item>
        <a-grid-item :span="8">
          <a-card title="资源分配">
            <template #extra>
              <a-link>保存</a-link>
            </template>
            <a-tree block-node :data="treeData" />
          </a-card>
        </a-grid-item>
      </a-grid>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue';

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

  const treeData = [
    {
      title: 'Trunk 0-0',
      key: '0-0',
      children: [
        {
          title: 'Branch 0-0-0',
          key: '0-0-0',
          children: [
            {
              title: 'Leaf',
              key: '0-0-0-0',
            },
            {
              title: 'Leaf',
              key: '0-0-0-1',
            },
          ],
        },
        {
          title: 'Branch 0-0-1',
          key: '0-0-1',
          children: [
            {
              title: 'Leaf',
              key: '0-0-1-0',
            },
          ],
        },
      ],
    },
  ];

  const form = reactive({
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
  });
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px 20px;
  }

  .toolbar {
    margin-bottom: 10px;
    align-items: center;
  }
</style>
