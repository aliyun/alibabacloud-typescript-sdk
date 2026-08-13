// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallControlPolicyResponseBodyPolicys extends $dara.Model {
  /**
   * @remarks
   * The action (settings) that Cloud Firewall performs on the traffic in the access control policy of the virtual private cloud (VPC) firewall. Valid values:
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The unique identity ID of the access control policy of the virtual private cloud (VPC) firewall.
   * 
   * @example
   * 4037fbf7-3e39-4634-92a4-d0155247****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The ID of the application with traffic settings in the access control policy of the virtual private cloud (VPC) firewall.
   * 
   * @example
   * 10**
   */
  applicationId?: string;
  /**
   * @remarks
   * The application type supported by the access control policy of the virtual private cloud (VPC) firewall. Use ApplicationNameList instead. Valid values:
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
   * The time when the policy was created. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1761062400
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the access control policy of the virtual private cloud (VPC) firewall.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination port of the traffic in the access control policy of the virtual private cloud (VPC) firewall.
   * 
   * @example
   * 80
   */
  destPort?: string;
  /**
   * @remarks
   * The name of the destination port address book for the traffic in the access control policy of the virtual private cloud (VPC) firewall.
   * 
   * @example
   * my_port_group
   */
  destPortGroup?: string;
  /**
   * @remarks
   * The details of the destination port address book in the access control policy of the virtual private cloud (VPC) firewall.
   */
  destPortGroupPorts?: string[];
  /**
   * @remarks
   * The destination port type for the traffic in the access control policy of the virtual private cloud (VPC) firewall. Valid values:
   * 
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @remarks
   * The destination address in the access control policy of the virtual private cloud (VPC) firewall. Valid values:
   * 
   * @example
   * 192.0.XX.XX/24
   */
  destination?: string;
  /**
   * @remarks
   * The CIDR block information in the destination address book of the access control policy of the virtual private cloud (VPC) firewall.
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
   * The destination address type in the access control policy of the virtual private cloud (VPC) firewall. Valid values:
   * 
   * @example
   * net
   */
  destinationType?: string;
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
   * The end time of the policy validity period for the access control policy. The value is a UNIX timestamp in seconds. The time must be on the hour or half hour and must be at least 30 minutes later than the start time.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The most recent time of hits. The value is a UNIX timestamp in seconds format.
   * 
   * @example
   * 1579261141
   */
  hitLastTime?: number;
  /**
   * @remarks
   * The number of hits for the access control policy of the virtual private cloud (VPC) firewall.
   * 
   * @example
   * 100
   */
  hitTimes?: number;
  /**
   * @remarks
   * The UID of a member account of the current Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The time when the policy was modified. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1761062400
   */
  modifyTime?: number;
  /**
   * @remarks
   * The priority of the access control policy of the virtual private cloud (VPC) firewall.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The protocol type of the traffic in the access control policy of the virtual private cloud (VPC) firewall. Valid values:
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
   * The recurrence end time of the policy validity period. The value is in the HH:mm format using a 24-hour clock, such as 23:00.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The recurrence start time of the policy validity period. The value is in the HH:mm format using a 24-hour clock, such as 08:00.
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
   * The source address in the access control policy of the virtual private cloud (VPC) firewall. Valid values:
   * 
   * @example
   * 192.0.XX.XX/24
   */
  source?: string;
  /**
   * @remarks
   * The details of the source address book in the access control policy of the virtual private cloud (VPC) firewall.
   */
  sourceGroupCidrs?: string[];
  /**
   * @remarks
   * The type of the source address book in the access control policy. The only valid value is **ip**, which indicates an IP address book that contains one or more CIDR blocks.
   * 
   * @example
   * ip
   */
  sourceGroupType?: string;
  /**
   * @remarks
   * The source address type in the access control policy of the virtual private cloud (VPC) firewall. Valid values:
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The number of access control policy specifications consumed, which is the cumulative number of specifications consumed by each policy.
   * 
   * @example
   * 10000
   */
  spreadCnt?: number;
  /**
   * @remarks
   * The start time of the policy validity period for the access control policy. The value is a UNIX timestamp in seconds. The time must be on the hour or half hour and must be at least 30 minutes earlier than the end time.
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
      domainResolveType: 'DomainResolveType',
      endTime: 'EndTime',
      hitLastTime: 'HitLastTime',
      hitTimes: 'HitTimes',
      memberUid: 'MemberUid',
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
      domainResolveType: 'string',
      endTime: 'number',
      hitLastTime: 'number',
      hitTimes: 'number',
      memberUid: 'string',
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

export class DescribeVpcFirewallControlPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the access control policies of the virtual private cloud (VPC) firewall.
   */
  policys?: DescribeVpcFirewallControlPolicyResponseBodyPolicys[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of access control policies for the virtual private cloud (VPC) firewall.
   * 
   * @example
   * 20
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      policys: 'Policys',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policys: { 'type': 'array', 'itemType': DescribeVpcFirewallControlPolicyResponseBodyPolicys },
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

