// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDomainListNewResponseBodyList } from "./QueryDomainListNewResponseBodyList";


export class QueryDomainListNewResponseBody extends $dara.Model {
  list?: QueryDomainListNewResponseBodyList[];
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryDomainListNewResponseBodyList },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
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

