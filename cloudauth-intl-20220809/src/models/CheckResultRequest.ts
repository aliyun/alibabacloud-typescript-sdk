// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckResultRequest extends $dara.Model {
  /**
   * @example
   * ***
   */
  extraImageControlList?: string;
  /**
   * @example
   * N
   */
  isReturnImage?: string;
  /**
   * @example
   * djs20d***9-dsskc
   */
  merchantBizId?: string;
  /**
   * @example
   * Y
   */
  returnFiveCategorySpoofResult?: string;
  /**
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

