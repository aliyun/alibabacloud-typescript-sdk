// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListOrdersResponseBodyOrdersOrder } from "./ListOrdersResponseBodyOrdersOrder";


export class ListOrdersResponseBodyOrders extends $dara.Model {
  order?: ListOrdersResponseBodyOrdersOrder[];
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: { 'type': 'array', 'itemType': ListOrdersResponseBodyOrdersOrder },
    };
  }

  validate() {
    if(Array.isArray(this.order)) {
      $dara.Model.validateArray(this.order);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

