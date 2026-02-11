// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchTracesResponseBodyTraceInfos extends $dara.Model {
  duration?: number;
  operationName?: string;
  serviceIp?: string;
  serviceName?: string;
  timestamp?: number;
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      operationName: 'OperationName',
      serviceIp: 'ServiceIp',
      serviceName: 'ServiceName',
      timestamp: 'Timestamp',
      traceID: 'TraceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      operationName: 'string',
      serviceIp: 'string',
      serviceName: 'string',
      timestamp: 'number',
      traceID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesResponseBody extends $dara.Model {
  requestId?: string;
  traceInfos?: SearchTracesResponseBodyTraceInfos[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      traceInfos: 'TraceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      traceInfos: { 'type': 'array', 'itemType': SearchTracesResponseBodyTraceInfos },
    };
  }

  validate() {
    if(Array.isArray(this.traceInfos)) {
      $dara.Model.validateArray(this.traceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

