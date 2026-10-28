// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotaApplicationsDetailForTemplateResponseBodyQuotaApplicationsPeriod extends $dara.Model {
  /**
   * @remarks
   * The unit of the calculation cycle.
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationsDetailForTemplateResponseBodyQuotaApplications extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account.
   * 
   * @example
   * 175376458581****
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The ID of the quota increase request.
   * 
   * @example
   * b926571d-cc09-4711-b547-58a615f0****
   */
  applicationId?: string;
  /**
   * @remarks
   * The UTC time when the quota increase request was submitted.
   * 
   * @example
   * 2021-01-15T09:13:53Z
   */
  applyTime?: string;
  /**
   * @remarks
   * The approved quota value.
   * 
   * @example
   * 101
   */
  approveValue?: number;
  /**
   * @remarks
   * The reason for the approval.
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
   * The requested quota value.
   * 
   * @example
   * 60
   */
  desireValue?: number;
  /**
   * @remarks
   * The UTC time when the new quota value takes effect.
   * 
   * @example
   * 2021-01-15T11:46:25Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The language of the alert notification. Valid values:
   * 
   * - zh: Chinese.
   * 
   * - en: English.
   * 
   * @example
   * zh
   */
  envLanguage?: string;
  /**
   * @remarks
   * The UTC time when the new quota value expires.
   * 
   * @example
   * 2021-01-17T11:46:25Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether a notification is sent for the quota increase request. Valid values:
   * 
   * - 0: No.
   * 
   * - 3: Yes.
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
   * - CommonQuota (default): General quota.
   * 
   * - WhiteListLabel: Privilege quota.
   * 
   * - FlowControl: API rate limit quota.
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
   * The name of the quota.
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
   * The reason for the quota increase request.
   * 
   * @example
   * Maximum Number of Nodes
   */
  reason?: string;
  /**
   * @remarks
   * The approval status of the quota increase request. Valid values:
   * 
   * - Disagree: The request is rejected.
   * 
   * - Agree: The request is approved.
   * 
   * - Process: The request is in review.
   * 
   * - Cancel: The request is closed.
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

  validate() {
    if(this.period && typeof (this.period as any).validate === 'function') {
      (this.period as any).validate();
    }
    if(this.quotaDimension) {
      $dara.Model.validateMap(this.quotaDimension);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationsDetailForTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records returned for the current query.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position from which the next query starts.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * A list of quota application details.
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
   * The total number of records returned for the request.
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

  validate() {
    if(Array.isArray(this.quotaApplications)) {
      $dara.Model.validateArray(this.quotaApplications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

