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
   * The ECS tag key.
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
   * The unique ID of the access control policy.
   * 
   * @example
   * 1e8ed1b2-cebc-4b95-a9cc-0cb7ce2c0c2c
   */
  aclUuid?: string;
  /**
   * @remarks
   * The list of addresses in the address book.
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
   * The ID of the application for the traffic in the access control policy.
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
   * > The valid values of the application type depend on the protocol type specified by Proto. If Proto is set to TCP, ApplicationNameList supports all the preceding application types. If both ApplicationNameList and ApplicationName are specified, ApplicationNameList takes precedence.
   * 
   * @example
   * ANY
   */
  applicationName?: string;
  /**
   * @remarks
   * The list of application types supported by the access control policy.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * Specifies whether to automatically add the public IP addresses of newly tagged ECS instances to the address book. Newly tagged ECS instances include newly purchased ECS instances with tags configured and ECS instances with modified tags.
   * 
   * @example
   * 0
   */
  autoAddTagEcs?: number;
  /**
   * @remarks
   * The time when the policy was created. The value is a UNIX timestamp measured in seconds.
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
   * 22/22
   */
  destPort?: string;
  /**
   * @remarks
   * The type of the destination port in the access control policy. Valid values:
   * - **port**: port
   * - **group**: port address book
   * 
   * @example
   * port
   */
  destPortGroup?: string;
  /**
   * @remarks
   * The list of ports in the destination port address book.
   */
  destPortGroupPorts?: string[];
  /**
   * @remarks
   * The type of the destination port in the access control policy. Valid values:
   * - **port**: port
   * - **group**: port address book
   * 
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @remarks
   * The destination address in the access control policy. Fuzzy match is supported. The value of this parameter varies based on the destination type (DestinationType).
   * - If DestinationType is set to `net`, the value is a CIDR block. Example: 10.0.3.0/24.
   * - If DestinationType is set to `domain`, the value is a domain name. Example: aliyun.
   * - If DestinationType is set to `group`, the value is the name of an address book. Example: db_group.
   * - If DestinationType is set to `location`, the value is an area name. For more information about the area positional encoding, see AddControlPolicy. Example: ["BJ11", "ZB"].
   * 
   * > If the Settings for this parameter are not specified, all types of destination addresses are queried.
   * 
   * @example
   * kms.cn-shanghai.aliyuncs.com
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
   * - **ip**: IP address book that contains one or more CIDR blocks
   * - **tag**: ECS tag-based address book that contains the IP addresses of one or more ECS tags
   * - **domain**: domain name address book that contains one or more domain names
   * - **threat**: threat intelligence address book that contains one or more malicious IP addresses or domain names
   * - **backsrc**: back-to-origin address book that contains the back-to-origin addresses of one or more Anti-DDoS or WAF instances
   * 
   * @example
   * domain
   */
  destinationGroupType?: string;
  /**
   * @remarks
   * The type of the destination address in the access control policy. Valid values:
   * - **net**: destination CIDR block
   * - **group**: destination address book
   * - **domain**: destination domain name
   * 
   * @example
   * group
   */
  destinationType?: string;
  /**
   * @remarks
   * The traffic direction controlled by the access control policy. Valid values:
   * - **in**: inbound traffic
   * - **out**: outbound traffic
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
   * The timestamp of the DNS resolution. The value is a UNIX timestamp measured in seconds.
   * 
   * @example
   * 1579261141
   */
  dnsResultTime?: number;
  /**
   * @remarks
   * The domain name resolution mode of the access control policy. Valid values:
   * - **FQDN**: FQDN-based resolution
   * - **DNS**: DNS-based dynamic resolution
   * - **FQDN_AND_DNS**: FQDN- and DNS-based dynamic resolution
   * 
   * @example
   * 0
   */
  domainResolveType?: number;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp measured in seconds.
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
   * - **ip**: IP address book
   * - **domain**: domain name address book
   * - **port**: port address book
   * - **tag**: ECS tag-based address book
   * - **allCloud**: cloud service address book
   * - **threat**: threat intelligence address book
   * 
   * @example
   * port
   */
  groupType?: string;
  /**
   * @remarks
   * The unique ID of the address book.
   * 
   * > Value source: [List address books](~~DescribeAddressBook~~).
   * 
   * @example
   * 5a96a798-9b73-47f7-831e-1d7aa3c987a9
   */
  groupUuid?: string;
  /**
   * @remarks
   * The timestamp of the latest time of hits. The value is in the UNIX timestamp format measured in seconds.
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
   * The IP version of the asset protected by Cloud Firewall. Valid values:
   * - **4**: IPv4 (default).
   * - **6**: IPv6.
   * 
   * @example
   * 4
   */
  ipVersion?: number;
  /**
   * @remarks
   * The time when the policy was last modified. The value is a UNIX timestamp measured in seconds.
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
   * The priority starts from 1 and increases in ascending order. A smaller priority number indicates a higher priority.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The protocol type of the traffic in the access control policy. Valid values:
   * - **TCP**
   * - **UDP**
   * - **ICMP**
   * - **ANY**: all protocol types
   * > If this parameter is not specified, all protocol types are queried.
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
   * The status of the access control policy. By default, a policy is enabled after it is created. Valid values:
   * - **true**: The policy is enabled.
   * - **false**: The policy is disabled.
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The set of recurrence days for the Policy Validity Period of the access control policy.
   * - If RepeatType is set to `Permanent`, `None`, or `Daily`, RepeatDays is an empty set. Example: [].
   * - If RepeatType is set to `Weekly`, RepeatDays cannot be empty. Example: [0, 6].
   * > If the Settings for RepeatType are `Weekly`, the values in RepeatDays cannot be duplicate.
   * - If RepeatType is set to `Monthly`, RepeatDays cannot be empty. Example: [1, 31].
   * > If the Settings for RepeatType are `Monthly`, the values in RepeatDays cannot be duplicate.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The recurrence end time of the policy validity period. The time must be in the 24-hour HH:mm format, such as 23:30. It must be on the hour or half hour, and at least 30 minutes later than the recurrence start time.
   * > If RepeatType is set to `Permanent` or `None`, RepeatEndTime is empty. If RepeatType is set to `Daily`, `Weekly`, or `Monthly`, RepeatEndTime must be specified.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The recurrence start time of the policy validity period. The time must be in the 24-hour HH:mm format, such as 08:00. It must be on the hour or half hour, and at least 30 minutes earlier than the recurrence end time.
   * > If RepeatType is set to `Permanent` or `None`, RepeatStartTime is empty. If RepeatType is set to `Daily`, `Weekly`, or `Monthly`, RepeatStartTime must be specified.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type of the Policy Validity Period for the access control policy. Valid values:
   * - **Permanent**: always (default)
   * - **None**: specified single time
   * - **Daily**: every day
   * - **Weekly**: every week
   * - **Monthly**: every month
   * 
   * @example
   * None
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy. Valid values:
   * - If **SourceType** is set to `net`, the value is a source CIDR block. Example: 10.2.4.0/24.
   * - If **SourceType** is set to `group`, the value is the name of a source address book. Example: db_group.
   * 
   * @example
   * 10.71.94.24
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
   * - **ip**: IP address book that contains one or more CIDR blocks
   * - **tag**: ECS tag-based address book that contains the IP addresses of one or more ECS tags
   * - **domain**: domain name address book that contains one or more domain names
   * - **threat**: threat intelligence address book that contains one or more malicious IP addresses or domain names
   * - **backsrc**: back-to-origin address book that contains the back-to-origin addresses of one or more Anti-DDoS or WAF instances
   * 
   * @example
   * ip
   */
  sourceGroupType?: string;
  /**
   * @remarks
   * The type of the source address in the access control policy. Valid values:
   * - **net**: source CIDR block
   * - **group**: source address book
   * - **location**: source region
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The number of access control policy quotas consumed. This value is the sum of the quotas consumed by each policy.
   * The number of quotas consumed by a single policy = Number of source CIDR blocks × Number of destination addresses (number of CIDR blocks, regions, or domain names) × Number of applications × Number of port ranges.
   * 
   * @example
   * 10
   */
  spreadCnt?: number;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp measured in seconds.
   * 
   * @example
   * 1736130347
   */
  startTime?: number;
  /**
   * @remarks
   * The list of ECS tags.
   */
  tagList?: UpdateAclCheckDetailStatusResponseBodyCheckRecordAclsAclTagList[];
  /**
   * @remarks
   * The relationship between multiple ECS tags.
   * 
   * @example
   * and
   */
  tagRelation?: string;
  /**
   * @remarks
   * The instance ID of the border virtual private cloud (VPC) firewalls.
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
   * The assessment details of the ACL policy.
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
   * The name of the ACL check. Valid values:
   * - **PolicyHitCountZero**: policies with no traffic hits
   * - **PolicySourceDestinationSame**: Invalid policy with the same source and destination
   * - **PolicyDuplicate**: Duplicate or redundant policy
   * - **PolicyConflict**: Policy that conflicts with business
   * - **DefaultPolicyNotDeny**: default policy that does not use the Deny All whitelist mechanism
   * - **PolicyPortHighRisk**: policies that allow traffic on high-risk ports
   * - **PolicyTooLoose**: overly loose control policy
   * - **AddressBookIpSeparated**: duplicate, overlapping, or scattered IP address books
   * - **AddressBookPortSeparated**: duplicate, overlapping, or scattered port address books
   * - **AddressBookDomainValid**: validity check for domain name address books
   * 
   * @example
   * PolicyHitCountZero
   */
  checkName?: string;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * dwd_mysql_lingwan_faxing_chat_config_di
   */
  description?: string;
  /**
   * @remarks
   * The timestamp of the last check. The value is a UNIX timestamp measured in seconds.
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
   * The assessment details of the ACL check record.
   * 
   * @example
   * Due to business offline or other reasons, the number of hits of the object policy in a period of time is 0.
   */
  recordAssessmentDetail?: string;
  /**
   * @remarks
   * The ID of the ACL check task.
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

