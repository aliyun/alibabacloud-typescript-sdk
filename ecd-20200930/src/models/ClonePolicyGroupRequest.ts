// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClonePolicyGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the cloud computer policy that you want to create.
   * 
   * This parameter is required.
   * 
   * @example
   * testPolicyGroupName
   */
  name?: string;
  /**
   * @remarks
   * The ID of the destination cloud computer policy that you want to clone.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-gx2x1dhsmthe9****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the regions supported by Elastic Desktop Service (EDS).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      policyGroupId: 'PolicyGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      policyGroupId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

