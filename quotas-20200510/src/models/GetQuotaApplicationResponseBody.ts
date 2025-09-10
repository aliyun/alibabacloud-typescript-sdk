// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaApplicationResponseBodyQuotaApplication extends $dara.Model {
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
  /**
   * @remarks
   * The quota type. Valid values:
   * 
   * *   CommonQuota: general quota.
   * *   FlowControl: API rate limit.
   * *   WhiteListLabel: whitelist quota.
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

  validate() {
    if(this.dimension) {
      $dara.Model.validateMap(this.dimension);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the quota application.
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

  validate() {
    if(this.quotaApplication && typeof (this.quotaApplication as any).validate === 'function') {
      (this.quotaApplication as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

