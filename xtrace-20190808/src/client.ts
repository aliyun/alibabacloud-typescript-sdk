// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CheckServiceLinkedRoleForDeletingRequest extends $tea.Model {
  roleArn?: string;
  serviceName?: string;
  SPIRegionId?: string;
  deletionTaskId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      roleArn: 'RoleArn',
      serviceName: 'ServiceName',
      SPIRegionId: 'SPIRegionId',
      deletionTaskId: 'DeletionTaskId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleArn: 'string',
      serviceName: 'string',
      SPIRegionId: 'string',
      deletionTaskId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleForDeletingResponseBody extends $tea.Model {
  requestId?: string;
  deletable?: boolean;
  roleUsages?: CheckServiceLinkedRoleForDeletingResponseBodyRoleUsages[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deletable: 'Deletable',
      roleUsages: 'RoleUsages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deletable: 'boolean',
      roleUsages: { 'type': 'array', 'itemType': CheckServiceLinkedRoleForDeletingResponseBodyRoleUsages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleForDeletingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckServiceLinkedRoleForDeletingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckServiceLinkedRoleForDeletingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSamplingRequest extends $tea.Model {
  regionId?: string;
  proxyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      proxyUserId: 'ProxyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      proxyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSamplingResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSamplingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSamplingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSamplingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagKeyRequest extends $tea.Model {
  regionId?: string;
  serviceName?: string;
  spanName?: string;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceName: 'ServiceName',
      spanName: 'SpanName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serviceName: 'string',
      spanName: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagKeyResponseBody extends $tea.Model {
  requestId?: string;
  tagKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
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
  regionId?: string;
  serviceName?: string;
  spanName?: string;
  tagKey?: string;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceName: 'ServiceName',
      spanName: 'SpanName',
      tagKey: 'TagKey',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serviceName: 'string',
      spanName: 'string',
      tagKey: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagValResponseBody extends $tea.Model {
  requestId?: string;
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagValues: 'TagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagValues: { 'type': 'array', 'itemType': 'string' },
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

export class GetTokenRequest extends $tea.Model {
  regionId?: string;
  appType?: string;
  proxyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      appType: 'AppType',
      proxyUserId: 'ProxyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      appType: 'string',
      proxyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponseBody extends $tea.Model {
  requestId?: string;
  token?: GetTokenResponseBodyToken;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      token: GetTokenResponseBodyToken,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceRequest extends $tea.Model {
  traceID?: string;
  appType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      traceID: 'TraceID',
      appType: 'AppType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceID: 'string',
      appType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBody extends $tea.Model {
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

export class GetTraceAnalysisRequest extends $tea.Model {
  regionId?: string;
  api?: string;
  query?: string;
  proxyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      api: 'Api',
      query: 'Query',
      proxyUserId: 'ProxyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      api: 'string',
      query: 'string',
      proxyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceAnalysisResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceAnalysisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTraceAnalysisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTraceAnalysisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpOrHostsRequest extends $tea.Model {
  regionId?: string;
  serviceName?: string;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceName: 'ServiceName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serviceName: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpOrHostsResponseBody extends $tea.Model {
  requestId?: string;
  ipNames?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ipNames: 'IpNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ipNames: { 'type': 'array', 'itemType': 'string' },
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
  regionId?: string;
  appType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      appType: 'AppType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      appType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBody extends $tea.Model {
  services?: ListServicesResponseBodyServices[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      services: 'Services',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      services: { 'type': 'array', 'itemType': ListServicesResponseBodyServices },
      requestId: 'string',
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
  regionId?: string;
  serviceName?: string;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceName: 'ServiceName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serviceName: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpanNamesResponseBody extends $tea.Model {
  spanNames?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      spanNames: 'SpanNames',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spanNames: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
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

export class OpenXtraceServiceResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenXtraceServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpenXtraceServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenXtraceServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMetricRequest extends $tea.Model {
  intervalInSec?: number;
  startTime?: number;
  endTime?: number;
  orderBy?: string;
  limit?: number;
  metric?: string;
  order?: string;
  proxyUserId?: string;
  filters?: QueryMetricRequestFilters[];
  dimensions?: string[];
  measures?: string[];
  static names(): { [key: string]: string } {
    return {
      intervalInSec: 'IntervalInSec',
      startTime: 'StartTime',
      endTime: 'EndTime',
      orderBy: 'OrderBy',
      limit: 'Limit',
      metric: 'Metric',
      order: 'Order',
      proxyUserId: 'ProxyUserId',
      filters: 'Filters',
      dimensions: 'Dimensions',
      measures: 'Measures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intervalInSec: 'number',
      startTime: 'number',
      endTime: 'number',
      orderBy: 'string',
      limit: 'number',
      metric: 'string',
      order: 'string',
      proxyUserId: 'string',
      filters: { 'type': 'array', 'itemType': QueryMetricRequestFilters },
      dimensions: { 'type': 'array', 'itemType': 'string' },
      measures: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMetricResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
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
  startTime?: number;
  endTime?: number;
  regionId?: string;
  serviceName?: string;
  operationName?: string;
  minDuration?: number;
  appType?: string;
  pageNumber?: number;
  pageSize?: number;
  reverse?: boolean;
  serviceIp?: string;
  tag?: SearchTracesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      regionId: 'RegionId',
      serviceName: 'ServiceName',
      operationName: 'OperationName',
      minDuration: 'MinDuration',
      appType: 'AppType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      reverse: 'Reverse',
      serviceIp: 'ServiceIp',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      endTime: 'number',
      regionId: 'string',
      serviceName: 'string',
      operationName: 'string',
      minDuration: 'number',
      appType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      reverse: 'boolean',
      serviceIp: 'string',
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

export class UpdateSamplingRequest extends $tea.Model {
  regionId?: string;
  proxyUserId?: string;
  sampling?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      proxyUserId: 'ProxyUserId',
      sampling: 'Sampling',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      proxyUserId: 'string',
      sampling: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSamplingResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSamplingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSamplingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSamplingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleForDeletingResponseBodyRoleUsages extends $tea.Model {
  region?: string;
  resources?: string[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponseBodyToken extends $tea.Model {
  domain?: string;
  licenseKey?: string;
  internalDomain?: string;
  pid?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      licenseKey: 'LicenseKey',
      internalDomain: 'InternalDomain',
      pid: 'Pid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      licenseKey: 'string',
      internalDomain: 'string',
      pid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodySpansTagEntryList extends $tea.Model {
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

export class GetTraceResponseBodySpansLogEventListTagEntryList extends $tea.Model {
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

export class GetTraceResponseBodySpansLogEventList extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodySpans extends $tea.Model {
  tagEntryList?: GetTraceResponseBodySpansTagEntryList[];
  logEventList?: GetTraceResponseBodySpansLogEventList[];
  haveStack?: boolean;
  serviceIp?: string;
  operationName?: string;
  resultCode?: string;
  duration?: number;
  rpcId?: string;
  timestamp?: number;
  serviceName?: string;
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
      tagEntryList: 'TagEntryList',
      logEventList: 'LogEventList',
      haveStack: 'HaveStack',
      serviceIp: 'ServiceIp',
      operationName: 'OperationName',
      resultCode: 'ResultCode',
      duration: 'Duration',
      rpcId: 'RpcId',
      timestamp: 'Timestamp',
      serviceName: 'ServiceName',
      traceID: 'TraceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagEntryList: { 'type': 'array', 'itemType': GetTraceResponseBodySpansTagEntryList },
      logEventList: { 'type': 'array', 'itemType': GetTraceResponseBodySpansLogEventList },
      haveStack: 'boolean',
      serviceIp: 'string',
      operationName: 'string',
      resultCode: 'string',
      duration: 'number',
      rpcId: 'string',
      timestamp: 'number',
      serviceName: 'string',
      traceID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBodyServices extends $tea.Model {
  pid?: string;
  serviceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pid: 'Pid',
      serviceName: 'ServiceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pid: 'string',
      serviceName: 'string',
      regionId: 'string',
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

export class SearchTracesResponseBodyPageBeanTraceInfos extends $tea.Model {
  operationName?: string;
  serviceIp?: string;
  duration?: number;
  timestamp?: number;
  serviceName?: string;
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
      operationName: 'OperationName',
      serviceIp: 'ServiceIp',
      duration: 'Duration',
      timestamp: 'Timestamp',
      serviceName: 'ServiceName',
      traceID: 'TraceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationName: 'string',
      serviceIp: 'string',
      duration: 'number',
      timestamp: 'number',
      serviceName: 'string',
      traceID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesResponseBodyPageBean extends $tea.Model {
  traceInfos?: SearchTracesResponseBodyPageBeanTraceInfos[];
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      traceInfos: 'TraceInfos',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceInfos: { 'type': 'array', 'itemType': SearchTracesResponseBodyPageBeanTraceInfos },
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
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

  async checkServiceLinkedRoleForDeletingWithOptions(request: CheckServiceLinkedRoleForDeletingRequest, runtime: $Util.RuntimeOptions): Promise<CheckServiceLinkedRoleForDeletingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckServiceLinkedRoleForDeletingResponse>(await this.doRPCRequest("CheckServiceLinkedRoleForDeleting", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new CheckServiceLinkedRoleForDeletingResponse({}));
  }

  async checkServiceLinkedRoleForDeleting(request: CheckServiceLinkedRoleForDeletingRequest): Promise<CheckServiceLinkedRoleForDeletingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkServiceLinkedRoleForDeletingWithOptions(request, runtime);
  }

  async getSamplingWithOptions(request: GetSamplingRequest, runtime: $Util.RuntimeOptions): Promise<GetSamplingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSamplingResponse>(await this.doRPCRequest("GetSampling", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetSamplingResponse({}));
  }

  async getSampling(request: GetSamplingRequest): Promise<GetSamplingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSamplingWithOptions(request, runtime);
  }

  async getTagKeyWithOptions(request: GetTagKeyRequest, runtime: $Util.RuntimeOptions): Promise<GetTagKeyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTagKeyResponse>(await this.doRPCRequest("GetTagKey", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetTagKeyResponse({}));
  }

  async getTagKey(request: GetTagKeyRequest): Promise<GetTagKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTagKeyWithOptions(request, runtime);
  }

  async getTagValWithOptions(request: GetTagValRequest, runtime: $Util.RuntimeOptions): Promise<GetTagValResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTagValResponse>(await this.doRPCRequest("GetTagVal", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetTagValResponse({}));
  }

  async getTagVal(request: GetTagValRequest): Promise<GetTagValResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTagValWithOptions(request, runtime);
  }

  async getTokenWithOptions(request: GetTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTokenResponse>(await this.doRPCRequest("GetToken", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetTokenResponse({}));
  }

  async getToken(request: GetTokenRequest): Promise<GetTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTokenWithOptions(request, runtime);
  }

  async getTraceWithOptions(request: GetTraceRequest, runtime: $Util.RuntimeOptions): Promise<GetTraceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTraceResponse>(await this.doRPCRequest("GetTrace", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetTraceResponse({}));
  }

  async getTrace(request: GetTraceRequest): Promise<GetTraceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTraceWithOptions(request, runtime);
  }

  async getTraceAnalysisWithOptions(request: GetTraceAnalysisRequest, runtime: $Util.RuntimeOptions): Promise<GetTraceAnalysisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTraceAnalysisResponse>(await this.doRPCRequest("GetTraceAnalysis", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetTraceAnalysisResponse({}));
  }

  async getTraceAnalysis(request: GetTraceAnalysisRequest): Promise<GetTraceAnalysisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTraceAnalysisWithOptions(request, runtime);
  }

  async listIpOrHostsWithOptions(request: ListIpOrHostsRequest, runtime: $Util.RuntimeOptions): Promise<ListIpOrHostsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListIpOrHostsResponse>(await this.doRPCRequest("ListIpOrHosts", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListIpOrHostsResponse({}));
  }

  async listIpOrHosts(request: ListIpOrHostsRequest): Promise<ListIpOrHostsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIpOrHostsWithOptions(request, runtime);
  }

  async listServicesWithOptions(request: ListServicesRequest, runtime: $Util.RuntimeOptions): Promise<ListServicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListServicesResponse>(await this.doRPCRequest("ListServices", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListServicesResponse({}));
  }

  async listServices(request: ListServicesRequest): Promise<ListServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServicesWithOptions(request, runtime);
  }

  async listSpanNamesWithOptions(request: ListSpanNamesRequest, runtime: $Util.RuntimeOptions): Promise<ListSpanNamesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSpanNamesResponse>(await this.doRPCRequest("ListSpanNames", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListSpanNamesResponse({}));
  }

  async listSpanNames(request: ListSpanNamesRequest): Promise<ListSpanNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSpanNamesWithOptions(request, runtime);
  }

  async openXtraceServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<OpenXtraceServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<OpenXtraceServiceResponse>(await this.doRPCRequest("OpenXtraceService", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new OpenXtraceServiceResponse({}));
  }

  async openXtraceService(): Promise<OpenXtraceServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openXtraceServiceWithOptions(runtime);
  }

  async queryMetricWithOptions(request: QueryMetricRequest, runtime: $Util.RuntimeOptions): Promise<QueryMetricResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryMetricResponse>(await this.doRPCRequest("QueryMetric", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new QueryMetricResponse({}));
  }

  async queryMetric(request: QueryMetricRequest): Promise<QueryMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMetricWithOptions(request, runtime);
  }

  async searchTracesWithOptions(request: SearchTracesRequest, runtime: $Util.RuntimeOptions): Promise<SearchTracesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchTracesResponse>(await this.doRPCRequest("SearchTraces", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new SearchTracesResponse({}));
  }

  async searchTraces(request: SearchTracesRequest): Promise<SearchTracesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTracesWithOptions(request, runtime);
  }

  async updateSamplingWithOptions(request: UpdateSamplingRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSamplingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSamplingResponse>(await this.doRPCRequest("UpdateSampling", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSamplingResponse({}));
  }

  async updateSampling(request: UpdateSamplingRequest): Promise<UpdateSamplingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSamplingWithOptions(request, runtime);
  }

}
