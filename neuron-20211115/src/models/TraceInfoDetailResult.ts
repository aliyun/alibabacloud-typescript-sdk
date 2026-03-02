// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TraceSpansLogEventList } from "./TraceSpansLogEventList";
import { TagEntry } from "./TagEntry";


/**
 */
export class TraceInfoDetailResultTraceDetails extends $dara.Model {
  children?: { [key: string]: any }[];
  duration?: number;
  haveStack?: boolean;
  logEventList?: TraceSpansLogEventList[];
  operationName?: string;
  parentSpanId?: string;
  resultCode?: string;
  rpcId?: string;
  rpcType?: number;
  rpcTypeName?: string;
  serviceIp?: string;
  serviceName?: string;
  spanId?: string;
  tagEntryList?: TagEntry[];
  timestamp?: number;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'children',
      duration: 'duration',
      haveStack: 'haveStack',
      logEventList: 'logEventList',
      operationName: 'operationName',
      parentSpanId: 'parentSpanId',
      resultCode: 'resultCode',
      rpcId: 'rpcId',
      rpcType: 'rpcType',
      rpcTypeName: 'rpcTypeName',
      serviceIp: 'serviceIp',
      serviceName: 'serviceName',
      spanId: 'spanId',
      tagEntryList: 'tagEntryList',
      timestamp: 'timestamp',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      duration: 'number',
      haveStack: 'boolean',
      logEventList: { 'type': 'array', 'itemType': TraceSpansLogEventList },
      operationName: 'string',
      parentSpanId: 'string',
      resultCode: 'string',
      rpcId: 'string',
      rpcType: 'number',
      rpcTypeName: 'string',
      serviceIp: 'string',
      serviceName: 'string',
      spanId: 'string',
      tagEntryList: { 'type': 'array', 'itemType': TagEntry },
      timestamp: 'number',
      traceId: 'string',
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

export class TraceInfoDetailResult extends $dara.Model {
  traceDetails?: TraceInfoDetailResultTraceDetails[];
  static names(): { [key: string]: string } {
    return {
      traceDetails: 'traceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceDetails: { 'type': 'array', 'itemType': TraceInfoDetailResultTraceDetails },
    };
  }

  validate() {
    if(Array.isArray(this.traceDetails)) {
      $dara.Model.validateArray(this.traceDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

