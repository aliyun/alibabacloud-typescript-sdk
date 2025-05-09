// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallControlPolicyResponseBodyPolicys extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic. Valid values:
   * 
   * *   **accept**: allows the traffic.
   * *   **drop**: denies the traffic.
   * *   **log**: monitors the traffic.
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The UUID of the access control policy.
   * 
   * @example
   * 4037fbf7-3e39-4634-92a4-d0155247****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The application ID in the access control policy.
   * 
   * @example
   * 10**
   */
  applicationId?: string;
  /**
   * @remarks
   * The application types supported by the access control policy. We recommend that you specify ApplicationNameList. Valid values:
   * 
   * *   **HTTP**
   * *   **HTTPS**
   * *   **MySQL**
   * *   **SMTP**
   * *   **SMTPS**
   * *   **RDP**
   * *   **VNC**
   * *   **SSH**
   * *   **Redis**
   * *   **MQTT**
   * *   **MongoDB**
   * *   **Memcache**
   * *   **SSL**
   * *   **ANY**: all application types
   * 
   * @example
   * HTTP
   */
  applicationName?: string;
  /**
   * @remarks
   * The application types supported by the access control policy.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * The time when the access control policy was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1761062400
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the access control policy.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination port in the access control policy.
   * 
   * @example
   * 80
   */
  destPort?: string;
  /**
   * @remarks
   * The name of the destination port address book in the access control policy.
   * 
   * @example
   * my_port_group
   */
  destPortGroup?: string;
  /**
   * @remarks
   * The ports in the destination port address book of the access control policy.
   */
  destPortGroupPorts?: string[];
  /**
   * @remarks
   * The type of the destination port in the access control policy. Valid values:
   * 
   * *   **port**: port
   * *   **group**: port address book
   * 
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @remarks
   * The destination address in the access control policy. Valid values:
   * 
   * *   If **DestinationType** is set to `net`, the value of this parameter is a CIDR block.
   * *   If **DestinationType** is set to `domain`, the value of this parameter is a domain name.
   * *   If **DestinationType** is set to `group`, the value of this parameter is an address book name.
   * 
   * @example
   * 192.0.XX.XX/24
   */
  destination?: string;
  /**
   * @remarks
   * The CIDR blocks in the destination address book of the access control policy.
   */
  destinationGroupCidrs?: string[];
  /**
   * @remarks
   * The type of the destination address book in the access control policy. Valid values:
   * 
   * *   **ip**: an address book that includes one or more CIDR blocks
   * *   **domain**: an address book that includes one or more domain names
   * 
   * @example
   * ip
   */
  destinationGroupType?: string;
  /**
   * @remarks
   * The type of the destination address in the access control policy. Valid values:
   * 
   * *   **net**: CIDR block
   * *   **group**: address book
   * *   **domain**: domain name
   * 
   * @example
   * net
   */
  destinationType?: string;
  /**
   * @remarks
   * The domain name resolution method of the access control policy. By default, an access control policy is enabled after the policy is created. Valid values:
   * 
   * * **FQDN**: fully qualified domain name (FQDN)-based resolution
   * * **DNS**: DNS-based dynamic resolution
   * * **FQDN_AND_DNS**: FQDN and DNS-based dynamic resolution
   * 
   * @example
   * FQDN
   */
  domainResolveType?: string;
  /**
   * @remarks
   * The time when the access control policy stops taking effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of StartTime.
   * 
   * >  If RepeatType is set to Permanent, EndTime is left empty. If RepeatType is set to None, Daily, Weekly, or Monthly, EndTime must be specified.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The time when the access control policy was last hit. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1579261141
   */
  hitLastTime?: number;
  /**
   * @remarks
   * The number of hits for the access control policy.
   * 
   * @example
   * 100
   */
  hitTimes?: number;
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
   * The time when the access control policy was modified. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1761062400
   */
  modifyTime?: number;
  /**
   * @remarks
   * The priority of the access control policy.
   * 
   * The priority value starts from 1. A smaller priority value indicates a higher priority.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The protocol type in the access control policy. Valid values:
   * 
   * *   **TCP**
   * *   **UDP**
   * *   **ICMP**
   * *   **ANY**: all protocol types
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * Indicates whether the access control policy is enabled. By default, an access control policy is enabled after it is created. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The days of a week or of a month on which the access control policy takes effect.
   * 
   * *   If RepeatType is set to `Permanent`, `None`, or `Daily`, RepeatDays is left empty. Example: [].
   * *   If RepeatType is set to Weekly, RepeatDays must be specified. Example: [0, 6].
   * 
   * >  If RepeatType is set to Weekly, the fields in the value of RepeatDays cannot be repeated.
   * 
   * *   If RepeatType is set to `Monthly`, RepeatDays must be specified. Example: [1, 31].
   * 
   * >  If RepeatType is set to Monthly, the fields in the value of RepeatDays cannot be repeated.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The point in time when the recurrence ends. Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of RepeatStartTime.
   * 
   * >  If RepeatType is set to Permanent or None, RepeatEndTime is left empty. If RepeatType is set to Daily, Weekly, or Monthly, RepeatEndTime must be specified.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The point in time when the recurrence starts. Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of RepeatEndTime.
   * 
   * >  If RepeatType is set to Permanent or None, RepeatStartTime is left empty. If RepeatType is set to Daily, Weekly, or Monthly, this parameter must be specified.
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
   * The source address in the access control policy. Valid values:
   * 
   * *   If **SourceType** is set to `net`, the value of this parameter is a CIDR block.
   * *   If **SourceType** is set to `group`, the value of this parameter is an address book name.
   * 
   * @example
   * 192.0.XX.XX/24
   */
  source?: string;
  /**
   * @remarks
   * The CIDR blocks in the source address book of the access control policy.
   */
  sourceGroupCidrs?: string[];
  /**
   * @remarks
   * The type of the source address book in the access control policy. The value is fixed as **ip**. The value indicates an address book that includes one or more CIDR blocks.
   * 
   * @example
   * ip
   */
  sourceGroupType?: string;
  /**
   * @remarks
   * The type of the source address in the access control policy. Valid values:
   * 
   * *   **net**: CIDR block
   * *   **group**: address book
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The total quota consumed by the returned access control policies, which is the sum of the quota consumed by each policy. The quota that is consumed by an access control policy is calculated by using the following formula: Quota that is consumed by an access control policy = Number of source addresses × Number of destination addresses (number of CIDR blocks or domain names) × Number of applications × Number of port ranges.
   * 
   * @example
   * 10,000
   */
  spreadCnt?: number;
  /**
   * @remarks
   * The time when the access control policy starts to take effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of EndTime.
   * 
   * >  If RepeatType is set to Permanent, StartTime is left empty. If RepeatType is set to None, Daily, Weekly, or Monthly, StartTime must be specified.
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

