// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmsSignListNewResponseBodySmsSign } from "./QuerySmsSignListNewResponseBodySmsSign";


export class QuerySmsSignListNewResponseBody extends $dara.Model {
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  smsSign?: QuerySmsSignListNewResponseBodySmsSign;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      smsSign: 'SmsSign',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      smsSign: QuerySmsSignListNewResponseBodySmsSign,
      total: 'number',
    };
  }

  validate() {
    if(this.smsSign && typeof (this.smsSign as any).validate === 'function') {
      (this.smsSign as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

