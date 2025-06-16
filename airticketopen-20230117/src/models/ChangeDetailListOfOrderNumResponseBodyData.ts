// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChangeDetailListOfOrderNumResponseBodyDataList } from "./ChangeDetailListOfOrderNumResponseBodyDataList";
import { ChangeDetailListOfOrderNumResponseBodyDataPagination } from "./ChangeDetailListOfOrderNumResponseBodyDataPagination";


export class ChangeDetailListOfOrderNumResponseBodyData extends $dara.Model {
  list?: ChangeDetailListOfOrderNumResponseBodyDataList[];
  pagination?: ChangeDetailListOfOrderNumResponseBodyDataPagination;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pagination: 'pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ChangeDetailListOfOrderNumResponseBodyDataList },
      pagination: ChangeDetailListOfOrderNumResponseBodyDataPagination,
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

