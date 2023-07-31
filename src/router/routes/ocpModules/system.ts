import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
  path: '/list',
  name: 'list',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.system',
    requiresAuth: true,
    icon: 'icon-desktop',
    order: 1,
  },
  children: [
    {
      path: 'user', // The midline path complies with SEO specifications
      name: 'User',
      component: () => import('@/views/system/user/index.vue'),
      meta: {
        locale: 'menu.system.user',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'role',
      name: 'Role',
      component: () => import('@/views/system/role/index.vue'),
      meta: {
        locale: 'menu.system.role',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'menu',
      name: 'Menu',
      component: () => import('@/views/list/card/index.vue'),
      meta: {
        locale: 'menu.system.menu',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default LIST;
