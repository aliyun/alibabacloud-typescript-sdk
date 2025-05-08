// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSnatEntryRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable IP affinity. If you do not specify this parameter, IP affinity is enabled by default. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * >  After you enable IP affinity, if multiple EIPs are associated with an SNAT entry, one client uses the same EIP to for communication. If IP affinity is disabled, the client uses a random EIP for communication.
   * 
   * @example
   * false
   */
  eipAffinity?: boolean;
  /**
   * @remarks
   * The timeout period for idle connections. Valid values: **1** to **86400**. Unit: seconds.
   * 
   * @example
   * 15
   */
  idleTimeout?: number;
  /**
   * @remarks
   * Whether to enable operator affinity. Value taking:
   * 
   * - false:Do not open.
   * - true:Open.
   * 
   * @example
   * true
   */
  ispAffinity?: boolean;
  /**
   * @remarks
   * The ID of the Network Address Translation (NAT) gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * nat-5tawjw5j7sgd2deujxuk0****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The name of the SNAT entry. The name must be 1 to 128 characters in length. The name cannot start with `http://` or `https://`.
   * 
   * @example
   * test0
   */
  snatEntryName?: string;
  /**
   * @remarks
   * The elastic IP address (EIP) in the SNAT entry. Separate multiple EIPs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 120.XXX.XXX.71
   */
  snatIp?: string;
  /**
   * @remarks
   * The CIDR block. You can specify the CIDR block of a network, a vSwitch, or an instance. You can also specify a custom CIDR block. All instances within the CIDR block can access the Internet or external networks by using SNAT.
   * 
   * >  If you specify **SourceVSwitchId** and **SourceCIDR**, **SourceVSwitchId** does not take effect. The value that you specified for **SourceCIDR** takes precedence.
   * 
   * @example
   * 10.0.0.0/24
   */
  sourceCIDR?: string;
  /**
   * @remarks
   * The ID of the network. This parameter specifies that all ENS instances in the network can use the SNAT entry to access the Internet.
   * 
   * >  If you specify **SourceNetworkId** and **SourceVSwitchId** or **SourceCIDR**, **SourceNetworkId** does not take effect. The value that you specified for **SourceCIDR** takes precedence. Priority: **SourceCIDR** > **SourceVSwitchId** > **SourceNetworkId**.
   * 
   * @example
   * n-2zeuphj08tt7q3brd****
   */
  sourceNetworkId?: string;
  /**
   * @remarks
   * The ID of the vSwitch that you need to access over the Internet. This parameter specifies that Edge Node Service (ENS) instances in the vSwitch can use the SNAT entry to access the Internet.
   * 
   * >  If you specify **SourceVSwitchId** and **SourceCIDR**, **SourceVSwitchId** does not take effect. The value that you specified for **SourceCIDR** takes precedence.
   * 
   * @example
   * vsw-bp1hwx7gi495q260p****
   */
  sourceVSwitchId?: string;
  /**
   * @remarks
   * The secondary EIP in the SNAT entry. Separate multiple secondary EIPs with commas (,).
   * 
   * @example
   * 101.XXX.XXX.7
   */
  standbySnatIp?: string;
  static names(): { [key: string]: string } {
    return {
      eipAffinity: 'EipAffinity',
      idleTimeout: 'IdleTimeout',
      ispAffinity: 'IspAffinity',
      natGatewayId: 'NatGatewayId',
      snatEntryName: 'SnatEntryName',
      snatIp: 'SnatIp',
      sourceCIDR: 'SourceCIDR',
      sourceNetworkId: 'SourceNetworkId',
      sourceVSwitchId: 'SourceVSwitchId',
      standbySnatIp: 'StandbySnatIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAffinity: 'boolean',
      idleTimeout: 'number',
      ispAffinity: 'boolean',
      natGatewayId: 'string',
      snatEntryName: 'string',
      snatIp: 'string',
      sourceCIDR: 'string',
      sourceNetworkId: 'string',
      sourceVSwitchId: 'string',
      standbySnatIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

