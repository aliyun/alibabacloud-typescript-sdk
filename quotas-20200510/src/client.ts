// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateQuotaAlarmRequest extends $tea.Model {
  productCode?: string;
  quotaActionCode?: string;
  alarmName?: string;
  threshold?: number;
  thresholdPercent?: number;
  webHook?: string;
  quotaDimensions?: CreateQuotaAlarmRequestQuotaDimensions[];
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      alarmName: 'AlarmName',
      threshold: 'Threshold',
      thresholdPercent: 'ThresholdPercent',
      webHook: 'WebHook',
      quotaDimensions: 'QuotaDimensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      quotaActionCode: 'string',
      alarmName: 'string',
      threshold: 'number',
      thresholdPercent: 'number',
      webHook: 'string',
      quotaDimensions: { 'type': 'array', 'itemType': CreateQuotaAlarmRequestQuotaDimensions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaAlarmResponseBody extends $tea.Model {
  alarmId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaAlarmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateQuotaAlarmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateQuotaAlarmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaApplicationRequest extends $tea.Model {
  productCode?: string;
  quotaActionCode?: string;
  desireValue?: number;
  reason?: string;
  noticeType?: number;
  dimensions?: CreateQuotaApplicationRequestDimensions[];
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      desireValue: 'DesireValue',
      reason: 'Reason',
      noticeType: 'NoticeType',
      dimensions: 'Dimensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      quotaActionCode: 'string',
      desireValue: 'number',
      reason: 'string',
      noticeType: 'number',
      dimensions: { 'type': 'array', 'itemType': CreateQuotaApplicationRequestDimensions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaApplicationResponseBody extends $tea.Model {
  requestId?: string;
  applicationId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      applicationId: 'ApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      applicationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateQuotaApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateQuotaApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQuotaAlarmRequest extends $tea.Model {
  alarmId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQuotaAlarmResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQuotaAlarmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteQuotaAlarmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteQuotaAlarmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductQuotaRequest extends $tea.Model {
  productCode?: string;
  quotaActionCode?: string;
  dimensions?: GetProductQuotaRequestDimensions[];
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      dimensions: 'Dimensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      quotaActionCode: 'string',
      dimensions: { 'type': 'array', 'itemType': GetProductQuotaRequestDimensions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductQuotaResponseBody extends $tea.Model {
  requestId?: string;
  quota?: GetProductQuotaResponseBodyQuota;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      quota: 'Quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      quota: GetProductQuotaResponseBodyQuota,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetProductQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetProductQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductQuotaDimensionRequest extends $tea.Model {
  productCode?: string;
  dimensionKey?: string;
  dependentDimensions?: GetProductQuotaDimensionRequestDependentDimensions[];
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      dimensionKey: 'DimensionKey',
      dependentDimensions: 'DependentDimensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      dimensionKey: 'string',
      dependentDimensions: { 'type': 'array', 'itemType': GetProductQuotaDimensionRequestDependentDimensions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductQuotaDimensionResponseBody extends $tea.Model {
  requestId?: string;
  quotaDimension?: GetProductQuotaDimensionResponseBodyQuotaDimension;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      quotaDimension: 'QuotaDimension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      quotaDimension: GetProductQuotaDimensionResponseBodyQuotaDimension,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductQuotaDimensionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetProductQuotaDimensionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetProductQuotaDimensionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaAlarmRequest extends $tea.Model {
  alarmId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaAlarmResponseBody extends $tea.Model {
  requestId?: string;
  quotaAlarm?: GetQuotaAlarmResponseBodyQuotaAlarm;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      quotaAlarm: 'QuotaAlarm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      quotaAlarm: GetQuotaAlarmResponseBodyQuotaAlarm,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaAlarmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetQuotaAlarmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetQuotaAlarmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaApplicationRequest extends $tea.Model {
  applicationId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaApplicationResponseBody extends $tea.Model {
  requestId?: string;
  quotaApplication?: GetQuotaApplicationResponseBodyQuotaApplication;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      quotaApplication: 'QuotaApplication',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      quotaApplication: GetQuotaApplicationResponseBodyQuotaApplication,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetQuotaApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetQuotaApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmHistoriesRequest extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  keyword?: string;
  startTime?: number;
  endTime?: number;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      keyword: 'Keyword',
      startTime: 'StartTime',
      endTime: 'EndTime',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      keyword: 'string',
      startTime: 'number',
      endTime: 'number',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmHistoriesResponseBody extends $tea.Model {
  totalCount?: number;
  nextToken?: string;
  requestId?: string;
  maxResults?: number;
  alarmHistories?: ListAlarmHistoriesResponseBodyAlarmHistories[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
      alarmHistories: 'AlarmHistories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'number',
      alarmHistories: { 'type': 'array', 'itemType': ListAlarmHistoriesResponseBodyAlarmHistories },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmHistoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAlarmHistoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAlarmHistoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDependentQuotasRequest extends $tea.Model {
  productCode?: string;
  quotaActionCode?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      quotaActionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDependentQuotasResponseBody extends $tea.Model {
  requestId?: string;
  quotas?: ListDependentQuotasResponseBodyQuotas[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      quotas: 'Quotas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      quotas: { 'type': 'array', 'itemType': ListDependentQuotasResponseBodyQuotas },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDependentQuotasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDependentQuotasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDependentQuotasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotaDimensionsRequest extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotaDimensionsResponseBody extends $tea.Model {
  quotaDimensions?: ListProductQuotaDimensionsResponseBodyQuotaDimensions[];
  totalCount?: number;
  nextToken?: string;
  requestId?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      quotaDimensions: 'QuotaDimensions',
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaDimensions: { 'type': 'array', 'itemType': ListProductQuotaDimensionsResponseBodyQuotaDimensions },
      totalCount: 'number',
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotaDimensionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProductQuotaDimensionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProductQuotaDimensionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotasRequest extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  productCode?: string;
  quotaActionCode?: string;
  keyWord?: string;
  sortField?: string;
  sortOrder?: string;
  dimensions?: ListProductQuotasRequestDimensions[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      keyWord: 'KeyWord',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      dimensions: 'Dimensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      productCode: 'string',
      quotaActionCode: 'string',
      keyWord: 'string',
      sortField: 'string',
      sortOrder: 'string',
      dimensions: { 'type': 'array', 'itemType': ListProductQuotasRequestDimensions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotasResponseBody extends $tea.Model {
  totalCount?: number;
  nextToken?: string;
  requestId?: string;
  quotas?: ListProductQuotasResponseBodyQuotas[];
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      quotas: 'Quotas',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      nextToken: 'string',
      requestId: 'string',
      quotas: { 'type': 'array', 'itemType': ListProductQuotasResponseBodyQuotas },
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProductQuotasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProductQuotasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsRequest extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBody extends $tea.Model {
  productInfo?: ListProductsResponseBodyProductInfo[];
  totalCount?: number;
  nextToken?: string;
  requestId?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      productInfo: 'ProductInfo',
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productInfo: { 'type': 'array', 'itemType': ListProductsResponseBodyProductInfo },
      totalCount: 'number',
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProductsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProductsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaAlarmsRequest extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  productCode?: string;
  alarmName?: string;
  quotaActionCode?: string;
  quotaDimensions?: ListQuotaAlarmsRequestQuotaDimensions[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      productCode: 'ProductCode',
      alarmName: 'AlarmName',
      quotaActionCode: 'QuotaActionCode',
      quotaDimensions: 'QuotaDimensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      productCode: 'string',
      alarmName: 'string',
      quotaActionCode: 'string',
      quotaDimensions: { 'type': 'array', 'itemType': ListQuotaAlarmsRequestQuotaDimensions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaAlarmsResponseBody extends $tea.Model {
  totalCount?: number;
  quotaAlarms?: ListQuotaAlarmsResponseBodyQuotaAlarms[];
  nextToken?: string;
  requestId?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      quotaAlarms: 'QuotaAlarms',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      quotaAlarms: { 'type': 'array', 'itemType': ListQuotaAlarmsResponseBodyQuotaAlarms },
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaAlarmsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListQuotaAlarmsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListQuotaAlarmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationsRequest extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  productCode?: string;
  quotaActionCode?: string;
  status?: string;
  keyWord?: string;
  dimensions?: ListQuotaApplicationsRequestDimensions[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      status: 'Status',
      keyWord: 'KeyWord',
      dimensions: 'Dimensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      productCode: 'string',
      quotaActionCode: 'string',
      status: 'string',
      keyWord: 'string',
      dimensions: { 'type': 'array', 'itemType': ListQuotaApplicationsRequestDimensions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationsResponseBody extends $tea.Model {
  totalCount?: number;
  quotaApplications?: ListQuotaApplicationsResponseBodyQuotaApplications[];
  nextToken?: string;
  requestId?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      quotaApplications: 'QuotaApplications',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      quotaApplications: { 'type': 'array', 'itemType': ListQuotaApplicationsResponseBodyQuotaApplications },
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListQuotaApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListQuotaApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaAlarmRequest extends $tea.Model {
  alarmId?: string;
  alarmName?: string;
  threshold?: number;
  thresholdPercent?: number;
  webHook?: string;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      alarmName: 'AlarmName',
      threshold: 'Threshold',
      thresholdPercent: 'ThresholdPercent',
      webHook: 'WebHook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'string',
      alarmName: 'string',
      threshold: 'number',
      thresholdPercent: 'number',
      webHook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaAlarmResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaAlarmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateQuotaAlarmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateQuotaAlarmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaAlarmRequestQuotaDimensions extends $tea.Model {
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

export class CreateQuotaApplicationRequestDimensions extends $tea.Model {
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

export class GetProductQuotaRequestDimensions extends $tea.Model {
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

export class GetProductQuotaResponseBodyQuotaPeriod extends $tea.Model {
  periodValue?: number;
  periodUnit?: string;
  static names(): { [key: string]: string } {
    return {
      periodValue: 'PeriodValue',
      periodUnit: 'PeriodUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodValue: 'number',
      periodUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductQuotaResponseBodyQuotaQuotaItems extends $tea.Model {
  type?: string;
  quota?: string;
  quotaUnit?: string;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      quota: 'Quota',
      quotaUnit: 'QuotaUnit',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      quota: 'string',
      quotaUnit: 'string',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductQuotaResponseBodyQuota extends $tea.Model {
  quotaUnit?: string;
  quotaActionCode?: string;
  totalUsage?: number;
  applicableRange?: number[];
  quotaType?: string;
  quotaDescription?: string;
  period?: GetProductQuotaResponseBodyQuotaPeriod;
  quotaArn?: string;
  applicableType?: string;
  quotaItems?: GetProductQuotaResponseBodyQuotaQuotaItems[];
  dimensions?: { [key: string]: any };
  adjustable?: boolean;
  quotaName?: string;
  unadjustableDetail?: string;
  consumable?: boolean;
  totalQuota?: number;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      quotaUnit: 'QuotaUnit',
      quotaActionCode: 'QuotaActionCode',
      totalUsage: 'TotalUsage',
      applicableRange: 'ApplicableRange',
      quotaType: 'QuotaType',
      quotaDescription: 'QuotaDescription',
      period: 'Period',
      quotaArn: 'QuotaArn',
      applicableType: 'ApplicableType',
      quotaItems: 'QuotaItems',
      dimensions: 'Dimensions',
      adjustable: 'Adjustable',
      quotaName: 'QuotaName',
      unadjustableDetail: 'UnadjustableDetail',
      consumable: 'Consumable',
      totalQuota: 'TotalQuota',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaUnit: 'string',
      quotaActionCode: 'string',
      totalUsage: 'number',
      applicableRange: { 'type': 'array', 'itemType': 'number' },
      quotaType: 'string',
      quotaDescription: 'string',
      period: GetProductQuotaResponseBodyQuotaPeriod,
      quotaArn: 'string',
      applicableType: 'string',
      quotaItems: { 'type': 'array', 'itemType': GetProductQuotaResponseBodyQuotaQuotaItems },
      dimensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      adjustable: 'boolean',
      quotaName: 'string',
      unadjustableDetail: 'string',
      consumable: 'boolean',
      totalQuota: 'number',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductQuotaDimensionRequestDependentDimensions extends $tea.Model {
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

export class GetProductQuotaDimensionResponseBodyQuotaDimension extends $tea.Model {
  dimensionKey?: string;
  dependentDimensions?: string[];
  dimensionValues?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      dimensionKey: 'DimensionKey',
      dependentDimensions: 'DependentDimensions',
      dimensionValues: 'DimensionValues',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionKey: 'string',
      dependentDimensions: { 'type': 'array', 'itemType': 'string' },
      dimensionValues: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaAlarmResponseBodyQuotaAlarm extends $tea.Model {
  thresholdPercent?: number;
  quotaDimension?: { [key: string]: any };
  createTime?: string;
  quotaActionCode?: string;
  alarmName?: string;
  notifyTarget?: string;
  notifyChannels?: string[];
  quotaUsage?: number;
  quotaValue?: number;
  alarmId?: string;
  threshold?: number;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      thresholdPercent: 'ThresholdPercent',
      quotaDimension: 'QuotaDimension',
      createTime: 'CreateTime',
      quotaActionCode: 'QuotaActionCode',
      alarmName: 'AlarmName',
      notifyTarget: 'NotifyTarget',
      notifyChannels: 'NotifyChannels',
      quotaUsage: 'QuotaUsage',
      quotaValue: 'QuotaValue',
      alarmId: 'AlarmId',
      threshold: 'Threshold',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thresholdPercent: 'number',
      quotaDimension: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createTime: 'string',
      quotaActionCode: 'string',
      alarmName: 'string',
      notifyTarget: 'string',
      notifyChannels: { 'type': 'array', 'itemType': 'string' },
      quotaUsage: 'number',
      quotaValue: 'number',
      alarmId: 'string',
      threshold: 'number',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaApplicationResponseBodyQuotaApplication extends $tea.Model {
  status?: string;
  desireValue?: number;
  quotaActionCode?: string;
  quotaName?: string;
  applicationId?: string;
  reason?: string;
  auditReason?: string;
  quotaDescription?: string;
  productCode?: string;
  quotaArn?: string;
  applyTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      desireValue: 'DesireValue',
      quotaActionCode: 'QuotaActionCode',
      quotaName: 'QuotaName',
      applicationId: 'ApplicationId',
      reason: 'Reason',
      auditReason: 'AuditReason',
      quotaDescription: 'QuotaDescription',
      productCode: 'ProductCode',
      quotaArn: 'QuotaArn',
      applyTime: 'ApplyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      desireValue: 'number',
      quotaActionCode: 'string',
      quotaName: 'string',
      applicationId: 'string',
      reason: 'string',
      auditReason: 'string',
      quotaDescription: 'string',
      productCode: 'string',
      quotaArn: 'string',
      applyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmHistoriesResponseBodyAlarmHistories extends $tea.Model {
  quotaUsage?: number;
  thresholdPercent?: number;
  createTime?: string;
  quotaActionCode?: string;
  alarmName?: string;
  notifyTarget?: string;
  notifyChannels?: string[];
  threshold?: number;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      quotaUsage: 'QuotaUsage',
      thresholdPercent: 'ThresholdPercent',
      createTime: 'CreateTime',
      quotaActionCode: 'QuotaActionCode',
      alarmName: 'AlarmName',
      notifyTarget: 'NotifyTarget',
      notifyChannels: 'NotifyChannels',
      threshold: 'Threshold',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaUsage: 'number',
      thresholdPercent: 'number',
      createTime: 'string',
      quotaActionCode: 'string',
      alarmName: 'string',
      notifyTarget: 'string',
      notifyChannels: { 'type': 'array', 'itemType': 'string' },
      threshold: 'number',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDependentQuotasResponseBodyQuotasDimensions extends $tea.Model {
  dimensionKey?: string;
  dependentDimension?: string[];
  dimensionValues?: string[];
  static names(): { [key: string]: string } {
    return {
      dimensionKey: 'DimensionKey',
      dependentDimension: 'DependentDimension',
      dimensionValues: 'DimensionValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionKey: 'string',
      dependentDimension: { 'type': 'array', 'itemType': 'string' },
      dimensionValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDependentQuotasResponseBodyQuotas extends $tea.Model {
  quotaActionCode?: string;
  dimensions?: ListDependentQuotasResponseBodyQuotasDimensions[];
  productCode?: string;
  scale?: number;
  static names(): { [key: string]: string } {
    return {
      quotaActionCode: 'QuotaActionCode',
      dimensions: 'Dimensions',
      productCode: 'ProductCode',
      scale: 'Scale',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaActionCode: 'string',
      dimensions: { 'type': 'array', 'itemType': ListDependentQuotasResponseBodyQuotasDimensions },
      productCode: 'string',
      scale: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotaDimensionsResponseBodyQuotaDimensions extends $tea.Model {
  requisite?: boolean;
  dimensionKey?: string;
  dependentDimensions?: string[];
  dimensionValues?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      requisite: 'Requisite',
      dimensionKey: 'DimensionKey',
      dependentDimensions: 'DependentDimensions',
      dimensionValues: 'DimensionValues',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requisite: 'boolean',
      dimensionKey: 'string',
      dependentDimensions: { 'type': 'array', 'itemType': 'string' },
      dimensionValues: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotasRequestDimensions extends $tea.Model {
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

export class ListProductQuotasResponseBodyQuotasPeriod extends $tea.Model {
  periodValue?: number;
  periodUnit?: string;
  static names(): { [key: string]: string } {
    return {
      periodValue: 'PeriodValue',
      periodUnit: 'PeriodUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodValue: 'number',
      periodUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotasResponseBodyQuotasQuotaItems extends $tea.Model {
  type?: string;
  quota?: string;
  quotaUnit?: string;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      quota: 'Quota',
      quotaUnit: 'QuotaUnit',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      quota: 'string',
      quotaUnit: 'string',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotasResponseBodyQuotas extends $tea.Model {
  quotaUnit?: string;
  quotaActionCode?: string;
  totalUsage?: number;
  applicableRange?: number[];
  quotaType?: string;
  quotaDescription?: string;
  period?: ListProductQuotasResponseBodyQuotasPeriod;
  quotaArn?: string;
  applicableType?: string;
  quotaItems?: ListProductQuotasResponseBodyQuotasQuotaItems[];
  dimensions?: { [key: string]: any };
  adjustable?: boolean;
  quotaName?: string;
  unadjustableDetail?: string;
  consumable?: boolean;
  totalQuota?: number;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      quotaUnit: 'QuotaUnit',
      quotaActionCode: 'QuotaActionCode',
      totalUsage: 'TotalUsage',
      applicableRange: 'ApplicableRange',
      quotaType: 'QuotaType',
      quotaDescription: 'QuotaDescription',
      period: 'Period',
      quotaArn: 'QuotaArn',
      applicableType: 'ApplicableType',
      quotaItems: 'QuotaItems',
      dimensions: 'Dimensions',
      adjustable: 'Adjustable',
      quotaName: 'QuotaName',
      unadjustableDetail: 'UnadjustableDetail',
      consumable: 'Consumable',
      totalQuota: 'TotalQuota',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaUnit: 'string',
      quotaActionCode: 'string',
      totalUsage: 'number',
      applicableRange: { 'type': 'array', 'itemType': 'number' },
      quotaType: 'string',
      quotaDescription: 'string',
      period: ListProductQuotasResponseBodyQuotasPeriod,
      quotaArn: 'string',
      applicableType: 'string',
      quotaItems: { 'type': 'array', 'itemType': ListProductQuotasResponseBodyQuotasQuotaItems },
      dimensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      adjustable: 'boolean',
      quotaName: 'string',
      unadjustableDetail: 'string',
      consumable: 'boolean',
      totalQuota: 'number',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBodyProductInfo extends $tea.Model {
  productName?: string;
  secondCategoryId?: number;
  productNameEn?: string;
  dynamic?: boolean;
  secondCategoryNameEn?: string;
  secondCategoryName?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      productName: 'ProductName',
      secondCategoryId: 'SecondCategoryId',
      productNameEn: 'ProductNameEn',
      dynamic: 'Dynamic',
      secondCategoryNameEn: 'SecondCategoryNameEn',
      secondCategoryName: 'SecondCategoryName',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productName: 'string',
      secondCategoryId: 'number',
      productNameEn: 'string',
      dynamic: 'boolean',
      secondCategoryNameEn: 'string',
      secondCategoryName: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaAlarmsRequestQuotaDimensions extends $tea.Model {
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

export class ListQuotaAlarmsResponseBodyQuotaAlarms extends $tea.Model {
  thresholdPercent?: number;
  quotaDimensions?: { [key: string]: any };
  createTime?: string;
  quotaActionCode?: string;
  alarmName?: string;
  notifyTarget?: string;
  notifyChannels?: string[];
  quotaUsage?: number;
  quotaValue?: number;
  alarmId?: string;
  threshold?: number;
  productCode?: string;
  webHook?: string;
  exceedThreshold?: boolean;
  static names(): { [key: string]: string } {
    return {
      thresholdPercent: 'ThresholdPercent',
      quotaDimensions: 'QuotaDimensions',
      createTime: 'CreateTime',
      quotaActionCode: 'QuotaActionCode',
      alarmName: 'AlarmName',
      notifyTarget: 'NotifyTarget',
      notifyChannels: 'NotifyChannels',
      quotaUsage: 'QuotaUsage',
      quotaValue: 'QuotaValue',
      alarmId: 'AlarmId',
      threshold: 'Threshold',
      productCode: 'ProductCode',
      webHook: 'WebHook',
      exceedThreshold: 'ExceedThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thresholdPercent: 'number',
      quotaDimensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createTime: 'string',
      quotaActionCode: 'string',
      alarmName: 'string',
      notifyTarget: 'string',
      notifyChannels: { 'type': 'array', 'itemType': 'string' },
      quotaUsage: 'number',
      quotaValue: 'number',
      alarmId: 'string',
      threshold: 'number',
      productCode: 'string',
      webHook: 'string',
      exceedThreshold: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationsRequestDimensions extends $tea.Model {
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

export class ListQuotaApplicationsResponseBodyQuotaApplications extends $tea.Model {
  status?: string;
  comment?: string;
  expireTime?: string;
  quotaUnit?: string;
  desireValue?: number;
  noticeType?: number;
  quotaActionCode?: string;
  dimension?: { [key: string]: any };
  quotaDescription?: string;
  quotaArn?: string;
  effectiveTime?: string;
  approveValue?: number;
  quotaName?: string;
  applicationId?: string;
  auditReason?: string;
  reason?: string;
  applyTime?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      comment: 'Comment',
      expireTime: 'ExpireTime',
      quotaUnit: 'QuotaUnit',
      desireValue: 'DesireValue',
      noticeType: 'NoticeType',
      quotaActionCode: 'QuotaActionCode',
      dimension: 'Dimension',
      quotaDescription: 'QuotaDescription',
      quotaArn: 'QuotaArn',
      effectiveTime: 'EffectiveTime',
      approveValue: 'ApproveValue',
      quotaName: 'QuotaName',
      applicationId: 'ApplicationId',
      auditReason: 'AuditReason',
      reason: 'Reason',
      applyTime: 'ApplyTime',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      comment: 'string',
      expireTime: 'string',
      quotaUnit: 'string',
      desireValue: 'number',
      noticeType: 'number',
      quotaActionCode: 'string',
      dimension: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      quotaDescription: 'string',
      quotaArn: 'string',
      effectiveTime: 'string',
      approveValue: 'number',
      quotaName: 'string',
      applicationId: 'string',
      auditReason: 'string',
      reason: 'string',
      applyTime: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("quotas", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createQuotaAlarmWithOptions(request: CreateQuotaAlarmRequest, runtime: $Util.RuntimeOptions): Promise<CreateQuotaAlarmResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateQuotaAlarmResponse>(await this.doRPCRequest("CreateQuotaAlarm", "2020-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateQuotaAlarmResponse({}));
  }

  async createQuotaAlarm(request: CreateQuotaAlarmRequest): Promise<CreateQuotaAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQuotaAlarmWithOptions(request, runtime);
  }

  async createQuotaApplicationWithOptions(request: CreateQuotaApplicationRequest, runtime: $Util.RuntimeOptions): Promise<CreateQuotaApplicationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateQuotaApplicationResponse>(await this.doRPCRequest("CreateQuotaApplication", "2020-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateQuotaApplicationResponse({}));
  }

  async createQuotaApplication(request: CreateQuotaApplicationRequest): Promise<CreateQuotaApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQuotaApplicationWithOptions(request, runtime);
  }

  async deleteQuotaAlarmWithOptions(request: DeleteQuotaAlarmRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQuotaAlarmResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteQuotaAlarmResponse>(await this.doRPCRequest("DeleteQuotaAlarm", "2020-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteQuotaAlarmResponse({}));
  }

  async deleteQuotaAlarm(request: DeleteQuotaAlarmRequest): Promise<DeleteQuotaAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQuotaAlarmWithOptions(request, runtime);
  }

  async getProductQuotaWithOptions(request: GetProductQuotaRequest, runtime: $Util.RuntimeOptions): Promise<GetProductQuotaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetProductQuotaResponse>(await this.doRPCRequest("GetProductQuota", "2020-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new GetProductQuotaResponse({}));
  }

  async getProductQuota(request: GetProductQuotaRequest): Promise<GetProductQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProductQuotaWithOptions(request, runtime);
  }

  async getProductQuotaDimensionWithOptions(request: GetProductQuotaDimensionRequest, runtime: $Util.RuntimeOptions): Promise<GetProductQuotaDimensionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetProductQuotaDimensionResponse>(await this.doRPCRequest("GetProductQuotaDimension", "2020-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new GetProductQuotaDimensionResponse({}));
  }

  async getProductQuotaDimension(request: GetProductQuotaDimensionRequest): Promise<GetProductQuotaDimensionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProductQuotaDimensionWithOptions(request, runtime);
  }

  async getQuotaAlarmWithOptions(request: GetQuotaAlarmRequest, runtime: $Util.RuntimeOptions): Promise<GetQuotaAlarmResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetQuotaAlarmResponse>(await this.doRPCRequest("GetQuotaAlarm", "2020-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new GetQuotaAlarmResponse({}));
  }

  async getQuotaAlarm(request: GetQuotaAlarmRequest): Promise<GetQuotaAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQuotaAlarmWithOptions(request, runtime);
  }

  async getQuotaApplicationWithOptions(request: GetQuotaApplicationRequest, runtime: $Util.RuntimeOptions): Promise<GetQuotaApplicationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetQuotaApplicationResponse>(await this.doRPCRequest("GetQuotaApplication", "2020-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new GetQuotaApplicationResponse({}));
  }

  async getQuotaApplication(request: GetQuotaApplicationRequest): Promise<GetQuotaApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQuotaApplicationWithOptions(request, runtime);
  }

  async listAlarmHistoriesWithOptions(request: ListAlarmHistoriesRequest, runtime: $Util.RuntimeOptions): Promise<ListAlarmHistoriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAlarmHistoriesResponse>(await this.doRPCRequest("ListAlarmHistories", "2020-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListAlarmHistoriesResponse({}));
  }

  async listAlarmHistories(request: ListAlarmHistoriesRequest): Promise<ListAlarmHistoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAlarmHistoriesWithOptions(request, runtime);
  }

  async listDependentQuotasWithOptions(request: ListDependentQuotasRequest, runtime: $Util.RuntimeOptions): Promise<ListDependentQuotasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDependentQuotasResponse>(await this.doRPCRequest("ListDependentQuotas", "2020-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListDependentQuotasResponse({}));
  }

  async listDependentQuotas(request: ListDependentQuotasRequest): Promise<ListDependentQuotasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDependentQuotasWithOptions(request, runtime);
  }

  async listProductQuotaDimensionsWithOptions(request: ListProductQuotaDimensionsRequest, runtime: $Util.RuntimeOptions): Promise<ListProductQuotaDimensionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListProductQuotaDimensionsResponse>(await this.doRPCRequest("ListProductQuotaDimensions", "2020-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListProductQuotaDimensionsResponse({}));
  }

  async listProductQuotaDimensions(request: ListProductQuotaDimensionsRequest): Promise<ListProductQuotaDimensionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProductQuotaDimensionsWithOptions(request, runtime);
  }

  async listProductQuotasWithOptions(request: ListProductQuotasRequest, runtime: $Util.RuntimeOptions): Promise<ListProductQuotasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListProductQuotasResponse>(await this.doRPCRequest("ListProductQuotas", "2020-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListProductQuotasResponse({}));
  }

  async listProductQuotas(request: ListProductQuotasRequest): Promise<ListProductQuotasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProductQuotasWithOptions(request, runtime);
  }

  async listProductsWithOptions(request: ListProductsRequest, runtime: $Util.RuntimeOptions): Promise<ListProductsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListProductsResponse>(await this.doRPCRequest("ListProducts", "2020-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListProductsResponse({}));
  }

  async listProducts(request: ListProductsRequest): Promise<ListProductsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProductsWithOptions(request, runtime);
  }

  async listQuotaAlarmsWithOptions(request: ListQuotaAlarmsRequest, runtime: $Util.RuntimeOptions): Promise<ListQuotaAlarmsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListQuotaAlarmsResponse>(await this.doRPCRequest("ListQuotaAlarms", "2020-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListQuotaAlarmsResponse({}));
  }

  async listQuotaAlarms(request: ListQuotaAlarmsRequest): Promise<ListQuotaAlarmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQuotaAlarmsWithOptions(request, runtime);
  }

  async listQuotaApplicationsWithOptions(request: ListQuotaApplicationsRequest, runtime: $Util.RuntimeOptions): Promise<ListQuotaApplicationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListQuotaApplicationsResponse>(await this.doRPCRequest("ListQuotaApplications", "2020-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListQuotaApplicationsResponse({}));
  }

  async listQuotaApplications(request: ListQuotaApplicationsRequest): Promise<ListQuotaApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQuotaApplicationsWithOptions(request, runtime);
  }

  async updateQuotaAlarmWithOptions(request: UpdateQuotaAlarmRequest, runtime: $Util.RuntimeOptions): Promise<UpdateQuotaAlarmResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateQuotaAlarmResponse>(await this.doRPCRequest("UpdateQuotaAlarm", "2020-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateQuotaAlarmResponse({}));
  }

  async updateQuotaAlarm(request: UpdateQuotaAlarmRequest): Promise<UpdateQuotaAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateQuotaAlarmWithOptions(request, runtime);
  }

}
