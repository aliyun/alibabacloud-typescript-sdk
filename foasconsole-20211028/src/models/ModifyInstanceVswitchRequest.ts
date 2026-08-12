// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceVswitchRequest extends $dara.Model {
  /**
   * @remarks
   * The vSwitch IDs in the secondary zone for zone-disaster recovery. This parameter is required if zone-disaster recovery is enabled for your workspace.
   */
  haVSwitchIds?: string[];
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
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      haVSwitchIds: 'HaVSwitchIds',
      instanceId: 'InstanceId',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haVSwitchIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.haVSwitchIds)) {
      $dara.Model.validateArray(this.haVSwitchIds);
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

