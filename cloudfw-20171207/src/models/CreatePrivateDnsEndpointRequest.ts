// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrivateDnsEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the private instance.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  accessInstanceName?: string;
  /**
   * @remarks
   * The type of cloud firewall. Valid values:
   * - **internet**
   * - **vpc**
   * - **nat**
   * 
   * This parameter is required.
   */
  firewallType?: string[];
  /**
   * @remarks
   * The IP protocol. Valid values:
   * - **TCP**
   * - **UDP**
   * 
   * @example
   * UDP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud member account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: number;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The primary DNS.
   * 
   * @example
   * 1.1.1.1
   */
  primaryDns?: string;
  /**
   * @remarks
   * The ID of the primary vSwitch.
   * 
   * @example
   * vsw-uf6b0dkyryer8******
   */
  primaryVSwitchId?: string;
  /**
   * @remarks
   * The IP address of the primary vSwitch.
   * 
   * @example
   * 10.1.1.1
   */
  primaryVSwitchIp?: string;
  /**
   * @remarks
   * The type of private DNS. Valid values:
   * - **PrivateZone**
   * - **Custom** (default)
   * 
   * This parameter is required.
   * 
   * @example
   * Custom
   */
  privateDnsType?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The standby DNS.
   * 
   * @example
   * 1.1.1.2
   */
  standbyDns?: string;
  /**
   * @remarks
   * The ID of the standby vSwitch.
   * 
   * @example
   * vsw-8vb6jk75wfcwn******
   */
  standbyVSwitchId?: string;
  /**
   * @remarks
   * The IP address of the standby vSwitch.
   * 
   * @example
   * 10.2.2.2
   */
  standbyVSwitchIp?: string;
  /**
   * @remarks
   * The VPC instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-uf6b5lyul0x******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessInstanceName: 'AccessInstanceName',
      firewallType: 'FirewallType',
      ipProtocol: 'IpProtocol',
      memberUid: 'MemberUid',
      port: 'Port',
      primaryDns: 'PrimaryDns',
      primaryVSwitchId: 'PrimaryVSwitchId',
      primaryVSwitchIp: 'PrimaryVSwitchIp',
      privateDnsType: 'PrivateDnsType',
      regionNo: 'RegionNo',
      standbyDns: 'StandbyDns',
      standbyVSwitchId: 'StandbyVSwitchId',
      standbyVSwitchIp: 'StandbyVSwitchIp',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessInstanceName: 'string',
      firewallType: { 'type': 'array', 'itemType': 'string' },
      ipProtocol: 'string',
      memberUid: 'number',
      port: 'number',
      primaryDns: 'string',
      primaryVSwitchId: 'string',
      primaryVSwitchIp: 'string',
      privateDnsType: 'string',
      regionNo: 'string',
      standbyDns: 'string',
      standbyVSwitchId: 'string',
      standbyVSwitchIp: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.firewallType)) {
      $dara.Model.validateArray(this.firewallType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

