// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MealOrderListQueryResponseBodyModuleOrderList } from "./MealOrderListQueryResponseBodyModuleOrderList";


export class MealOrderListQueryResponseBodyModule extends $dara.Model {
  orderList?: MealOrderListQueryResponseBodyModuleOrderList[];
  static names(): { [key: string]: string } {
    return {
      orderList: 'order_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderList: { 'type': 'array', 'itemType': MealOrderListQueryResponseBodyModuleOrderList },
    };
  }

  validate() {
    if(Array.isArray(this.orderList)) {
      $dara.Model.validateArray(this.orderList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

