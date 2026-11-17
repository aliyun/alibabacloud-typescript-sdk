// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddressVerifyV2IntlRequest extends $dara.Model {
  /**
   * @remarks
   * The device token used for risk identification.
   * 
   * This parameter is required.
   * 
   * @example
   * Tk9SSUQuMS*****************ZDNmNWY5NzQxOW1o
   */
  deviceToken?: string;
  /**
   * @remarks
   * The mobile phone number. Only mobile phone numbers in the Chinese mainland are supported.
   * 
   * @example
   * 1872334****
   */
  mobile?: string;
  /**
   * @remarks
   * The product code. Set the value to ADD_VERIFY_PRO.
   * 
   * This parameter is required.
   * 
   * @example
   * ADD_VERIFY_PRO
   */
  productCode?: string;
  /**
   * @remarks
   * The list of prohibited countries.
   * 
   * This parameter is required.
   * 
   * @example
   * Currently supported: USA
   */
  regCountry?: string;
  /**
   * @remarks
   * The detailed address text.
   * 
   * @example
   * Jiangsu Province, Changzhou City, ******* Community
   */
  text?: string;
  /**
   * @remarks
   * The address verification method. Valid values:
   * 
   * - HOME: Home address verification.
   * - WORK: Work address verification.
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

