// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotaApplicationsResponseBodyQuotaApplicationsPeriod extends $dara.Model {
  /**
   * @remarks
   * The unit of the quota calculation period. Valid values:
   * - second: seconds.
   * - minute: minutes.
   * - hour: hours.
   * - day: days.
   * - week: weeks.
   * 
   * @example
   * second
   */
  periodUnit?: string;
  /**
   * @remarks
   * The value of the quota calculation period.
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
   * The ID of the quota increase application.
   * 
   * @example
   * b926571d-cc09-4711-b547-58a615f0****
   */
  applicationId?: string;
  /**
   * @remarks
   * The time when the quota increase application was submitted. The value is in ISO 8601 format, in UTC, and ends with Z.
   * 
   * @example
   * 2021-01-15T09:13:53Z
   */
  applyTime?: string;
  /**
   * @remarks
   * The approved quota value of the quota increase application.
   * 
   * @example
   * 101
   */
  approveValue?: number;
  /**
   * @remarks
   * The approval comment for the quota increase application.
   * 
   * @example
   * Agree
   */
  auditReason?: string;
  /**
   * @remarks
   * The remarks of the quota increase application.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The requested quota value of the quota increase application.
   * 
   * @example
   * 101
   */
  desireValue?: number;
  /**
   * @remarks
   * The quota dimensions of the quota increase application.
   * 
   * @example
   * {"regionId":"cn-hangzhou"}
   */
  dimension?: { [key: string]: any };
  /**
   * @remarks
   * The effective period of the quota increase application. The value is in ISO 8601 format, in UTC, and ends with Z.
   * 
   * @example
   * 2021-01-15T11:46:25Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The expiration time of the quota increase application. The value is in ISO 8601 format, in UTC, and ends with Z.
   * 
   * @example
   * 2021-01-17T11:46:25Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether a notification is sent for the quota increase application result. Valid values:
   * 
   * - 0: No.
   * - 3: Yes.
   * 
   * @example
   * 3
   */
  noticeType?: number;
  /**
   * @remarks
   * The quota calculation period.
   */
  period?: ListQuotaApplicationsResponseBodyQuotaApplicationsPeriod;
  /**
   * @remarks
   * The abbreviation of the cloud service name.
   * 
   * @example
   * csk
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
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
   * The quota category. Valid values:
   * - CommonQuota (default): general quota.
   * - WhiteListLabel: privilege.
   * - FlowControl: API rate limit.
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
   * The maximum number of nodes in a cluster.
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
   * The unit of the quota.
   * 
   * @example
   * Node
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
   * - Disagree: Rejected.
   * 
   * - Agree: Approved.
   * 
   * - Process: Under review.
   * 
   * - Cancel: Closed.
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
   * The maximum number of records returned in this query.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position of the returned data. An empty value indicates that all data has been returned.
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
   * The request ID.
   * 
   * @example
   * 730925FB-0BD0-40AC-AF3A-A6C6E9716879
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of quota increase applications.
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

