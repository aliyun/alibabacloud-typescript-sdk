// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTraceResponseBodySpansLogEventListTagEntryList extends $dara.Model {
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

export class GetTraceResponseBodySpansLogEventList extends $dara.Model {
  tagEntryList?: GetTraceResponseBodySpansLogEventListTagEntryList[];
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

export class GetTraceResponseBodySpans extends $dara.Model {
  duration?: number;
  haveStack?: boolean;
  logEventList?: GetTraceResponseBodySpansLogEventList[];
  operationName?: string;
  parentSpanId?: string;
  resultCode?: string;
  rpcId?: string;
  rpcType?: number;
  serviceIp?: string;
  serviceName?: string;
  spanId?: string;
  tagEntryList?: GetTraceResponseBodySpansTagEntryList[];
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
  requestId?: string;
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

