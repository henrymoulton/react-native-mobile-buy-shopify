import { NativeModules } from 'react-native';

type MobileBuyShopifyType = {
  multiply(a: number, b: number): Promise<number>;
};

const { MobileBuyShopify } = NativeModules;

export default MobileBuyShopify as MobileBuyShopifyType;
