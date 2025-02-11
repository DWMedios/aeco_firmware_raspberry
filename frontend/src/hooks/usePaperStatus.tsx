import WebApiAeco from '../api/webApiAeco';
import { setSessionStorage } from '../utils/manageStorage';

const savePaperStatus = async () => {

      try {
        await WebApiAeco.getPapel();
        setSessionStorage('paperStatus', 'true'); 
      } catch (error) {
        setSessionStorage("paperStatus", "false")
      }
    };

export default savePaperStatus;