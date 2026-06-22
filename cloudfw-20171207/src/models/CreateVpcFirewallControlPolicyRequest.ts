// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcFirewallControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic in the virtual private cloud (VPC) firewall access control policy. Valid values:
   * 
   * - **accept**: allows the traffic.
   * - **drop**: denies the traffic.
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
   * The application type supported by the virtual private cloud (VPC) firewall access control policy. Valid values:
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
   * - **ANY**: all application types.
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
   * The description of the virtual private cloud (VPC) firewall access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination port of traffic in the virtual private cloud (VPC) firewall access control policy.
   * 
   * > Set this parameter when **DestPortType** is set to `port`.
   * 
   * @example
   * 80
   */
  destPort?: string;
  /**
   * @remarks
   * The name of the destination port address book of traffic in the virtual private cloud (VPC) firewall access control policy.
   * 
   * > Set this parameter when **DestPortType** is set to `group`.
   * 
   * @example
   * my_port_group
   */
  destPortGroup?: string;
  /**
   * @remarks
   * The type of the destination port of traffic in the virtual private cloud (VPC) firewall access control policy. Valid values:
   * 
   * - **port**: port
   * - **group**: port address book.
   * 
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @remarks
   * The destination address of traffic in the virtual private cloud (VPC) firewall access control policy. Valid values:
   * 
   * - If **DestinationType** is set to `net`, the value of **Destination** is a destination CIDR block.
   * 
   * - If **DestinationType** is set to `group`, the value of **Destination** is a destination address book name.
   * 
   * - If **DestinationType** is set to `domain`, the value of **Destination** is a destination domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.2.XX.XX/24
   */
  destination?: string;
  /**
   * @remarks
   * The type of the destination address in the virtual private cloud (VPC) firewall access control policy. Valid values:
   * 
   * - **net**: destination CIDR block
   * - **group**: destination address book
   * - **domain**: destination domain name.
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
   * * **FQDN**: FQDN-based resolution
   * * **DNS**: DNS-based dynamic resolution
   * * **FQDN_AND_DNS**: FQDN-based and DNS-based dynamic resolution.
   * 
   * @example
   * FQDN
   */
  domainResolveType?: string;
  /**
   * @remarks
   * The end time of the policy validity period for the access control policy. The value is a UNIX timestamp in seconds. The value must be on the hour or on the half hour and must be at least 30 minutes later than the start time.
   * > If RepeatType is set to Permanent, EndTime is empty. If RepeatType is set to None, Daily, Weekly, or Monthly, EndTime must be specified.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh** (default): Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of a member account of the current Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The priority of the virtual private cloud (VPC) firewall access control policy.
   * 
   * The priority value starts from 1 and increases by increment. A smaller value indicates a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  newOrder?: string;
  /**
   * @remarks
   * The security protocol type of traffic in the virtual private cloud (VPC) firewall access control policy. Valid values:
   * 
   * - **ANY**: any protocol type. Set this value if the protocol type is uncertain.
   * - **TCP**
   * - **UDP**
   * - **ICMP**.
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * Specifies whether to enable the access control policy. The policy is enabled by default after it is created. Valid values:
   * 
   * - **true**: enables the access control policy.
   * - **false**: does not enable the access control policy.
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The days of the recurrence for the policy validity period of the access control policy.
   * - If RepeatType is set to `Permanent`, `None`, or `Daily`, RepeatDays is an empty collection.
   *   Example: []
   * - If RepeatType is set to Weekly, RepeatDays cannot be empty.
   *   Example: [0, 6]
   * > If RepeatType is set to Weekly, the values in RepeatDays cannot be repeated.
   * - If RepeatType is set to `Monthly`, RepeatDays cannot be empty.
   *   Example: [1, 31]
   * > If RepeatType is set to Monthly, the values in RepeatDays cannot be repeated.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The recurrence end time of the policy validity period for the access control policy. Example: 23:30. The value must be on the hour or on the half hour and must be at least 30 minutes later than the recurrence start time.
   * > If RepeatType is set to Permanent or None, RepeatEndTime is empty. If RepeatType is set to Daily, Weekly, or Monthly, RepeatEndTime must be specified. The format is HH:MM (24-hour clock), such as 08:00.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The recurrence start time of the policy validity period for the access control policy. Example: 08:00. The value must be on the hour or on the half hour and must be at least 30 minutes earlier than the recurrence end time.
   * > If RepeatType is set to Permanent or None, RepeatStartTime is empty. If RepeatType is set to Daily, Weekly, or Monthly, RepeatStartTime must be specified. The format is HH:MM (24-hour clock), such as 08:00.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type of the policy validity period for the access control policy. Valid values:
   * - **Permanent** (default): The policy is always valid.
   * - **None**: The policy is valid for a specified single time period.
   * - **Daily**: The policy is valid on a daily basis.
   * - **Weekly**: The policy is valid on a weekly basis.
   * - **Monthly**: The policy is valid on a monthly basis.
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the virtual private cloud (VPC) firewall access control policy.
   * 
   * - If SourceType is set to `net`, the value of Source is a source CIDR block.
   * - If SourceType is set to `group`, the value of Source is a source address book name.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.2.XX.XX/24
   */
  source?: string;
  /**
   * @remarks
   * The type of the source address in the virtual private cloud (VPC) firewall access control policy. Valid values:
   * 
   * - **net**: source CIDR block
   * 
   * - **group**: source address book.
   * 
   * This parameter is required.
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The start time of the policy validity period for the access control policy. The value is a UNIX timestamp in seconds. The value must be on the hour or on the half hour and must be at least 30 minutes earlier than the end time.
   * > If RepeatType is set to Permanent, StartTime is empty. If RepeatType is set to None, Daily, Weekly, or Monthly, StartTime must be specified.
   * 
   * @example
   * 1694761200
   */
  startTime?: number;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) firewall access control policy group.
   * - If the VPC firewall protects traffic between two VPCs connected through CEN, the value of this parameter is the CEN instance ID.
   *   
   * - If the VPC firewall protects traffic between two VPCs connected through Express Connect, the value of this parameter is the VPC firewall instance ID.
   * 
   * > You can invoke the [DescribeVpcFirewallAclGroupList](https://help.aliyun.com/document_detail/159760.html) operation to obtain the ID.
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

