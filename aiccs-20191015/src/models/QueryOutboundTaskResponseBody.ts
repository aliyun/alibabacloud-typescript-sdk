// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryOutboundTaskResponseBodyData } from "./QueryOutboundTaskResponseBodyData";


export class QueryOutboundTaskResponseBody extends $dara.Model {
  code?: string;
  data?: QueryOutboundTaskResponseBodyData;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryOutboundTaskResponseBodyData,
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

