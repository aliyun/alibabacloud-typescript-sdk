// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckVerifyLogRequest extends $dara.Model {
  /**
   * @remarks
   * The merchant-side custom business unique identifier, used for subsequent troubleshooting. The value supports a combination of letters and numbers with a maximum length of 32 characters. Ensure that the value is unique.
   * 
   * @example
   * e0c34a***353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The unique identifier of the entire authentication process. Obtain this value by calling the Initialize operation.
   * 
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

