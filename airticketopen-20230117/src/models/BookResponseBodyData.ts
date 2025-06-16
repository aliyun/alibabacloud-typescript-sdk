// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BookResponseBodyDataOrderList } from "./BookResponseBodyDataOrderList";


export class BookResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * order information list
   */
  orderList?: BookResponseBodyDataOrderList[];
  static names(): { [key: string]: string } {
    return {
      orderList: 'order_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderList: { 'type': 'array', 'itemType': BookResponseBodyDataOrderList },
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

