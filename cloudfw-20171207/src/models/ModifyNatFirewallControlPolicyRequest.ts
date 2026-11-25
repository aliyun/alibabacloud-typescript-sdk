// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNatFirewallControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on traffic in the access control policy. Valid values:
   * - **accept**: Allows the traffic.
   * - **drop**: Denies the traffic.
   * - **log**: Monitors the traffic.
   * 
   * @example
   * log
   */
  aclAction?: string;
  /**
   * @remarks
   * The UUID of the access control policy.
   * To delete an access control policy, you must provide the UUID of the policy. You can call the DescribeNatFirewallControlPolicy operation to obtain the UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 63ab1c02-926a-4d1b-9ef7-*****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The names of the applications.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * The description of the access control policy. Fuzzy match is supported.
   * > If you do not specify this parameter, the descriptions of all policies are queried.
   * 
   * @example
   * test description
   */
  description?: string;
  /**
   * @remarks
   * The destination port for traffic in the access control policy of the virtual private cloud (VPC) firewalls.
   * > Specify this parameter when **DestPortType** is set to `port`.
   * 
   * @example
   * 80
   */
  destPort?: string;
  /**
   * @remarks
   * The name of the destination port address book for traffic in the access control policy.
   * 
   * @example
   * my_dest_port_group
   */
  destPortGroup?: string;
  /**
   * @remarks
   * The type of the destination port for traffic in the access control policy. Valid values:
   * - **port**: port.
   * - **group**: port address book.
   * 
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @remarks
   * The destination address in the access control policy.
   * - If **DestinationType** is set to net, **Destination** is the destination CIDR block. Example: 1.2.3.4/24.
   * - If **DestinationType** is set to group, **Destination** is the name of the destination address book. Example: db_group.
   * - If **DestinationType** is set to domain, **Destination** is the destination domain name. Example: *.aliyuncs.com.
   * - If **DestinationType** is set to location, **Destination** is the destination region. For the region codes, see the following section. Example: ["BJ11", "ZB"\].
   * 
   * @example
   * x.x.x.x/32
   */
  destination?: string;
  /**
   * @remarks
   * The type of the destination address in the access control policy. Valid values:
   * - **net**: destination CIDR block.
   * - **group**: destination address book.
   * - **domain**: destination domain name.
   * - **location**: destination region.
   * 
   * @example
   * net
   */
  destinationType?: string;
  /**
   * @remarks
   * The traffic direction of the access control policy. Valid values:
   * - **out**: outbound traffic.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The domain name resolution method of the access control policy. Valid values:
   * - **0**: FQDN-based resolution.
   * - **1**: DNS-based dynamic resolution.
   * - **2**: FQDN and DNS-based dynamic resolution.
   * > If the domain name identification mode includes FQDN, only the TCP protocol is allowed. You can select HTTP, HTTPS, SMTP, SMTPS, SSL, IMAPS, or POPS as the application.
   * 
   * @example
   * 0
   */
  domainResolveType?: string;
  /**
   * @remarks
   * The end time of the policy validity period for the access control policy. Specify the time in the UNIX timestamp format (seconds). The time must be on the hour or half-hour, and must be at least 30 minutes later than the start time.
   * > If RepeatType is set to Permanent, EndTime is empty. If RepeatType is set to None, Daily, Weekly, or Monthly, EndTime must be specified.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-xxxxxx
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The type of the security protocol for traffic in the access control policy. Supported protocol types:
   * - **ANY**
   * - **TCP**
   * - **UDP**
   * - **ICMP**
   * > **ANY** indicates that the policy applies to all types of applications.
   * > If the destination address is a threat intelligence address book or a cloud service address book of the domain name type, you can set this parameter to TCP. If you select TCP, you can select HTTP, HTTPS, SMTP, SMTPS, or SSL as the application.
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * The status of the access control policy. Valid values:
   * - **true**: The policy is enabled.
   * - **false**: The policy is disabled.
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The set of recurrence days for the policy validity period of the access control policy.
   * - If RepeatType is set to `Permanent`, `None`, or `Daily`, RepeatDays is an empty set. Example: [].
   * - If RepeatType is set to Weekly, RepeatDays cannot be empty. Example: [0, 6].
   * > If RepeatType is set to Weekly, the values in RepeatDays must be unique.
   * - If RepeatType is set to `Monthly`, RepeatDays cannot be empty. Example: [1, 31].
   * > If RepeatType is set to Monthly, the values in RepeatDays must be unique.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The recurrence end time when the policy takes effect. Use the 24-hour time format HH:mm, such as 23:30. The time must be on the hour or half-hour, and must be at least 30 minutes later than the recurrence start time.
   * > If RepeatType is set to Permanent or None, RepeatEndTime is empty. If RepeatType is set to Daily, Weekly, or Monthly, RepeatEndTime must be specified.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The recurrence start time when the policy takes effect. Use the 24-hour time format HH:mm, such as 08:00. The time must be on the hour or half-hour, and must be at least 30 minutes earlier than the recurrence end time.
   * > If RepeatType is set to Permanent or None, RepeatStartTime is empty. If RepeatType is set to Daily, Weekly, or Monthly, RepeatStartTime must be specified.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type of the policy validity period for the access control policy. Valid values:
   * - **Permanent** (default): Always.
   * - **None**: Specified single time.
   * - **Daily**: Every day.
   * - **Weekly**: Every week.
   * - **Monthly**: Every month.
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy. Valid values:
   * - If **SourceType** is set to `net`, Source is the source CIDR block. Example: 10.2.XX.XX/24.
   * - If **SourceType** is set to `group`, Source is the name of the source address book. Example: db_group.
   * 
   * @example
   * 10.2.XX.XX/24
   */
  source?: string;
  /**
   * @remarks
   * The type of the source address in the access control policy. Valid values:
   * - **net**: source CIDR block.
   * - **group**: source address book.
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The start time of the policy validity period for the access control policy. Specify the time in the UNIX timestamp format (seconds). The time must be on the hour or half-hour, and must be at least 30 minutes earlier than the end time.
   * > If RepeatType is set to Permanent, StartTime is empty. If RepeatType is set to None, Daily, Weekly, or Monthly, StartTime must be specified.
   * 
   * @example
   * 1694761200
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      applicationNameList: 'ApplicationNameList',
      description: 'Description',
      destPort: 'DestPort',
      destPortGroup: 'DestPortGroup',
      destPortType: 'DestPortType',
      destination: 'Destination',
      destinationType: 'DestinationType',
      direction: 'Direction',
      domainResolveType: 'DomainResolveType',
      endTime: 'EndTime',
      lang: 'Lang',
      natGatewayId: 'NatGatewayId',
      proto: 'Proto',
      release: 'Release',
      repeatDays: 'RepeatDays',
      repeatEndTime: 'RepeatEndTime',
      repeatStartTime: 'RepeatStartTime',
      repeatType: 'RepeatType',
      source: 'Source',
      sourceType: 'SourceType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      aclUuid: 'string',
      applicationNameList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      destPort: 'string',
      destPortGroup: 'string',
      destPortType: 'string',
      destination: 'string',
      destinationType: 'string',
      direction: 'string',
      domainResolveType: 'string',
      endTime: 'number',
      lang: 'string',
      natGatewayId: 'string',
      proto: 'string',
      release: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'number' },
      repeatEndTime: 'string',
      repeatStartTime: 'string',
      repeatType: 'string',
      source: 'string',
      sourceType: 'string',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applicationNameList)) {
      $dara.Model.validateArray(this.applicationNameList);
    }
    if(Array.isArray(this.repeatDays)) {
      $dara.Model.validateArray(this.repeatDays);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

