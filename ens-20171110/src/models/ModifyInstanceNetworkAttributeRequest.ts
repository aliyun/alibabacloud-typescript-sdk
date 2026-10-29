// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceNetworkAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ENS instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-5myukg7hnpbto7m024002****
   */
  instanceId?: string;
  /**
   * @remarks
   * The new private IP address.
   * Default value: If this parameter is not specified, an IP address is randomly assigned from the CIDR block of the vSwitch.
   * 
   * @example
   * 192.168.XX.XX
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * - If the specified ID is the current vSwitch of the instance, the vSwitch of the instance remains unchanged.
   * - If the specified ID is a new vSwitch, the new and old vSwitches must belong to the same edge zone.
   * - If this parameter is not specified, a value is randomly assigned from the CIDR block of the original vSwitch.
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

