// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceVswitchShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The vSwitch IDs in the secondary zone for zone-disaster recovery. This parameter is required if zone-disaster recovery is enabled for your workspace.
   */
  haVSwitchIdsShrink?: string;
  /**
   * @remarks
   * The order instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sc_flinkserverless_public_cn-7e22ae****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IDs of the vSwitches to use after the modification.
   */
  vSwitchIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      haVSwitchIdsShrink: 'HaVSwitchIds',
      instanceId: 'InstanceId',
      vSwitchIdsShrink: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haVSwitchIdsShrink: 'string',
      instanceId: 'string',
      vSwitchIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

