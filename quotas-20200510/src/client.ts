// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateQuotaAlarmRequest extends $tea.Model {
  alarmName?: string;
  productCode?: string;
  quotaActionCode?: string;
  quotaDimensions?: CreateQuotaAlarmRequestQuotaDimensions[];
  threshold?: number;
  thresholdPercent?: number;
  thresholdType?: string;
  webHook?: string;
  static names(): { [key: string]: string } {
    return {
      alarmName: 'AlarmName',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaDimensions: 'QuotaDimensions',
      threshold: 'Threshold',
      thresholdPercent: 'ThresholdPercent',
      thresholdType: 'ThresholdType',
      webHook: 'WebHook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmName: 'string',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaDimensions: { 'type': 'array', 'itemType': CreateQuotaAlarmRequestQuotaDimensions },
      threshold: 'number',
      thresholdPercent: 'number',
      thresholdType: 'string',
      webHook: 'string',
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
  statusCode: number;
  body: CreateQuotaAlarmResponseBody;
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
      body: CreateQuotaAlarmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaApplicationRequest extends $tea.Model {
  auditMode?: string;
  desireValue?: number;
  dimensions?: CreateQuotaApplicationRequestDimensions[];
  effectiveTime?: string;
  envLanguage?: string;
  expireTime?: string;
  noticeType?: number;
  productCode?: string;
  quotaActionCode?: string;
  quotaCategory?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      auditMode: 'AuditMode',
      desireValue: 'DesireValue',
      dimensions: 'Dimensions',
      effectiveTime: 'EffectiveTime',
      envLanguage: 'EnvLanguage',
      expireTime: 'ExpireTime',
      noticeType: 'NoticeType',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaCategory: 'QuotaCategory',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditMode: 'string',
      desireValue: 'number',
      dimensions: { 'type': 'array', 'itemType': CreateQuotaApplicationRequestDimensions },
      effectiveTime: 'string',
      envLanguage: 'string',
      expireTime: 'string',
      noticeType: 'number',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaCategory: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaApplicationResponseBody extends $tea.Model {
  applicationId?: string;
  applyTime?: string;
  approveValue?: number;
  auditReason?: string;
  desireValue?: number;
  dimension?: { [key: string]: any };
  effectiveTime?: string;
  expireTime?: string;
  noticeType?: number;
  productCode?: string;
  quotaActionCode?: string;
  quotaArn?: string;
  quotaDescription?: string;
  quotaName?: string;
  quotaUnit?: string;
  reason?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applyTime: 'ApplyTime',
      approveValue: 'ApproveValue',
      auditReason: 'AuditReason',
      desireValue: 'DesireValue',
      dimension: 'Dimension',
      effectiveTime: 'EffectiveTime',
      expireTime: 'ExpireTime',
      noticeType: 'NoticeType',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaArn: 'QuotaArn',
      quotaDescription: 'QuotaDescription',
      quotaName: 'QuotaName',
      quotaUnit: 'QuotaUnit',
      reason: 'Reason',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applyTime: 'string',
      approveValue: 'number',
      auditReason: 'string',
      desireValue: 'number',
      dimension: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      effectiveTime: 'string',
      expireTime: 'string',
      noticeType: 'number',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaArn: 'string',
      quotaDescription: 'string',
      quotaName: 'string',
      quotaUnit: 'string',
      reason: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateQuotaApplicationResponseBody;
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
      body: CreateQuotaApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaApplicationsForTemplateRequest extends $tea.Model {
  aliyunUids?: string[];
  desireValue?: number;
  dimensions?: CreateQuotaApplicationsForTemplateRequestDimensions[];
  effectiveTime?: string;
  envLanguage?: string;
  expireTime?: string;
  noticeType?: number;
  productCode?: string;
  quotaActionCode?: string;
  quotaCategory?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUids: 'AliyunUids',
      desireValue: 'DesireValue',
      dimensions: 'Dimensions',
      effectiveTime: 'EffectiveTime',
      envLanguage: 'EnvLanguage',
      expireTime: 'ExpireTime',
      noticeType: 'NoticeType',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaCategory: 'QuotaCategory',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUids: { 'type': 'array', 'itemType': 'string' },
      desireValue: 'number',
      dimensions: { 'type': 'array', 'itemType': CreateQuotaApplicationsForTemplateRequestDimensions },
      effectiveTime: 'string',
      envLanguage: 'string',
      expireTime: 'string',
      noticeType: 'number',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaCategory: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaApplicationsForTemplateResponseBody extends $tea.Model {
  aliyunUids?: string[];
  batchQuotaApplicationId?: string;
  failResults?: CreateQuotaApplicationsForTemplateResponseBodyFailResults[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUids: 'AliyunUids',
      batchQuotaApplicationId: 'BatchQuotaApplicationId',
      failResults: 'FailResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUids: { 'type': 'array', 'itemType': 'string' },
      batchQuotaApplicationId: 'string',
      failResults: { 'type': 'array', 'itemType': CreateQuotaApplicationsForTemplateResponseBodyFailResults },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaApplicationsForTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateQuotaApplicationsForTemplateResponseBody;
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
      body: CreateQuotaApplicationsForTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateQuotaItemRequest extends $tea.Model {
  desireValue?: number;
  dimensions?: CreateTemplateQuotaItemRequestDimensions[];
  effectiveTime?: string;
  envLanguage?: string;
  expireTime?: string;
  noticeType?: number;
  productCode?: string;
  quotaActionCode?: string;
  quotaCategory?: string;
  static names(): { [key: string]: string } {
    return {
      desireValue: 'DesireValue',
      dimensions: 'Dimensions',
      effectiveTime: 'EffectiveTime',
      envLanguage: 'EnvLanguage',
      expireTime: 'ExpireTime',
      noticeType: 'NoticeType',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaCategory: 'QuotaCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desireValue: 'number',
      dimensions: { 'type': 'array', 'itemType': CreateTemplateQuotaItemRequestDimensions },
      effectiveTime: 'string',
      envLanguage: 'string',
      expireTime: 'string',
      noticeType: 'number',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateQuotaItemResponseBody extends $tea.Model {
  id?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateQuotaItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTemplateQuotaItemResponseBody;
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
      body: CreateTemplateQuotaItemResponseBody,
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
  statusCode: number;
  body: DeleteQuotaAlarmResponseBody;
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
      body: DeleteQuotaAlarmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateQuotaItemRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateQuotaItemResponseBody extends $tea.Model {
  id?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateQuotaItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteTemplateQuotaItemResponseBody;
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
      body: DeleteTemplateQuotaItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductQuotaRequest extends $tea.Model {
  dimensions?: GetProductQuotaRequestDimensions[];
  productCode?: string;
  quotaActionCode?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: { 'type': 'array', 'itemType': GetProductQuotaRequestDimensions },
      productCode: 'string',
      quotaActionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductQuotaResponseBody extends $tea.Model {
  quota?: GetProductQuotaResponseBodyQuota;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quota: 'Quota',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: GetProductQuotaResponseBodyQuota,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetProductQuotaResponseBody;
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
      body: GetProductQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductQuotaDimensionRequest extends $tea.Model {
  dependentDimensions?: GetProductQuotaDimensionRequestDependentDimensions[];
  dimensionKey?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      dependentDimensions: 'DependentDimensions',
      dimensionKey: 'DimensionKey',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependentDimensions: { 'type': 'array', 'itemType': GetProductQuotaDimensionRequestDependentDimensions },
      dimensionKey: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductQuotaDimensionResponseBody extends $tea.Model {
  quotaDimension?: GetProductQuotaDimensionResponseBodyQuotaDimension;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quotaDimension: 'QuotaDimension',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaDimension: GetProductQuotaDimensionResponseBodyQuotaDimension,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductQuotaDimensionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetProductQuotaDimensionResponseBody;
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
  quotaAlarm?: GetQuotaAlarmResponseBodyQuotaAlarm;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quotaAlarm: 'QuotaAlarm',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaAlarm: GetQuotaAlarmResponseBodyQuotaAlarm,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaAlarmResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQuotaAlarmResponseBody;
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
  quotaApplication?: GetQuotaApplicationResponseBodyQuotaApplication;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quotaApplication: 'QuotaApplication',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaApplication: GetQuotaApplicationResponseBodyQuotaApplication,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQuotaApplicationResponseBody;
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
      body: GetQuotaApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaTemplateServiceStatusRequest extends $tea.Model {
  resourceDirectoryId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceDirectoryId: 'ResourceDirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceDirectoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaTemplateServiceStatusResponseBody extends $tea.Model {
  requestId?: string;
  templateServiceStatus?: GetQuotaTemplateServiceStatusResponseBodyTemplateServiceStatus;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateServiceStatus: 'TemplateServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateServiceStatus: GetQuotaTemplateServiceStatusResponseBodyTemplateServiceStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaTemplateServiceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQuotaTemplateServiceStatusResponseBody;
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
      body: GetQuotaTemplateServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmHistoriesRequest extends $tea.Model {
  endTime?: number;
  keyword?: string;
  maxResults?: number;
  nextToken?: string;
  productCode?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      keyword: 'Keyword',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmHistoriesResponseBody extends $tea.Model {
  alarmHistories?: ListAlarmHistoriesResponseBodyAlarmHistories[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      alarmHistories: 'AlarmHistories',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmHistories: { 'type': 'array', 'itemType': ListAlarmHistoriesResponseBodyAlarmHistories },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmHistoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAlarmHistoriesResponseBody;
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
  quotas?: ListDependentQuotasResponseBodyQuotas[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quotas: 'Quotas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotas: { 'type': 'array', 'itemType': ListDependentQuotasResponseBodyQuotas },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDependentQuotasResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDependentQuotasResponseBody;
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
      body: ListDependentQuotasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductDimensionGroupsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductDimensionGroupsResponseBody extends $tea.Model {
  dimensionGroups?: ListProductDimensionGroupsResponseBodyDimensionGroups[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dimensionGroups: 'DimensionGroups',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionGroups: { 'type': 'array', 'itemType': ListProductDimensionGroupsResponseBodyDimensionGroups },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductDimensionGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProductDimensionGroupsResponseBody;
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
      body: ListProductDimensionGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotaDimensionsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  productCode?: string;
  quotaCategory?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      quotaCategory: 'QuotaCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      quotaCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotaDimensionsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  quotaDimensions?: ListProductQuotaDimensionsResponseBodyQuotaDimensions[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      quotaDimensions: 'QuotaDimensions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      quotaDimensions: { 'type': 'array', 'itemType': ListProductQuotaDimensionsResponseBodyQuotaDimensions },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotaDimensionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProductQuotaDimensionsResponseBody;
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
      body: ListProductQuotaDimensionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotasRequest extends $tea.Model {
  dimensions?: ListProductQuotasRequestDimensions[];
  groupCode?: string;
  keyWord?: string;
  maxResults?: number;
  nextToken?: string;
  productCode?: string;
  quotaActionCode?: string;
  quotaCategory?: string;
  sortField?: string;
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      groupCode: 'GroupCode',
      keyWord: 'KeyWord',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaCategory: 'QuotaCategory',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: { 'type': 'array', 'itemType': ListProductQuotasRequestDimensions },
      groupCode: 'string',
      keyWord: 'string',
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaCategory: 'string',
      sortField: 'string',
      sortOrder: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotasResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  quotas?: ListProductQuotasResponseBodyQuotas[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      quotas: 'Quotas',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      quotas: { 'type': 'array', 'itemType': ListProductQuotasResponseBodyQuotas },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotasResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProductQuotasResponseBody;
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
      body: ListProductQuotasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  productInfo?: ListProductsResponseBodyProductInfo[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productInfo: 'ProductInfo',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      productInfo: { 'type': 'array', 'itemType': ListProductsResponseBodyProductInfo },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProductsResponseBody;
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
      body: ListProductsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaAlarmsRequest extends $tea.Model {
  alarmName?: string;
  maxResults?: number;
  nextToken?: string;
  productCode?: string;
  quotaActionCode?: string;
  quotaDimensions?: ListQuotaAlarmsRequestQuotaDimensions[];
  static names(): { [key: string]: string } {
    return {
      alarmName: 'AlarmName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaDimensions: 'QuotaDimensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaDimensions: { 'type': 'array', 'itemType': ListQuotaAlarmsRequestQuotaDimensions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaAlarmsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  quotaAlarms?: ListQuotaAlarmsResponseBodyQuotaAlarms[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      quotaAlarms: 'QuotaAlarms',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      quotaAlarms: { 'type': 'array', 'itemType': ListQuotaAlarmsResponseBodyQuotaAlarms },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaAlarmsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListQuotaAlarmsResponseBody;
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
      body: ListQuotaAlarmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationTemplatesRequest extends $tea.Model {
  dimensions?: ListQuotaApplicationTemplatesRequestDimensions[];
  id?: string;
  maxResults?: number;
  nextToken?: string;
  productCode?: string;
  quotaActionCode?: string;
  quotaCategory?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      id: 'Id',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaCategory: 'QuotaCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: { 'type': 'array', 'itemType': ListQuotaApplicationTemplatesRequestDimensions },
      id: 'string',
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationTemplatesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  quotaApplicationTemplates?: ListQuotaApplicationTemplatesResponseBodyQuotaApplicationTemplates[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      quotaApplicationTemplates: 'QuotaApplicationTemplates',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      quotaApplicationTemplates: { 'type': 'array', 'itemType': ListQuotaApplicationTemplatesResponseBodyQuotaApplicationTemplates },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListQuotaApplicationTemplatesResponseBody;
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
      body: ListQuotaApplicationTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationsRequest extends $tea.Model {
  acceptLanguage?: string;
  dimensions?: ListQuotaApplicationsRequestDimensions[];
  keyWord?: string;
  maxResults?: number;
  nextToken?: string;
  productCode?: string;
  quotaActionCode?: string;
  quotaCategory?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      dimensions: 'Dimensions',
      keyWord: 'KeyWord',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaCategory: 'QuotaCategory',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      dimensions: { 'type': 'array', 'itemType': ListQuotaApplicationsRequestDimensions },
      keyWord: 'string',
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaCategory: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  quotaApplications?: ListQuotaApplicationsResponseBodyQuotaApplications[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      quotaApplications: 'QuotaApplications',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      quotaApplications: { 'type': 'array', 'itemType': ListQuotaApplicationsResponseBodyQuotaApplications },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListQuotaApplicationsResponseBody;
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
      body: ListQuotaApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationsDetailForTemplateRequest extends $tea.Model {
  aliyunUid?: string;
  batchQuotaApplicationId?: string;
  maxResults?: number;
  nextToken?: string;
  productCode?: string;
  quotaActionCode?: string;
  quotaCategory?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      batchQuotaApplicationId: 'BatchQuotaApplicationId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaCategory: 'QuotaCategory',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      batchQuotaApplicationId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaCategory: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationsDetailForTemplateResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  quotaApplications?: ListQuotaApplicationsDetailForTemplateResponseBodyQuotaApplications[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      quotaApplications: 'QuotaApplications',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      quotaApplications: { 'type': 'array', 'itemType': ListQuotaApplicationsDetailForTemplateResponseBodyQuotaApplications },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationsDetailForTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListQuotaApplicationsDetailForTemplateResponseBody;
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
      body: ListQuotaApplicationsDetailForTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationsForTemplateRequest extends $tea.Model {
  applyEndTime?: string;
  applyStartTime?: string;
  batchQuotaApplicationId?: string;
  maxResults?: number;
  nextToken?: string;
  productCode?: string;
  quotaActionCode?: string;
  quotaCategory?: string;
  static names(): { [key: string]: string } {
    return {
      applyEndTime: 'ApplyEndTime',
      applyStartTime: 'ApplyStartTime',
      batchQuotaApplicationId: 'BatchQuotaApplicationId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaCategory: 'QuotaCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyEndTime: 'string',
      applyStartTime: 'string',
      batchQuotaApplicationId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationsForTemplateResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  quotaBatchApplications?: ListQuotaApplicationsForTemplateResponseBodyQuotaBatchApplications[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      quotaBatchApplications: 'QuotaBatchApplications',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      quotaBatchApplications: { 'type': 'array', 'itemType': ListQuotaApplicationsForTemplateResponseBodyQuotaBatchApplications },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationsForTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListQuotaApplicationsForTemplateResponseBody;
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
      body: ListQuotaApplicationsForTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQuotaTemplateServiceStatusRequest extends $tea.Model {
  serviceStatus?: number;
  static names(): { [key: string]: string } {
    return {
      serviceStatus: 'ServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQuotaTemplateServiceStatusResponseBody extends $tea.Model {
  requestId?: string;
  templateServiceStatus?: ModifyQuotaTemplateServiceStatusResponseBodyTemplateServiceStatus;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateServiceStatus: 'TemplateServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateServiceStatus: ModifyQuotaTemplateServiceStatusResponseBodyTemplateServiceStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQuotaTemplateServiceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyQuotaTemplateServiceStatusResponseBody;
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
      body: ModifyQuotaTemplateServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTemplateQuotaItemRequest extends $tea.Model {
  desireValue?: number;
  dimensions?: ModifyTemplateQuotaItemRequestDimensions[];
  effectiveTime?: string;
  envLanguage?: string;
  expireTime?: string;
  id?: string;
  noticeType?: number;
  productCode?: string;
  quotaActionCode?: string;
  quotaCategory?: string;
  static names(): { [key: string]: string } {
    return {
      desireValue: 'DesireValue',
      dimensions: 'Dimensions',
      effectiveTime: 'EffectiveTime',
      envLanguage: 'EnvLanguage',
      expireTime: 'ExpireTime',
      id: 'Id',
      noticeType: 'NoticeType',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaCategory: 'QuotaCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desireValue: 'number',
      dimensions: { 'type': 'array', 'itemType': ModifyTemplateQuotaItemRequestDimensions },
      effectiveTime: 'string',
      envLanguage: 'string',
      expireTime: 'string',
      id: 'string',
      noticeType: 'number',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTemplateQuotaItemResponseBody extends $tea.Model {
  id?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTemplateQuotaItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyTemplateQuotaItemResponseBody;
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
      body: ModifyTemplateQuotaItemResponseBody,
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
  thresholdType?: string;
  webHook?: string;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      alarmName: 'AlarmName',
      threshold: 'Threshold',
      thresholdPercent: 'ThresholdPercent',
      thresholdType: 'ThresholdType',
      webHook: 'WebHook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'string',
      alarmName: 'string',
      threshold: 'number',
      thresholdPercent: 'number',
      thresholdType: 'string',
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
  statusCode: number;
  body: UpdateQuotaAlarmResponseBody;
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

export class CreateQuotaApplicationsForTemplateRequestDimensions extends $tea.Model {
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

export class CreateQuotaApplicationsForTemplateResponseBodyFailResults extends $tea.Model {
  aliyunUid?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateQuotaItemRequestDimensions extends $tea.Model {
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
  periodUnit?: string;
  periodValue?: number;
  static names(): { [key: string]: string } {
    return {
      periodUnit: 'PeriodUnit',
      periodValue: 'PeriodValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodUnit: 'string',
      periodValue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductQuotaResponseBodyQuotaQuotaItems extends $tea.Model {
  quota?: string;
  quotaUnit?: string;
  type?: string;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      quota: 'Quota',
      quotaUnit: 'QuotaUnit',
      type: 'Type',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: 'string',
      quotaUnit: 'string',
      type: 'string',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductQuotaResponseBodyQuota extends $tea.Model {
  adjustable?: boolean;
  applicableRange?: number[];
  applicableType?: string;
  applyReasonTips?: string;
  consumable?: boolean;
  dimensions?: { [key: string]: any };
  effectiveTime?: string;
  expireTime?: string;
  globalQuota?: boolean;
  period?: GetProductQuotaResponseBodyQuotaPeriod;
  productCode?: string;
  quotaActionCode?: string;
  quotaArn?: string;
  quotaCategory?: string;
  quotaDescription?: string;
  quotaItems?: GetProductQuotaResponseBodyQuotaQuotaItems[];
  quotaName?: string;
  quotaType?: string;
  quotaUnit?: string;
  supportedRange?: number[];
  totalQuota?: number;
  totalUsage?: number;
  unadjustableDetail?: string;
  static names(): { [key: string]: string } {
    return {
      adjustable: 'Adjustable',
      applicableRange: 'ApplicableRange',
      applicableType: 'ApplicableType',
      applyReasonTips: 'ApplyReasonTips',
      consumable: 'Consumable',
      dimensions: 'Dimensions',
      effectiveTime: 'EffectiveTime',
      expireTime: 'ExpireTime',
      globalQuota: 'GlobalQuota',
      period: 'Period',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaArn: 'QuotaArn',
      quotaCategory: 'QuotaCategory',
      quotaDescription: 'QuotaDescription',
      quotaItems: 'QuotaItems',
      quotaName: 'QuotaName',
      quotaType: 'QuotaType',
      quotaUnit: 'QuotaUnit',
      supportedRange: 'SupportedRange',
      totalQuota: 'TotalQuota',
      totalUsage: 'TotalUsage',
      unadjustableDetail: 'UnadjustableDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustable: 'boolean',
      applicableRange: { 'type': 'array', 'itemType': 'number' },
      applicableType: 'string',
      applyReasonTips: 'string',
      consumable: 'boolean',
      dimensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      effectiveTime: 'string',
      expireTime: 'string',
      globalQuota: 'boolean',
      period: GetProductQuotaResponseBodyQuotaPeriod,
      productCode: 'string',
      quotaActionCode: 'string',
      quotaArn: 'string',
      quotaCategory: 'string',
      quotaDescription: 'string',
      quotaItems: { 'type': 'array', 'itemType': GetProductQuotaResponseBodyQuotaQuotaItems },
      quotaName: 'string',
      quotaType: 'string',
      quotaUnit: 'string',
      supportedRange: { 'type': 'array', 'itemType': 'number' },
      totalQuota: 'number',
      totalUsage: 'number',
      unadjustableDetail: 'string',
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

export class GetProductQuotaDimensionResponseBodyQuotaDimensionDimensionValueDetail extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductQuotaDimensionResponseBodyQuotaDimension extends $tea.Model {
  dependentDimensions?: string[];
  dimensionKey?: string;
  dimensionValueDetail?: GetProductQuotaDimensionResponseBodyQuotaDimensionDimensionValueDetail[];
  dimensionValues?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      dependentDimensions: 'DependentDimensions',
      dimensionKey: 'DimensionKey',
      dimensionValueDetail: 'DimensionValueDetail',
      dimensionValues: 'DimensionValues',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependentDimensions: { 'type': 'array', 'itemType': 'string' },
      dimensionKey: 'string',
      dimensionValueDetail: { 'type': 'array', 'itemType': GetProductQuotaDimensionResponseBodyQuotaDimensionDimensionValueDetail },
      dimensionValues: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaAlarmResponseBodyQuotaAlarm extends $tea.Model {
  alarmId?: string;
  alarmName?: string;
  createTime?: string;
  notifyChannels?: string[];
  notifyTarget?: string;
  productCode?: string;
  quotaActionCode?: string;
  quotaDimension?: { [key: string]: any };
  quotaUsage?: number;
  quotaValue?: number;
  threshold?: number;
  thresholdPercent?: number;
  thresholdType?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      alarmName: 'AlarmName',
      createTime: 'CreateTime',
      notifyChannels: 'NotifyChannels',
      notifyTarget: 'NotifyTarget',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaDimension: 'QuotaDimension',
      quotaUsage: 'QuotaUsage',
      quotaValue: 'QuotaValue',
      threshold: 'Threshold',
      thresholdPercent: 'ThresholdPercent',
      thresholdType: 'ThresholdType',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'string',
      alarmName: 'string',
      createTime: 'string',
      notifyChannels: { 'type': 'array', 'itemType': 'string' },
      notifyTarget: 'string',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaDimension: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      quotaUsage: 'number',
      quotaValue: 'number',
      threshold: 'number',
      thresholdPercent: 'number',
      thresholdType: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaApplicationResponseBodyQuotaApplication extends $tea.Model {
  applicationId?: string;
  applyTime?: string;
  approveValue?: number;
  auditReason?: string;
  desireValue?: number;
  dimension?: { [key: string]: any };
  effectiveTime?: string;
  expireTime?: string;
  noticeType?: number;
  productCode?: string;
  quotaActionCode?: string;
  quotaArn?: string;
  quotaDescription?: string;
  quotaName?: string;
  quotaUnit?: string;
  reason?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applyTime: 'ApplyTime',
      approveValue: 'ApproveValue',
      auditReason: 'AuditReason',
      desireValue: 'DesireValue',
      dimension: 'Dimension',
      effectiveTime: 'EffectiveTime',
      expireTime: 'ExpireTime',
      noticeType: 'NoticeType',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaArn: 'QuotaArn',
      quotaDescription: 'QuotaDescription',
      quotaName: 'QuotaName',
      quotaUnit: 'QuotaUnit',
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applyTime: 'string',
      approveValue: 'number',
      auditReason: 'string',
      desireValue: 'number',
      dimension: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      effectiveTime: 'string',
      expireTime: 'string',
      noticeType: 'number',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaArn: 'string',
      quotaDescription: 'string',
      quotaName: 'string',
      quotaUnit: 'string',
      reason: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaTemplateServiceStatusResponseBodyTemplateServiceStatus extends $tea.Model {
  resourceDirectoryId?: string;
  serviceStatus?: number;
  static names(): { [key: string]: string } {
    return {
      resourceDirectoryId: 'ResourceDirectoryId',
      serviceStatus: 'ServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceDirectoryId: 'string',
      serviceStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmHistoriesResponseBodyAlarmHistories extends $tea.Model {
  alarmName?: string;
  createTime?: string;
  notifyChannels?: string[];
  notifyTarget?: string;
  productCode?: string;
  quotaActionCode?: string;
  quotaUsage?: number;
  threshold?: number;
  thresholdPercent?: number;
  static names(): { [key: string]: string } {
    return {
      alarmName: 'AlarmName',
      createTime: 'CreateTime',
      notifyChannels: 'NotifyChannels',
      notifyTarget: 'NotifyTarget',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaUsage: 'QuotaUsage',
      threshold: 'Threshold',
      thresholdPercent: 'ThresholdPercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmName: 'string',
      createTime: 'string',
      notifyChannels: { 'type': 'array', 'itemType': 'string' },
      notifyTarget: 'string',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaUsage: 'number',
      threshold: 'number',
      thresholdPercent: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDependentQuotasResponseBodyQuotasDimensions extends $tea.Model {
  dependentDimension?: string[];
  dimensionKey?: string;
  dimensionValues?: string[];
  static names(): { [key: string]: string } {
    return {
      dependentDimension: 'DependentDimension',
      dimensionKey: 'DimensionKey',
      dimensionValues: 'DimensionValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependentDimension: { 'type': 'array', 'itemType': 'string' },
      dimensionKey: 'string',
      dimensionValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDependentQuotasResponseBodyQuotas extends $tea.Model {
  dimensions?: ListDependentQuotasResponseBodyQuotasDimensions[];
  productCode?: string;
  quotaActionCode?: string;
  scale?: number;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      scale: 'Scale',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: { 'type': 'array', 'itemType': ListDependentQuotasResponseBodyQuotasDimensions },
      productCode: 'string',
      quotaActionCode: 'string',
      scale: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductDimensionGroupsResponseBodyDimensionGroups extends $tea.Model {
  dimensionKeys?: string[];
  groupCode?: string;
  groupName?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      dimensionKeys: 'DimensionKeys',
      groupCode: 'GroupCode',
      groupName: 'GroupName',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionKeys: { 'type': 'array', 'itemType': 'string' },
      groupCode: 'string',
      groupName: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotaDimensionsResponseBodyQuotaDimensionsDimensionValueDetail extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotaDimensionsResponseBodyQuotaDimensions extends $tea.Model {
  dependentDimensions?: string[];
  dimensionKey?: string;
  dimensionValueDetail?: ListProductQuotaDimensionsResponseBodyQuotaDimensionsDimensionValueDetail[];
  dimensionValues?: string[];
  name?: string;
  requisite?: boolean;
  static names(): { [key: string]: string } {
    return {
      dependentDimensions: 'DependentDimensions',
      dimensionKey: 'DimensionKey',
      dimensionValueDetail: 'DimensionValueDetail',
      dimensionValues: 'DimensionValues',
      name: 'Name',
      requisite: 'Requisite',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependentDimensions: { 'type': 'array', 'itemType': 'string' },
      dimensionKey: 'string',
      dimensionValueDetail: { 'type': 'array', 'itemType': ListProductQuotaDimensionsResponseBodyQuotaDimensionsDimensionValueDetail },
      dimensionValues: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      requisite: 'boolean',
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
  periodUnit?: string;
  periodValue?: number;
  static names(): { [key: string]: string } {
    return {
      periodUnit: 'PeriodUnit',
      periodValue: 'PeriodValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodUnit: 'string',
      periodValue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotasResponseBodyQuotasQuotaItems extends $tea.Model {
  quota?: string;
  quotaUnit?: string;
  type?: string;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      quota: 'Quota',
      quotaUnit: 'QuotaUnit',
      type: 'Type',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: 'string',
      quotaUnit: 'string',
      type: 'string',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotasResponseBodyQuotas extends $tea.Model {
  adjustable?: boolean;
  applicableRange?: number[];
  applicableType?: string;
  applyReasonTips?: string;
  consumable?: boolean;
  dimensions?: { [key: string]: any };
  effectiveTime?: string;
  expireTime?: string;
  globalQuota?: boolean;
  period?: ListProductQuotasResponseBodyQuotasPeriod;
  productCode?: string;
  quotaActionCode?: string;
  quotaArn?: string;
  quotaCategory?: string;
  quotaDescription?: string;
  quotaItems?: ListProductQuotasResponseBodyQuotasQuotaItems[];
  quotaName?: string;
  quotaType?: string;
  quotaUnit?: string;
  supportedRange?: number[];
  totalQuota?: number;
  totalUsage?: number;
  unadjustableDetail?: string;
  static names(): { [key: string]: string } {
    return {
      adjustable: 'Adjustable',
      applicableRange: 'ApplicableRange',
      applicableType: 'ApplicableType',
      applyReasonTips: 'ApplyReasonTips',
      consumable: 'Consumable',
      dimensions: 'Dimensions',
      effectiveTime: 'EffectiveTime',
      expireTime: 'ExpireTime',
      globalQuota: 'GlobalQuota',
      period: 'Period',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaArn: 'QuotaArn',
      quotaCategory: 'QuotaCategory',
      quotaDescription: 'QuotaDescription',
      quotaItems: 'QuotaItems',
      quotaName: 'QuotaName',
      quotaType: 'QuotaType',
      quotaUnit: 'QuotaUnit',
      supportedRange: 'SupportedRange',
      totalQuota: 'TotalQuota',
      totalUsage: 'TotalUsage',
      unadjustableDetail: 'UnadjustableDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustable: 'boolean',
      applicableRange: { 'type': 'array', 'itemType': 'number' },
      applicableType: 'string',
      applyReasonTips: 'string',
      consumable: 'boolean',
      dimensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      effectiveTime: 'string',
      expireTime: 'string',
      globalQuota: 'boolean',
      period: ListProductQuotasResponseBodyQuotasPeriod,
      productCode: 'string',
      quotaActionCode: 'string',
      quotaArn: 'string',
      quotaCategory: 'string',
      quotaDescription: 'string',
      quotaItems: { 'type': 'array', 'itemType': ListProductQuotasResponseBodyQuotasQuotaItems },
      quotaName: 'string',
      quotaType: 'string',
      quotaUnit: 'string',
      supportedRange: { 'type': 'array', 'itemType': 'number' },
      totalQuota: 'number',
      totalUsage: 'number',
      unadjustableDetail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBodyProductInfo extends $tea.Model {
  commonQuotaSupport?: string;
  dynamic?: boolean;
  flowControlSupport?: string;
  productCode?: string;
  productName?: string;
  productNameEn?: string;
  secondCategoryId?: number;
  secondCategoryName?: string;
  secondCategoryNameEn?: string;
  whiteListLabelQuotaSupport?: string;
  static names(): { [key: string]: string } {
    return {
      commonQuotaSupport: 'CommonQuotaSupport',
      dynamic: 'Dynamic',
      flowControlSupport: 'FlowControlSupport',
      productCode: 'ProductCode',
      productName: 'ProductName',
      productNameEn: 'ProductNameEn',
      secondCategoryId: 'SecondCategoryId',
      secondCategoryName: 'SecondCategoryName',
      secondCategoryNameEn: 'SecondCategoryNameEn',
      whiteListLabelQuotaSupport: 'WhiteListLabelQuotaSupport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonQuotaSupport: 'string',
      dynamic: 'boolean',
      flowControlSupport: 'string',
      productCode: 'string',
      productName: 'string',
      productNameEn: 'string',
      secondCategoryId: 'number',
      secondCategoryName: 'string',
      secondCategoryNameEn: 'string',
      whiteListLabelQuotaSupport: 'string',
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
  alarmId?: string;
  alarmName?: string;
  createTime?: string;
  exceedThreshold?: boolean;
  notifyChannels?: string[];
  notifyTarget?: string;
  productCode?: string;
  quotaActionCode?: string;
  quotaDimensions?: { [key: string]: any };
  quotaUsage?: number;
  quotaValue?: number;
  threshold?: number;
  thresholdPercent?: number;
  thresholdType?: string;
  webHook?: string;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      alarmName: 'AlarmName',
      createTime: 'CreateTime',
      exceedThreshold: 'ExceedThreshold',
      notifyChannels: 'NotifyChannels',
      notifyTarget: 'NotifyTarget',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaDimensions: 'QuotaDimensions',
      quotaUsage: 'QuotaUsage',
      quotaValue: 'QuotaValue',
      threshold: 'Threshold',
      thresholdPercent: 'ThresholdPercent',
      thresholdType: 'ThresholdType',
      webHook: 'WebHook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'string',
      alarmName: 'string',
      createTime: 'string',
      exceedThreshold: 'boolean',
      notifyChannels: { 'type': 'array', 'itemType': 'string' },
      notifyTarget: 'string',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaDimensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      quotaUsage: 'number',
      quotaValue: 'number',
      threshold: 'number',
      thresholdPercent: 'number',
      thresholdType: 'string',
      webHook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationTemplatesRequestDimensions extends $tea.Model {
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

export class ListQuotaApplicationTemplatesResponseBodyQuotaApplicationTemplatesPeriod extends $tea.Model {
  periodUnit?: string;
  periodValue?: number;
  static names(): { [key: string]: string } {
    return {
      periodUnit: 'PeriodUnit',
      periodValue: 'PeriodValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodUnit: 'string',
      periodValue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationTemplatesResponseBodyQuotaApplicationTemplates extends $tea.Model {
  applicableRange?: number[];
  applicableType?: string;
  desireValue?: number;
  dimensions?: { [key: string]: any };
  effectiveTime?: string;
  envLanguage?: string;
  expireTime?: string;
  id?: string;
  noticeType?: number;
  period?: ListQuotaApplicationTemplatesResponseBodyQuotaApplicationTemplatesPeriod;
  productCode?: string;
  quotaActionCode?: string;
  quotaCategory?: string;
  quotaDescription?: string;
  quotaName?: string;
  static names(): { [key: string]: string } {
    return {
      applicableRange: 'ApplicableRange',
      applicableType: 'ApplicableType',
      desireValue: 'DesireValue',
      dimensions: 'Dimensions',
      effectiveTime: 'EffectiveTime',
      envLanguage: 'EnvLanguage',
      expireTime: 'ExpireTime',
      id: 'Id',
      noticeType: 'NoticeType',
      period: 'Period',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaCategory: 'QuotaCategory',
      quotaDescription: 'QuotaDescription',
      quotaName: 'QuotaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicableRange: { 'type': 'array', 'itemType': 'number' },
      applicableType: 'string',
      desireValue: 'number',
      dimensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      effectiveTime: 'string',
      envLanguage: 'string',
      expireTime: 'string',
      id: 'string',
      noticeType: 'number',
      period: ListQuotaApplicationTemplatesResponseBodyQuotaApplicationTemplatesPeriod,
      productCode: 'string',
      quotaActionCode: 'string',
      quotaCategory: 'string',
      quotaDescription: 'string',
      quotaName: 'string',
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

export class ListQuotaApplicationsResponseBodyQuotaApplicationsPeriod extends $tea.Model {
  periodUnit?: string;
  periodValue?: number;
  static names(): { [key: string]: string } {
    return {
      periodUnit: 'PeriodUnit',
      periodValue: 'PeriodValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodUnit: 'string',
      periodValue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationsResponseBodyQuotaApplications extends $tea.Model {
  applicationId?: string;
  applyTime?: string;
  approveValue?: number;
  auditReason?: string;
  comment?: string;
  desireValue?: number;
  dimension?: { [key: string]: any };
  effectiveTime?: string;
  expireTime?: string;
  noticeType?: number;
  period?: ListQuotaApplicationsResponseBodyQuotaApplicationsPeriod;
  productCode?: string;
  quotaActionCode?: string;
  quotaArn?: string;
  quotaDescription?: string;
  quotaName?: string;
  quotaUnit?: string;
  reason?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applyTime: 'ApplyTime',
      approveValue: 'ApproveValue',
      auditReason: 'AuditReason',
      comment: 'Comment',
      desireValue: 'DesireValue',
      dimension: 'Dimension',
      effectiveTime: 'EffectiveTime',
      expireTime: 'ExpireTime',
      noticeType: 'NoticeType',
      period: 'Period',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaArn: 'QuotaArn',
      quotaDescription: 'QuotaDescription',
      quotaName: 'QuotaName',
      quotaUnit: 'QuotaUnit',
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applyTime: 'string',
      approveValue: 'number',
      auditReason: 'string',
      comment: 'string',
      desireValue: 'number',
      dimension: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      effectiveTime: 'string',
      expireTime: 'string',
      noticeType: 'number',
      period: ListQuotaApplicationsResponseBodyQuotaApplicationsPeriod,
      productCode: 'string',
      quotaActionCode: 'string',
      quotaArn: 'string',
      quotaDescription: 'string',
      quotaName: 'string',
      quotaUnit: 'string',
      reason: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationsDetailForTemplateResponseBodyQuotaApplicationsPeriod extends $tea.Model {
  periodUnit?: string;
  periodValue?: number;
  static names(): { [key: string]: string } {
    return {
      periodUnit: 'PeriodUnit',
      periodValue: 'PeriodValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodUnit: 'string',
      periodValue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationsDetailForTemplateResponseBodyQuotaApplications extends $tea.Model {
  aliyunUid?: string;
  applicationId?: string;
  applyTime?: string;
  approveValue?: number;
  auditReason?: string;
  batchQuotaApplicationId?: string;
  desireValue?: number;
  effectiveTime?: string;
  envLanguage?: string;
  expireTime?: string;
  noticeType?: number;
  period?: ListQuotaApplicationsDetailForTemplateResponseBodyQuotaApplicationsPeriod;
  productCode?: string;
  quotaActionCode?: string;
  quotaArn?: string;
  quotaCategory?: string;
  quotaDescription?: string;
  quotaDimension?: { [key: string]: string };
  quotaName?: string;
  quotaUnit?: string;
  reason?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      applicationId: 'ApplicationId',
      applyTime: 'ApplyTime',
      approveValue: 'ApproveValue',
      auditReason: 'AuditReason',
      batchQuotaApplicationId: 'BatchQuotaApplicationId',
      desireValue: 'DesireValue',
      effectiveTime: 'EffectiveTime',
      envLanguage: 'EnvLanguage',
      expireTime: 'ExpireTime',
      noticeType: 'NoticeType',
      period: 'Period',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaArn: 'QuotaArn',
      quotaCategory: 'QuotaCategory',
      quotaDescription: 'QuotaDescription',
      quotaDimension: 'QuotaDimension',
      quotaName: 'QuotaName',
      quotaUnit: 'QuotaUnit',
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      applicationId: 'string',
      applyTime: 'string',
      approveValue: 'number',
      auditReason: 'string',
      batchQuotaApplicationId: 'string',
      desireValue: 'number',
      effectiveTime: 'string',
      envLanguage: 'string',
      expireTime: 'string',
      noticeType: 'number',
      period: ListQuotaApplicationsDetailForTemplateResponseBodyQuotaApplicationsPeriod,
      productCode: 'string',
      quotaActionCode: 'string',
      quotaArn: 'string',
      quotaCategory: 'string',
      quotaDescription: 'string',
      quotaDimension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      quotaName: 'string',
      quotaUnit: 'string',
      reason: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationsForTemplateResponseBodyQuotaBatchApplicationsAuditStatusVos extends $tea.Model {
  count?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationsForTemplateResponseBodyQuotaBatchApplications extends $tea.Model {
  aliyunUids?: string[];
  applyTime?: string;
  auditStatusVos?: ListQuotaApplicationsForTemplateResponseBodyQuotaBatchApplicationsAuditStatusVos[];
  batchQuotaApplicationId?: string;
  desireValue?: number;
  dimensions?: { [key: string]: any };
  effectiveTime?: string;
  expireTime?: string;
  productCode?: string;
  quotaActionCode?: string;
  quotaCategory?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUids: 'AliyunUids',
      applyTime: 'ApplyTime',
      auditStatusVos: 'AuditStatusVos',
      batchQuotaApplicationId: 'BatchQuotaApplicationId',
      desireValue: 'DesireValue',
      dimensions: 'Dimensions',
      effectiveTime: 'EffectiveTime',
      expireTime: 'ExpireTime',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaCategory: 'QuotaCategory',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUids: { 'type': 'array', 'itemType': 'string' },
      applyTime: 'string',
      auditStatusVos: { 'type': 'array', 'itemType': ListQuotaApplicationsForTemplateResponseBodyQuotaBatchApplicationsAuditStatusVos },
      batchQuotaApplicationId: 'string',
      desireValue: 'number',
      dimensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      effectiveTime: 'string',
      expireTime: 'string',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaCategory: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQuotaTemplateServiceStatusResponseBodyTemplateServiceStatus extends $tea.Model {
  resourceDirectoryId?: string;
  serviceStatus?: number;
  static names(): { [key: string]: string } {
    return {
      resourceDirectoryId: 'ResourceDirectoryId',
      serviceStatus: 'ServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceDirectoryId: 'string',
      serviceStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTemplateQuotaItemRequestDimensions extends $tea.Model {
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


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
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

  /**
    * The ID of the alert.
    *
    * @param request CreateQuotaAlarmRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateQuotaAlarmResponse
   */
  async createQuotaAlarmWithOptions(request: CreateQuotaAlarmRequest, runtime: $Util.RuntimeOptions): Promise<CreateQuotaAlarmResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alarmName)) {
      body["AlarmName"] = request.alarmName;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.quotaActionCode)) {
      body["QuotaActionCode"] = request.quotaActionCode;
    }

    if (!Util.isUnset(request.quotaDimensions)) {
      body["QuotaDimensions"] = request.quotaDimensions;
    }

    if (!Util.isUnset(request.threshold)) {
      body["Threshold"] = request.threshold;
    }

    if (!Util.isUnset(request.thresholdPercent)) {
      body["ThresholdPercent"] = request.thresholdPercent;
    }

    if (!Util.isUnset(request.thresholdType)) {
      body["ThresholdType"] = request.thresholdType;
    }

    if (!Util.isUnset(request.webHook)) {
      body["WebHook"] = request.webHook;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateQuotaAlarm",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateQuotaAlarmResponse>(await this.callApi(params, req, runtime), new CreateQuotaAlarmResponse({}));
  }

  /**
    * The ID of the alert.
    *
    * @param request CreateQuotaAlarmRequest
    * @return CreateQuotaAlarmResponse
   */
  async createQuotaAlarm(request: CreateQuotaAlarmRequest): Promise<CreateQuotaAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQuotaAlarmWithOptions(request, runtime);
  }

  /**
    * In this example, the operation is called to submit an application to increase the value of a quota whose ID is `q_security-groups` and whose name is Maximum Number of Security Groups. The quota belongs to Elastic Compute Service (ECS). The expected value of the quota is `804`, the application reason is `Scale Out`, and the ID of the region to which the quota belongs is `cn-hangzhou`.
    *
    * @param request CreateQuotaApplicationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateQuotaApplicationResponse
   */
  async createQuotaApplicationWithOptions(request: CreateQuotaApplicationRequest, runtime: $Util.RuntimeOptions): Promise<CreateQuotaApplicationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.auditMode)) {
      body["AuditMode"] = request.auditMode;
    }

    if (!Util.isUnset(request.desireValue)) {
      body["DesireValue"] = request.desireValue;
    }

    if (!Util.isUnset(request.dimensions)) {
      body["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.effectiveTime)) {
      body["EffectiveTime"] = request.effectiveTime;
    }

    if (!Util.isUnset(request.envLanguage)) {
      body["EnvLanguage"] = request.envLanguage;
    }

    if (!Util.isUnset(request.expireTime)) {
      body["ExpireTime"] = request.expireTime;
    }

    if (!Util.isUnset(request.noticeType)) {
      body["NoticeType"] = request.noticeType;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.quotaActionCode)) {
      body["QuotaActionCode"] = request.quotaActionCode;
    }

    if (!Util.isUnset(request.quotaCategory)) {
      body["QuotaCategory"] = request.quotaCategory;
    }

    if (!Util.isUnset(request.reason)) {
      body["Reason"] = request.reason;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateQuotaApplication",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateQuotaApplicationResponse>(await this.callApi(params, req, runtime), new CreateQuotaApplicationResponse({}));
  }

  /**
    * In this example, the operation is called to submit an application to increase the value of a quota whose ID is `q_security-groups` and whose name is Maximum Number of Security Groups. The quota belongs to Elastic Compute Service (ECS). The expected value of the quota is `804`, the application reason is `Scale Out`, and the ID of the region to which the quota belongs is `cn-hangzhou`.
    *
    * @param request CreateQuotaApplicationRequest
    * @return CreateQuotaApplicationResponse
   */
  async createQuotaApplication(request: CreateQuotaApplicationRequest): Promise<CreateQuotaApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQuotaApplicationWithOptions(request, runtime);
  }

  async createQuotaApplicationsForTemplateWithOptions(request: CreateQuotaApplicationsForTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateQuotaApplicationsForTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aliyunUids)) {
      body["AliyunUids"] = request.aliyunUids;
    }

    if (!Util.isUnset(request.desireValue)) {
      body["DesireValue"] = request.desireValue;
    }

    if (!Util.isUnset(request.dimensions)) {
      body["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.effectiveTime)) {
      body["EffectiveTime"] = request.effectiveTime;
    }

    if (!Util.isUnset(request.envLanguage)) {
      body["EnvLanguage"] = request.envLanguage;
    }

    if (!Util.isUnset(request.expireTime)) {
      body["ExpireTime"] = request.expireTime;
    }

    if (!Util.isUnset(request.noticeType)) {
      body["NoticeType"] = request.noticeType;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.quotaActionCode)) {
      body["QuotaActionCode"] = request.quotaActionCode;
    }

    if (!Util.isUnset(request.quotaCategory)) {
      body["QuotaCategory"] = request.quotaCategory;
    }

    if (!Util.isUnset(request.reason)) {
      body["Reason"] = request.reason;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateQuotaApplicationsForTemplate",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateQuotaApplicationsForTemplateResponse>(await this.callApi(params, req, runtime), new CreateQuotaApplicationsForTemplateResponse({}));
  }

  async createQuotaApplicationsForTemplate(request: CreateQuotaApplicationsForTemplateRequest): Promise<CreateQuotaApplicationsForTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQuotaApplicationsForTemplateWithOptions(request, runtime);
  }

  async createTemplateQuotaItemWithOptions(request: CreateTemplateQuotaItemRequest, runtime: $Util.RuntimeOptions): Promise<CreateTemplateQuotaItemResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.desireValue)) {
      body["DesireValue"] = request.desireValue;
    }

    if (!Util.isUnset(request.dimensions)) {
      body["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.effectiveTime)) {
      body["EffectiveTime"] = request.effectiveTime;
    }

    if (!Util.isUnset(request.envLanguage)) {
      body["EnvLanguage"] = request.envLanguage;
    }

    if (!Util.isUnset(request.expireTime)) {
      body["ExpireTime"] = request.expireTime;
    }

    if (!Util.isUnset(request.noticeType)) {
      body["NoticeType"] = request.noticeType;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.quotaActionCode)) {
      body["QuotaActionCode"] = request.quotaActionCode;
    }

    if (!Util.isUnset(request.quotaCategory)) {
      body["QuotaCategory"] = request.quotaCategory;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTemplateQuotaItem",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTemplateQuotaItemResponse>(await this.callApi(params, req, runtime), new CreateTemplateQuotaItemResponse({}));
  }

  async createTemplateQuotaItem(request: CreateTemplateQuotaItemRequest): Promise<CreateTemplateQuotaItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTemplateQuotaItemWithOptions(request, runtime);
  }

  /**
    * In this example, the operation is called to delete a quota alert whose ID is `6b512ab7-da3a-4142-b529-2b2a9294****`.
    *
    * @param request DeleteQuotaAlarmRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteQuotaAlarmResponse
   */
  async deleteQuotaAlarmWithOptions(request: DeleteQuotaAlarmRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQuotaAlarmResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alarmId)) {
      body["AlarmId"] = request.alarmId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteQuotaAlarm",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteQuotaAlarmResponse>(await this.callApi(params, req, runtime), new DeleteQuotaAlarmResponse({}));
  }

  /**
    * In this example, the operation is called to delete a quota alert whose ID is `6b512ab7-da3a-4142-b529-2b2a9294****`.
    *
    * @param request DeleteQuotaAlarmRequest
    * @return DeleteQuotaAlarmResponse
   */
  async deleteQuotaAlarm(request: DeleteQuotaAlarmRequest): Promise<DeleteQuotaAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQuotaAlarmWithOptions(request, runtime);
  }

  async deleteTemplateQuotaItemWithOptions(request: DeleteTemplateQuotaItemRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTemplateQuotaItemResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTemplateQuotaItem",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTemplateQuotaItemResponse>(await this.callApi(params, req, runtime), new DeleteTemplateQuotaItemResponse({}));
  }

  async deleteTemplateQuotaItem(request: DeleteTemplateQuotaItemRequest): Promise<DeleteTemplateQuotaItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTemplateQuotaItemWithOptions(request, runtime);
  }

  /**
    * In this example, the operation is called to query the details of a quota whose ID is `q_security-groups` and whose name is Maximum Number of Security Groups. This quota belongs to Elastic Compute Service (ECS). The query result shows the details of the quota. The details include the name, ID, description, quota value, used quota, unit, and dimension of the quota. In this example, the quota name is `Maximum Number of Security Groups`. The quota ID is `q_security-groups`. The description is `The maximum number of security groups that can be created for the current account`. The quota value is `801`. The used quota is `26`. The quota unit is `Number of security groups`. The quota dimension is `{"regionId":"cn-hangzhou"}`.
    *
    * @param request GetProductQuotaRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetProductQuotaResponse
   */
  async getProductQuotaWithOptions(request: GetProductQuotaRequest, runtime: $Util.RuntimeOptions): Promise<GetProductQuotaResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dimensions)) {
      body["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.quotaActionCode)) {
      body["QuotaActionCode"] = request.quotaActionCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetProductQuota",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetProductQuotaResponse>(await this.callApi(params, req, runtime), new GetProductQuotaResponse({}));
  }

  /**
    * In this example, the operation is called to query the details of a quota whose ID is `q_security-groups` and whose name is Maximum Number of Security Groups. This quota belongs to Elastic Compute Service (ECS). The query result shows the details of the quota. The details include the name, ID, description, quota value, used quota, unit, and dimension of the quota. In this example, the quota name is `Maximum Number of Security Groups`. The quota ID is `q_security-groups`. The description is `The maximum number of security groups that can be created for the current account`. The quota value is `801`. The used quota is `26`. The quota unit is `Number of security groups`. The quota dimension is `{"regionId":"cn-hangzhou"}`.
    *
    * @param request GetProductQuotaRequest
    * @return GetProductQuotaResponse
   */
  async getProductQuota(request: GetProductQuotaRequest): Promise<GetProductQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProductQuotaWithOptions(request, runtime);
  }

  /**
    * In this example, the operation is called to query the details of a quota dimension whose key is `regionId`. The quota dimension belongs to Elastic Compute Service (ECS) Quotas by Instance Type whose service code is ecs-spec. The following query results are returned:
    * *   The values of the quota dimension include `cn-shenzhen`, `cn-beijing`, and `cn-hangzhou`.
    * *   The name of the quota dimension is `region`.
    *
    * @param request GetProductQuotaDimensionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetProductQuotaDimensionResponse
   */
  async getProductQuotaDimensionWithOptions(request: GetProductQuotaDimensionRequest, runtime: $Util.RuntimeOptions): Promise<GetProductQuotaDimensionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dependentDimensions)) {
      body["DependentDimensions"] = request.dependentDimensions;
    }

    if (!Util.isUnset(request.dimensionKey)) {
      body["DimensionKey"] = request.dimensionKey;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetProductQuotaDimension",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetProductQuotaDimensionResponse>(await this.callApi(params, req, runtime), new GetProductQuotaDimensionResponse({}));
  }

  /**
    * In this example, the operation is called to query the details of a quota dimension whose key is `regionId`. The quota dimension belongs to Elastic Compute Service (ECS) Quotas by Instance Type whose service code is ecs-spec. The following query results are returned:
    * *   The values of the quota dimension include `cn-shenzhen`, `cn-beijing`, and `cn-hangzhou`.
    * *   The name of the quota dimension is `region`.
    *
    * @param request GetProductQuotaDimensionRequest
    * @return GetProductQuotaDimensionResponse
   */
  async getProductQuotaDimension(request: GetProductQuotaDimensionRequest): Promise<GetProductQuotaDimensionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProductQuotaDimensionWithOptions(request, runtime);
  }

  /**
    * For more information about common request parameters, see [Common parameters](~~171299~~).
    *
    * @param request GetQuotaAlarmRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetQuotaAlarmResponse
   */
  async getQuotaAlarmWithOptions(request: GetQuotaAlarmRequest, runtime: $Util.RuntimeOptions): Promise<GetQuotaAlarmResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alarmId)) {
      body["AlarmId"] = request.alarmId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetQuotaAlarm",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQuotaAlarmResponse>(await this.callApi(params, req, runtime), new GetQuotaAlarmResponse({}));
  }

  /**
    * For more information about common request parameters, see [Common parameters](~~171299~~).
    *
    * @param request GetQuotaAlarmRequest
    * @return GetQuotaAlarmResponse
   */
  async getQuotaAlarm(request: GetQuotaAlarmRequest): Promise<GetQuotaAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQuotaAlarmWithOptions(request, runtime);
  }

  /**
    * In this example, the operation is called to query the details about an application whose ID is `d314d6ae-867d-484c-9009-3d421a80****`. The query result shows the details about the application. The details include the application ID, application time, expected quota value, and application result.
    *
    * @param request GetQuotaApplicationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetQuotaApplicationResponse
   */
  async getQuotaApplicationWithOptions(request: GetQuotaApplicationRequest, runtime: $Util.RuntimeOptions): Promise<GetQuotaApplicationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetQuotaApplication",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQuotaApplicationResponse>(await this.callApi(params, req, runtime), new GetQuotaApplicationResponse({}));
  }

  /**
    * In this example, the operation is called to query the details about an application whose ID is `d314d6ae-867d-484c-9009-3d421a80****`. The query result shows the details about the application. The details include the application ID, application time, expected quota value, and application result.
    *
    * @param request GetQuotaApplicationRequest
    * @return GetQuotaApplicationResponse
   */
  async getQuotaApplication(request: GetQuotaApplicationRequest): Promise<GetQuotaApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQuotaApplicationWithOptions(request, runtime);
  }

  async getQuotaTemplateServiceStatusWithOptions(request: GetQuotaTemplateServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetQuotaTemplateServiceStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceDirectoryId)) {
      body["ResourceDirectoryId"] = request.resourceDirectoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetQuotaTemplateServiceStatus",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQuotaTemplateServiceStatusResponse>(await this.callApi(params, req, runtime), new GetQuotaTemplateServiceStatusResponse({}));
  }

  async getQuotaTemplateServiceStatus(request: GetQuotaTemplateServiceStatusRequest): Promise<GetQuotaTemplateServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQuotaTemplateServiceStatusWithOptions(request, runtime);
  }

  async listAlarmHistoriesWithOptions(request: ListAlarmHistoriesRequest, runtime: $Util.RuntimeOptions): Promise<ListAlarmHistoriesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListAlarmHistories",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAlarmHistoriesResponse>(await this.callApi(params, req, runtime), new ListAlarmHistoriesResponse({}));
  }

  async listAlarmHistories(request: ListAlarmHistoriesRequest): Promise<ListAlarmHistoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAlarmHistoriesWithOptions(request, runtime);
  }

  /**
    * In this example, the operation is called to query the quotas on which a Container Service for Kubernetes (ACK) quota whose ID is `q_i5uzm3` depends. This quota is the maximum number of nodes that can be created in an ACK cluster. The query result indicates that the specified quota depends on the following three quotas:
    * *   An Elastic Compute Service (ECS) quota whose ID is `q_elastic-network-interfaces`. This quota is the maximum number of ENIs (Secondary ENIs) that can be owned by an Alibaba Cloud account. The quota is available in the following regions: `cn-shenzhen`, `cn-beijing`, and `cn-hangzhou`.
    * *   A Server Load Balancer (SLB) quota whose ID is `q_fh20b0`. This quota is the number of servers that can be attached to the backend of an SLB instance.
    * *   An SLB quota whose ID is `q_3mmbsp`. This quota is the number of SLB instances that can be owned by an Alibaba Cloud account.
    *
    * @param request ListDependentQuotasRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListDependentQuotasResponse
   */
  async listDependentQuotasWithOptions(request: ListDependentQuotasRequest, runtime: $Util.RuntimeOptions): Promise<ListDependentQuotasResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.quotaActionCode)) {
      body["QuotaActionCode"] = request.quotaActionCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDependentQuotas",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDependentQuotasResponse>(await this.callApi(params, req, runtime), new ListDependentQuotasResponse({}));
  }

  /**
    * In this example, the operation is called to query the quotas on which a Container Service for Kubernetes (ACK) quota whose ID is `q_i5uzm3` depends. This quota is the maximum number of nodes that can be created in an ACK cluster. The query result indicates that the specified quota depends on the following three quotas:
    * *   An Elastic Compute Service (ECS) quota whose ID is `q_elastic-network-interfaces`. This quota is the maximum number of ENIs (Secondary ENIs) that can be owned by an Alibaba Cloud account. The quota is available in the following regions: `cn-shenzhen`, `cn-beijing`, and `cn-hangzhou`.
    * *   A Server Load Balancer (SLB) quota whose ID is `q_fh20b0`. This quota is the number of servers that can be attached to the backend of an SLB instance.
    * *   An SLB quota whose ID is `q_3mmbsp`. This quota is the number of SLB instances that can be owned by an Alibaba Cloud account.
    *
    * @param request ListDependentQuotasRequest
    * @return ListDependentQuotasResponse
   */
  async listDependentQuotas(request: ListDependentQuotasRequest): Promise<ListDependentQuotasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDependentQuotasWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to call the ListProductDimensionGroups operation to query the dimension groups of Object Storage Service (OSS). In this example, a dimension group is returned. The group name is `OSS_Group`, the group code is `oss_wf1ngqmd7q`, and the group key is `chargeType`.
    *
    * @param request ListProductDimensionGroupsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListProductDimensionGroupsResponse
   */
  async listProductDimensionGroupsWithOptions(request: ListProductDimensionGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListProductDimensionGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProductDimensionGroups",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProductDimensionGroupsResponse>(await this.callApi(params, req, runtime), new ListProductDimensionGroupsResponse({}));
  }

  /**
    * This topic provides an example on how to call the ListProductDimensionGroups operation to query the dimension groups of Object Storage Service (OSS). In this example, a dimension group is returned. The group name is `OSS_Group`, the group code is `oss_wf1ngqmd7q`, and the group key is `chargeType`.
    *
    * @param request ListProductDimensionGroupsRequest
    * @return ListProductDimensionGroupsResponse
   */
  async listProductDimensionGroups(request: ListProductDimensionGroupsRequest): Promise<ListProductDimensionGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProductDimensionGroupsWithOptions(request, runtime);
  }

  /**
    * In this example, the operation is called to query the quota dimensions that are supported by Elastic Compute Service (ECS). The query results show all the quota dimensions that are supported by ECS.
    *
    * @param request ListProductQuotaDimensionsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListProductQuotaDimensionsResponse
   */
  async listProductQuotaDimensionsWithOptions(request: ListProductQuotaDimensionsRequest, runtime: $Util.RuntimeOptions): Promise<ListProductQuotaDimensionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.quotaCategory)) {
      body["QuotaCategory"] = request.quotaCategory;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListProductQuotaDimensions",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProductQuotaDimensionsResponse>(await this.callApi(params, req, runtime), new ListProductQuotaDimensionsResponse({}));
  }

  /**
    * In this example, the operation is called to query the quota dimensions that are supported by Elastic Compute Service (ECS). The query results show all the quota dimensions that are supported by ECS.
    *
    * @param request ListProductQuotaDimensionsRequest
    * @return ListProductQuotaDimensionsResponse
   */
  async listProductQuotaDimensions(request: ListProductQuotaDimensionsRequest): Promise<ListProductQuotaDimensionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProductQuotaDimensionsWithOptions(request, runtime);
  }

  /**
    * In this example, the operation is called to query the quotas whose instance type is `ecs.g5.2xlarge`. The quotas belong to Elastic Compute Service (ECS) Quotas by Instance Type. The query result includes the name, ID, unit, dimensions, and cycle of each quota.
    *
    * @param request ListProductQuotasRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListProductQuotasResponse
   */
  async listProductQuotasWithOptions(request: ListProductQuotasRequest, runtime: $Util.RuntimeOptions): Promise<ListProductQuotasResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dimensions)) {
      body["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.groupCode)) {
      body["GroupCode"] = request.groupCode;
    }

    if (!Util.isUnset(request.keyWord)) {
      body["KeyWord"] = request.keyWord;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.quotaActionCode)) {
      body["QuotaActionCode"] = request.quotaActionCode;
    }

    if (!Util.isUnset(request.quotaCategory)) {
      body["QuotaCategory"] = request.quotaCategory;
    }

    if (!Util.isUnset(request.sortField)) {
      body["SortField"] = request.sortField;
    }

    if (!Util.isUnset(request.sortOrder)) {
      body["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListProductQuotas",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProductQuotasResponse>(await this.callApi(params, req, runtime), new ListProductQuotasResponse({}));
  }

  /**
    * In this example, the operation is called to query the quotas whose instance type is `ecs.g5.2xlarge`. The quotas belong to Elastic Compute Service (ECS) Quotas by Instance Type. The query result includes the name, ID, unit, dimensions, and cycle of each quota.
    *
    * @param request ListProductQuotasRequest
    * @return ListProductQuotasResponse
   */
  async listProductQuotas(request: ListProductQuotasRequest): Promise<ListProductQuotasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProductQuotasWithOptions(request, runtime);
  }

  async listProductsWithOptions(request: ListProductsRequest, runtime: $Util.RuntimeOptions): Promise<ListProductsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListProducts",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProductsResponse>(await this.callApi(params, req, runtime), new ListProductsResponse({}));
  }

  async listProducts(request: ListProductsRequest): Promise<ListProductsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProductsWithOptions(request, runtime);
  }

  async listQuotaAlarmsWithOptions(request: ListQuotaAlarmsRequest, runtime: $Util.RuntimeOptions): Promise<ListQuotaAlarmsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alarmName)) {
      body["AlarmName"] = request.alarmName;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.quotaActionCode)) {
      body["QuotaActionCode"] = request.quotaActionCode;
    }

    if (!Util.isUnset(request.quotaDimensions)) {
      body["QuotaDimensions"] = request.quotaDimensions;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListQuotaAlarms",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListQuotaAlarmsResponse>(await this.callApi(params, req, runtime), new ListQuotaAlarmsResponse({}));
  }

  async listQuotaAlarms(request: ListQuotaAlarmsRequest): Promise<ListQuotaAlarmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQuotaAlarmsWithOptions(request, runtime);
  }

  async listQuotaApplicationTemplatesWithOptions(request: ListQuotaApplicationTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListQuotaApplicationTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dimensions)) {
      body["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.quotaActionCode)) {
      body["QuotaActionCode"] = request.quotaActionCode;
    }

    if (!Util.isUnset(request.quotaCategory)) {
      body["QuotaCategory"] = request.quotaCategory;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListQuotaApplicationTemplates",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListQuotaApplicationTemplatesResponse>(await this.callApi(params, req, runtime), new ListQuotaApplicationTemplatesResponse({}));
  }

  async listQuotaApplicationTemplates(request: ListQuotaApplicationTemplatesRequest): Promise<ListQuotaApplicationTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQuotaApplicationTemplatesWithOptions(request, runtime);
  }

  /**
    * In this example, the operation is called to query the details of an application that is submitted to increase a quota whose ID is `q_i5uzm3` and whose name is Maximum Number of Nodes. This quota belongs to Container Service for Kubernetes (ACK). The query result shows the details of the application. The details include the application ID, application time, requested quota, and application result. In this example, the application ID is `b926571d-cc09-4711-b547-58a615f0****`. The application time is `2021-01-15T09:13:53Z`. The expected quota value is `101`. The application result is `Agree`.
    *
    * @param request ListQuotaApplicationsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListQuotaApplicationsResponse
   */
  async listQuotaApplicationsWithOptions(request: ListQuotaApplicationsRequest, runtime: $Util.RuntimeOptions): Promise<ListQuotaApplicationsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.dimensions)) {
      body["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.keyWord)) {
      body["KeyWord"] = request.keyWord;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.quotaActionCode)) {
      body["QuotaActionCode"] = request.quotaActionCode;
    }

    if (!Util.isUnset(request.quotaCategory)) {
      body["QuotaCategory"] = request.quotaCategory;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListQuotaApplications",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListQuotaApplicationsResponse>(await this.callApi(params, req, runtime), new ListQuotaApplicationsResponse({}));
  }

  /**
    * In this example, the operation is called to query the details of an application that is submitted to increase a quota whose ID is `q_i5uzm3` and whose name is Maximum Number of Nodes. This quota belongs to Container Service for Kubernetes (ACK). The query result shows the details of the application. The details include the application ID, application time, requested quota, and application result. In this example, the application ID is `b926571d-cc09-4711-b547-58a615f0****`. The application time is `2021-01-15T09:13:53Z`. The expected quota value is `101`. The application result is `Agree`.
    *
    * @param request ListQuotaApplicationsRequest
    * @return ListQuotaApplicationsResponse
   */
  async listQuotaApplications(request: ListQuotaApplicationsRequest): Promise<ListQuotaApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQuotaApplicationsWithOptions(request, runtime);
  }

  async listQuotaApplicationsDetailForTemplateWithOptions(request: ListQuotaApplicationsDetailForTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ListQuotaApplicationsDetailForTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aliyunUid)) {
      body["AliyunUid"] = request.aliyunUid;
    }

    if (!Util.isUnset(request.batchQuotaApplicationId)) {
      body["BatchQuotaApplicationId"] = request.batchQuotaApplicationId;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.quotaActionCode)) {
      body["QuotaActionCode"] = request.quotaActionCode;
    }

    if (!Util.isUnset(request.quotaCategory)) {
      body["QuotaCategory"] = request.quotaCategory;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListQuotaApplicationsDetailForTemplate",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListQuotaApplicationsDetailForTemplateResponse>(await this.callApi(params, req, runtime), new ListQuotaApplicationsDetailForTemplateResponse({}));
  }

  async listQuotaApplicationsDetailForTemplate(request: ListQuotaApplicationsDetailForTemplateRequest): Promise<ListQuotaApplicationsDetailForTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQuotaApplicationsDetailForTemplateWithOptions(request, runtime);
  }

  async listQuotaApplicationsForTemplateWithOptions(request: ListQuotaApplicationsForTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ListQuotaApplicationsForTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applyEndTime)) {
      body["ApplyEndTime"] = request.applyEndTime;
    }

    if (!Util.isUnset(request.applyStartTime)) {
      body["ApplyStartTime"] = request.applyStartTime;
    }

    if (!Util.isUnset(request.batchQuotaApplicationId)) {
      body["BatchQuotaApplicationId"] = request.batchQuotaApplicationId;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.quotaActionCode)) {
      body["QuotaActionCode"] = request.quotaActionCode;
    }

    if (!Util.isUnset(request.quotaCategory)) {
      body["QuotaCategory"] = request.quotaCategory;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListQuotaApplicationsForTemplate",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListQuotaApplicationsForTemplateResponse>(await this.callApi(params, req, runtime), new ListQuotaApplicationsForTemplateResponse({}));
  }

  async listQuotaApplicationsForTemplate(request: ListQuotaApplicationsForTemplateRequest): Promise<ListQuotaApplicationsForTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQuotaApplicationsForTemplateWithOptions(request, runtime);
  }

  /**
    * By default, the quota template is enabled.
    *
    * @param request ModifyQuotaTemplateServiceStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyQuotaTemplateServiceStatusResponse
   */
  async modifyQuotaTemplateServiceStatusWithOptions(request: ModifyQuotaTemplateServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyQuotaTemplateServiceStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceStatus)) {
      body["ServiceStatus"] = request.serviceStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyQuotaTemplateServiceStatus",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyQuotaTemplateServiceStatusResponse>(await this.callApi(params, req, runtime), new ModifyQuotaTemplateServiceStatusResponse({}));
  }

  /**
    * By default, the quota template is enabled.
    *
    * @param request ModifyQuotaTemplateServiceStatusRequest
    * @return ModifyQuotaTemplateServiceStatusResponse
   */
  async modifyQuotaTemplateServiceStatus(request: ModifyQuotaTemplateServiceStatusRequest): Promise<ModifyQuotaTemplateServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyQuotaTemplateServiceStatusWithOptions(request, runtime);
  }

  async modifyTemplateQuotaItemWithOptions(request: ModifyTemplateQuotaItemRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTemplateQuotaItemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.quotaCategory)) {
      query["QuotaCategory"] = request.quotaCategory;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.desireValue)) {
      body["DesireValue"] = request.desireValue;
    }

    if (!Util.isUnset(request.dimensions)) {
      body["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.effectiveTime)) {
      body["EffectiveTime"] = request.effectiveTime;
    }

    if (!Util.isUnset(request.envLanguage)) {
      body["EnvLanguage"] = request.envLanguage;
    }

    if (!Util.isUnset(request.expireTime)) {
      body["ExpireTime"] = request.expireTime;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.noticeType)) {
      body["NoticeType"] = request.noticeType;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.quotaActionCode)) {
      body["QuotaActionCode"] = request.quotaActionCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTemplateQuotaItem",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTemplateQuotaItemResponse>(await this.callApi(params, req, runtime), new ModifyTemplateQuotaItemResponse({}));
  }

  async modifyTemplateQuotaItem(request: ModifyTemplateQuotaItemRequest): Promise<ModifyTemplateQuotaItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTemplateQuotaItemWithOptions(request, runtime);
  }

  /**
    * In this example, the operation is called to modify the information about a quota alert whose ID is `a2efa7fc-832f-47bb-8054-39e28012****` and whose name is `rules`. The alert threshold is changed from `150` to `160`.
    *
    * @param request UpdateQuotaAlarmRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateQuotaAlarmResponse
   */
  async updateQuotaAlarmWithOptions(request: UpdateQuotaAlarmRequest, runtime: $Util.RuntimeOptions): Promise<UpdateQuotaAlarmResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alarmId)) {
      body["AlarmId"] = request.alarmId;
    }

    if (!Util.isUnset(request.alarmName)) {
      body["AlarmName"] = request.alarmName;
    }

    if (!Util.isUnset(request.threshold)) {
      body["Threshold"] = request.threshold;
    }

    if (!Util.isUnset(request.thresholdPercent)) {
      body["ThresholdPercent"] = request.thresholdPercent;
    }

    if (!Util.isUnset(request.thresholdType)) {
      body["ThresholdType"] = request.thresholdType;
    }

    if (!Util.isUnset(request.webHook)) {
      body["WebHook"] = request.webHook;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateQuotaAlarm",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateQuotaAlarmResponse>(await this.callApi(params, req, runtime), new UpdateQuotaAlarmResponse({}));
  }

  /**
    * In this example, the operation is called to modify the information about a quota alert whose ID is `a2efa7fc-832f-47bb-8054-39e28012****` and whose name is `rules`. The alert threshold is changed from `150` to `160`.
    *
    * @param request UpdateQuotaAlarmRequest
    * @return UpdateQuotaAlarmResponse
   */
  async updateQuotaAlarm(request: UpdateQuotaAlarmRequest): Promise<UpdateQuotaAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateQuotaAlarmWithOptions(request, runtime);
  }

}
