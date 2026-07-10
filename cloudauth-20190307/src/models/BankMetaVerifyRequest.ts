// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BankMetaVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The bank card number.
   * 
   * - If paramType is set to normal, enter the bank card number in plaintext.
   * - If paramType is set to md5, enter the card number excluding the last 6 digits in plaintext + the MD5 hash (32-bit lowercase) of the last 6 digits.
   * 
   * @example
   * 610*************1181
   */
  bankCard?: string;
  /**
   * @remarks
   * The ID card number.
   * 
   * - This parameter is required if ProductType is set to BANK_CARD_3_META.
   * - If paramType is set to normal, enter the ID card number in plaintext.
   * - If paramType is set to md5, enter the first 6 digits of the ID card number in plaintext + the MD5 hash (32-bit lowercase) of the date of birth + the last 4 digits of the ID card number.
   * 
   * @example
   * 429001********8211
   */
  identifyNum?: string;
  /**
   * @remarks
   * The identity document type.
   * 
   * @example
   * 01
   */
  identityType?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * - This parameter is required if ProductType is set to BANK_CARD_4_META.
   * - If paramType is set to normal, enter the phone number in plaintext.
   * - If paramType is set to md5, enter the MD5 hash (32-bit lowercase) of the phone number.
   * 
   * @example
   * 138******11
   */
  mobile?: string;
  /**
   * @remarks
   * The parameter type. Valid values:
   * 
   * - normal: not encrypted.
   * - md5: MD5-encrypted.
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * The product type. Valid values:
   * 
   * - BANK_CARD_2_META: bank card number + name verification.
   * - BANK_CARD_3_META: bank card number + name + ID card number verification.
   * - BANK_CARD_4_META: bank card number + name + ID card number + phone number verification.
   * 
   * @example
   * BANK_CARD_2_META
   */
  productType?: string;
  /**
   * @remarks
   * The name.
   * 
   * - If paramType is set to normal, enter the name in plaintext.
   * - If paramType is set to md5, enter the MD5 hash (32-bit lowercase) of the first character of the name + the remaining characters of the name in plaintext.
   * 
   * @example
   * 张*
   */
  userName?: string;
  /**
   * @remarks
   * VERIFY_BANK_CARD: bank card verification mode. Specifies whether the provided bank card number matches the real name, ID card number, and phone number of the user.
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

