// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceNetworkAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ENS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * i-5myukg7hnpbto7m024002****
   */
  instanceId?: string;
  /**
   * @remarks
   * The new private IP address of the ECS instance. By default, if this parameter is empty, a private IP address is randomly assigned from the CIDR block of the specified vSwitch.
   * 
   * @example
   * 192.168.XX.XX
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The vSwitch IDs.
   * 
   * *   If you set this parameter to the ID of the current vSwitch, the vSwitch of the ECS instance remains unchanged.
   * *   The input ID is a new vSwitch, and the new and old vSwitches must belong to the same node.
   * *   By default, if this parameter is not specified, a private IP address is randomly assigned from within the CIDR block of the specified vSwitch.
   * 
   * @example
   * vsw-5rllcjb3ol6duzjdnbm1o****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      privateIpAddress: 'PrivateIpAddress',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      privateIpAddress: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

