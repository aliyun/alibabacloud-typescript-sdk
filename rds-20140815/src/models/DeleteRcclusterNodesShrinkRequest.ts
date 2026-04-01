// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRCClusterNodesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The instance IDs.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The node information.
   */
  nodesShrink?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * >  This is a reserved parameter.
   * 
   * @example
   * None
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIdsShrink: 'InstanceIds',
      nodesShrink: 'Nodes',
      regionId: 'RegionId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdsShrink: 'string',
      nodesShrink: 'string',
      regionId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

