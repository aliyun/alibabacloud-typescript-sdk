// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigClusterSubnetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster. You can call the ListCluster operation to obtain cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster-BqxX63Bsg****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * A list of vSwitches that are associated with the cluster. Note: You must include all vSwitches that you want to associate with the cluster.
   * 
   * This parameter is required.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-7xvkh90cw39p0****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

