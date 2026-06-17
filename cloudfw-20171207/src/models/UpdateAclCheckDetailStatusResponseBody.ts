// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAclCheckDetailStatusResponseBodyCheckRecordAclsAclTagList extends $dara.Model {
  /**
   * @remarks
   * The key of the ECS tag.
   * 
   * @example
   * produce
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

export class UpdateAclCheckDetailStatusResponseBodyCheckRecordAclsAcl extends $dara.Model {
  /**
   * @remarks
   * The action performed on traffic that matches the policy. Valid values:
   * 
   * - **accept**: Allows the traffic.
   * 
   * - **drop**: Denies the traffic.
   * 
   * - **log**: Monitors the traffic.
   * 
   * @example
   * log
   */
  aclAction?: string;
  /**
   * @remarks
   * The UUID of the policy.
   * 
   * @example
   * 1e8ed1b2-cebc-4b95-a9cc-0cb7ce2c0c2c
   */
  aclUuid?: string;
  /**
   * @remarks
   * A list of addresses in the address book.
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
   * The application ID for traffic in the policy.
   * 
   * @example
   * HTTP
   */
  applicationId?: string;
  /**
   * @remarks
   * The application types supported by the access control policy. Valid values:
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
   * - **SSL_No_Cert**
   * 
   * - **SSL**
   * 
   * - **VNC**
   * 
   * > The available application types depend on the `Proto` value. When `Proto` is `TCP`, all the above application types are supported. If both `ApplicationName` and `ApplicationNameList` are specified, `ApplicationNameList` takes precedence.
   * 
   * @example
   * ANY
   */
  applicationName?: string;
  /**
   * @remarks
   * A list of application types that are supported by the policy.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * Indicates if public IP addresses from new ECS instances with matching tags are automatically added to the address book. This applies to both newly purchased instances and existing instances whose tags are updated to match.
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
   * The description of the policy.
   * 
   * @example
   * test_policy
   */
  description?: string;
  /**
   * @remarks
   * The destination port for traffic in the policy.
   * 
   * @example
   * 22/22
   */
  destPort?: string;
  /**
   * @remarks
   * The type of the destination port for traffic in the policy. Valid values:
   * 
   * - **port**: A single port or a port range.
   * 
   * - **group**: A port address book.
   * 
   * @example
   * port
   */
  destPortGroup?: string;
  /**
   * @remarks
   * A list of ports in the destination port address book.
   */
  destPortGroupPorts?: string[];
  /**
   * @remarks
   * The type of the destination port in the policy. Valid values:
   * 
   * - **port**: A single port or a port range.
   * 
   * - **group**: A port address book.
   * 
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @remarks
   * The destination address in the access control policy. This parameter supports fuzzy search. The value of this parameter varies based on the value of `DestinationType`.
   * 
   * - If `DestinationType` is set to`net`, the value of this parameter is a CIDR block. Example: 10.0.3.0/24.
   * 
   * - If `DestinationType` is set to`domain`, the value of this parameter is a domain name. Example: aliyun.
   * 
   * - If `DestinationType` is set to`group`, the value of this parameter is the name of an address book. Example: db_group.
   * 
   * - If `DestinationType` is set to`location`, the value of this parameter is a location. For more information about location codes, see AddControlPolicy. Example: ["BJ11", "ZB"].
   * 
   * > If this parameter is not specified, all types of destination addresses are queried.
   * 
   * @example
   * kms.cn-shanghai.aliyuncs.com
   */
  destination?: string;
  /**
   * @remarks
   * A list of CIDR blocks in the destination address book of the policy.
   */
  destinationGroupCidrs?: string[];
  /**
   * @remarks
   * The type of the destination address book in the policy. Valid values:
   * 
   * - **ip**: An address book containing IP addresses or CIDR blocks.
   * 
   * - **tag**: An address book containing the IP addresses of ECS instances that match specified tags.
   * 
   * - **domain**: An address book containing one or more domain names.
   * 
   * - **threat**: A threat intelligence address book containing malicious IP addresses or domain names.
   * 
   * - **backsrc**: A back-to-source address book containing the back-to-source addresses of Anti-DDoS or WAF instances.
   * 
   * @example
   * domain
   */
  destinationGroupType?: string;
  /**
   * @remarks
   * The type of the destination address in the policy.
   * 
   * Valid values:
   * 
   * - **net**: A destination CIDR block.
   * 
   * - **group**: A destination address book.
   * 
   * - **domain**: A destination domain name.
   * 
   * @example
   * group
   */
  destinationType?: string;
  /**
   * @remarks
   * The traffic direction for the access control policy.
   * 
   * Valid values:
   * 
   * - **in**: Inbound traffic.
   * 
   * - **out**: Outbound traffic.
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
   * 192.168.0.1/32
   */
  dnsResult?: string;
  /**
   * @remarks
   * The UNIX timestamp, in seconds, of the DNS resolution.
   * 
   * @example
   * 1579261141
   */
  dnsResultTime?: number;
  /**
   * @remarks
   * The domain name resolution method of the policy. Valid values:
   * 
   * - **FQDN**: FQDN-based resolution.
   * 
   * - **DNS**: Dynamic DNS-based resolution.
   * 
   * - **FQDN_AND_DNS**: A combination of FQDN and dynamic DNS-based resolution.
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
   * - **ip**: An IP address book.
   * 
   * - **domain**: A domain address book.
   * 
   * - **port**: A port address book.
   * 
   * - **tag**: An ECS tag-based address book.
   * 
   * - **allCloud**: A cloud service address book.
   * 
   * - **threat**: A threat intelligence address book.
   * 
   * @example
   * port
   */
  groupType?: string;
  /**
   * @remarks
   * The UUID of the address book.
   * 
   * > For more information, see [DescribeAddressBook](~~DescribeAddressBook~~).
   * 
   * @example
   * 5a96a798-9b73-47f7-831e-1d7aa3c987a9
   */
  groupUuid?: string;
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
   * The hit count of the policy.
   * 
   * @example
   * 1
   */
  hitTimes?: number;
  /**
   * @remarks
   * The IP version of the asset that is protected by Cloud Firewall. Valid values:
   * 
   * - **4**: IPv4 (default).
   * 
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
   * The ID of the NAT Gateway.
   * 
   * @example
   * ngw-gw85zno51npz7lgc04z89
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The priority of the access control policy.
   * 
   * The priority value starts from 1. A smaller value indicates a higher priority.
   * 
   * @example
   * desc
   */
  order?: number;
  /**
   * @remarks
   * The protocol type of traffic in the access control policy. Valid values:
   * 
   * - **TCP**
   * 
   * - **UDP**
   * 
   * - **ICMP**
   * 
   * - **ANY**: All protocol types.
   * 
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
   * Indicates whether the policy is enabled. Valid values:
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
   * An array of the days of a week or month on which the policy recurs.
   * 
   * - If `RepeatType` is set to`Permanent`,`None`, or`Daily`, `RepeatDays` is an empty array.
   *   Example: []
   * 
   * - If `RepeatType` is set to `Weekly`, `RepeatDays` cannot be empty.
   *   Example: [0, 6]
   * 
   * > If `RepeatType` is set to `Weekly`, `RepeatDays` cannot contain duplicate values.
   * 
   * - If `RepeatType` is set to`Monthly`, `RepeatDays` cannot be empty.
   *   Example: [1, 31]
   * 
   * > If `RepeatType` is set to `Monthly`, `RepeatDays` cannot contain duplicate values.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The recurrence end time in HH:mm format. The time must be on the hour or half-hour and at least 30 minutes after the start time.
   * 
   * > This parameter is returned only if `RepeatType` is `Daily`, `Weekly`, or `Monthly`.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The recurrence start time in HH:mm format. The time must be on the hour or half-hour and at least 30 minutes before the end time.
   * 
   * > This parameter is returned only if `RepeatType` is `Daily`, `Weekly`, or `Monthly`.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type for the validity period of the policy. Valid values:
   * 
   * - **Permanent**: Always.
   * 
   * - **None**: A single occurrence.
   * 
   * - **Daily**: Daily.
   * 
   * - **Weekly**: Weekly.
   * 
   * - **Monthly**: Monthly.
   * 
   * @example
   * None
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the policy.
   * 
   * Valid values:
   * 
   * - If **SourceType** is set to`net`, the value of `Source` is a source CIDR block.
   * 
   *   Example: 10.2.4.0/24
   * 
   * - If **SourceType** is set to`group`, the value of `Source` is the name of a source address book.
   * 
   *   Example: db_group
   * 
   * @example
   * 10.71.94.24
   */
  source?: string;
  /**
   * @remarks
   * A list of CIDR blocks in the source address book of the policy.
   */
  sourceGroupCidrs?: string[];
  /**
   * @remarks
   * The type of the source address book in the policy. Valid values:
   * 
   * - **ip**: An address book containing IP addresses or CIDR blocks.
   * 
   * - **tag**: An address book containing the IP addresses of ECS instances that match specified tags.
   * 
   * - **domain**: An address book containing one or more domain names.
   * 
   * - **threat**: A threat intelligence address book containing malicious IP addresses or domain names.
   * 
   * - **backsrc**: A back-to-source address book containing the back-to-source addresses of Anti-DDoS or WAF instances.
   * 
   * @example
   * ip
   */
  sourceGroupType?: string;
  /**
   * @remarks
   * The type of the source address in the policy. Valid values:
   * 
   * - **net**: A source CIDR block.
   * 
   * - **group**: A source address book.
   * 
   * - **location**: A source region.
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The number of rule entries that the policy consumes. The number of entries that a single policy consumes is calculated by using the following formula: Number of source CIDR blocks × Number of destination addresses (CIDR blocks, locations, or domain names) × Number of applications × Number of port ranges.
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
   * A list of ECS tags.
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
   * The assessment details of the policy.
   * 
   * @example
   * No traffic hit policy.
   */
  aclAssessmentDetail?: string;
  /**
   * @remarks
   * The status of the policy check.
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
   * A list of ACL check results.
   */
  acls?: UpdateAclCheckDetailStatusResponseBodyCheckRecordAcls[];
  /**
   * @remarks
   * The name of the ACL check. Valid values:
   * 
   * - **PolicyHitCountZero**: The policy has no traffic hits.
   * 
   * - **PolicySourceDestinationSame**: The source and destination are the same, rendering the policy invalid.
   * 
   * - **PolicyDuplicate**: The policy is duplicate or redundant.
   * 
   * - **PolicyConflict**: The policy conflicts with business requirements.
   * 
   * - **DefaultPolicyNotDeny**: The default policy is not a Deny All policy, which is recommended for whitelist mechanisms.
   * 
   * - **PolicyPortHighRisk**: The policy allows traffic on high-risk ports.
   * 
   * - **PolicyTooLoose**: The policy is overly permissive or too broad.
   * 
   * - **AddressBookIpSeparated**: The IP address books contain duplicate, overlapping, or scattered entries.
   * 
   * - **AddressBookPortSeparated**: The port address books contain duplicate, overlapping, or scattered entries.
   * 
   * - **AddressBookDomainValid**: The domain name address book contains invalid entries.
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
   * The UNIX timestamp, in seconds, of the last check.
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
   * The assessment details of the check.
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
   * The ID of the request.
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

