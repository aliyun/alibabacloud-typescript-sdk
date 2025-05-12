// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCenterPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The business type.
   * 
   * Valid values:
   * 
   * *   1: public cloud.
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
   * The policy IDs.
   * 
   * This parameter is required.
   */
  policyGroupIds?: string[];
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
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
      policyGroupIds: 'PolicyGroupIds',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'number',
      policyGroupIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyGroupIds)) {
      $dara.Model.validateArray(this.policyGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

