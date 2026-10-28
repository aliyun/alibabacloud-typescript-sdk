// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQuotaApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the quota increase request.
   * 
   * @example
   * d314d6ae-867d-484c-9009-3d421a80****
   */
  applicationId?: string;
  /**
   * @remarks
   * The time when the quota increase request was submitted. The time is in ISO 8601 format and in UTC. The value ends with Z.
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
   * 804
   */
  approveValue?: number;
  /**
   * @remarks
   * The review comments on the quota increase request.
   * 
   * @example
   * Agree
   */
  auditReason?: string;
  /**
   * @remarks
   * The requested quota value.
   * 
   * @example
   * 804
   */
  desireValue?: number;
  /**
   * @remarks
   * The quota dimensions.
   * 
   * @example
   * {"regionId":"cn-hangzhou"}
   */
  dimension?: { [key: string]: any };
  /**
   * @remarks
   * The effective period of the quota. The time is in ISO 8601 format and in UTC. The value ends with Z.
   * 
   * @example
   * 2021-01-19T09:25:56Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The time when the quota expires. The time is in ISO 8601 format and in UTC. The value ends with Z.
   * 
   * @example
   * 2021-01-20T09:25:56Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether a notification is sent about the request result. Valid values:
   * 
   * - 0: no notification is sent.
   * 
   * - 3: a notification is sent.
   * 
   * @example
   * 3
   */
  noticeType?: number;
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
   * The quota ID.
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
   * acs:quotas::141339776561****:quota/ecs/q_security-groups
   */
  quotaArn?: string;
  /**
   * @remarks
   * The description of the quota.
   * 
   * @example
   * The maximum number of security groups that can be owned by the current account.
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
   * The unit of the quota.
   * 
   * @example
   * AMOUNT
   */
  quotaUnit?: string;
  /**
   * @remarks
   * The reason for the quota increase request.
   * 
   * @example
   * Scale Out
   */
  reason?: string;
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
   * The approval status of the quota increase request.
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

