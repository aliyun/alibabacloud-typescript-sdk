// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RefundDetailListResponseBodyDataList } from "./RefundDetailListResponseBodyDataList";
import { RefundDetailListResponseBodyDataPagination } from "./RefundDetailListResponseBodyDataPagination";


export class RefundDetailListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * refund order list
   */
  list?: RefundDetailListResponseBodyDataList[];
  /**
   * @remarks
   * information of pagination
   */
  pagination?: RefundDetailListResponseBodyDataPagination;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pagination: 'pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': RefundDetailListResponseBodyDataList },
      pagination: RefundDetailListResponseBodyDataPagination,
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

