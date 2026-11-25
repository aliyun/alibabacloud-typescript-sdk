// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatFirewallControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on traffic in the access control policy. Valid values:
   * - **accept**: Allows the traffic.
   * - **drop**: Denies the traffic.
   * - **log**: Monitors the traffic.
   * 
   * This parameter is required.
   * 
   * @example
   * log
   */
  aclAction?: string;
  /**
   * @remarks
   * The list of application types supported by the access control policy.
   * 
   * This parameter is required.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * The description of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * Allow traffic
   */
  description?: string;
  /**
   * @remarks
   * The destination port in the access control policy. Valid values:
   * - If the protocol is ICMP, leave this parameter empty.
   * > When the protocol is ICMP, access control based on the destination port is not supported.
   * - If the protocol is TCP, UDP, or ANY, and the destination Protocol Type (DestPortType) is group, leave this parameter empty.
   * > When the destination Protocol Type is set to group (destination port address book), you do not need to specify a destination port number. All ports managed by this access control policy are included in the destination port address book.
   * - If the protocol is TCP, UDP, or ANY, and the destination Protocol Type (DestPortType) is port, set this parameter to the destination port number.
   * 
   * @example
   * 80
   */
  destPort?: string;
  /**
   * @remarks
   * The name of the destination port address book in the access control policy.
   * > If DestPortType is set to group, you must specify the name of the destination port address book.
   * 
   * @example
   * my_port_group
   */
  destPortGroup?: string;
  /**
   * @remarks
   * The type of the destination port in the access control policy. Valid values:
   * - **port**: port.
   * - **group**: port address book.
   * 
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @remarks
   * The destination address in the access control policy. Valid values:
   * - If DestinationType is set to net, Destination is the destination CIDR block. Example: 1.2.XX.XX/24.
   * - If DestinationType is set to group, Destination is the name of the destination address book. Example: db_group.
   * - If DestinationType is set to domain, Destination is the destination domain name. Example: *.aliyuncs.com.
   * - If DestinationType is set to location, Destination is the destination region. Example: ["BJ11", "ZB"\].
   * 
   * This parameter is required.
   * 
   * @example
   * XX.XX.XX.XX/24
   */
  destination?: string;
  /**
   * @remarks
   * The type of the destination address in the access control policy. Valid values:
   * - **net**: destination CIDR block.
   * - **group**: destination address book.
   * - **domain**: destination domain name.
   * 
   * This parameter is required.
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
   * This parameter is required.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The domain name parse pattern of the access control policy. Valid values:
   * - **0**: FQDN-based resolution.
   * - **1**: DNS-based dynamic resolution.
   * - **2**: FQDN- and DNS-based dynamic resolution.
   * > If the domain name identification mode includes FQDN, only the TCP protocol is allowed. The application can be HTTP, HTTPS, SMTP, SMTPS, SSL, IMAPS, or POPS.
   * 
   * @example
   * 0
   */
  domainResolveType?: number;
  /**
   * @remarks
   * The end time of the Policy Validity Period of the access control policy. The value is in the UNIX timestamp format in seconds. The time must be on the hour or half-hour, and must be at least 30 minutes later than the start time.
   * > If RepeatType is set to Permanent, EndTime is empty. If RepeatType is set to None, Daily, Weekly, or Monthly, EndTime must be specified, and you must configure the Settings for the end time.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The IP address version. Valid values:
   * - **4**: IPv4 (default).
   * 
   * @example
   * 4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * - **zh**: Chinese (default).
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The instance ID of the NAT gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-2vc2ustolqn6sr0******
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The priority of the access control policy. The priority value starts from 1 and increases sequentially. A smaller value indicates a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  newOrder?: string;
  /**
   * @remarks
   * The protocol type of the traffic in the access control policy. Valid values:
   * - ANY: all protocols.
   * - TCP
   * - UDP
   * - ICMP
   * > If the destination address is a threat intelligence address book or a cloud service address book of the domain name type, only the TCP protocol is allowed. The application can be HTTP, HTTPS, SMTP, SMTPS, or SSL.
   * 
   * This parameter is required.
   * 
   * @example
   * ANY
   */
  proto?: string;
  /**
   * @remarks
   * Specifies whether to enable the access control policy. By default, the policy is enabled after it is created. Valid values:
   * - **true**: Enables the access control policy.
   * - **false**: Does not enable the access control policy.
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The set of recurrence days for the Policy Validity Period of the access control policy.
   * - If RepeatType is set to `Permanent`, `None`, or `Daily`, RepeatDays is an empty set. Example: [].
   * - If RepeatType is set to Weekly, RepeatDays cannot be empty. Example: [0, 6].
   * > When RepeatType is set to Weekly, the values in RepeatDays cannot be duplicated.
   * - If RepeatType is set to `Monthly`, RepeatDays cannot be empty. Example: [1, 31].
   * > When RepeatType is set to Monthly, the values in RepeatDays cannot be duplicated.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The recurrence end time of the Policy Validity Period of the access control policy. Example: 23:30. The time must be on the hour or half-hour, and must be at least 30 minutes later than the recurrence start time.
   * > If RepeatType is set to Permanent or None, RepeatEndTime is empty. If RepeatType is set to Daily, Weekly, or Monthly, RepeatEndTime must be specified, and you must configure the Settings for the recurrence end time.
   * > The time format is HH:mm (24-hour clock). Example: 08:00 or 23:30.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The recurrence start time of the Policy Validity Period of the access control policy. Example: 08:00. The time must be on the hour or half-hour, and must be at least 30 minutes earlier than the recurrence end time.
   * > If RepeatType is set to Permanent or None, RepeatStartTime is empty. If RepeatType is set to Daily, Weekly, or Monthly, RepeatStartTime must be specified, and you must configure the Settings for the recurrence start time.
   * > The time format is HH:mm (24-hour clock). Example: 08:00 or 23:30.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type of the Policy Validity Period of the access control policy. Valid values:
   * - **Permanent**: always (default).
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
   * - If **SourceType** is set to `net`, Source is the source CIDR block. Example: 10.2.4.0/24.
   * - If **SourceType** is set to `group`, Source is the name of the source address book. Example: db_group.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.25/32
   */
  source?: string;
  /**
   * @remarks
   * The type of the source address in the access control policy. Valid values:
   * - **net**: source CIDR block.
   * - **group**: source address book.
   * 
   * This parameter is required.
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The start time of the Policy Validity Period of the access control policy. The value is in the UNIX timestamp format in seconds. The time must be on the hour or half-hour, and must be at least 30 minutes earlier than the end time.
   * > If RepeatType is set to Permanent, StartTime is empty. If RepeatType is set to None, Daily, Weekly, or Monthly, StartTime must be specified, and you must configure the Settings for the start time.
   * 
   * @example
   * 1694761200
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
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
      ipVersion: 'IpVersion',
      lang: 'Lang',
      natGatewayId: 'NatGatewayId',
      newOrder: 'NewOrder',
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
      applicationNameList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      destPort: 'string',
      destPortGroup: 'string',
      destPortType: 'string',
      destination: 'string',
      destinationType: 'string',
      direction: 'string',
      domainResolveType: 'number',
      endTime: 'number',
      ipVersion: 'string',
      lang: 'string',
      natGatewayId: 'string',
      newOrder: 'string',
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

