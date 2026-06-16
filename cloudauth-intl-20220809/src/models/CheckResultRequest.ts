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
   * - Y: Return images.
   * - N: Do not return images.
   * 
   * @example
   * N
   */
  isReturnImage?: string;
  /**
   * @remarks
   * The merchant-defined unique business ID used for subsequent troubleshooting. The value can be a combination of letters and digits with a maximum length of 32 characters. Ensure that the value is unique.
   * 
   * @example
   * djs20d***9-dsskc
   */
  merchantBizId?: string;
  /**
   * @remarks
   * Specifies whether to return the anti-spoofing detection result.
   * 
   * @example
   * Y
   */
  returnFiveCategorySpoofResult?: string;
  /**
   * @remarks
   * The verification ID.
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

