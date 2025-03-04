/**
 * Constantes para el almacenamiento local
 */

export const STORAGE_KEYS = {
  COFFEES: 'coffee-data',
} as const;

export const EXPIRATION_TIMES = {
  // 24 horas en milisegundos
  ONE_DAY: 24 * 60 * 60 * 1000,
  // 1 hora en milisegundos
  ONE_HOUR: 60 * 60 * 1000,
  // 1 semana en milisegundos
  ONE_WEEK: 7 * 24 * 60 * 60 * 1000,
} as const;
