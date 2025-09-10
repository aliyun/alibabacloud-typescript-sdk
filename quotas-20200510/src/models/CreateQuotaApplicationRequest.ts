// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQuotaApplicationRequestDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the dimension.
   * 
   * >  You must configure `Dimensions.N.Key` and `Dimensions.N.Value` at the same time. The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service. You can call the [ListProductQuotaDimensions](~~ListProductQuotaDimensions~~) operation to query the dimensions that are supported by an Alibaba Cloud service. The number of elements in the returned array is N.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the dimension.
   * 
   * >  You must configure `Dimensions.N.Key` and `Dimensions.N.Value` at the same time. The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service. You can call the [ListProductQuotaDimensions](~~ListProductQuotaDimensions~~) operation to query the dimensions that are supported by an Alibaba Cloud service. The number of elements in the returned array is N.
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
   * >  This parameter is deprecated and is not recommended.
   * 
   * The mode in which you want the application to be reviewed.
   * 
   * Valid values: 
   * *   Async
   * *   Sync
   * 
   * @example
   * Sync
   */
  auditMode?: string;
  /**
   * @remarks
   * The requested value of the quota.
   * 
   * > 
   * 
   * *   You can specify the DesireValue parameter based on the values of the `TotalUsage` and `ApplicableRange` parameters that are returned by the [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html) operation.
   * 
   * *   Applications are reviewed by the technical support team of each Alibaba Cloud service. To increase the success rate of your application, you must specify a reasonable quota value and detailed reasons when you submit an application to increase the value of the quota.
   * 
   * This parameter is required.
   * 
   * @example
   * 804
   */
  desireValue?: number;
  /**
   * @remarks
   * The quota dimensions. A quota item is uniquely determined by the values of Dimensions and QuotaActionCode.
   * 
   * >  Some dimensions are required. You can call the [ListProductQuotaDimensions](~~ListProductQuotaDimensions~~) operation to query the quota dimensions that are supported by an Alibaba Cloud service. The value of `Requisite` in the response indicates whether a dimension is required.
   */
  dimensions?: CreateQuotaApplicationRequestDimensions[];
  /**
   * @remarks
   * The end time of the validity period of the quota. Specify the value in UTC. This parameter is valid only if you set the QuotaCategory parameter to WhiteListLabel.
   * 
   * >  If you do not specify an end time, the default end time is 99 years after the quota application is submitted.
   * 
   * @example
   * 2021-01-19T09:25:56Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The language of the quota alert notification.
   * 
   * Valid values:
   * 
   * *   en: English
   * *   zh: Chinese
   * 
   * @example
   * zh
   */
  envLanguage?: string;
  /**
   * @remarks
   * The start time of the validity period of the quota. Specify the value in UTC. This parameter is valid only if you set the QuotaCategory parameter to WhiteListLabel.
   * 
   * >  If you do not specify a start time, the default start time is the time when the quota application is submitted.
   * 
   * @example
   * 2021-01-20T09:25:56Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Specifies whether to send a notification about the application result. Valid values:
   * 
   * *   0 (default): no
   * *   3: sends a notification.
   * 
   * @example
   * 0
   */
  noticeType?: number;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * >  To query the abbreviation of an Alibaba Cloud service name, check the `ProductCode` parameter that is described in [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html).
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
   * >  To query the quota ID of an Alibaba Cloud service, check the `QuotaActionCode` parameter that is described in [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html).
   * 
   * This parameter is required.
   * 
   * @example
   * q_security-groups
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The type of the quota. Valid values:
   * 
   * Default value: CommonQuota.
   * 
   * Valid values:
   * 
   * *   FlowControl: API rate limit
   * *   WhiteListLabel: whitelist quota
   * *   CommonQuota: general quota
   * 
   * @example
   * CommonQuota
   */
  quotaCategory?: string;
  /**
   * @remarks
   * The reason for the application.
   * 
   * > Applications are reviewed by the technical support team of each Alibaba Cloud service. To increase the success rate of your application, you must specify a reasonable quota value and detailed reasons when you submit an application to increase the value of the quota.
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

