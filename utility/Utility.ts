import {v4 as uuidv4} from 'uuid';


class Utility {
  getRandomId(string: string) {
    return string + Math.random().toString(36);
  }
  
  getUUID(){
    let uuid = uuidv4();
    return uuid;
  }
}

export default new Utility();
