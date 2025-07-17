// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchTracesByPageResponseBodyPageBeanTraceInfos extends $dara.Model {
  /**
   * @remarks
   * The amount of time consumed by the trace. Unit: milliseconds.
   * 
   * @example
   * 679
   */
  duration?: number;
  /**
   * @remarks
   * The name of the traced span.
   * 
   * @example
   * /demo/queryException/12
   */
  operationName?: string;
  /**
   * @remarks
   * The IP address of the host where the application resides.
   * 
   * @example
   * 172.20.XX.XX
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
   * The span ID of the trace.
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
   * 1595174436994
   */
  timestamp?: number;
  /**
   * @remarks
   * The trace ID.
   * 
   * @example
   * ac1400a115951744369947025d****
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

export class SearchTracesByPageResponseBodyPageBean extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1601
   */
  total?: number;
  /**
   * @remarks
   * The details of the returned traces.
   */
  traceInfos?: SearchTracesByPageResponseBodyPageBeanTraceInfos[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
      traceInfos: 'TraceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
      traceInfos: { 'type': 'array', 'itemType': SearchTracesByPageResponseBodyPageBeanTraceInfos },
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

export class SearchTracesByPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The struct returned.
   */
  pageBean?: SearchTracesByPageResponseBodyPageBean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C518054-852F-4023-ABC1-4AF95FF7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: SearchTracesByPageResponseBodyPageBean,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageBean && typeof (this.pageBean as any).validate === 'function') {
      (this.pageBean as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

