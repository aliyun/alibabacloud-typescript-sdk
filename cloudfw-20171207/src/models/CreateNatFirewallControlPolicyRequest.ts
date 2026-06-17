// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatFirewallControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on traffic that matches the access control policy.
   * 
   * Valid values:
   * 
   * - **accept**: Allows the traffic.
   * 
   * - **drop**: Drops the traffic.
   * 
   * - **log**: Logs the traffic.
   * 
   * This parameter is required.
   * 
   * @example
   * log
   */
  aclAction?: string;
  /**
   * @remarks
   * The list of applications to which the access control policy applies.
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
   * 放行流量
   */
  description?: string;
  /**
   * @remarks
   * The destination port for the traffic. The value of this parameter depends on the `Proto` and `DestPortType` parameters.
   * 
   * - If `Proto` is `ICMP`, leave this parameter empty.
   * 
   * > Access control cannot be configured based on the destination port for ICMP traffic.
   * 
   * - If the destination port type (`DestPortType`) is `group`, leave this parameter empty.
   * 
   * > If `DestPortType` is set to `group`, you do not need to specify a destination port because the required ports are defined in the selected port address book.
   * 
   * - If the protocol is TCP, UDP, or ANY and the destination port type (`DestPortType`) is `port`, specify the destination port number.
   * 
   * @example
   * 80
   */
  destPort?: string;
  /**
   * @remarks
   * The name of the destination port address book.
   * 
   * > This parameter is required if `DestPortType` is set to `group`.
   * 
   * @example
   * my_port_group
   */
  destPortGroup?: string;
  /**
   * @remarks
   * The type of the destination port.
   * 
   * - **port**: Port or port range
   * 
   * - **group**: Port address book
   * 
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @remarks
   * The destination address in the access control policy.
   * 
   * The value of this parameter varies based on the value of `DestinationType`:
   * 
   * - If `DestinationType` is `net`, set this parameter to the destination CIDR.
   * 
   *   Example: `1.2.XX.XX/24`
   * 
   * - If `DestinationType` is `group`, set this parameter to the name of the destination address book.
   * 
   *   Example: `db_group`
   * 
   * - If `DestinationType` is `domain`, set this parameter to the destination domain.
   * 
   *   Example: \\*.aliyuncs.com
   * 
   * - If `DestinationType` is `location`, set this parameter to the destination location.
   * 
   *   Example: ["BJ11", "ZB"]
   * 
   * This parameter is required.
   * 
   * @example
   * XX.XX.XX.XX/24
   */
  destination?: string;
  /**
   * @remarks
   * The type of the destination address in the access control policy.
   * 
   * Valid values:
   * 
   * - **net**: Destination CIDR
   * 
   * - **group**: Destination address book
   * 
   * - **domain**: Destination domain
   * 
   * This parameter is required.
   * 
   * @example
   * net
   */
  destinationType?: string;
  /**
   * @remarks
   * The traffic direction for the access control policy. Valid values:
   * 
   * - **out**: outbound traffic
   * 
   * This parameter is required.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The domain name resolution method. Valid values:
   * 
   * - **0**: FQDN-based resolution
   * 
   * - **1**: Dynamic DNS-based resolution
   * 
   * - **2**: FQDN-based and dynamic DNS-based resolution
   * 
   * > If the resolution method includes FQDN, you can set the protocol only to TCP. The supported applications are HTTP, HTTPS, SMTP, SMTPS, and SSL.
   * 
   * @example
   * 0
   */
  domainResolveType?: number;
  /**
   * @remarks
   * The end time of the policy\\"s validity period, specified as a Unix timestamp. The time must be on the hour or half-hour and be at least 30 minutes after the start time.
   * 
   * > This parameter is required if `RepeatType` is `None`, `Daily`, `Weekly`, or `Monthly`. If `RepeatType` is `Permanent`, leave this parameter empty.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The IP version for the access control policy. Valid values:
   * 
   * - **4** (default): IPv4
   * 
   * @example
   * 4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The language of the response messages.
   * 
   * Valid values:
   * 
   * - **zh**: Chinese (default)
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The instance ID of the NAT Gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-2vc2ustolqn6sr0******
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The priority of the access control policy. Values start from 1. A smaller value indicates a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  newOrder?: string;
  /**
   * @remarks
   * The protocol for the traffic in the access control policy.
   * 
   * Valid values:
   * 
   * - ANY: all protocols
   * 
   * - TCP
   * 
   * - UDP
   * 
   * - ICMP
   * 
   * > If the destination is a domain, a threat intelligence address book, or a cloud service address book, you can only set this parameter to `TCP`. The supported application types are HTTP, HTTPS, SMTP, SMTPS, and SSL.
   * 
   * This parameter is required.
   * 
   * @example
   * ANY
   */
  proto?: string;
  /**
   * @remarks
   * Specifies whether the access control policy is enabled. By default, policies are enabled upon creation. Valid values:
   * 
   * - **true**: Enables the policy.
   * 
   * - **false**: Disables the policy.
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The days of the week or month on which the policy recurs.
   * 
   * - If `RepeatType` is set to `Permanent`, `None`, or `Daily`, leave this parameter empty. Example: `[]`
   * 
   * - If `RepeatType` is `Weekly`, this parameter is required. Example: `[0, 6]`
   * 
   * > If `RepeatType` is `Weekly`, the values in `RepeatDays` must be unique.
   * 
   * - If `RepeatType` is `Monthly`, this parameter is required. Example: `[1, 31]`
   * 
   * > If `RepeatType` is `Monthly`, the values in `RepeatDays` must be unique.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The end time of the recurrence. The time must be on the hour or half-hour, and must be at least 30 minutes later than the start time.
   * 
   * > This parameter is required if `RepeatType` is set to `Daily`, `Weekly`, or `Monthly`. If `RepeatType` is `Permanent` or `None`, leave this parameter empty.
   * > The time is in the HH:mm format (24-hour). For example, `08:00` or `23:30`.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The start time of the recurrence. The time must be on the hour or half-hour, and must be at least 30 minutes earlier than the end time.
   * 
   * > This parameter is required if `RepeatType` is set to `Daily`, `Weekly`, or `Monthly`. If `RepeatType` is `Permanent` or `None`, leave this parameter empty.
   * > The time is in the HH:mm format (24-hour). For example, `08:00` or `23:30`.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type for the policy validity period. Valid values:
   * 
   * - **Permanent** (default): The policy is always active.
   * 
   * - **None**: The policy runs once for a specified duration.
   * 
   * - **Daily**: The policy recurs daily.
   * 
   * - **Weekly**: The policy recurs weekly within a specified time range.
   * 
   * - **Monthly**: The policy recurs monthly within a specified time range.
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy.
   * 
   * The value of this parameter varies based on the value of `SourceType`:
   * 
   * - If **SourceType** is `net`, set this parameter to the source CIDR.
   * 
   *   Example: 10.2.4.0/24
   * 
   * - If **SourceType** is `group`, set this parameter to the name of the source address book.
   * 
   *   Example: db_group
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.25/32
   */
  source?: string;
  /**
   * @remarks
   * The type of the source address in the access control policy.
   * 
   * Valid values:
   * 
   * - **net**: Source CIDR
   * 
   * - **group**: Source address book
   * 
   * This parameter is required.
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The start time of the policy\\"s validity period, specified as a Unix timestamp. The time must be on the hour or half-hour and be at least 30 minutes before the end time.
   * 
   * > This parameter is required if `RepeatType` is `None`, `Daily`, `Weekly`, or `Monthly`. If `RepeatType` is `Permanent`, leave this parameter empty.
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

