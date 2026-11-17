// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckVerifyLogRequest extends $dara.Model {
  /**
   * @remarks
   * The custom unique business identifier on the merchant side, which is used for subsequent troubleshooting. It supports a combination of letters and digits and can be up to 32 characters in length. Make sure that the value is unique.
   * 
   * @example
   * e0c34a***353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The unique identifier of the entire authentication process. You must call the Initialize operation to obtain this value.
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

