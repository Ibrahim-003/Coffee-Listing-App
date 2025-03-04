/**
 * Servicio para manejar el almacenamiento local con expiración
 */

interface StoredItem<T> {
  data: T;
  timestamp: number;
}

export class StorageService {
  /**
   * Guarda datos en localStorage con un timestamp
   * @param key Clave para almacenar los datos
   * @param data Datos a almacenar
   */
  static saveData<T>(key: string, data: T): void {
    try {
      const item: StoredItem<T> = {
        data,
        timestamp: new Date().getTime()
      };
      localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
    }
  }

  /**
   * Obtiene datos del localStorage si no han expirado
   * @param key Clave de los datos almacenados
   * @param expirationTime Tiempo de expiración en milisegundos
   * @returns Los datos almacenados o null si no existen o han expirado
   */
  static getData<T>(key: string, expirationTime: number): T | null {
    try {
      const storedItemJson = localStorage.getItem(key);
      
      if (!storedItemJson) {
        return null;
      }

      const storedItem: StoredItem<T> = JSON.parse(storedItemJson);
      const currentTime = new Date().getTime();
      
      // Verificar si los datos han expirado
      if (currentTime - storedItem.timestamp > expirationTime) {
        // Si han expirado, eliminar los datos y devolver null
        localStorage.removeItem(key);
        return null;
      }
      
      return storedItem.data;
    } catch (error) {
      console.error('Error getting data from localStorage:', error);
      return null;
    }
  }

  /**
   * Elimina datos del localStorage
   * @param key Clave de los datos a eliminar
   */
  static removeData(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing data from localStorage:', error);
    }
  }

  /**
   * Verifica si existen datos para una clave específica
   * @param key Clave a verificar
   * @returns true si existen datos, false en caso contrario
   */
  static hasData(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }
}
