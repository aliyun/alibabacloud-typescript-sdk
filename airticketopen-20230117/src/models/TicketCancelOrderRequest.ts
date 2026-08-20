// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketCancelOrderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  accountNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  distributorOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      distributorOrderId: 'DistributorOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'number',
      distributorOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

