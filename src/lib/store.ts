'use client';
import type { Registration } from './data';
const KEY='campusevents-registrations-v1';
const USER_KEY='campusevents-user-v1';
export type DemoUser = {name:string;email:string;role:'student'|'admin'};
export function getRegistrations():Registration[]{if(typeof window==='undefined')return [];try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch{return []}}
export function addRegistration(reg:Registration){const all=getRegistrations(); if(!all.some(x=>x.eventId===reg.eventId && x.email.toLowerCase()===reg.email.toLowerCase())) {localStorage.setItem(KEY,JSON.stringify([...all,reg])); window.dispatchEvent(new Event('registrations-updated')); return true} return false}
export function removeRegistration(id:string){localStorage.setItem(KEY,JSON.stringify(getRegistrations().filter(x=>x.id!==id)));window.dispatchEvent(new Event('registrations-updated'))}
export function getUser():DemoUser|null{if(typeof window==='undefined')return null;try{return JSON.parse(localStorage.getItem(USER_KEY)||'null')}catch{return null}}
export function setUser(user:DemoUser|null){if(user)localStorage.setItem(USER_KEY,JSON.stringify(user));else localStorage.removeItem(USER_KEY);window.dispatchEvent(new Event('user-updated'))}
