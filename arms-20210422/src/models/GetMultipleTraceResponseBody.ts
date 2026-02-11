// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultipleTraceResponseBodyMultiCallChainInfosSpansLogEventListTagEntryList extends $dara.Model {
  key?: string;
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
  tagEntryList?: GetMultipleTraceResponseBodyMultiCallChainInfosSpansLogEventListTagEntryList[];
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
  key?: string;
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
  duration?: number;
  haveStack?: boolean;
  logEventList?: GetMultipleTraceResponseBodyMultiCallChainInfosSpansLogEventList[];
  operationName?: string;
  parentSpanId?: string;
  resultCode?: string;
  rpcId?: string;
  rpcType?: number;
  serviceIp?: string;
  serviceName?: string;
  spanId?: string;
  tagEntryList?: GetMultipleTraceResponseBodyMultiCallChainInfosSpansTagEntryList[];
  timestamp?: number;
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
  spans?: GetMultipleTraceResponseBodyMultiCallChainInfosSpans[];
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
  multiCallChainInfos?: GetMultipleTraceResponseBodyMultiCallChainInfos[];
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

