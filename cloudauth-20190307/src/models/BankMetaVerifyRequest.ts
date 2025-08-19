// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BankMetaVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * Bank card number.
   * 
   * - When `paramType` is `normal`, enter the plain text bank card number.
   * - When `paramType` is `md5`, enter the part of the card number except the last 6 digits in plain text + the last 6 digits encrypted with MD5 (32 lowercase).
   * 
   * @example
   * 610*************1181
   */
  bankCard?: string;
  /**
   * @remarks
   * ID number.
   * 
   * - When `ProductType` is `BANK_CARD_3_META`, this field is required.
   * - When `paramType` is `normal`, enter the plain text ID number.
   * - When `paramType` is `md5`, enter the first 6 digits of the ID number in plain text + the birth date encrypted with MD5 (32 lowercase MD5) + the last 4 digits of the ID number.
   * 
   * @example
   * 429001********8211
   */
  identifyNum?: string;
  /**
   * @remarks
   * Identity type.
   * 
   * @example
   * 01
   */
  identityType?: string;
  /**
   * @remarks
   * Mobile phone number.
   * 
   * - When `ProductType` is `BANK_CARD_4_META`, this field is required.
   * - When `paramType` is `normal`, enter the plain text mobile phone number.
   * - When `paramType` is `md5`, enter the mobile phone number (32 lowercase MD5).
   * 
   * @example
   * 138******11
   */
  mobile?: string;
  /**
   * @remarks
   * Parameter type:
   * 
   * - normal: Unencrypted.
   * - md5: MD5 encrypted.
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * Product type to call:
   * 
   * - BANK_CARD_2_META: Bank card number + name verification.
   * - BANK_CARD_3_META: Bank card number + name + ID number verification.
   * - BANK_CARD_4_META: Bank card number + name + ID number + mobile phone number verification.
   * 
   * @example
   * BANK_CARD_2_META
   */
  productType?: string;
  /**
   * @remarks
   * Name.
   * 
   * - When `paramType` is `normal`, enter the plain text name.
   * - When `paramType` is `md5`, encrypt the first character of the name with MD5 (32 lowercase MD5) + the rest of the name in plain text.
   * 
   * @example
   * 张*
   */
  userName?: string;
  /**
   * @remarks
   * VERIFY_BANK_CARD: Bank card authentication mode. It indicates whether the provided bank card number matches the user\\"s real name, ID number, and mobile phone number.
   * 
   * @example
   * VERIFY_BANK_CARD
   */
  verifyMode?: string;
  static names(): { [key: string]: string } {
    return {
      bankCard: 'BankCard',
      identifyNum: 'IdentifyNum',
      identityType: 'IdentityType',
      mobile: 'Mobile',
      paramType: 'ParamType',
      productType: 'ProductType',
      userName: 'UserName',
      verifyMode: 'VerifyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bankCard: 'string',
      identifyNum: 'string',
      identityType: 'string',
      mobile: 'string',
      paramType: 'string',
      productType: 'string',
      userName: 'string',
      verifyMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

