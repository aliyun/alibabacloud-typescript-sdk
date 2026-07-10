// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExtendClusterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * i15b480fbd2fcdbc2869cd80
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to skip failed nodes. Default value: False.
   * 
   * @example
   * False
   */
  ignoreFailedNodeTasks?: boolean;
  /**
   * @remarks
   * The combined IP allocation policy. Each policy can use only one policy type, and multiple policies can be combined.
   */
  ipAllocationPolicyShrink?: string;
  /**
   * @remarks
   * The node groups.
   */
  nodeGroupsShrink?: string;
  /**
   * @remarks
   * The zone ID of the vSwitch.
   * 
   * @example
   * cn-shanghai-b
   */
  vSwitchZoneId?: string;
  /**
   * @remarks
   * The list of cluster subnets.
   */
  vpdSubnetsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      ipAllocationPolicyShrink: 'IpAllocationPolicy',
      nodeGroupsShrink: 'NodeGroups',
      vSwitchZoneId: 'VSwitchZoneId',
      vpdSubnetsShrink: 'VpdSubnets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ignoreFailedNodeTasks: 'boolean',
      ipAllocationPolicyShrink: 'string',
      nodeGroupsShrink: 'string',
      vSwitchZoneId: 'string',
      vpdSubnetsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

