import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
  path: '/monitor',
  name: 'monitor',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.monitor',
    requiresAuth: true,
    icon: 'icon-robot-add',
    order: 3,
  },
  children: [
    {
      path: 'systemLog', // The midline path complies with SEO specifications
      name: 'SystemLog',
      component: () => import('@/views/list/search-table/index.vue'),
      meta: {
        locale: 'menu.monitor.systemLog',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'sql',
      name: 'Sql',
      component: () => import('@/views/list/card/index.vue'),
      meta: {
        locale: 'menu.monitor.sql',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'operationLog',
      name: 'OperationLog',
      component: () => import('@/views/list/card/index.vue'),
      meta: {
        locale: 'menu.monitor.operationLog',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'auditLog',
      name: 'AuditLog',
      component: () => import('@/views/list/card/index.vue'),
      meta: {
        locale: 'menu.monitor.auditLog',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default LIST;
