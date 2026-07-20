// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CooperatorSyncPayStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  cooperatorOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  cooperatorPayNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1017018197205925373
   */
  orderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SUCCESS
   */
  payStatus?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1726022215000
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

