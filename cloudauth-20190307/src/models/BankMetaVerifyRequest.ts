// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BankMetaVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The bank card number.
   * 
   * - If ParamType is set to normal, enter the bank card number in plaintext.
   * - If ParamType is set to md5, enter all digits of the card number except the last 6 in plaintext, followed by the MD5 hash (32-character lowercase) of the last 6 digits.
   * 
   * @example
   * 610*************1181
   */
  bankCard?: string;
  /**
   * @remarks
   * The ID card number.
   * 
   * - This parameter is required when ProductType is set to BANK_CARD_3_META.
   * - If ParamType is set to normal, enter the ID card number in plaintext.
   * - If ParamType is set to md5, enter the first 6 digits of the ID card number in plaintext, followed by the date of birth encrypted with MD5 (32-character lowercase MD5 hash), followed by the last 4 digits of the ID card number.
   * 
   * @example
   * 429001********8211
   */
  identifyNum?: string;
  /**
   * @remarks
   * The ID document type.
   * 
   * @example
   * 01
   */
  identityType?: string;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * - This parameter is required when ProductType is set to BANK_CARD_4_META.
   * - If ParamType is set to normal, enter the mobile phone number in plaintext.
   * - If ParamType is set to md5, enter the MD5 hash (32-character lowercase) of the mobile phone number.
   * 
   * @example
   * 138******11
   */
  mobile?: string;
  /**
   * @remarks
   * The parameter type.
   * 
   * - normal: no encryption.
   * - md5: MD5 encryption.
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * The product type.
   * 
   * - BANK_CARD_2_META: verifies the bank card number and name.
   * - BANK_CARD_3_META: verifies the bank card number, name, and ID card number.
   * - BANK_CARD_4_META: verifies the bank card number, name, ID card number, and mobile phone number.
   * 
   * @example
   * BANK_CARD_2_META
   */
  productType?: string;
  /**
   * @remarks
   * The name.
   * 
   * - If ParamType is set to normal, enter the name in plaintext.
   * - If ParamType is set to md5, enter the first character of the name encrypted with MD5 (32-character lowercase MD5 hash) followed by the remaining characters of the name in plaintext.
   * 
   * @example
   * 张*
   */
  userName?: string;
  /**
   * @remarks
   * VERIFY_BANK_CARD: the bank card verification mode. Verifies whether the bank card number matches the user\\"s real name, ID card number, and mobile phone number.
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

