// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightRefundPreCalResponseBodyModuleMultiRefundCalList extends $dara.Model {
  /**
   * @example
   * true
   */
  canApplyRefund?: boolean;
  name?: string;
  /**
   * @example
   * 1000
   */
  preRefundMoney?: number;
  /**
   * @example
   * 1000
   */
  refundFee?: number;
  /**
   * @example
   * 124
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      canApplyRefund: 'can_apply_refund',
      name: 'name',
      preRefundMoney: 'pre_refund_money',
      refundFee: 'refund_fee',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canApplyRefund: 'boolean',
      name: 'string',
      preRefundMoney: 'number',
      refundFee: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

