// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrivateDnsEndpointDetailResponseBody extends $dara.Model {
  /**
   * @example
   * pd-12345
   */
  accessInstanceId?: string;
  accessInstanceName?: string;
  /**
   * @example
   * 119898001566xxxx
   */
  aliUid?: number;
  /**
   * @example
   * ep-1nmi412c28c374****
   */
  endpointId?: string;
  firewallType?: string[];
  /**
   * @example
   * 1715075765
   */
  gmtCreate?: number;
  /**
   * @example
   * tcp
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
   * vsw-8vbno9zxz8j9qiot****
   */
  primaryVSwitchId?: string;
  /**
   * @example
   * 10.1.1.1
   */
  primaryVSwitchIp?: string;
  /**
   * @example
   * cn-shenzhen-d
   */
  primaryZoneId?: string;
  /**
   * @example
   * Custom
   */
  privateDnsType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @example
   * 4E7F94C7-781F-5192-86CF-DB0850****
   */
  requestId?: string;
  /**
   * @example
   * 1.1.1.2
   */
  standbyDns?: string;
  /**
   * @example
   * vsw-8vb6jk75wfcwnuq****
   */
  standbyVSwitchId?: string;
  /**
   * @example
   * 10.1.1.2
   */
  standbyVSwitchIp?: string;
  /**
   * @example
   * cn-shenzhen-e
   */
  standbyZoneId?: string;
  /**
   * @example
   * normal
   */
  status?: string;
  /**
   * @example
   * 132
   */
  taskId?: string;
  /**
   * @example
   * vpc-uf6b5lyul0x******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessInstanceId: 'AccessInstanceId',
      accessInstanceName: 'AccessInstanceName',
      aliUid: 'AliUid',
      endpointId: 'EndpointId',
      firewallType: 'FirewallType',
      gmtCreate: 'GmtCreate',
      ipProtocol: 'IpProtocol',
      memberUid: 'MemberUid',
      port: 'Port',
      primaryDns: 'PrimaryDns',
      primaryVSwitchId: 'PrimaryVSwitchId',
      primaryVSwitchIp: 'PrimaryVSwitchIp',
      primaryZoneId: 'PrimaryZoneId',
      privateDnsType: 'PrivateDnsType',
      regionNo: 'RegionNo',
      requestId: 'RequestId',
      standbyDns: 'StandbyDns',
      standbyVSwitchId: 'StandbyVSwitchId',
      standbyVSwitchIp: 'StandbyVSwitchIp',
      standbyZoneId: 'StandbyZoneId',
      status: 'Status',
      taskId: 'TaskId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessInstanceId: 'string',
      accessInstanceName: 'string',
      aliUid: 'number',
      endpointId: 'string',
      firewallType: { 'type': 'array', 'itemType': 'string' },
      gmtCreate: 'number',
      ipProtocol: 'string',
      memberUid: 'number',
      port: 'number',
      primaryDns: 'string',
      primaryVSwitchId: 'string',
      primaryVSwitchIp: 'string',
      primaryZoneId: 'string',
      privateDnsType: 'string',
      regionNo: 'string',
      requestId: 'string',
      standbyDns: 'string',
      standbyVSwitchId: 'string',
      standbyVSwitchIp: 'string',
      standbyZoneId: 'string',
      status: 'string',
      taskId: 'string',
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

