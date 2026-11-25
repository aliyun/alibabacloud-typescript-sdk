// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAclCheckResponseBodyCheckRecordAclsAclAddresses extends $dara.Model {
  /**
   * @remarks
   * The address information in the address book.
   * 
   * @example
   * 192.0.XX.XX/32
   */
  address?: string;
  /**
   * @remarks
   * The description note.
   * 
   * @example
   * Reviewed
   */
  note?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      note: 'Note',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      note: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclCheckResponseBodyCheckRecordAclsAclTagList extends $dara.Model {
  /**
   * @remarks
   * The key of the ECS tag.
   * 
   * @example
   * ss
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the ECS tag.
   * 
   * @example
   * tfTestAcc0
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclCheckResponseBodyCheckRecordAclsAcl extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic that matches the access control policy. Valid values:
   * 
   * - **accept**: allows the traffic.
   * - **drop**: blocks the traffic.
   * - **log**: monitors the traffic.
   * 
   * @example
   * log
   */
  aclAction?: string;
  /**
   * @remarks
   * The UUID of the access control policy.
   * 
   * @example
   * 997b38e0-01fa-4db7-8d30-02ebf6fdb747
   */
  aclUuid?: string;
  /**
   * @remarks
   * The address information in the address book.
   */
  addressList?: string[];
  /**
   * @remarks
   * The number of addresses in the address book.
   * 
   * @example
   * 1
   */
  addressListCount?: number;
  /**
   * @remarks
   * The list of addresses and description notes.
   */
  addresses?: DescribeAclCheckResponseBodyCheckRecordAclsAclAddresses[];
  /**
   * @remarks
   * The ID of the application for the traffic in the access control policy.
   * 
   * @example
   * plugin_idp4_ciam
   */
  applicationId?: string;
  /**
   * @remarks
   * The application types supported by the access control policies for VPC border firewalls. Use ApplicationNameList. Valid values:
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
   * - **ANY**: all application types of the access control policy.
   * 
   * @example
   * ANY
   */
  applicationName?: string;
  /**
   * @remarks
   * The list of application types supported by the access control policy. Valid values:
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
   * - **ANY**: all application types.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * Specifies whether to automatically add the public IP addresses of newly matched ECS instances to the address book. Newly matched ECS instances refer to newly purchased ECS instances with tags configured or ECS instances with modified tags.
   * 
   * @example
   * 0
   */
  autoAddTagEcs?: number;
  /**
   * @remarks
   * The creation time of the policy. The value is a UNIX timestamp in seconds.
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
   * test_policy
   */
  description?: string;
  /**
   * @remarks
   * The destination port of the traffic in the access control policy.
   * 
   * @example
   * 80/80
   */
  destPort?: string;
  /**
   * @remarks
   * The type of the destination port for traffic access in the access control policy. Valid values:
   * - **port**: port.
   * - **group**: port address book.
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
   * The type of the destination port for traffic access in the access control policy. Valid values:
   * - **port**: port.
   * - **group**: port address book.
   * 
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @remarks
   * The destination address in the access control policy. Fuzzy match is supported. The value of this parameter varies based on the destination type.
   * 
   * - If the destination type is `net`, the destination address is a CIDR block. Example: 10.0.3.0/24.
   * 
   * - If the destination type is `domain`, the destination address is a domain name. Example: aliyun.
   * 
   * - If the destination type is `group`, the destination address is the name of an address book. Example: db_group.
   * 
   * - If the destination type is `location`, the destination address is an area name. For more information about the positional encoding of specific areas, see AddControlPolicy. Example: ["BJ11", "ZB"].
   * 
   * > If you do not specify this parameter, all types of destination addresses are queried.
   * 
   * @example
   * kms.cn-shanghai.aliyuncs.com
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
   * - **domain**: domain name address book, which contains one or more domain names.
   * 
   * - **threat**: threat intelligence address book, which contains one or more malicious IP addresses or domain names.
   * 
   * - **backsrc**: back-to-origin address book, which contains the back-to-origin addresses of one or more Anti-DDoS or WAF instances.
   * 
   * @example
   * domain
   */
  destinationGroupType?: string;
  /**
   * @remarks
   * The type of the destination address in the access control policy. Valid values:
   * 
   * - **net**: destination CIDR block.
   * - **group**: destination address book.
   * - **domain**: destination domain name.
   * - **location**: destination location.
   * 
   * @example
   * domain
   */
  destinationType?: string;
  /**
   * @remarks
   * The traffic direction on the Internet. Valid values:
   * 
   * - **in**: inbound traffic access control.
   * - **out**: outbound traffic access control.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The DNS resolution result.
   * 
   * @example
   * 192.0.XX.XX
   */
  dnsResult?: string;
  /**
   * @remarks
   * The timestamp of DNS resolution. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1579261141
   */
  dnsResultTime?: number;
  /**
   * @remarks
   * The domain name resolution mode of the access control policy. Valid values:
   * 
   * * **FQDN**: FQDN-based resolution.
   * * **DNS**: DNS-based dynamic resolution.
   * * **FQDN_AND_DNS**: FQDN- and DNS-based dynamic resolution.
   * 
   * @example
   * FQDN
   */
  domainResolveType?: number;
  /**
   * @remarks
   * The end time of the Policy Validity Period for the access control policy. The value is a UNIX timestamp in the seconds format. The time must be on the hour or half-hour, and must be at least 30 minutes later than the start time.
   * > If RepeatType is Permanent, EndTime is empty. If RepeatType is None, Daily, Weekly, or Monthly, EndTime must have a value, and you must specify the end time.
   * 
   * @example
   * 1758334822
   */
  endTime?: number;
  /**
   * @remarks
   * The name of the address book.
   * 
   * @example
   * Zhong Kui Open White List
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the address book. Valid values:
   * 
   * - **ip**: IP address book.
   * 
   * - **domain**: domain name address book.
   * 
   * - **port**: port address book.
   * 
   * - **tag**: ECS tag-based address book.
   * 
   * - **allCloud**: cloud service address book.
   * 
   * - **threat**: threat intelligence address book.
   * 
   * @example
   * ip
   */
  groupType?: string;
  /**
   * @remarks
   * The UUID of the address book.
   * 
   * To delete an address book for access control, you must provide the UUID of the address book. You can call the [DescribeAddressBook](https://help.aliyun.com/document_detail/138869.html) operation to obtain the UUID.
   * 
   * @example
   * b91d86c3-2b52-4534-aae9-8d0339b12a48
   */
  groupUuid?: string;
  /**
   * @remarks
   * The latest time of hits. The value is a UNIX timestamp in the seconds format.
   * 
   * @example
   * 1579261141
   */
  hitLastTime?: number;
  /**
   * @remarks
   * The number of hits of the access control policy.
   * 
   * @example
   * 1
   */
  hitTimes?: number;
  /**
   * @remarks
   * The IP address version. Valid values:
   * 
   * - **4**: IPv4.
   * - **6**: IPv6.
   * 
   * @example
   * 4
   */
  ipVersion?: number;
  /**
   * @remarks
   * The last modification time of the policy. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1761062400
   */
  modifyTime?: number;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * @example
   * ngw-2ze4w62zbdkwjmoqeokgl
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The priority of the access control policy.
   * 
   * The priority starts from 1 and increments sequentially. A smaller priority number indicates a higher priority.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The protocol type of the traffic in the access control policy. Valid values:
   * 
   * - **TCP**
   * - **UDP**
   * - **ICMP**
   * - **ANY**: all protocol types.
   * > If you do not specify this parameter, all protocol types are queried.
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * The number of times the address book is referenced.
   * 
   * @example
   * 1
   */
  referenceCount?: number;
  /**
   * @remarks
   * The status of the access control policy. Valid values:
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
   * > If RepeatType is set to Weekly, valid values are 0 to 6, where 0 indicates Sunday.
   * > If RepeatType is set to Monthly, valid values are 1 to 31.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The recurrence end time of the Policy Validity Period for the access control policy. Example: 23:30. The time must be on the hour or half-hour, and must be at least 30 minutes later than the recurrence start time.
   * > If RepeatType is Permanent or None, RepeatEndTime is empty. If RepeatType is Daily, Weekly, or Monthly, RepeatEndTime must have a value, and you must specify the recurrence end time.
   * > The time is in the HH:mm format (24-hour clock). Examples: 08:00 and 23:30.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The recurrence start time of the Policy Validity Period for the access control policy. Example: 08:00. The time must be on the hour or half-hour, and must be at least 30 minutes earlier than the recurrence end time.
   * > If RepeatType is Permanent or None, RepeatStartTime is empty. If RepeatType is Daily, Weekly, or Monthly, RepeatStartTime must have a value, and you must specify the recurrence start time.
   * > The time is in the HH:mm format (24-hour clock). Examples: 08:00 and 23:30.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type of the Policy Validity Period for the access control policy. Valid values:
   * - **Permanent** (default): always.
   * - **None**: specified single time.
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
   * The source address in the access control policy. Valid values:
   * 
   * - If **SourceType** is set to `net`, the source address is a CIDR block. Example: 192.0.XX.XX/24.
   * - If **SourceType** is set to `group`, the source address is the name of a source address book. Example: db_group.
   * - If **SourceType** is set to `location`, the source address is an area. For more information about the positional encoding of specific areas, see [AddControlPolicy](https://help.aliyun.com/document_detail/138867.html). Example: ["BJ11", "ZB"\].
   * 
   * @example
   * 172.28.7.167
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
   * - **domain**: domain name address book, which contains one or more domain names.
   * 
   * - **threat**: threat intelligence address book, which contains one or more malicious IP addresses or domain names.
   * 
   * - **backsrc**: back-to-origin address book, which contains the back-to-origin addresses of one or more Anti-DDoS or WAF instances.
   * 
   * @example
   * ip
   */
  sourceGroupType?: string;
  /**
   * @remarks
   * The type of the source address in the access control policy. Valid values:
   * 
   * - **net**: source CIDR block.
   * - **group**: source address book.
   * - **location**: source location.
   * 
   * @example
   * group
   */
  sourceType?: string;
  /**
   * @remarks
   * The quota consumed by the access control policy, which is the sum of the quota consumed by each policy.
   * Quota consumed by a single policy = Number of source addresses (number of CIDR blocks or locations) × Number of destination addresses (number of CIDR blocks, locations, or domain names) × Number of port ranges × Number of applications.
   * 
   * @example
   * 10
   */
  spreadCnt?: number;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1730318400
   */
  startTime?: number;
  /**
   * @remarks
   * The list of ECS tags.
   */
  tagList?: DescribeAclCheckResponseBodyCheckRecordAclsAclTagList[];
  /**
   * @remarks
   * The relationship between multiple ECS tags. Valid values:
   * 
   * - **and**: The logical AND relation. The public IP addresses of Elastic Compute Service (ECS) instances that match all specified tags are added to the address book.
   * 
   * - **or**: The logical OR relation. The public IP addresses of Elastic Compute Service (ECS) instances that match any of the specified tags are added to the address book.
   * 
   * @example
   * or
   */
  tagRelation?: string;
  /**
   * @remarks
   * The instance ID of the VPC border firewall.
   * 
   * @example
   * vfw-925514970c2c4bcab222
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      addressList: 'AddressList',
      addressListCount: 'AddressListCount',
      addresses: 'Addresses',
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
      applicationNameList: 'ApplicationNameList',
      autoAddTagEcs: 'AutoAddTagEcs',
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
      groupName: 'GroupName',
      groupType: 'GroupType',
      groupUuid: 'GroupUuid',
      hitLastTime: 'HitLastTime',
      hitTimes: 'HitTimes',
      ipVersion: 'IpVersion',
      modifyTime: 'ModifyTime',
      natGatewayId: 'NatGatewayId',
      order: 'Order',
      proto: 'Proto',
      referenceCount: 'ReferenceCount',
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
      tagList: 'TagList',
      tagRelation: 'TagRelation',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      aclUuid: 'string',
      addressList: { 'type': 'array', 'itemType': 'string' },
      addressListCount: 'number',
      addresses: { 'type': 'array', 'itemType': DescribeAclCheckResponseBodyCheckRecordAclsAclAddresses },
      applicationId: 'string',
      applicationName: 'string',
      applicationNameList: { 'type': 'array', 'itemType': 'string' },
      autoAddTagEcs: 'number',
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
      domainResolveType: 'number',
      endTime: 'number',
      groupName: 'string',
      groupType: 'string',
      groupUuid: 'string',
      hitLastTime: 'number',
      hitTimes: 'number',
      ipVersion: 'number',
      modifyTime: 'number',
      natGatewayId: 'string',
      order: 'number',
      proto: 'string',
      referenceCount: 'number',
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
      tagList: { 'type': 'array', 'itemType': DescribeAclCheckResponseBodyCheckRecordAclsAclTagList },
      tagRelation: 'string',
      vpcFirewallId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addressList)) {
      $dara.Model.validateArray(this.addressList);
    }
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
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
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclCheckResponseBodyCheckRecordAclsRecommendOptionsRecommendContentAddresses extends $dara.Model {
  /**
   * @remarks
   * The address in the address book.
   * 
   * @example
   * 1.1.1.1/32
   */
  address?: string;
  /**
   * @remarks
   * The description of the address.
   * 
   * @example
   * test
   */
  note?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      note: 'Note',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      note: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclCheckResponseBodyCheckRecordAclsRecommendOptionsRecommendContent extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on traffic in an access control policy. Valid values:
   * - accept: Allows the traffic.
   * - drop: Denies the traffic.
   * - log: Monitors the traffic.
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The address book.
   */
  addresses?: DescribeAclCheckResponseBodyCheckRecordAclsRecommendOptionsRecommendContentAddresses[];
  /**
   * @remarks
   * The list of application types supported by the access control policy.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * rule
   */
  description?: string;
  /**
   * @remarks
   * The destination port for traffic in the access control policy. Valid values:
   * 
   * - If the protocol type is ICMP, DestPort is left empty.
   * 
   * 
   * > When the protocol type is ICMP, access control on destination ports is not supported.
   * 
   * - If the protocol type is TCP, UDP, or ANY, and the destination port type (DestPortType) is group, DestPort is left empty.
   * 
   * 
   * > If you set the destination port type to group (destination port address book), you do not need to specify a destination port number. All ports that you want the access control policy to manage are included in the destination port address book.
   * 
   * - If the protocol type is TCP, UDP, or ANY, and the destination port type (DestPortType) is port, DestPort is the destination port number.
   * 
   * @example
   * 80
   */
  destPort?: string;
  /**
   * @remarks
   * The name of the destination port address book for traffic in the access control policy.
   * 
   * 
   * > If DestPortType is set to group, you must specify the name of the destination port address book.
   * 
   * @example
   * my_port_group
   */
  destPortGroup?: string;
  /**
   * @remarks
   * The type of the destination port for traffic in the access control policy. Valid values:
   * 
   * - port: Port.
   * - group: Port address book.
   * 
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @remarks
   * The destination address in the access control policy. Valid values:
   * 
   * If DestinationType is set to net, Destination is the destination CIDR block.
   * Example: 1.2.XX.XX/24
   * 
   * If DestinationType is set to group, Destination is the name of the destination address book.
   * Example: db_group
   * 
   * If DestinationType is set to domain, Destination is the destination domain name.
   * Example: *.aliyuncs.com
   * 
   * If DestinationType is set to location, Destination is the destination region.
   * Example: ["BJ11", "ZB"]
   * 
   * @example
   * 1.2.2.2/32
   */
  destination?: string;
  /**
   * @remarks
   * The type of the destination address in the access control policy. Valid values:
   * 
   * - net: Destination CIDR block.
   * - group: Destination address book.
   * 
   * - domain: Destination domain name.
   * 
   * - location: Destination region.
   * 
   * @example
   * net
   */
  destinationType?: string;
  /**
   * @remarks
   * The priority of the access control policy. The priority value starts from 1 and increases sequentially. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The protocol type of traffic in an access control policy. Valid values:
   * 
   * - ANY (any protocol)
   * - TCP
   * - UDP
   * - ICMP
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * The status of the access control policy. By default, a policy is enabled after it is created. Valid values:
   * 
   * - true: Enables the access control policy.
   * - false: Disables the access control policy.
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The source address in the access control policy. Valid values:
   * 
   * If SourceType is set to net, Source is the source CIDR block.
   * Example: 1.1.XX.XX/24
   * 
   * If SourceType is set to group, Source is the name of the source address book.
   * Example: db_group
   * 
   * If SourceType is set to location, Source is the source region.
   * Example: ["BJ11", "ZB"]
   * 
   * @example
   * 1.1.1.1/32
   */
  source?: string;
  /**
   * @remarks
   * The type of the source address in the access control policy. Valid values:
   * 
   * - net: Source CIDR block.
   * - group: Source address book.
   * - location: Source region.
   * 
   * @example
   * net
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      addresses: 'Addresses',
      applicationNameList: 'ApplicationNameList',
      description: 'Description',
      destPort: 'DestPort',
      destPortGroup: 'DestPortGroup',
      destPortType: 'DestPortType',
      destination: 'Destination',
      destinationType: 'DestinationType',
      order: 'Order',
      proto: 'Proto',
      release: 'Release',
      source: 'Source',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      addresses: { 'type': 'array', 'itemType': DescribeAclCheckResponseBodyCheckRecordAclsRecommendOptionsRecommendContentAddresses },
      applicationNameList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      destPort: 'string',
      destPortGroup: 'string',
      destPortType: 'string',
      destination: 'string',
      destinationType: 'string',
      order: 'number',
      proto: 'string',
      release: 'string',
      source: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(Array.isArray(this.applicationNameList)) {
      $dara.Model.validateArray(this.applicationNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclCheckResponseBodyCheckRecordAclsRecommendOptions extends $dara.Model {
  /**
   * @remarks
   * The recommended action. Valid values:
   * 
   * - CreateRule: Creates a policy.
   * - DeleteRule: Deletes a policy.
   * - DisableRule: Disables a policy.
   * - ModifyRule: Modifies a policy.
   * - ModifyAddressGroup: Modifies an IP or domain name address book.
   * - ModifyPortGroup: Modifies a port address book.
   * 
   * @example
   * DisableRule
   */
  actionType?: string;
  /**
   * @remarks
   * The recommended content.
   */
  recommendContent?: DescribeAclCheckResponseBodyCheckRecordAclsRecommendOptionsRecommendContent;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      recommendContent: 'RecommendContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      recommendContent: DescribeAclCheckResponseBodyCheckRecordAclsRecommendOptionsRecommendContent,
    };
  }

  validate() {
    if(this.recommendContent && typeof (this.recommendContent as any).validate === 'function') {
      (this.recommendContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclCheckResponseBodyCheckRecordAcls extends $dara.Model {
  /**
   * @remarks
   * The access control policy check result.
   */
  acl?: DescribeAclCheckResponseBodyCheckRecordAclsAcl;
  /**
   * @remarks
   * The assessment details of the access control policy.
   * 
   * @example
   * No traffic hit policy.
   */
  aclAssessmentDetail?: string;
  /**
   * @remarks
   * The access control policy check status.
   * 
   * @example
   * Pending
   */
  aclStatus?: string;
  /**
   * @remarks
   * The action taken for rules that are being processed or have been processed.
   * 
   * 1. CreateRule: Creates a policy.
   * 2. DeleteRule: Deletes a policy.
   * 3. DisableRule: Disables a policy.
   * 4. ModifyRule: Modifies a policy.
   * 5. ModifyAddressGroup: Modifies an IP or domain name address book.
   * 6. ModifyPortGroup: Modifies a port address book.
   * 
   * @example
   * DisableRule
   */
  actionType?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * null
   */
  errorMessage?: string;
  /**
   * @remarks
   * The processing status. Valid values:
   * 
   * 1. Pending: unprocessed
   * 2. Success: processed successfully
   * 3. Processing: being processed
   * 4. Ignored: ignored
   * 5. Failed: processing failed
   * 6. PendingOrFailed: unprocessed or processing failed
   * 
   * @example
   * Pending
   */
  processStatus?: string;
  /**
   * @remarks
   * The recommended options.
   */
  recommendOptions?: DescribeAclCheckResponseBodyCheckRecordAclsRecommendOptions[];
  static names(): { [key: string]: string } {
    return {
      acl: 'Acl',
      aclAssessmentDetail: 'AclAssessmentDetail',
      aclStatus: 'AclStatus',
      actionType: 'ActionType',
      errorMessage: 'ErrorMessage',
      processStatus: 'ProcessStatus',
      recommendOptions: 'RecommendOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: DescribeAclCheckResponseBodyCheckRecordAclsAcl,
      aclAssessmentDetail: 'string',
      aclStatus: 'string',
      actionType: 'string',
      errorMessage: 'string',
      processStatus: 'string',
      recommendOptions: { 'type': 'array', 'itemType': DescribeAclCheckResponseBodyCheckRecordAclsRecommendOptions },
    };
  }

  validate() {
    if(this.acl && typeof (this.acl as any).validate === 'function') {
      (this.acl as any).validate();
    }
    if(Array.isArray(this.recommendOptions)) {
      $dara.Model.validateArray(this.recommendOptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclCheckResponseBodyCheckRecord extends $dara.Model {
  /**
   * @remarks
   * The total number of access control policies at the time of the check.
   * 
   * @example
   * 10
   */
  aclTotalCount?: number;
  /**
   * @remarks
   * The list of access control policy check results.
   */
  acls?: DescribeAclCheckResponseBodyCheckRecordAcls[];
  /**
   * @remarks
   * The name of the access control policy check.
   * 
   * @example
   * PolicyHitCountZero
   */
  checkName?: string;
  /**
   * @remarks
   * The description of the access control policy check item.
   * 
   * @example
   * Due to business offline or other reasons, the number of hits of the object policy in a period of time is 0.
   */
  description?: string;
  /**
   * @remarks
   * The timestamp of the last check. Unit: seconds.
   * 
   * @example
   * 1724982259
   */
  lastCheckTime?: string;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * High
   */
  level?: string;
  /**
   * @remarks
   * The assessment details of the access control policy check.
   * 
   * @example
   * It is recommended to remove the invalid policy, while helping to save the specification.
   */
  recordAssessmentDetail?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * task-c92d4544ef7b6a42
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      aclTotalCount: 'AclTotalCount',
      acls: 'Acls',
      checkName: 'CheckName',
      description: 'Description',
      lastCheckTime: 'LastCheckTime',
      level: 'Level',
      recordAssessmentDetail: 'RecordAssessmentDetail',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclTotalCount: 'number',
      acls: { 'type': 'array', 'itemType': DescribeAclCheckResponseBodyCheckRecordAcls },
      checkName: 'string',
      description: 'string',
      lastCheckTime: 'string',
      level: 'string',
      recordAssessmentDetail: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.acls)) {
      $dara.Model.validateArray(this.acls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclCheckResponseBody extends $dara.Model {
  /**
   * @remarks
   * The check record.
   */
  checkRecord?: DescribeAclCheckResponseBodyCheckRecord;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25E655B0-CAED-53D4-8054-F983126****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkRecord: 'CheckRecord',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkRecord: DescribeAclCheckResponseBodyCheckRecord,
      requestId: 'string',
    };
  }

  validate() {
    if(this.checkRecord && typeof (this.checkRecord as any).validate === 'function') {
      (this.checkRecord as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

