// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskMonitorDataResponseBody extends $dara.Model {
  code?: string;
  cursor?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      cursor: 'Cursor',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      cursor: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
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

