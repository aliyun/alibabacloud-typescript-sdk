// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryExportSendRecordListNewResponseBodyList } from "./QueryExportSendRecordListNewResponseBodyList";


export class QueryExportSendRecordListNewResponseBody extends $dara.Model {
  list?: QueryExportSendRecordListNewResponseBodyList;
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
      list: QueryExportSendRecordListNewResponseBodyList,
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(this.list && typeof (this.list as any).validate === 'function') {
      (this.list as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

