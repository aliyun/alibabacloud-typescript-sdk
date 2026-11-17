// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckResultRequest extends $dara.Model {
  /**
   * @remarks
   * The additional information to return.
   * 
   * @example
   * ***
   */
  extraImageControlList?: string;
  /**
   * @remarks
   * Specifies whether to return images. Valid values:
   * - Y: Returns images.
   * - N: Does not return images.
   * 
   * @example
   * N
   */
  isReturnImage?: string;
  /**
   * @remarks
   * The custom unique business identifier on the merchant side, which is used for subsequent troubleshooting. It supports a combination of letters and digits, with a maximum length of 32 characters. Make sure that the identifier is unique.
   * 
   * @example
   * djs20d***9-dsskc
   */
  merchantBizId?: string;
  /**
   * @remarks
   * Specifies whether to return the anti-spoofing detection results.
   * 
   * @example
   * Y
   */
  returnFiveCategorySpoofResult?: string;
  /**
   * @remarks
   * The authentication ID.
   * 
   * @example
   * 4ab0b***cbde97
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      extraImageControlList: 'ExtraImageControlList',
      isReturnImage: 'IsReturnImage',
      merchantBizId: 'MerchantBizId',
      returnFiveCategorySpoofResult: 'ReturnFiveCategorySpoofResult',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraImageControlList: 'string',
      isReturnImage: 'string',
      merchantBizId: 'string',
      returnFiveCategorySpoofResult: 'string',
      transactionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

