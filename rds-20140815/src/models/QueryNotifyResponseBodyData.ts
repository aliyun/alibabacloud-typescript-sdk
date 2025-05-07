// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryNotifyResponseBodyDataNotifyItemList } from "./QueryNotifyResponseBodyDataNotifyItemList";


export class QueryNotifyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of notifications.
   */
  notifyItemList?: QueryNotifyResponseBodyDataNotifyItemList[];
  /**
   * @remarks
   * The page number of the page returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 25
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      notifyItemList: 'NotifyItemList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyItemList: { 'type': 'array', 'itemType': QueryNotifyResponseBodyDataNotifyItemList },
      pageNumber: 'number',
      pageSize: 'number',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.notifyItemList)) {
      $dara.Model.validateArray(this.notifyItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

