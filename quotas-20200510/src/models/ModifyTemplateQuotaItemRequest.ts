// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTemplateQuotaItemRequestDimensions extends $dara.Model {
  /**
   * @example
   * regionId
   */
  key?: string;
  /**
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
   * @example
   * 804
   */
  desireValue?: number;
  dimensions?: ModifyTemplateQuotaItemRequestDimensions[];
  /**
   * @example
   * 2021-01-19T09:25:56Z
   */
  effectiveTime?: string;
  /**
   * @example
   * zh
   */
  envLanguage?: string;
  /**
   * @example
   * 2021-01-20T09:25:56Z
   */
  expireTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1****
   */
  id?: string;
  /**
   * @example
   * 0
   */
  noticeType?: number;
  /**
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @example
   * q_security-groups
   */
  quotaActionCode?: string;
  /**
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

