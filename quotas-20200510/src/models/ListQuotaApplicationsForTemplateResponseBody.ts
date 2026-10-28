// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotaApplicationsForTemplateResponseBodyQuotaBatchApplicationsAuditStatusVos extends $dara.Model {
  /**
   * @remarks
   * The number of applications.
   * 
   * @example
   * 4
   */
  count?: number;
  /**
   * @remarks
   * The approval status of the quota increase application. Valid values:
   * 
   * - Disagree: denied.
   * 
   * - Agree: approved.
   * 
   * - Process: pending approval.
   * 
   * - Cancel: closed.
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationsForTemplateResponseBodyQuotaBatchApplications extends $dara.Model {
  /**
   * @remarks
   * The list of Alibaba Cloud accounts of the members in a resource directory for which the quota applications are submitted.
   */
  aliyunUids?: string[];
  /**
   * @remarks
   * The UTC time when the quota increase application was submitted.
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
   * The ID of the batch quota application.
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
   * 105
   */
  desireValue?: number;
  /**
   * @remarks
   * The quota dimensions.
   * 
   * Format: {"regionId":"cn-hangzhou"}.
   * 
   * @example
   * {"regionId":"cn-hangzhou"}
   */
  dimensions?: { [key: string]: any };
  /**
   * @remarks
   * The UTC time when the quota takes effect.
   * 
   * @example
   * 2023-05-22T16:00:00Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The UTC time when the quota expires.
   * 
   * @example
   * 2024-05-14T02:08:56Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service.
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
   * The type of the quota. Valid values:
   * 
   * - CommonQuota: general quota.
   * 
   * - FlowControl: API rate limit.
   * 
   * - WhiteListLabel: privilege.
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

  validate() {
    if(Array.isArray(this.aliyunUids)) {
      $dara.Model.validateArray(this.aliyunUids);
    }
    if(Array.isArray(this.auditStatusVos)) {
      $dara.Model.validateArray(this.auditStatusVos);
    }
    if(this.dimensions) {
      $dara.Model.validateMap(this.dimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationsForTemplateResponseBody extends $dara.Model {
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
   * The token that marks the start of the data to read.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of historical quota applications.
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
   * The total number of records returned for the request.
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

  validate() {
    if(Array.isArray(this.quotaBatchApplications)) {
      $dara.Model.validateArray(this.quotaBatchApplications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

