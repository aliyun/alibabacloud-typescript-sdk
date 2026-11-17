// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BankMetaVerifyIntlRequest extends $dara.Model {
  /**
   * @remarks
   * The bank card number.
   * 
   * - If paramType is set to normal, enter the plaintext bank card number.
   * - If paramType is set to md5, enter the plaintext of the bank card number except the last 6 digits, followed by the 32-character lowercase MD5 hash of the last 6 digits.
   * 
   * This parameter is required.
   * 
   * @example
   * ● Plaintext: 12345678******
   * ● Ciphertext:
   * 12345678f8ee21920e37807b43e7e912ab829b6e
   */
  bankCard?: string;
  /**
   * @remarks
   * The identification document number.
   * - If paramType is set to normal, enter the plaintext identification document number.
   * - If paramType is set to md5:
   *     - For an ID card, enter the first 6 digits in plaintext, followed by the ciphertext of the date of birth, and then the last 4 digits in plaintext.
   *     - For other identification documents, encrypt the last two characters by using MD5.
   * 
   * Important:
   * This parameter is required if ProductType is set to one of the following values:
   * - BANK_CARD_3_META
   * - BANK_CARD_4_META
   * 
   * @example
   * ● Plaintext: 429001********8211
   * ● Ciphertext:
   * 42900132fa7bcd874161bea8ec8fd98f390ec98211
   */
  identifyNum?: string;
  /**
   * @remarks
   * The type of the identification document. If you leave this parameter empty, the default value is ID card. For other types of identification documents, see the following table.
   * 
   * @example
   * 01
   */
  identityType?: string;
  /**
   * @remarks
   * The mobile phone number.
   * - If paramType is set to normal, enter the plaintext mobile phone number.
   * - If paramType is set to md5, enter the ciphertext mobile phone number.
   * 
   * Important:
   * 
   * - This parameter is required if ProductType is set to BANK_CARD_4_META.
   * 
   * @example
   * ● Plaintext: 186****2055
   * ● Ciphertext:
   * 849169cd3b20621c1c78bd61a11a4fc2
   */
  mobile?: string;
  /**
   * @remarks
   * The encryption method. Valid values:
   * - normal: No encryption.
   * - md5: MD5 encryption.
   * 
   * Important:
   * 
   * - The ciphertext of all parameters must be a 32-character lowercase MD5 string.
   * - Different MD5 tools may generate different ciphertexts. If the API call succeeds before encryption but fails after encryption, try using a different MD5 tool.
   * 
   * This parameter is required.
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * The fixed value. Valid value: BANK_CARD_N_META.
   * 
   * This parameter is required.
   * 
   * @example
   * BANK_CARD_N_META
   */
  productCode?: string;
  /**
   * @remarks
   * The product type. Valid values:
   * 
   * - BANK_CARD_2_META: Verifies the bank card number and name.
   * - BANK_CARD_3_META: Verifies the bank card number, name, and ID card number.
   * - BANK_CARD_4_META: Verifies the bank card number, name, ID card number, and mobile phone number.
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
   * - If paramType is set to normal, enter the plaintext name.
   * - If paramType is set to md5, enter the 32-character lowercase MD5 hash of the first character of the name, followed by the plaintext of the remaining characters.
   * 
   * This parameter is required.
   * 
   * @example
   * Zhang*
   */
  userName?: string;
  /**
   * @remarks
   * The verification mode. Valid value: VERIFY_BANK_CARD. This value indicates the bank card authentication mode, which verifies whether the provided bank card number matches the real name, ID card number, and mobile phone number of the user.
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

