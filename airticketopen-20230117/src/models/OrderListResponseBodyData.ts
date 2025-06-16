// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OrderListResponseBodyDataList } from "./OrderListResponseBodyDataList";
import { OrderListResponseBodyDataPagination } from "./OrderListResponseBodyDataPagination";


export class OrderListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * order list
   */
  list?: OrderListResponseBodyDataList[];
  /**
   * @remarks
   * information of pagination
   */
  pagination?: OrderListResponseBodyDataPagination;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pagination: 'pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': OrderListResponseBodyDataList },
      pagination: OrderListResponseBodyDataPagination,
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    if(this.pagination && typeof (this.pagination as any).validate === 'function') {
      (this.pagination as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

