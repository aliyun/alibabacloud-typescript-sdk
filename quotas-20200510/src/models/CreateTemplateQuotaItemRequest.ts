// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateQuotaItemRequestDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the quota dimension.
   * 
   * > - The value range of N depends on the number of dimensions supported by the cloud service.
   * > - If `ProductCode` is `ecs`, `ecs-spec`, `actiontrail`, or `ess`, you must specify both the key and the value of the quota dimension.
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
   * > - If `ProductCode` is `ecs`, `ecs-spec`, `actiontrail`, or `ess`, you must specify both the key and the value of the quota dimension.
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

export class CreateTemplateQuotaItemRequest extends $dara.Model {
  /**
   * @remarks
   * The requested quota value.
   * 
   * > - Set the requested quota value based on the `TotalUsage` (quota usage) and `ApplicableRange` (applicable range for the quota item) of the target quota in [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html).
   * > - Quota applications are reviewed by the technical support team of each cloud service. To increase the approval rate, specify a reasonable requested value and provide a detailed reason when you apply for a quota increase.
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
   * The UTC time when the quota takes effect.
   * This parameter applies only to privileges (WhiteListLabel). 
   * 
   * > An empty value indicates that the quota takes effect immediately.
   * 
   * @example
   * 2021-01-19T09:25:56Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The language of the quota alert notification. Valid values:
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
   * The UTC time when the quota expires.
   * This parameter applies only to privileges (WhiteListLabel). 
   * 
   * > An empty value indicates that no UTC expiration time is specified.
   * 
   * @example
   * 2021-01-20T09:25:56Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Specifies whether to send a notification for the quota application result. Valid values:
   * - 0 (default): No.
   * - 3: Yes.
   * 
   * @example
   * 0
   */
  noticeType?: number;
  /**
   * @remarks
   * The abbreviation of the cloud service.
   * 
   * > For information about how to obtain the abbreviation of a cloud service, see `ProductCode` in [ListProducts](https://help.aliyun.com/document_detail/440555.html).
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
   * > For information about how to obtain the quota ID of a cloud service, see `QuotaActionCode` in [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html).
   * 
   * This parameter is required.
   * 
   * @example
   * q_security-groups
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The quota category. Valid values:
   * - CommonQuota: general quota.
   * - WhiteListLabel: privilege.
   * - FlowControl: API rate limit.
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

  validate() {
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

