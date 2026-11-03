// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeControlPolicyResponseBodyPolicys extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic that matches the access control policy. Valid values:
   * 
   * - **accept**: Allow
   * - **drop**: Deny
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
   * 00281255-d220-4db1-8f4f-c4df221a****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The ID of the application for the traffic in the access control policy.
   * 
   * @example
   * 10***
   */
  applicationId?: string;
  /**
   * @remarks
   * The application type supported by the access control policy. ApplicationNameList is recommended. Valid values:
   * - **FTP**
   * - **HTTP**
   * - **HTTPS**
   * - **Memcache**
   * - **MongoDB**
   * - **MQTT**
   * - **MySQL**
   * - **RDP**
   * - **Redis**
   * - **SMTP**
   * - **SMTPS**
   * - **SSH**
   * - **SSL**
   * - **VNC**
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
   * The time when the policy was created. The value is a UNIX timestamp in seconds, which indicates the number of seconds that have elapsed since January 1, 1970 (UTC).
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
   * Allow access to the office CIDR block
   */
  description?: string;
  /**
   * @remarks
   * The destination port of the traffic in the access control policy.
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
   * The ports in the destination port address book.
   */
  destPortGroupPorts?: string[];
  /**
   * @remarks
   * The type of the destination port in the access control policy. Valid values:
   * - **port**: Port
   * - **group**: Port address book
   * 
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @remarks
   * The destination address in the access control policy. The value of Destination varies based on the destination type (DestinationType). Valid values:
   * 
   * - If **DestinationType** is set to **net**, the destination address is a CIDR block. Example: 192.0.XX.XX/24.
   * - If **DestinationType** is set to **domain**, the destination address is a domain name. Example: aliyuncs.com.
   * - If **DestinationType** is set to **group**, the destination address is the name of an address book. Example: db_group.
   * - If **DestinationType** is set to **location**, the destination address is an area name. For more information about the area positional encoding, see AddControlPolicy. Example: ["BJ11", "ZB"\\].
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
   * - **ip**: IP address book, which contains one or more CIDR blocks.
   * 
   * - **tag**: ECS tag-based address book, which contains the IP addresses of one or more ECS tags.
   * 
   * - **domain**: Domain name address book, which contains one or more domain names.
   * 
   * - **threat**: Threat intelligence address book, which contains one or more malicious IP addresses or domain names.
   * 
   * - **backsrc**: Back-to-origin address book, which contains the back-to-origin IP addresses of one or more Anti-DDoS or WAF instances.
   * 
   * @example
   * ip
   */
  destinationGroupType?: string;
  /**
   * @remarks
   * The type of the destination address in the access control policy. Valid values:
   * 
   * - **net**: Destination CIDR block
   * - **group**: Destination address book
   * - **domain**: Destination domain name
   * - **location**: Destination region
   * 
   * @example
   * net
   */
  destinationType?: string;
  /**
   * @remarks
   * The traffic direction of the access control policy. Valid values:
   * 
   * - **in**: Inbound traffic
   * - **out**: Outbound traffic
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The DNS resolution result.
   * 
   * @example
   * 192.0.XX.XX,192.0.XX.XX
   * 
   * @deprecated
   */
  dnsResult?: string;
  /**
   * @remarks
   * The timestamp of the DNS resolution. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1579261141
   */
  dnsResultTime?: number;
  /**
   * @remarks
   * The domain name resolution mode of the access control policy. Valid values:
   * 
   * * **FQDN**: FQDN-based
   * * **DNS**: DNS-based dynamic resolution
   * * **FQDN_AND_DNS**: FQDN- and DNS-based dynamic resolution
   * 
   * @example
   * FQDN
   */
  domainResolveType?: string;
  /**
   * @remarks
   * The end time of the Policy Validity Period for the access control policy. The value is in the UNIX timestamp format in seconds. The time must be on the hour or half-hour, and must be at least 30 minutes later than the start time.
   * > If RepeatType is Permanent, EndTime is empty. If RepeatType is None, Daily, Weekly, or Monthly, EndTime is required, and you must configure the Settings for the end time.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The latest time of hits. The value is in the UNIX timestamp format in seconds.
   * 
   * @example
   * 1579261141
   */
  hitLastTime?: number;
  /**
   * @remarks
   * The number of times the access control policy is hit.
   * 
   * @example
   * 100
   */
  hitTimes?: number;
  /**
   * @remarks
   * The IP address version. Valid values:
   * 
   * - **4**: IPv4
   * - **6**: IPv6
   * 
   * @example
   * 6
   */
  ipVersion?: number;
  /**
   * @remarks
   * The time when the policy was modified. The value is a UNIX timestamp in seconds, which indicates the number of seconds that have elapsed since January 1, 1970 (UTC).
   * 
   * @example
   * 1761062400
   */
  modifyTime?: number;
  /**
   * @remarks
   * The priority of the access control policy.
   * 
   * The priority value starts from 1 and increments. A smaller value indicates a higher priority.
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
   * - **TCP**
   * - **UDP**
   * - **ICMP**
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * Specifies whether the access control policy is enabled. By default, a policy is enabled after it is created. Valid values:
   * 
   * - **true**: The access control policy is enabled.
   * 
   * - **false**: The access control policy is disabled.
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The recurrence days of the Policy Validity Period for the access control policy.
   * - If RepeatType is set to `Permanent`, `None`, or `Daily`, RepeatDays is an empty set.
   *   Example: []
   * - When the Settings specify Weekly for RepeatType, RepeatDays cannot be empty.
   *   Example: [0, 6]
   * > When the Settings specify Weekly for RepeatType, the values in RepeatDays must be unique.
   * - If RepeatType is set to `Monthly`, RepeatDays cannot be empty.
   *   Example: [1, 31]
   * > When the Settings specify Monthly for RepeatType, the values in RepeatDays must be unique.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The recurrence end time of the Policy Validity Period for the access control policy. Example: 23:30. The time must be on the hour or half-hour, and must be at least 30 minutes later than the recurrence start time.
   * > If RepeatType is Permanent or None, RepeatEndTime is empty. If RepeatType is Daily, Weekly, or Monthly, RepeatEndTime is required, and you must configure the Settings for the recurrence end time.
   * > The time is in the HH:mm format (24-hour clock). Example: 08:00 or 23:30.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The recurrence start time of the Policy Validity Period for the access control policy. Example: 08:00. The time must be on the hour or half-hour, and must be at least 30 minutes earlier than the recurrence end time.
   * > If RepeatType is Permanent or None, RepeatStartTime is empty. If RepeatType is Daily, Weekly, or Monthly, RepeatStartTime is required, and you must configure the Settings for the recurrence start time.
   * > The time is in the HH:mm format (24-hour clock). Example: 08:00 or 23:30.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type of the Policy Validity Period for the access control policy. Valid values:
   * - **Permanent** (default): Always
   * - **None**: One-time
   * - **Daily**: Daily
   * - **Weekly**: Weekly
   * - **Monthly**: Monthly
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy. Valid values:
   * 
   * - If **SourceType** is set to `net`, the source address is a CIDR block. Example: 192.0.XX.XX/24.
   * - If **SourceType** is set to `group`, the source address is the name of a source address book. Example: db_group.
   * - If **SourceType** is set to `location`, the source address is an area. For more information about the area positional encoding, see [AddControlPolicy](https://help.aliyun.com/document_detail/138867.html). Example: ["BJ11", "ZB"\\].
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
   * The type of the source address book in the access control policy. Valid values:
   * 
   * - **ip**: IP address book, which contains one or more CIDR blocks.
   * 
   * - **tag**: ECS tag-based address book, which contains the IP addresses of one or more ECS tags.
   * 
   * - **domain**: Domain name address book, which contains one or more domain names.
   * 
   * - **threat**: Threat intelligence address book, which contains one or more malicious IP addresses or domain names.
   * 
   * - **backsrc**: Back-to-origin address book, which contains the back-to-origin IP addresses of one or more Anti-DDoS or WAF instances.
   * 
   * @example
   * ip
   */
  sourceGroupType?: string;
  /**
   * @remarks
   * The type of the source address in the access control policy. Valid values:
   * 
   * - **net**: Source CIDR block
   * - **group**: Source address book
   * - **location**: Source region
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The quota consumed by the access control policy, which is the sum of the quota consumed by each policy.
   * Quota consumed by a single policy = Number of source addresses (number of CIDR blocks or area) \\* Number of destination addresses (number of CIDR blocks, area, or domain names) \\* Number of port ranges \\* Number of applications.
   * 
   * @example
   * 10000
   */
  spreadCnt?: number;
  /**
   * @remarks
   * The start time of the Policy Validity Period for the access control policy. The value is in the UNIX timestamp format in seconds. The time must be on the hour or half-hour, and must be at least 30 minutes earlier than the end time.
   * > If RepeatType is Permanent, StartTime is empty. If RepeatType is None, Daily, Weekly, or Monthly, StartTime is required, and you must configure the Settings for the start time.
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
      direction: 'Direction',
      dnsResult: 'DnsResult',
      dnsResultTime: 'DnsResultTime',
      domainResolveType: 'DomainResolveType',
      endTime: 'EndTime',
      hitLastTime: 'HitLastTime',
      hitTimes: 'HitTimes',
      ipVersion: 'IpVersion',
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
      direction: 'string',
      dnsResult: 'string',
      dnsResultTime: 'number',
      domainResolveType: 'string',
      endTime: 'number',
      hitLastTime: 'number',
      hitTimes: 'number',
      ipVersion: 'number',
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

export class DescribeControlPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page returned for a paged query during paging.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page for a paged query during paging.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The information about each access control policy.
   */
  policys?: DescribeControlPolicyResponseBodyPolicys[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of access control policy entries.
   * 
   * @example
   * 100
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      policys: 'Policys',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'string',
      pageSize: 'string',
      policys: { 'type': 'array', 'itemType': DescribeControlPolicyResponseBodyPolicys },
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

