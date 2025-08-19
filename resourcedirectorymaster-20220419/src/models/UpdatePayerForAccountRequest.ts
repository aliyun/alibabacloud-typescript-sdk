// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePayerForAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * This parameter is required.
   * 
   * @example
   * 138660628348****
   */
  accountId?: string;
  /**
   * @remarks
   * The ID of the billing account.
   * 
   * This parameter is required.
   * 
   * @example
   * 12323344****
   */
  payerAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      payerAccountId: 'PayerAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      payerAccountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

