// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchQueryCreateAccountTraceResponseBodyTraces extends $dara.Model {
  nowLoginEmail?: string;
  pk?: string;
  status?: string;
  traceNo?: string;
  static names(): { [key: string]: string } {
    return {
      nowLoginEmail: 'NowLoginEmail',
      pk: 'Pk',
      status: 'Status',
      traceNo: 'TraceNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nowLoginEmail: 'string',
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

export class BatchQueryCreateAccountTraceResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traces?: BatchQueryCreateAccountTraceResponseBodyTraces[];
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
      success: 'boolean',
      traces: { 'type': 'array', 'itemType': BatchQueryCreateAccountTraceResponseBodyTraces },
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

