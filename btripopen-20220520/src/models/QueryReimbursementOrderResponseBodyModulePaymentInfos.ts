// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReimbursementOrderResponseBodyModulePaymentInfos extends $dara.Model {
  /**
   * @example
   * 20.00
   */
  amount?: string;
  /**
   * @example
   * userId
   */
  payeeUserId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      payeeUserId: 'payee_user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      payeeUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

