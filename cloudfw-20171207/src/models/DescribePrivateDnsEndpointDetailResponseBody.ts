// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrivateDnsEndpointDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pd-12345
   */
  accessInstanceId?: string;
  /**
   * @remarks
   * The name of the access instance.
   * 
   * @example
   * test
   */
  accessInstanceName?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account.
   * 
   * @example
   * 119898001566xxxx
   */
  aliUid?: number;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * ep-1nmi412c28c374****
   */
  endpointId?: string;
  /**
   * @remarks
   * The type of the Cloud Firewall. Valid values:
   * 
   * - **internet**
   * 
   * - **vpc**
   * 
   * - **nat**
   */
  firewallType?: string[];
  /**
   * @remarks
   * The time when the endpoint was created. This is a UNIX timestamp in seconds.
   * 
   * @example
   * 1715075765
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The IP protocol. Valid values:
   * 
   * - **TCP**
   * 
   * - **UDP**
   * 
   * @example
   * tcp
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The UID of the member account.
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
   * The primary DNS server.
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
   * vsw-8vbno9zxz8j9qiot****
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
   * The zone of the primary vSwitch.
   * 
   * @example
   * cn-shenzhen-d
   */
  primaryZoneId?: string;
  /**
   * @remarks
   * The type of the private DNS. Valid values:
   * 
   * - **PrivateZone**
   * 
   * - **Custom** (Default)
   * 
   * @example
   * Custom
   */
  privateDnsType?: string;
  /**
   * @remarks
   * The ID of the region where the instance is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4E7F94C7-781F-5192-86CF-DB0850****
   */
  requestId?: string;
  /**
   * @remarks
   * The standby DNS server.
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
   * vsw-8vb6jk75wfcwnuq****
   */
  standbyVSwitchId?: string;
  /**
   * @remarks
   * The IP address of the standby vSwitch.
   * 
   * @example
   * 10.1.1.2
   */
  standbyVSwitchIp?: string;
  /**
   * @remarks
   * The zone of the standby vSwitch.
   * 
   * @example
   * cn-shenzhen-e
   */
  standbyZoneId?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * - **creating**: Creating.
   * 
   * - **deleting**: Deleting.
   * 
   * - **normal**: Normal.
   * 
   * - **updating**: Updating.
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 132
   */
  taskId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
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

