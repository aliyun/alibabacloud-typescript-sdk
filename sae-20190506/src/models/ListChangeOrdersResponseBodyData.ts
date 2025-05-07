// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListChangeOrdersResponseBodyDataChangeOrderList } from "./ListChangeOrdersResponseBodyDataChangeOrderList";


export class ListChangeOrdersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The change orders.
   */
  changeOrderList?: ListChangeOrdersResponseBodyDataChangeOrderList[];
  /**
   * @remarks
   * The total number of change orders.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The error code.
   * 
   * *   The **ErrorCode** parameter is not returned when the request succeeds.
   * *   The **ErrorCode** parameter is returned when the request fails. For more information, see **Error codes** in this topic.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of change orders.
   * 
   * @example
   * 1
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      changeOrderList: 'ChangeOrderList',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderList: { 'type': 'array', 'itemType': ListChangeOrdersResponseBodyDataChangeOrderList },
      currentPage: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.changeOrderList)) {
      $dara.Model.validateArray(this.changeOrderList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

