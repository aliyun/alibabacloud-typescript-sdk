// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallControlPolicyResponseBodyPolicys extends $dara.Model {
  /**
   * @remarks
   * The action to perform on traffic that matches the access control policy. Valid values:
   * 
   * - **accept**: allows the traffic.
   * 
   * - **drop**: denies the traffic.
   * 
   * - **log**: logs the traffic.
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The unique identifier of the access control policy.
   * 
   * @example
   * 4037fbf7-3e39-4634-92a4-d0155247****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 10**
   */
  applicationId?: string;
  /**
   * @remarks
   * The application type. We recommend that you use `ApplicationNameList` instead. Valid values:
   * 
   * - **HTTP**
   * 
   * - **HTTPS**
   * 
   * - **MySQL**
   * 
   * - **SMTP**
   * 
   * - **SMTPS**
   * 
   * - **RDP**
   * 
   * - **VNC**
   * 
   * - **SSH**
   * 
   * - **Redis**
   * 
   * - **MQTT**
   * 
   * - **MongoDB**
   * 
   * - **Memcache**
   * 
   * - **SSL**
   * 
   * - **ANY** (all application types)
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
   * The UNIX timestamp, in seconds, of when the policy was created.
   * 
   * @example
   * 1761062400
   */
  createTime?: number;
  /**
   * @remarks
   * The policy description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination port.
   * 
   * @example
   * 80
   */
  destPort?: string;
  /**
   * @remarks
   * The name of the destination port address book.
   * 
   * @example
   * my_port_group
   */
  destPortGroup?: string;
  /**
   * @remarks
   * The ports in the destination port address book.
   */
  destPortGroupPorts?: string[];
  /**
   * @remarks
   * The type of the destination port. Valid values:
   * 
   * - **port**: a single port
   * 
   * - **group**: a port address book
   * 
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @remarks
   * The destination address for the access control policy. The value depends on `DestinationType`.
   * 
   * - If `DestinationType` is `net`, the value is a destination CIDR block.
   * 
   * - If `DestinationType` is `domain`, the value is a destination domain name.
   * 
   * - If `DestinationType` is `group`, the value is the name of a destination address book.
   * 
   * @example
   * 192.0.XX.XX/24
   */
  destination?: string;
  /**
   * @remarks
   * The CIDR blocks in the destination address book.
   */
  destinationGroupCidrs?: string[];
  /**
   * @remarks
   * The type of the destination address book. Valid values:
   * 
   * - **ip**: an address book of IP addresses or CIDR blocks.
   * 
   * - **domain**: an address book of domain names.
   * 
   * @example
   * ip
   */
  destinationGroupType?: string;
  /**
   * @remarks
   * The type of the destination address. Valid values:
   * 
   * - **net**: a destination CIDR block
   * 
   * - **group**: a destination address book
   * 
   * - **domain**: a destination domain name
   * 
   * @example
   * net
   */
  destinationType?: string;
  /**
   * @remarks
   * The domain name resolution mode. Valid values:
   * 
   * - **FQDN**: FQDN-based resolution
   * 
   * - **DNS**: DNS-based dynamic resolution
   * 
   * - **FQDN_AND_DNS**: FQDN-based and DNS-based dynamic resolution
   * 
   * @example
   * FQDN
   */
  domainResolveType?: string;
  /**
   * @remarks
   * The UNIX timestamp, in seconds, for the end of the policy\\"s effective period. The time must be on the hour or half-hour and at least 30 minutes after the start time.
   * 
   * > This parameter is not used if `RepeatType` is `Permanent`. It is required for `None`, `Daily`, `Weekly`, or `Monthly` recurrence.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The UNIX timestamp, in seconds, of the last policy hit.
   * 
   * @example
   * 1579261141
   */
  hitLastTime?: number;
  /**
   * @remarks
   * The number of policy hits.
   * 
   * @example
   * 100
   */
  hitTimes?: number;
  /**
   * @remarks
   * The UID of the member account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The UNIX timestamp, in seconds, of when the policy was last modified.
   * 
   * @example
   * 1761062400
   */
  modifyTime?: number;
  /**
   * @remarks
   * The priority of the access control policy, starting from 1. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * - **TCP**
   * 
   * - **UDP**
   * 
   * - **ICMP**
   * 
   * - **ANY** (all protocol types)
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * The enabled status of the access control policy. A policy is enabled by default after it is created. Valid values:
   * 
   * - **true**: The policy is enabled.
   * 
   * - **false**: The policy is disabled.
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The days of the week or month on which the policy recurs.
   * 
   * - If `RepeatType` is set to `Permanent`, `None`, or `Daily`, this parameter is empty. Example: `[]`
   * 
   * - If `RepeatType` is set to `Weekly`, this parameter is required. Example: `[0, 6]`
   * 
   * > If `RepeatType` is set to `Weekly`, do not specify duplicate values for this parameter.
   * 
   * - If `RepeatType` is set to `Monthly`, this parameter is required. Example: `[1, 31]`
   * 
   * > If `RepeatType` is set to `Monthly`, do not specify duplicate values for this parameter.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The recurrence end time. The time is in the `HH:mm` 24-hour format, such as `23:30`.
   * 
   * > This parameter is not used if `RepeatType` is `Permanent` or `None`. It is required for `Daily`, `Weekly`, or `Monthly` recurrence.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The recurrence start time. The time is in the `HH:mm` 24-hour format, such as `08:00`.
   * 
   * > This parameter is not used if `RepeatType` is `Permanent` or `None`. It is required for `Daily`, `Weekly`, or `Monthly` recurrence.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type for the policy\\"s effective period. Valid values:
   * 
   * - **Permanent** (default): The policy is always active.
   * 
   * - **None**: The policy applies only once.
   * 
   * - **Daily**: The policy recurs daily.
   * 
   * - **Weekly**: The policy recurs weekly.
   * 
   * - **Monthly**: The policy recurs monthly.
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address for the access control policy. The value depends on `SourceType`.
   * 
   * - If `SourceType` is `net`, the value is a source CIDR block.
   * 
   * - If `SourceType` is `group`, the value is the name of a source address book.
   * 
   * @example
   * 192.0.XX.XX/24
   */
  source?: string;
  /**
   * @remarks
   * The CIDR blocks in the source address book.
   */
  sourceGroupCidrs?: string[];
  /**
   * @remarks
   * The type of the source address book. The value is always **ip**, which indicates an address book that contains IP addresses or CIDR blocks.
   * 
   * @example
   * ip
   */
  sourceGroupType?: string;
  /**
   * @remarks
   * The type of the source address. Valid values:
   * 
   * - **net**: a source CIDR block
   * 
   * - **group**: a source address book
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The number of rule capacity units that the access control policy consumes. This is calculated as: Number of source addresses × Number of destination addresses × Number of applications × Number of port ranges.
   * 
   * @example
   * 10000
   */
  spreadCnt?: number;
  /**
   * @remarks
   * The UNIX timestamp, in seconds, for the start of the policy\\"s effective period. The time must be on the hour or half-hour and at least 30 minutes before the end time.
   * 
   * > This parameter is not used if `RepeatType` is `Permanent`. It is required for `None`, `Daily`, `Weekly`, or `Monthly` recurrence.
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
   * The VPC firewall access control policies.
   */
  policys?: DescribeVpcFirewallControlPolicyResponseBodyPolicys[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of VPC firewall access control policies.
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

