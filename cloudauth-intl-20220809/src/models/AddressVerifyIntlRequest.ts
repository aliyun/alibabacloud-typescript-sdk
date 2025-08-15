// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddressVerifyIntlRequest extends $dara.Model {
  /**
   * @remarks
   * Verification address type:
   * - “0”: Text address
   * - “1”: Latitude and longitude
   * 
   * This parameter is required.
   * 
   * @example
   * “0”
   */
  addressType?: string;
  /**
   * @remarks
   * Default city
   * 
   * @example
   * 杭州市
   */
  defaultCity?: string;
  /**
   * @remarks
   * Country name, currently only supports: China
   * 
   * This parameter is required.
   * 
   * @example
   * 中国
   */
  defaultCountry?: string;
  /**
   * @remarks
   * Default district
   * 
   * @example
   * 余杭区
   */
  defaultDistrict?: string;
  /**
   * @remarks
   * Default province
   * 
   * @example
   * 浙江省
   */
  defaultProvince?: string;
  /**
   * @remarks
   * Latitude.
   * 
   * @example
   * “31.2304”
   */
  latitude?: string;
  /**
   * @remarks
   * Longitude.
   * 
   * @example
   * “121.4737”
   */
  longitude?: string;
  /**
   * @remarks
   * Supports Chinese mobile phone numbers.
   * 
   * This parameter is required.
   * 
   * @example
   * 1872334****
   */
  mobile?: string;
  /**
   * @remarks
   * Fixed value: ADD_VERIFY_PRO
   * 
   * This parameter is required.
   * 
   * @example
   * ADD_VERIFY_PRO
   */
  productCode?: string;
  /**
   * @remarks
   * Detailed address text content
   * 
   * @example
   * 阿里巴巴西溪园区
   */
  text?: string;
  /**
   * @remarks
   * Address verification method:
   * - HOME: Home address verification
   * - WORK: Work address verification
   * 
   * This parameter is required.
   * 
   * @example
   * HOME
   */
  verifyType?: string;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      defaultCity: 'DefaultCity',
      defaultCountry: 'DefaultCountry',
      defaultDistrict: 'DefaultDistrict',
      defaultProvince: 'DefaultProvince',
      latitude: 'Latitude',
      longitude: 'Longitude',
      mobile: 'Mobile',
      productCode: 'ProductCode',
      text: 'Text',
      verifyType: 'VerifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      defaultCity: 'string',
      defaultCountry: 'string',
      defaultDistrict: 'string',
      defaultProvince: 'string',
      latitude: 'string',
      longitude: 'string',
      mobile: 'string',
      productCode: 'string',
      text: 'string',
      verifyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

