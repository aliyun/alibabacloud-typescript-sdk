// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveCustomPrivacyPoliciesFromBrandRequest extends $dara.Model {
  /**
   * @remarks
   * The branding ID.
   * 
   * This parameter is required.
   * 
   * @example
   * brand_xxxx
   */
  brandId?: string;
  /**
   * @remarks
   * A list of policy IDs.
   * 
   * This parameter is required.
   */
  customPrivacyPolicyIds?: string[];
  /**
   * @remarks
   * The instance ID.
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

