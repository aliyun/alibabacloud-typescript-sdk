// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChangeApplyResponseBodyDataChangeOrdersPassengers } from "./ChangeApplyResponseBodyDataChangeOrdersPassengers";


export class ChangeApplyResponseBodyDataChangeOrders extends $dara.Model {
  /**
   * @example
   * 49884*****950
   */
  changeOrderNum?: number;
  /**
   * @example
   * 0
   */
  changeOrderStatus?: number;
  /**
   * @example
   * desc reason
   */
  failReason?: string;
  passengers?: ChangeApplyResponseBodyDataChangeOrdersPassengers[];
  static names(): { [key: string]: string } {
    return {
      changeOrderNum: 'change_order_num',
      changeOrderStatus: 'change_order_status',
      failReason: 'fail_reason',
      passengers: 'passengers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderNum: 'number',
      changeOrderStatus: 'number',
      failReason: 'string',
      passengers: { 'type': 'array', 'itemType': ChangeApplyResponseBodyDataChangeOrdersPassengers },
    };
  }

  validate() {
    if(Array.isArray(this.passengers)) {
      $dara.Model.validateArray(this.passengers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

