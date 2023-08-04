import axios from 'axios';
import type { RouteRecordNormalized } from 'vue-router';
import { UserState } from '@/store/modules/user/types';

export interface LoginData {
  username: string;
  password: string;
  validCode: string;
  deviceId: string;
  grant_type: string;
}

export interface LoginRes {
  token: string;
}
export function login(data: LoginData) {
  const CLIENT_ID = import.meta.env.CLIENT_ID;
  const CLIENT_SECRET = import.meta.env.CLIENT_SECRET;
  console.log("CLIENT_ID", CLIENT_ID)
  console.log("CLIENT_SECRET", CLIENT_SECRET)
  return axios.post<LoginRes>('/api-auth/oauth/token', data);
}

export function logout() {
  return axios.post<LoginRes>('/api/user/logout');
}

export function getUserInfo() {
  return axios.post<UserState>('/api/user/info');
}

export function getMenuList() {
  return axios.post<RouteRecordNormalized[]>('/api/user/menu');
}
