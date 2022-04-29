// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetTagKeyRequest extends $tea.Model {
  endTime?: number;
  regionId?: string;
  serviceName?: string;
  spanName?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      regionId: 'RegionId',
      serviceName: 'ServiceName',
      spanName: 'SpanName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      regionId: 'string',
      serviceName: 'string',
      spanName: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagKeyResponseBody extends $tea.Model {
  requestId?: string;
  tagKeys?: GetTagKeyResponseBodyTagKeys;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagKeys: GetTagKeyResponseBodyTagKeys,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTagKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTagKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagValRequest extends $tea.Model {
  endTime?: number;
  regionId?: string;
  serviceName?: string;
  spanName?: string;
  startTime?: number;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      regionId: 'RegionId',
      serviceName: 'ServiceName',
      spanName: 'SpanName',
      startTime: 'StartTime',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      regionId: 'string',
      serviceName: 'string',
      spanName: 'string',
      startTime: 'number',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagValResponseBody extends $tea.Model {
  requestId?: string;
  tagValues?: GetTagValResponseBodyTagValues;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagValues: 'TagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagValues: GetTagValResponseBodyTagValues,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagValResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTagValResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTagValResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceRequest extends $tea.Model {
  appType?: string;
  regionId?: string;
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      regionId: 'RegionId',
      traceID: 'TraceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      regionId: 'string',
      traceID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBody extends $tea.Model {
  requestId?: string;
  spans?: GetTraceResponseBodySpans;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spans: 'Spans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spans: GetTraceResponseBodySpans,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTraceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTraceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpOrHostsRequest extends $tea.Model {
  endTime?: number;
  regionId?: string;
  serviceName?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      regionId: 'RegionId',
      serviceName: 'ServiceName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      regionId: 'string',
      serviceName: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpOrHostsResponseBody extends $tea.Model {
  ipNames?: ListIpOrHostsResponseBodyIpNames;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipNames: 'IpNames',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipNames: ListIpOrHostsResponseBodyIpNames,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpOrHostsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListIpOrHostsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListIpOrHostsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequest extends $tea.Model {
  appType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBody extends $tea.Model {
  requestId?: string;
  services?: ListServicesResponseBodyServices;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      services: 'Services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      services: ListServicesResponseBodyServices,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpanNamesRequest extends $tea.Model {
  endTime?: number;
  regionId?: string;
  serviceName?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      regionId: 'RegionId',
      serviceName: 'ServiceName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      regionId: 'string',
      serviceName: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpanNamesResponseBody extends $tea.Model {
  requestId?: string;
  spanNames?: ListSpanNamesResponseBodySpanNames;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spanNames: 'SpanNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spanNames: ListSpanNamesResponseBodySpanNames,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpanNamesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSpanNamesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSpanNamesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMetricRequest extends $tea.Model {
  dimensions?: string[];
  endTime?: number;
  filters?: QueryMetricRequestFilters[];
  intervalInSec?: number;
  limit?: number;
  measures?: string[];
  metric?: string;
  order?: string;
  orderBy?: string;
  proxyUserId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      filters: 'Filters',
      intervalInSec: 'IntervalInSec',
      limit: 'Limit',
      measures: 'Measures',
      metric: 'Metric',
      order: 'Order',
      orderBy: 'OrderBy',
      proxyUserId: 'ProxyUserId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: { 'type': 'array', 'itemType': 'string' },
      endTime: 'number',
      filters: { 'type': 'array', 'itemType': QueryMetricRequestFilters },
      intervalInSec: 'number',
      limit: 'number',
      measures: { 'type': 'array', 'itemType': 'string' },
      metric: 'string',
      order: 'string',
      orderBy: 'string',
      proxyUserId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMetricResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMetricResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesRequest extends $tea.Model {
  appType?: string;
  endTime?: number;
  minDuration?: number;
  operationName?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  reverse?: boolean;
  serviceIp?: string;
  serviceName?: string;
  startTime?: number;
  tag?: SearchTracesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      endTime: 'EndTime',
      minDuration: 'MinDuration',
      operationName: 'OperationName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      reverse: 'Reverse',
      serviceIp: 'ServiceIp',
      serviceName: 'ServiceName',
      startTime: 'StartTime',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      endTime: 'number',
      minDuration: 'number',
      operationName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      reverse: 'boolean',
      serviceIp: 'string',
      serviceName: 'string',
      startTime: 'number',
      tag: { 'type': 'array', 'itemType': SearchTracesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesResponseBody extends $tea.Model {
  pageBean?: SearchTracesResponseBodyPageBean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: SearchTracesResponseBodyPageBean,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchTracesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchTracesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagKeyResponseBodyTagKeys extends $tea.Model {
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagValResponseBodyTagValues extends $tea.Model {
  tagValue?: string[];
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodySpansSpanLogEventListLogEventTagEntryListTagEntry extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodySpansSpanLogEventListLogEventTagEntryList extends $tea.Model {
  tagEntry?: GetTraceResponseBodySpansSpanLogEventListLogEventTagEntryListTagEntry[];
  static names(): { [key: string]: string } {
    return {
      tagEntry: 'TagEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagEntry: { 'type': 'array', 'itemType': GetTraceResponseBodySpansSpanLogEventListLogEventTagEntryListTagEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodySpansSpanLogEventListLogEvent extends $tea.Model {
  tagEntryList?: GetTraceResponseBodySpansSpanLogEventListLogEventTagEntryList;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      tagEntryList: 'TagEntryList',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagEntryList: GetTraceResponseBodySpansSpanLogEventListLogEventTagEntryList,
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodySpansSpanLogEventList extends $tea.Model {
  logEvent?: GetTraceResponseBodySpansSpanLogEventListLogEvent[];
  static names(): { [key: string]: string } {
    return {
      logEvent: 'LogEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logEvent: { 'type': 'array', 'itemType': GetTraceResponseBodySpansSpanLogEventListLogEvent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodySpansSpanTagEntryListTagEntry extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodySpansSpanTagEntryList extends $tea.Model {
  tagEntry?: GetTraceResponseBodySpansSpanTagEntryListTagEntry[];
  static names(): { [key: string]: string } {
    return {
      tagEntry: 'TagEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagEntry: { 'type': 'array', 'itemType': GetTraceResponseBodySpansSpanTagEntryListTagEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodySpansSpan extends $tea.Model {
  duration?: number;
  haveStack?: boolean;
  logEventList?: GetTraceResponseBodySpansSpanLogEventList;
  operationName?: string;
  parentSpanId?: string;
  resultCode?: string;
  rpcId?: string;
  serviceIp?: string;
  serviceName?: string;
  spanId?: string;
  tagEntryList?: GetTraceResponseBodySpansSpanTagEntryList;
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
      logEventList: GetTraceResponseBodySpansSpanLogEventList,
      operationName: 'string',
      parentSpanId: 'string',
      resultCode: 'string',
      rpcId: 'string',
      serviceIp: 'string',
      serviceName: 'string',
      spanId: 'string',
      tagEntryList: GetTraceResponseBodySpansSpanTagEntryList,
      timestamp: 'number',
      traceID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodySpans extends $tea.Model {
  span?: GetTraceResponseBodySpansSpan[];
  static names(): { [key: string]: string } {
    return {
      span: 'Span',
    };
  }

  static types(): { [key: string]: any } {
    return {
      span: { 'type': 'array', 'itemType': GetTraceResponseBodySpansSpan },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpOrHostsResponseBodyIpNames extends $tea.Model {
  ipName?: string[];
  static names(): { [key: string]: string } {
    return {
      ipName: 'IpName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBodyServicesService extends $tea.Model {
  pid?: string;
  regionId?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      pid: 'Pid',
      regionId: 'RegionId',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pid: 'string',
      regionId: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBodyServices extends $tea.Model {
  service?: ListServicesResponseBodyServicesService[];
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: { 'type': 'array', 'itemType': ListServicesResponseBodyServicesService },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpanNamesResponseBodySpanNames extends $tea.Model {
  spanName?: string[];
  static names(): { [key: string]: string } {
    return {
      spanName: 'SpanName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spanName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMetricRequestFilters extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesResponseBodyPageBeanTraceInfosTraceInfo extends $tea.Model {
  duration?: number;
  operationName?: string;
  serviceIp?: string;
  serviceName?: string;
  tagMap?: { [key: string]: any };
  timestamp?: number;
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      operationName: 'OperationName',
      serviceIp: 'ServiceIp',
      serviceName: 'ServiceName',
      tagMap: 'TagMap',
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
      tagMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      timestamp: 'number',
      traceID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesResponseBodyPageBeanTraceInfos extends $tea.Model {
  traceInfo?: SearchTracesResponseBodyPageBeanTraceInfosTraceInfo[];
  static names(): { [key: string]: string } {
    return {
      traceInfo: 'TraceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceInfo: { 'type': 'array', 'itemType': SearchTracesResponseBodyPageBeanTraceInfosTraceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesResponseBodyPageBean extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  traceInfos?: SearchTracesResponseBodyPageBeanTraceInfos;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      traceInfos: 'TraceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      traceInfos: SearchTracesResponseBodyPageBeanTraceInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("xtrace", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async getTagKeyWithOptions(request: GetTagKeyRequest, runtime: $Util.RuntimeOptions): Promise<GetTagKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.spanName)) {
      query["SpanName"] = request.spanName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTagKey",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTagKeyResponse>(await this.callApi(params, req, runtime), new GetTagKeyResponse({}));
  }

  async getTagKey(request: GetTagKeyRequest): Promise<GetTagKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTagKeyWithOptions(request, runtime);
  }

  async getTagValWithOptions(request: GetTagValRequest, runtime: $Util.RuntimeOptions): Promise<GetTagValResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.spanName)) {
      query["SpanName"] = request.spanName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTagVal",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTagValResponse>(await this.callApi(params, req, runtime), new GetTagValResponse({}));
  }

  async getTagVal(request: GetTagValRequest): Promise<GetTagValResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTagValWithOptions(request, runtime);
  }

  async getTraceWithOptions(request: GetTraceRequest, runtime: $Util.RuntimeOptions): Promise<GetTraceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.traceID)) {
      query["TraceID"] = request.traceID;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTrace",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTraceResponse>(await this.callApi(params, req, runtime), new GetTraceResponse({}));
  }

  async getTrace(request: GetTraceRequest): Promise<GetTraceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTraceWithOptions(request, runtime);
  }

  async listIpOrHostsWithOptions(request: ListIpOrHostsRequest, runtime: $Util.RuntimeOptions): Promise<ListIpOrHostsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListIpOrHosts",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListIpOrHostsResponse>(await this.callApi(params, req, runtime), new ListIpOrHostsResponse({}));
  }

  async listIpOrHosts(request: ListIpOrHostsRequest): Promise<ListIpOrHostsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIpOrHostsWithOptions(request, runtime);
  }

  async listServicesWithOptions(request: ListServicesRequest, runtime: $Util.RuntimeOptions): Promise<ListServicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListServices",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListServicesResponse>(await this.callApi(params, req, runtime), new ListServicesResponse({}));
  }

  async listServices(request: ListServicesRequest): Promise<ListServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServicesWithOptions(request, runtime);
  }

  async listSpanNamesWithOptions(request: ListSpanNamesRequest, runtime: $Util.RuntimeOptions): Promise<ListSpanNamesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSpanNames",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSpanNamesResponse>(await this.callApi(params, req, runtime), new ListSpanNamesResponse({}));
  }

  async listSpanNames(request: ListSpanNamesRequest): Promise<ListSpanNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSpanNamesWithOptions(request, runtime);
  }

  async queryMetricWithOptions(request: QueryMetricRequest, runtime: $Util.RuntimeOptions): Promise<QueryMetricResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!Util.isUnset(request.intervalInSec)) {
      query["IntervalInSec"] = request.intervalInSec;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.measures)) {
      query["Measures"] = request.measures;
    }

    if (!Util.isUnset(request.metric)) {
      query["Metric"] = request.metric;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.proxyUserId)) {
      query["ProxyUserId"] = request.proxyUserId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMetric",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMetricResponse>(await this.callApi(params, req, runtime), new QueryMetricResponse({}));
  }

  async queryMetric(request: QueryMetricRequest): Promise<QueryMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMetricWithOptions(request, runtime);
  }

  async searchTracesWithOptions(request: SearchTracesRequest, runtime: $Util.RuntimeOptions): Promise<SearchTracesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.minDuration)) {
      query["MinDuration"] = request.minDuration;
    }

    if (!Util.isUnset(request.operationName)) {
      query["OperationName"] = request.operationName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    if (!Util.isUnset(request.serviceIp)) {
      query["ServiceIp"] = request.serviceIp;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchTraces",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchTracesResponse>(await this.callApi(params, req, runtime), new SearchTracesResponse({}));
  }

  async searchTraces(request: SearchTracesRequest): Promise<SearchTracesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTracesWithOptions(request, runtime);
  }

}
