// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddressVerifyIntlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * “0”
   */
  addressType?: string;
  defaultCity?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  defaultCountry?: string;
  defaultDistrict?: string;
  defaultProvince?: string;
  /**
   * @example
   * “31.2304”
   */
  latitude?: string;
  /**
   * @example
   * “121.4737”
   */
  longitude?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1872334****
   */
  mobile?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ADD_VERIFY_PRO
   */
  productCode?: string;
  text?: string;
  /**
   * @remarks
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

