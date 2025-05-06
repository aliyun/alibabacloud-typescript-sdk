// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceVswitchShrinkRequest extends $dara.Model {
  haVSwitchIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sc_flinkserverless_public_cn-7e22ae****
   */
  instanceId?: string;
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

