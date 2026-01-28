// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CallChainInfo extends $dara.Model {
  additionalInfo?: string;
  appName?: string;
  appType?: string;
  children?: CallChainInfo[];
  haveSpan?: boolean;
  logMap?: { [key: string]: {[key: string]: any} };
  logTime?: number;
  parentSpanId?: string;
  pid?: string;
  regionId?: string;
  resultCode?: string;
  rpc?: string;
  rpcId?: string;
  rpcType?: number;
  serverIp?: string;
  span?: number;
  spanId?: string;
  tagMap?: { [key: string]: string };
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalInfo: 'AdditionalInfo',
      appName: 'AppName',
      appType: 'AppType',
      children: 'Children',
      haveSpan: 'HaveSpan',
      logMap: 'LogMap',
      logTime: 'LogTime',
      parentSpanId: 'ParentSpanId',
      pid: 'Pid',
      regionId: 'RegionId',
      resultCode: 'ResultCode',
      rpc: 'Rpc',
      rpcId: 'RpcId',
      rpcType: 'RpcType',
      serverIp: 'ServerIp',
      span: 'Span',
      spanId: 'SpanId',
      tagMap: 'TagMap',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalInfo: 'string',
      appName: 'string',
      appType: 'string',
      children: { 'type': 'array', 'itemType': CallChainInfo },
      haveSpan: 'boolean',
      logMap: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      logTime: 'number',
      parentSpanId: 'string',
      pid: 'string',
      regionId: 'string',
      resultCode: 'string',
      rpc: 'string',
      rpcId: 'string',
      rpcType: 'number',
      serverIp: 'string',
      span: 'number',
      spanId: 'string',
      tagMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    if(this.logMap) {
      $dara.Model.validateMap(this.logMap);
    }
    if(this.tagMap) {
      $dara.Model.validateMap(this.tagMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

