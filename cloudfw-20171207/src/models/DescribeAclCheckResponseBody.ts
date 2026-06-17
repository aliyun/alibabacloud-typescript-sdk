// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAclCheckResponseBodyCheckRecordAclsAclAddresses extends $dara.Model {
  /**
   * @remarks
   * The address in the address book.
   * 
   * @example
   * 192.0.XX.XX/32
   */
  address?: string;
  /**
   * @remarks
   * The remarks.
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
   * The action performed on traffic that matches the access control policy. Valid values:
   * 
   * - **accept**: allow
   * 
   * - **drop**: deny
   * 
   * - **log**: monitor
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
   * The addresses and their remarks.
   */
  addresses?: DescribeAclCheckResponseBodyCheckRecordAclsAclAddresses[];
  /**
   * @remarks
   * The ID of the application that is used in the access control policy.
   * 
   * @example
   * plugin_idp4_ciam
   */
  applicationId?: string;
  /**
   * @remarks
   * The application type supported by the access control policy for the VPC firewall. We recommend that you use the ApplicationNameList parameter instead. Valid values:
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
   * - **ANY**: All application types.
   * 
   * @example
   * ANY
   */
  applicationName?: string;
  /**
   * @remarks
   * The application types that are supported by the access control policy. Valid values:
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
   * - **ANY** (indicates all application types)
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * Indicates whether to automatically add the public IP addresses of new ECS instances that match the tags to the address book. New ECS instances include newly purchased instances with the specified tags and existing instances whose tags are modified to match.
   * 
   * @example
   * 0
   */
  autoAddTagEcs?: number;
  /**
   * @remarks
   * The time when the policy was created, provided as a UNIX timestamp in seconds.
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
   * The destination port that is used in the access control policy.
   * 
   * @example
   * 80/80
   */
  destPort?: string;
  /**
   * @remarks
   * The name of the destination port address book.
   * 
   * - **port**: Port
   * 
   * - **group**: Port address book
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
   * The destination address in the access control policy. The value of this parameter varies based on the value of DestinationType.
   * 
   * - If the value of DestinationType is`net`, the value of this parameter is a CIDR block. Example: 10.0.3.0/24.
   * 
   * - If the value of DestinationType is`domain`, the value of this parameter is a domain name. Example: aliyun.
   * 
   * - If the value of DestinationType is`group`, the value of this parameter is the name of an address book. Example: db_group.
   * 
   * - If the value of DestinationType is`location`, the value of this parameter is a location. For more information about the location codes, see AddControlPolicy. Example: ["BJ11", "ZB"].
   * 
   * > If this parameter is omitted, all types of destination addresses are retrieved.
   * 
   * @example
   * kms.cn-shanghai.aliyuncs.com
   */
  destination?: string;
  /**
   * @remarks
   * The CIDR blocks in the destination address book.
   */
  destinationGroupCidrs?: string[];
  /**
   * @remarks
   * The type of the destination address book in the access control policy. Valid values:
   * 
   * - **ip**: an IP address book, which contains one or more CIDR blocks.
   * 
   * - **tag**: an ECS tag-based address book, which contains the public IP addresses of ECS instances that have specific tags.
   * 
   * - **domain**: a domain name address book, which contains one or more domain names.
   * 
   * - **threat**: a threat intelligence address book, which contains one or more malicious IP addresses or domain names.
   * 
   * - **backsrc**: a back-to-source address book, which contains the back-to-source IP addresses of one or more Anti-DDoS or WAF instances.
   * 
   * @example
   * domain
   */
  destinationGroupType?: string;
  /**
   * @remarks
   * The type of the destination address in the access control policy. Valid values:
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
   * domain
   */
  destinationType?: string;
  /**
   * @remarks
   * The direction of internet traffic. Valid values:
   * 
   * - **in**: inbound traffic
   * 
   * - **out**: outbound traffic
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The result of the DNS resolution.
   * 
   * @example
   * 192.0.XX.XX
   */
  dnsResult?: string;
  /**
   * @remarks
   * The time of the DNS resolution, provided as a UNIX timestamp in seconds.
   * 
   * @example
   * 1579261141
   */
  dnsResultTime?: number;
  /**
   * @remarks
   * The DNS resolution method of the domain name in the access control policy. Valid values:
   * 
   * - **0**: FQDN-based resolution
   * 
   * - **1**: DNS-based dynamic resolution
   * 
   * - **2**: FQDN-based and DNS-based dynamic resolution
   * 
   * @example
   * FQDN
   */
  domainResolveType?: number;
  /**
   * @remarks
   * The end time of the policy validity period. This is a UNIX timestamp, accurate to the second. The time must be on the hour or half-hour and must be at least 30 minutes later than the start time.
   * 
   * > This parameter is empty if RepeatType is set to Permanent. It is required if RepeatType is set to None, Daily, Weekly, or Monthly.
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
   * - **ip**: IP address book
   * 
   * - **domain**: domain address book
   * 
   * - **port**: port address book
   * 
   * - **tag**: ECS tag-based address book
   * 
   * - **allCloud**: cloud service address book
   * 
   * - **threat**: threat intelligence address book
   * 
   * @example
   * ip
   */
  groupType?: string;
  /**
   * @remarks
   * The unique ID of the address book.
   * 
   * This ID is required for other operations, such as deleting the address book. You can obtain the ID by calling the [DescribeAddressBook](https://help.aliyun.com/document_detail/138869.html) operation.
   * 
   * @example
   * b91d86c3-2b52-4534-aae9-8d0339b12a48
   */
  groupUuid?: string;
  /**
   * @remarks
   * The time when the policy was last hit, provided as a UNIX timestamp in seconds.
   * 
   * @example
   * 1579261141
   */
  hitLastTime?: number;
  /**
   * @remarks
   * The hit count of the access control policy.
   * 
   * @example
   * 1
   */
  hitTimes?: number;
  /**
   * @remarks
   * The IP version. Valid values:
   * 
   * - **4**: IPv4
   * 
   * - **6**: IPv6
   * 
   * @example
   * 4
   */
  ipVersion?: number;
  /**
   * @remarks
   * The time when the policy was last modified, provided as a UNIX timestamp in seconds.
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
   * - **TCP**
   * 
   * - **UDP**
   * 
   * - **ICMP**
   * 
   * - **ANY**: All protocol types
   * 
   * >
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * The number of policies that reference this address book.
   * 
   * @example
   * 1
   */
  referenceCount?: number;
  /**
   * @remarks
   * The status of the access control policy. Valid values:
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
   * The days of a week or month on which the policy recurs.
   * 
   * > If RepeatType is set to Weekly, the valid values are 0 to 6. The week starts on Sunday.
   * > If RepeatType is set to Monthly, the valid values are 1 to 31.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The time when the policy stops to take effect. Example: 23:30. The time must be on the hour or half-hour and must be at least 30 minutes later than the recurrence start time.
   * 
   * > This parameter is returned empty if RepeatType is set to Permanent or None. This parameter is required if RepeatType is set to Daily, Weekly, or Monthly. The time is in the HH:mm format. Examples: 08:00 and 23:30.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The time when the policy starts to take effect. Example: 08:00. The time must be on the hour or half-hour and must be at least 30 minutes earlier than the recurrence end time.
   * 
   * > This parameter is returned empty if RepeatType is set to Permanent or None. This parameter is required if RepeatType is set to Daily, Weekly, or Monthly. The time is in the HH:mm format. Examples: 08:00 and 23:30.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type of the policy. Valid values:
   * 
   * - **Permanent** (default): The policy is always valid.
   * 
   * - **None**: The policy is valid only once.
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
   * The source address in the access control policy. The value of this parameter varies based on the value of SourceType.
   * 
   * - If **SourceType** is set to`net`, the value of this parameter is a CIDR block. Example: 192.0.XX.XX/24.
   * 
   * - If **SourceType** is set to`group`, the value of this parameter is the name of a source address book. Example: db_group.
   * 
   * - If **SourceType** is set to`location`, the value of this parameter is a location. For more information, see [AddControlPolicy](https://help.aliyun.com/document_detail/138867.html). Example: ["BJ11", "ZB"].
   * 
   * @example
   * 172.28.7.167
   */
  source?: string;
  /**
   * @remarks
   * The CIDR blocks in the source address book.
   */
  sourceGroupCidrs?: string[];
  /**
   * @remarks
   * The type of the source address book in the access control policy. Valid values:
   * 
   * - **ip**: An address book that contains one or more IP addresses or CIDR blocks.
   * 
   * - **tag**: An address book that contains the public IP addresses of ECS instances with specific tags.
   * 
   * - **domain**: A domain name address book, which contains one or more domain names.
   * 
   * - **threat**: a threat intelligence address book, which contains one or more malicious IP addresses or domain names.
   * 
   * - **backsrc**: a back-to-source address book, which contains the back-to-source IP addresses of one or more Anti-DDoS or WAF instances.
   * 
   * @example
   * ip
   */
  sourceGroupType?: string;
  /**
   * @remarks
   * The type of the source address in the access control policy. Valid values:
   * 
   * - **net**: a source CIDR block
   * 
   * - **group**: a source address book
   * 
   * - **location**: a source region
   * 
   * @example
   * group
   */
  sourceType?: string;
  /**
   * @remarks
   * The number of specification units that the policy consumes. The value is calculated by using the following formula: Number of source addresses × Number of destination addresses × Number of port ranges × Number of applications.
   * 
   * @example
   * 10
   */
  spreadCnt?: number;
  /**
   * @remarks
   * The start of the policy\\"s validity period, provided as a UNIX timestamp in seconds.
   * 
   * @example
   * 1730318400
   */
  startTime?: number;
  /**
   * @remarks
   * The ECS tags.
   */
  tagList?: DescribeAclCheckResponseBodyCheckRecordAclsAclTagList[];
  /**
   * @remarks
   * The logical relationship among multiple ECS tags. Valid values:
   * 
   * - **and**: An ECS instance must have all the specified tags.
   * 
   * - **or**: An ECS instance must have one of the specified tags.
   * 
   * @example
   * or
   */
  tagRelation?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
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
   * The assessment details of the access control policy.
   * 
   * @example
   * No traffic hit policy.
   */
  aclAssessmentDetail?: string;
  /**
   * @remarks
   * The status of the ACL check.
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
   * The total number of access control policies at the time of the check.
   * 
   * @example
   * 10
   */
  aclTotalCount?: number;
  /**
   * @remarks
   * The ACL check results.
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
   * The time of the last check, provided as a UNIX timestamp in seconds.
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

