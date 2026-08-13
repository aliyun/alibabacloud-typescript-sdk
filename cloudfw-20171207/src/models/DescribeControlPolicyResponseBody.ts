// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeControlPolicyResponseBodyPolicys extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic in the access control policy. Valid values:
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
   * The application ID of the traffic in the access control policy.
   * 
   * @example
   * 10***
   */
  applicationId?: string;
  /**
   * @remarks
   * The application type supported by the access control policy. We recommend that you use ApplicationNameList. Valid values:
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
   * The time when the policy was created. The value is a UNIX timestamp in seconds, which is the number of seconds that have elapsed since January 1, 1970 (UTC).
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
   * Allow access to office network segment
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
   * The list of ports in the destination port address book.
   */
  destPortGroupPorts?: string[];
  /**
   * @remarks
   * The type of the destination port in the access control policy. Valid values:
   * 
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @remarks
   * The destination address in the access control policy. The value varies depending on the DestinationType (destination type). Valid values:
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
   * @example
   * ip
   */
  destinationGroupType?: string;
  /**
   * @remarks
   * The type of the destination address in the access control policy. Valid values:
   * 
   * @example
   * net
   */
  destinationType?: string;
  /**
   * @remarks
   * The traffic direction of the access control policy. Valid values:
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
   * The domain name resolution method of the access control policy. Valid values:
   * 
   * @example
   * FQDN
   */
  domainResolveType?: string;
  /**
   * @remarks
   * The end time of the policy validity period for the access control policy. The value is a UNIX timestamp in seconds. The value must be on the hour or half hour and must be at least 30 minutes later than the start time.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The most recent time of hits. The value is in the format of a UNIX timestamp in seconds.
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
   * The supported IP address version. Valid values:
   * 
   * @example
   * 6
   */
  ipVersion?: number;
  /**
   * @remarks
   * The time when the policy was last modified. The value is a UNIX timestamp in seconds, which is the number of seconds that have elapsed since January 1, 1970 (UTC).
   * 
   * @example
   * 1761062400
   */
  modifyTime?: number;
  /**
   * @remarks
   * The priority of the access control policy.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The security protocol type of the traffic in the access control policy. Valid values:
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * The enabled status of the access control policy. The policy is enabled by default after creation. Valid values:
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The collection of recurrence days for the policy validity period of the access control policy.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The recurrence end time of the policy validity period for the access control policy. Example: 23:30. The value must be on the hour or half hour and must be at least 30 minutes later than the recurrence start time.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The recurrence start time of the policy validity period for the access control policy. Example: 08:00. The value must be on the hour or half hour and must be at least 30 minutes earlier than the recurrence end time.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type of the policy validity period for the access control policy. Valid values:
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy. Valid values:
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
   * @example
   * ip
   */
  sourceGroupType?: string;
  /**
   * @remarks
   * The type of the source address in the access control policy. Valid values:
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The number of quota units consumed by the access control policy, which is the cumulative number of quota units consumed by each policy.
   * 
   * @example
   * 10000
   */
  spreadCnt?: number;
  /**
   * @remarks
   * The start time of the policy validity period for the access control policy. The value is a UNIX timestamp in seconds. The value must be on the hour or half hour and must be at least 30 minutes earlier than the end time.
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
   * The page number of the current page displayed in a paging query.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The maximum number of entries per page displayed in a paging query.
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
   * The request ID.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the access control policies.
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

