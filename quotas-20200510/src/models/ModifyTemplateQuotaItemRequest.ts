// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTemplateQuotaItemRequestDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the quota dimension.
   * 
   * > - The value of N depends on the number of dimensions that are supported by the Alibaba Cloud service.
   * >
   * > - If you set `ProductCode` to a value such as `ecs`, `ecs-spec`, `actiontrail`, or `ess`, you must specify both the key and value of the quota dimension.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the quota dimension.
   * 
   * > - The value of N depends on the number of dimensions that are supported by the Alibaba Cloud service.
   * >
   * > - If you set `ProductCode` to a value such as `ecs`, `ecs-spec`, `actiontrail`, or `ess`, you must specify both the key and value of the quota dimension.
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

export class ModifyTemplateQuotaItemRequest extends $dara.Model {
  /**
   * @remarks
   * The value of the quota that you want to apply for.
   * 
   * > - You can set this parameter based on the `TotalUsage` (quota usage) and `ApplicableRange` (the range of values for the quota) parameters of the target quota in [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html).
   * >
   * > - The quota application is reviewed by the technical support of each Alibaba Cloud service. To increase the success rate of your application, you must specify a reasonable quota value and a detailed reason when you submit the application.
   * 
   * @example
   * 804
   */
  desireValue?: number;
  /**
   * @remarks
   * The quota dimensions.
   */
  dimensions?: ModifyTemplateQuotaItemRequestDimensions[];
  /**
   * @remarks
   * The UTC time when the quota takes effect.
   * This parameter is applicable only to privileges (WhiteListLabel).
   * 
   * > If you do not specify this parameter, the quota takes effect immediately.
   * 
   * @example
   * 2021-01-19T09:25:56Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The language of the notification for a quota alert. Valid values:
   * 
   * - zh (default): Chinese.
   * 
   * - en: English.
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
   * > If you do not specify this parameter, the quota does not expire.
   * 
   * @example
   * 2021-01-20T09:25:56Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The ID of the quota template.
   * For more information about how to obtain the ID of a quota template, see [ListQuotaApplicationTemplates](https://help.aliyun.com/document_detail/450403.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 1****
   */
  id?: string;
  /**
   * @remarks
   * Specifies whether to send a notification about the application result. Valid values:
   * 
   * - 0 (default): no.
   * 
   * - 3: yes.
   * 
   * @example
   * 0
   */
  noticeType?: number;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * > For more information about how to obtain the abbreviation of an Alibaba Cloud service name, see the `ProductCode` parameter in [ListProducts](https://help.aliyun.com/document_detail/440555.html).
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * > For more information about how to obtain the quota ID of an Alibaba Cloud service, see the `QuotaActionCode` parameter in [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html).
   * 
   * @example
   * q_security-groups
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The quota type. Valid values:
   * 
   * - CommonQuota (default): general quota.
   * 
   * - WhiteListLabel: privilege.
   * 
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
      id: 'Id',
      noticeType: 'NoticeType',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaCategory: 'QuotaCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desireValue: 'number',
      dimensions: { 'type': 'array', 'itemType': ModifyTemplateQuotaItemRequestDimensions },
      effectiveTime: 'string',
      envLanguage: 'string',
      expireTime: 'string',
      id: 'string',
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

