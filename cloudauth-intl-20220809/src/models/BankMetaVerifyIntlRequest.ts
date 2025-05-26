// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BankMetaVerifyIntlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bankCard?: string;
  identifyNum?: string;
  /**
   * @example
   * 01
   */
  identityType?: string;
  mobile?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BANK_CARD_N_META
   */
  productCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BANK_CARD_4_META
   */
  productType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userName?: string;
  /**
   * @remarks
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

