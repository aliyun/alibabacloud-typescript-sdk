// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryWorkOrdAuditListNewResponseBodyList } from "./QueryWorkOrdAuditListNewResponseBodyList";


export class QueryWorkOrdAuditListNewResponseBody extends $dara.Model {
  list?: QueryWorkOrdAuditListNewResponseBodyList[];
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
      list: { 'type': 'array', 'itemType': QueryWorkOrdAuditListNewResponseBodyList },
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

