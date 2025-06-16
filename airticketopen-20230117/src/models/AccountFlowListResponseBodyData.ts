// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AccountFlowListResponseBodyDataList } from "./AccountFlowListResponseBodyDataList";
import { AccountFlowListResponseBodyDataPagination } from "./AccountFlowListResponseBodyDataPagination";


export class AccountFlowListResponseBodyData extends $dara.Model {
  list?: AccountFlowListResponseBodyDataList[];
  pagination?: AccountFlowListResponseBodyDataPagination;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pagination: 'pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': AccountFlowListResponseBodyDataList },
      pagination: AccountFlowListResponseBodyDataPagination,
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

