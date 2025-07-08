// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmsPackageDetailNewResponseBodyList } from "./QuerySmsPackageDetailNewResponseBodyList";


export class QuerySmsPackageDetailNewResponseBody extends $dara.Model {
  list?: QuerySmsPackageDetailNewResponseBodyList;
  pageNo?: number;
  pageSize?: number;
  remainSmsCount?: number;
  requestId?: string;
  total?: number;
  totalSmsCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      remainSmsCount: 'RemainSmsCount',
      requestId: 'RequestId',
      total: 'Total',
      totalSmsCount: 'TotalSmsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: QuerySmsPackageDetailNewResponseBodyList,
      pageNo: 'number',
      pageSize: 'number',
      remainSmsCount: 'number',
      requestId: 'string',
      total: 'number',
      totalSmsCount: 'number',
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

