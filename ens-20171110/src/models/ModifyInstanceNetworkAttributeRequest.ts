// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceNetworkAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-5myukg7hnpbto7m024002****
   */
  instanceId?: string;
  /**
   * @example
   * 192.168.XX.XX
   */
  privateIpAddress?: string;
  /**
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

