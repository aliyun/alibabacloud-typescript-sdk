// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQuotaApplicationsForTemplateRequestDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the quota dimension.
   * 
   * > - The value range of N depends on the number of dimensions supported by the cloud service.
   * > - When `ProductCode` is set to `ecs`, `ecs-spec`, `actiontrail`, or `ess`, you must specify both the key and the value of the quota dimension.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the quota dimension.
   * 
   * > - The value range of N depends on the number of dimensions supported by the cloud service.
   * > - When `ProductCode` is set to `ecs`, `ecs-spec`, `actiontrail`, or `ess`, you must specify both the key and the value of the quota dimension.
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaApplicationsForTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The list of Alibaba Cloud accounts that belong to the resource directory members for which you want to apply for quotas.
   * 
   * > You can apply for quota increases for a maximum of 50 members at a time. For more information about the members of a resource directory, see [ListAccounts](https://help.aliyun.com/document_detail/604207.html).
   * 
   * This parameter is required.
   */
  aliyunUids?: string[];
  /**
   * @remarks
   * The requested quota value.
   * 
   * > - Set the requested quota value based on the `TotalUsage` (quota usage) and `ApplicableRange` (applicable range for quota application) of the target quota in [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html).
   * > - Quota applications are reviewed and approved by the technical support team of each cloud service. To increase the approval rate, specify a reasonable requested value and provide a detailed reason when you submit a quota application.
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
   * The UTC time when the quota takes effect. This parameter applies only to privileges (WhiteListLabel).
   *  
   * > If you do not specify an effective period for the current account, the commit time is used by default.
   * 
   * @example
   * 2021-01-19T09:25:56Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The language of the notification for the quota application result. Valid values:
   * 
   * - zh (default): Chinese.
   * - en: English.
   * 
   * @example
   * zh
   */
  envLanguage?: string;
  /**
   * @remarks
   * The UTC time when the quota expires. This parameter applies only to privileges (WhiteListLabel). 
   * 
   * > If you do not specify an expiration time for the current account, the expiration time is set to 99 years after the effective period of the current quota.
   * 
   * @example
   * 2021-01-20T09:25:56Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Specifies whether to send notifications for quota application results. Valid values:
   * 
   * - 0 (default): no.
   * - 3: yes.
   * 
   * @example
   * 0
   */
  noticeType?: number;
  /**
   * @remarks
   * The abbreviated name of the cloud service.
   * 
   * > For more information about how to obtain the abbreviated name of a cloud service, see `ProductCode` in [ListProducts](https://help.aliyun.com/document_detail/440555.html).
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
   * > For more information about how to obtain the quota ID of a cloud service, see `QuotaActionCode` in [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html).
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
   * - CommonQuota: general quota.
   * - FlowControl: API rate limit.
   * - WhiteListLabel: privilege.
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
   * > Quota applications are reviewed and approved by the technical support team of each cloud service. To increase the approval rate, specify a reasonable requested value and provide a detailed reason when you submit a quota application.
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

  validate() {
    if(Array.isArray(this.aliyunUids)) {
      $dara.Model.validateArray(this.aliyunUids);
    }
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

