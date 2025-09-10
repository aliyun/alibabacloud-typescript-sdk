// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQuotaApplicationResponseBody extends $dara.Model {
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
   * Indicates whether the notification about the application result is sent. Valid values:
   * 
   * *   0: The notification is not sent.
   * *   3: The notification is sent.
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
   * The approval state of the quota increase application.
   * 
   * Valid values:
   * 
   * *   Cancel: The application is canceled.
   * *   Agree: The application is approved.
   * *   Process: The application is in review.
   * *   Disagree: The application is rejected.
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

