// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateQuotaAlarmRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  alarmName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * config
   */
  productCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * q_hvnoqv
   */
  quotaActionCode?: string;
  quotaDimensions?: CreateQuotaAlarmRequestQuotaDimensions[];
  /**
   * @example
   * 150
   */
  threshold?: number;
  /**
   * @example
   * 50
   */
  thresholdPercent?: number;
  /**
   * @example
   * used
   */
  thresholdType?: string;
  /**
   * @example
   * https://alert.aliyun.com/callback
   */
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
  /**
   * @example
   * 18b3be23-b7b0-4d45-91bc-d0c331aa****
   */
  alarmId?: string;
  /**
   * @example
   * BD219E2B-E687-45EE-B5F3-61FB730551B1
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateQuotaAlarmResponseBody;
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
  /**
   * @remarks
   * The mode in which you want the application to be reviewed. Valid values:
   * 
   * *   Sync: The application is reviewed in a synchronous manner. Quota Center automatically reviews the application. The result is returned immediately after you submit the application. However, the chance of an approval for an application that is reviewed in Sync mode is lower than the chance of an approval for an application that is reviewed in Async mode. The validity period of the new quota value is 1 hour.
   * *   Async: The application is reviewed in an asynchronous manner. An Alibaba Cloud support engineer reviews the application. The chance of an approval for an application that is reviewed in Async mode is higher than the chance of an approval for an application that is reviewed in Sync mode. The validity period of the new quota value is one month.
   * 
   * > This parameter is available only for ECS Quotas by Instance Type.
   * 
   * @example
   * Sync
   */
  auditMode?: string;
  /**
   * @remarks
   * The requested value of the quota.
   * 
   * > 
   * 
   * *   You can specify the DesireValue parameter based on the values of the `TotalUsage` and `ApplicableRange` parameters that are returned by the [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html) operation.
   * 
   * *   Applications are reviewed by the technical support team of each Alibaba Cloud service. To increase the success rate of your application, you must specify a reasonable quota value and detailed reasons when you submit an application to increase the value of the quota.
   * 
   * This parameter is required.
   * 
   * @example
   * 804
   */
  desireValue?: number;
  /**
   * @remarks
   * The quota dimensions.
   */
  dimensions?: CreateQuotaApplicationRequestDimensions[];
  /**
   * @remarks
   * The end time of the validity period of the quota. Specify the value in UTC. This parameter is valid only if you set the QuotaCategory parameter to WhiteListLabel.
   * 
   * >  If you do not specify an end time, the default end time is 99 years after the quota application is submitted.
   * 
   * @example
   * 2021-01-19T09:25:56Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The language of the quota alert notification. Valid values:
   * 
   * *   zh (default value): Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  envLanguage?: string;
  /**
   * @remarks
   * The start time of the validity period of the quota. Specify the value in UTC. This parameter is valid only if you set the QuotaCategory parameter to WhiteListLabel.
   * 
   * >  If you do not specify a start time, the default start time is the time when the quota application is submitted.
   * 
   * @example
   * 2021-01-20T09:25:56Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Specifies whether to send a notification about the application result. Valid values:
   * 
   * *   0 (default value): sends a notification about the application result.
   * *   3: A notification about the application result is sent.
   * 
   * @example
   * 0
   */
  noticeType?: number;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * >  To query the abbreviation of an Alibaba Cloud service name, check the `ProductCode` parameter that is described in [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * >  To query the quota ID of an Alibaba Cloud service, check the `QuotaActionCode` parameter that is described in [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html).
   * 
   * This parameter is required.
   * 
   * @example
   * q_security-groups
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The type of the quota.
   * 
   * *   CommonQuota (default value): general quota
   * *   FlowControl: API rate limit
   * *   WhiteListLabel: whitelist quota
   * 
   * @example
   * CommonQuota
   */
  quotaCategory?: string;
  /**
   * @remarks
   * The reason for the application.
   * 
   * > Applications are reviewed by the technical support team of each Alibaba Cloud service. To increase the success rate of your application, you must specify a reasonable quota value and detailed reasons when you submit an application to increase the value of the quota.
   * 
   * This parameter is required.
   * 
   * @example
   * Scale Out
   */
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * d314d6ae-867d-484c-9009-3d421a80****
   */
  applicationId?: string;
  /**
   * @remarks
   * The time when the application was submitted.
   * 
   * @example
   * 2021-01-19T09:25:56Z
   */
  applyTime?: string;
  /**
   * @remarks
   * The quota value that is approved.
   * 
   * @example
   * 804
   */
  approveValue?: number;
  /**
   * @remarks
   * The result of the application.
   * 
   * @example
   * Agree
   */
  auditReason?: string;
  /**
   * @remarks
   * The requested value of the quota.
   * 
   * @example
   * 12
   */
  desireValue?: number;
  /**
   * @remarks
   * The quota dimension.
   * 
   * @example
   * {"regionId":"cn-hangzhou"}
   */
  dimension?: { [key: string]: any };
  /**
   * @remarks
   * The time when the new quota value takes effect.
   * 
   * @example
   * 2021-01-19T09:25:56Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The time when the new quota expires.
   * 
   * @example
   * 2021-01-20T09:25:56Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether Quota Center sends a notification about the application result. Valid values:
   * 
   * *   0: Quota Center does not send a notification.
   * *   3: Quota Center sends a notification.
   * 
   * @example
   * 3
   */
  noticeType?: number;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * @example
   * ecs-spec
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * ecs.c5.large
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the quota.
   * 
   * @example
   * acs:quotas:cn-hangzhou:*:quota/ecs/ecs.m2.medium/prepaid/classic/instancetype/cn-hangzhou-b
   */
  quotaArn?: string;
  /**
   * @remarks
   * The description of the quota.
   * 
   * @example
   * ecs.c5.large
   */
  quotaDescription?: string;
  /**
   * @remarks
   * The name of the quota.
   * 
   * @example
   * ecs.c5.large
   */
  quotaName?: string;
  /**
   * @remarks
   * The unit of the quota.
   * 
   * @example
   * AMOUNT
   */
  quotaUnit?: string;
  /**
   * @remarks
   * The reason for the application.
   * 
   * @example
   * Scale Out
   */
  reason?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D47B3A10-CDAC-5412-B2EE-EC9A3DBE9053
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the application. Valid values:
   * 
   * *   Disagree: The application is rejected.
   * *   Agree: The application is approved.
   * *   Process: The application is being reviewed.
   * *   Cancel: The application is canceled.
   * 
   * @example
   * Process
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateQuotaApplicationResponseBody;
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
  /**
   * @remarks
   * The Alibaba Cloud accounts that correspond to the resource directory members for which the quotas are applied.
   * 
   * >  You can submit a quota increase application for a maximum of 50 members at a time. For more information about the members of a resource directory, see [ListAccounts](https://help.aliyun.com/document_detail/604207.html).
   * 
   * This parameter is required.
   */
  aliyunUids?: string[];
  /**
   * @remarks
   * The requested value of the quota.
   * 
   * > 
   * 
   * *   You can specify DesireValue based on the values of `TotalUsage` and `ApplicableRange` in the response to the [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html) operation.
   * 
   * *   Applications are reviewed by the technical support team of each Alibaba Cloud service. To increase the success rate of your application, specify a reasonable quota value and a detailed reason.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  desireValue?: number;
  /**
   * @remarks
   * The quota dimensions.
   */
  dimensions?: CreateQuotaApplicationsForTemplateRequestDimensions[];
  /**
   * @remarks
   * The start time of the validity period of the quota. Specify the value in UTC. This parameter is valid only if you set the QuotaCategory parameter to WhiteListLabel.
   * 
   * >  If you do not specify a start time, the value is the time when the quota application is submitted.
   * 
   * @example
   * 2021-01-19T09:25:56Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The language of the notification about the application result. Valid values:
   * 
   * *   zh (default): Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  envLanguage?: string;
  /**
   * @remarks
   * The end time of the validity period of the quota. Specify the value in UTC. This parameter is valid only if you set the QuotaCategory parameter to WhiteListLabel.
   * 
   * >  If you do not specify an end time, the value is 99 years after the start time of the validity period.
   * 
   * @example
   * 2021-01-20T09:25:56Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Specifies whether to send a notification about the application result. Valid values:
   * 
   * *   0 (default): no
   * *   3: yes
   * 
   * @example
   * 0
   */
  noticeType?: number;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * >  To query the abbreviation of an Alibaba Cloud service name, call the [ListProducts](https://help.aliyun.com/document_detail/440555.html) operation and check the value of `ProductCode` in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs-spec
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * >  To query the quota ID of an Alibaba Cloud service, call the [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html) and check the value of `QuotaActionCode` in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs.g5.2xlarge
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The quota type. Valid values:
   * 
   * *   CommonQuota: general quota
   * *   FlowControl: API rate limit
   * *   WhiteListLabel: privilege
   * 
   * This parameter is required.
   * 
   * @example
   * CommonQuota
   */
  quotaCategory?: string;
  /**
   * @remarks
   * The reason for the quota application.
   * 
   * >  Applications are reviewed by the technical support team of each Alibaba Cloud service. To increase the success rate of your application, you must specify a reasonable quota value and detailed reasons when you submit the application.
   * 
   * This parameter is required.
   * 
   * @example
   * Scale Out
   */
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
  /**
   * @remarks
   * The Alibaba Cloud accounts for which the quotas are applied.
   */
  aliyunUids?: string[];
  /**
   * @remarks
   * The ID of the quota application batch.
   * 
   * @example
   * d314d6ae-867d-484c-9009-3d421a80****
   */
  batchQuotaApplicationId?: string;
  /**
   * @remarks
   * The Alibaba Cloud accounts of the members in a resource directory whose quota increase request is rejected, and the reason for the rejection.
   */
  failResults?: CreateQuotaApplicationsForTemplateResponseBodyFailResults[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8FF8CAF0-29D9-4F11-B6A4-FD2CBCA016D3
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateQuotaApplicationsForTemplateResponseBody;
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
  /**
   * @remarks
   * The requested value of the quota.
   * 
   * > 
   * 
   * *   You can specify DesireValue based on the values of `TotalUsage` and `ApplicableRange` in the response to the [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html) operation.
   * 
   * *   Applications are reviewed by the technical support team for each cloud service. To increase the success rate of your application, specify a reasonable quota value and a detailed reason.
   * 
   * This parameter is required.
   * 
   * @example
   * 804
   */
  desireValue?: number;
  /**
   * @remarks
   * The quota dimensions.
   */
  dimensions?: CreateTemplateQuotaItemRequestDimensions[];
  /**
   * @remarks
   * The start time of the validity period of the quota. Specify the value in UTC. This parameter is valid only if you set the QuotaCategory parameter to WhiteListLabel.
   * 
   * > If you leave this parameter empty, the quota takes effect immediately.
   * 
   * @example
   * 2021-01-19T09:25:56Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The language of the quota alert notification. Valid values:
   * 
   * *   zh (default value): Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  envLanguage?: string;
  /**
   * @remarks
   * The end time of the validity period of the quota. Specify the value in UTC. This parameter is valid only if you set the QuotaCategory parameter to WhiteListLabel.
   * 
   * > If you leave this parameter empty, no end time is specified.
   * 
   * @example
   * 2021-01-20T09:25:56Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Specifies whether to send a notification about the application result. Valid values:
   * 
   * *   0 (default value): no
   * *   3: yes
   * 
   * @example
   * 0
   */
  noticeType?: number;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * >  To query the abbreviation of an Alibaba Cloud service name, call the [ListProducts](https://help.aliyun.com/document_detail/440555.html) operation and check the value of `ProductCode` in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * >  To obtain the quota ID of an Alibaba Cloud service, call the [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html) operation and check the value of `QuotaActionCode` in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * q_security-groups
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The quota type. Valid values:
   * 
   * *   CommonQuota: general quota
   * *   WhiteListLabel: privilege
   * *   FlowControl: API rate limit
   * 
   * @example
   * CommonQuota
   */
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
  /**
   * @remarks
   * The ID of the quota template.
   * 
   * @example
   * 1****
   */
  id?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D47B3A10-CDAC-5412-B2EE-EC9A3DBE9053
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTemplateQuotaItemResponseBody;
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
  /**
   * @remarks
   * The ID of the quota alert.
   * 
   * >  You can call the [ListQuotaAlarms](https://help.aliyun.com/document_detail/440561.html) operation to obtain the ID of a quota alert.
   * 
   * This parameter is required.
   * 
   * @example
   * 6b512ab7-da3a-4142-b529-2b2a9294****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A95C65B3-7CF4-469E-B1D5-1CA0628A6411
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteQuotaAlarmResponseBody;
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
  /**
   * @remarks
   * The ID of the quota template.
   * 
   * You can call the [ListQuotaApplicationTemplates](https://help.aliyun.com/document_detail/450403.html) operation to obtain the ID of a quota template.
   * 
   * This parameter is required.
   * 
   * @example
   * 1****
   */
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
  /**
   * @remarks
   * The ID of the quota template.
   * 
   * @example
   * 1****
   */
  id?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D47B3A10-CDAC-5412-B2EE-EC9A3DBE9053
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTemplateQuotaItemResponseBody;
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
  /**
   * @remarks
   * The quota dimensions.
   * 
   * @example
   * {\\"regionId\\":\\"cn-beijing\\"}
   */
  dimensions?: GetProductQuotaRequestDimensions[];
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * > For more information, see [Alibaba Cloud services that support Quota Center](https://help.aliyun.com/document_detail/182368.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the quota.
   * 
   * This parameter is required.
   * 
   * @example
   * q_security-groups
   */
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
  /**
   * @remarks
   * The details of the quota.
   */
  quota?: GetProductQuotaResponseBodyQuota;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8FF8CAF0-29D9-4F11-B6A4-FD2CBCA016D3
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProductQuotaResponseBody;
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
  /**
   * @remarks
   * The information about quota dimensions.
   */
  dependentDimensions?: GetProductQuotaDimensionRequestDependentDimensions[];
  /**
   * @remarks
   * The key of the quota dimension.
   * 
   * @example
   * regionId
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * > For more information, see [Alibaba Cloud services that support Quota Center](https://help.aliyun.com/document_detail/182368.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ecs-spec
   */
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
  /**
   * @remarks
   * The details of the quota dimension.
   */
  quotaDimension?: GetProductQuotaDimensionResponseBodyQuotaDimension;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1FA5F0E2-368E-4BA4-A8D0-6060FC6BB8F3
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProductQuotaDimensionResponseBody;
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
  /**
   * @remarks
   * The ID of the quota alert.
   * 
   * For more information about how to query the ID of a quota alert, see [ListQuotaAlarms](https://help.aliyun.com/document_detail/184348.html).
   * 
   * @example
   * 78d7e436-4b25-4897-84b5-d7b656bb****
   */
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
  /**
   * @remarks
   * The details of the quota alert.
   */
  quotaAlarm?: GetQuotaAlarmResponseBodyQuotaAlarm;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 81B9D511-F3DD-43B1-9A81-1795DDB52ADF
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQuotaAlarmResponseBody;
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * d314d6ae-867d-484c-9009-3d421a80****
   */
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
  /**
   * @remarks
   * The details about the application.
   */
  quotaApplication?: GetQuotaApplicationResponseBodyQuotaApplication;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7BBD1D37-094C-4485-8B7D-64682F82BC18
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQuotaApplicationResponseBody;
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

export class GetQuotaApplicationApprovalRequest extends $tea.Model {
  /**
   * @remarks
   * The quota application ID.
   * 
   * For more information about how to obtain the ID of a quota application, see [ListQuotaApplications](https://help.aliyun.com/document_detail/440568.html).
   * 
   * @example
   * d314d6ae-867d-484c-9009-3d42****
   */
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

export class GetQuotaApplicationApprovalResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether retries are allowed. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * false
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * PARAMETER.ILLEGALL
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * Parameter[%s] is required.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The parameters whose values are invalid.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * RAM.PERMISSION.DENIED
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * You are not authorized to do this action or the API input parameter is invalid.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The information about quota application approval.
   */
  module?: GetQuotaApplicationApprovalResponseBodyModule;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7ED584FB-ECBF-4A2A-969D-F54D25EFABF9
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowRetry: 'AllowRetry',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorArgs: 'ErrorArgs',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      httpStatusCode: 'HttpStatusCode',
      module: 'Module',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowRetry: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorArgs: { 'type': 'array', 'itemType': 'any' },
      errorCode: 'string',
      errorMsg: 'string',
      httpStatusCode: 'number',
      module: GetQuotaApplicationApprovalResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaApplicationApprovalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQuotaApplicationApprovalResponseBody;
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
      body: GetQuotaApplicationApprovalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaTemplateServiceStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * rd-pG****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D47B3A10-CDAC-5412-B2EE-EC9A3DBE9053
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the quota template.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQuotaTemplateServiceStatusResponseBody;
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
  /**
   * @remarks
   * The ID of the alert.
   * 
   * @example
   * 18b3be23-b7b0-4d45-91bc-d0c331aa****
   */
  alarmId?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * @example
   * 20201024
   */
  endTime?: number;
  /**
   * @remarks
   * The keyword that is used for the query.
   * 
   * @example
   * Quantity
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of records that can be returned for the query.
   * 
   * Valid values: 1 to 200. Default value: 30.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position from which you want to start the query. If you leave this parameter empty, the query starts from the beginning.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * > For more information, see [Alibaba Cloud services that support Quota Center](https://help.aliyun.com/document_detail/182368.html).
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * @example
   * 20201020
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
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
      alarmId: 'string',
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
  /**
   * @remarks
   * The details of the quota alert records.
   */
  alarmHistories?: ListAlarmHistoriesResponseBodyAlarmHistories[];
  /**
   * @remarks
   * The maximum number of records that are returned for the query.
   * 
   * @example
   * 4
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position at which the query ends. An empty value indicates that all data is returned.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CB38DDF9-B1E0-48C1-9966-19C443C2841E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records that are returned for the query.
   * 
   * @example
   * 4
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAlarmHistoriesResponseBody;
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
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * > For more information, see [Alibaba Cloud services that support Quota Center](https://help.aliyun.com/document_detail/182368.html).
   * 
   * This parameter is required.
   * 
   * @example
   * csk
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * This parameter is required.
   * 
   * @example
   * q_i5uzm3
   */
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
  /**
   * @remarks
   * The quotas on which the specified quota depends.
   */
  quotas?: ListDependentQuotasResponseBodyQuotas[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 920D8A47-26BB-49FA-A09F-F98D7DAA55F3
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDependentQuotasResponseBody;
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
  /**
   * @remarks
   * The maximum number of records that can be returned for the query. Valid values: 1 to 200. Default value: 30.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position from which you want to start the query. If you leave this parameter empty, the query starts from the beginning.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The service code.
   * 
   * > For more information, see [Alibaba Cloud services that support Quota Center](https://help.aliyun.com/document_detail/182368.html).
   * 
   * This parameter is required.
   * 
   * @example
   * oss
   */
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
  /**
   * @remarks
   * The dimension groups.
   */
  dimensionGroups?: ListProductDimensionGroupsResponseBodyDimensionGroups[];
  /**
   * @remarks
   * The maximum number of records that are returned for the query.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position at which the query ends. An empty value indicates that all data is returned.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 057D210F-F2FC-5329-A536-26C16628BB09
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records that are returned for the query.
   * 
   * @example
   * 1
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProductDimensionGroupsResponseBody;
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
  /**
   * @remarks
   * The maximum number of records that can be returned for the query.
   * 
   * Valid values: 1 to 200. Default value: 30.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position from which you want to start the query. If you leave this parameter empty, the query starts from the beginning.
   * 
   * @example
   * 0
   */
  nextToken?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * > For more information, see [Alibaba Cloud services that support Quota Center](https://help.aliyun.com/document_detail/182368.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the quota. Valid values:
   * 
   * *   FlowControl: API rate limit.
   * *   CommonQuota: general quota. This is the default value.
   * 
   * @example
   * CommonQuota
   */
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
  /**
   * @remarks
   * The maximum number of records that are returned for the query.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position at which the query ends. An empty value indicates that all data is returned.
   * 
   * @example
   * 10
   */
  nextToken?: string;
  /**
   * @remarks
   * The quota dimensions.
   */
  quotaDimensions?: ListProductQuotaDimensionsResponseBodyQuotaDimensions[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7ED584FB-ECBF-4A2A-969D-F54D25EFABF9
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records that are returned for the query.
   * 
   * @example
   * 10
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProductQuotaDimensionsResponseBody;
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
  /**
   * @remarks
   * The quota dimensions.
   */
  dimensions?: ListProductQuotasRequestDimensions[];
  /**
   * @remarks
   * The code of the dimension group.
   * 
   * @example
   * entconsole_w1j3msbo2g
   */
  groupCode?: string;
  /**
   * @remarks
   * The keyword that you want to use to search for the quotas.
   * 
   * @example
   * ecs-spec
   */
  keyWord?: string;
  /**
   * @remarks
   * The maximum number of records that can be returned for the query.
   * 
   * Valid values: 1 to 100. Default value: 30.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position from which you want to start the query. If you leave this parameter empty, the query starts from the beginning.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * >  To query the abbreviation of an Alibaba Cloud service name, call the [ListProducts](https://help.aliyun.com/document_detail/440555.html) operation and check the value of the `ProductCode` parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs-spec
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * ecs.g5.2xlarge
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The type of the quota. Valid values:
   * 
   * *   CommonQuota (default value): general quota
   * *   FlowControl: API rate limit
   * *   WhiteListLabel: whitelist quota
   * 
   * @example
   * FlowControl
   */
  quotaCategory?: string;
  /**
   * @remarks
   * The field based on which you want to sort the returned records. Valid values:
   * 
   * *   TIME: The returned records are sorted by the last update time.
   * *   TOTAL: The returned records are sorted by the usage of the total quota.
   * *   RESERVED: The returned records are sorted by the usage of the reserved quota.
   * 
   * >  This parameter is available only for quotas that belong to ECS Quotas by Instance Type. You can leave this parameter empty.
   * 
   * @example
   * TIME
   */
  sortField?: string;
  /**
   * @remarks
   * The order in which you want to sort the returned records. Valid values:
   * 
   * *   Ascending: ascending order
   * *   Descending: descending order
   * 
   * >  This parameter is available only for quotas that belong to ECS Quotas by Instance Type. You can leave this parameter empty.
   * 
   * @example
   * Ascending
   */
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
  /**
   * @remarks
   * The maximum number of records that are returned for the query.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position at which the query ends. An empty value indicates that all data is returned.
   * 
   * @example
   * AAAAAd98/tlL5GF2aM7UMKQGM8LZesIPr0CbfxASQvHV/pwcmVKNfdBbW8OPld3NvG9Cy8+dNcyFzyUttQA3IONfBhRGpXFyiVoTgK+dupBsP2mX
   */
  nextToken?: string;
  /**
   * @remarks
   * The queried quotas.
   */
  quotas?: ListProductQuotasResponseBodyQuotas[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D0131FD5-5397-44FE-BF5A-4B7165B813CC
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records that are returned for the query.
   * 
   * @example
   * 4
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProductQuotasResponseBody;
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
  /**
   * @remarks
   * The maximum number of records that can be returned for the query.
   * 
   * Valid values: 1 to 200. Default value: 30.
   * 
   * @example
   * 4
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position from which you want to start the query. If you leave this parameter empty, the query starts from the beginning.
   * 
   * @example
   * 4
   */
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
  /**
   * @remarks
   * The maximum number of records that are returned for the query.
   * 
   * @example
   * 4
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position at which the query ends. An empty value indicates that all data is returned.
   * 
   * @example
   * 4
   */
  nextToken?: string;
  /**
   * @remarks
   * The information of the Alibaba Cloud service.
   */
  productInfo?: ListProductsResponseBodyProductInfo[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1DA9C136-11BC-4C39-ADC6-B86276128072
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records that are returned for the query.
   * 
   * @example
   * 1
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProductsResponseBody;
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
  /**
   * @remarks
   * The name of the alert.
   * 
   * @example
   * rules
   */
  alarmName?: string;
  /**
   * @remarks
   * The maximum number of records that you want to return for the query.
   * 
   * Valid values: 1 to 200. Default value: 30.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position from which you want to start the query.
   * 
   * > An empty value indicates that the query starts from the beginning.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * >  To query the abbreviation of an Alibaba Cloud service name, call the [ListProducts](https://help.aliyun.com/document_detail/440554.html) operation and check the value of `ProductCode` in the response.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * > 
   * 
   * *   To obtain the quota ID of a cloud service, call the [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html) operation and check the value of `QuotaActionCode` in the response.
   * 
   * *   If you specify this parameter, you must specify `ProductCode`.
   * 
   * @example
   * q_hvnoqv
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The quota dimensions.
   */
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
  /**
   * @remarks
   * The maximum number of records that are returned for the query.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position at which the query ends.
   * 
   * > An empty value indicates that all data is returned.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The details about the quota alert.
   */
  quotaAlarms?: ListQuotaAlarmsResponseBodyQuotaAlarms[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 87F3B755-3BD2-4C76-B36A-93247002918C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of quota alerts.
   * 
   * @example
   * 2
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListQuotaAlarmsResponseBody;
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
  /**
   * @remarks
   * The quota dimensions.
   */
  dimensions?: ListQuotaApplicationTemplatesRequestDimensions[];
  /**
   * @remarks
   * The ID of the quota item.
   * 
   * @example
   * 1****
   */
  id?: string;
  /**
   * @remarks
   * The maximum number of records that can be returned for the query. Valid values: 1 to 100. Default value: 30.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position from which you want to start the query.
   * 
   * > If you leave this parameter empty, the query starts from the beginning.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * >  To query the abbreviation of an Alibaba Cloud service name, call the [ListProducts](https://help.aliyun.com/document_detail/440555.html) operation and check the value of `ProductCode` in the response.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the quota.
   * 
   * @example
   * q_security-groups
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The type of the quota. Valid values:
   * 
   * *   CommonQuota: general quota
   * *   WhiteListLabel: privilege
   * *   FlowControl: API rate limit
   * 
   * @example
   * CommonQuota
   */
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
  /**
   * @remarks
   * The maximum number of records returned for the query.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position at which the query ends.
   * 
   * > An empty value indicates that all data is returned.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The queried quota templates.
   */
  quotaApplicationTemplates?: ListQuotaApplicationTemplatesResponseBodyQuotaApplicationTemplates[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D47B3A10-CDAC-5412-B2EE-EC9A3DBE9053
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records returned for the query.
   * 
   * @example
   * 40
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListQuotaApplicationTemplatesResponseBody;
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
  /**
   * @remarks
   * The quota dimensions.
   */
  dimensions?: ListQuotaApplicationsRequestDimensions[];
  /**
   * @remarks
   * The keyword that you want to use to search for the application.
   * 
   * @example
   * Cluster
   */
  keyWord?: string;
  /**
   * @remarks
   * The maximum number of records that can be returned for the query.
   * 
   * Valid values: 1 to 200. Default value: 30.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position from which you want to start the query. If you leave this parameter empty, the query starts from the beginning.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * @example
   * csk
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the quota.
   * 
   * @example
   * q_i5uzm3
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The type of the quota. Valid values:
   * 
   * *   CommonQuota: general quota
   * *   FlowControl: API rate limit
   * *   WhiteListLabel: whitelist quota
   * 
   * @example
   * CommonQuota
   */
  quotaCategory?: string;
  /**
   * @remarks
   * The status of the application. Valid values:
   * 
   * *   Disagree: rejects the application.
   * *   Agree: approves the application.
   * *   Process: reviews the application.
   * *   Cancel: cancels the application.
   * 
   * @example
   * Agree
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The maximum number of records that are returned for the query.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position at which the query ends. An empty value indicates that all data is returned.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The details of the applications.
   */
  quotaApplications?: ListQuotaApplicationsResponseBodyQuotaApplications[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 730925FB-0BD0-40AC-AF3A-A6C6E9716879
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of applications.
   * 
   * @example
   * 1
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListQuotaApplicationsResponseBody;
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
  /**
   * @remarks
   * The Alibaba Cloud account that is used to submit the quota increase application.
   * 
   * @example
   * 135048337611****
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The ID of the quota application batch.
   * 
   * @example
   * d314d6ae-867d-484c-9009-3d421a80****
   */
  batchQuotaApplicationId?: string;
  /**
   * @remarks
   * The maximum number of records that can be returned for the query.
   * 
   * Valid values: 1 to 100. Default value: 30.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position from which you want to start the query.
   * 
   * >  An empty value indicates that the query starts from the beginning.
   * 
   * @example
   * 4
   */
  nextToken?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * >  To query the abbreviation of an Alibaba Cloud service name, call the [ListProducts](https://help.aliyun.com/document_detail/440555.html) operation and check the value of `ProductCode` in the response.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * ecs.c5.large
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The quota type. Valid values:
   * 
   * *   CommonQuota: general quota
   * *   FlowControl: API rate limit
   * *   WhiteListLabel: privilege
   * 
   * @example
   * CommonQuota
   */
  quotaCategory?: string;
  /**
   * @remarks
   * The approval state of the quota increase application. Valid values:
   * 
   * *   Disagree: The application is rejected.
   * *   Agree: The application is approved.
   * *   Process: The application is in review.
   * *   Cancel: The application is canceled.
   * 
   * @example
   * Agree
   */
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
  /**
   * @remarks
   * The maximum number of records that can be returned for the query.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position from which you want to start the query.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The details of the quota increase application.
   */
  quotaApplications?: ListQuotaApplicationsDetailForTemplateResponseBodyQuotaApplications[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D47B3A10-CDAC-5412-B2EE-EC9A3DBE9053
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records that are returned for the query.
   * 
   * @example
   * 9
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListQuotaApplicationsDetailForTemplateResponseBody;
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
  /**
   * @remarks
   * The UTC time when the quota application ends.
   * 
   * @example
   * 2023-05-22T16:00:00Z
   */
  applyEndTime?: string;
  /**
   * @remarks
   * The UTC time when the quota application starts.
   * 
   * @example
   * 2023-05-22T16:00:00Z
   */
  applyStartTime?: string;
  /**
   * @remarks
   * The ID of the quota application batch.
   * 
   * @example
   * d314d6ae-867d-484c-9009-3d421a80****
   */
  batchQuotaApplicationId?: string;
  /**
   * @remarks
   * The maximum number of entries to return for a single request.
   * 
   * Valid values: 1 to 100. Default value: 30.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position from which you want to start the query.
   * 
   * >  An empty value indicates that the query starts from the beginning.
   * 
   * @example
   * 4
   */
  nextToken?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * >  To query the abbreviation of an Alibaba Cloud service name, call the [ListProducts](https://help.aliyun.com/document_detail/440555.html) operation and check the value of `ProductCode` in the response.
   * 
   * @example
   * ecs-spec
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * ecs.g5.2xlarge
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The quota type. Valid values:
   * 
   * *   CommonQuota: general quota
   * *   FlowControl: API rate limit
   * *   WhiteListLabel: privilege
   * 
   * @example
   * CommonQuota
   */
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
  /**
   * @remarks
   * The maximum number of records that can be returned for the query.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position from which you want to start the query.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The queried quota application records.
   */
  quotaBatchApplications?: ListQuotaApplicationsForTemplateResponseBodyQuotaBatchApplications[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D47B3A10-CDAC-5412-B2EE-EC9A3DBE9053
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records that are returned for the query.
   * 
   * @example
   * 67
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListQuotaApplicationsForTemplateResponseBody;
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
  /**
   * @remarks
   * The status of the quota template. Valid values:
   * 
   * *   \\-1: The quota template is disabled.
   * *   1: The quota template is enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D47B3A10-CDAC-5412-B2EE-EC9A3DBE9053
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the quota template.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyQuotaTemplateServiceStatusResponseBody;
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
  /**
   * @example
   * 804
   */
  desireValue?: number;
  dimensions?: ModifyTemplateQuotaItemRequestDimensions[];
  /**
   * @example
   * 2021-01-19T09:25:56Z
   */
  effectiveTime?: string;
  /**
   * @example
   * zh
   */
  envLanguage?: string;
  /**
   * @example
   * 2021-01-20T09:25:56Z
   */
  expireTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1****
   */
  id?: string;
  /**
   * @example
   * 0
   */
  noticeType?: number;
  /**
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @example
   * q_security-groups
   */
  quotaActionCode?: string;
  /**
   * @example
   * CommonQuota
   */
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
  /**
   * @example
   * 1****
   */
  id?: string;
  /**
   * @example
   * D47B3A10-CDAC-5412-B2EE-EC9A3DBE9053
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyTemplateQuotaItemResponseBody;
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

export class RemindQuotaApplicationApprovalRequest extends $tea.Model {
  /**
   * @remarks
   * The quota application ID.
   * 
   * For more information about how to obtain the ID of a quota application, see [ListQuotaApplications](https://help.aliyun.com/document_detail/440568.html).
   * 
   * @example
   * 219f1ff6-6205-495f-bda7-90d2fe945e****
   */
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

export class RemindQuotaApplicationApprovalResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether retries are allowed. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * false
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * PARAMETER.ILLEGALL
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * Parameter[%s] is required.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The parameters whose values are invalid.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * RAM.PERMISSION.DENIED
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * You are not authorized to do this action or the API input parameter is invalid.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The quota application ID.
   * 
   * @example
   * 219f1ff6-6205-495f-bda7-90d2fe945e****
   */
  module?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D47B3A10-CDAC-5412-B2EE-EC9A3DBE9053
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowRetry: 'AllowRetry',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorArgs: 'ErrorArgs',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      httpStatusCode: 'HttpStatusCode',
      module: 'Module',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowRetry: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorArgs: { 'type': 'array', 'itemType': 'any' },
      errorCode: 'string',
      errorMsg: 'string',
      httpStatusCode: 'number',
      module: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemindQuotaApplicationApprovalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemindQuotaApplicationApprovalResponseBody;
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
      body: RemindQuotaApplicationApprovalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaAlarmRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the quota alert.
   * 
   * >  You can call the [ListQuotaAlarms](https://help.aliyun.com/document_detail/440561.html) operation to obtain the ID of a quota alert.
   * 
   * This parameter is required.
   * 
   * @example
   * a2efa7fc-832f-47bb-8054-39e28012****
   */
  alarmId?: string;
  /**
   * @remarks
   * The name of the quota alert.
   * 
   * >  You can call the [ListQuotaAlarms](https://help.aliyun.com/document_detail/440561.html) operation to obtain the name of a quota alert.
   * 
   * This parameter is required.
   * 
   * @example
   * rules
   */
  alarmName?: string;
  /**
   * @remarks
   * The numeric value of the alert threshold. Valid values:
   * 
   * *   If you set the `ThresholdType` parameter to `used`, you will receive an alert notification when the used quota is greater than or equal to the preset alert threshold. The alert threshold must be greater than the current used quota.
   * *   If you set the `ThresholdType` parameter to `usable`, you will receive an alert notification when the available quota is less than or equal to the preset alert threshold. The alert threshold must be less than the current available quota.
   * 
   * > You must set one of the Threshold and ThresholdPercent parameters.
   * 
   * @example
   * 160
   */
  threshold?: number;
  /**
   * @remarks
   * The percentage of the alert threshold. Valid values:
   * 
   * *   If you set `ThresholdType` to `used`, you receive an alert notification when the used quota is greater than or equal to the preset percentage of the alert threshold. Value range: (50%, 100%].
   * *   If you set `ThresholdType` to `usable`, you receive an alert notification when the available quota is less than or equal to the preset percentage of the alert threshold. Value range: (0%, 50%].
   * 
   * >  You must set one of Threshold and ThresholdPercent.
   * 
   * @example
   * 51
   */
  thresholdPercent?: number;
  /**
   * @remarks
   * The type of the quota alert. Valid values:
   * 
   * *   used (default): The alert is created for the used quota.
   * *   usable: The alert is created for the available quota.
   * 
   * @example
   * usable
   */
  thresholdType?: string;
  /**
   * @remarks
   * The webhook URL. Quota Center sends alert notifications to the specified URL by using HTTP POST requests.
   * 
   * @example
   * https://alert.aliyun.com/callback
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A95C65B3-7CF4-469E-B1D5-1CA0628A6411
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateQuotaAlarmResponseBody;
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
  /**
   * @example
   * regionId
   */
  key?: string;
  /**
   * @example
   * cn-hangzhou
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

export class CreateQuotaApplicationRequestDimensions extends $tea.Model {
  /**
   * @remarks
   * The key of the dimension.
   * 
   * > 
   * 
   * *   The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
   * 
   * *   This parameter is required if you set the `ProductCode` parameter to `ecs`, `ecs-spec`, `actiontrail`, or `ess`.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the dimension.
   * 
   * > 
   * 
   * *   The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
   * 
   * *   This parameter is required if you set the `ProductCode` parameter to `ecs`, `ecs-spec`, `actiontrail`, or `ess`.
   * 
   * @example
   * cn-hangzhou
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

export class CreateQuotaApplicationsForTemplateRequestDimensions extends $tea.Model {
  /**
   * @remarks
   * The key of the dimension.
   * 
   * > 
   * 
   * *   The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
   * 
   * *   This parameter is required if you set the `ProductCode` parameter to `ecs`, `ecs-spec`, `actiontrail`, or `ess`.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the dimension.
   * 
   * > 
   * 
   * *   The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
   * 
   * *   This parameter is required if you set the `ProductCode` parameter to `ecs`, `ecs-spec`, `actiontrail`, or `ess`.
   * 
   * @example
   * cn-hangzhou
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

export class CreateQuotaApplicationsForTemplateResponseBodyFailResults extends $tea.Model {
  /**
   * @remarks
   * The Alibaba Cloud account of the members in a resource directory whose quota increase request is rejected.
   * 
   * @example
   * 135048337611****
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The reason for the rejection.
   * 
   * @example
   * The quota adjustment application is being processed. Please try again later.
   */
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
  /**
   * @remarks
   * The key of the dimension.
   * 
   * > 
   * 
   * *   The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
   * 
   * *   This parameter is required if you set the `ProductCode` parameter to `ecs`, `ecs-spec`, `actiontrail`, or `ess`.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the dimension.
   * 
   * > 
   * 
   * *   The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
   * 
   * *   This parameter is required if you set the `ProductCode` parameter to `ecs`, `ecs-spec`, `actiontrail`, or `ess`.
   * 
   * @example
   * cn-hangzhou
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

export class GetProductQuotaRequestDimensions extends $tea.Model {
  /**
   * @remarks
   * The key of the dimension.
   * 
   * >- The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
   * >- If you call the operation to query the details of a quota that belongs to a cloud service that supports dimensions, you must configure this parameter. You must configure the `Dimensions.N.Key` and `Dimensions.N.Value` parameters at the same time. The following cloud services support dimensions: ECS whose service code is ecs, Enterprise Distributed Application Service (EDAS) whose service code is edas, ECS Quotas by Instance Type whose service code is ecs-spec, and Auto Scaling (ESS) whose service code is ess.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the dimension.
   * 
   * > - The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
   * > - If you call the operation to query the details of a quota that belongs to a cloud service that supports dimensions, you must configure this parameter. You must configure the `Dimensions.N.Key` and `Dimensions.N.Value` parameters at the same time. The following cloud services support dimensions: ECS whose service code is ecs, EDAS whose service code is edas, ECS Quotas by Instance Type whose service code is ecs-spec, and ESS whose service code is ess.
   * 
   * @example
   * cn-hangzhou
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

export class GetProductQuotaResponseBodyQuotaPeriod extends $tea.Model {
  /**
   * @remarks
   * The unit of the calculation cycle of the quota. Valid values:
   * 
   * *   second
   * *   minute
   * *   hour
   * *   day
   * *   week
   * 
   * @example
   * Day
   */
  periodUnit?: string;
  /**
   * @remarks
   * The value of the calculation cycle of the quota.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The value of the quota.
   * 
   * @example
   * 801
   */
  quota?: string;
  /**
   * @remarks
   * The unit of the quota.
   * 
   * >  The unit of each quota is unique. For example, the quota whose ID is `q_cbdch3` represents the maximum number of ACK clusters. The unit of this quota is clusters. The quota whose ID is `q_security-groups` represents the maximum number of security groups. The unit of this quota is security groups.
   * 
   * @example
   * Count
   */
  quotaUnit?: string;
  /**
   * @remarks
   * The category of the quota. Valid values:
   * 
   * *   BaseQuota: base quota.
   * *   ReservedQuota: reserved quota.
   * 
   * @example
   * BaseQuota
   */
  type?: string;
  /**
   * @remarks
   * The used quota.
   * 
   * @example
   * 26
   */
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

export class GetProductQuotaResponseBodyQuotaUsageMetric extends $tea.Model {
  metricDimensions?: { [key: string]: string };
  metricName?: string;
  metricNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      metricDimensions: 'MetricDimensions',
      metricName: 'MetricName',
      metricNamespace: 'MetricNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricDimensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      metricName: 'string',
      metricNamespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductQuotaResponseBodyQuota extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the quota is adjustable. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  adjustable?: boolean;
  /**
   * @remarks
   * The range of the quota value.
   */
  applicableRange?: number[];
  /**
   * @remarks
   * The type of the adjustable value. Valid values:
   * 
   * *   continuous
   * *   discontinuous
   * 
   * @example
   * continuous
   */
  applicableType?: string;
  /**
   * @remarks
   * The reason for submitting a quota increase request.
   * 
   * @example
   * The business xxx is expected to grow by 50%.
   */
  applyReasonTips?: string;
  /**
   * @remarks
   * Indicates whether the system shows the used value of the quota. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  consumable?: boolean;
  /**
   * @remarks
   * The quota dimension. Format: `{"regionId":"Region"}`.
   * 
   * @example
   * {"regionId":"cn-hangzhou"}
   */
  dimensions?: { [key: string]: any };
  /**
   * @remarks
   * The start time of the validity period of the quota. Specify the value in UTC.
   * 
   * @example
   * 2022-09-28T06:06:00Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The end time of the validity period of the quota. Specify the value in UTC.
   * 
   * @example
   * 2022-09-29T06:06:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the quota is a global quota. Valid values:
   * 
   * *   true: The quota is shared in all regions.
   * *   false: The quota is independently used in a region.
   * 
   * @example
   * true
   */
  globalQuota?: boolean;
  /**
   * @remarks
   * The calculation cycle of the quota.
   */
  period?: GetProductQuotaResponseBodyQuotaPeriod;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the quota.
   * 
   * @example
   * q_security-groups
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the quota.
   * 
   * @example
   * acs:quotas:cn-hangzhou:120886317861****:quota/ecs/q_security-groups/
   */
  quotaArn?: string;
  /**
   * @remarks
   * The type of the quota. Valid values:
   * 
   * *   CommonQuota: general quota
   * *   FlowControl: API rate limit
   * *   WhiteListLabel: whitelist quota
   * 
   * @example
   * CommonQuota
   */
  quotaCategory?: string;
  /**
   * @remarks
   * The description of the quota.
   * 
   * @example
   * The maximum number of security groups that can be owned by the current account
   */
  quotaDescription?: string;
  /**
   * @remarks
   * The details of the quotas.
   */
  quotaItems?: GetProductQuotaResponseBodyQuotaQuotaItems[];
  /**
   * @remarks
   * The name of the quota.
   * 
   * @example
   * Maximum Number of Security Groups
   */
  quotaName?: string;
  /**
   * @remarks
   * The type of the quota. Valid values:
   * 
   * *   privilege
   * *   normal (default value)
   * 
   * @example
   * normal
   */
  quotaType?: string;
  /**
   * @remarks
   * The unit of the new quota value.
   * 
   * > The unit of each quota is unique.** For example, the quota whose ID is `q_cbdch3` represents the maximum number of Container Service for Kubernetes (ACK) clusters. The unit of this quota is clusters. The quota whose ID is `q_security-groups` represents the maximum number of security groups. The unit of this quota is security groups.
   * 
   * @example
   * Count
   */
  quotaUnit?: string;
  /**
   * @remarks
   * The range of the quota value.
   */
  supportedRange?: number[];
  /**
   * @remarks
   * The value of the quota.
   * 
   * @example
   * 801
   */
  totalQuota?: number;
  /**
   * @remarks
   * The used quota.
   * 
   * @example
   * 26
   */
  totalUsage?: number;
  /**
   * @remarks
   * The reason why the quota is not adjustable. Valid values:
   * 
   * *   nonactivated: The service is not activated.
   * *   applicationProcess: The application is being processed.
   * *   limitReached: The quota limit is reached.
   * *   supportTicketRequired: The quota can be increased only by submitting a ticket.
   * 
   * @example
   * limitReached
   */
  unadjustableDetail?: string;
  usageMetric?: GetProductQuotaResponseBodyQuotaUsageMetric;
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
      usageMetric: 'UsageMetric',
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
      usageMetric: GetProductQuotaResponseBodyQuotaUsageMetric,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductQuotaDimensionRequestDependentDimensions extends $tea.Model {
  /**
   * @remarks
   * The key of the quota dimension on which the quota dimension that you want to query is dependent.
   * 
   * > The value range of N varies based on the number of quota dimensions that are supported by the specified Alibaba Cloud service.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the quota dimension on which the quota dimension that you want to query is dependent.
   * 
   * > The value range of N varies based on the number of quota dimensions that are supported by the specified Alibaba Cloud service.
   * 
   * @example
   * cn-hangzhou
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

export class GetProductQuotaDimensionResponseBodyQuotaDimensionDimensionValueDetail extends $tea.Model {
  /**
   * @remarks
   * The name of the quota dimension.
   * 
   * @example
   * cn-hangzhou
   */
  name?: string;
  /**
   * @remarks
   * The value of the quota dimension.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @remarks
   * The quota dimensions on which the quota dimension that you want to query is dependent.
   */
  dependentDimensions?: string[];
  /**
   * @remarks
   * The key of the quota dimension. Valid values:
   * 
   * *   regionId: the region ID.
   * *   zoneId: the zone ID.
   * *   chargeType: the billing method.
   * *   networkType: the network type.
   * 
   * @example
   * regionId
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The details of the quota dimension value.
   */
  dimensionValueDetail?: GetProductQuotaDimensionResponseBodyQuotaDimensionDimensionValueDetail[];
  /**
   * @remarks
   * The values of the quota dimension.
   */
  dimensionValues?: string[];
  /**
   * @remarks
   * The name of the quota dimension.
   * 
   * @example
   * region
   */
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
  /**
   * @remarks
   * The ID of the quota alert.
   * 
   * @example
   * 78d7e436-4b25-4897-84b5-d7b656bb****
   */
  alarmId?: string;
  /**
   * @remarks
   * The name of the quota alert.
   * 
   * @example
   * tf-testacccn-hangzhouquotasquotaalarm81611
   */
  alarmName?: string;
  /**
   * @remarks
   * The time when the quota alert was created.
   * 
   * @example
   * 2021-01-21T03:47:28Z
   */
  createTime?: string;
  /**
   * @remarks
   * The alert notification methods.
   */
  notifyChannels?: string[];
  /**
   * @remarks
   * The alert contact.
   * 
   * @example
   * accountContact
   */
  notifyTarget?: string;
  /**
   * @remarks
   * The abbreviation of the cloud service name.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the quota.
   * 
   * @example
   * q_security-groups
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The quota dimension.
   * 
   * @example
   * {"regionId":"cn-hangzhou"}
   */
  quotaDimension?: { [key: string]: any };
  /**
   * @remarks
   * The used quota.
   * 
   * @example
   * 28
   */
  quotaUsage?: number;
  /**
   * @remarks
   * The quota value.
   * 
   * @example
   * 804
   */
  quotaValue?: number;
  /**
   * @remarks
   * The numeric value of the alert threshold.
   * 
   * @example
   * 29
   */
  threshold?: number;
  /**
   * @remarks
   * The percentage of the alert threshold.
   * 
   * @example
   * 50
   */
  thresholdPercent?: number;
  /**
   * @remarks
   * The type of the quota alert. Valid values:
   * 
   * *   used: The alert is created for the used quota.
   * *   usable: The alert is created for the available quota.
   * 
   * @example
   * used
   */
  thresholdType?: string;
  /**
   * @remarks
   * The webhook URL. Quota Center sends alert notifications to the specified URL by using HTTP POST requests.
   * 
   * @example
   * https://alert.aliyun.com/callback
   */
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * d314d6ae-867d-484c-9009-3d421a80****
   */
  applicationId?: string;
  /**
   * @remarks
   * The time when the application was submitted.
   * 
   * @example
   * 2021-01-19T09:25:56Z
   */
  applyTime?: string;
  /**
   * @remarks
   * The approved quota value.
   * 
   * @example
   * 10
   */
  approveValue?: number;
  /**
   * @remarks
   * The result of the application.
   * 
   * @example
   * Agree
   */
  auditReason?: string;
  /**
   * @remarks
   * The expected value of the quota.
   * 
   * @example
   * 804
   */
  desireValue?: number;
  /**
   * @remarks
   * The dimension.
   * 
   * Format: `{"regionId":"Region"}`.
   * 
   * @example
   * ["cn-shanghai","cn-hangzhou"]
   */
  dimension?: { [key: string]: any };
  /**
   * @remarks
   * The time when the new quota value takes effect.
   * 
   * @example
   * 2021-01-19 15:30:00
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The time when the new quota expires.
   * 
   * @example
   * 2023-06-29 15:30:00
   */
  expireTime?: string;
  /**
   * @remarks
   * The method of that is used to send alert notifications. Valid values:
   * 
   * *   0: Quota Center does not send a notification.
   * *   1: Quota Center sends an email notification.
   * *   2: Quota Center sends an SMS notification.
   * 
   * @example
   * 0
   */
  noticeType?: number;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the quota.
   * 
   * @example
   * q_security-groups
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the quota.
   * 
   * @example
   * acs:quotas:cn-hangzhou:120886317861****:quota/ecs/q_security-groups/
   */
  quotaArn?: string;
  quotaCategory?: string;
  /**
   * @remarks
   * The description of the quota.
   * 
   * @example
   * The maximum number of security groups that can be owned by the current account
   */
  quotaDescription?: string;
  /**
   * @remarks
   * The name of the quota.
   * 
   * @example
   * Maximum Number of Security Groups
   */
  quotaName?: string;
  /**
   * @remarks
   * The unit of the new quota value.
   * 
   * @example
   * Count
   */
  quotaUnit?: string;
  /**
   * @remarks
   * The reason for the application.
   * 
   * @example
   * Scale Out
   */
  reason?: string;
  /**
   * @remarks
   * The status of the application. Valid values:
   * 
   * *   Disagree: The application is rejected.
   * *   Agree: The application is approved.
   * *   Process: The application is being reviewed.
   * *   Cancel: The application is closed.
   * 
   * @example
   * Agree
   */
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
      quotaCategory: 'QuotaCategory',
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
      quotaCategory: 'string',
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

export class GetQuotaApplicationApprovalResponseBodyModule extends $tea.Model {
  /**
   * @remarks
   * The average amount of time required to approve quota applications. Unit: hour.
   * 
   * @example
   * 24
   */
  approvalHours?: number;
  /**
   * @remarks
   * The interval between two consecutive approval reminders. Unit: hour.
   * 
   * @example
   * 24
   */
  reminderIntervalHours?: number;
  /**
   * @remarks
   * Indicates whether approval reminders are supported for quota applications. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * false
   */
  supportReminder?: boolean;
  /**
   * @remarks
   * The reason why approval reminders are not supported for quota applications.
   * 
   * @example
   * can only be remind once within the interval
   */
  unsupportReminderReason?: string;
  static names(): { [key: string]: string } {
    return {
      approvalHours: 'ApprovalHours',
      reminderIntervalHours: 'ReminderIntervalHours',
      supportReminder: 'SupportReminder',
      unsupportReminderReason: 'UnsupportReminderReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalHours: 'number',
      reminderIntervalHours: 'number',
      supportReminder: 'boolean',
      unsupportReminderReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaTemplateServiceStatusResponseBodyTemplateServiceStatus extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * rd-pG****
   */
  resourceDirectoryId?: string;
  /**
   * @remarks
   * The state of the quota template. Valid values:
   * 
   * *   \\-1: The quota template is disabled.
   * *   1: The quota template is enabled.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The name of the quota alert.
   * 
   * @example
   * security_groups
   */
  alarmName?: string;
  /**
   * @remarks
   * The time when the quota alert rule was created.
   * 
   * @example
   * 2021-01-24T09:20:09Z
   */
  createTime?: string;
  /**
   * @remarks
   * The notification methods of the quota alert.
   */
  notifyChannels?: string[];
  /**
   * @remarks
   * The quota alert contact.
   * 
   * @example
   * accountContact
   */
  notifyTarget?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * q_security-groups
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The used quota.
   * 
   * @example
   * 31
   */
  quotaUsage?: number;
  /**
   * @remarks
   * The threshold to trigger quota alerts.
   * 
   * @example
   * 29
   */
  threshold?: number;
  /**
   * @remarks
   * The percentage of the quota alert threshold.
   * 
   * @example
   * 80
   */
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
  /**
   * @remarks
   * The dimensions of the quotas on which the specified quota depends.
   */
  dependentDimension?: string[];
  /**
   * @remarks
   * The key of the quota dimension.
   * 
   * @example
   * regionId
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The dimension values.
   */
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
  /**
   * @remarks
   * The dimensions of the quotas on which the specified quota depends.
   */
  dimensions?: ListDependentQuotasResponseBodyQuotasDimensions[];
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * q_elastic-network-interfaces
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The relationship percentage between the specified quota and the quotas on which the specified quota depends.
   * 
   * @example
   * 50
   */
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
  /**
   * @remarks
   * The key of the dimension group.
   */
  dimensionKeys?: string[];
  /**
   * @remarks
   * The code of the dimension group.
   * 
   * @example
   * oss_wf1ngqmd7q
   */
  groupCode?: string;
  /**
   * @remarks
   * The name of the dimension group.
   * 
   * @example
   * OSS_Group
   */
  groupName?: string;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * oss
   */
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

export class ListProductQuotaDimensionsResponseBodyQuotaDimensionsDimensionValueDetailDependentDimensions extends $tea.Model {
  /**
   * @remarks
   * The key of the quota dimension on which the quota dimension that you want to query is dependent.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the quota dimension on which the quota dimension that you want to query is dependent.
   * 
   * @example
   * cn-hangzhou
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

export class ListProductQuotaDimensionsResponseBodyQuotaDimensionsDimensionValueDetail extends $tea.Model {
  /**
   * @remarks
   * The quota dimensions on which the quota dimension that you want to query is dependent.
   */
  dependentDimensions?: ListProductQuotaDimensionsResponseBodyQuotaDimensionsDimensionValueDetailDependentDimensions[];
  /**
   * @remarks
   * The name of the quota dimension.
   * 
   * @example
   * cn-hangzhou
   */
  name?: string;
  /**
   * @remarks
   * The value of the quota dimension.
   * 
   * @example
   * cn-hangzhou
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      dependentDimensions: 'DependentDimensions',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependentDimensions: { 'type': 'array', 'itemType': ListProductQuotaDimensionsResponseBodyQuotaDimensionsDimensionValueDetailDependentDimensions },
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotaDimensionsResponseBodyQuotaDimensions extends $tea.Model {
  /**
   * @remarks
   * The quota dimensions on which the quota dimension that you want to query is dependent.
   */
  dependentDimensions?: string[];
  /**
   * @remarks
   * The key of the quota dimension. Valid values:
   * 
   * *   regionId: the region ID.
   * *   zoneId: the zone ID.
   * *   chargeType: the billing method.
   * *   networkType: the network type.
   * 
   * @example
   * zoneId
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The details about the dimension value.
   */
  dimensionValueDetail?: ListProductQuotaDimensionsResponseBodyQuotaDimensionsDimensionValueDetail[];
  /**
   * @remarks
   * The dimension values.
   */
  dimensionValues?: string[];
  /**
   * @remarks
   * The name of the quota dimension.
   * 
   * @example
   * Zone
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the quota dimension is required when you query quota dimensions. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
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
  /**
   * @remarks
   * The key of the dimension.
   * 
   * >  The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the dimension.
   * 
   * >  The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
   * 
   * @example
   * cn-hangzhou
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

export class ListProductQuotasResponseBodyQuotasPeriod extends $tea.Model {
  /**
   * @remarks
   * The unit of the calculation cycle. Valid values:
   * 
   * *   second
   * *   minute
   * *   hour
   * *   day
   * *   week
   * 
   * @example
   * day
   */
  periodUnit?: string;
  /**
   * @remarks
   * The value of the calculation cycle.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The quota value.
   * 
   * @example
   * 10
   */
  quota?: string;
  /**
   * @remarks
   * The unit of the quota.
   * 
   * @example
   * AMOUNT
   */
  quotaUnit?: string;
  /**
   * @remarks
   * The category of the quota. Valid values:
   * 
   * *   BaseQuota: base quota
   * *   ReservedQuota: reserved quota
   * 
   * @example
   * BaseQuota
   */
  type?: string;
  /**
   * @remarks
   * The quota usage.
   * 
   * @example
   * 1
   */
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

export class ListProductQuotasResponseBodyQuotasUsageMetric extends $tea.Model {
  metricDimensions?: { [key: string]: string };
  metricName?: string;
  metricNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      metricDimensions: 'MetricDimensions',
      metricName: 'MetricName',
      metricNamespace: 'MetricNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricDimensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      metricName: 'string',
      metricNamespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotasResponseBodyQuotas extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the quota is adjustable. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  adjustable?: boolean;
  /**
   * @remarks
   * N/A
   */
  applicableRange?: number[];
  /**
   * @remarks
   * The type of the adjustable value. Valid values:
   * 
   * *   continuous
   * *   discontinuous
   * 
   * @example
   * discontinuous
   */
  applicableType?: string;
  /**
   * @remarks
   * The reason for submitting a quota increase request.
   * 
   * @example
   * The business xxx is expected to grow by 50%.
   */
  applyReasonTips?: string;
  /**
   * @remarks
   * Indicates whether the system shows the used value of the quota. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  consumable?: boolean;
  /**
   * @remarks
   * The quota dimensions. Format: `{"regionId":"Region"}`.
   * 
   * @example
   * {"regionId":"cn-hangzhou"}
   */
  dimensions?: { [key: string]: any };
  /**
   * @remarks
   * The start time of the validity period of the quota. The value is displayed in UTC.
   * 
   * @example
   * 2022-09-28T06:07:00Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The end time of the validity period of the quota. The value is displayed in UTC.
   * 
   * @example
   * 2022-09-29T06:07:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the quota is a global quota. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  globalQuota?: boolean;
  /**
   * @remarks
   * The calculation cycle of the quota.
   */
  period?: ListProductQuotasResponseBodyQuotasPeriod;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * @example
   * ecs-spec
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * ecs.g5.2xlarge
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the quota.
   * 
   * @example
   * acs:quotas:cn-hangzhou:107992689699****:quota/ecs/ecs.g5.2xlarge/postpaid/vpc/cn-hangzhou/instancetype/cn-hangzhou-i
   */
  quotaArn?: string;
  /**
   * @remarks
   * The type of the quota. Valid values:
   * 
   * *   CommonQuota: general quota
   * *   FlowControl: API rate limit
   * *   WhiteListLabel: privilege
   * 
   * @example
   * CommonQuota
   */
  quotaCategory?: string;
  /**
   * @remarks
   * The description of the quota.
   * 
   * @example
   * ecs.g5.2xlarge
   */
  quotaDescription?: string;
  /**
   * @remarks
   * The details of the quota.
   */
  quotaItems?: ListProductQuotasResponseBodyQuotasQuotaItems[];
  /**
   * @remarks
   * The quota name.
   * 
   * @example
   * ecs.g5.2xlarge
   */
  quotaName?: string;
  /**
   * @remarks
   * The type of the quota. Valid values:
   * 
   * *   privilege
   * *   normal
   * 
   * @example
   * privilege
   */
  quotaType?: string;
  /**
   * @remarks
   * The unit of the quota.
   * 
   * @example
   * AMOUNT
   */
  quotaUnit?: string;
  /**
   * @remarks
   * N/A
   */
  supportedRange?: number[];
  /**
   * @remarks
   * The quota value.
   * 
   * @example
   * 200
   */
  totalQuota?: number;
  /**
   * @remarks
   * The quota usage.
   * 
   * @example
   * 1
   */
  totalUsage?: number;
  /**
   * @remarks
   * The reason why the quota is not adjustable. Valid values:
   * 
   * *   nonactivated: The service is not activated.
   * *   applicationProcess: The application is being processed.
   * *   limitReached: The quota limit is reached.
   * 
   * @example
   * applicationProcess
   */
  unadjustableDetail?: string;
  usageMetric?: ListProductQuotasResponseBodyQuotasUsageMetric;
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
      usageMetric: 'UsageMetric',
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
      usageMetric: ListProductQuotasResponseBodyQuotasUsageMetric,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBodyProductInfo extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the Alibaba Cloud service supports general quotas. Valid values:
   * 
   * *   support: The Alibaba Cloud service supports general quotas.
   * *   unsupport: The Alibaba Cloud service does not support general quotas.
   * 
   * @example
   * support
   */
  commonQuotaSupport?: string;
  /**
   * @remarks
   * Indicates whether the Alibaba Cloud service supports dynamic quota adjustment. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  dynamic?: boolean;
  /**
   * @remarks
   * Indicates whether the Alibaba Cloud service supports API rate limits. Valid values:
   * 
   * *   support: The Alibaba Cloud service supports API rate limits.
   * *   unsupport: The Alibaba Cloud service does not support API rate limits.
   * 
   * @example
   * unsupport
   */
  flowControlSupport?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud service.
   * 
   * @example
   * Elastic Compute Service (ECS)
   */
  productName?: string;
  /**
   * @remarks
   * The English name of the Alibaba Cloud service.
   * 
   * @example
   * Elastic Compute Service
   */
  productNameEn?: string;
  /**
   * @remarks
   * The ID of the service category.
   * 
   * @example
   * 5
   */
  secondCategoryId?: number;
  /**
   * @remarks
   * The name of the service category.
   * 
   * @example
   * Elastic Compute
   */
  secondCategoryName?: string;
  /**
   * @remarks
   * The English name of the service category.
   * 
   * @example
   * Elastic Compute
   */
  secondCategoryNameEn?: string;
  /**
   * @remarks
   * Indicates whether the Alibaba Cloud service supports whitelist quotas. Valid values:
   * 
   * *   support: The Alibaba Cloud service supports whitelist quotas.
   * *   unsupport: The Alibaba Cloud service does not support whitelist quotas.
   * 
   * @example
   * support
   */
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
  /**
   * @remarks
   * The key of the dimension.
   * 
   * > 
   * 
   * *   The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
   * 
   * *   This parameter is required if you set the `ProductCode` parameter to `ecs`, `ecs-spec`, `actiontrail`, or `ess`.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the dimension.
   * 
   * > 
   * 
   * *   The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
   * 
   * *   This parameter is required if you set the `ProductCode` parameter to `ecs`, `ecs-spec`, `actiontrail`, or `ess`.
   * 
   * @example
   * cn-hangzhou
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

export class ListQuotaAlarmsResponseBodyQuotaAlarms extends $tea.Model {
  /**
   * @remarks
   * The ID of the alert.
   * 
   * @example
   * a2efa7fc-832f-47bb-8054-39e28012****
   */
  alarmId?: string;
  /**
   * @remarks
   * The name of the alert event.
   * 
   * @example
   * rules
   */
  alarmName?: string;
  /**
   * @remarks
   * The time when the quota alert was created.
   * 
   * @example
   * 2020-11-27T07:23:34Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the alert threshold was reached. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * false
   */
  exceedThreshold?: boolean;
  /**
   * @remarks
   * The alert notification methods.
   */
  notifyChannels?: string[];
  /**
   * @remarks
   * The alert contact. The value is accountContact.
   * 
   * @example
   * accountContact
   */
  notifyTarget?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * @example
   * config
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the quota.
   * 
   * @example
   * q_hvnoqv
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The quota dimensions.
   * 
   * @example
   * {"regionId":"cn-hangzhou"}
   */
  quotaDimensions?: { [key: string]: any };
  /**
   * @remarks
   * The used quota.
   * 
   * @example
   * 73
   */
  quotaUsage?: number;
  /**
   * @remarks
   * The value of the quota.
   * 
   * @example
   * 200
   */
  quotaValue?: number;
  /**
   * @remarks
   * The numeric value of the alert threshold.
   * 
   * @example
   * 160
   */
  threshold?: number;
  /**
   * @remarks
   * The percentage of the alert threshold.
   * 
   * @example
   * 80
   */
  thresholdPercent?: number;
  /**
   * @remarks
   * The type of the quota alert. Valid values:
   * 
   * *   used: The alert is created for the used quota.
   * *   usable: The alert is created for the available quota.
   * 
   * @example
   * used
   */
  thresholdType?: string;
  /**
   * @remarks
   * The webhook URL.
   * 
   * @example
   * https://www.aliyun.com/webhook
   */
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
  /**
   * @remarks
   * The key of the dimension.
   * 
   * > 
   * 
   * *   The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
   * 
   * *   You must specify both Key and Value for each quota dimension.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the dimension.
   * 
   * > 
   * 
   * *   The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
   * 
   * *   You must specify both Key and Value for each quota dimension.
   * 
   * @example
   * cn-hangzhou
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

export class ListQuotaApplicationTemplatesResponseBodyQuotaApplicationTemplatesPeriod extends $tea.Model {
  /**
   * @remarks
   * The unit of the calculation cycle. Valid values:
   * 
   * *   second
   * *   minute
   * *   hour
   * *   day
   * *   week
   * 
   * @example
   * day
   */
  periodUnit?: string;
  /**
   * @remarks
   * The value of the calculation cycle.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * None
   */
  applicableRange?: number[];
  /**
   * @remarks
   * The type of the adjustable value. Valid values:
   * 
   * *   continuous
   * *   discontinuous
   * 
   * @example
   * continuous
   */
  applicableType?: string;
  /**
   * @remarks
   * The requested value of the quota.
   * 
   * @example
   * 802
   */
  desireValue?: number;
  /**
   * @remarks
   * The quota dimensions.
   * 
   * Format: {"regionId":"Region"}.
   * 
   * @example
   * {"regionId":"cn-hangzhou"}
   */
  dimensions?: { [key: string]: any };
  /**
   * @remarks
   * The start time of the validity period of the quota. The value is displayed in UTC.
   * 
   * @example
   * 2022-09-28T06:07:00Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The language of the quota alert notification. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  envLanguage?: string;
  /**
   * @remarks
   * The end time of the validity period of the quota. The value is displayed in UTC.
   * 
   * @example
   * 2022-09-29T06:07:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The ID of the quota template.
   * 
   * @example
   * 1****
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether Quota Center sends a notification about the application result. Valid values:
   * 
   * *   0: no
   * *   3: yes
   * 
   * @example
   * 0
   */
  noticeType?: number;
  /**
   * @remarks
   * The calculation cycle of the quota.
   */
  period?: ListQuotaApplicationTemplatesResponseBodyQuotaApplicationTemplatesPeriod;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the quota.
   * 
   * @example
   * q_security-groups
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The type of the quota. Valid values:
   * 
   * *   CommonQuota: general quota
   * *   FlowControl: API rate limit
   * *   WhiteListLabel: privilege
   * 
   * @example
   * CommonQuota
   */
  quotaCategory?: string;
  /**
   * @remarks
   * The description of the quota.
   * 
   * @example
   * The maximum number of security groups that can be created by the current account.
   */
  quotaDescription?: string;
  /**
   * @remarks
   * The name of the quota.
   * 
   * @example
   * Maximum Number of Security Groups
   */
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
  /**
   * @remarks
   * The key of the dimension.
   * 
   * >  The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the dimension.
   * 
   * >  The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
   * 
   * @example
   * cn-hangzhou
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

export class ListQuotaApplicationsResponseBodyQuotaApplicationsPeriod extends $tea.Model {
  /**
   * @remarks
   * The unit of the calculation cycle. Valid values:
   * 
   * *   second
   * *   minute
   * *   hour
   * *   day
   * *   week
   * 
   * @example
   * second
   */
  periodUnit?: string;
  /**
   * @remarks
   * The value of the calculation cycle.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * b926571d-cc09-4711-b547-58a615f0****
   */
  applicationId?: string;
  /**
   * @remarks
   * The time when the application was submitted.
   * 
   * @example
   * 2021-01-15T09:13:53Z
   */
  applyTime?: string;
  /**
   * @remarks
   * The quota value that is approved.
   * 
   * @example
   * 101
   */
  approveValue?: number;
  /**
   * @remarks
   * The result of the application.
   * 
   * @example
   * Agree
   */
  auditReason?: string;
  /**
   * @remarks
   * The remarks of the application.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The quota value that is approved.
   * 
   * @example
   * 101
   */
  desireValue?: number;
  /**
   * @remarks
   * The dimension of the application.
   * 
   * @example
   * {"regionId":"cn-hangzhou"}
   */
  dimension?: { [key: string]: any };
  /**
   * @remarks
   * The time when the application took effect.
   * 
   * @example
   * 2021-01-15T11:46:25Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The time when the application expired.
   * 
   * @example
   * 2021-01-17T11:46:25Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether Quota Center sends a notification about the application result. Valid values:
   * 
   * *   0: A notification about the application result is not sent.
   * *   3: A notification about the application result is sent.
   * 
   * @example
   * 3
   */
  noticeType?: number;
  /**
   * @remarks
   * The calculation cycle of the quota.
   */
  period?: ListQuotaApplicationsResponseBodyQuotaApplicationsPeriod;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * @example
   * csk
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the quota.
   * 
   * @example
   * q_i5uzm3
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the quota.
   * 
   * @example
   * acs:quotas:*:120886317861****:quota/csk/q_i5uzm3
   */
  quotaArn?: string;
  quotaCategory?: string;
  /**
   * @remarks
   * The description of the quota.
   * 
   * @example
   * The maximum number of nodes in a cluster
   */
  quotaDescription?: string;
  /**
   * @remarks
   * The name of the quota.
   * 
   * @example
   * Maximum Number of Nodes
   */
  quotaName?: string;
  /**
   * @remarks
   * The unit of the new quota value.
   * 
   * @example
   * Node
   */
  quotaUnit?: string;
  /**
   * @remarks
   * The reason for the application.
   * 
   * @example
   * Business expansion
   */
  reason?: string;
  /**
   * @remarks
   * The status of the application. Valid values:
   * 
   * *   Disagree: The application is rejected.
   * *   Agree: The application is approved.
   * *   Process: The application is being reviewed.
   * *   Cancel: The application is canceled.
   * 
   * @example
   * Agree
   */
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
      quotaCategory: 'QuotaCategory',
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
      quotaCategory: 'string',
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
  /**
   * @remarks
   * The unit of the calculation cycle of the quota.
   * 
   * @example
   * second
   */
  periodUnit?: string;
  /**
   * @remarks
   * The value of the calculation cycle of the quota.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 175376458581****
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The ID of the quota increase application.
   * 
   * @example
   * b926571d-cc09-4711-b547-58a615f0****
   */
  applicationId?: string;
  /**
   * @remarks
   * The time when the quota increase application was submitted. The value is displayed in UTC.
   * 
   * @example
   * 2021-01-15T09:13:53Z
   */
  applyTime?: string;
  /**
   * @remarks
   * The quota value that is approved.
   * 
   * @example
   * 101
   */
  approveValue?: number;
  /**
   * @remarks
   * The approval result of the quota increase application.
   * 
   * @example
   * Agree
   */
  auditReason?: string;
  /**
   * @remarks
   * The ID of the quota application batch.
   * 
   * @example
   * d314d6ae-867d-484c-9009-3d421a80****
   */
  batchQuotaApplicationId?: string;
  /**
   * @remarks
   * The requested value of the quota.
   * 
   * @example
   * 60
   */
  desireValue?: number;
  /**
   * @remarks
   * The start time of the validity period of the quota. The value is displayed in UTC.
   * 
   * @example
   * 2021-01-15T11:46:25Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The language of the quota alert notification. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  envLanguage?: string;
  /**
   * @remarks
   * The end time of the validity period of the quota. The value is displayed in UTC.
   * 
   * @example
   * 2021-01-17T11:46:25Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether Quota Center sends a notification about the application result. Valid values:
   * 
   * *   0: no
   * *   3: yes
   * 
   * @example
   * 3
   */
  noticeType?: number;
  /**
   * @remarks
   * The calculation cycle of the quota.
   */
  period?: ListQuotaApplicationsDetailForTemplateResponseBodyQuotaApplicationsPeriod;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * ecs.n1.large
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the quota.
   * 
   * @example
   * acs:quotas:*:120886317861****:quota/csk/q_i5uzm3
   */
  quotaArn?: string;
  /**
   * @remarks
   * The quota type. Valid values:
   * 
   * *   CommonQuota (default): general quota
   * *   WhiteListLabel: privilege
   * *   FlowControl: API rate limit
   * 
   * @example
   * CommonQuota
   */
  quotaCategory?: string;
  /**
   * @remarks
   * The description of the quota.
   * 
   * @example
   * The maximum number of nodes in a cluster
   */
  quotaDescription?: string;
  /**
   * @remarks
   * The quota dimensions.
   */
  quotaDimension?: { [key: string]: string };
  /**
   * @remarks
   * The quota name.
   * 
   * @example
   * Maximum Number of Nodes
   */
  quotaName?: string;
  /**
   * @remarks
   * The unit of the quota.
   * 
   * @example
   * GiB
   */
  quotaUnit?: string;
  /**
   * @remarks
   * The reason for the quota increase application.
   * 
   * @example
   * Business expansion
   */
  reason?: string;
  /**
   * @remarks
   * The approval status of the quota increase application. Valid values:
   * 
   * *   Disagree: The application is rejected.
   * *   Agree: The application is approved.
   * *   Process: The application is pending approval.
   * *   Cancel: The application is canceled.
   * 
   * @example
   * Agree
   */
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
  /**
   * @remarks
   * The number of approval tickets.
   * 
   * @example
   * 4
   */
  count?: number;
  /**
   * @remarks
   * The approval state of the quota increase application. Valid values:
   * 
   * *   Disagree: The application is rejected.
   * *   Agree: The application is approved.
   * *   Process: The application is in review.
   * *   Cancel: The application is canceled.
   * 
   * @example
   * Agree
   */
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
  /**
   * @remarks
   * The Alibaba Cloud accounts that correspond to the resource directory members for which the quotas are applied.
   */
  aliyunUids?: string[];
  /**
   * @remarks
   * The time when the quota increase application was submitted. The value is displayed in UTC.
   * 
   * @example
   * 2022-09-23T02:38:18Z
   */
  applyTime?: string;
  /**
   * @remarks
   * The number of applications in different approval states.
   */
  auditStatusVos?: ListQuotaApplicationsForTemplateResponseBodyQuotaBatchApplicationsAuditStatusVos[];
  /**
   * @remarks
   * The ID of the quota application batch.
   * 
   * @example
   * d314d6ae-867d-484c-9009-3d421a80****
   */
  batchQuotaApplicationId?: string;
  /**
   * @remarks
   * The requested value of the quota.
   * 
   * @example
   * 105
   */
  desireValue?: number;
  /**
   * @remarks
   * The quota dimensions.
   * 
   * Format example: {"regionId":"cn-hangzhou"}.
   * 
   * @example
   * {"regionId":"cn-hangzhou"}
   */
  dimensions?: { [key: string]: any };
  /**
   * @remarks
   * The start time of the validity period of the quota. The value is displayed in UTC.
   * 
   * @example
   * 2023-05-22T16:00:00Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The end time of the validity period of the quota. The value is displayed in UTC.
   * 
   * @example
   * 2024-05-14T02:08:56Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * @example
   * vpc
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * q_fhoz4k
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The quota type. Valid values:
   * 
   * *   CommonQuota: general quota
   * *   FlowControl: API rate limit
   * *   WhiteListLabel: privilege
   * 
   * @example
   * CommonQuota
   */
  quotaCategory?: string;
  /**
   * @remarks
   * The reason for the quota increase application.
   * 
   * @example
   * Business expansion
   */
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
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * rd-pG****
   */
  resourceDirectoryId?: string;
  /**
   * @remarks
   * The status of the quota template. Valid values:
   * 
   * *   \\-1: The quota template is disabled.
   * *   1: The quota template is enabled.
   * 
   * @example
   * 1
   */
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
  /**
   * @example
   * regionId
   */
  key?: string;
  /**
   * @example
   * cn-hangzhou
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
   * The value of the quota dimension.
   * The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
   * > This parameter is required if you set the ProductCode parameter to ecs, ecs-spec, actiontrail, or ess.
   * 
   * @remarks
   * The ID of the alert.
   * 
   * @param request - CreateQuotaAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQuotaAlarmResponse
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
   * The value of the quota dimension.
   * The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
   * > This parameter is required if you set the ProductCode parameter to ecs, ecs-spec, actiontrail, or ess.
   * 
   * @remarks
   * The ID of the alert.
   * 
   * @param request - CreateQuotaAlarmRequest
   * @returns CreateQuotaAlarmResponse
   */
  async createQuotaAlarm(request: CreateQuotaAlarmRequest): Promise<CreateQuotaAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQuotaAlarmWithOptions(request, runtime);
  }

  /**
   * Submits an application to increase a quota.
   * 
   * @remarks
   * In this example, the operation is called to submit an application to increase the value of a quota whose ID is `q_security-groups` and whose name is Maximum Number of Security Groups. The quota belongs to Elastic Compute Service (ECS). The expected value of the quota is `804`, the application reason is `Scale Out`, and the ID of the region to which the quota belongs is `cn-hangzhou`.
   * 
   * @param request - CreateQuotaApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQuotaApplicationResponse
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
   * Submits an application to increase a quota.
   * 
   * @remarks
   * In this example, the operation is called to submit an application to increase the value of a quota whose ID is `q_security-groups` and whose name is Maximum Number of Security Groups. The quota belongs to Elastic Compute Service (ECS). The expected value of the quota is `804`, the application reason is `Scale Out`, and the ID of the region to which the quota belongs is `cn-hangzhou`.
   * 
   * @param request - CreateQuotaApplicationRequest
   * @returns CreateQuotaApplicationResponse
   */
  async createQuotaApplication(request: CreateQuotaApplicationRequest): Promise<CreateQuotaApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQuotaApplicationWithOptions(request, runtime);
  }

  /**
   * Submits a quota increase application. After you add a quota item to a quota template, the system automatically submits quota applications only for new members in the resource directory. The quota values for existing members remain unchanged. If you want to increase the quota values of existing members, you can submit a quota application for the members by applying quota templates to the members.
   * 
   * @remarks
   * ### [](#)QPS limit
   * You can add a maximum of 10 quota items to a quota template at a time.
   * 
   * @param request - CreateQuotaApplicationsForTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQuotaApplicationsForTemplateResponse
   */
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

  /**
   * Submits a quota increase application. After you add a quota item to a quota template, the system automatically submits quota applications only for new members in the resource directory. The quota values for existing members remain unchanged. If you want to increase the quota values of existing members, you can submit a quota application for the members by applying quota templates to the members.
   * 
   * @remarks
   * ### [](#)QPS limit
   * You can add a maximum of 10 quota items to a quota template at a time.
   * 
   * @param request - CreateQuotaApplicationsForTemplateRequest
   * @returns CreateQuotaApplicationsForTemplateResponse
   */
  async createQuotaApplicationsForTemplate(request: CreateQuotaApplicationsForTemplateRequest): Promise<CreateQuotaApplicationsForTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQuotaApplicationsForTemplateWithOptions(request, runtime);
  }

  /**
   * Creates a quota template by using the management account of a resource directory. After you create a quota template, if a member is added to the resource directory, the quota template automatically submits a quota increase request for the member. The quota values for existing members remain unchanged. You can use a quota template to apply for increases on multiple quotas at the same time. This automated approach improves the efficiency of quota management across your organization.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * You must set the `ServiceStatus` parameter to `1`. This ensures that the quota template is enabled.
   * You can call the [GetQuotaTemplateServiceStatus](https://help.aliyun.com/document_detail/450407.html) operation to query the status of a quota template. If the `ServiceStatus` parameter is set to `0` or `-1`, you must call the [ModifyQuotaTemplateServiceStatus](https://help.aliyun.com/document_detail/450406.html) operation to set the ServiceStatus parameter to `1`.
   * 
   * @param request - CreateTemplateQuotaItemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTemplateQuotaItemResponse
   */
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

  /**
   * Creates a quota template by using the management account of a resource directory. After you create a quota template, if a member is added to the resource directory, the quota template automatically submits a quota increase request for the member. The quota values for existing members remain unchanged. You can use a quota template to apply for increases on multiple quotas at the same time. This automated approach improves the efficiency of quota management across your organization.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * You must set the `ServiceStatus` parameter to `1`. This ensures that the quota template is enabled.
   * You can call the [GetQuotaTemplateServiceStatus](https://help.aliyun.com/document_detail/450407.html) operation to query the status of a quota template. If the `ServiceStatus` parameter is set to `0` or `-1`, you must call the [ModifyQuotaTemplateServiceStatus](https://help.aliyun.com/document_detail/450406.html) operation to set the ServiceStatus parameter to `1`.
   * 
   * @param request - CreateTemplateQuotaItemRequest
   * @returns CreateTemplateQuotaItemResponse
   */
  async createTemplateQuotaItem(request: CreateTemplateQuotaItemRequest): Promise<CreateTemplateQuotaItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTemplateQuotaItemWithOptions(request, runtime);
  }

  /**
   * Deletes a quota alert.
   * 
   * @remarks
   * In this example, the operation is called to delete a quota alert whose ID is `6b512ab7-da3a-4142-b529-2b2a9294****`.
   * 
   * @param request - DeleteQuotaAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQuotaAlarmResponse
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
   * Deletes a quota alert.
   * 
   * @remarks
   * In this example, the operation is called to delete a quota alert whose ID is `6b512ab7-da3a-4142-b529-2b2a9294****`.
   * 
   * @param request - DeleteQuotaAlarmRequest
   * @returns DeleteQuotaAlarmResponse
   */
  async deleteQuotaAlarm(request: DeleteQuotaAlarmRequest): Promise<DeleteQuotaAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQuotaAlarmWithOptions(request, runtime);
  }

  /**
   * Deletes a quota template by using the management account of a resource directory. After you delete a quota template, if a member is added to the resource directory, the quota template no longer automatically submits a quota increase request for the member.
   * 
   * @param request - DeleteTemplateQuotaItemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTemplateQuotaItemResponse
   */
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

  /**
   * Deletes a quota template by using the management account of a resource directory. After you delete a quota template, if a member is added to the resource directory, the quota template no longer automatically submits a quota increase request for the member.
   * 
   * @param request - DeleteTemplateQuotaItemRequest
   * @returns DeleteTemplateQuotaItemResponse
   */
  async deleteTemplateQuotaItem(request: DeleteTemplateQuotaItemRequest): Promise<DeleteTemplateQuotaItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTemplateQuotaItemWithOptions(request, runtime);
  }

  /**
   * Queries the details of the specified quota.
   * 
   * @remarks
   * In this example, the operation is called to query the details of a quota whose ID is `q_security-groups` and whose name is Maximum Number of Security Groups. This quota belongs to Elastic Compute Service (ECS). The query result shows the details of the quota. The details include the name, ID, description, quota value, used quota, unit, and dimension of the quota. In this example, the quota name is `Maximum Number of Security Groups`. The quota ID is `q_security-groups`. The description is `The maximum number of security groups that can be created for the current account`. The quota value is `801`. The used quota is `26`. The quota unit is `Number of security groups`. The quota dimension is `{"regionId":"cn-hangzhou"}`.
   * 
   * @param request - GetProductQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProductQuotaResponse
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
   * Queries the details of the specified quota.
   * 
   * @remarks
   * In this example, the operation is called to query the details of a quota whose ID is `q_security-groups` and whose name is Maximum Number of Security Groups. This quota belongs to Elastic Compute Service (ECS). The query result shows the details of the quota. The details include the name, ID, description, quota value, used quota, unit, and dimension of the quota. In this example, the quota name is `Maximum Number of Security Groups`. The quota ID is `q_security-groups`. The description is `The maximum number of security groups that can be created for the current account`. The quota value is `801`. The used quota is `26`. The quota unit is `Number of security groups`. The quota dimension is `{"regionId":"cn-hangzhou"}`.
   * 
   * @param request - GetProductQuotaRequest
   * @returns GetProductQuotaResponse
   */
  async getProductQuota(request: GetProductQuotaRequest): Promise<GetProductQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProductQuotaWithOptions(request, runtime);
  }

  /**
   * Queries the details of a quota dimension that is supported by an Alibaba Cloud service.
   * 
   * @remarks
   * In this example, the operation is called to query the details of a quota dimension whose key is `regionId`. The quota dimension belongs to Elastic Compute Service (ECS) Quotas by Instance Type whose service code is ecs-spec. The following query results are returned:
   * *   The values of the quota dimension include `cn-shenzhen`, `cn-beijing`, and `cn-hangzhou`.
   * *   The name of the quota dimension is `region`.
   * 
   * @param request - GetProductQuotaDimensionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProductQuotaDimensionResponse
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
   * Queries the details of a quota dimension that is supported by an Alibaba Cloud service.
   * 
   * @remarks
   * In this example, the operation is called to query the details of a quota dimension whose key is `regionId`. The quota dimension belongs to Elastic Compute Service (ECS) Quotas by Instance Type whose service code is ecs-spec. The following query results are returned:
   * *   The values of the quota dimension include `cn-shenzhen`, `cn-beijing`, and `cn-hangzhou`.
   * *   The name of the quota dimension is `region`.
   * 
   * @param request - GetProductQuotaDimensionRequest
   * @returns GetProductQuotaDimensionResponse
   */
  async getProductQuotaDimension(request: GetProductQuotaDimensionRequest): Promise<GetProductQuotaDimensionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProductQuotaDimensionWithOptions(request, runtime);
  }

  /**
   * In this example, the operation is called to query the details of a quota alert. The details of the alert are returned. The query results include the alert ID, alert name, alert contact, and time when the quota alert was created.
   * 
   * @remarks
   * In this example, the operation is called to query the details of a quota alert whose ID is `78d7e436-4b25-4897-84b5-d7b656bb****`. The details of the alert are returned. The query result includes the alert ID, alert name, alert contact, and the time when the quota alert was created.
   * 
   * @param request - GetQuotaAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQuotaAlarmResponse
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
   * In this example, the operation is called to query the details of a quota alert. The details of the alert are returned. The query results include the alert ID, alert name, alert contact, and time when the quota alert was created.
   * 
   * @remarks
   * In this example, the operation is called to query the details of a quota alert whose ID is `78d7e436-4b25-4897-84b5-d7b656bb****`. The details of the alert are returned. The query result includes the alert ID, alert name, alert contact, and the time when the quota alert was created.
   * 
   * @param request - GetQuotaAlarmRequest
   * @returns GetQuotaAlarmResponse
   */
  async getQuotaAlarm(request: GetQuotaAlarmRequest): Promise<GetQuotaAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQuotaAlarmWithOptions(request, runtime);
  }

  /**
   * Queries the details about a specified application that is submitted to increase a quota.
   * 
   * @remarks
   * In this example, the operation is called to query the details about an application whose ID is `d314d6ae-867d-484c-9009-3d421a80****`. The query result shows the details about the application. The details include the application ID, application time, expected quota value, and application result.
   * 
   * @param request - GetQuotaApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQuotaApplicationResponse
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
   * Queries the details about a specified application that is submitted to increase a quota.
   * 
   * @remarks
   * In this example, the operation is called to query the details about an application whose ID is `d314d6ae-867d-484c-9009-3d421a80****`. The query result shows the details about the application. The details include the application ID, application time, expected quota value, and application result.
   * 
   * @param request - GetQuotaApplicationRequest
   * @returns GetQuotaApplicationResponse
   */
  async getQuotaApplication(request: GetQuotaApplicationRequest): Promise<GetQuotaApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQuotaApplicationWithOptions(request, runtime);
  }

  /**
   * Queries the information about quota application approval, such as the average amount of time required for approval, whether approval reminders are supported, and the interval between two consecutive approval reminders.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * Make sure that you have created an application for quota increase. For more information, see [CreateQuotaApplication](https://help.aliyun.com/document_detail/440566.html).
   * 
   * @param request - GetQuotaApplicationApprovalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQuotaApplicationApprovalResponse
   */
  async getQuotaApplicationApprovalWithOptions(request: GetQuotaApplicationApprovalRequest, runtime: $Util.RuntimeOptions): Promise<GetQuotaApplicationApprovalResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetQuotaApplicationApproval",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQuotaApplicationApprovalResponse>(await this.callApi(params, req, runtime), new GetQuotaApplicationApprovalResponse({}));
  }

  /**
   * Queries the information about quota application approval, such as the average amount of time required for approval, whether approval reminders are supported, and the interval between two consecutive approval reminders.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * Make sure that you have created an application for quota increase. For more information, see [CreateQuotaApplication](https://help.aliyun.com/document_detail/440566.html).
   * 
   * @param request - GetQuotaApplicationApprovalRequest
   * @returns GetQuotaApplicationApprovalResponse
   */
  async getQuotaApplicationApproval(request: GetQuotaApplicationApprovalRequest): Promise<GetQuotaApplicationApprovalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQuotaApplicationApprovalWithOptions(request, runtime);
  }

  /**
   * Queries the status of a quota template.
   * 
   * @param request - GetQuotaTemplateServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQuotaTemplateServiceStatusResponse
   */
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

  /**
   * Queries the status of a quota template.
   * 
   * @param request - GetQuotaTemplateServiceStatusRequest
   * @returns GetQuotaTemplateServiceStatusResponse
   */
  async getQuotaTemplateServiceStatus(request: GetQuotaTemplateServiceStatusRequest): Promise<GetQuotaTemplateServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQuotaTemplateServiceStatusWithOptions(request, runtime);
  }

  /**
   * Queries the alert records.
   * 
   * @param request - ListAlarmHistoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlarmHistoriesResponse
   */
  async listAlarmHistoriesWithOptions(request: ListAlarmHistoriesRequest, runtime: $Util.RuntimeOptions): Promise<ListAlarmHistoriesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alarmId)) {
      body["AlarmId"] = request.alarmId;
    }

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

  /**
   * Queries the alert records.
   * 
   * @param request - ListAlarmHistoriesRequest
   * @returns ListAlarmHistoriesResponse
   */
  async listAlarmHistories(request: ListAlarmHistoriesRequest): Promise<ListAlarmHistoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAlarmHistoriesWithOptions(request, runtime);
  }

  /**
   * Queries the quotas on which a specified quota depends.
   * 
   * @remarks
   * In this example, the operation is called to query the quotas on which a Container Service for Kubernetes (ACK) quota whose ID is `q_i5uzm3` depends. This quota is the maximum number of nodes that can be created in an ACK cluster. The query result indicates that the specified quota depends on the following three quotas:
   * *   An Elastic Compute Service (ECS) quota whose ID is `q_elastic-network-interfaces`. This quota is the maximum number of ENIs (Secondary ENIs) that can be owned by an Alibaba Cloud account. The quota is available in the following regions: `cn-shenzhen`, `cn-beijing`, and `cn-hangzhou`.
   * *   A Server Load Balancer (SLB) quota whose ID is `q_fh20b0`. This quota is the number of servers that can be attached to the backend of an SLB instance.
   * *   An SLB quota whose ID is `q_3mmbsp`. This quota is the number of SLB instances that can be owned by an Alibaba Cloud account.
   * 
   * @param request - ListDependentQuotasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDependentQuotasResponse
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
   * Queries the quotas on which a specified quota depends.
   * 
   * @remarks
   * In this example, the operation is called to query the quotas on which a Container Service for Kubernetes (ACK) quota whose ID is `q_i5uzm3` depends. This quota is the maximum number of nodes that can be created in an ACK cluster. The query result indicates that the specified quota depends on the following three quotas:
   * *   An Elastic Compute Service (ECS) quota whose ID is `q_elastic-network-interfaces`. This quota is the maximum number of ENIs (Secondary ENIs) that can be owned by an Alibaba Cloud account. The quota is available in the following regions: `cn-shenzhen`, `cn-beijing`, and `cn-hangzhou`.
   * *   A Server Load Balancer (SLB) quota whose ID is `q_fh20b0`. This quota is the number of servers that can be attached to the backend of an SLB instance.
   * *   An SLB quota whose ID is `q_3mmbsp`. This quota is the number of SLB instances that can be owned by an Alibaba Cloud account.
   * 
   * @param request - ListDependentQuotasRequest
   * @returns ListDependentQuotasResponse
   */
  async listDependentQuotas(request: ListDependentQuotasRequest): Promise<ListDependentQuotasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDependentQuotasWithOptions(request, runtime);
  }

  /**
   * Queries the dimension groups of an Alibaba Cloud service.
   * 
   * @remarks
   * This topic provides an example on how to call the ListProductDimensionGroups operation to query the dimension groups of Object Storage Service (OSS). In this example, a dimension group is returned. The group name is `OSS_Group`, the group code is `oss_wf1ngqmd7q`, and the group key is `chargeType`.
   * 
   * @param request - ListProductDimensionGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductDimensionGroupsResponse
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
   * Queries the dimension groups of an Alibaba Cloud service.
   * 
   * @remarks
   * This topic provides an example on how to call the ListProductDimensionGroups operation to query the dimension groups of Object Storage Service (OSS). In this example, a dimension group is returned. The group name is `OSS_Group`, the group code is `oss_wf1ngqmd7q`, and the group key is `chargeType`.
   * 
   * @param request - ListProductDimensionGroupsRequest
   * @returns ListProductDimensionGroupsResponse
   */
  async listProductDimensionGroups(request: ListProductDimensionGroupsRequest): Promise<ListProductDimensionGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProductDimensionGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the quota dimensions that are supported by the specified Alibaba Cloud service.
   * 
   * @remarks
   * In this example, the operation is called to query the quota dimensions that are supported by Elastic Compute Service (ECS). The query results show all the quota dimensions that are supported by ECS.
   * 
   * @param request - ListProductQuotaDimensionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductQuotaDimensionsResponse
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
   * Queries the quota dimensions that are supported by the specified Alibaba Cloud service.
   * 
   * @remarks
   * In this example, the operation is called to query the quota dimensions that are supported by Elastic Compute Service (ECS). The query results show all the quota dimensions that are supported by ECS.
   * 
   * @param request - ListProductQuotaDimensionsRequest
   * @returns ListProductQuotaDimensionsResponse
   */
  async listProductQuotaDimensions(request: ListProductQuotaDimensionsRequest): Promise<ListProductQuotaDimensionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProductQuotaDimensionsWithOptions(request, runtime);
  }

  /**
   * Queries the quotas of a specific Alibaba Cloud service.
   * 
   * @remarks
   * In this example, the operation is called to query the quotas whose instance type is `ecs.g5.2xlarge`. The quotas belong to Elastic Compute Service (ECS) Quotas by Instance Type. The query result includes the name, ID, unit, dimensions, and cycle of each quota.
   * 
   * @param request - ListProductQuotasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductQuotasResponse
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
   * Queries the quotas of a specific Alibaba Cloud service.
   * 
   * @remarks
   * In this example, the operation is called to query the quotas whose instance type is `ecs.g5.2xlarge`. The quotas belong to Elastic Compute Service (ECS) Quotas by Instance Type. The query result includes the name, ID, unit, dimensions, and cycle of each quota.
   * 
   * @param request - ListProductQuotasRequest
   * @returns ListProductQuotasResponse
   */
  async listProductQuotas(request: ListProductQuotasRequest): Promise<ListProductQuotasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProductQuotasWithOptions(request, runtime);
  }

  /**
   * Queries the Alibaba Cloud services that support Quota Center.
   * 
   * @remarks
   * The services in the query result are the same as the services listed in [Alibaba Cloud services that support Quota Center](https://help.aliyun.com/document_detail/182368.html).
   * 
   * @param request - ListProductsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductsResponse
   */
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

  /**
   * Queries the Alibaba Cloud services that support Quota Center.
   * 
   * @remarks
   * The services in the query result are the same as the services listed in [Alibaba Cloud services that support Quota Center](https://help.aliyun.com/document_detail/182368.html).
   * 
   * @param request - ListProductsRequest
   * @returns ListProductsResponse
   */
  async listProducts(request: ListProductsRequest): Promise<ListProductsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProductsWithOptions(request, runtime);
  }

  /**
   * Queries quota alerts.
   * 
   * @param request - ListQuotaAlarmsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQuotaAlarmsResponse
   */
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

  /**
   * Queries quota alerts.
   * 
   * @param request - ListQuotaAlarmsRequest
   * @returns ListQuotaAlarmsResponse
   */
  async listQuotaAlarms(request: ListQuotaAlarmsRequest): Promise<ListQuotaAlarmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQuotaAlarmsWithOptions(request, runtime);
  }

  /**
   * Queries quota templates by using the management account of a resource directory.
   * 
   * @param request - ListQuotaApplicationTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQuotaApplicationTemplatesResponse
   */
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

  /**
   * Queries quota templates by using the management account of a resource directory.
   * 
   * @param request - ListQuotaApplicationTemplatesRequest
   * @returns ListQuotaApplicationTemplatesResponse
   */
  async listQuotaApplicationTemplates(request: ListQuotaApplicationTemplatesRequest): Promise<ListQuotaApplicationTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQuotaApplicationTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries the details of an application that is submitted to increase a quota.
   * 
   * @remarks
   * In this example, the operation is called to query the details of an application that is submitted to increase a quota whose ID is `q_i5uzm3` and whose name is Maximum Number of Nodes. This quota belongs to Container Service for Kubernetes (ACK). The query result shows the details of the application. The details include the application ID, application time, requested quota, and application result. In this example, the application ID is `b926571d-cc09-4711-b547-58a615f0****`. The application time is `2021-01-15T09:13:53Z`. The expected quota value is `101`. The application result is `Agree`.
   * 
   * @param request - ListQuotaApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQuotaApplicationsResponse
   */
  async listQuotaApplicationsWithOptions(request: ListQuotaApplicationsRequest, runtime: $Util.RuntimeOptions): Promise<ListQuotaApplicationsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
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
   * Queries the details of an application that is submitted to increase a quota.
   * 
   * @remarks
   * In this example, the operation is called to query the details of an application that is submitted to increase a quota whose ID is `q_i5uzm3` and whose name is Maximum Number of Nodes. This quota belongs to Container Service for Kubernetes (ACK). The query result shows the details of the application. The details include the application ID, application time, requested quota, and application result. In this example, the application ID is `b926571d-cc09-4711-b547-58a615f0****`. The application time is `2021-01-15T09:13:53Z`. The expected quota value is `101`. The application result is `Agree`.
   * 
   * @param request - ListQuotaApplicationsRequest
   * @returns ListQuotaApplicationsResponse
   */
  async listQuotaApplications(request: ListQuotaApplicationsRequest): Promise<ListQuotaApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQuotaApplicationsWithOptions(request, runtime);
  }

  /**
   * Queries the details of a quota increase application for member accounts in a resource directory.
   * 
   * @param request - ListQuotaApplicationsDetailForTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQuotaApplicationsDetailForTemplateResponse
   */
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

  /**
   * Queries the details of a quota increase application for member accounts in a resource directory.
   * 
   * @param request - ListQuotaApplicationsDetailForTemplateRequest
   * @returns ListQuotaApplicationsDetailForTemplateResponse
   */
  async listQuotaApplicationsDetailForTemplate(request: ListQuotaApplicationsDetailForTemplateRequest): Promise<ListQuotaApplicationsDetailForTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQuotaApplicationsDetailForTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the application records of a quota template that is used to apply for quotas for member accounts.
   * 
   * @param request - ListQuotaApplicationsForTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQuotaApplicationsForTemplateResponse
   */
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

  /**
   * Queries the application records of a quota template that is used to apply for quotas for member accounts.
   * 
   * @param request - ListQuotaApplicationsForTemplateRequest
   * @returns ListQuotaApplicationsForTemplateResponse
   */
  async listQuotaApplicationsForTemplate(request: ListQuotaApplicationsForTemplateRequest): Promise<ListQuotaApplicationsForTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQuotaApplicationsForTemplateWithOptions(request, runtime);
  }

  /**
   * Changes the status of a quota template. By default, the quota template is not configured. If the management account of a resource directory uses a quota template for the first time, you must enable the quota template.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * A resource directory is enabled. For more information, see [EnableResourceDirectory](https://help.aliyun.com/document_detail/604185.html).
   * ### [](#)Usage notes
   * If the `ServiceStatus` parameter is set to `0` or `-1`, you can call this operation to set the parameter to `1`. Then, you can call the [CreateTemplateQuotaItem](https://help.aliyun.com/document_detail/450615.html) operation to create a quota template.
   * 
   * @param request - ModifyQuotaTemplateServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyQuotaTemplateServiceStatusResponse
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
   * Changes the status of a quota template. By default, the quota template is not configured. If the management account of a resource directory uses a quota template for the first time, you must enable the quota template.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * A resource directory is enabled. For more information, see [EnableResourceDirectory](https://help.aliyun.com/document_detail/604185.html).
   * ### [](#)Usage notes
   * If the `ServiceStatus` parameter is set to `0` or `-1`, you can call this operation to set the parameter to `1`. Then, you can call the [CreateTemplateQuotaItem](https://help.aliyun.com/document_detail/450615.html) operation to create a quota template.
   * 
   * @param request - ModifyQuotaTemplateServiceStatusRequest
   * @returns ModifyQuotaTemplateServiceStatusResponse
   */
  async modifyQuotaTemplateServiceStatus(request: ModifyQuotaTemplateServiceStatusRequest): Promise<ModifyQuotaTemplateServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyQuotaTemplateServiceStatusWithOptions(request, runtime);
  }

  /**
   * The ID of the quota template.
   * 
   * @param request - ModifyTemplateQuotaItemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTemplateQuotaItemResponse
   */
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

  /**
   * The ID of the quota template.
   * 
   * @param request - ModifyTemplateQuotaItemRequest
   * @returns ModifyTemplateQuotaItemResponse
   */
  async modifyTemplateQuotaItem(request: ModifyTemplateQuotaItemRequest): Promise<ModifyTemplateQuotaItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTemplateQuotaItemWithOptions(request, runtime);
  }

  /**
   * Reminds the approver of a quota application to review the application. This operation is applicable to quota applications that support the approval reminding feature.
   * 
   * @remarks
   * >  You can call this operation to enable the approval reminder feature for quota applications that support this feature. To check whether this feature is supported, you can view the value of `SupportReminder` in the GetQuotaApplicationApproval operation. If the value of SupportReminder is `true`, this feature is supported.
   * 
   * @param request - RemindQuotaApplicationApprovalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemindQuotaApplicationApprovalResponse
   */
  async remindQuotaApplicationApprovalWithOptions(request: RemindQuotaApplicationApprovalRequest, runtime: $Util.RuntimeOptions): Promise<RemindQuotaApplicationApprovalResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemindQuotaApplicationApproval",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemindQuotaApplicationApprovalResponse>(await this.callApi(params, req, runtime), new RemindQuotaApplicationApprovalResponse({}));
  }

  /**
   * Reminds the approver of a quota application to review the application. This operation is applicable to quota applications that support the approval reminding feature.
   * 
   * @remarks
   * >  You can call this operation to enable the approval reminder feature for quota applications that support this feature. To check whether this feature is supported, you can view the value of `SupportReminder` in the GetQuotaApplicationApproval operation. If the value of SupportReminder is `true`, this feature is supported.
   * 
   * @param request - RemindQuotaApplicationApprovalRequest
   * @returns RemindQuotaApplicationApprovalResponse
   */
  async remindQuotaApplicationApproval(request: RemindQuotaApplicationApprovalRequest): Promise<RemindQuotaApplicationApprovalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.remindQuotaApplicationApprovalWithOptions(request, runtime);
  }

  /**
   * Modifies a quota alert rule.
   * 
   * @remarks
   * In this example, the operation is called to modify the information about a quota alert whose ID is `a2efa7fc-832f-47bb-8054-39e28012****` and whose name is `rules`. The alert threshold is changed from `150` to `160`.
   * 
   * @param request - UpdateQuotaAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateQuotaAlarmResponse
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
   * Modifies a quota alert rule.
   * 
   * @remarks
   * In this example, the operation is called to modify the information about a quota alert whose ID is `a2efa7fc-832f-47bb-8054-39e28012****` and whose name is `rules`. The alert threshold is changed from `150` to `160`.
   * 
   * @param request - UpdateQuotaAlarmRequest
   * @returns UpdateQuotaAlarmResponse
   */
  async updateQuotaAlarm(request: UpdateQuotaAlarmRequest): Promise<UpdateQuotaAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateQuotaAlarmWithOptions(request, runtime);
  }

}
