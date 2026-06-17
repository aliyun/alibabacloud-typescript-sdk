// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeControlPolicyResponseBodyPolicys extends $dara.Model {
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
   * 00281255-d220-4db1-8f4f-c4df221a****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The application ID for the traffic in the access control policy.
   * 
   * @example
   * 10***
   */
  applicationId?: string;
  /**
   * @remarks
   * The application type supported by the access control policy. Use \\`ApplicationNameList\\` instead. Valid values:
   * 
   * - **FTP**
   * 
   * - **HTTP**
   * 
   * - **HTTPS**
   * 
   * - **Memcache**
   * 
   * - **MongoDB**
   * 
   * - **MQTT**
   * 
   * - **MySQL**
   * 
   * - **RDP**
   * 
   * - **Redis**
   * 
   * - **SMTP**
   * 
   * - **SMTPS**
   * 
   * - **SSH**
   * 
   * - **SSL**
   * 
   * - **VNC**
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
   * test
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
   * The destination address in the access control policy. The value of this parameter varies based on the value of the \\`DestinationType\\` parameter. Valid values:
   * 
   * - If **DestinationType** is **net**, the destination address is a CIDR block. Example: 192.0.XX.XX/24.
   * 
   * - If **DestinationType** is **domain**, the destination address is a domain name. Example: aliyuncs.com.
   * 
   * - If **DestinationType** is **group**, the destination address is the name of an address book. Example: db_group.
   * 
   * - If **DestinationType** is **location**, the destination address is a region name. For more information about region codes, see AddControlPolicy. Example: ["BJ11", "ZB"].
   * 
   * @example
   * 192.0.XX.XX/24
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
   * - **ip**: An IP address book that contains one or more CIDR blocks.
   * 
   * - **tag**: An ECS tag-based address book that contains the IP addresses of the ECS instances with one or more tags.
   * 
   * - **domain**: A domain name address book that contains one or more domain names.
   * 
   * - **threat**: A threat intelligence address book that contains one or more malicious IP addresses or domain names.
   * 
   * - **backsrc**: An origin URL address book that contains the origin URLs of one or more Anti-DDoS or WAF instances.
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
   * The traffic direction of the access control policy. Valid values:
   * 
   * - **in**: inbound traffic
   * 
   * - **out**: outbound traffic
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The result of the DNS resolution.
   * 
   * @example
   * 192.0.XX.XX,192.0.XX.XX
   * 
   * @deprecated
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
   * The domain name resolution method of the access control policy. Valid values:
   * 
   * - **FQDN**: FQDN-based
   * 
   * - **DNS**: DNS-based dynamic resolution
   * 
   * - **FQDN_AND_DNS**: FQDN- and DNS-based dynamic resolution
   * 
   * @example
   * FQDN
   */
  domainResolveType?: string;
  /**
   * @remarks
   * The end time of the policy validity period for the access control policy. The value is a UNIX timestamp. The time must be on the hour or half-hour, and at least 30 minutes later than the start time.
   * 
   * > If \\`RepeatType\\` is \\`Permanent\\`, \\`EndTime\\` is empty. If \\`RepeatType\\` is \\`None\\`, \\`Daily\\`, \\`Weekly\\`, or \\`Monthly\\`, this parameter is required.
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
   * The IP version supported. Valid values:
   * 
   * - **4**: IPv4 address
   * 
   * - **6**: IPv6 address
   * 
   * @example
   * 6
   */
  ipVersion?: number;
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
   * The priority of the access control policy.
   * 
   * The priority value starts from 1 and increases sequentially. A smaller value indicates a higher priority.
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
   * The status of the access control policy. The policy is enabled by default after it is created. Valid values:
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
   * The collection of recurring dates for the policy validity period of the access control policy.
   * 
   * - If \\`RepeatType\\` is \\`Permanent\\`, \\`None\\`, or \\`Daily\\`, \\`RepeatDays\\` is an empty collection.
   *   Example: []
   * 
   * - If \\`RepeatType\\` is \\`Weekly\\`, \\`RepeatDays\\` cannot be empty.
   *   Example: [0, 6]
   * 
   * > If \\`RepeatType\\` is set to \\`Weekly\\`, \\`RepeatDays\\` cannot contain duplicate values.
   * 
   * - If \\`RepeatType\\` is \\`Monthly\\`, \\`RepeatDays\\` cannot be empty.
   *   Example: [1, 31]
   * 
   * > If \\`RepeatType\\` is set to \\`Monthly\\`, \\`RepeatDays\\` cannot contain duplicate values.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The recurring end time for the policy validity period of the access control policy. Example: \\`23:30\\`. The time must be on the hour or half-hour, and at least 30 minutes later than the recurring start time.
   * 
   * > If \\`RepeatType\\` is \\`Permanent\\` or \\`None\\`, \\`RepeatEndTime\\` is empty. If \\`RepeatType\\` is \\`Daily\\`, \\`Weekly\\`, or \\`Monthly\\`, this parameter is required.
   * > The time is in the HH:mm format (24-hour). Examples: \\`08:00\\` and \\`23:30\\`.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The recurring start time for the policy validity period of the access control policy. Example: \\`08:00\\`. The time must be on the hour or half-hour, and at least 30 minutes earlier than the recurring end time.
   * 
   * > If \\`RepeatType\\` is \\`Permanent\\` or \\`None\\`, \\`RepeatStartTime\\` is empty. If \\`RepeatType\\` is \\`Daily\\`, \\`Weekly\\`, or \\`Monthly\\`, this parameter is required.
   * > The time is in the HH:mm format (24-hour). Examples: \\`08:00\\` and \\`23:30\\`.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type for the policy validity period of the access control policy. Valid values:
   * 
   * - **Permanent** (default): Always
   * 
   * - **None**: One-time
   * 
   * - **Daily**: Daily
   * 
   * - **Weekly**: Weekly
   * 
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
   * - If **SourceType** is `net`, the source address is a CIDR block. Example: 192.0.XX.XX/24.
   * 
   * - If **SourceType** is `group`, the source address is the name of a source address book. Example: db_group.
   * 
   * - If **SourceType** is `location`, the source address is a region. For more information about region codes, see [AddControlPolicy](https://help.aliyun.com/document_detail/138867.html). Example: ["BJ11", "ZB"].
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
   * The type of the source address book in the access control policy. Valid values:
   * 
   * - **ip**: An IP address book that contains one or more CIDR blocks.
   * 
   * - **tag**: An ECS tag-based address book that contains the IP addresses of the ECS instances with one or more tags.
   * 
   * - **domain**: A domain name address book that contains one or more domain names.
   * 
   * - **threat**: A threat intelligence address book that contains one or more malicious IP addresses or domain names.
   * 
   * - **backsrc**: An origin URL address book that contains the origin URLs of one or more Anti-DDoS or WAF instances.
   * 
   * @example
   * ip
   */
  sourceGroupType?: string;
  /**
   * @remarks
   * The source address type in the access control policy. Valid values:
   * 
   * - **net**: source CIDR block
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
   * The number of specification entries that the access control policy consumes. This is the sum of entries consumed by each policy.
   * The number of entries for a single policy is calculated as: Number of source addresses (CIDR blocks or regions) × Number of destination addresses (CIDR blocks, regions, or domain names) × Number of port ranges × Number of applications.
   * 
   * @example
   * 10000
   */
  spreadCnt?: number;
  /**
   * @remarks
   * The start time of the policy validity period for the access control policy. The value is a UNIX timestamp. The time must be on the hour or half-hour, and at least 30 minutes earlier than the end time.
   * 
   * > If \\`RepeatType\\` is \\`Permanent\\`, \\`StartTime\\` is empty. If \\`RepeatType\\` is \\`None\\`, \\`Daily\\`, \\`Weekly\\`, or \\`Monthly\\`, this parameter is required.
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
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The information about the access control policies.
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
   * The total number of access control policies.
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

