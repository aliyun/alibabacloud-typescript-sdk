// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatFirewallControlPolicyResponseBodyPolicys extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic. Valid values:
   * 
   * - **accept**: Allow
   * 
   * - **drop**: Deny
   * 
   * - **log**: Monitor
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The unique ID of the access control policy.
   * 
   * @example
   * 01281255-d220-4db1-8f4f-c4df221a****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The application names. Multiple applications are supported.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * The time when the policy was created. The value is a UNIX timestamp. Unit: seconds.
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
   * test-description
   */
  description?: string;
  /**
   * @remarks
   * The destination port for the traffic in the access control policy.
   * 
   * @example
   * 80
   */
  destPort?: string;
  /**
   * @remarks
   * The name of the destination port address book for the traffic in the access control policy.
   * 
   * @example
   * my_port_group
   */
  destPortGroup?: string;
  /**
   * @remarks
   * The list of ports in the destination port address book.
   */
  destPortGroupPorts?: string[];
  /**
   * @remarks
   * The destination port type for the traffic in the access control policy. Valid values:
   * 
   * - **port**: port
   * 
   * - **group**: port address book
   * 
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @remarks
   * The destination address in the access control policy. The value of this parameter varies based on the value of the DestinationType parameter. Valid values:
   * 
   * - If **DestinationType** is **net**, the value of this parameter is a CIDR block. Example: 192.0.XX.XX/24.
   * 
   * - If **DestinationType** is **domain**, the value of this parameter is a domain name. Example: aliyuncs.com.
   * 
   * - If **DestinationType** is **group**, the value of this parameter is the name of an address book. Example: db_group.
   * 
   * - If **DestinationType** is **location**, the value of this parameter is a region name. For more information, see [AddControlPolicy](https://help.aliyun.com/document_detail/138867.html). Example: ["BJ11", "ZB"].
   * 
   * @example
   * x.x.x.x/32
   */
  destination?: string;
  /**
   * @remarks
   * The list of CIDR blocks in the destination address book of the access control policy.
   */
  destinationGroupCidrs?: string[];
  /**
   * @remarks
   * The type of the destination address book in the access control policy. Valid values:
   * 
   * - **ip**: an IP address book that contains one or more IP address CIDR blocks.
   * 
   * - **domain**: a domain name address book that contains one or more domain names.
   * 
   * @example
   * ip
   */
  destinationGroupType?: string;
  /**
   * @remarks
   * The destination address type in the access control policy. Valid values:
   * 
   * - **net**: destination CIDR block
   * 
   * - **group**: destination address book
   * 
   * - **domain**: destination domain name
   * 
   * - **location**: destination region
   * 
   * @example
   * net
   */
  destinationType?: string;
  /**
   * @remarks
   * The DNS resolution result.
   * 
   * @example
   * 111.0.XX.XX,112.0.XX.XX
   */
  dnsResult?: string;
  /**
   * @remarks
   * The timestamp of the DNS resolution. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1579261141
   */
  dnsResultTime?: number;
  /**
   * @remarks
   * The domain name resolution method of the access control policy. By default, this feature is enabled. Valid values:
   * 
   * - **0**: FQDN-based
   * 
   * - **1**: DNS-based dynamic resolution
   * 
   * - **2**: FQDN- and DNS-based dynamic resolution
   * 
   * @example
   * 0
   */
  domainResolveType?: number;
  /**
   * @remarks
   * The end time of the policy validity period. The value is a UNIX timestamp. Unit: seconds. The time must be on the hour or half hour, and at least 30 minutes later than the start time.
   * 
   * > If RepeatType is set to Permanent, this parameter is empty. If RepeatType is set to None, Daily, Weekly, or Monthly, you must set this parameter.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The timestamp of the last hit. The value is a UNIX timestamp. Unit: seconds.
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
   * The time when the policy was last modified. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1761062400
   */
  modifyTime?: number;
  /**
   * @remarks
   * The ID of the NAT Gateway.
   * 
   * @example
   * ngw-xxxxxx
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The priority of the access control policy.
   * 
   * The priority starts from 1. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The protocol type of the traffic in the access control policy. Valid values:
   * 
   * - **ANY**
   * 
   * - **TCP**
   * 
   * - **UDP**
   * 
   * - **ICMP**
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * The status of the access control policy. By default, an access control policy is enabled after it is created. Valid values:
   * 
   * - **true**: enabled
   * 
   * - **false**: disabled
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The days of the week or month for the policy to repeat.
   * 
   * - If RepeatType is set to `Permanent`, `None`, or `Daily`, this parameter is an empty set.
   *   Example: []
   * 
   * - If RepeatType is set to Weekly, this parameter cannot be empty.
   *   Example: [0, 6]
   * 
   * > If RepeatType is set to Weekly, the days in RepeatDays cannot be repeated.
   * 
   * - If RepeatType is set to `Monthly`, this parameter cannot be empty.
   *   Example: [1, 31]
   * 
   * > If RepeatType is set to Monthly, the days in RepeatDays cannot be repeated.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The end time of the recurrence. The time is in the HH:mm format, based on a 24-hour clock. Example: 23:00.
   * 
   * > If RepeatType is set to Permanent or None, this parameter is empty. If RepeatType is set to Daily, Weekly, or Monthly, you must set this parameter.
   * > The time is in the HH:mm format, based on a 24-hour clock. Examples: 08:00 and 23:30.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The start time of the recurrence. The time is in the HH:mm format, based on a 24-hour clock. Example: 08:00.
   * 
   * > If RepeatType is set to Permanent or None, this parameter is empty. If RepeatType is set to Daily, Weekly, or Monthly, you must set this parameter.
   * > The time is in the HH:mm format, based on a 24-hour clock. Examples: 08:00 and 23:30.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type for the policy validity period. Valid values:
   * 
   * - **Permanent** (default): always
   * 
   * - **None**: one-time
   * 
   * - **Daily**: daily
   * 
   * - **Weekly**: weekly
   * 
   * - **Monthly**: monthly
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy. Valid values:
   * 
   * - If **SourceType** is `net`, the value of this parameter is a CIDR block. Example: 192.0.XX.XX/24.
   * 
   * - If **SourceType** is `group`, the value of this parameter is the name of a source address book. Example: db_group.
   * 
   * - If **SourceType** is `location`, the value of this parameter is a region. For more information, see [AddControlPolicy](https://help.aliyun.com/document_detail/138867.html). Example: ["BJ11", "ZB"].
   * 
   * @example
   * 192.0.XX.XX/24
   */
  source?: string;
  /**
   * @remarks
   * The list of CIDR blocks in the source address book of the access control policy.
   */
  sourceGroupCidrs?: string[];
  /**
   * @remarks
   * The type of the source address book in the access control policy. The value is fixed at **ip**. This indicates an IP address book that contains one or more IP address CIDR blocks.
   * 
   * @example
   * ip
   */
  sourceGroupType?: string;
  /**
   * @remarks
   * The source address type in the access control policy. Valid values:
   * 
   * - **net**: CIDR block
   * 
   * - **group**: source address book
   * 
   * - **location**: source region
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The number of policy specifications that are occupied. This is the cumulative value of the number of specifications occupied by each policy.
   * The number of specifications occupied by a single policy = Number of source CIDR blocks × Number of destination addresses (IP address CIDR blocks, regions, or domain names) × Number of applications × Number of port ranges.
   * 
   * @example
   * 10,000
   */
  spreadCnt?: string;
  /**
   * @remarks
   * The start time of the policy validity period. The value is a UNIX timestamp. Unit: seconds. The time must be on the hour or half hour, and at least 30 minutes earlier than the end time.
   * 
   * > If RepeatType is set to Permanent, this parameter is empty. If RepeatType is set to None, Daily, Weekly, or Monthly, you must set this parameter.
   * 
   * @example
   * 1694761200
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
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
      dnsResult: 'DnsResult',
      dnsResultTime: 'DnsResultTime',
      domainResolveType: 'DomainResolveType',
      endTime: 'EndTime',
      hitLastTime: 'HitLastTime',
      hitTimes: 'HitTimes',
      modifyTime: 'ModifyTime',
      natGatewayId: 'NatGatewayId',
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
      dnsResult: 'string',
      dnsResultTime: 'number',
      domainResolveType: 'number',
      endTime: 'number',
      hitLastTime: 'number',
      hitTimes: 'number',
      modifyTime: 'number',
      natGatewayId: 'string',
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
      spreadCnt: 'string',
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

export class DescribeNatFirewallControlPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the access control policies for the NAT firewall.
   */
  policys?: DescribeNatFirewallControlPolicyResponseBodyPolicys[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F283567D-8A52-5BAE-9472-*****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 28
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
      policys: { 'type': 'array', 'itemType': DescribeNatFirewallControlPolicyResponseBodyPolicys },
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

