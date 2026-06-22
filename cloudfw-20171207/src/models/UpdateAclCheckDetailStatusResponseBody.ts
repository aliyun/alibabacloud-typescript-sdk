// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAclCheckDetailStatusResponseBodyCheckRecordAclsAclTagList extends $dara.Model {
  /**
   * @remarks
   * The ECS tag key.
   * 
   * @example
   * produce
   */
  tagKey?: string;
  /**
   * @remarks
   * The ECS tag value.
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

export class UpdateAclCheckDetailStatusResponseBodyCheckRecordAclsAcl extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic in the access control policy. Valid values:
   * 
   * - **accept**: Allow.
   * - **drop**: Deny.
   * - **log**: Monitor.
   * 
   * @example
   * log
   */
  aclAction?: string;
  /**
   * @remarks
   * The unique ID of the access control policy.
   * 
   * @example
   * 1e8ed1b2-cebc-4b95-a9cc-0cb7ce2c0c2c
   */
  aclUuid?: string;
  /**
   * @remarks
   * The addresses in the address book.
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
   * The application ID of the traffic in the access control policy.
   * 
   * @example
   * HTTP
   */
  applicationId?: string;
  /**
   * @remarks
   * The application type supported by the access control policy. Valid values:
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
   * - **SSL_No_Cert**
   * - **SSL**
   * - **VNC**
   * 
   * > The supported application types depend on the protocol type (Proto). When Proto is set to TCP, ApplicationNameList supports all the preceding application types. When both ApplicationNameList and ApplicationName are specified, ApplicationNameList takes precedence.
   * 
   * @example
   * ANY
   */
  applicationName?: string;
  /**
   * @remarks
   * The application types supported by the access control policy.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * Indicates whether the public IP addresses of newly matched ECS instances (newly purchased ECS instances with configured tags or ECS instances with modified tags) are automatically added to the address book.
   * 
   * @example
   * 0
   */
  autoAddTagEcs?: number;
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
   * test_policy
   */
  description?: string;
  /**
   * @remarks
   * The destination port of traffic in the access control policy.
   * 
   * @example
   * 22/22
   */
  destPort?: string;
  /**
   * @remarks
   * The type of destination port in the access control policy. Valid values:
   * - **port**: Port.
   * - **group**: Port address book.
   * 
   * @example
   * port
   */
  destPortGroup?: string;
  /**
   * @remarks
   * The ports in the destination port address book.
   */
  destPortGroupPorts?: string[];
  /**
   * @remarks
   * The type of destination port in the access control policy. Valid values:
   * - **port**: Port.
   * - **group**: Port address book.
   * 
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @remarks
   * The destination address in the access control policy. Fuzzy queries are supported. The value varies depending on the value of DestinationType.
   * 
   * - If DestinationType is set to `net`, the destination address is a CIDR block. Example: 10.0.3.0/24.
   * 
   * - If DestinationType is set to `domain`, the destination address is a domain name. Example: aliyun.
   * 
   * - If DestinationType is set to `group`, the destination address is the name of an address book. Example: db_group.
   * 
   * - If DestinationType is set to `location`, the destination address is a region name. For specific region location codes, see AddControlPolicy. Example: ["BJ11", "ZB"].
   * 
   * > If you do not set this parameter, destination addresses of all types are queried.
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
   * The type of destination address book in the access control policy. Valid values:
   * 
   * - **ip**: IP address book, which contains one or more IP address ranges.
   * 
   * - **tag**: ECS tag-based address book, which contains the IP addresses of ECS instances with one or more specific tags.
   * 
   * - **domain**: Domain address book, which contains one or more domain addresses.
   * 
   * - **threat**: Threat intelligence address book, which contains one or more malicious IP addresses or domain names.
   * 
   * - **backsrc**: Back-to-origin address book, which contains the back-to-origin addresses of one or more Anti-DDoS or WAF instances.
   * 
   * @example
   * domain
   */
  destinationGroupType?: string;
  /**
   * @remarks
   * The type of destination address in the access control policy.
   * 
   * Valid values:
   * 
   * - **net**: Destination CIDR block.
   * - **group**: Destination address book.
   * - **domain**: Destination domain name.
   * 
   * @example
   * group
   */
  destinationType?: string;
  /**
   * @remarks
   * The direction of traffic controlled by the access control policy.
   * 
   * Valid values:
   * 
   * - **in**: Inbound traffic.
   * - **out**: Outbound traffic.
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
   * 192.168.0.1/32
   */
  dnsResult?: string;
  /**
   * @remarks
   * The timestamp of DNS resolution. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1579261141
   */
  dnsResultTime?: number;
  /**
   * @remarks
   * The domain name resolution method of the access control policy. Valid values:
   * 
   * * **FQDN**: FQDN-based resolution.
   * * **DNS**: DNS-based dynamic resolution.
   * * **FQDN_AND_DNS**: FQDN and DNS-based dynamic resolution.
   * 
   * @example
   * 0
   */
  domainResolveType?: number;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1752754426
   */
  endTime?: number;
  /**
   * @remarks
   * The name of the address book.
   * 
   * @example
   * subscribe
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the address book. Valid values:
   * 
   * - **ip**: IP address book.
   * 
   * - **domain**: Domain address book.
   * 
   * - **port**: Port address book.
   * 
   * - **tag**: ECS tag-based address book.
   * 
   * - **allCloud**: Cloud service address book.
   * 
   * - **threat**: Threat intelligence address book.
   * 
   * @example
   * port
   */
  groupType?: string;
  /**
   * @remarks
   * The unique ID of the address book.
   * 
   * > You can call [DescribeAddressBook](~~DescribeAddressBook~~) to query the ID.
   * 
   * @example
   * 5a96a798-9b73-47f7-831e-1d7aa3c987a9
   */
  groupUuid?: string;
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
   * The number of hits on the access control policy.
   * 
   * @example
   * 1
   */
  hitTimes?: number;
  /**
   * @remarks
   * The IP version of the asset protected by Cloud Firewall. Valid values:
   * 
   * - **4** (default): IPv4.
   * - **6**: IPv6.
   * 
   * @example
   * 4
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
   * The ID of the NAT gateway.
   * 
   * @example
   * ngw-gw85zno51npz7lgc04z89
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The priority of the access control policy.
   * 
   * Priority values start from 1 and increase sequentially. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The protocol type of traffic in the access control policy. Valid values:
   * 
   * - **TCP**
   * - **UDP**
   * - **ICMP**
   * - **ANY**: All protocol types.
   * > If you do not set this parameter, all protocol types are queried.
   * 
   * @example
   * ANY
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
   * The status of the access control policy. By default, the policy is enabled after it is created. Valid values:
   * 
   * - **true**: Enable the access control policy.
   * - **false**: Disable the access control policy.
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The recurrence days of the validity period of the access control policy.
   * - If RepeatType is set to `Permanent`, `None`, or `Daily`, RepeatDays is an empty collection.
   *   Example: []
   * - If RepeatType is set to Weekly, RepeatDays must not be empty.
   *   Example: [0, 6]
   * > When RepeatType is set to Weekly, RepeatDays must not contain duplicate values.
   * - If RepeatType is set to `Monthly`, RepeatDays must not be empty.
   *   Example: [1, 31]
   * > When RepeatType is set to Monthly, RepeatDays must not contain duplicate values.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The recurrence end time of the validity period of the policy. The value is in HH:mm format using the 24-hour clock, such as 23:30. The value must be on the hour or half hour, and must be at least 30 minutes later than the recurrence start time.
   * > When RepeatType is set to Permanent or None, RepeatEndTime is empty. When RepeatType is set to Daily, Weekly, or Monthly, RepeatEndTime is required.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The recurrence start time of the validity period of the policy. The value is in HH:mm format using the 24-hour clock, such as 08:00. The value must be on the hour or half hour, and must be at least 30 minutes earlier than the recurrence end time.
   * > When RepeatType is set to Permanent or None, RepeatStartTime is empty. When RepeatType is set to Daily, Weekly, or Monthly, RepeatStartTime is required.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type of the validity period of the access control policy. Valid values:
   * - **Permanent** (default): Always.
   * - **None**: One-time.
   * - **Daily**: Daily.
   * - **Weekly**: Weekly.
   * - **Monthly**: Monthly.
   * 
   * @example
   * None
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy.
   * 
   * Valid values:
   * 
   * - If **SourceType** is set to `net`, Source is the source CIDR block.
   * 
   *   Example: 10.2.4.0/24
   * 
   * - If **SourceType** is set to `group`, Source is the name of the source address book.
   * 
   *   Example: db_group
   * 
   * @example
   * 10.71.94.24
   */
  source?: string;
  /**
   * @remarks
   * The CIDR blocks in the source address book of the access control policy.
   */
  sourceGroupCidrs?: string[];
  /**
   * @remarks
   * The type of source address book in the access control policy. Valid values:
   * 
   * - **ip**: IP address book, which contains one or more IP address ranges.
   * 
   * - **tag**: ECS tag-based address book, which contains the IP addresses of ECS instances with one or more specific tags.
   * 
   * - **domain**: Domain address book, which contains one or more domain addresses.
   * 
   * - **threat**: Threat intelligence address book, which contains one or more malicious IP addresses or domain names.
   * 
   * - **backsrc**: Back-to-origin address book, which contains the back-to-origin addresses of one or more Anti-DDoS or WAF instances.
   * 
   * @example
   * ip
   */
  sourceGroupType?: string;
  /**
   * @remarks
   * The type of source address in the access control policy. Valid values:
   * 
   * - **net**: Source CIDR block.
   * - **group**: Source address book.
   * - **location**: Source region.
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The number of access control policy specifications consumed, which is the cumulative count of specifications consumed by each policy.
   * Specifications consumed by a single policy = Number of source CIDR blocks × Number of destination addresses (IP CIDR blocks, regions, or domain names) × Number of applications × Number of port ranges.
   * 
   * @example
   * 10
   */
  spreadCnt?: number;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1736130347
   */
  startTime?: number;
  /**
   * @remarks
   * The ECS tags.
   */
  tagList?: UpdateAclCheckDetailStatusResponseBodyCheckRecordAclsAclTagList[];
  /**
   * @remarks
   * The logical relationship among multiple ECS tags.
   * 
   * @example
   * and
   */
  tagRelation?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * cen-cw4z051hr8x53qniv5
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      addressList: 'AddressList',
      addressListCount: 'AddressListCount',
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
      tagList: { 'type': 'array', 'itemType': UpdateAclCheckDetailStatusResponseBodyCheckRecordAclsAclTagList },
      tagRelation: 'string',
      vpcFirewallId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addressList)) {
      $dara.Model.validateArray(this.addressList);
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

export class UpdateAclCheckDetailStatusResponseBodyCheckRecordAcls extends $dara.Model {
  /**
   * @remarks
   * The ACL check result.
   */
  acl?: UpdateAclCheckDetailStatusResponseBodyCheckRecordAclsAcl;
  /**
   * @remarks
   * The assessment details of this ACL policy.
   * 
   * @example
   * No traffic hit policy.
   */
  aclAssessmentDetail?: string;
  /**
   * @remarks
   * The ACL check status.
   * 
   * @example
   * configuring
   */
  aclStatus?: string;
  static names(): { [key: string]: string } {
    return {
      acl: 'Acl',
      aclAssessmentDetail: 'AclAssessmentDetail',
      aclStatus: 'AclStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: UpdateAclCheckDetailStatusResponseBodyCheckRecordAclsAcl,
      aclAssessmentDetail: 'string',
      aclStatus: 'string',
    };
  }

  validate() {
    if(this.acl && typeof (this.acl as any).validate === 'function') {
      (this.acl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAclCheckDetailStatusResponseBodyCheckRecord extends $dara.Model {
  /**
   * @remarks
   * The list of ACL check results.
   */
  acls?: UpdateAclCheckDetailStatusResponseBodyCheckRecordAcls[];
  /**
   * @remarks
   * The ACL check name. Valid values:
   * 
   * - **PolicyHitCountZero**: Policies with no traffic hits.
   * 
   * - **PolicySourceDestinationSame**: Invalid policies with the same source and destination.
   * 
   * - **PolicyDuplicate**: Duplicate redundant policies.
   * 
   * - **PolicyConflict**: Business conflict policies.
   * 
   * - **DefaultPolicyNotDeny**: Default policy is not Deny All allowlist mechanism.
   * 
   * - **PolicyPortHighRisk**: Policies that allow traffic through high-risk ports.
   * 
   * - **PolicyTooLoose**: Overly permissive control policies.
   * 
   * - **AddressBookIpSeparated**: Duplicate, overlapping, or scattered IP address books.
   * 
   * - **AddressBookPortSeparated**: Duplicate, overlapping, or scattered port address books.
   * 
   * - **AddressBookDomainValid**: Domain address book validity check.
   * 
   * @example
   * PolicyHitCountZero
   */
  checkName?: string;
  /**
   * @remarks
   * The rule description.
   * 
   * @example
   * dwd_mysql_lingwan_faxing_chat_config_di
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
   * The total number of policies.
   * 
   * @example
   * 1
   */
  policyTotalCount?: number;
  /**
   * @remarks
   * The assessment details of this ACL check record.
   * 
   * @example
   * Due to business offline or other reasons, the number of hits of the object policy in a period of time is 0.
   */
  recordAssessmentDetail?: string;
  /**
   * @remarks
   * The ACL check task ID.
   * 
   * @example
   * task-c92d4544ef7b6a42
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      acls: 'Acls',
      checkName: 'CheckName',
      description: 'Description',
      lastCheckTime: 'LastCheckTime',
      level: 'Level',
      policyTotalCount: 'PolicyTotalCount',
      recordAssessmentDetail: 'RecordAssessmentDetail',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acls: { 'type': 'array', 'itemType': UpdateAclCheckDetailStatusResponseBodyCheckRecordAcls },
      checkName: 'string',
      description: 'string',
      lastCheckTime: 'string',
      level: 'string',
      policyTotalCount: 'number',
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

export class UpdateAclCheckDetailStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ACL check record.
   */
  checkRecord?: UpdateAclCheckDetailStatusResponseBodyCheckRecord;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 850A84D6************00090125EEB1
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
      checkRecord: UpdateAclCheckDetailStatusResponseBodyCheckRecord,
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

