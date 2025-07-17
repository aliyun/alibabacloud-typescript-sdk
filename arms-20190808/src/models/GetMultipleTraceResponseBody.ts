// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultipleTraceResponseBodyMultiCallChainInfosSpansLogEventListTagEntryList extends $dara.Model {
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

export class GetMultipleTraceResponseBodyMultiCallChainInfosSpansLogEventList extends $dara.Model {
  /**
   * @remarks
   * The tags of the trace.
   */
  tagEntryList?: GetMultipleTraceResponseBodyMultiCallChainInfosSpansLogEventListTagEntryList[];
  /**
   * @remarks
   * The time when the log was generated. The value is a timestamp.
   * 
   * @example
   * 1595174501747
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
      tagEntryList: { 'type': 'array', 'itemType': GetMultipleTraceResponseBodyMultiCallChainInfosSpansLogEventListTagEntryList },
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

export class GetMultipleTraceResponseBodyMultiCallChainInfosSpansTagEntryList extends $dara.Model {
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

export class GetMultipleTraceResponseBodyMultiCallChainInfosSpans extends $dara.Model {
  /**
   * @remarks
   * The amount of time consumed by the trace. Unit: milliseconds.
   * 
   * @example
   * 11
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
   * true
   */
  haveStack?: boolean;
  /**
   * @remarks
   * The log events in the trace.
   */
  logEventList?: GetMultipleTraceResponseBodyMultiCallChainInfosSpansLogEventList[];
  /**
   * @remarks
   * The name of the traced span.
   * 
   * @example
   * /demo/queryNotExistDB/11
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
   * The status code returned.
   * 
   * @example
   * 1
   */
  resultCode?: string;
  /**
   * @remarks
   * RPC ID
   * 
   * @example
   * 0.1
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
   * 0
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
   * arms-k8s-demo-subcomponent
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
  tagEntryList?: GetMultipleTraceResponseBodyMultiCallChainInfosSpansTagEntryList[];
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 1595174501747
   */
  timestamp?: number;
  /**
   * @remarks
   * The trace ID.
   * 
   * @example
   * ac1400a115951745017447033d****
   */
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
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
      duration: 'number',
      haveStack: 'boolean',
      logEventList: { 'type': 'array', 'itemType': GetMultipleTraceResponseBodyMultiCallChainInfosSpansLogEventList },
      operationName: 'string',
      parentSpanId: 'string',
      resultCode: 'string',
      rpcId: 'string',
      rpcType: 'number',
      serviceIp: 'string',
      serviceName: 'string',
      spanId: 'string',
      tagEntryList: { 'type': 'array', 'itemType': GetMultipleTraceResponseBodyMultiCallChainInfosSpansTagEntryList },
      timestamp: 'number',
      traceID: 'string',
    };
  }

  validate() {
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

export class GetMultipleTraceResponseBodyMultiCallChainInfos extends $dara.Model {
  /**
   * @remarks
   * The details of the trace.
   */
  spans?: GetMultipleTraceResponseBodyMultiCallChainInfosSpans[];
  /**
   * @remarks
   * The trace ID.
   * 
   * @example
   * ac1400a115951745017447033d****
   */
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
      spans: 'Spans',
      traceID: 'TraceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spans: { 'type': 'array', 'itemType': GetMultipleTraceResponseBodyMultiCallChainInfosSpans },
      traceID: 'string',
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

export class GetMultipleTraceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of traces.
   */
  multiCallChainInfos?: GetMultipleTraceResponseBodyMultiCallChainInfos[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2983BEF7-4A0D-47A2-94A2-8E9C5E63****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      multiCallChainInfos: 'MultiCallChainInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multiCallChainInfos: { 'type': 'array', 'itemType': GetMultipleTraceResponseBodyMultiCallChainInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.multiCallChainInfos)) {
      $dara.Model.validateArray(this.multiCallChainInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

