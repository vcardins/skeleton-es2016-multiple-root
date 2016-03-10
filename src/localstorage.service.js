
export class LocalStorage {
  
  storage:any;
  constructor() {
    this.storage = window.localStorage;
		if (!('localStorage' in window && window['localStorage'] !== null)) {
			console.warn('Warning: Local Storage is disabled or unavailable');
		}
  }

  get(key):any{
		return this.storage.getItem(key);
	}

	set(key, value):any{
		return this.storage.setItem(key, value);
	}

	remove(key):any{
		return this.storage.removeItem(key);
	}

}
