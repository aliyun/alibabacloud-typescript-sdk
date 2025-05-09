// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcFirewallControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic. Valid values:
   * 
   * - **accept**: allows the traffic.
   * - **drop**: blocks the traffic.
   * - **log**: monitors the traffic.
   * 
   * This parameter is required.
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The type of the applications that the access control policy supports. Valid values:
   * 
   * - **FTP**
   * - **HTTP**
   * - **HTTPS**
   * - **MySQL**
   * - **SMTP**
   * - **SMTPS**
   * - **RDP**
   * - **VNC**
   * - **SSH**
   * - **Redis**
   * - **MQTT**
   * - **MongoDB**
   * - **Memcache**
   * - **SSL**
   * - **ANY**: all types of applications
   * 
   * @example
   * HTTP
   * 
   * @deprecated
   */
  applicationName?: string;
  /**
   * @remarks
   * The application types supported by the access control policy.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * The description of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination port in the access control policy. 
   * 
   * >  If **DestPortType** is set to `port`, you must specify this parameter.
   * 
   * @example
   * 80
   */
  destPort?: string;
  /**
   * @remarks
   * The name of the destination port address book in the access control policy. 
   * 
   * >  If **DestPortType** is set to `group`, you must specify this parameter.
   * 
   * @example
   * my_port_group
   */
  destPortGroup?: string;
  /**
   * @remarks
   * The type of the destination port in the access control policy. Valid values:
   * 
   * - **port**: port
   * - **group**: port address book
   * 
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @remarks
   * The destination address in the access control policy. Valid values:
   * 
   * - If **DestinationType** is set to `net`, the value of **Destination** must be a CIDR block.
   * - If **DestinationType** is set to `group`, the value of **Destination** must be an address book.
   * - If **DestinationType** is set to `domain`, the value of **Destination** must be a domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.2.XX.XX/24
   */
  destination?: string;
  /**
   * @remarks
   * The type of the destination address in the access control policy. Valid values:
   * 
   * - **net**: CIDR block
   * - **group**: address book
   * - **domain**: domain name
   * 
   * This parameter is required.
   * 
   * @example
   * net
   */
  destinationType?: string;
  /**
   * @remarks
   * The domain name resolution method of the access control policy. Valid values:
   * 
   * * **FQDN**: fully qualified domain name (FQDN)-based resolution
   * * **DNS**: DNS-based dynamic resolution
   * * **FQDN_AND_DNS**: FQDN and DNS-based dynamic resolution
   * 
   * @example
   * DNS
   */
  domainResolveType?: string;
  /**
   * @remarks
   * The time when the access control policy stops taking effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the start time.
   * 
   * >  If you set RepeatType to Permanent, leave this parameter empty. If you set RepeatType to None, Daily, Weekly, or Monthly, you must specify this parameter.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * - **zh**: Chinese (default)
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The priority of the access control policy. 
   * 
   * The priority value starts from 1. A smaller priority value indicates a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  newOrder?: string;
  /**
   * @remarks
   * The type of the protocol in the access control policy. Valid values:
   * 
   * - **ANY** (If you are not sure about the protocol type, you can set this parameter to ANY.)
   * - **TCP**
   * - **UDP**
   * - **ICMP**
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * Specifies whether to enable the access control policy. By default, an access control policy is enabled after the policy is created. Valid values: 
   * 
   * - **true**: enables the access control policy.
   * - **false**: disables the access control policy.
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The days of a week or of a month on which the access control policy takes effect.
   * 
   * *   If you set RepeatType to `Permanent`, `None`, or `Daily`, leave this parameter empty. Example: [].
   * *   If you set RepeatType to Weekly, you must specify this parameter. Example: [0, 6].
   * 
   * >  If you set RepeatType to Weekly, the fields in the value of this parameter cannot be repeated.
   * 
   * *   If you set RepeatType to `Monthly`, you must specify this parameter. Example: [1, 31].
   * 
   * >  If you set RepeatType to Monthly, the fields in the value of this parameter cannot be repeated.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The point in time when the recurrence ends. Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the start time.
   * 
   * >  If you set RepeatType to Permanent or None, leave this parameter empty. If you set RepeatType to Daily, Weekly, or Monthly, you must specify this parameter.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The point in time when the recurrence starts. Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the end time.
   * 
   * >  If you set RepeatType to Permanent or None, leave this parameter empty. If you set RepeatType to Daily, Weekly, or Monthly, you must specify this parameter.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type for the access control policy to take effect. Valid values:
   * 
   * *   **Permanent** (default): The policy always takes effect.
   * *   **None**: The policy takes effect for only once.
   * *   **Daily**: The policy takes effect on a daily basis.
   * *   **Weekly**: The policy takes effect on a weekly basis.
   * *   **Monthly**: The policy takes effect on a monthly basis.
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy. 
   * 
   * - If SourceType is set to `net`, the value of Source must be a CIDR block.
   * - If SourceType is set to `group`, the value of Source must be an address book.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.2.XX.XX/24
   */
  source?: string;
  /**
   * @remarks
   * The type of the source address in the access control policy. Valid values:
   * 
   * - **net**: CIDR block
   * - **group**: address book
   * 
   * This parameter is required.
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The time when the access control policy starts to take effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the end time.
   * 
   * >  If you set RepeatType to Permanent, leave this parameter empty. If you set RepeatType to None, Daily, Weekly, or Monthly, you must specify this parameter.
   * 
   * @example
   * 1694761200
   */
  startTime?: number;
  /**
   * @remarks
   * The ID of the policy group in which you want to create the access control policy. 
   * 
   * - If a VPC firewall protects the traffic between two VPCs that are connected by using a CEN instance, the value of this parameter must be the ID of the CEN instance.
   * - If a VPC firewall protects the traffic between two VPCs that are connected by using an Express Connect circuit, the value of this parameter must be the instance ID of the VPC firewall.
   * 
   * >  You can call the [DescribeVpcFirewallAclGroupList](https://www.alibabacloud.com/help/en/cloud-firewall/latest/describevpcfirewallaclgrouplist) operation to query the IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-a42bbb7b887148c9****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      applicationName: 'ApplicationName',
      applicationNameList: 'ApplicationNameList',
      description: 'Description',
      destPort: 'DestPort',
      destPortGroup: 'DestPortGroup',
      destPortType: 'DestPortType',
      destination: 'Destination',
      destinationType: 'DestinationType',
      domainResolveType: 'DomainResolveType',
      endTime: 'EndTime',
      lang: 'Lang',
      memberUid: 'MemberUid',
      newOrder: 'NewOrder',
      proto: 'Proto',
      release: 'Release',
      repeatDays: 'RepeatDays',
      repeatEndTime: 'RepeatEndTime',
      repeatStartTime: 'RepeatStartTime',
      repeatType: 'RepeatType',
      source: 'Source',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      applicationName: 'string',
      applicationNameList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      destPort: 'string',
      destPortGroup: 'string',
      destPortType: 'string',
      destination: 'string',
      destinationType: 'string',
      domainResolveType: 'string',
      endTime: 'number',
      lang: 'string',
      memberUid: 'string',
      newOrder: 'string',
      proto: 'string',
      release: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'number' },
      repeatEndTime: 'string',
      repeatStartTime: 'string',
      repeatType: 'string',
      source: 'string',
      sourceType: 'string',
      startTime: 'number',
      vpcFirewallId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationNameList)) {
      $dara.Model.validateArray(this.applicationNameList);
    }
    if(Array.isArray(this.repeatDays)) {
      $dara.Model.validateArray(this.repeatDays);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

