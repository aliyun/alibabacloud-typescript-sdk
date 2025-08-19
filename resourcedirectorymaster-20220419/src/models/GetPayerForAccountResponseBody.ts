// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPayerForAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the billing account.
   * 
   * @example
   * 172841235500****
   */
  payerAccountId?: string;
  /**
   * @remarks
   * The name of the billing account.
   * 
   * @example
   * Alice
   */
  payerAccountName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9B34724D-54B0-4A51-B34D-4512372FE1BE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      payerAccountId: 'PayerAccountId',
      payerAccountName: 'PayerAccountName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payerAccountId: 'string',
      payerAccountName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

