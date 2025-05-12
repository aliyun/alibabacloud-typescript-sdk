// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDesktopsPolicyGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud computer IDs. You can specify one or more cloud computers IDs. The value is a JSON array.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-ia2zw38bi6cm7****
   */
  desktopId?: string[];
  /**
   * @remarks
   * The ID of the cloud computer policy that you want to associate with cloud computers.
   * 
   * >  If the `PolicyGroupIds` parameter is used, ignore the current parameter.
   * 
   * @example
   * pg-gx2x1dhsmthe9****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The IDs of the cloud computer policies that you want to associate with cloud computers.
   * 
   * >  You can specify up to one cloud computer policy that takes effect globally, and up to four cloud computer policies that apply to specific IP addresses. If you specify more than one cloud computer policy that takes effect globally, only the policy first associate with the cloud computer can take effect.
   */
  policyGroupIds?: string[];
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
      desktopId: 'DesktopId',
      policyGroupId: 'PolicyGroupId',
      policyGroupIds: 'PolicyGroupIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      policyGroupId: 'string',
      policyGroupIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    if(Array.isArray(this.policyGroupIds)) {
      $dara.Model.validateArray(this.policyGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

