// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CooperatorSyncPayStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  cooperatorOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  cooperatorPayNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orderId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  payStatus?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  payTime?: number;
  static names(): { [key: string]: string } {
    return {
      cooperatorOrderId: 'cooperator_order_id',
      cooperatorPayNo: 'cooperator_pay_no',
      orderId: 'order_id',
      payStatus: 'pay_status',
      payTime: 'pay_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cooperatorOrderId: 'string',
      cooperatorPayNo: 'string',
      orderId: 'string',
      payStatus: 'string',
      payTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

