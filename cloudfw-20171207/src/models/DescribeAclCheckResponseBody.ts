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
   * The action that Cloud Firewall performs on the traffic in the access control policy. Valid values:
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
   * The unique ID of the access control policy.
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
   * The application types supported by the access control policies of VPC border firewalls. Use ApplicationNameList. Valid values:
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
   * - **ANY**: all application types.
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
   * The destination address in the access control policy. Fuzzy match is supported. The value varies based on the destination type (DestinationType).
   * 
   * - If DestinationType is set to `net`, the destination address is a CIDR block. Example: 10.0.3.0/24.
   * 
   * - If DestinationType is set to `domain`, the destination address is a domain name. Example: aliyun.
   * 
   * - If DestinationType is set to `group`, the destination address is the name of an address book. Example: db_group.
   * 
   * - If DestinationType is set to `location`, the destination address is an area name. For more information about area positional encoding, see AddControlPolicy. Example: ["BJ11", "ZB"].
   * 
   * > If you do not specify this parameter, destination addresses of all types are queried.
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
   * - **backsrc**: back-to-origin address book, which contains the back-to-origin IP addresses of one or more Anti-DDoS or WAF instances.
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
   * - **in**: access control for inbound traffic.
   * - **out**: access control for outbound traffic.
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
   * The timestamp of the DNS resolution. The value is a UNIX timestamp measured in seconds.
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
   * * **FQDN_AND_DNS**: FQDN- and DNS-based dynamic resolution.
   * 
   * @example
   * FQDN
   */
  domainResolveType?: number;
  /**
   * @remarks
   * The end time of the policy validity period for the access control policy. The value is a UNIX timestamp measured in seconds. The time must be on the hour or half-hour, and must be at least 30 minutes later than the start time.
   * > If RepeatType is set to Permanent, EndTime is empty. If RepeatType is set to None, Daily, Weekly, or Monthly, EndTime must be specified.
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
   * The unique ID of the address book.
   * 
   * To delete an address book for access control, you must provide the unique ID of the address book. You can call the [DescribeAddressBook](https://help.aliyun.com/document_detail/138869.html) operation to obtain the ID.
   * 
   * @example
   * b91d86c3-2b52-4534-aae9-8d0339b12a48
   */
  groupUuid?: string;
  /**
   * @remarks
   * The UNIX timestamp of the latest hit. The value is a UNIX timestamp measured in seconds.
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
   * ngw-2ze4w62zbdkwjmoqeokgl
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The priority of the access control policy.
   * 
   * The priority starts from 1 and increases in ascending order. A smaller value indicates a higher priority.
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
   * The recurrence days of the policy validity period for the access control policy.
   * > If RepeatType is set to Weekly, valid values are 0 to 6. A week starts on Sunday.
   * > If RepeatType is set to Monthly, valid values are 1 to 31.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The recurrence end time of the policy validity period for the access control policy. Example: 23:30. The time must be on the hour or half-hour, and must be at least 30 minutes later than the recurrence start time.
   * > If RepeatType is set to Permanent or None, RepeatEndTime is empty. If RepeatType is set to Daily, Weekly, or Monthly, RepeatEndTime must be specified.
   * > The time is in the HH:mm format (24-hour clock). Examples: 08:00 and 23:30.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The recurrence start time of the policy validity period for the access control policy. Example: 08:00. The time must be on the hour or half-hour, and must be at least 30 minutes earlier than the recurrence end time.
   * > If RepeatType is set to Permanent or None, RepeatStartTime is empty. If RepeatType is set to Daily, Weekly, or Monthly, RepeatStartTime must be specified.
   * > The time is in the HH:mm format (24-hour clock). Examples: 08:00 and 23:30.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type of the policy validity period for the access control policy. Valid values:
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
   * - If **SourceType** is set to `group`, the source address is the name of the source address book. Example: db_group.
   * - If **SourceType** is set to `location`, the source address is an area. For more information about area positional encoding, see [AddControlPolicy](https://help.aliyun.com/document_detail/138867.html). Example: ["BJ11", "ZB"].
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
   * - **backsrc**: back-to-origin address book, which contains the back-to-origin IP addresses of one or more Anti-DDoS or WAF instances.
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
   * The number of access control policy quotas consumed. This value is the sum of the quotas consumed by each policy.
   * Number of quotas consumed by a single policy = Number of source addresses (CIDR blocks or locations) × Number of destination addresses (CIDR blocks, locations, or domain names) × Number of port ranges × Number of applications.
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
   * The relationship between multiple ECS labels. Valid values:
   * 
   * - **and**: The logical AND relation is used. The public IP addresses of Elastic Compute Service (ECS) instances that match all specified labels are added to the address book.
   * 
   * - **or**: The logical OR relation is used. The public IP addresses of Elastic Compute Service (ECS) instances that match any of the specified labels are added to the address book.
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

export class DescribeAclCheckResponseBodyCheckRecordAcls extends $dara.Model {
  /**
   * @remarks
   * The ACL check result.
   */
  acl?: DescribeAclCheckResponseBodyCheckRecordAclsAcl;
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
   * Pending
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
      acl: DescribeAclCheckResponseBodyCheckRecordAclsAcl,
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

export class DescribeAclCheckResponseBodyCheckRecord extends $dara.Model {
  /**
   * @remarks
   * The total number of access control list (ACL) policies at the time of the check.
   * 
   * @example
   * 10
   */
  aclTotalCount?: number;
  /**
   * @remarks
   * The list of ACL check results.
   */
  acls?: DescribeAclCheckResponseBodyCheckRecordAcls[];
  /**
   * @remarks
   * The name of the ACL check.
   * 
   * @example
   * PolicyHitCountZero
   */
  checkName?: string;
  /**
   * @remarks
   * The description of the ACL check item.
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
   * The assessment details of the ACL check.
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

