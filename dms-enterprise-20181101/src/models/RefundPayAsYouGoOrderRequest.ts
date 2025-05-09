// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefundPayAsYouGoOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID in the sales order.
   * 
   * This parameter is required.
   * 
   * @example
   * dms_pre_public_intl-sg-vf****
   */
  instanceId?: string;
  /**
   * @remarks
   * The order ID of the order for the pay-as-you-go resource. You can call the ListEffectiveOrders operation to query the order ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2190037****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderId: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

