// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySendFailDetailsNewResponseBodyList } from "./QuerySendFailDetailsNewResponseBodyList";


export class QuerySendFailDetailsNewResponseBody extends $dara.Model {
  applyDateStr?: string;
  billCount?: number;
  bizType?: number;
  innerErrCode?: string;
  list?: QuerySendFailDetailsNewResponseBodyList;
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  smsLength?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      applyDateStr: 'ApplyDateStr',
      billCount: 'BillCount',
      bizType: 'BizType',
      innerErrCode: 'InnerErrCode',
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      smsLength: 'SmsLength',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyDateStr: 'string',
      billCount: 'number',
      bizType: 'number',
      innerErrCode: 'string',
      list: QuerySendFailDetailsNewResponseBodyList,
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      smsLength: 'number',
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

