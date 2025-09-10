// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateQuotaItemRequestDimensions extends $dara.Model {
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

export class CreateTemplateQuotaItemRequest extends $dara.Model {
  /**
   * @remarks
   * The requested value of the quota.
   * 
   * > 
   * 
   * *   You can specify DesireValue based on the values of `TotalUsage` and `ApplicableRange` in the response to the [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html) operation.
   * 
   * *   Applications are reviewed by the technical support team for each cloud service. To increase the success rate of your application, specify a reasonable quota value and a detailed reason.
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
   * The start time of the validity period of the quota. Specify the value in UTC. This parameter is valid only if you set the QuotaCategory parameter to WhiteListLabel.
   * 
   * > If you leave this parameter empty, the quota takes effect immediately.
   * 
   * @example
   * 2021-01-19T09:25:56Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The language of the quota alert notification. Valid values:
   * 
   * *   zh (default value): Chinese
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
   * > If you leave this parameter empty, no end time is specified.
   * 
   * @example
   * 2021-01-20T09:25:56Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Specifies whether to send a notification about the application result. Valid values:
   * 
   * *   0 (default value): no
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
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * >  To obtain the quota ID of an Alibaba Cloud service, call the [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html) operation and check the value of `QuotaActionCode` in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * q_security-groups
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The quota type. Valid values:
   * 
   * *   CommonQuota: general quota
   * *   WhiteListLabel: privilege
   * *   FlowControl: API rate limit
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

