// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchTracesResponseBodyTraceInfos extends $dara.Model {
  /**
   * @remarks
   * The amount of time consumed by the trace. Unit: milliseconds.
   * 
   * @example
   * 6
   */
  duration?: number;
  /**
   * @remarks
   * The name of the traced span.
   * 
   * @example
   * get***
   */
  operationName?: string;
  /**
   * @remarks
   * The IP address of the host where the application resides.
   * 
   * @example
   * ``172.20.**.**``
   */
  serviceIp?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * arms-k8s-demo-subcomponent
   */
  serviceName?: string;
  /**
   * @remarks
   * Span ID. You can get it from the **Trace Explorer** page of the ARMS console.
   * 
   * @example
   * be3d6dcf5750e***
   */
  spanID?: string;
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 1595174436993
   */
  timestamp?: number;
  /**
   * @remarks
   * The trace ID.
   * 
   * @example
   * ac1400a115951744369937024d****
   */
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      operationName: 'OperationName',
      serviceIp: 'ServiceIp',
      serviceName: 'ServiceName',
      spanID: 'SpanID',
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
      spanID: 'string',
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C518054-852F-4023-ABC1-4AF95FF7****
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the returned traces.
   */
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

