// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckVerifyLogRequest extends $dara.Model {
  /**
   * @example
   * e0c34a***353888
   */
  merchantBizId?: string;
  /**
   * @example
   * hksb7ba1b*********015d694361bee4
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      merchantBizId: 'MerchantBizId',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      merchantBizId: 'string',
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

