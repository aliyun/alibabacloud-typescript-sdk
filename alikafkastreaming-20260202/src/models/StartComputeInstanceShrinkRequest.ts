// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartComputeInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_streaming-cn-pe333xxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the compute instance.
   * 
   * @example
   * streaming-prod
   */
  instanceName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of vSwitch IDs.
   * 
   * This parameter is required.
   */
  vSwitchIdsShrink?: string;
  /**
   * @remarks
   * The ID of the VPC where the instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1abcdefg
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
      vSwitchIdsShrink: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
      vSwitchIdsShrink: 'string',
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

