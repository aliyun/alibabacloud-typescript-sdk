// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAclCheckDetailStatusResponseBodyCheckRecordAclsAclTagList extends $dara.Model {
  /**
   * @example
   * produce
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

export class UpdateAclCheckDetailStatusResponseBodyCheckRecordAclsAcl extends $dara.Model {
  /**
   * @example
   * log
   */
  aclAction?: string;
  /**
   * @example
   * 1e8ed1b2-cebc-4b95-a9cc-0cb7ce2c0c2c
   */
  aclUuid?: string;
  addressList?: string[];
  /**
   * @example
   * 1
   */
  addressListCount?: number;
  /**
   * @example
   * HTTP
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
   * 22/22
   */
  destPort?: string;
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
   * group
   */
  destinationType?: string;
  /**
   * @example
   * in
   */
  direction?: string;
  /**
   * @example
   * 192.168.0.1/32
   */
  dnsResult?: string;
  /**
   * @example
   * 1579261141
   */
  dnsResultTime?: number;
  /**
   * @example
   * 0
   */
  domainResolveType?: number;
  /**
   * @example
   * 1752754426
   */
  endTime?: number;
  /**
   * @example
   * subscribe
   */
  groupName?: string;
  /**
   * @example
   * port
   */
  groupType?: string;
  /**
   * @example
   * 5a96a798-9b73-47f7-831e-1d7aa3c987a9
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
   * ngw-gw85zno51npz7lgc04z89
   */
  natGatewayId?: string;
  /**
   * @example
   * desc
   */
  order?: number;
  /**
   * @example
   * ANY
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
   * None
   */
  repeatType?: string;
  /**
   * @example
   * 10.71.94.24
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
   * net
   */
  sourceType?: string;
  /**
   * @example
   * 10
   */
  spreadCnt?: number;
  /**
   * @example
   * 1736130347
   */
  startTime?: number;
  tagList?: UpdateAclCheckDetailStatusResponseBodyCheckRecordAclsAclTagList[];
  /**
   * @example
   * and
   */
  tagRelation?: string;
  /**
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
  acl?: UpdateAclCheckDetailStatusResponseBodyCheckRecordAclsAcl;
  aclAssessmentDetail?: string;
  /**
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
  acls?: UpdateAclCheckDetailStatusResponseBodyCheckRecordAcls[];
  /**
   * @example
   * PolicyHitCountZero
   */
  checkName?: string;
  /**
   * @example
   * dwd_mysql_lingwan_faxing_chat_config_di
   */
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
  /**
   * @example
   * 1
   */
  policyTotalCount?: number;
  recordAssessmentDetail?: string;
  /**
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
  checkRecord?: UpdateAclCheckDetailStatusResponseBodyCheckRecord;
  /**
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

