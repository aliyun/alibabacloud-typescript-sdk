// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BookResponseBodyErrorDataOrderList } from "./BookResponseBodyErrorDataOrderList";


export class BookResponseBodyErrorData extends $dara.Model {
  /**
   * @remarks
   * order information list. When the same input parameters are used to repeat a Book, if the booking has already been successful, the order number will be returned.
   */
  orderList?: BookResponseBodyErrorDataOrderList[];
  static names(): { [key: string]: string } {
    return {
      orderList: 'order_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderList: { 'type': 'array', 'itemType': BookResponseBodyErrorDataOrderList },
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

