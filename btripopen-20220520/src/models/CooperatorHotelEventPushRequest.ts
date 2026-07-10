// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CooperatorHotelEventPushRequest extends $dara.Model {
  changeOrderStatus?: number;
  changeOrderStatusDesc?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  cooperatorOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  event?: string;
  eventDesc?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  eventTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderStatus: 'change_order_status',
      changeOrderStatusDesc: 'change_order_status_desc',
      cooperatorOrderId: 'cooperator_order_id',
      event: 'event',
      eventDesc: 'event_desc',
      eventTime: 'event_time',
      orderId: 'order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderStatus: 'number',
      changeOrderStatusDesc: 'string',
      cooperatorOrderId: 'string',
      event: 'string',
      eventDesc: 'string',
      eventTime: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

