// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddressVerifyV2IntlRequest extends $dara.Model {
  /**
   * @remarks
   * DeviceToken obtained via the client SDK
   * 
   * This parameter is required.
   * 
   * @example
   * Tk9SSUQuMS*****************ZDNmNWY5NzQxOW1o
   */
  deviceToken?: string;
  /**
   * @remarks
   * Supported: Chinese mobile phone numbers
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
   * List of prohibited countries or regions
   * 
   * This parameter is required.
   * 
   * @example
   * Currently supported: USA
   */
  regCountry?: string;
  /**
   * @remarks
   * Detailed address text content
   * 
   * @example
   * 浙江省杭州市西湖区灯彩街云谷园区
   */
  text?: string;
  /**
   * @remarks
   * Address verification method:
   * 
   * - **HOME**: Home address verification
   * 
   * - **WORK**: Work address verification
   * 
   * @example
   * HOME
   */
  verifyType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceToken: 'DeviceToken',
      mobile: 'Mobile',
      productCode: 'ProductCode',
      regCountry: 'RegCountry',
      text: 'Text',
      verifyType: 'VerifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceToken: 'string',
      mobile: 'string',
      productCode: 'string',
      regCountry: 'string',
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

