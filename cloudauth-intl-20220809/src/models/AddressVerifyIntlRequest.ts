// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddressVerifyIntlRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the address to verify. Valid values:
   * - "0": text address
   * - "1": coordinates (longitude and latitude).
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
   * 杭州市
   */
  defaultCity?: string;
  /**
   * @remarks
   * The country name. Currently, only China is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 中国
   */
  defaultCountry?: string;
  /**
   * @remarks
   * The default district.
   * 
   * @example
   * 余杭区
   */
  defaultDistrict?: string;
  /**
   * @remarks
   * The default province.
   * 
   * @example
   * 浙江省
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
   * Chinese mainland phone numbers are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 1872334****
   */
  mobile?: string;
  /**
   * @remarks
   * Fixed value: ADD_VERIFY_PRO.
   * 
   * This parameter is required.
   * 
   * @example
   * ADD_VERIFY_PRO
   */
  productCode?: string;
  /**
   * @remarks
   * The detailed address in text format.
   * 
   * @example
   * 阿里巴巴西溪园区
   */
  text?: string;
  /**
   * @remarks
   * The address verification method. Valid values:
   * - HOME: home address verification
   * - WORK: work address verification.
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

