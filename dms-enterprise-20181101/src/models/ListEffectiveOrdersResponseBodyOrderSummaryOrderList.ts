// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEffectiveOrdersResponseBodyOrderSummaryOrderList extends $dara.Model {
  /**
   * @remarks
   * The UID of the user who placed the order.
   * 
   * @example
   * 2698420314****
   */
  buyerId?: string;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * @example
   * 2022-11-24 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The maximum number of database instances that you can use DMS to manage.
   * 
   * @example
   * 7
   */
  insNum?: string;
  /**
   * @remarks
   * The ID of the instance for the purchased service.
   * 
   * @example
   * rm-bp1xd1v866****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 2190037****
   */
  orderId?: string;
  /**
   * @remarks
   * The time when the instance is started.
   * 
   * @example
   * 2022-10-24 00:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      buyerId: 'BuyerId',
      endTime: 'EndTime',
      insNum: 'InsNum',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyerId: 'string',
      endTime: 'string',
      insNum: 'string',
      instanceId: 'string',
      orderId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

