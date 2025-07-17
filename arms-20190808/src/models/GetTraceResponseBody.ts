// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTraceResponseBodySpansLogEventListTagEntryList extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * http.status.code
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * 200
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodySpansLogEventList extends $dara.Model {
  /**
   * @remarks
   * The tags of the trace.
   */
  tagEntryList?: GetTraceResponseBodySpansLogEventListTagEntryList[];
  /**
   * @remarks
   * The timestamp when the log event was generated.
   * 
   * @example
   * 1590388651
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      tagEntryList: 'TagEntryList',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagEntryList: { 'type': 'array', 'itemType': GetTraceResponseBodySpansLogEventListTagEntryList },
      timestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tagEntryList)) {
      $dara.Model.validateArray(this.tagEntryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodySpansTagEntryList extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * http.status.code
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * 200
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodySpans extends $dara.Model {
  /**
   * @remarks
   * The child spans of the current span.
   */
  children?: { [key: string]: any }[];
  /**
   * @remarks
   * The amount of time consumed by the trace. Unit: milliseconds.
   * 
   * @example
   * 1000
   */
  duration?: number;
  /**
   * @remarks
   * Indicates whether a method stack was provided.
   * 
   * *   `true`: A method stack was provided.
   * *   `false`: No method stack was provided.
   * 
   * @example
   * false
   */
  haveStack?: boolean;
  /**
   * @remarks
   * The log events in the trace.
   */
  logEventList?: GetTraceResponseBodySpansLogEventList[];
  /**
   * @remarks
   * The name of the traced span.
   * 
   * @example
   * /api/demo
   */
  operationName?: string;
  /**
   * @remarks
   * The ID of the parent span.
   * 
   * @example
   * 18
   */
  parentSpanId?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 222
   */
  resultCode?: string;
  /**
   * @remarks
   * The ID of the RPC mode.
   * 
   * @example
   * 0
   */
  rpcId?: string;
  /**
   * @remarks
   * The type of the remote procedure call (RPC) mode.
   * 
   * *   0: HTTP entry
   * *   25: HTTP call
   * *   1: High-speed Service Framework (HSF) call
   * *   2: HSF provision
   * *   40: on-premises API call
   * *   60: MySQL call
   * *   62: Oracle call
   * *   63: PostgreSQL call
   * *   70: Redis call
   * *   4: Taobao Distributed Data Layer (TDDL) call
   * *   5: Tair call
   * *   13: MetaQ message sending
   * *   252: MetaQ message receiving
   * *   3: notification sending
   * *   254: notification receiving
   * *   7: Apache Dubbo call
   * *   8: Apache Dubbo provision
   * *   19: SOFARPC call
   * *   18: SOFARPC provision
   * *   11: Distributed Service Framework (DSF) call
   * *   12: DSF provision
   * *   \\-1: unknown call
   * 
   * @example
   * 1
   */
  rpcType?: number;
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
   * arms-demo
   */
  serviceName?: string;
  /**
   * @remarks
   * The span ID.
   * 
   * @example
   * 1234
   */
  spanId?: string;
  /**
   * @remarks
   * The tags of the trace.
   */
  tagEntryList?: GetTraceResponseBodySpansTagEntryList[];
  /**
   * @remarks
   * The timestamp generated when the span was generated.
   * 
   * @example
   * 1590388651
   */
  timestamp?: number;
  /**
   * @remarks
   * The trace ID.
   * 
   * @example
   * ac14001a15954493811405707d****
   */
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      duration: 'Duration',
      haveStack: 'HaveStack',
      logEventList: 'LogEventList',
      operationName: 'OperationName',
      parentSpanId: 'ParentSpanId',
      resultCode: 'ResultCode',
      rpcId: 'RpcId',
      rpcType: 'RpcType',
      serviceIp: 'ServiceIp',
      serviceName: 'ServiceName',
      spanId: 'SpanId',
      tagEntryList: 'TagEntryList',
      timestamp: 'Timestamp',
      traceID: 'TraceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      duration: 'number',
      haveStack: 'boolean',
      logEventList: { 'type': 'array', 'itemType': GetTraceResponseBodySpansLogEventList },
      operationName: 'string',
      parentSpanId: 'string',
      resultCode: 'string',
      rpcId: 'string',
      rpcType: 'number',
      serviceIp: 'string',
      serviceName: 'string',
      spanId: 'string',
      tagEntryList: { 'type': 'array', 'itemType': GetTraceResponseBodySpansTagEntryList },
      timestamp: 'number',
      traceID: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    if(Array.isArray(this.logEventList)) {
      $dara.Model.validateArray(this.logEventList);
    }
    if(Array.isArray(this.tagEntryList)) {
      $dara.Model.validateArray(this.tagEntryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6A9AEA84-7186-4D8D-B498-4585C6A2****
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the trace.
   */
  spans?: GetTraceResponseBodySpans[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spans: 'Spans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spans: { 'type': 'array', 'itemType': GetTraceResponseBodySpans },
    };
  }

  validate() {
    if(Array.isArray(this.spans)) {
      $dara.Model.validateArray(this.spans);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

