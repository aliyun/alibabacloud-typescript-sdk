// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignPrivateIpAddressesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ENI.
   * 
   * This parameter is required.
   * 
   * @example
   * eni-uf6533jbifugr5fo2j1w
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-5rllcjb3ol6duzjdnbm1ombn7
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      networkInterfaceId: 'NetworkInterfaceId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceId: 'string',
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

