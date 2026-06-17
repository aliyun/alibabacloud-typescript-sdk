// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNatFirewallControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that you want to perform on traffic. Valid values:
   * 
   * - **accept**: allows the traffic.
   * 
   * - **drop**: denies the traffic.
   * 
   * - **log**: monitors the traffic.
   * 
   * @example
   * log
   */
  aclAction?: string;
  /**
   * @remarks
   * The UUID of the access control policy.
   * 
   * To modify an access control policy, you must provide the UUID of the policy. You can call the DescribeNatFirewallControlPolicy operation to query the UUIDs of access control policies.
   * 
   * This parameter is required.
   * 
   * @example
   * 63ab1c02-926a-4d1b-9ef7-*****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The application names.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * The description of the access control policy. Fuzzy match is supported.
   * 
   * > If you do not specify this parameter, the descriptions of all policies are queried.
   * 
   * @example
   * test description
   */
  description?: string;
  /**
   * @remarks
   * The destination port in the access control policy.
   * 
   * > This parameter is required when you set **DestPortType** to `port`.
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
   * my_dest_port_group
   */
  destPortGroup?: string;
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
   * The destination address in the access control policy.
   * 
   * - If **DestinationType** is `net`, specify a destination CIDR block. Example: `1.2.3.4/24`.
   * 
   * - If **DestinationType** is `group`, specify a destination address book. Example: `db_group`.
   * 
   * - If **DestinationType** is `domain`, specify a destination domain name. Example: `*.aliyuncs.com`.
   * 
   * - If **DestinationType** is `location`, specify a destination location. For more information about location codes, see AddIpamPoolCidr. Example: `["BJ11", "ZB"]`.
   * 
   * @example
   * x.x.x.x/32
   */
  destination?: string;
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
   * - **location**: destination location
   * 
   * @example
   * net
   */
  destinationType?: string;
  /**
   * @remarks
   * The direction of the traffic to which the access control policy applies. Valid values:
   * 
   * - **out**: outbound traffic
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The DNS resolution method of the domain name. Valid values:
   * 
   * - **0**: FQDN
   * 
   * - **1**: dynamic DNS
   * 
   * - **2**: FQDN and dynamic DNS
   * 
   * > If the domain name is resolved in FQDN mode, you can select only the TCP protocol. The supported applications are HTTP, HTTPS, SMTP, SMTPS, SSL, IMAPS, and POPS.
   * 
   * @example
   * 0
   */
  domainResolveType?: string;
  /**
   * @remarks
   * The end time of the effective period for the access control policy. The time is a Unix timestamp. The time must be on the hour or half-hour and be at least 30 minutes after the start time.
   * 
   * > If `RepeatType` is Permanent, `EndTime` is empty. If `RepeatType` is None, Daily, Weekly, or Monthly, `EndTime` is required.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
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
   * The protocol type in the access control policy. Valid values:
   * 
   * - **ANY**
   * 
   * - **TCP**
   * 
   * - **UDP**
   * 
   * - **ICMP**
   * 
   * > **ANY** indicates that the policy applies to all protocol types.
   * 
   * > If the destination is a domain name-based address book that contains a threat intelligence address book or a cloud service address book, you can select TCP. If you select TCP, you can select HTTP, HTTPS, SMTP, SMTPS, or SSL.
   * 
   * @example
   * TCP
   */
  proto?: string;
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
   * The days of a week or a month on which the policy recurs.
   * 
   * - If you set **RepeatType** to `Permanent`, `None`, or `Daily`, leave this parameter empty. Example: [].
   * 
   * - If you set **RepeatType** to `Weekly`, this parameter is required. Example: [0, 6].
   * 
   * > When RepeatType is set to Weekly, RepeatDays does not allow duplicates.
   * 
   * - When RepeatType is `Monthly`, RepeatDays cannot be empty. For example: [1, 31]
   * 
   * > When RepeatType is set to Monthly, RepeatDays cannot contain duplicate values.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The end time of the policy\\"s recurrence period. The time must be in the 24-hour HH:mm format, such as 23:30, be on the hour or half-hour, and be at least half an hour later than the recurrence start time.
   * 
   * > When RepeatType is Permanent or None, RepeatEndTime is empty. When RepeatType is Daily, Weekly, or Monthly, you must set RepeatEndTime to specify the end time for the repetition.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The start time of the repeat cycle. Use the 24-hour HH:mm format, such as 08:00. The time must be on the hour or half-hour and at least 30 minutes before the repeat end time.
   * 
   * > This parameter is not used if `RepeatType` is set to `Permanent` or `None`. This parameter is required if `RepeatType` is set to `Daily`, `Weekly`, or `Monthly`.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type for the policy to take effect. Valid values:
   * 
   * - **Permanent** (default): The policy is always in effect.
   * 
   * - **None**: The policy takes effect for a specified period of time.
   * 
   * - **Daily**: The policy takes effect daily.
   * 
   * - **Weekly**: The policy takes effect weekly.
   * 
   * - **Monthly**: The policy takes effect monthly.
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy. Valid values:
   * 
   * - When **SourceType** is `net`, Source is the source CIDR address, for example, 10.2.XX.XX/24.
   * 
   * - If **SourceType** is `group`, specify a source address book. Example: `db_group`.
   * 
   * @example
   * 10.2.XX.XX/24
   */
  source?: string;
  /**
   * @remarks
   * The type of the source address in the access control policy. Valid values:
   * 
   * - **net**: source CIDR block
   * 
   * - **group**: source address book
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The start time of the effective period for the access control policy is specified in the Unix timestamp format. It must be on the hour or half-hour and at least half an hour earlier than the end time.
   * 
   * > When RepeatType is Permanent, StartTime is empty. When RepeatType is None, Daily, Weekly, or Monthly, StartTime is required.
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

