// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneCenterPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The business type.
   * 
   * Valid values:
   * 
   * *   1: public cloud
   * *   8: commercial edition.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  businessType?: number;
  /**
   * @remarks
   * The name of the cloud computer policy that you want to clone.
   * 
   * This parameter is required.
   * 
   * @example
   * testPolicyGroupName
   */
  name?: string;
  /**
   * @remarks
   * The ID of the cloud computer policy that you want to clone.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-gx2x1dhsmthe9****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-shanghai.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
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
      businessType: 'BusinessType',
      name: 'Name',
      policyGroupId: 'PolicyGroupId',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'number',
      name: 'string',
      policyGroupId: 'string',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

