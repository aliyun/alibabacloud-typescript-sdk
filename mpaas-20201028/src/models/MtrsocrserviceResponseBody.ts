// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MTRSOCRServiceResponseBody extends $dara.Model {
  code?: string;
  msg?: string;
  requestId?: string;
  result?: string;
  status?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      msg: 'Msg',
      requestId: 'RequestId',
      result: 'Result',
      status: 'Status',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
      requestId: 'string',
      result: 'string',
      status: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

