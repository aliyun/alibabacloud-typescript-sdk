// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BankMetaVerifyIntlRequest extends $dara.Model {
  /**
   * @remarks
   * The bank card number.
   * 
   * - If paramType is set to normal, enter the bank card number in plaintext.
   * - If paramType is set to md5, provide the plaintext of all digits except the last 6 digits + the MD5 value (32-character lowercase) of the last 6 digits.
   * 
   * This parameter is required.
   * 
   * @example
   * ● 明文：12345678******
   * ● 密文：
   * 12345678f8ee21920e37807b43e7e912ab829b6e
   */
  bankCard?: string;
  /**
   * @remarks
   * The ID document number.
   * - If paramType is set to normal, enter the ID document number in plaintext.
   * - If paramType is set to md5:
   *     - For ID cards: the first 6 digits (plaintext) + date of birth (ciphertext) + the last 4 digits (plaintext).
   *     - For other documents: the last 2 characters are MD5-encrypted.
   * 
   * Important:
   * This parameter is required when ProductType is set to one of the following values:
   * - BANK_CARD_3_META
   * - BANK_CARD_4_META.
   * 
   * @example
   * ● 明文：429001********8211
   * ● 密文：
   * 42900132fa7bcd874161bea8ec8fd98f390ec98211
   */
  identifyNum?: string;
  /**
   * @remarks
   * The ID document type. If left empty, the default value is ID card. For other document types, refer to the table below.
   * 
   * @example
   * 01
   */
  identityType?: string;
  /**
   * @remarks
   * The phone number.
   * - If paramType is set to normal, enter the phone number in plaintext.
   * - If paramType is set to md5, enter the phone number in ciphertext.
   * 
   * Important:
   * 
   * - This parameter is required when ProductType is set to BANK_CARD_4_META.
   * 
   * @example
   * ● 明文：186****2055
   * ● 密文：
   * 849169cd3b20621c1c78bd61a11a4fc2
   */
  mobile?: string;
  /**
   * @remarks
   * The encryption method. Valid values:
   * - normal: no encryption
   * - md5: MD5 encryption
   * 
   * Important:
   * 
   * - All encrypted parameter values must be 32-character lowercase MD5 strings.
   * - Different MD5 tools may produce different ciphertext. If the API call succeeds before encryption but fails after encryption, try a different MD5 tool.
   * 
   * This parameter is required.
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * Fixed value: BANK_CARD_N_META.
   * 
   * This parameter is required.
   * 
   * @example
   * BANK_CARD_N_META
   */
  productCode?: string;
  /**
   * @remarks
   * The product type to call. Valid values:
   * 
   * - BANK_CARD_2_META: Bank card number + name verification.
   * - BANK_CARD_3_META: Bank card number + name + ID card number verification.
   * - BANK_CARD_4_META: Bank card number + name + ID card number + phone number verification.
   * 
   * This parameter is required.
   * 
   * @example
   * BANK_CARD_4_META
   */
  productType?: string;
  /**
   * @remarks
   * The name.
   * 
   * - If paramType is set to normal, enter the name in plaintext.
   * - If paramType is set to md5, provide the MD5-encrypted first character of the name (32-character lowercase MD5) + the plaintext of the remaining characters.
   * 
   * This parameter is required.
   * 
   * @example
   * 张*
   */
  userName?: string;
  /**
   * @remarks
   * VERIFY_BANK_CARD: bank card authentication mode. Indicates whether the provided bank card number matches the user\\"s real name, ID card number, and phone number.
   * 
   * This parameter is required.
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
      productCode: 'ProductCode',
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
      productCode: 'string',
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

