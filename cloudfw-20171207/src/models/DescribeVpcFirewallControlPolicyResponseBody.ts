// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallControlPolicyResponseBodyPolicys extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic in the access control policy of the virtual private cloud (VPC) firewalls. Valid values:
   * 
   * - **accept**: allows the traffic.
   * - **drop**: denies the traffic.
   * - **log**: monitors the traffic.
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The unique identifier of the access control policy of the virtual private cloud (VPC) firewalls.
   * 
   * @example
   * 4037fbf7-3e39-4634-92a4-d0155247****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The ID of the application configured for the traffic in the access control policy of the virtual private cloud (VPC) firewalls.
   * 
   * @example
   * 10**
   */
  applicationId?: string;
  /**
   * @remarks
   * The application type supported by the access control policy of the virtual private cloud (VPC) firewalls. Use ApplicationNameList instead. Valid values:
   * 
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
   * - **ANY**: all application types supported by the access control policy.
   * 
   * @example
   * HTTP
   */
  applicationName?: string;
  /**
   * @remarks
   * The list of application names.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * The time when the policy was created. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1761062400
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the access control policy of the virtual private cloud (VPC) firewalls.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination port for the traffic in the access control policy of the virtual private cloud (VPC) firewalls.
   * 
   * @example
   * 80
   */
  destPort?: string;
  /**
   * @remarks
   * The name of the destination port address book for the traffic in the access control policy of the virtual private cloud (VPC) firewalls.
   * 
   * @example
   * my_port_group
   */
  destPortGroup?: string;
  /**
   * @remarks
   * The details of the destination port address book in the access control policy of the virtual private cloud (VPC) firewalls.
   */
  destPortGroupPorts?: string[];
  /**
   * @remarks
   * The type of the destination port for the traffic in the access control policy of the virtual private cloud (VPC) firewalls. Valid values:
   * - **port**: a single port.
   * - **group**: a port address book.
   * 
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @remarks
   * The destination address in the access control policy of the virtual private cloud (VPC) firewalls. Valid values:
   * 
   * - If **DestinationType** is `net`, Destination is the destination CIDR block.
   * 
   * - If **DestinationType** is `domain`, Destination is the destination domain name.
   * 
   * - If **DestinationType** is `group`, Destination is the name of the destination address book.
   * 
   * @example
   * 192.0.XX.XX/24
   */
  destination?: string;
  /**
   * @remarks
   * The CIDR block information in the destination address book of the access control policy of the virtual private cloud (VPC) firewalls.
   */
  destinationGroupCidrs?: string[];
  /**
   * @remarks
   * The type of the destination address book in the access control policy. Valid values:
   * 
   * - **ip**: an IP address book that contains one or more CIDR blocks.
   * - **domain**: a domain name address book that contains one or more domain names.
   * 
   * @example
   * ip
   */
  destinationGroupType?: string;
  /**
   * @remarks
   * The type of the destination address in the access control policy of the virtual private cloud (VPC) firewalls. Valid values:
   * 
   * - **net**: destination CIDR block.
   * - **group**: destination address book.
   * - **domain**: destination domain name.
   * 
   * @example
   * net
   */
  destinationType?: string;
  /**
   * @remarks
   * The domain name resolution method of the access control policy. Valid values:
   * 
   * * **FQDN**: FQDN-based resolution.
   * * **DNS**: DNS-based dynamic resolution.
   * * **FQDN_AND_DNS**: FQDN and DNS-based dynamic resolution.
   * 
   * @example
   * FQDN
   */
  domainResolveType?: string;
  /**
   * @remarks
   * The end time of the policy validity period for the access control policy. The value is a UNIX timestamp in seconds. The time must be on the hour or half-hour, and it must be at least 30 minutes later than the start time.
   * > If RepeatType is `Permanent`, EndTime is empty. If RepeatType is `None`, `Daily`, `Weekly`, or `Monthly`, EndTime must be specified.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The latest hit timestamp. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1579261141
   */
  hitLastTime?: number;
  /**
   * @remarks
   * The number of hits of the access control policy of the virtual private cloud (VPC) firewalls.
   * 
   * @example
   * 100
   */
  hitTimes?: number;
  /**
   * @remarks
   * The UID of the member account of the current Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The time when the policy was modified. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1761062400
   */
  modifyTime?: number;
  /**
   * @remarks
   * The priority of the access control policy of the virtual private cloud (VPC) firewalls.
   * 
   * The priority value starts from 1 and increments sequentially. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The protocol type of the traffic in the access control policy of the virtual private cloud (VPC) firewalls. Valid values:
   * 
   * - **TCP**
   * - **UDP**
   * - **ICMP**
   * - **ANY**: all protocol types.
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * The enabling status of the access control policy. By default, a policy is enabled after it is created. Valid values:
   * 
   * - **true**: The access control policy is enabled.
   * - **false**: The access control policy is disabled.
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The set of recurrence days for the policy validity period of the access control policy.
   * - If RepeatType is `Permanent`, `None`, or `Daily`, RepeatDays is an empty set.
   *   Example: []
   * - If RepeatType is `Weekly`, RepeatDays cannot be empty.
   *   Example: [0, 6]
   * > When RepeatType is `Weekly`, the values in RepeatDays must be unique.
   * - If RepeatType is `Monthly`, RepeatDays cannot be empty.
   *   Example: [1, 31]
   * > When RepeatType is `Monthly`, the values in RepeatDays must be unique.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The recurrence end time when the policy takes effect. The time is in the 24-hour HH:mm format, such as 23:00.
   * > If RepeatType is `Permanent` or `None`, RepeatEndTime is empty. If RepeatType is `Daily`, `Weekly`, or `Monthly`, RepeatEndTime must be specified.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The recurrence start time when the policy takes effect. The time is in the 24-hour HH:mm format, such as 08:00.
   * > If RepeatType is `Permanent` or `None`, RepeatStartTime is empty. If RepeatType is `Daily`, `Weekly`, or `Monthly`, RepeatStartTime must be specified.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type of the policy validity period for the access control policy. Valid values:
   * - **Permanent** (default): always.
   * - **None**: a specific single time.
   * - **Daily**: every day.
   * - **Weekly**: every week.
   * - **Monthly**: every month.
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy of the virtual private cloud (VPC) firewalls. Valid values:
   * 
   * - If **SourceType** is `net`, Source is the source CIDR block.
   * 
   * - If **SourceType** is `group`, Source is the name of the address book.
   * 
   * @example
   * 192.0.XX.XX/24
   */
  source?: string;
  /**
   * @remarks
   * The details of the source address book in the access control policy of the virtual private cloud (VPC) firewalls.
   */
  sourceGroupCidrs?: string[];
  /**
   * @remarks
   * The type of the source address book in the access control policy. Valid value: **ip**, which indicates an IP address book that contains one or more CIDR blocks.
   * 
   * @example
   * ip
   */
  sourceGroupType?: string;
  /**
   * @remarks
   * The type of the source address in the access control policy of the virtual private cloud (VPC) firewalls. Valid values:
   * 
   * - **net**: source CIDR block.
   * - **group**: source address book.
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The number of access control policy quotas consumed. This value is the sum of the quotas consumed by each policy.
   * The number of quotas consumed by a single policy = Number of source CIDR blocks × Number of destination addresses (CIDR blocks or domain names) × Number of applications × Number of port ranges.
   * 
   * @example
   * 10000
   */
  spreadCnt?: number;
  /**
   * @remarks
   * The start time of the policy validity period for the access control policy. The value is a UNIX timestamp in seconds. The time must be on the hour or half-hour, and it must be at least 30 minutes earlier than the end time.
   * > If RepeatType is `Permanent`, StartTime is empty. If RepeatType is `None`, `Daily`, `Weekly`, or `Monthly`, StartTime must be specified.
   * 
   * @example
   * 1694761200
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
      applicationNameList: 'ApplicationNameList',
      createTime: 'CreateTime',
      description: 'Description',
      destPort: 'DestPort',
      destPortGroup: 'DestPortGroup',
      destPortGroupPorts: 'DestPortGroupPorts',
      destPortType: 'DestPortType',
      destination: 'Destination',
      destinationGroupCidrs: 'DestinationGroupCidrs',
      destinationGroupType: 'DestinationGroupType',
      destinationType: 'DestinationType',
      domainResolveType: 'DomainResolveType',
      endTime: 'EndTime',
      hitLastTime: 'HitLastTime',
      hitTimes: 'HitTimes',
      memberUid: 'MemberUid',
      modifyTime: 'ModifyTime',
      order: 'Order',
      proto: 'Proto',
      release: 'Release',
      repeatDays: 'RepeatDays',
      repeatEndTime: 'RepeatEndTime',
      repeatStartTime: 'RepeatStartTime',
      repeatType: 'RepeatType',
      source: 'Source',
      sourceGroupCidrs: 'SourceGroupCidrs',
      sourceGroupType: 'SourceGroupType',
      sourceType: 'SourceType',
      spreadCnt: 'SpreadCnt',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      aclUuid: 'string',
      applicationId: 'string',
      applicationName: 'string',
      applicationNameList: { 'type': 'array', 'itemType': 'string' },
      createTime: 'number',
      description: 'string',
      destPort: 'string',
      destPortGroup: 'string',
      destPortGroupPorts: { 'type': 'array', 'itemType': 'string' },
      destPortType: 'string',
      destination: 'string',
      destinationGroupCidrs: { 'type': 'array', 'itemType': 'string' },
      destinationGroupType: 'string',
      destinationType: 'string',
      domainResolveType: 'string',
      endTime: 'number',
      hitLastTime: 'number',
      hitTimes: 'number',
      memberUid: 'string',
      modifyTime: 'number',
      order: 'number',
      proto: 'string',
      release: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'number' },
      repeatEndTime: 'string',
      repeatStartTime: 'string',
      repeatType: 'string',
      source: 'string',
      sourceGroupCidrs: { 'type': 'array', 'itemType': 'string' },
      sourceGroupType: 'string',
      sourceType: 'string',
      spreadCnt: 'number',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applicationNameList)) {
      $dara.Model.validateArray(this.applicationNameList);
    }
    if(Array.isArray(this.destPortGroupPorts)) {
      $dara.Model.validateArray(this.destPortGroupPorts);
    }
    if(Array.isArray(this.destinationGroupCidrs)) {
      $dara.Model.validateArray(this.destinationGroupCidrs);
    }
    if(Array.isArray(this.repeatDays)) {
      $dara.Model.validateArray(this.repeatDays);
    }
    if(Array.isArray(this.sourceGroupCidrs)) {
      $dara.Model.validateArray(this.sourceGroupCidrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallControlPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the access control policies of the virtual private cloud (VPC) firewalls.
   */
  policys?: DescribeVpcFirewallControlPolicyResponseBodyPolicys[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of access control policies of the virtual private cloud (VPC) firewalls.
   * 
   * @example
   * 20
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      policys: 'Policys',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policys: { 'type': 'array', 'itemType': DescribeVpcFirewallControlPolicyResponseBodyPolicys },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policys)) {
      $dara.Model.validateArray(this.policys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

