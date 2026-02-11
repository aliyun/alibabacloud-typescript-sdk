// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchTracesByPageResponseBodyPageBeanTraceInfos extends $dara.Model {
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

export class SearchTracesByPageResponseBodyPageBean extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  total?: number;
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
  pageBean?: SearchTracesByPageResponseBodyPageBean;
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

