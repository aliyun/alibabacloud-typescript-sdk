// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceGroupSpecResponseBodyOrderInfo extends $dara.Model {
  /**
   * @remarks
   * The list of instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 296325540190****
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceGroupSpecResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order information.
   */
  orderInfo?: ModifyInstanceGroupSpecResponseBodyOrderInfo[];
  /**
   * @remarks
   * The order task ID that is returned when specifications of more than 10 instance groups are changed in a batch. You can call the **DescribeOrderTasks** operation to query the information about each order.
   * 
   * @example
   * t-aycabdsjsbgd****
   */
  orderTaskId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderInfo: 'OrderInfo',
      orderTaskId: 'OrderTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderInfo: { 'type': 'array', 'itemType': ModifyInstanceGroupSpecResponseBodyOrderInfo },
      orderTaskId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.orderInfo)) {
      $dara.Model.validateArray(this.orderInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

