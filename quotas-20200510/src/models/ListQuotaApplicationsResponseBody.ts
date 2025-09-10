// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotaApplicationsResponseBodyQuotaApplicationsPeriod extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationsResponseBodyQuotaApplications extends $dara.Model {
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
  /**
   * @remarks
   * The quota type. Valid values:
   * 
   * *   CommonQuota (default): general quota.
   * *   WhiteListLabel: whitelist quota.
   * *   FlowControl: API rate limit.
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

  validate() {
    if(this.dimension) {
      $dara.Model.validateMap(this.dimension);
    }
    if(this.period && typeof (this.period as any).validate === 'function') {
      (this.period as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationsResponseBody extends $dara.Model {
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
   * The details of the quota increase applications.
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

