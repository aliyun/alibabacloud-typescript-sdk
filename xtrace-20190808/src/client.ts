// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CheckCommercialStatusRequest extends $tea.Model {
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The service code.
   * 
   * This parameter is required.
   * 
   * @example
   * xtrace
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      service: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCommercialStatusResponseBody extends $tea.Model {
  /**
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1E2B6A4C-6B83-4062-8B6F-AEEC1FC47DED
   */
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

export class CheckCommercialStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckCommercialStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckCommercialStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagKeyRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the time range to query. The value is a timestamp that is accurate to milliseconds.
   * 
   * >  The value of this parameter is of the LONG type. Precision loss may occur during serialization or deserialization. The value must be less than or equal to 9007199254740991.
   * 
   * @example
   * 1575622455686
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * appTest
   */
  serviceName?: string;
  /**
   * @remarks
   * The name of the span.
   * 
   * @example
   * createOrder
   */
  spanName?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a timestamp that is accurate to milliseconds.
   * 
   * >  The value of this parameter is of the LONG type. Precision loss may occur during serialization or deserialization. The value must be less than or equal to 9007199254740991.
   * 
   * @example
   * 1575561600000
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1E2B6A4C-6B83-4062-8B6F-AEEC1F******
   */
  requestId?: string;
  /**
   * @remarks
   * The tag keys.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTagKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTagKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagValRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the time range to query. The value is a timestamp that is accurate to milliseconds.
   * 
   * >  This value is of the LONG type, and precision loss may occur during serialization or deserialization. Do not set this parameter to a value greater than 9007199254740991.
   * 
   * @example
   * 1575622455686
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * appTest
   */
  serviceName?: string;
  /**
   * @remarks
   * The name of the span.
   * 
   * @example
   * createOrder
   */
  spanName?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a timestamp that is accurate to milliseconds.
   * 
   * >  This value is of the LONG type, and precision loss may occur during serialization or deserialization. Do not set this parameter to a value greater than 9007199254740991.
   * 
   * @example
   * 1575561600000
   */
  startTime?: number;
  /**
   * @remarks
   * The tag key.
   * 
   * You can call the [GetTagKey](https://help.aliyun.com/document_detail/2399667.html) operation to obtain a tag key.
   * 
   * This parameter is required.
   * 
   * @example
   * span.kind
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1E2B6A4C-6B83-4062-8B6F-AEEC1F******
   */
  requestId?: string;
  /**
   * @remarks
   * The tag values.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTagValResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTagValResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the application. You can leave this parameter empty or set this parameter to `XTRACE`. We recommend that you leave this parameter empty.
   * 
   * *   If you leave this parameter empty, traces reported to Managed Service for OpenTelemetry and Application Real-Time Monitoring Service (ARMS) can be queried.
   * *   If you set this parameter to `XTRACE`, only traces reported to Managed Service for OpenTelemetry can be queried.
   * 
   * @example
   * XTRACE
   */
  appType?: string;
  pageNumber?: number;
  pageSize?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The trace ID, which is the unique identifier of the trace.
   * 
   * You can obtain the trace ID on the **Trace Explorer** page in the Managed Service for OpenTelemetry console or by calling the [SearchTraces](https://help.aliyun.com/document_detail/2399674.html~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1c6881aab84191a4
   */
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      traceID: 'TraceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      pageNumber: 'number',
      pageSize: 'string',
      regionId: 'string',
      traceID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1E2B6A4C-6B83-4062-8B6F-AEEC1F******
   */
  requestId?: string;
  /**
   * @remarks
   * The spans that are contained in the trace.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTraceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTraceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpOrHostsRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the time range to query. The value is a timestamp that is accurate to milliseconds.
   * 
   * @example
   * 1583723776974
   */
  endTime?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the service. If you do not specify this parameter, the IP addresses of all applications in the specified region are returned.
   * 
   * @example
   * service1
   */
  serviceName?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a timestamp that is accurate to milliseconds.
   * 
   * @example
   * 1583683200000
   */
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
  /**
   * @remarks
   * The IP addresses.
   */
  ipNames?: ListIpOrHostsResponseBodyIpNames;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1E2B6A4C-6B83-4062-8B6F-AEEC1FC4****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIpOrHostsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIpOrHostsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the application. You can leave this parameter empty or set this parameter to `XTRACE`. We recommend that you leave this parameter empty.
   * 
   * *   If you leave this parameter empty, applications monitored by Managed Service for OpenTelemetry or Application Real-Time Monitoring Service (ARMS) can be queried.
   * *   If you set this parameter to `XTRACE`, only applications monitored by Managed Service for OpenTelemetry can be queried.
   * 
   * @example
   * XTRACE
   */
  appType?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
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
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * 1E2B6A4C-6B83-4062-8B6F-AEEC1FC47DED
   */
  requestId?: string;
  /**
   * @remarks
   * The applications.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpanNamesRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the time range to query. The value is a timestamp that is accurate to milliseconds.
   * 
   * @example
   * 1575622455686
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * service 1
   */
  serviceName?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a timestamp that is accurate to milliseconds.
   * 
   * @example
   * 1575561600000
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1E2B6A4C-6B83-4062-8B6F-AEEC1F******
   */
  requestId?: string;
  /**
   * @remarks
   * The span names.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSpanNamesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSpanNamesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenXtraceServiceRequest extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenXtraceServiceResponseBody extends $tea.Model {
  /**
   * @example
   * 155709986
   */
  orderId?: string;
  /**
   * @example
   * 1E2B6A4C-6B83-4062-8B6F-AEEC1FC4****
   */
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenXtraceServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenXtraceServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OpenXtraceServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMetricRequest extends $tea.Model {
  /**
   * @remarks
   * The dimensions of the metric that you want to query.
   * 
   * @example
   * RT
   */
  dimensions?: string[];
  /**
   * @remarks
   * The end of the time range to query. The value is a timestamp that is accurate to milliseconds.
   * 
   * >  The value of this parameter is of the LONG type. Precision loss may occur during serialization or deserialization. The value must be less than or equal to 9007199254740991.
   * 
   * This parameter is required.
   * 
   * @example
   * 1575622455686
   */
  endTime?: number;
  /**
   * @remarks
   * The filter conditions.
   */
  filters?: QueryMetricRequestFilters[];
  /**
   * @remarks
   * The time interval at which you want to query metric data. Unit: milliseconds. Minimum value: 60000. 
   * 
   * > If you set this parameter to 2147483647, all data in the specified time interval is returned.
   * 
   * @example
   * 100000
   */
  intervalInSec?: number;
  /**
   * @remarks
   * The maximum number of entries that you want to return.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The measures of the metric that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * count
   */
  measures?: string[];
  /**
   * @remarks
   * The name of the metric. Valid values:
   * 
   * - `appstat.incall`: trace statistics 
   * - `appstat.sql`: SQL statistics
   * 
   * This parameter is required.
   * 
   * @example
   * appstat.incall
   */
  metric?: string;
  /**
   * @remarks
   * The order in which you want to sort the returned entries. Valid values:
   * 
   * - ASC: ascending order 
   * - DESC: descending order
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The field based on which you want to sort the returned entries.
   * 
   * @example
   * count
   */
  orderBy?: string;
  /**
   * @remarks
   * The ID of the proxy user.
   * 
   * @example
   * testefgag12
   */
  proxyUserId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a timestamp that is accurate to milliseconds.
   * 
   * >  The value of this parameter is of the LONG type. Precision loss may occur during serialization or deserialization. The value must be less than or equal to 9007199254740991.
   * 
   * This parameter is required.
   * 
   * @example
   * 1575561600000
   */
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
  /**
   * @remarks
   * The returned statistics.
   * 
   * @example
   * {   "RequestId": "E2373982-D8CD-413D-B991-8EB678******",   "Data": "{\\"data\\":[{\\"date\\":1583686800000,\\"count\\":0,\\"rt\\":0,\\"rpc\\":\\"childSpan3\\"}}
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1E2B6A4C-6B83-4062-8B6F-AEEC1F******
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the application. You can set the value to **XTRACE** or leave this parameter unspecified.
   * 
   * @example
   * XTRACE
   */
  appType?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is a timestamp that is accurate to milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1575622455686
   */
  endTime?: number;
  /**
   * @remarks
   * The minimum value of an execution duration. Unit: seconds. For example, a value of 2 indicates that the traces whose execution duration is more than 2 seconds are queried.
   * 
   * @example
   * 1000
   */
  minDuration?: number;
  /**
   * @remarks
   * The name of the span.
   * 
   * @example
   * /api
   */
  operationName?: string;
  /**
   * @remarks
   * The number of the page to return. For example, a value of 5 indicates page 5.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to sort the query results in chronological order or reverse chronological order. Default value: false. Valid values:
   * 
   * - true: reverse chronological order 
   * - false: chronological order
   * 
   * @example
   * false
   */
  reverse?: boolean;
  /**
   * @remarks
   * The IP address of the server on which the span is running.
   * 
   * @example
   * 10.0.0.0
   */
  serviceIp?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * service 1
   */
  serviceName?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a timestamp that is accurate to milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1575561600000
   */
  startTime?: number;
  statusCode?: string;
  /**
   * @remarks
   * The list of the tags.
   */
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
      statusCode: 'StatusCode',
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
      statusCode: 'string',
      tag: { 'type': 'array', 'itemType': SearchTracesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the returned page.
   */
  pageBean?: SearchTracesResponseBodyPageBean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1E2B6A4C-6B83-4062-8B6F-AEEC1F******
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
      pageBean: SearchTracesResponseBodyPageBean,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchTracesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  /**
   * @remarks
   * The tag key of the log event.
   * 
   * @example
   * logLevel
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the log event.
   * 
   * @example
   * Warning
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
  /**
   * @remarks
   * The tags.
   */
  tagEntryList?: GetTraceResponseBodySpansSpanLogEventListLogEventTagEntryList;
  /**
   * @remarks
   * The timestamp when the log event was generated. Unit: microseconds.
   * 
   * @example
   * 1583683202047000
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
  /**
   * @remarks
   * The tag key of the span.
   * 
   * @example
   * logLevel
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the span.
   * 
   * @example
   * Warning
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
  /**
   * @remarks
   * The duration of the span. Unit: milliseconds.
   * 
   * @example
   * 1000
   */
  duration?: number;
  /**
   * @remarks
   * Indicates whether the span has child spans. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  haveStack?: boolean;
  /**
   * @remarks
   * The log events.
   */
  logEventList?: GetTraceResponseBodySpansSpanLogEventList;
  /**
   * @remarks
   * The name of the span.
   * 
   * @example
   * /api
   */
  operationName?: string;
  /**
   * @remarks
   * The ID of the parent span.
   * 
   * @example
   * fec891bb8f8XXX
   */
  parentSpanId?: string;
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  resultCode?: string;
  /**
   * @remarks
   * The parent-child and sibling relationship between spans. For example, span 1.1 is the parent of span 1.1.1, and span 1.1.2 and span 1.1.1 are siblings.
   * 
   * @example
   * 1.1
   */
  rpcId?: string;
  /**
   * @remarks
   * The IP address of the server on which the span resides.
   * 
   * @example
   * 192.168.XXX.XXX
   */
  serviceIp?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * server1
   */
  serviceName?: string;
  /**
   * @remarks
   * The span ID.
   * 
   * @example
   * fec891bb8f8XXX
   */
  spanId?: string;
  statusCode?: number;
  /**
   * @remarks
   * The tags.
   */
  tagEntryList?: GetTraceResponseBodySpansSpanTagEntryList;
  /**
   * @remarks
   * The timestamp when the span was generated. Unit: microseconds.
   * 
   * @example
   * 1689845513298000
   */
  timestamp?: number;
  /**
   * @remarks
   * The trace ID, which is the unique identifier of the trace.
   * 
   * @example
   * 1c6881aab84191a4****
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
      serviceIp: 'ServiceIp',
      serviceName: 'ServiceName',
      spanId: 'SpanId',
      statusCode: 'StatusCode',
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
      statusCode: 'number',
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * XXXqn3ly@741623b4e915df8
   */
  pid?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * a3
   */
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
  /**
   * @remarks
   * The key of the field that you want to use to filter the returned entries.
   * 
   * @example
   * http.status_code
   */
  key?: string;
  /**
   * @remarks
   * The value of the field that you want to use to filter the returned entries.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * http.status_cod
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesResponseBodyPageBeanTraceInfosTraceInfo extends $tea.Model {
  /**
   * @remarks
   * The execution duration. Unit: seconds.
   * 
   * @example
   * 100
   */
  duration?: number;
  /**
   * @remarks
   * The span name.
   * 
   * @example
   * /api
   */
  operationName?: string;
  /**
   * @remarks
   * The IP address or name of the server on which the span is running.
   * 
   * @example
   * 192.163.XXX.XXX
   */
  serviceIp?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * service1
   */
  serviceName?: string;
  statusCode?: number;
  /**
   * @remarks
   * The tag information.
   * 
   * @example
   * {"env":"dev"}
   */
  tagMap?: { [key: string]: any };
  /**
   * @remarks
   * The timestamp when the span was generated. Unit: millisecond.
   * 
   * @example
   * 1575561600000000
   */
  timestamp?: number;
  /**
   * @remarks
   * The trace ID.
   * 
   * @example
   * 1c6881aab84191a4
   */
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      operationName: 'OperationName',
      serviceIp: 'ServiceIp',
      serviceName: 'ServiceName',
      statusCode: 'StatusCode',
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
      statusCode: 'number',
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
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  /**
   * @remarks
   * The information about the traces that are returned.
   */
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

  /**
   * 检查商业化状态
   * 
   * @param request - CheckCommercialStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckCommercialStatusResponse
   */
  async checkCommercialStatusWithOptions(request: CheckCommercialStatusRequest, runtime: $Util.RuntimeOptions): Promise<CheckCommercialStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.service)) {
      query["Service"] = request.service;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckCommercialStatus",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckCommercialStatusResponse>(await this.callApi(params, req, runtime), new CheckCommercialStatusResponse({}));
  }

  /**
   * 检查商业化状态
   * 
   * @param request - CheckCommercialStatusRequest
   * @returns CheckCommercialStatusResponse
   */
  async checkCommercialStatus(request: CheckCommercialStatusRequest): Promise<CheckCommercialStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkCommercialStatusWithOptions(request, runtime);
  }

  /**
   * Queries tag keys.
   * 
   * @param request - GetTagKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTagKeyResponse
   */
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

  /**
   * Queries tag keys.
   * 
   * @param request - GetTagKeyRequest
   * @returns GetTagKeyResponse
   */
  async getTagKey(request: GetTagKeyRequest): Promise<GetTagKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTagKeyWithOptions(request, runtime);
  }

  /**
   * Queries the tag values that correspond to a tag key.
   * 
   * @param request - GetTagValRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTagValResponse
   */
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

  /**
   * Queries the tag values that correspond to a tag key.
   * 
   * @param request - GetTagValRequest
   * @returns GetTagValResponse
   */
  async getTagVal(request: GetTagValRequest): Promise<GetTagValResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTagValWithOptions(request, runtime);
  }

  /**
   * Queries the details of a trace.
   * 
   * @param request - GetTraceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTraceResponse
   */
  async getTraceWithOptions(request: GetTraceRequest, runtime: $Util.RuntimeOptions): Promise<GetTraceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appType)) {
      query["AppType"] = request.appType;
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

  /**
   * Queries the details of a trace.
   * 
   * @param request - GetTraceRequest
   * @returns GetTraceResponse
   */
  async getTrace(request: GetTraceRequest): Promise<GetTraceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTraceWithOptions(request, runtime);
  }

  /**
   * Queries IP addresses or hostnames in trace data. You can obtain all IP addresses of an application or in a region.
   * 
   * @param request - ListIpOrHostsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIpOrHostsResponse
   */
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

  /**
   * Queries IP addresses or hostnames in trace data. You can obtain all IP addresses of an application or in a region.
   * 
   * @param request - ListIpOrHostsRequest
   * @returns ListIpOrHostsResponse
   */
  async listIpOrHosts(request: ListIpOrHostsRequest): Promise<ListIpOrHostsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIpOrHostsWithOptions(request, runtime);
  }

  /**
   * Queries applications.
   * 
   * @param request - ListServicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServicesResponse
   */
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

  /**
   * Queries applications.
   * 
   * @param request - ListServicesRequest
   * @returns ListServicesResponse
   */
  async listServices(request: ListServicesRequest): Promise<ListServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServicesWithOptions(request, runtime);
  }

  /**
   * Queries all span names in a specified region or all span names of a microservice.
   * 
   * @param request - ListSpanNamesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSpanNamesResponse
   */
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

  /**
   * Queries all span names in a specified region or all span names of a microservice.
   * 
   * @param request - ListSpanNamesRequest
   * @returns ListSpanNamesResponse
   */
  async listSpanNames(request: ListSpanNamesRequest): Promise<ListSpanNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSpanNamesWithOptions(request, runtime);
  }

  /**
   * Activates Managed Service for OpenTelemetry.
   * 
   * @param request - OpenXtraceServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenXtraceServiceResponse
   */
  async openXtraceServiceWithOptions(request: OpenXtraceServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenXtraceServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OpenXtraceService",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenXtraceServiceResponse>(await this.callApi(params, req, runtime), new OpenXtraceServiceResponse({}));
  }

  /**
   * Activates Managed Service for OpenTelemetry.
   * 
   * @param request - OpenXtraceServiceRequest
   * @returns OpenXtraceServiceResponse
   */
  async openXtraceService(request: OpenXtraceServiceRequest): Promise<OpenXtraceServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openXtraceServiceWithOptions(request, runtime);
  }

  /**
   * Queries a metric.
   * 
   * @param request - QueryMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMetricResponse
   */
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

  /**
   * Queries a metric.
   * 
   * @param request - QueryMetricRequest
   * @returns QueryMetricResponse
   */
  async queryMetric(request: QueryMetricRequest): Promise<QueryMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMetricWithOptions(request, runtime);
  }

  /**
   * Queries traces by time, application name, IP address, span name, and tag.
   * 
   * @param request - SearchTracesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchTracesResponse
   */
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

    if (!Util.isUnset(request.statusCode)) {
      query["StatusCode"] = request.statusCode;
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

  /**
   * Queries traces by time, application name, IP address, span name, and tag.
   * 
   * @param request - SearchTracesRequest
   * @returns SearchTracesResponse
   */
  async searchTraces(request: SearchTracesRequest): Promise<SearchTracesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTracesWithOptions(request, runtime);
  }

}
