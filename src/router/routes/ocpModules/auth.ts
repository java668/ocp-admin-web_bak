import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
  path: '/auth',
  name: 'auth',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.auth',
    requiresAuth: true,
    icon: 'icon-safe',
    order: 2,
  },
  children: [
    {
      path: 'app', // The midline path complies with SEO specifications
      name: 'App',
      component: () => import('@/views/list/search-table/index.vue'),
      meta: {
        locale: 'menu.auth.app',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'token',
      name: 'Token',
      component: () => import('@/views/list/card/index.vue'),
      meta: {
        locale: 'menu.auth.token',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'service',
      name: 'Service',
      component: () => import('@/views/list/card/index.vue'),
      meta: {
        locale: 'menu.auth.service',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default LIST;
