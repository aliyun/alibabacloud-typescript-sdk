// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrivateDnsEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  accessInstanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  firewallType?: string[];
  /**
   * @example
   * UDP
   */
  ipProtocol?: string;
  /**
   * @example
   * 258039427902****
   */
  memberUid?: number;
  /**
   * @example
   * 80
   */
  port?: number;
  /**
   * @example
   * 1.1.1.1
   */
  primaryDns?: string;
  /**
   * @example
   * vsw-uf6b0dkyryer8******
   */
  primaryVSwitchId?: string;
  /**
   * @example
   * 10.1.1.1
   */
  primaryVSwitchIp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Custom
   */
  privateDnsType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @example
   * 1.1.1.2
   */
  standbyDns?: string;
  /**
   * @example
   * vsw-8vb6jk75wfcwn******
   */
  standbyVSwitchId?: string;
  /**
   * @example
   * 10.2.2.2
   */
  standbyVSwitchIp?: string;
  /**
   * @remarks
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

