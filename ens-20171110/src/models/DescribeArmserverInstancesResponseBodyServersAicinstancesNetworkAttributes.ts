// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeARMServerInstancesResponseBodyServersAICInstancesNetworkAttributes extends $dara.Model {
  /**
   * @remarks
   * The IP address of the AIC instance.
   * 
   * @example
   * 192.168.XX.XX
   */
  ipAddress?: string;
  /**
   * @remarks
   * The network ID of the AIC instance.
   * 
   * @example
   * n-*****
   */
  networkId?: string;
  /**
   * @remarks
   * The vSwitch ID of the AIC instance.
   * 
   * @example
   * vsw-****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
      networkId: 'NetworkId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: 'string',
      networkId: 'string',
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

