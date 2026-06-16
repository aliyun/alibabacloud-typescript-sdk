// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddressVerifyV2IntlRequest extends $dara.Model {
  /**
   * @remarks
   * The device token, which is used for risk identification.
   * 
   * This parameter is required.
   * 
   * @example
   * Tk9SSUQuMS*****************ZDNmNWY5NzQxOW1o
   */
  deviceToken?: string;
  /**
   * @remarks
   * The China mobile phone number.
   * 
   * @example
   * 1872334****
   */
  mobile?: string;
  /**
   * @remarks
   * The product code. Set this parameter to ADD_VERIFY_PRO.
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
   * 目前仅支持：USA
   */
  regCountry?: string;
  /**
   * @remarks
   * The detailed address text.
   * 
   * @example
   * 江苏省常州市*******小区
   */
  text?: string;
  /**
   * @remarks
   * The address verification method. Valid values:
   * 
   * - HOME: home address verification.
   * - WORK: work address verification.
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

