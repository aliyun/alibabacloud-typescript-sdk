// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatFirewallControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic.
   * 
   * Valid values:
   * 
   * *   **accept**: allows the traffic.
   * *   **drop**: denies the traffic.
   * *   **log**: monitors the traffic.
   * 
   * This parameter is required.
   * 
   * @example
   * log
   */
  aclAction?: string;
  /**
   * @remarks
   * The application types supported by the access control policy.
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
   * allow
   */
  description?: string;
  /**
   * @remarks
   * The destination port in the access control policy. Valid values:
   * 
   * *   If Proto is set to ICMP, DestPort is automatically left empty.
   * 
   * > If Proto is set to ICMP, access control does not take effect on the destination port.
   * 
   * *   If Proto is set to TCP, UDP, or ANY and DestPortType is set to group, DestPort is empty.
   * 
   * > If DestPortType is set to group, you do not need to specify the destination port number. All ports on which the access control policy takes effect are included in the destination port address book.
   * 
   * *   If Proto is set to TCP, UDP, or ANY and DestPortType is set to port, the value of DestPort is the destination port number.
   * 
   * @example
   * 80
   */
  destPort?: string;
  /**
   * @remarks
   * The name of the destination port address book in the access control policy.
   * 
   * > If DestPortType is set to group, you must specify the name of the destination port address book.
   * 
   * @example
   * my_port_group
   */
  destPortGroup?: string;
  /**
   * @remarks
   * The type of the destination port in the access control policy. Valid values:
   * 
   * *   **port**: port
   * *   **group**: port address book
   * 
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @remarks
   * The destination address in the access control policy.
   * 
   * Valid values:
   * 
   * *   If DestinationType is set to net, the value of this parameter is a CIDR block.
   * 
   *     Example: 1.2.XX.XX/24
   * 
   * *   If DestinationType is set to group, the value of this parameter is an address book.
   * 
   *     Example: db_group
   * 
   * *   If DestinationType is set to domain, the value of this parameter is a domain name.
   * 
   *     Example: \\*.aliyuncs.com
   * 
   * *   If DestinationType is set to location, the value of this parameter is a location.
   * 
   *     Example: ["BJ11", "ZB"]
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
   * *   **net**: CIDR block
   * *   **group**: address book
   * *   **domain**: domain name
   * 
   * This parameter is required.
   * 
   * @example
   * net
   */
  destinationType?: string;
  /**
   * @remarks
   * The direction of the traffic to which the access control policy applies. Valid value:
   * 
   * *   **out**: outbound.
   * 
   * This parameter is required.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The domain name resolution method of the access control policy. Valid values:
   * 
   * *   **0**: fully qualified domain name (FQDN)-based resolution
   * *   **1**: Domain Name System (DNS)-based dynamic resolution
   * *   **2**: FQDN and DNS-based dynamic resolution
   * 
   * @example
   * 0
   */
  domainResolveType?: number;
  /**
   * @remarks
   * The time when the access control policy stops taking effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of StartTime.
   * 
   * >  If RepeatType is set to Permanent, EndTime is left empty. If RepeatType is set to None, Daily, Weekly, or Monthly, this parameter must be specified.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The IP version supported by the access control policy. Valid values:
   * 
   * *   **4**: IPv4 (default)
   * 
   * @example
   * 4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The language of the content within the response.
   * 
   * Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
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
   * ngx-xxxxxxx
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The priority of the access control policy. The priority value starts from 1. A small priority value indicates a high priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  newOrder?: string;
  /**
   * @remarks
   * The protocol type in the access control policy.
   * 
   * Valid values:
   * 
   * *   ANY: all types of protocols.
   * *   TCP
   * *   UDP
   * *   ICMP
   * 
   * >  If the destination address is a threat intelligence address book of the domain name type or a cloud service address book, you can set Proto only to TCP and set ApplicationNameList to HTTP, HTTPS, SMTP, SMTPS, or SSL.
   * 
   * This parameter is required.
   * 
   * @example
   * ANY
   */
  proto?: string;
  /**
   * @remarks
   * Specifies whether to enable the access control policy. By default, an access control policy is enabled after it is created. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The days of a week or of a month on which the access control policy takes effect.
   * 
   * *   If RepeatType is set to `Permanent`, `None`, or `Daily`, RepeatDays is left empty. Example: [].
   * *   If RepeatType is set to Weekly, RepeatDays must be specified. Example: [0, 6].
   * 
   * >  If RepeatType is set to Weekly, the fields in the value of RepeatDays cannot be repeated.
   * 
   * *   If RepeatType is set to `Monthly`, RepeatDays must be specified. Example: [1, 31].
   * 
   * >  If RepeatType is set to Monthly, the fields in the value of RepeatDays cannot be repeated.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The point in time when the recurrence ends. Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of RepeatStartTime.
   * 
   * >  If RepeatType is set to Permanent or None, RepeatEndTime is left empty. If RepeatType is set to Daily, Weekly, or Monthly, this parameter must be specified.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The point in time when the recurrence starts. Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of RepeatEndTime.
   * 
   * >  If RepeatType is set to Permanent or None, RepeatStartTime is left empty. If RepeatType is set to Daily, Weekly, or Monthly, this parameter must be specified.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type for the access control policy to take effect. Valid values:
   * 
   * *   **Permanent** (default): The policy always takes effect.
   * *   **None**: The policy takes effect for only once.
   * *   **Daily**: The policy takes effect on a daily basis.
   * *   **Weekly**: The policy takes effect on a weekly basis.
   * *   **Monthly**: The policy takes effect on a monthly basis.
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy.
   * 
   * Valid values:
   * 
   * *   If **SourceType** is set to `net`, the value of Source is a CIDR block.
   * 
   *     Example: 10.2.4.0/24
   * 
   * *   If **SourceType** is set to `group`, the value of this parameter must be an address book name.
   * 
   *     Example: db_group
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
   * *   **net**: source CIDR block
   * *   **group**: source address book
   * 
   * This parameter is required.
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The time when the access control policy starts to take effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of EndTime.
   * 
   * >  If RepeatType is set to Permanent, StartTime is left empty. If RepeatType is set to None, Daily, Weekly, or Monthly, this parameter must be specified.
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

