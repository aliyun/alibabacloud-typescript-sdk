// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQuotaApplicationsForTemplateRequestDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the dimension.
   * 
   * > 
   * 
   * *   The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
   * 
   * *   This parameter is required if you set the `ProductCode` parameter to `ecs`, `ecs-spec`, `actiontrail`, or `ess`.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the dimension.
   * 
   * > 
   * 
   * *   The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
   * 
   * *   This parameter is required if you set the `ProductCode` parameter to `ecs`, `ecs-spec`, `actiontrail`, or `ess`.
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
   * The Alibaba Cloud accounts that correspond to the resource directory members for which the quotas are applied.
   * 
   * >  You can submit a quota increase application for a maximum of 50 members at a time. For more information about the members of a resource directory, see [ListAccounts](https://help.aliyun.com/document_detail/604207.html).
   * 
   * This parameter is required.
   */
  aliyunUids?: string[];
  /**
   * @remarks
   * The requested value of the quota.
   * 
   * > 
   * 
   * *   You can specify DesireValue based on the values of `TotalUsage` and `ApplicableRange` in the response to the [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html) operation.
   * 
   * *   Applications are reviewed by the technical support team of each Alibaba Cloud service. To increase the success rate of your application, specify a reasonable quota value and a detailed reason.
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
   * The start time of the validity period of the quota. Specify the value in UTC. This parameter is valid only if you set the QuotaCategory parameter to WhiteListLabel.
   * 
   * >  If you do not specify a start time, the value is the time when the quota application is submitted.
   * 
   * @example
   * 2021-01-19T09:25:56Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The language of the notification about the application result. Valid values:
   * 
   * *   zh (default): Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  envLanguage?: string;
  /**
   * @remarks
   * The end time of the validity period of the quota. Specify the value in UTC. This parameter is valid only if you set the QuotaCategory parameter to WhiteListLabel.
   * 
   * >  If you do not specify an end time, the value is 99 years after the start time of the validity period.
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
   * *   3: yes
   * 
   * @example
   * 0
   */
  noticeType?: number;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * >  To query the abbreviation of an Alibaba Cloud service name, call the [ListProducts](https://help.aliyun.com/document_detail/440555.html) operation and check the value of `ProductCode` in the response.
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
   * >  To query the quota ID of an Alibaba Cloud service, call the [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html) and check the value of `QuotaActionCode` in the response.
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
   * 
   * *   CommonQuota: general quota
   * *   FlowControl: API rate limit
   * *   WhiteListLabel: privilege
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
   * >  Applications are reviewed by the technical support team of each Alibaba Cloud service. To increase the success rate of your application, you must specify a reasonable quota value and detailed reasons when you submit the application.
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

