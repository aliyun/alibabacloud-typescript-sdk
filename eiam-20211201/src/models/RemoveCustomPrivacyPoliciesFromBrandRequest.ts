// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveCustomPrivacyPoliciesFromBrandRequest extends $dara.Model {
  /**
   * @remarks
   * 品牌化Id
   * 
   * This parameter is required.
   * 
   * @example
   * brand_xxxx
   */
  brandId?: string;
  /**
   * @remarks
   * 条款ID列表
   * 
   * This parameter is required.
   */
  customPrivacyPolicyIds?: string[];
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      brandId: 'BrandId',
      customPrivacyPolicyIds: 'CustomPrivacyPolicyIds',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandId: 'string',
      customPrivacyPolicyIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customPrivacyPolicyIds)) {
      $dara.Model.validateArray(this.customPrivacyPolicyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

