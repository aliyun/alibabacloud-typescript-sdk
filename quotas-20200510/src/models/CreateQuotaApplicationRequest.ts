// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQuotaApplicationRequestDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the quota dimension.
   * 
   * > `Dimensions.N.Key` and `Dimensions.N.Value` must be specified together. The valid values of N depend on the number of dimensions supported by the cloud service. You can call [ListProductQuotaDimensions](~~ListProductQuotaDimensions~~) to query the quota dimensions supported by a cloud service. The length of the returned array is the value of N.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the quota dimension.
   * 
   * > `Dimensions.N.Key` and `Dimensions.N.Value` must be specified together. The valid values of N depend on the number of dimensions supported by the cloud service. You can call [ListProductQuotaDimensions](~~ListProductQuotaDimensions~~) to query the quota dimensions supported by a cloud service. The length of the returned array is the value of N.
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

export class CreateQuotaApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * >Notice: This parameter is deprecated and is not recommended.
   * 
   * The quota review mode.
   * 
   * @example
   * Sync
   */
  auditMode?: string;
  /**
   * @remarks
   * The requested quota value.
   * 
   * > - Set the requested quota value based on the `TotalUsage` (quota usage) and `ApplicableRange` (applicable range of the quota) of the target quota in [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html).
   * > - Quota increase requests are reviewed by the technical support of each cloud service. To increase the chances of approval, provide a reasonable requested value and a detailed reason when you submit the request.
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
   * The dimensions are attributes of the quota. The combination of dimensions (Dimensions) and quota ID (QuotaActionCode) uniquely identifies a quota.
   * > Some cloud services require dimensions. You can call [ListProductQuotaDimensions](~~ListProductQuotaDimensions~~) to query the quota dimensions supported by a cloud service. The `Requisite` response parameter indicates whether a dimension is required.
   */
  dimensions?: CreateQuotaApplicationRequestDimensions[];
  /**
   * @remarks
   * The UTC time when the quota takes effect.
   * This parameter is applicable only to privileges (WhiteListLabel). 
   * 
   * > If you do not specify an effective period, the default value is 99 years from the start time of the current quota.
   * 
   * @example
   * 2021-01-19T09:25:56Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The language of the quota alert notification.
   * 
   * @example
   * zh
   */
  envLanguage?: string;
  /**
   * @remarks
   * The UTC time when the quota expires.
   * This parameter is applicable only to privileges (WhiteListLabel). 
   * 
   * > If you do not specify an expiration time, the default value is the submission time.
   * 
   * @example
   * 2021-01-20T09:25:56Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Specifies whether to send a notification about the request result. Valid values:
   * 
   * - 0 (default): does not send a notification.
   * - 3: sends a notification.
   * 
   * @example
   * 0
   */
  noticeType?: number;
  /**
   * @remarks
   * The abbreviation of the cloud service name.
   * 
   * > For information about how to obtain the abbreviation of a cloud service name, see `ProductCode` in [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html).
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
   * The quota type.
   * 
   * Default value: CommonQuota.
   * 
   * @example
   * CommonQuota
   */
  quotaCategory?: string;
  /**
   * @remarks
   * The reason for the quota increase request.
   * 
   * > Quota increase requests are reviewed by the technical support of each cloud service. To increase the chances of approval, provide a reasonable requested value and a detailed reason when you submit the request.
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

