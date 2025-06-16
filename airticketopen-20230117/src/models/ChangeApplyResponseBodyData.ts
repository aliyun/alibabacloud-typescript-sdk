// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChangeApplyResponseBodyDataChangeOrders } from "./ChangeApplyResponseBodyDataChangeOrders";


export class ChangeApplyResponseBodyData extends $dara.Model {
  changeOrders?: ChangeApplyResponseBodyDataChangeOrders[];
  /**
   * @example
   * 4988430***950
   */
  orderNum?: number;
  static names(): { [key: string]: string } {
    return {
      changeOrders: 'change_orders',
      orderNum: 'order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrders: { 'type': 'array', 'itemType': ChangeApplyResponseBodyDataChangeOrders },
      orderNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.changeOrders)) {
      $dara.Model.validateArray(this.changeOrders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

