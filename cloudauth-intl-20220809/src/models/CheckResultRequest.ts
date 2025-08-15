// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckResultRequest extends $dara.Model {
  /**
   * @remarks
   * Return additional information.
   * 
   * @example
   * ***
   */
  extraImageControlList?: string;
  /**
   * @remarks
   * Whether to return images.
   * - Y: Return
   * - N: Do not return
   * 
   * @example
   * N
   */
  isReturnImage?: string;
  /**
   * @remarks
   * A unique business identifier defined by the merchant, used for subsequent troubleshooting. It supports a combination of letters and numbers, with a maximum length of 32 characters. Please ensure its uniqueness.
   * 
   * @example
   * djs20d***9-dsskc
   */
  merchantBizId?: string;
  /**
   * @remarks
   * Whether to return anti-fraud detection results.
   * 
   * @example
   * Y
   */
  returnFiveCategorySpoofResult?: string;
  /**
   * @remarks
   * Authentication ID.
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

