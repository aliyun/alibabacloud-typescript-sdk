// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyResourceCenterPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud computer policies that you want to associate with cloud computers.
   * 
   * >  You can specify up to one cloud computer policy that takes effect globally, and up to four cloud computer policies that apply to specific IP addresses. If multiple cloud computer policies are configured for global enforcement, only the earliest-associated policy will take effect
   * 
   * This parameter is required.
   */
  policyGroupIds?: string[];
  /**
   * @remarks
   * The policy type.
   * 
   * Valid values:
   * 
   * *   general: a general policy.
   * 
   * This parameter is required.
   * 
   * @example
   * general
   */
  policyGroupType?: string;
  /**
   * @remarks
   * The service type.
   * 
   * Valid values:
   * 
   * *   app: cloud applications.
   * *   resourceGroup: resource groups.
   * *   desktop: cloud computers.
   * *   desktopGroup: cloud computer shares.
   * 
   * This parameter is required.
   * 
   * @example
   * desktop
   */
  productType?: string;
  /**
   * @remarks
   * The resource IDs. You can specify up to 100 resource IDs.
   * 
   * This parameter is required.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * Valid values:
   * 
   * *   app: cloud applications.
   * *   desktop: cloud computers.
   * 
   * This parameter is required.
   * 
   * @example
   * desktop
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      policyGroupIds: 'PolicyGroupIds',
      policyGroupType: 'PolicyGroupType',
      productType: 'ProductType',
      resourceIds: 'ResourceIds',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyGroupIds: { 'type': 'array', 'itemType': 'string' },
      policyGroupType: 'string',
      productType: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceRegionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyGroupIds)) {
      $dara.Model.validateArray(this.policyGroupIds);
    }
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

