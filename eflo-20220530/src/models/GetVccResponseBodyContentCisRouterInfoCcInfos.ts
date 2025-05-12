// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVccResponseBodyContentCisRouterInfoCcInfos extends $dara.Model {
  /**
   * @remarks
   * Leased Line ID
   * 
   * @example
   * cc-73aeex5o
   */
  ccId?: string;
  /**
   * @remarks
   * Lingjun Side Interconnection IPv4 Address
   * 
   * @example
   * 169.254.248.26
   */
  localGatewayIp?: string;
  /**
   * @remarks
   * Lingjun Side Interconnection IPv4 Address
   * 
   * @example
   * 169.254.248.30
   */
  remoteGatewayIp?: string;
  /**
   * @remarks
   * The state of the rule.
   * 
   * @example
   * Established
   */
  status?: string;
  /**
   * @remarks
   * Subnet mask
   * 
   * @example
   * 255.255.255.248
   */
  subnetMask?: string;
  /**
   * @remarks
   * Vlan ID of the leased line
   * 
   * @example
   * Ethernet1042
   */
  vlanId?: string;
  static names(): { [key: string]: string } {
    return {
      ccId: 'CcId',
      localGatewayIp: 'LocalGatewayIp',
      remoteGatewayIp: 'RemoteGatewayIp',
      status: 'Status',
      subnetMask: 'SubnetMask',
      vlanId: 'VlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccId: 'string',
      localGatewayIp: 'string',
      remoteGatewayIp: 'string',
      status: 'string',
      subnetMask: 'string',
      vlanId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

