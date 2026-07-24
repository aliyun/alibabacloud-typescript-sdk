// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartComputeInstanceShrinkRequest extends $dara.Model {
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  instanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  selectedZones?: string;
  serviceVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  vSwitchIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
      selectedZones: 'SelectedZones',
      serviceVersion: 'ServiceVersion',
      vSwitchIdsShrink: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
      selectedZones: 'string',
      serviceVersion: 'string',
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

