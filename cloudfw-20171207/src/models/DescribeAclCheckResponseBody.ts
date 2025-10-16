// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAclCheckResponseBodyCheckRecordAclsAclAddresses extends $dara.Model {
  /**
   * @example
   * 192.0.XX.XX/32
   */
  address?: string;
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
   * @example
   * ss
   */
  tagKey?: string;
  /**
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
   * @example
   * log
   */
  aclAction?: string;
  /**
   * @example
   * 997b38e0-01fa-4db7-8d30-02ebf6fdb747
   */
  aclUuid?: string;
  addressList?: string[];
  /**
   * @example
   * 1
   */
  addressListCount?: number;
  addresses?: DescribeAclCheckResponseBodyCheckRecordAclsAclAddresses[];
  /**
   * @example
   * plugin_idp4_ciam
   */
  applicationId?: string;
  /**
   * @example
   * ANY
   */
  applicationName?: string;
  applicationNameList?: string[];
  /**
   * @example
   * 0
   */
  autoAddTagEcs?: number;
  /**
   * @example
   * 1761062400
   */
  createTime?: number;
  /**
   * @example
   * test_policy
   */
  description?: string;
  /**
   * @example
   * 80/80
   */
  destPort?: string;
  /**
   * @example
   * my_port_group
   */
  destPortGroup?: string;
  destPortGroupPorts?: string[];
  /**
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @example
   * kms.cn-shanghai.aliyuncs.com
   */
  destination?: string;
  destinationGroupCidrs?: string[];
  /**
   * @example
   * domain
   */
  destinationGroupType?: string;
  /**
   * @example
   * domain
   */
  destinationType?: string;
  /**
   * @example
   * out
   */
  direction?: string;
  /**
   * @example
   * 192.0.XX.XX
   */
  dnsResult?: string;
  /**
   * @example
   * 1579261141
   */
  dnsResultTime?: number;
  /**
   * @example
   * FQDN
   */
  domainResolveType?: number;
  /**
   * @example
   * 1758334822
   */
  endTime?: number;
  groupName?: string;
  /**
   * @example
   * ip
   */
  groupType?: string;
  /**
   * @example
   * b91d86c3-2b52-4534-aae9-8d0339b12a48
   */
  groupUuid?: string;
  /**
   * @example
   * 1579261141
   */
  hitLastTime?: number;
  /**
   * @example
   * 1
   */
  hitTimes?: number;
  /**
   * @example
   * 4
   */
  ipVersion?: number;
  /**
   * @example
   * 1761062400
   */
  modifyTime?: number;
  /**
   * @example
   * ngw-2ze4w62zbdkwjmoqeokgl
   */
  natGatewayId?: string;
  /**
   * @example
   * 1
   */
  order?: number;
  /**
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @example
   * 1
   */
  referenceCount?: number;
  /**
   * @example
   * true
   */
  release?: string;
  repeatDays?: number[];
  /**
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @example
   * 172.28.7.167
   */
  source?: string;
  sourceGroupCidrs?: string[];
  /**
   * @example
   * ip
   */
  sourceGroupType?: string;
  /**
   * @example
   * group
   */
  sourceType?: string;
  /**
   * @example
   * 10
   */
  spreadCnt?: number;
  /**
   * @example
   * 1730318400
   */
  startTime?: number;
  tagList?: DescribeAclCheckResponseBodyCheckRecordAclsAclTagList[];
  /**
   * @example
   * or
   */
  tagRelation?: string;
  /**
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
  acl?: DescribeAclCheckResponseBodyCheckRecordAclsAcl;
  aclAssessmentDetail?: string;
  /**
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
   * @example
   * 10
   */
  aclTotalCount?: number;
  acls?: DescribeAclCheckResponseBodyCheckRecordAcls[];
  /**
   * @example
   * PolicyHitCountZero
   */
  checkName?: string;
  description?: string;
  /**
   * @example
   * 1724982259
   */
  lastCheckTime?: string;
  /**
   * @example
   * High
   */
  level?: string;
  recordAssessmentDetail?: string;
  /**
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
  checkRecord?: DescribeAclCheckResponseBodyCheckRecord;
  /**
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

