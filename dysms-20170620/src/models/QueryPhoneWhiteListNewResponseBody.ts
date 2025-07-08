// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryPhoneWhiteListNewResponseBodyList } from "./QueryPhoneWhiteListNewResponseBodyList";


export class QueryPhoneWhiteListNewResponseBody extends $dara.Model {
  list?: QueryPhoneWhiteListNewResponseBodyList[];
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  totalWithoutFilter?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
      totalWithoutFilter: 'TotalWithoutFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryPhoneWhiteListNewResponseBodyList },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
      totalWithoutFilter: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

