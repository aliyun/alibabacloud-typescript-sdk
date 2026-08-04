// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchQueryModifyLoginEmailTraceResponseBodyTraces extends $dara.Model {
  newLoginEmail?: string;
  nowLoginEmail?: string;
  oldLoginEmail?: string;
  pk?: string;
  status?: string;
  traceNo?: string;
  static names(): { [key: string]: string } {
    return {
      newLoginEmail: 'NewLoginEmail',
      nowLoginEmail: 'NowLoginEmail',
      oldLoginEmail: 'OldLoginEmail',
      pk: 'Pk',
      status: 'Status',
      traceNo: 'TraceNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newLoginEmail: 'string',
      nowLoginEmail: 'string',
      oldLoginEmail: 'string',
      pk: 'string',
      status: 'string',
      traceNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryModifyLoginEmailTraceResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: string;
  traces?: BatchQueryModifyLoginEmailTraceResponseBodyTraces[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traces: 'Traces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
      traces: { 'type': 'array', 'itemType': BatchQueryModifyLoginEmailTraceResponseBodyTraces },
    };
  }

  validate() {
    if(Array.isArray(this.traces)) {
      $dara.Model.validateArray(this.traces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

