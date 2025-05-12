// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolicyGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud computer policy IDs. You can specify 1 to 100 policies.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-gx2x1dhsmthe9****
   */
  policyGroupId?: string[];
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the regions supported by EDS.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      policyGroupId: 'PolicyGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyGroupId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyGroupId)) {
      $dara.Model.validateArray(this.policyGroupId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

