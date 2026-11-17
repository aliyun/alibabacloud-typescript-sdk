// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddressVerifyIntlRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the address to be verified. Valid values:
   * - 0: text address
   * - 1: coordinates
   * 
   * This parameter is required.
   * 
   * @example
   * “0”
   */
  addressType?: string;
  /**
   * @remarks
   * The default city.
   * 
   * @example
   * Hangzhou
   */
  defaultCity?: string;
  /**
   * @remarks
   * The country name. Currently, only China is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * China
   */
  defaultCountry?: string;
  /**
   * @remarks
   * The default district.
   * 
   * @example
   * Yuhang District
   */
  defaultDistrict?: string;
  /**
   * @remarks
   * The default province.
   * 
   * @example
   * Zhejiang Province
   */
  defaultProvince?: string;
  /**
   * @remarks
   * The latitude.
   * 
   * @example
   * “31.2304”
   */
  latitude?: string;
  /**
   * @remarks
   * The longitude.
   * 
   * @example
   * “121.4737”
   */
  longitude?: string;
  /**
   * @remarks
   * The mobile phone number. Only Chinese mobile phone numbers are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 1872334****
   */
  mobile?: string;
  /**
   * @remarks
   * The fixed value: ADD_VERIFY_PRO.
   * 
   * This parameter is required.
   * 
   * @example
   * ADD_VERIFY_PRO
   */
  productCode?: string;
  /**
   * @remarks
   * The detailed text of the address.
   * 
   * @example
   * Alibaba Xixi Campus
   */
  text?: string;
  /**
   * @remarks
   * The address verification method. Valid values:
   * - HOME: home address verification
   * - WORK: work address verification
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

