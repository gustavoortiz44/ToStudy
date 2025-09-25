import Config from 'react-native-config';

export const APP_NAME = Config.APP_NAME;
export const API_URL = Config.API_URL;
export const WEB_URL = Config.WEB_URL;
export const FEATURES = {
  navV2: Config.FEATURE_NAV_V2 === 'true',
};
export const LOG_LEVEL = Config.LOG_LEVEL ?? 'info';
